#!/usr/bin/env node
/**
 * translate-product-pages.mjs
 *
 * Localizes the product DETAIL pages for the target languages. `translate-product-texts.mjs`
 * only covers `src/data/product-texts.ts` (the AI/description fields). The rendered page
 * additionally reads three hand-maintained maps that only cover the already-graduated
 * languages:
 *
 *   - src/lib/product-l10n.ts         titles / summaries / spec labels / category labels
 *   - src/lib/product-extras.ts       definition/problem/howItWorks/audience/ai_* (already
 *                                     covered for new langs by product-texts.ts)
 *   - src/lib/product-content-l10n.ts markdown body (headings, key features, standard features)
 *
 * Without them the product pages of a new language stay English, so
 * fold-untranslated-canonical rewrites their canonical to the EN root even though
 * they are listed in the sitemap.
 *
 * This script generates two MT files for the target languages and leaves the
 * hand-maintained maps untouched:
 *
 *   - src/lib/product-l10n-mt.ts          PRODUCT_L10N_MT + SKILL_L10N_MT
 *   - src/lib/product-content-l10n-mt.ts  PRODUCT_CONTENT_L10N_MT
 *
 * Translations are written per language to `--out=<dir>` so several streams can
 * run in parallel (shared Bing rate limit), then merged with `--emit`.
 *
 * Usage:
 *   node scripts/translate-product-pages.mjs --langs=bg,ko [--cache=<file>] [--out=<dir>]
 *   node scripts/translate-product-pages.mjs --emit [--out=<dir>]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as YAML from 'yaml';
import { createEngine } from './lib/translate-lib.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PRODUCT_DIR = path.join(ROOT, 'src/content/products');
const TEXTS_PATH = path.join(ROOT, 'src/data/product-texts.ts');
const OUT_L10N = path.join(ROOT, 'src/lib/product-l10n-mt.ts');
const OUT_CONTENT = path.join(ROOT, 'src/lib/product-content-l10n-mt.ts');

const DEFAULT_LANGS = [
  'bg',
  'et',
  'he',
  'hr',
  'hu',
  'id',
  'ko',
  'lt',
  'lv',
  'ms',
  'ro',
  'sk',
  'sl',
  'sr',
  'th',
  'tl',
  'tr',
];

const CATEGORY_LABELS = {
  rib: 'RIB Boats',
  inflatable: 'Inflatable Boats',
  sup: 'SUP Paddle Boards',
  accessory: 'Accessories',
  kayak: 'Kayaks & Catamarans',
  service: 'Services',
};
const SKILLS = ['beginner', 'intermediate', 'advanced', 'professional'];

/**
 * A handful of spec labels are single ambiguous English words that MT renders
 * with the wrong sense ("Beam" -> "Paat"/boat in et, "Deck" -> "Pachet"/package
 * in ro, "Inflation" -> "Täideaine"/filler). Translate an unambiguous phrase
 * instead, or keep the English word when no short equivalent exists (the
 * hand-maintained de/es maps keep "Deck" as-is too).
 */
const LABEL_SRC = {
  Beam: 'Width',
  'Pack size': 'Packaging size',
  Inflation: 'Air inflation',
  Bottom: 'Hull bottom',
};
const LABEL_LITERAL = { Deck: 'Deck' };

const argOf = (n) => {
  const a = process.argv.find((s) => s.startsWith(`--${n}=`));
  return a ? a.slice(n.length + 3) : null;
};
const LANGS = (argOf('langs') || DEFAULT_LANGS.join(','))
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const EMIT = process.argv.includes('--emit');
const DRY_RUN = process.argv.includes('--dry-run');
const CACHE_FILE = (() => {
  const a = argOf('cache');
  return a ? path.resolve(ROOT, a) : path.join(ROOT, '.cache', 'product-pages-cache.json');
})();
const OUT_DIR = path.resolve(ROOT, argOf('out') || path.join('.cache', 'product-pages'));

const EXTRA = [
  /\bAP\d+\b/gi,
  /\bDF\d+\b/gi,
  /\bEX\d+\b/gi,
  /\bSW\d+\b/gi,
  /\bVR\d+\b/gi,
  /\bApex Performance\b/gi,
  /\bDefender\b/g,
  /\bExplorer\b/g,
  /\bSwiftlitee\b/g,
  /\bVersa\b/g,
  /\bValmex PVC\b/gi,
  /\b5083 aluminum\b/gi,
  /\bdeep V\b/gi,
  /\bdeadrise\b/gi,
  /\bkeel guard\b/gi,
  /\bbow locker\b/gi,
  /\btransom\b/gi,
  /\bXL shaft\b/gi,
  /\bLong Shaft\b/gi,
  /\bShort Shaft\b/gi,
  /\bCategory [BC]\b/gi,
  /\bSAR\b/g,
  /\bcoast guard\b/gi,
  /\bFCT\b/g,
  /\bGT\b/g,
  /\bBeaufort \d+\b/g,
  /\b\d+mm\b/g,
  /\b\d+°\b/g,
  /\b\d+HP\b/g,
  /\b\d+L\b/g,
  /\b\d+ kg\b/g,
  /\b\d+ cm\b/g,
  /\b\d+\.?\d* m\b/g,
  /\bstand-up paddle\b/gi,
  /\bpaddleboard\b/gi,
  /\binflatable kayak\b/gi,
];

