import path from 'path'
import { ListFileItem } from 'tabby-chat-panel/index'

import { MentionNodeAttrs, SourceItem } from './types'

/**
 * A regex to detect patterns like [[atSource: {...}]]
 * The JSON inside can be parsed to reconstruct AtInfo data.
 */
export const AT_SOURCE_REGEX = /\[\[atSource:(.*?)\]\]/g

export function listFileItemToSourceItem(info: ListFileItem): SourceItem {
  return {
    fileItem: info,
    name: path.basename(info.label),
    filepath: info.label,
    category: 'files'
  }
}

/**
 * Convert a SourceItem into a MentionNodeAttrs object to be used by Tiptap.
 * Useful for inserting a mention node into the editor.
 * @param item The SourceItem to convert
 * @returns The mention node attributes needed by Tiptap
 */
export function sourceItemToMentionNodeAttrs(
  item: SourceItem
): MentionNodeAttrs {
  return {
    id: `${item.name}-${item.filepath}`,
    name: item.name,
    category: item.category,
    fileItem: item.fileItem!
  }
}

/**
 * Extracts AtInfo objects from text that match the AT_SOURCE_REGEX pattern.
 * Replaces the matched patterns with @<parsedData.name> in the original text.
 * @param text The text to parse
 * @returns An object with updated text (after replacement) and a list of extracted AtInfo
 */
export function extractAtSourceFromString(text: string) {
  const fileItems: ListFileItem[] = []
  let match

  while ((match = AT_SOURCE_REGEX.exec(text))) {
    const sourceData = match[1]
    try {
      const parsedFileItem = JSON.parse(sourceData)
      fileItems.push(parsedFileItem)
      text = text.replace(match[0], `@${parsedFileItem.name}`)
    } catch {
      // If JSON parsing fails, skip this match
      continue
    }
  }

  return { text, atInfos: fileItems }
}
