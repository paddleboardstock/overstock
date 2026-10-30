#!/usr/bin/env node
/**
 * translate-marine-industry.mjs
 *
 * `/{lang}/marine-industry/` renders a per-locale component from
 * `src/components/marine-industry/` and falls back to the English fragment that is
 * inlined in `src/pages/[lang]/marine-industry/index.astro`. Only the 16 hand-curated
 * locales exist, so the newer locales show English copy (folded to the EN canonical).
 *
 * This script translates the inlined English fallback — both its prose text runs and
 * the single-quoted props (`title`, `desc`, `quickAnswer`, `headline`, …) — writes
 * `src/components/marine-industry/index.<lang>.astro` and wires it into the page.
 *
 * Usage:
 *   node scripts/translate-marine-industry.mjs                 # translate + emit
 *   node scripts/translate-marine-industry.mjs --langs=bg,ko   # subset
 *   node scripts/translate-marine-industry.mjs --dry-run       # no API calls
 *   node scripts/translate-marine-industry.mjs --emit-only     # rewrite files from cache
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createEngine, isTranslatableLine } from './lib/translate-lib.mjs';
import { analyseMarkup } from './lib/markup-translate.mjs';

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
const CACHE_FILE = path.resolve(ROOT, argOf('cache') || path.join('.cache', 'marine-cache.json'));

const PAGE_FILE = path.join(ROOT, 'src/pages/[lang]/marine-industry/index.astro');
const COMP_DIR = path.join(ROOT, 'src/components/marine-industry');
const OUT_JSON = path.join(ROOT, '.cache', 'marine-out.json');

const compFile = (lang) => path.join(COMP_DIR, `index.${lang}.astro`);

/** English fallback: the fragment content between `<>` and `</>` in the else branch. */
function extractFragment(src) {
  const mElse = /\)\s*:\s*\(/.exec(src);
  if (!mElse) throw new Error('no "else" fallback branch');
  const open = src.indexOf('<>', mElse.index);
  if (open < 0) throw new Error('no fragment');
  const close = src.indexOf('</>', open);
  if (close < 0) throw new Error('unterminated fragment');
  return src.slice(open + 2, close);
}

