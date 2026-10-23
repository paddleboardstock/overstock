#!/usr/bin/env node
/**
 * translate-guides-l10n.mjs
 *
 * `/{lang}/guides/<slug>/` renders the English records from `src/data/guides.ts`
 * through the hand-maintained maps in `src/lib/guides-l10n.ts`
 * (`GUIDE_L10N` / `GUIDE_META_L10N` / `GUIDE_HEADINGS`). Those maps only cover
 * de/es/fr/it, so every other locale shows the English guide body (and gets
 * canonical-folded to the EN page).
 *
 * This script machine-translates the 16 guide records for the newer locales into
 * `src/lib/guides-l10n-mt.ts` (same shape as the hand-maintained map, which keeps
 * winning at runtime) plus the category/difficulty/water-type labels and section
 * headings used by the guide pages.
 *
 * Usage:
 *   node scripts/translate-guides-l10n.mjs                 # translate + emit
 *   node scripts/translate-guides-l10n.mjs --langs=bg,ko   # subset
 *   node scripts/translate-guides-l10n.mjs --dry-run       # no API calls
 *   node scripts/translate-guides-l10n.mjs --emit-only     # rewrite file from cache
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createEngine, isTranslatableLine } from './lib/translate-lib.mjs';
import { guides } from '../src/data/guides.ts';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LANGS_ALL = 'bg et he hr hu id ko lt lv ms ro sk sl sr th tl tr'.split(' ');
const CACHE_FILE = path.resolve(ROOT, path.join('.cache', 'guides-cache.json'));
const OUT_FILE = path.join(ROOT, 'src/lib/guides-l10n-mt.ts');
const OUT_JSON = path.join(ROOT, '.cache', 'guides-out.json');

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

/** English section labels (the values the pages fall back to). */
const META_EN = {
  category: {
    'buying-guide': 'Buying Guides',
    tutorial: 'Tutorials',
    safety: 'Safety',
    technical: 'Technical',
    maintenance: 'Maintenance',
    lifestyle: 'Lifestyle & Fitness',
    planning: 'Trip Planning',
  },
  difficulty: { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' },
  waterType: { lake: 'Lake', sea: 'Sea', river: 'River' },
};
const HEADINGS_EN = {
  nav: 'Guides',
  problem: 'The challenge',
  solution: 'The solution',
  steps: 'Steps',
  faq: 'FAQ',
  audience: 'Audience',
  related: 'Related',
};

const sanitizeText = (s) =>
  String(s)
    .replace(/<\/?[A-Za-z][^>]{0,120}>/g, '')
    .replace(/[<>]/g, '')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;');

function collectUnits() {
  const units = new Set();
  const add = (s) => {
    if (typeof s === 'string' && isTranslatableLine(s)) units.add(s);
  };
  for (const g of guides) {
    add(g.title);
    add(g.description);
    add(g.tldr);
    add(g.problem);
    add(g.solution);
    add(g.audience);
    for (const s of g.steps) add(s);
    for (const f of g.faq) {
      add(f.q);
      add(f.a);
    }
  }
  for (const group of Object.values(META_EN)) for (const v of Object.values(group)) add(v);
  for (const v of Object.values(HEADINGS_EN)) add(v);
  return [...units];
}

async function translateUnits(engine, list, lang) {
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

async function translateLang(engine, lang) {
  const units = collectUnits();
  const map = await translateUnits(engine, units, lang);
  const tr = (s) => (typeof s === 'string' && isTranslatableLine(s) ? sanitizeText(map.get(s) || s) : s);

  const bySlug = {};
  for (const g of guides) {
    bySlug[g.slug] = {
      title: tr(g.title),
      description: tr(g.description),
      tldr: tr(g.tldr),
      problem: tr(g.problem),
      solution: tr(g.solution),
      audience: tr(g.audience),
      steps: g.steps.map(tr),
      faq: g.faq.map((f) => ({ q: tr(f.q), a: tr(f.a) })),
    };
  }

  const meta = {};
  for (const [group, values] of Object.entries(META_EN)) {
    meta[group] = {};
    for (const [key, value] of Object.entries(values)) meta[group][key] = tr(value);
  }

  const headings = {};
  for (const [key, value] of Object.entries(HEADINGS_EN)) headings[key] = tr(value);

  return { l10n: bySlug, meta, headings };
}

function emit(data) {
  const langs = Object.keys(data).filter((l) => LANGS.includes(l));
  const lines = [];
  lines.push(`/**`);
  lines.push(` * Machine translations for the guide pages (\`/{lang}/guides/<slug>/\`).`);
  lines.push(` *`);
  lines.push(` * Generated by \`scripts/translate-guides-l10n.mjs\` — the hand-maintained maps in`);
  lines.push(` * \`~/lib/guides-l10n\` always take precedence at runtime, these are the fallbacks for`);
  lines.push(` * the locales that ship without hand-written guide copy.`);
  lines.push(` */`);
  lines.push(`import type { GuideL10n } from './guides-l10n';`);
  lines.push('');
  lines.push(`export const GUIDE_L10N_MT: Record<string, Record<string, GuideL10n>> = {`);
  for (const l of langs) {
    lines.push(`  ${l}: {`);
    for (const [slug, v] of Object.entries(data[l].l10n)) {
      lines.push(`    ${JSON.stringify(slug)}: {`);
      for (const key of ['title', 'description', 'tldr', 'problem', 'solution', 'audience']) {
        lines.push(`      ${key}: ${JSON.stringify(v[key])},`);
      }
      lines.push(`      steps: ${JSON.stringify(v.steps)},`);
      lines.push(`      faq: ${JSON.stringify(v.faq)},`);
      lines.push(`    },`);
    }
    lines.push(`  },`);
  }
  lines.push(`};`);
  lines.push('');
  lines.push(`export const GUIDE_META_L10N_MT: Record<string, Record<string, Record<string, string>>> = {`);
  for (const l of langs) {
    lines.push(`  ${l}: ${JSON.stringify(data[l].meta)},`);
  }
  lines.push(`};`);
  lines.push('');
  lines.push(`export const GUIDE_HEADINGS_MT: Record<string, Record<string, string>> = {`);
  for (const l of langs) {
    lines.push(`  ${l}: ${JSON.stringify(data[l].headings)},`);
  }
  lines.push(`};`);
  lines.push('');
  fs.writeFileSync(OUT_FILE, lines.join('\n'), 'utf8');
  return langs.length;
}

async function main() {
  if (EMIT_ONLY) {
    const data = JSON.parse(fs.readFileSync(OUT_JSON, 'utf8'));
    console.log(`emitted ${emit(data)} languages -> ${path.relative(ROOT, OUT_FILE)}`);
    return;
  }

  const engine = createEngine({ cacheFile: CACHE_FILE, dryRun: DRY_RUN, log: console.log });
  engine.load();
  console.log(
    `guides=${guides.length} units=${collectUnits().length} langs=${LANGS.join(',')} cache=${engine.cacheSize}`
  );
  if (!DRY_RUN) {
    await engine.refreshSession();
    console.log('Bing session ok');
  }

  const data = fs.existsSync(OUT_JSON) ? JSON.parse(fs.readFileSync(OUT_JSON, 'utf8')) : {};
  const t0 = Date.now();
  for (const lang of LANGS) {
    const a0 = engine.stats.apiCalls;
    data[lang] = await translateLang(engine, lang);
    engine.save();
    console.log(`  ${lang}: api=${engine.stats.apiCalls - a0} bytes=${JSON.stringify(data[lang]).length}`);
  }
  fs.writeFileSync(OUT_JSON, JSON.stringify(data), 'utf8');
  console.log(`translate done in ${Math.round((Date.now() - t0) / 1000)}s (api=${engine.stats.apiCalls})`);
  if (!DRY_RUN) console.log(`emitted ${emit(data)} languages -> ${path.relative(ROOT, OUT_FILE)}`);
}

main().catch((e) => {
  console.error('FATAL:', e.message);
  process.exit(1);
});