const esc = (s) =>
  String(s)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
const q = (s) => `'${esc(s)}'`;
const unq = (s) => s.replace(/\\'/g, "'").replace(/\\\\/g, '\\');

/** Read every product from the content collection: slug, frontmatter title, markdown body. */
function loadProducts() {
  const files = fs.readdirSync(PRODUCT_DIR).filter((f) => /\.mdx?$/.test(f));
  const out = [];
  for (const f of files) {
    const raw = fs.readFileSync(path.join(PRODUCT_DIR, f), 'utf8');
    const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
    const fm = (m && YAML.parse(m[1])) || {};
    const body = (m ? raw.slice(m[0].length) : raw).replace(/\r\n/g, '\n').trim();
    out.push({
      slug: f.replace(/\.mdx?$/, ''),
      title: String(fm.title || ''),
      summary: String(fm.summary || fm.description || ''),
      labels: (fm.specs || []).map((s) => s && s.label).filter(Boolean),
      body,
    });
  }
  return out.sort((a, b) => a.slug.localeCompare(b.slug));
}

/** Pull the already-translated `desc` out of product-texts.ts (used as page summary). */
function loadSummaries(lang) {
  const text = fs.readFileSync(TEXTS_PATH, 'utf8');
  const start = text.indexOf(`\n  ${lang}: {`);
  if (start < 0) return {};
  // Bound the scan to this language block, otherwise the loop runs on into the
  // following blocks and later languages overwrite earlier ids.
  let depth = 0,
    started = false,
    end = -1;
  for (let i = start; i < text.length; i++) {
    if (text[i] === '{') {
      depth++;
      started = true;
    } else if (text[i] === '}') {
      depth--;
      if (started && depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  if (end < 0) return {};
  const block = text.slice(start, end);
  const out = {};
  const re = /\n {4}'([^']+)': \{([\s\S]*?)\n {4}\},/g;
  let m;
  while ((m = re.exec(block)) !== null) {
    const d = m[2].match(/\n {6}desc: '((?:[^'\\]|\\.)*)'/);
    if (d) out[m[1]] = unq(d[1]);
  }
  return out;
}

