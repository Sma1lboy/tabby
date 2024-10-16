import { CancellationToken, Connection, Location, Range, TextDocuments } from "vscode-languageserver";
import type { Feature } from "../feature";
import {
  ChatEditDocumentTooLongError,
  ChatEditMutexError,
  ChatFeatureNotAvailableError,
  ServerCapabilities,
  SmartApplyCodeParams,
  SmartApplyCodeRequest,
} from "../protocol";
import { Configurations } from "../config";
import { TabbyApiClient } from "../http/tabbyApiClient";
import cryptoRandomString from "crypto-random-string";
import { getLogger } from "../logger";
import { readResponseStream } from "./utils";
import { TextDocument } from "vscode-languageserver-textdocument";
import { getSmartApplyRange } from "./SmartRange";
import { Edit } from "./inlineEdit";
const logger = getLogger("ChatEditProvider");

export class SmartApplyFeature implements Feature {
  private lspConnection: Connection | undefined = undefined;
  private currentEdit: Edit | undefined = undefined;
  private mutexAbortController: AbortController | undefined = undefined;
  constructor(
    private readonly configurations: Configurations,
    private readonly tabbyApiClient: TabbyApiClient,
    private readonly documents: TextDocuments<TextDocument>,
  ) {}

  initialize(connection: Connection): ServerCapabilities | Promise<ServerCapabilities> {
    this.lspConnection = connection;
    connection.onRequest(SmartApplyCodeRequest.type, async (params, token) => {
      return this.provideSmartApplyEdit(params, token);
    });

    return {};
  }
  initialized?(): void | Promise<void> {
    //nothing
  }
  shutdown?(): void | Promise<void> {
    //nothing
  }

  async provideSmartApplyEdit(params: SmartApplyCodeParams, token: CancellationToken): Promise<boolean> {
    logger.info("Getting document");
    const document = this.documents.get(params.location.uri);
    if (!document) {
      logger.info("Document not found, returning false");
      return false;
    }
    if (!this.lspConnection) {
      logger.info("LSP connection lost.");
      return false;
    }

    if (this.mutexAbortController && !this.mutexAbortController.signal.aborted) {
      logger.warn("Another smart edit is already in progress");
      throw {
        name: "ChatEditMutexError",
        message: "Another smart edit is already in progress",
      } as ChatEditMutexError;
    }
    this.mutexAbortController = new AbortController();
    logger.info("mutex abort status: " + (this.mutexAbortController === undefined));
    token.onCancellationRequested(() => this.mutexAbortController?.abort());

    let applyRange = getSmartApplyRange(document, params.applyCode);
    //if cannot find range, lets use backend LLMs
    if (!applyRange) {
      if (!this.tabbyApiClient.isChatApiAvailable) {
        return false;
      }
      applyRange = await provideSmartApplyLineRange(
        document,
        params.applyCode,
        this.tabbyApiClient,
        this.configurations,
      );
    }

    if (!applyRange) {
      return false;
    }

    try {
      // const endPosition = applyRange.range.end;

      // const currentLineText = document.getText({
      //   start: { line: endPosition.line, character: 0 },
      //   end: endPosition,
      // });

      // const indentation = currentLineText.match(/^\s*/)![0];

      // const newText =
      //   params.applyCode
      //     .split("\n")
      //     .map((line) => indentation + line)
      //     .join("\n") + "\n";

      // const newLinePosition: Position = {
      //   line: endPosition.line + 1,
      //   character: 0,
      // };
      // const edit: TextEdit = {
      //   range: {
      //     start: newLinePosition,
      //     end: newLinePosition,
      //   },
      //   newText: newText,
      // };

      // const workspaceEdit: WorkspaceEdit = {
      //   changes: {
      //     [document.uri]: [edit],
      //   },
      // };

      // const applyWorkspaceEditParams: ApplyWorkspaceEditParams = {
      //   label: "Smart Apply Edit",
      //   edit: workspaceEdit,
      // };

      // const revealEditorRangeParams: RevealEditorRangeParams = {
      //   range: edit.range,
      //   revealType: TextEditorRevealType.InCenterIfOutsideViewport,
      // };

      // await revealEditorRange(revealEditorRangeParams, this.lspConnection);
      // const editResult = await applyWorkspaceEdit(applyWorkspaceEditParams, this.lspConnection);

      // this.logger.info(`Workspace edit applied: ${editResult}`);
      // return editResult;

      logger.info("insert start: " + applyRange.range.start.line);
      logger.info("insert end: " + applyRange.range.end.line);

      await provideSmartApplyEditLLM(
        { uri: params.location.uri, range: applyRange.range },
        params.applyCode,
        applyRange.action === "insert" ? true : false,
        document,
        this.lspConnection,
        this.tabbyApiClient,
        this.configurations,
        this.mutexAbortController,
        () => {
          this.mutexAbortController = undefined;
          this.currentEdit = undefined;
        },
      );
      return true;
    } catch (error) {
      logger.error("Error applying smart edit:", error);
      return false;
    } finally {
      logger.info("Resetting mutex abort controller");
      this.mutexAbortController = undefined;
    }
  }
}