function extractMeta(src) {
  const i = src.indexOf('const META');
  const j = src.indexOf('\n  en: {', i);
  const k = src.indexOf('\n  },', j);
  const block = src.slice(j, k);
  const pick = (key) => {
    const m = block.match(new RegExp(`\\n {4}${key}:\\s*([\\s\\S]*?),?(?:\\n|$)`));
    if (!m) throw new Error(`no META.en.${key}`);
    let v = m[1].trim().replace(/,$/, '').trim();
    if (v.startsWith('`') && v.endsWith('`')) v = v.slice(1, -1);
    else if ((v.startsWith("'") && v.endsWith("'")) || (v.startsWith('"') && v.endsWith('"'))) v = v.slice(1, -1);
    return v
      .replace(/\$\{SITE\.name\}/g, 'Paddle Board Overstock')
      .replace(/\\'/g, "'")
      .replace(/\s+/g, ' ')
      .trim();
  };
  return { title: pick('title'), description: pick('description') };
}

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

async function translateFragment(engine, frag, lang) {
  const { units, render } = analyseMarkup(frag, isTranslatableLine);
  const map = await translateUnits(engine, units, lang);
  return render((key) => sanitizeText(map.get(key) ?? key));
}

const q = (s) => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

function patchPage(langs, data) {
  let src = fs.readFileSync(PAGE_FILE, 'utf8');
  const importName = (src.match(/^import (Marineindustry[A-Z][a-z]) from '~\/components\/marine-industry\/index\./m) ||
    [])[1];
  if (!importName) throw new Error('no component import');
  const prefix = importName.replace(/[A-Z][a-z]$/, '');

  const missingImports = langs.filter((l) => !src.includes(`index.${l}.astro`));
  if (missingImports.length) {
    const lines = missingImports.map(
      (l) => `import ${prefix}${LANG_LABEL[l]} from '~/components/marine-industry/index.${l}.astro';`
    );
    const lastImport = [
      ...src.matchAll(
        new RegExp(`^import ${prefix}[A-Z][a-z] from '~/components/marine-industry/index\\.\\w+\\.astro';$`, 'gm')
      ),
    ].pop();
    if (!lastImport) throw new Error('no import anchor');
    const at = lastImport.index + lastImport[0].length;
    src = src.slice(0, at) + '\n' + lines.join('\n') + src.slice(at);
  }

  const missingMeta = langs.filter((l) => !new RegExp(`\\n {2}${l}: \\{\\n {4}title:`).test(src));
  if (missingMeta.length) {
    const decl = src.indexOf('const meta = META[lang]');
    const anchor = src.lastIndexOf('};', decl);
    if (decl < 0 || anchor < 0) throw new Error('no META anchor');
    const lines = missingMeta.map((l) => {
      const d = data[l].meta;
      return `  ${l}: {\n    title: ${q(d.title)},\n    description: ${q(d.description)},\n  },`;
    });
    src = src.slice(0, anchor) + lines.join('\n') + '\n' + src.slice(anchor);
  }

  const mapEnd = src.indexOf('} as Record<string, any>');
  if (mapEnd < 0) throw new Error('no component map');
  const tail = src.slice(Math.max(0, mapEnd - 5000), mapEnd);
  const missingMap = langs.filter((l) => !new RegExp(`\\n\\s+${l}: [A-Z][a-zA-Z]*,`).test(tail));
  if (missingMap.length) {
    const insertAt = src.lastIndexOf('\n', mapEnd);
    const lines = missingMap.map((l) => `      ${l}: ${prefix}${LANG_LABEL[l]},`).join('\n');
    src = src.slice(0, insertAt) + '\n' + lines + src.slice(insertAt);
  }

  fs.writeFileSync(PAGE_FILE, src, 'utf8');
  return { prefix, added: missingImports.length };
}

function frontmatter(lang) {
  return [
    '---',
    "import JsonLd from '~/components/common/JsonLd.astro';",
    "import AiQuickAnswer from '~/components/common/AiQuickAnswer.astro';",
    "import { getUiForLang } from '~/i18n/generated/ui-all';",
    '',
    `const { lang = '${lang}' } = Astro.props;`,
    "const t = (key: string) => getUiForLang(lang)?.[key] || '';",
    '---',
    '',
  ].join('\n');
}

async function main() {
  let data = fs.existsSync(OUT_JSON) ? JSON.parse(fs.readFileSync(OUT_JSON, 'utf8')) : {};
  const pageSrc = fs.readFileSync(PAGE_FILE, 'utf8');
  const frag = extractFragment(pageSrc);

  if (!EMIT_ONLY) {
    const engine = createEngine({ cacheFile: CACHE_FILE, dryRun: DRY_RUN, log: console.log });
    engine.load();
    console.log(`fragment=${frag.length} chars langs=${LANGS.join(',')} cache=${engine.cacheSize}`);
    if (!DRY_RUN) {
      await engine.refreshSession();
      console.log('Bing session ok');
    }
    const t0 = Date.now();
    for (const lang of LANGS) {
      const a0 = engine.stats.apiCalls;
      const body = await translateFragment(engine, frag, lang);
      data[lang] = { body, meta: extractMeta(pageSrc) };
      engine.save();
      if (!DRY_RUN) fs.writeFileSync(OUT_JSON, JSON.stringify(data), 'utf8');
      console.log(`  ${lang}: ${frag.length} -> ${body.length}, api=${engine.stats.apiCalls - a0}`);
    }
    console.log(`translate done in ${Math.round((Date.now() - t0) / 1000)}s (api=${engine.stats.apiCalls})`);
  }

  if (!DRY_RUN) {
    const langs = Object.keys(data).filter((l) => LANGS.includes(l));
    for (const l of langs) {
      fs.writeFileSync(
        compFile(l),
        `${frontmatter(l)}${data[l].body.replace(/^\n+/, '').replace(/\s+$/, '')}\n`,
        'utf8'
      );
    }
    console.log(`components written: ${langs.length}`);
    const r = patchPage(langs, data);
    console.log(`  page marine-industry: prefix=${r.prefix} imports+${r.added}`);
  }
}

main().catch((e) => {
  console.error('FATAL:', e.message);
  process.exit(1);
});