/** Split a markdown body into (marker prefix, prose) pairs so markers survive MT. */
function mdLines(body) {
  return body.split('\n').map((line) => {
    const m = line.match(/^([ \t]*(?:#{1,6}[ \t]+|[-*+][ \t]+|\d+\.[ \t]+|>[ \t]*)?)([\s\S]*)$/);
    return { prefix: m[1], text: m[2] };
  });
}

const translatable = (t) => t.trim().length >= 2 && /[a-zA-Z]{2,}/.test(t) && !/^https?:/.test(t.trim());

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

async function translateLang(engine, lang, products) {
  const summaries = loadSummaries(lang);

  // Collect every prose unit of this language in one pass so the engine packs
  // small labels together with body lines.
  const units = new Set();
  for (const p of products) {
    if (translatable(p.title)) units.add(p.title);
    for (const l of p.labels) if (translatable(l)) units.add(l);
    for (const line of mdLines(p.body)) if (translatable(line.text)) units.add(line.text);
  }
  units.add(CATEGORY_LABELS.rib);
  units.add(CATEGORY_LABELS.inflatable);
  units.add(CATEGORY_LABELS.sup);
  units.add(CATEGORY_LABELS.accessory);
  units.add(CATEGORY_LABELS.kayak);
  units.add(CATEGORY_LABELS.service);
  for (const s of SKILLS) units.add(s);
  for (const src of Object.values(LABEL_SRC)) if (translatable(src)) units.add(src);

  const a0 = engine.stats.apiCalls;
  const c0 = engine.stats.cacheHits;
  const map = await translateUnits(engine, units, lang);
  const tr = (s) => (translatable(s) ? map.get(s) || s : s);

  const res = { titles: {}, summaries: {}, labels: {}, cats: {}, skills: {}, content: {} };
  const labelSet = new Set();
  for (const p of products) {
    res.titles[p.slug] = tr(p.title);
    res.summaries[p.slug] = summaries[p.slug] || tr(p.summary);
    for (const l of p.labels) labelSet.add(l);
    const lines = mdLines(p.body).map(
      ({ prefix, text }) => (prefix || '') + (translatable(text) ? map.get(text) || text : text)
    );
    res.content[p.slug] = lines.join('\n').trim();
  }
  for (const l of labelSet) res.labels[l] = LABEL_LITERAL[l] ?? tr(LABEL_SRC[l] ?? l);
  for (const [k, v] of Object.entries(CATEGORY_LABELS)) res.cats[k] = tr(v);
  for (const s of SKILLS) res.skills[s] = tr(s);

  engine.save();
  console.log(
    `  ${lang}: products=${products.length} api=${engine.stats.apiCalls - a0} cache=${engine.stats.cacheHits - c0} fb=${engine.stats.fallbacks}`
  );
  return res;
}

function emit() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const files = fs.readdirSync(OUT_DIR).filter((f) => /^[a-z]{2}\.json$/.test(f));
  const data = {};
  for (const f of files) data[f.replace(/\.json$/, '')] = JSON.parse(fs.readFileSync(path.join(OUT_DIR, f), 'utf8'));
  const langs = Object.keys(data).sort();
  if (!langs.length) {
    console.log(`emit: nothing in ${OUT_DIR}`);
    return;
  }
  const missing = DEFAULT_LANGS.filter((l) => !data[l]);
  if (missing.length) console.log(`emit: WARNING missing langs ${missing.join(',')}`);

  const l10n = [
    '// Generated by scripts/translate-product-pages.mjs — do not edit by hand.',
    '// Machine translations for languages that have no hand-maintained PRODUCT_L10N entry.',
    "import type { ProductL10n } from '~/lib/product-l10n';",
    '',
    'export const PRODUCT_L10N_MT: Record<string, ProductL10n> = {',
  ];
  for (const lang of langs) {
    const d = data[lang];
    l10n.push(`  ${lang}: {`);
    l10n.push('    titles: {');
    for (const [k, v] of Object.entries(d.titles)) l10n.push(`      ${q(k)}: ${q(v)},`);
    l10n.push('    },');
    l10n.push('    summaries: {');
    for (const [k, v] of Object.entries(d.summaries)) l10n.push(`      ${q(k)}: ${q(v)},`);
    l10n.push('    },');
    l10n.push('    labels: {');
    for (const [k, v] of Object.entries(d.labels)) l10n.push(`      ${q(k)}: ${q(v)},`);
    l10n.push('    },');
    l10n.push('    cats: {');
    for (const [k, v] of Object.entries(d.cats)) l10n.push(`      ${q(k)}: ${q(v)},`);
    l10n.push('    },');
    l10n.push('  },');
  }
  l10n.push('};');
  l10n.push('');
  l10n.push('export const SKILL_L10N_MT: Record<string, Record<string, string>> = {');
  for (const lang of langs) {
    const s = data[lang].skills;
    l10n.push(
      `  ${lang}: { ${Object.entries(s)
        .map(([k, v]) => `${k}: ${q(v)}`)
        .join(', ')} },`
    );
  }
  l10n.push('};');
  l10n.push('');
  fs.writeFileSync(OUT_L10N, l10n.join('\n'), 'utf8');

  const content = [
    '// Generated by scripts/translate-product-pages.mjs — do not edit by hand.',
    '// Machine-translated markdown bodies for languages without a hand-maintained entry.',
    'export const PRODUCT_CONTENT_L10N_MT: Record<string, Record<string, string>> = {',
  ];
  for (const lang of langs) {
    content.push(`  ${lang}: {`);
    for (const [k, v] of Object.entries(data[lang].content)) {
      content.push(`    ${q(k)}: ${q(v)},`);
    }
    content.push('  },');
  }
  content.push('};');
  content.push('');
  fs.writeFileSync(OUT_CONTENT, content.join('\n'), 'utf8');
  console.log(
    `emit: ${langs.length} langs -> ${path.relative(ROOT, OUT_L10N)} (${(fs.statSync(OUT_L10N).size / 1024).toFixed(0)} KiB), ${path.relative(ROOT, OUT_CONTENT)} (${(fs.statSync(OUT_CONTENT).size / 1024 / 1024).toFixed(2)} MiB)`
  );
}

async function main() {
  if (EMIT) {
    emit();
    return;
  }
  const products = loadProducts();
  console.log(`Products found: ${products.length} | langs=${LANGS.join(', ')}`);
  const engine = createEngine({ cacheFile: CACHE_FILE, extraPatterns: EXTRA, dryRun: DRY_RUN, log: console.log });
  engine.load();
  console.log(`Cache: ${engine.cacheSize} entries`);
  fs.mkdirSync(OUT_DIR, { recursive: true });
  if (!DRY_RUN) {
    await engine.refreshSession();
    console.log('Bing session ok');
  }
  const t0 = Date.now();
  for (const lang of LANGS) {
    const outFile = path.join(OUT_DIR, `${lang}.json`);
    if (fs.existsSync(outFile) && !process.argv.includes('--force')) {
      console.log(`  ${lang}: up-to-date (${path.relative(ROOT, outFile)})`);
      continue;
    }
    const res = await translateLang(engine, lang, products);
    if (!DRY_RUN) fs.writeFileSync(outFile, JSON.stringify(res), 'utf8');
  }
  engine.save();
  console.log(
    `\n=== product pages done: api=${engine.stats.apiCalls} cache=${engine.stats.cacheHits} fb=${engine.stats.fallbacks} fail=${engine.stats.failures} in ${Math.round((Date.now() - t0) / 1000)}s ===`
  );
}
main().catch((e) => {
  console.error('FATAL:', e.message);
  process.exit(1);
});
