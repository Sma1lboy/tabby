import type { components as TabbyApiComponents } from "tabby-openapi/compatible";
import type { ConfigData } from "../config/type";
import path from "path";
import hashObject from "object-hash";
import { splitLines, isBlank, regOnlyAutoClosingCloseChars } from "../utils/string";
import { getLogger } from "../logger";

export type CompletionRequest = {
  filepath: string;
  language: string;
  text: string;
  position: number;
  indentation?: string;
  clipboard?: string;
  manually?: boolean;
  workspace?: string;
  git?: {
    root: string;
    remotes: {
      name: string;
      url: string;
    }[];
  };
  declarations?: Declaration[];
  relevantSnippetsFromChangedFiles?: CodeSnippet[];
  relevantSnippetsFromOpenedFiles?: CodeSnippet[];
  autoCompleteWidgetItem?: string;
};

export type Declaration = {
  filepath: string;
  text: string;
  offset?: number;
};

export type CodeSnippet = {
  filepath: string;
  offset: number;
  text: string;
  score: number;
};

function isAtLineEndExcludingAutoClosedChar(suffix: string) {
  return suffix.trimEnd().match(regOnlyAutoClosingCloseChars);
}

export class CompletionContext {
  filepath: string;
  language: string;
  indentation?: string;
  text: string;
  position: number;

  prefix: string;
  suffix: string;
  prefixLines: string[];
  suffixLines: string[];
  currentLinePrefix: string;
  currentLineSuffix: string;

  clipboard: string;

  workspace?: string;
  git?: {
    root: string;
    remotes: {
      name: string;
      url: string;
    }[];
  };

  declarations?: Declaration[];
  relevantSnippetsFromChangedFiles?: CodeSnippet[];
  snippetsFromOpenedFiles?: CodeSnippet[];
  // "default": the cursor is at the end of the line
  // "fill-in-line": the cursor is not at the end of the line, except auto closed characters
  //   In this case, we assume the completion should be a single line, so multiple lines completion will be dropped.
  mode: "default" | "fill-in-line";
  hash: string;

  autoCompleteWidgetItem?: string;

  constructor(request: CompletionRequest) {
    let modifiedText = request.text;
    let modifiedPosition = request.position;

    if (request.autoCompleteWidgetItem) {
      const preText = request.text.slice(0, request.position);
      const lastWordMatch = preText.match(/\w+$/);

      if (lastWordMatch) {
        const lastWord = lastWordMatch[0];
        if (request.autoCompleteWidgetItem.startsWith(lastWord)) {
          modifiedText =
            preText.slice(0, -lastWord.length) + request.autoCompleteWidgetItem + request.text.slice(request.position);
          modifiedPosition = request.position - lastWord.length + request.autoCompleteWidgetItem.length;
        } else if (lastWord.length >= request.autoCompleteWidgetItem.length) {
          modifiedText = preText + " " + request.autoCompleteWidgetItem + request.text.slice(request.position);
          modifiedPosition = request.position + 1 + request.autoCompleteWidgetItem.length;
        }
      } else {
        modifiedText = preText + request.autoCompleteWidgetItem + request.text.slice(request.position);
        modifiedPosition = request.position + request.autoCompleteWidgetItem.length;
      }
    }

    this.filepath = request.filepath;
    this.language = request.language;
    this.text = modifiedText;
    this.position = modifiedPosition;
    this.indentation = request.indentation;

    this.prefix = this.text.slice(0, this.position);
    this.suffix = this.text.slice(this.position);

    this.prefixLines = splitLines(this.prefix);
    this.suffixLines = splitLines(this.suffix);
    this.currentLinePrefix = this.prefixLines[this.prefixLines.length - 1] ?? "";
    this.currentLineSuffix = this.suffixLines[0] ?? "";
    this.clipboard = request.clipboard?.trim() ?? "";
    this.workspace = request.workspace;
    this.git = request.git;
    this.declarations = request.declarations;
    this.relevantSnippetsFromChangedFiles = request.relevantSnippetsFromChangedFiles;
    this.snippetsFromOpenedFiles = request.relevantSnippetsFromOpenedFiles;

    const lineEnd = isAtLineEndExcludingAutoClosedChar(this.currentLineSuffix);
    this.mode = lineEnd ? "default" : "fill-in-line";
    this.hash = hashObject({
      filepath: this.filepath,
      language: this.language,
      prefix: this.prefix,
      currentLineSuffix: lineEnd ? "" : this.currentLineSuffix,
      nextLines: this.suffixLines.slice(1).join(""),
      position: this.position,
      clipboard: this.clipboard,
      declarations: this.declarations,
      relevantSnippetsFromChangedFiles: this.relevantSnippetsFromChangedFiles,
    });
  }
  // is valid for completion.
  isValid() {
    return !isBlank(this.prefix);
  }

