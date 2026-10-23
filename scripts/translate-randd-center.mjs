#!/usr/bin/env node
/**
 * translate-randd-center.mjs
 *
 * The six R&D Center lab pages (`/{lang}/randdcenter/<slug>/`) render one component
 * per locale from `src/components/randdcenter/`. Sixteen locales plus `en` exist and
 * the page falls back to the English component (`... [lang] || REn`), so newer
 * locales show English copy and get canonical-folded to the EN page.
 *
 * This script translates the `<slug>.en.astro` bodies (tag-aware: only text runs go
 * to MT, markup survives), writes `<slug>.<lang>.astro` for the missing locales and
 * patches the six page files (imports, META entries, component map) idempotently.
 *
 * Usage:
 *   node scripts/translate-randd-center.mjs                 # translate + emit
 *   node scripts/translate-randd-center.mjs --langs=bg,ko   # subset
 *   node scripts/translate-randd-center.mjs --dry-run       # no API calls
 *   node scripts/translate-randd-center.mjs --emit-only     # rewrite files from cache
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
const GRAD_LABELS = ['De', 'Es', 'Fr', 'It', 'Cs', 'Sv', 'Da', 'El', 'No', 'Ru', 'Nl', 'Fi', 'Pl', 'Ar', 'Pt', 'Ja'];

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
const CACHE_FILE = path.resolve(ROOT, argOf('cache') || path.join('.cache', 'randd-cache.json'));

const PAGE_DIR = path.join(ROOT, 'src/pages/[lang]/randdcenter');
const COMP_DIR = path.join(ROOT, 'src/components/randdcenter');
const OUT_JSON = path.join(ROOT, '.cache', 'randd-out.json');

const pageFile = (slug) => path.join(PAGE_DIR, `${slug}.astro`);
const compFile = (slug, lang) => path.join(COMP_DIR, `${slug}.${lang}.astro`);

const SLUGS = fs
  .readdirSync(COMP_DIR)
  .filter((f) => f.endsWith('.en.astro'))
  .map((f) => f.replace(/\.en\.astro$/, ''))
  .sort();

const sanitizeText = (s) =>
  String(s)
    .replace(/<\/?[A-Za-z][^>]{0,120}>/g, '')
    .replace(/[<>]/g, '')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;');

function readSource(slug) {
  const src = fs.readFileSync(path.join(COMP_DIR, `${slug}.en.astro`), 'utf8');
  const end = src.indexOf('---', 3);
  const frontmatter = src.slice(0, end + 3);
  const body = src.slice(end + 3);
  return { frontmatter, body };
}

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

async function translateBody(engine, body, lang) {
  const { units, render } = analyseMarkup(body, isTranslatableLine);
  const map = await translateUnits(engine, units, lang);
  return render((key) => sanitizeText(map.get(key) ?? key));
}

/** `en:` entry of the page's META map as plain text. */
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
      .replace(/\$\{SITE\.name\}/g, 'Aquafarer')
      .replace(/\\'/g, "'")
      .replace(/\s+/g, ' ')
      .trim();
  };
  return { title: pick('title'), description: pick('description') };
}

const q = (s) => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

function prefixOf(importName) {
  for (const l of GRAD_LABELS) if (importName.endsWith(l)) return importName.slice(0, -l.length);
  return importName.replace(/[A-Z][a-z]$/, '');
}

