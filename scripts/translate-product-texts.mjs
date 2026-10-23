#!/usr/bin/env node
/**
 * translate-product-texts.mjs
 *
 * Adds per-language blocks to src/data/product-texts.ts for the target
 * languages, translating every product's prose fields from src/data/products.ts
 * (the English source of truth) with the shared Bing engine.
 *
 * Difference vs scripts/translate-products.mjs (Google/MyMemory): this one runs
 * on the reachable cn.bing.com backend, batches strings, and covers ALL products
 * found in products.ts (not a hardcoded subset).
 *
 * Usage: node scripts/translate-product-texts.mjs [--langs=bg,ko] [--force]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createEngine, translateObjectDeep } from './lib/translate-lib.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PRODUCTS_PATH = path.join(ROOT, 'src/data/products.ts');
const TEXTS_PATH = path.join(ROOT, 'src/data/product-texts.ts');
const CACHE_FILE = (() => {
  const a = process.argv.find((s) => s.startsWith('--cache='));
  return a ? path.resolve(ROOT, a.slice('--cache='.length)) : path.join(ROOT, '.cache', 'product-translate-cache.json');
})();
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

const argOf = (n) => {
  const a = process.argv.find((s) => s.startsWith(`--${n}=`));
  return a ? a.slice(n.length + 3) : null;
};
const LANGS = (argOf('langs') || DEFAULT_LANGS.join(','))
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const DRY_RUN = process.argv.includes('--dry-run');

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
const STR_FIELDS = ['desc', 'definition', 'problem', 'howItWorks', 'audience', 'ai_comparison'];

function extractProducts(ts) {
  const out = [];
  const idRe = /\bid:\s*'([^']+)'/g;
  let m;
  while ((m = idRe.exec(ts)) !== null) {
    const id = m[1];
    let start = m.index;
    while (start > 0 && ts[start] !== '{') start--;
    let depth = 0,
      end = -1;
    for (let i = start; i < ts.length; i++) {
      if (ts[i] === '{') depth++;
      else if (ts[i] === '}') {
        depth--;
        if (depth === 0) {
          end = i + 1;
          break;
        }
      }
    }
    if (end === -1) continue;
    const obj = ts.slice(start, end);
    const product = { id };
    for (const f of STR_FIELDS) {
      const fm = obj.match(new RegExp(`${f}:\\s*'((?:[^'\\\\]|\\\\.)*)'`));
      if (fm) product[f] = fm[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\');
    }
    const nm = obj.match(/\bname:\s*'((?:[^'\\\\]|\\\\.)*)'/);
    if (nm) product.name = nm[1].replace(/\\'/g, "'");
    const uc = obj.match(/ai_use_cases:\s*\[([\s\S]*?)\]/);
    if (uc) product.ai_use_cases = [...uc[1].matchAll(/'((?:[^'\\]|\\.)*)'/g)].map((x) => x[1].replace(/\\'/g, "'"));
    const sp = obj.match(/ai_specs:\s*\{([\s\S]*?)\}/);
    if (sp) {
      product.ai_specs = {};
      for (const pair of sp[1].matchAll(/(\w+):\s*'((?:[^'\\]|\\.)*)'/g))
        product.ai_specs[pair[1]] = pair[2].replace(/\\'/g, "'");
    }
    const fq = obj.match(/ai_faq:\s*\[([\s\S]*?)\]\s*,?\s*\}/);
    if (fq) {
      product.ai_faq = [];
      for (const qa of fq[1].matchAll(/\{\s*q:\s*'((?:[^'\\]|\\.)*)',\s*a:\s*'((?:[^'\\]|\\.)*)'\s*\}/g)) {
        product.ai_faq.push({ q: qa[1].replace(/\\'/g, "'"), a: qa[2].replace(/\\'/g, "'") });
      }
    }
    out.push(product);
  }
  return out;
}

const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

function generateEntry(id, t) {
  const L = [`    '${id}': {`];
  if (t.name) L.push(`      name: '${esc(t.name)}',`);
  for (const f of STR_FIELDS) if (t[f]) L.push(`      ${f}: '${esc(t[f])}',`);
  if (t.ai_use_cases?.length) {
    L.push('      ai_use_cases: [');
    t.ai_use_cases.forEach((u) => L.push(`        '${esc(u)}',`));
    L.push('      ],');
  }
  if (t.ai_specs && Object.keys(t.ai_specs).length) {
    L.push('      ai_specs: {');
    for (const [k, v] of Object.entries(t.ai_specs)) L.push(`        ${k}: '${esc(v)}',`);
    L.push('      },');
  }
  if (t.ai_comparison) L.push(`      ai_comparison: '${esc(t.ai_comparison)}',`);
  if (t.ai_faq?.length) {
    L.push('      ai_faq: [');
    t.ai_faq.forEach((f) => L.push(`        { q: '${esc(f.q)}', a: '${esc(f.a)}' },`));
    L.push('      ],');
  }
  L.push('    },');
  return L.join('\n');
}

function ensureLangBlocks(content, langs) {
  let out = content;
  for (const l of langs) {
    if (!new RegExp(`\\n  ${l}: \\{`).test(out)) {
      out = out.replace(/\n\};\n?$/, `\n  ${l}: {\n  },\n};\n`);
    }
  }
  return out;
}
function findLangBlockEnd(content, lang) {
  const start = content.indexOf(`\n  ${lang}: {`);
  if (start === -1) return -1;
  let depth = 0,
    started = false;
  for (let i = start; i < content.length; i++) {
    if (content[i] === '{') {
      depth++;
      started = true;
    } else if (content[i] === '}') {
      depth--;
      if (started && depth === 0) return i;
    }
  }
  return -1;
}
/**
 * An entry key may be quoted or bare (`'kaboat': {` / `kaboat: {`), so a plain
 * `includes("'<id>': {")` check re-appends entries that already exist and leaves
 * duplicate object keys behind (legal JS, but TS1117 in `astro check`).
 */