export async function provideSmartApplyLineRange(
  document: TextDocument,
  applyCodeBlock: string,
  tabbyApiClient: TabbyApiClient,
  configurations: Configurations,
): Promise<{ range: Range; action: "insert" | "replace" } | undefined> {
  if (!document) {
    return undefined;
  }
  if (!tabbyApiClient.isChatApiAvailable()) {
    throw {
      name: "ChatFeatureNotAvailableError",
      message: "Chat feature not available",
    } as ChatFeatureNotAvailableError;
  }

  const documentText = document
    .getText()
    .split("\n")
    .map((line, idx) => `${idx + 1} | ${line}`)
    .join("\n");

  const config = configurations.getMergedConfig();
  const promptTemplate = config.chat.provideSmartApplyLineRange.promptTemplate;

  const messages: { role: "user"; content: string }[] = [
    {
      role: "user",
      content: promptTemplate.replace(/{{document}}|{{applyCode}}/g, (pattern: string) => {
        switch (pattern) {
          case "{{document}}":
            return documentText;
          case "{{applyCode}}":
            return applyCodeBlock;
          default:
            return "";
        }
      }),
    },
  ];

  try {
    const readableStream = await tabbyApiClient.fetchChatStream({
      messages,
      model: "",
      stream: true,
    });

    if (!readableStream) {
      return undefined;
    }

    let response = "";
    for await (const chunk of readableStream) {
      response += chunk;
    }

    const regex = /<GENERATEDCODE>(.*?)<\/GENERATEDCODE>/s;
    const match = response.match(regex);
    if (match && match[1]) {
      response = match[1].trim();
    }

    const range = response.split("-");
    if (range.length !== 2) {
      return undefined;
    }

    const startLine = parseInt(range[0] ?? "0", 10) - 1;
    const endLine = parseInt(range[1] ?? "0", 10) - 1;

    return {
      range: {
        start: { line: startLine < 0 ? 0 : startLine, character: 0 },
        end: { line: endLine < 0 ? 0 : endLine, character: Number.MAX_SAFE_INTEGER },
      },
      action: startLine == endLine ? "insert" : "replace",
    };
  } catch (error) {
    return undefined;
  }
}

export async function provideSmartApplyEditLLM(
  location: Location,
  applyCode: string,
  insertMode: boolean,
  document: TextDocument,
  lspConnection: Connection,
  tabbyApiClient: TabbyApiClient,
  configurations: Configurations,
  mutexAbortController: AbortController,
  onResetMutex: () => void,
): Promise<boolean> {
  if (!document) {
    logger.warn("Document not found");
    return false;
  }
  if (!lspConnection) {
    logger.warn("LSP connection failed");
    return false;
  }

  if (!tabbyApiClient.isChatApiAvailable()) {
    throw {
      name: "ChatFeatureNotAvailableError",
      message: "Chat feature not available",
    } as ChatFeatureNotAvailableError;
  }

  const config = configurations.getMergedConfig();
  const documentText = document.getText();
  const selection = {
    start: document.offsetAt(location.range.start),
    end: document.offsetAt(location.range.end),
  };
  const selectedDocumentText = documentText.substring(selection.start, selection.end);

  logger.info("current selectedDoc: " + selectedDocumentText);

  if (selection.end - selection.start > config.chat.edit.documentMaxChars) {
    throw { name: "ChatEditDocumentTooLongError", message: "Document too long" } as ChatEditDocumentTooLongError;
  }

  const presetConfig = config.chat.edit.presetCommands["/smartApply"];
  if (!presetConfig) {
    return false;
  }
  const promptTemplate = presetConfig.promptTemplate;

  // Extract the selected text and the surrounding context
  let documentPrefix = documentText.substring(0, selection.start);
  let documentSuffix = documentText.substring(selection.end);
  if (documentText.length > config.chat.edit.documentMaxChars) {
    const charsRemain = config.chat.edit.documentMaxChars - selectedDocumentText.length;
    if (documentPrefix.length < charsRemain / 2) {
      documentSuffix = documentSuffix.substring(0, charsRemain - documentPrefix.length);
    } else if (documentSuffix.length < charsRemain / 2) {
      documentPrefix = documentPrefix.substring(documentPrefix.length - charsRemain + documentSuffix.length);
    } else {
      documentPrefix = documentPrefix.substring(documentPrefix.length - charsRemain / 2);
      documentSuffix = documentSuffix.substring(0, charsRemain / 2);
    }
  }

  const messages: { role: "user"; content: string }[] = [
    {
      role: "user",
      content: promptTemplate.replace(
        /{{document}}|{{code}}|{{lineRange}}|{{indentForTheFirstLine}}|{{indent}}/g,
        (pattern: string) => {
          switch (pattern) {
            case "{{document}}":
              return selectedDocumentText;
            case "{{code}}":
              return applyCode || "";
            case "{{lineRange}}":
              return `${location.range.start.line + 1}-${location.range.end.line + 1}`;
            default:
              return "";
          }
        },
      ),
    },
  ];

  try {
    const readableStream = await tabbyApiClient.fetchChatStream({
      messages,
      model: "",
      stream: true,
    });

    if (!readableStream) {
      return false;
    }
    logger.info("mutex status in provideSmartApplyEditLLM: " + (mutexAbortController === undefined));
    const editId = "tabby-" + cryptoRandomString({ length: 6, type: "alphanumeric" });
    const currentEdit: Edit = {
      id: editId,
      location: location,
      languageId: document.languageId,
      originalText: selectedDocumentText,
      editedRange: insertMode
        ? { start: location.range.start, end: location.range.end }
        : { start: location.range.start, end: location.range.end },
      editedText: "",
      comments: "",
      buffer: "",
      state: "editing",
    };

    await readResponseStream(
      readableStream,
      lspConnection,
      currentEdit,
      mutexAbortController,
      onResetMutex,
      config.chat.edit.responseDocumentTag,
      config.chat.edit.responseCommentTag,
    );

    return true;
  } catch (error) {
    return false;
  }
}
