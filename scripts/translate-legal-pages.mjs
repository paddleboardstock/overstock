#!/usr/bin/env node
/**
 * translate-legal-pages.mjs
 *
 * `/{lang}/privacy/`, `/{lang}/terms/` and `/{lang}/disclaimer/` keep their English
 * body inline as the fallback in `src/pages/[lang]/<page>.astro`; translated bodies
 * live in `src/components/legal/<page>.<lang>.astro` and are wired through a per-page
 * import + `Body` map. Only the 16 hand-curated locales exist, so the newer locales
 * render the English fallback and get canonical-folded to the EN page.
 *
 * This script machine-translates the English fallback block (tag-aware: only text
 * runs are sent to MT, markup survives) plus the page title/description, writes the
 * 17 missing components and patches the three page files idempotently.
 *
 * Usage:
 *   node scripts/translate-legal-pages.mjs                  # translate + emit
 *   node scripts/translate-legal-pages.mjs --langs=bg,ko   # subset
 *   node scripts/translate-legal-pages.mjs --dry-run       # no API calls
 *   node scripts/translate-legal-pages.mjs --emit-only     # rewrite files from cache
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
const GRAD_LABELS = ['De', 'Es', 'Fr', 'It', 'Cs', 'Sv', 'Da', 'El', 'No', 'Ru', 'Nl', 'Fi', 'Pl', 'Ar', 'Pt', 'Ja'];
const SITE_NAME =
  (fs.readFileSync(path.join(ROOT, 'src/config.yaml'), 'utf8').match(/^ {2}name: (.+)$/m) || [])[1]
    ?.trim()
    .replace(/^['"]|['"]$/g, '') || 'Paddle Board Overstock';

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
const CACHE_FILE = path.resolve(ROOT, argOf('cache') || path.join('.cache', 'legal-cache.json'));

const PAGES = ['privacy', 'terms', 'disclaimer'];
const PAGE_DIR = path.join(ROOT, 'src/pages/[lang]');
const COMP_DIR = path.join(ROOT, 'src/components/legal');
const OUT_DIR = path.join(ROOT, '.cache', 'legal-out');
const TAG_RE = /<[^>]+>/g;

const pageFile = (name) => path.join(PAGE_DIR, `${name}.astro`);
const componentFile = (name, lang) => path.join(COMP_DIR, `${name}.${lang}.astro`);

/** First element block inside the ternary's `else` branch, e.g. `<section …>…</section>`. */
function extractBlock(src, name) {
  const mElse = /\)\s*:\s*\(/.exec(src);
  if (!mElse) throw new Error(`${name}: no "else" fallback branch`);
  const open = src.slice(mElse.index + mElse[0].length).match(/<([a-z][a-z0-9]*)\b/);
  if (!open) throw new Error(`${name}: no fallback element`);
  const tag = open[1];
  const start = mElse.index + mElse[0].length + open.index;
  const re = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'g');
  re.lastIndex = start;
  let depth = 0;
  let end = -1;
  let t;
  while ((t = re.exec(src))) {
    if (t[0].endsWith('/>')) continue;
    depth += t[1] ? -1 : 1;
    if (depth === 0) {
      end = t.index + t[0].length;
      break;
    }
  }
  if (end < 0) throw new Error(`${name}: unbalanced fallback block`);
  return src.slice(start, end);
}