function entryPattern(id) {
  return new RegExp(`(^|\\n) {4}(?:'${id}'|"${id}"|${id}): \\{`);
}
function hasEntry(block, id) {
  return entryPattern(id).test(block);
}
function appendToBlock(lang, entries) {
  let content = fs.readFileSync(TEXTS_PATH, 'utf8');
  const end = findLangBlockEnd(content, lang);
  if (end === -1) return false;
  const block = content.slice(content.indexOf(`\n  ${lang}: {`), end);
  const fresh = entries.filter((e) => {
    const m = e.match(/^ {4}'(?:[^']+)':/);
    const id = m ? m[0].slice(5, -2) : null;
    return !id || !hasEntry(block, id);
  });
  if (!fresh.length) return false;
  content = content.slice(0, end) + '\n' + fresh.join('\n') + '\n  ' + content.slice(end);
  fs.writeFileSync(TEXTS_PATH, content, 'utf8');
  return true;
}

async function main() {
  const products = extractProducts(fs.readFileSync(PRODUCTS_PATH, 'utf8'));
  console.log(`Products found: ${products.length}`);
  const engine = createEngine({ cacheFile: CACHE_FILE, extraPatterns: EXTRA, dryRun: DRY_RUN, log: console.log });
  engine.load();
  console.log(`Cache: ${engine.cacheSize} entries | langs=${LANGS.join(', ')}`);

  if (!DRY_RUN) {
    fs.writeFileSync(TEXTS_PATH, ensureLangBlocks(fs.readFileSync(TEXTS_PATH, 'utf8'), LANGS), 'utf8');
    await engine.refreshSession();
    console.log('Bing session ok');
  }

  const t0 = Date.now();
  for (const lang of LANGS) {
    const content0 = fs.readFileSync(TEXTS_PATH, 'utf8');
    const startIdx = content0.indexOf(`\n  ${lang}: {`);
    const langEnd0 = findLangBlockEnd(content0, lang);
    const block = content0.slice(startIdx, langEnd0);
    const missing = products.filter((p) => !hasEntry(block, p.id));
    if (!missing.length) {
      console.log(`  ${lang}: up-to-date`);
      continue;
    }

    // Batch every field of every missing product in a single translateObjectDeep
    // pass so the engine can pack ~30 lines per request across products.
    const srcList = missing.map((p) => {
      const src = { name: p.name };
      for (const f of STR_FIELDS) if (p[f]) src[f] = p[f];
      if (p.ai_use_cases) src.ai_use_cases = p.ai_use_cases;
      if (p.ai_specs) src.ai_specs = p.ai_specs;
      if (p.ai_faq) src.ai_faq = p.ai_faq;
      return src;
    });
    const a0 = engine.stats.apiCalls,
      c0 = engine.stats.cacheHits;
    const translated = await translateObjectDeep(engine, srcList, lang);
    const entries = translated.map((t, i) => {
      t.name = missing[i].name; // model names stay verbatim
      return generateEntry(missing[i].id, t);
    });
    if (!DRY_RUN && entries.length) appendToBlock(lang, entries);
    engine.save();
    console.log(
      `  ${lang}: +${entries.length} products api=${engine.stats.apiCalls - a0} cache=${engine.stats.cacheHits - c0}`
    );
  }
  engine.save();
  console.log(
    `\n=== product-texts done: api=${engine.stats.apiCalls} cache=${engine.stats.cacheHits} fb=${engine.stats.fallbacks} fail=${engine.stats.failures} in ${Math.round((Date.now() - t0) / 1000)}s ===`
  );
}
main().catch((e) => {
  console.error('FATAL:', e.message);
  process.exit(1);
});
