/**
 * Tag-aware translation planning for Astro/JSX markup.
 *
 * `analyseMarkup()` splits a template into translatable units (text nodes, quoted
 * attribute/prop literals) while hiding JSX expression containers, so the caller can
 * batch the units through the machine-translation engine, then `render()` rebuilds
 * the template with the translations applied and the code blocks untouched.
 */
import { maskJsxBlocks, restoreJsxBlocks, keyLiteralPattern } from './astro-jsx-mask.mjs';

const TAG_RE = /<[^>]+>/g;
const LITERAL_RE = /(?<!\bt\()'((?:[^'\\\n]|\\.)*)'/g;
/** Double-quoted copy props on components (`quickAnswer="…"`, `headline="…"`). */
const ATTR_RE =
  /(?<![-\w])(quickAnswer|headline|description|title|label|text|summary|subtitle|intro|alt|entityType)="([^"]{2,})"/g;
/* eslint-disable-next-line no-control-regex */
const PLACEHOLDER_RE = /\u0000\d+\u0001/g;
const norm = (s) => s.replace(/\s+/g, ' ').trim();

export const isProseLiteral = (value, isTranslatable) => {
  const v = value.trim();
  if (v.length < 2) return false;
  if (/^(https?:|\/|#|\.)/.test(v)) return false;
  if (/^\d{4}-\d{2}-\d{2}$/.test(v)) return false;
  if (/^[a-z0-9._-]+$/.test(v)) return false;
  return isTranslatable(v);
};

function splitHtml(html) {
  const parts = [];
  let last = 0;
  TAG_RE.lastIndex = 0;
  let m;
  while ((m = TAG_RE.exec(html))) {
    if (m.index > last) parts.push({ text: html.slice(last, m.index) });
    parts.push({ raw: m[0] });
    last = m.index + m[0].length;
  }
  if (last < html.length) parts.push({ text: html.slice(last) });
  return parts;
}

export function analyseMarkup(html, isTranslatable) {
  const { text: masked, blocks } = maskJsxBlocks(html);
  const parts = splitHtml(masked);
  const units = new Set();
  const attrLiterals = new Set();

  for (const p of parts) {
    if (p.text !== undefined) {
      for (const piece of p.text.split(PLACEHOLDER_RE)) {
        const key = norm(piece);
        if (isTranslatable(key)) units.add(key);
      }
      continue;
    }
    LITERAL_RE.lastIndex = 0;
    for (const m of p.raw.matchAll(LITERAL_RE)) {
      const key = norm(m[1]);
      if (isProseLiteral(key, isTranslatable)) {
        attrLiterals.add(key);
        units.add(key);
      }
    }
    ATTR_RE.lastIndex = 0;
    for (const m of p.raw.matchAll(ATTR_RE)) {
      const key = norm(m[2]);
      if (isTranslatable(key)) units.add(key);
    }
  }

  const keyRe = keyLiteralPattern();
  for (const block of blocks) {
    keyRe.lastIndex = 0;
    for (const m of block.matchAll(keyRe)) {
      const key = norm(m[2]);
      if (isProseLiteral(key, isTranslatable)) units.add(key);
    }
  }

  const render = (translate) => {
    const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    const tr = (key) => translate(norm(key)) ?? key;
    const body = parts
      .map((p) => {
        if (p.text === undefined) {
          LITERAL_RE.lastIndex = 0;
          const withSingle = p.raw.replace(LITERAL_RE, (full, inner) =>
            isProseLiteral(norm(inner), isTranslatable) ? `'${esc(tr(inner))}'` : full
          );
          ATTR_RE.lastIndex = 0;
          return withSingle.replace(ATTR_RE, (full, name, value) =>
            isTranslatable(norm(value)) ? `${name}="${tr(value).replace(/"/g, '&quot;')}"` : full
          );
        }
        return (
          p.text
            // eslint-disable-next-line no-control-regex
            .split(/(\u0000\d+\u0001)/)
            .map((piece) => (isTranslatable(norm(piece)) ? tr(piece) : piece))
            .join('')
        );
      })
      .join('');

    return restoreJsxBlocks(body, blocks, (block) =>
      block.replace(keyLiteralPattern(), (full, prefix, inner) =>
        isProseLiteral(norm(inner), isTranslatable) ? `${prefix}'${esc(tr(inner))}'` : full
      )
    );
  };

  return { units: [...units], render };
}
