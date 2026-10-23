/**
 * Masking helpers for Astro/JSX templates.
 *
 * Machine-translating a rendered markup string is only safe for text nodes and
 * plain attribute strings: JSX expression containers (`{...}`) carry real code
 * (`.map(...)`, identifiers, ternaries) that must survive byte for byte. These
 * helpers hide every `{...}` block behind a placeholder so the translator never
 * sees it, then put it back — optionally translating just the quoted literals
 * that are assigned to display-oriented keys (`label:`, `title:`, `desc:`, …).
 */

const OPEN = '\u0000';
const CLOSE = '\u0001';
const PLACEHOLDER = new RegExp(`${OPEN}(\\d+)${CLOSE}`, 'g');

/** Hide every balanced `{...}` block (quotes, template literals and escapes respected). */
export function maskJsxBlocks(input) {
  const blocks = [];
  let out = '';
  let i = 0;
  while (i < input.length) {
    const ch = input[i];
    if (ch !== '{') {
      out += ch;
      i++;
      continue;
    }
    let depth = 0;
    let quote = null;
    let escaped = false;
    let j = i;
    for (; j < input.length; j++) {
      const c = input[j];
      if (quote) {
        if (escaped) escaped = false;
        else if (c === '\\') escaped = true;
        else if (c === quote) quote = null;
        continue;
      }
      if (c === "'" || c === '"' || c === '`') {
        quote = c;
        continue;
      }
      if (c === '{') depth++;
      else if (c === '}') {
        depth--;
        if (depth === 0) {
          j++;
          break;
        }
      }
    }
    blocks.push(input.slice(i, j));
    out += `${OPEN}${blocks.length - 1}${CLOSE}`;
    i = j;
  }
  return { text: out, blocks };
}

/** Keys whose quoted values are user-visible copy rather than code. */
export const DISPLAY_KEYS =
  'label|title|desc|description|value|text|summary|name|question|answer|headline|quickAnswer|q|a|caption|note|step';

export const keyLiteralPattern = () => new RegExp(`(\\b(?:${DISPLAY_KEYS})\\s*:\\s*)'((?:[^'\\\\]|\\\\.)*)'`, 'g');

export function restoreJsxBlocks(text, blocks, transform = (s) => s) {
  return text.replace(PLACEHOLDER, (_, idx) => transform(blocks[Number(idx)]));
}