function patchPage(slug, langs, data) {
  const file = pageFile(slug);
  let src = fs.readFileSync(file, 'utf8');
  const importName = (src.match(
    new RegExp(`^import ([A-Z][a-zA-Z]*) from '~/components/randdcenter/${slug}\\.`, 'm')
  ) || [])[1];
  if (!importName) throw new Error(`${slug}: no component import`);
  const prefix = prefixOf(importName);

  const missingImports = langs.filter((l) => !src.includes(`${slug}.${l}.astro`));
  if (missingImports.length) {
    const lines = missingImports.map(
      (l) => `import ${prefix}${LANG_LABEL[l]} from '~/components/randdcenter/${slug}.${l}.astro';`
    );
    const lastImport = [
      ...src.matchAll(
        new RegExp(`^import [A-Z][a-zA-Z]* from '~/components/randdcenter/${slug}\\.\\w+\\.astro';$`, 'gm')
      ),
    ].pop();
    if (!lastImport) throw new Error(`${slug}: no import anchor`);
    const at = lastImport.index + lastImport[0].length;
    src = src.slice(0, at) + '\n' + lines.join('\n') + src.slice(at);
  }

  const missingMeta = langs.filter((l) => !new RegExp(`\\n {2}${l}: \\{\\n {4}title:`).test(src));
  if (missingMeta.length) {
    const decl = src.indexOf('const meta = META[lang]');
    if (decl < 0) throw new Error(`${slug}: no META decl`);
    const anchor = src.lastIndexOf('};', decl);
    if (anchor < 0) throw new Error(`${slug}: no META anchor`);
    const lines = missingMeta.map((l) => {
      const d = data[l][slug].meta;
      return `  ${l}: {\n    title: ${q(d.title)},\n    description: ${q(d.description)},\n  },`;
    });
    src = src.slice(0, anchor) + lines.join('\n') + '\n' + src.slice(anchor);
  }

  const mapEnd = src.indexOf('} as Record<string, any>');
  if (mapEnd < 0) throw new Error(`${slug}: no component map`);
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
  const data = fs.existsSync(OUT_JSON) ? JSON.parse(fs.readFileSync(OUT_JSON, 'utf8')) : {};

  if (!EMIT_ONLY) {
    const engine = createEngine({ cacheFile: CACHE_FILE, dryRun: DRY_RUN, log: console.log });
    engine.load();
    console.log(`slugs=${SLUGS.length} langs=${LANGS.join(',')} cache=${engine.cacheSize}`);
    if (!DRY_RUN) {
      await engine.refreshSession();
      console.log('Bing session ok');
    }
    const t0 = Date.now();
    for (const lang of LANGS) {
      const a0 = engine.stats.apiCalls;
      data[lang] = data[lang] || {};
      for (const slug of SLUGS) {
        const pageSrc = fs.readFileSync(pageFile(slug), 'utf8');
        const meta = extractMeta(pageSrc);
        const { frontmatter, body } = readSource(slug);
        const translated = await translateBody(engine, body, lang);
        const fm = frontmatter.replace(/const \{ lang = 'en' \}/, `const { lang = '${lang}' }`);
        data[lang][slug] = { frontmatter: fm, body: translated, meta };
        console.log(`  ${lang}/${slug}: body ${body.length} -> ${translated.length}, title ${meta.title.length}`);
      }
      engine.save();
      if (!DRY_RUN) fs.writeFileSync(OUT_JSON, JSON.stringify(data), 'utf8');
      console.log(`  ${lang}: api=${engine.stats.apiCalls - a0}`);
    }
    console.log(`translate done in ${Math.round((Date.now() - t0) / 1000)}s (api=${engine.stats.apiCalls})`);
  }

  if (!DRY_RUN) {
    let n = 0;
    for (const l of Object.keys(data).filter((x) => LANGS.includes(x))) {
      for (const slug of SLUGS) {
        const d = data[l][slug];
        if (!d) continue;
        fs.writeFileSync(compFile(slug, l), `${d.frontmatter}\n${d.body.replace(/^\n+/, '')}`, 'utf8');
        n++;
      }
    }
    console.log(`components written: ${n}`);
    for (const slug of SLUGS) {
      const done = LANGS.filter((l) => fs.existsSync(compFile(slug, l)));
      if (!done.length) continue;
      const r = patchPage(slug, done, data);
      console.log(`  page ${slug}: prefix=${r.prefix} imports+${r.added}`);
    }
  }
}

main().catch((e) => {
  console.error('FATAL:', e.message);
  process.exit(1);
});
