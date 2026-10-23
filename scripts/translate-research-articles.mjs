#!/usr/bin/env node
/**
 * translate-research-articles.mjs
 *
 * The eight /{lang}/research/<slug>/ articles keep their English body inline as the
 * fallback in `src/pages/[lang]/research/<slug>.astro`; translated bodies live in
 * `src/components/research/<slug>.<lang>.astro` and are wired through a per-page
 * import + `ResearchBody` map. Only the 16 hand-curated locales exist, so the newer
 * locales render the English fallback and get canonical-folded to the EN article.
 *
 * This script machine-translates the English fallback body (tag-aware: only text
 * runs are sent to MT, markup survives) plus the article title/description, writes
 * the 17 missing components and patches the eight page files idempotently.
 *
 * Usage:
 *   node scripts/translate-research-articles.mjs                  # translate + emit
 *   node scripts/translate-research-articles.mjs --langs=bg,ko   # subset
 *   node scripts/translate-research-articles.mjs --dry-run       # no API calls
 *   node scripts/translate-research-articles.mjs --emit-only     # rewrite files from cache
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createEngine, isTranslatableLine } from './lib/translate-lib.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LANGS_ALL = 'bg et he hr hu id ko lt lv ms ro sk sl sr th tl tr'.split(' ');
const LANG_LABEL = {
  bg: 'Bg',
  et: 'Et',
  he: 'He',
  hr: 'Hr',
  hu: 'Hu',
  id: 'Id',
  ko: 'Ko',
  lt: 'Lt',
  lv: 'Lv',
  ms: 'Ms',
  ro: 'Ro',
  sk: 'Sk',
  sl: 'Sl',
  sr: 'Sr',
  th: 'Th',
  tl: 'Tl',
  tr: 'Tr',
};

const argOf = (n) => {
  const a = process.argv.find((s) => s.startsWith(`--${n}=`));
  return a ? a.slice(n.length + 3) : null;
};
const LANGS = (argOf('langs') || LANGS_ALL.join(','))
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const DRY_RUN = process.argv.includes('--dry-run');
const EMIT_ONLY = process.argv.includes('--emit-only');
const CACHE_FILE = path.resolve(ROOT, argOf('cache') || path.join('.cache', 'research-cache.json'));

const PAGE_DIR = path.join(ROOT, 'src/pages/[lang]/research');
const COMP_DIR = path.join(ROOT, 'src/components/research');
const TAG_RE = /<[^>]+>/g;

const SLUGS = [
  ...new Set(
    fs
      .readdirSync(COMP_DIR)
      .filter((f) => f.endsWith('.astro'))
      .map((f) => f.split('.')[0])
  ),
].sort();

function pageFile(slug) {
  return path.join(PAGE_DIR, `${slug}.astro`);
}

/** Extract the English fallback body (`<div class="prose …">…</div>`) plus META.en. */
function extractArticle(slug) {
  const src = fs.readFileSync(pageFile(slug), 'utf8');
  const elseIdx = src.indexOf(') : (');
  if (elseIdx < 0) throw new Error(`${slug}: no "else" fallback branch`);
  const openIdx = src.indexOf('<div class="prose prose-lg max-w-none', elseIdx);
  if (openIdx < 0) throw new Error(`${slug}: no EN prose block`);

  let depth = 0;
  let end = -1;
  const re = /<\/?div\b[^>]*>/g;
  re.lastIndex = openIdx;
  let m;
  while ((m = re.exec(src))) {
    if (m[0].startsWith('</')) depth--;
    else depth++;
    if (depth === 0) {
      end = m.index + m[0].length;
      break;
    }
  }
  if (end < 0) throw new Error(`${slug}: unbalanced EN prose block`);
  const body = src.slice(openIdx, end);

  const metaEn = src.match(
    /\n {2}en: \{\s*title:\s*'((?:[^'\\]|\\.)*)',?\s*description:\s*'((?:[^'\\]|\\.)*)',?\s*\},/
  );
  if (!metaEn) throw new Error(`${slug}: no META.en`);
  return {
    body,
    title: metaEn[1].replace(/\\'/g, "'"),
    description: metaEn[2].replace(/\\'/g, "'"),
  };
}

/** Split HTML into tags + text runs (text runs keep their surrounding whitespace). */
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

const coreOf = (text) => {
  const m = text.match(/^(\s*)([\s\S]*?)(\s*)$/);
  return { lead: m[1], core: m[2].replace(/\s+/g, ' '), trail: m[3] };
};

/**
 * Bing occasionally wraps a phrase in its own markup (`<Laki ng patong>`), which
 * would become a bogus Astro element and break the build. Source text runs never
 * contain angle brackets, so any of them in the output is an artifact; braces are
 * escaped because Astro treats `{…}` as an expression.
 */
const sanitizeText = (s) =>
  String(s)
    .replace(/<\/?[A-Za-z][^>]{0,120}>/g, '')
    .replace(/[<>]/g, '')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;');

async function translateUnits(engine, units, lang) {
  const list = [...units];
  const map = new Map();
  const { batchChars, batchLines } = engine.opts;
  for (let i = 0; i < list.length;) {
    const chunk = [];
    let chars = 0;
    while (
      i < list.length &&
      (chunk.length === 0 || (chunk.length < batchLines && chars + list[i].length + 1 <= batchChars))
    ) {
      chars += list[i].length + 1;
      chunk.push(list[i]);
      i++;
    }
    const out = await engine.translateBatch(chunk, lang);
    chunk.forEach((t, k) => map.set(t, out[k]));
  }
  return map;
}

async function translateArticle(engine, slug, article, lang) {
  const parts = splitHtml(article.body);
  const units = new Set();
  for (const p of parts) {
    if (p.text === undefined) continue;
    const { core } = coreOf(p.text);
    if (isTranslatableLine(core)) units.add(core);
  }
  for (const t of [article.title, article.description]) if (isTranslatableLine(t)) units.add(t);

  const map = await translateUnits(engine, units, lang);
  const tr = (s) => (isTranslatableLine(s) ? sanitizeText(map.get(s) || s) : s);

  const body = parts
    .map((p) => {
      if (p.raw !== undefined) return p.raw;
      const { lead, core, trail } = coreOf(p.text);
      return lead + tr(core) + trail;
    })
    .join('');

  return { body, title: tr(article.title), description: tr(article.description) };
}

function q(s) {
  return `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

function componentFile(slug, lang) {
  return path.join(COMP_DIR, `${slug}.${lang}.astro`);
}

const GRAD_LABELS = ['De', 'Es', 'Fr', 'It', 'Cs', 'Sv', 'Da', 'El', 'No', 'Ru', 'Nl', 'Fi', 'Pl', 'Ar', 'Pt', 'Ja'];
const prefixOf = (importName) => {
  for (const l of GRAD_LABELS) if (importName.endsWith(l)) return importName.slice(0, -l.length);
  return 'L';
};

function patchPage(slug, langs) {
  const file = pageFile(slug);
  let src = fs.readFileSync(file, 'utf8');
  const importName = (src.match(/^import ([A-Z][a-zA-Z]*) from '~\/components\/research\//m) || [])[1] || 'LDe';
  const prefix = prefixOf(importName);

  // 1. imports
  const missing = langs.filter((l) => !src.includes(`${slug}.${l}.astro`));
  if (missing.length) {
    const lines = missing.map(
      (l) => `import ${prefix}${LANG_LABEL[l]} from '~/components/research/${slug}.${l}.astro';`
    );
    const lastImport = [...src.matchAll(/^import [A-Z][a-zA-Z]* from '~\/components\/research\/[^']+';$/gm)].pop();
    if (!lastImport) throw new Error(`${slug}: no component import to anchor on`);
    const at = lastImport.index + lastImport[0].length;
    src = src.slice(0, at) + '\n' + lines.join('\n') + src.slice(at);
  }

  // 2. META entries (inserted before the map's closing "};")
  const missingMeta = langs.filter((l) => !new RegExp(`\\n  ${l}: \\{\\n    title:`).test(src));
  if (missingMeta.length) {
    const anchor = src.indexOf('const meta = META[lang]');
    if (anchor < 0) throw new Error(`${slug}: no META anchor`);
    const close = src.lastIndexOf('};', anchor);
    const data = readOut();
    const lines = missingMeta.map((l) => {
      const d = data[l][slug];
      return `  ${l}: {\n    title: ${q(d.title)},\n    description: ${q(d.description)},\n  },`;
    });
    src = src.slice(0, close) + lines.join('\n') + '\n' + src.slice(close);
  }

  // 3. ResearchBody map entries
  const mapEnd = src.indexOf('} as Record<string, any>');
  if (mapEnd < 0) throw new Error(`${slug}: no ResearchBody map`);
  const missingMap = langs.filter(
    (l) => !new RegExp(`\\n\\s+${l}: [A-Z][a-zA-Z]*,`).test(src.slice(mapEnd - 4000, mapEnd + 40))
  );
  if (missingMap.length) {
    const insertAt = src.lastIndexOf('\n', mapEnd);
    const lines = missingMap.map((l) => `      ${l}: ${prefix}${LANG_LABEL[l]},`).join('\n');
    src = src.slice(0, insertAt) + '\n' + lines + src.slice(insertAt);
  }

  fs.writeFileSync(file, src, 'utf8');
  return { prefix, added: missing.length };
}

const OUT_DIR = path.join(ROOT, '.cache', 'research-out');

/** Translation output per language (written during the translate pass). */
function readOut() {
  const data = {};
  for (const f of fs.readdirSync(OUT_DIR).filter((x) => /^[a-z]{2}\.json$/.test(x))) {
    data[f.replace(/\.json$/, '')] = JSON.parse(fs.readFileSync(path.join(OUT_DIR, f), 'utf8'));
  }
  return data;
}

function emitComponents(data) {
  let n = 0;
  for (const [lang, bySlug] of Object.entries(data)) {
    if (!LANGS.includes(lang)) continue;
    for (const [slug, d] of Object.entries(bySlug)) {
      const body = d.body.replace(/^\n+/, '');
      const out = `---\n\n---\n\n${body}\n`;
      fs.writeFileSync(componentFile(slug, lang), out, 'utf8');
      n++;
    }
  }
  return n;
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  if (!EMIT_ONLY) {
    const engine = createEngine({ cacheFile: CACHE_FILE, dryRun: DRY_RUN, log: console.log });
    engine.load();
    console.log(`articles=${SLUGS.length} langs=${LANGS.join(',')} cache=${engine.cacheSize}`);
    if (!DRY_RUN) {
      await engine.refreshSession();
      console.log('Bing session ok');
    }
    const t0 = Date.now();
    for (const lang of LANGS) {
      const outFile = path.join(OUT_DIR, `${lang}.json`);
      if (fs.existsSync(outFile) && !process.argv.includes('--force')) {
        console.log(`  ${lang}: up-to-date`);
        continue;
      }
      const a0 = engine.stats.apiCalls;
      const bySlug = {};
      for (const slug of SLUGS) {
        const article = extractArticle(slug);
        const res = await translateArticle(engine, slug, article, lang);
        bySlug[slug] = res;
        console.log(
          `  ${lang}/${slug}: body ${article.body.length} -> ${res.body.length}, title ${res.title.length} chars`
        );
      }
      engine.save();
      if (!DRY_RUN) fs.writeFileSync(outFile, JSON.stringify(bySlug), 'utf8');
      console.log(`  ${lang}: api=${engine.stats.apiCalls - a0} bytes=${JSON.stringify(bySlug).length}`);
    }
    console.log(`translate done in ${Math.round((Date.now() - t0) / 1000)}s (api=${engine.stats.apiCalls})`);
  }

  if (!DRY_RUN) {
    const data = readOut();
    const n = emitComponents(data);
    console.log(`components written: ${n}`);
    for (const slug of SLUGS) {
      const done = LANGS.filter((l) => fs.existsSync(componentFile(slug, l)));
      if (!done.length) continue;
      const r = patchPage(slug, done);
      console.log(`  page ${slug}: prefix=${r.prefix} imports+${r.added}`);
    }
  }
}

main().catch((e) => {
  console.error('FATAL:', e.message);
  process.exit(1);
});
