import levenshtein from "js-levenshtein";
import { Position, Range } from "vscode-languageserver-protocol";
import { TextDocument } from "vscode-languageserver-textdocument";

export function fuzzyApplyRange(document: TextDocument, snippet: string): { range: Range; score: number } | null {
  const lines = document.getText().split("\n");
  const snippetLines = snippet.split("\n");

  let [minDistance, index] = [Number.MAX_SAFE_INTEGER, 0];
  for (let i = 0; i <= lines.length - snippetLines.length; i++) {
    const window = lines.slice(i, i + snippetLines.length).join("\n");
    const distance = levenshtein(window, snippet);
    if (minDistance >= distance) {
      minDistance = distance;
      index = i;
    }
  }

  if (minDistance === Number.MAX_SAFE_INTEGER && index === 0) {
    return null;
  }

  const startLine = index;
  const endLine = index + snippetLines.length - 1;
  const start: Position = { line: startLine, character: 0 };
  const end: Position = { line: endLine, character: lines[endLine]?.length || 0 };

  return { range: { start, end }, score: minDistance };
}