/** `en:` entry of the page's META map, as plain text (template expressions resolved). */
function extractMeta(src, name) {
  const i = src.indexOf('const META');
  if (i < 0) throw new Error(`${name}: no META map`);
  const j = src.indexOf('\n  en: {', i);
  if (j < 0) throw new Error(`${name}: no META.en`);
  const k = src.indexOf('\n  },', j);
  const block = src.slice(j, k);
  const pick = (key) => {
    const m = block.match(new RegExp(`\\n {4}${key}:\\s*([\\s\\S]*?),?(?:\\n|$)`));
    if (!m) throw new Error(`${name}: no META.en.${key}`);
    let v = m[1].trim().replace(/,$/, '').trim();
    if (v.startsWith('`') && v.endsWith('`')) v = v.slice(1, -1);
    else if ((v.startsWith("'") && v.endsWith("'")) || (v.startsWith('"') && v.endsWith('"'))) v = v.slice(1, -1);
    return v
      .replace(/\$\{SITE\.name\}/g, SITE_NAME)
      .replace(/\\'/g, "'")
      .replace(/\s+/g, ' ')
      .trim();
  };
  return { title: pick('title'), description: pick('description') };
}

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

async function translatePage(engine, block, meta, lang) {
  const parts = splitHtml(block);
  const units = new Set();
  for (const p of parts) {
    if (p.text === undefined) continue;
    const { core } = coreOf(p.text);
    if (isTranslatableLine(core)) units.add(core);
  }
  for (const t of [meta.title, meta.description]) if (isTranslatableLine(t)) units.add(t);

  const map = await translateUnits(engine, units, lang);
  const tr = (s) => (isTranslatableLine(s) ? sanitizeText(map.get(s) || s) : s);

  const body = parts
    .map((p) => {
      if (p.raw !== undefined) return p.raw;
      const { lead, core, trail } = coreOf(p.text);
      return lead + tr(core) + trail;
    })
    .join('');

  return { body, title: tr(meta.title), description: tr(meta.description) };
}

const q = (s) => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

function readOut() {
  const data = {};
  for (const f of fs.readdirSync(OUT_DIR).filter((x) => /^[a-z]{2}\.json$/.test(x))) {
    data[f.replace(/\.json$/, '')] = JSON.parse(fs.readFileSync(path.join(OUT_DIR, f), 'utf8'));
  }
  return data;
}

function emitComponents(data, pages) {
  let n = 0;
  for (const [lang, byPage] of Object.entries(data)) {
    if (!LANGS.includes(lang)) continue;
    for (const [name, d] of Object.entries(byPage)) {
      if (!pages.includes(name)) continue;
      const body = d.body.replace(/^\n+/, '');
      // The disclaimer body keeps `<a href={`/${lang}/privacy`}>` links from the English
      // fallback, so it must resolve `lang` the same way the hand-written components do;
      // the privacy/terms bodies are plain markup and would otherwise carry an unused prop.
      const frontmatter = /\$\{lang\}/.test(body)
        ? `---\nconst { lang = '${lang}' } = Astro.props;\n---\n\n`
        : '---\n\n---\n\n';
      fs.writeFileSync(componentFile(name, lang), `${frontmatter}${body}\n`, 'utf8');
      n++;
    }
  }
  return n;
}

function patchPage(name, langs, data) {
  const file = pageFile(name);
  let src = fs.readFileSync(file, 'utf8');
  const importName = (src.match(new RegExp(`^import ([A-Z][a-zA-Z]*) from '~/components/legal/${name}\\.`, 'm')) ||
    [])[1];
  if (!importName) throw new Error(`${name}: no component import`);
  const prefix = GRAD_LABELS.reduce(
    (acc, l) => (acc === null && importName.endsWith(l) ? importName.slice(0, -l.length) : acc),
    null
  );
  if (prefix === null) throw new Error(`${name}: cannot derive component prefix from ${importName}`);

  // 1. imports
  const missingImports = langs.filter((l) => !src.includes(`${name}.${l}.astro`));
  if (missingImports.length) {
    const lines = missingImports.map(
      (l) => `import ${prefix}${LANG_LABEL[l]} from '~/components/legal/${name}.${l}.astro';`
    );
    const lastImport = [
      ...src.matchAll(new RegExp(`^import [A-Z][a-zA-Z]* from '~/components/legal/${name}\\.\\w+\\.astro';$`, 'gm')),
    ].pop();
    if (!lastImport) throw new Error(`${name}: no import anchor`);
    const at = lastImport.index + lastImport[0].length;
    src = src.slice(0, at) + '\n' + lines.join('\n') + src.slice(at);
  }

  // 2. META entries
  const missingMeta = langs.filter((l) => !new RegExp(`\\n {2}${l}: \\{\\n {4}title:`).test(src));
  if (missingMeta.length) {
    const anchor = src.indexOf('};\nconst meta = META[lang]');
    if (anchor < 0) throw new Error(`${name}: no META anchor`);
    const lines = missingMeta.map((l) => {
      const d = data[l][name];
      return `  ${l}: {\n    title: ${q(d.title)},\n    description: ${q(d.description)},\n  },`;
    });
    src = src.slice(0, anchor) + lines.join('\n') + '\n' + src.slice(anchor);
  }

  // 3. Body map entries
  const mapEnd = src.indexOf('} as Record<string, any>');
  if (mapEnd < 0) throw new Error(`${name}: no Body map`);
  const tail = src.slice(Math.max(0, mapEnd - 5000), mapEnd);
  const missingMap = langs.filter((l) => !new RegExp(`\\n\\s+${l}: [A-Z][a-zA-Z]*,`).test(tail));
  if (missingMap.length) {
    const insertAt = src.lastIndexOf('\n', mapEnd);
    const lines = missingMap.map((l) => `      ${l}: ${prefix}${LANG_LABEL[l]},`).join('\n');
    src = src.slice(0, insertAt) + '\n' + lines + src.slice(insertAt);
  }

  fs.writeFileSync(file, src, 'utf8');
  return { prefix, added: missingImports.length };
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  if (!EMIT_ONLY) {
    const engine = createEngine({ cacheFile: CACHE_FILE, dryRun: DRY_RUN, log: console.log });
    engine.load();
    console.log(`pages=${PAGES.join(',')} langs=${LANGS.join(',')} cache=${engine.cacheSize}`);
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
      const byPage = {};
      for (const name of PAGES) {
        const src = fs.readFileSync(pageFile(name), 'utf8');
        const block = extractBlock(src, name);
        const meta = extractMeta(src, name);
        const res = await translatePage(engine, block, meta, lang);
        byPage[name] = res;
        console.log(`  ${lang}/${name}: block ${block.length} -> ${res.body.length}, title ${res.title.length}`);
      }
      engine.save();
      if (!DRY_RUN) fs.writeFileSync(outFile, JSON.stringify(byPage), 'utf8');
      console.log(`  ${lang}: api=${engine.stats.apiCalls - a0} bytes=${JSON.stringify(byPage).length}`);
    }
    console.log(`translate done in ${Math.round((Date.now() - t0) / 1000)}s (api=${engine.stats.apiCalls})`);
  }

  if (!DRY_RUN) {
    const data = readOut();
    console.log(`components written: ${emitComponents(data, PAGES)}`);
    for (const name of PAGES) {
      const done = LANGS.filter((l) => fs.existsSync(componentFile(name, l)));
      if (!done.length) continue;
      const r = patchPage(name, done, data);
      console.log(`  page ${name}: prefix=${r.prefix} imports+${r.added}`);
    }
  }
}

main().catch((e) => {
  console.error('FATAL:', e.message);
  process.exit(1);
});