  // Generate a CompletionContext based on this CompletionContext.
  // Simulate as if the user input new text based on this CompletionContext.
  forward(delta: string) {
    return new CompletionContext({
      filepath: this.filepath,
      language: this.language,
      text: this.text.substring(0, this.position) + delta + this.text.substring(this.position),
      position: this.position + delta.length,
      indentation: this.indentation,
      workspace: this.workspace,
      git: this.git,
      declarations: this.declarations,
      relevantSnippetsFromChangedFiles: this.relevantSnippetsFromChangedFiles,
    });
  }

  // Build segments for TabbyApi
  buildSegments(config: ConfigData["completion"]["prompt"]): TabbyApiComponents["schemas"]["Segments"] {
    // prefix && suffix
    const prefix = this.prefixLines.slice(Math.max(this.prefixLines.length - config.maxPrefixLines, 0)).join("");
    const suffix = this.suffixLines.slice(0, config.maxSuffixLines).join("");

    // filepath && git_url
    let relativeFilepathRoot: string | undefined = undefined;
    let filepath: string | undefined = undefined;
    let gitUrl: string | undefined = undefined;
    if (this.git && this.git.remotes.length > 0) {
      // find remote url: origin > upstream > first
      const remote =
        this.git.remotes.find((remote) => remote.name === "origin") ||
        this.git.remotes.find((remote) => remote.name === "upstream") ||
        this.git.remotes[0];
      if (remote) {
        relativeFilepathRoot = this.git.root;
        gitUrl = remote.url;
      }
    }
    // if relativeFilepathRoot is not set by git context, use path relative to workspace
    if (!relativeFilepathRoot && this.workspace) {
      relativeFilepathRoot = this.workspace;
    }
    if (relativeFilepathRoot) {
      filepath = path.relative(relativeFilepathRoot, this.filepath);
    }

    // declarations
    const declarations = this.declarations?.map((declaration) => {
      let declarationFilepath = declaration.filepath;
      if (relativeFilepathRoot && declarationFilepath.startsWith(relativeFilepathRoot)) {
        declarationFilepath = path.relative(relativeFilepathRoot, declarationFilepath);
      }
      return {
        filepath: declarationFilepath,
        body: declaration.text,
      };
    });

    // snippets
    const relevantSnippetsFromChangedFiles = this.relevantSnippetsFromChangedFiles
      // deduplicate
      ?.filter(
        (snippet) =>
          // Remove snippet if find a declaration from the same file and range is overlapping
          !this.declarations?.find((declaration) => {
            return (
              declaration.filepath === snippet.filepath &&
              declaration.offset &&
              // Is range overlapping
              Math.max(declaration.offset, snippet.offset) <=
                Math.min(declaration.offset + declaration.text.length, snippet.offset + snippet.text.length)
            );
          }),
      )
      .map((snippet) => {
        let snippetFilepath = snippet.filepath;
        if (relativeFilepathRoot && snippetFilepath.startsWith(relativeFilepathRoot)) {
          snippetFilepath = path.relative(relativeFilepathRoot, snippetFilepath);
        }
        return {
          filepath: snippetFilepath,
          body: snippet.text,
          score: snippet.score,
        };
      })
      .sort((a, b) => b.score - a.score);

    //FIXME(Sma1lboy): deduplicate in next few PR
    const snippetsOpenedFiles = this.snippetsFromOpenedFiles
      ?.map((snippet) => {
        return {
          filepath: snippet.filepath,
          body: snippet.text,
          score: snippet.score,
        };
      })
      .sort((a, b) => b.score - a.score);

    // clipboard
    let clipboard = undefined;
    if (this.clipboard.length >= config.clipboard.minChars && this.clipboard.length <= config.clipboard.maxChars) {
      clipboard = this.clipboard;
    }
    return {
      prefix,
      suffix,
      filepath,
      git_url: gitUrl,
      declarations,
      relevant_snippets_from_changed_files: relevantSnippetsFromChangedFiles,
      relevant_snippets_from_recently_opened_files: snippetsOpenedFiles,
      clipboard,
    };
  }
}
