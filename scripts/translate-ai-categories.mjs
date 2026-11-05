#!/usr/bin/env node
/**
 * translate-ai-categories.mjs
 *
 * `/{lang}/ai-answer-center/` renders the suggested-question categories from
 * `src/lib/ai-categories-l10n.ts`. That file carries hand-written question
 * sets for en/de/es/fr/it only; every other locale falls back to the English
 * questions (and the nl page gets canonical-flagged by the SEO gate as
 * untranslated content).
 *
 * This script machine-translates the 12 English questions for the newer
 * locales and appends them to `AI_CATEGORIES`, leaving the hand-written
 * entries untouched (they always win at runtime). Category labels are not
 * translated here — they are `LABEL_answerCenter.cat*` i18n key references
 * resolved by the page via the generated UI map.
 *
 * Usage:
 *   node scripts/translate-ai-categories.mjs                 # translate + emit
 *   node scripts/translate-ai-categories.mjs --langs=nl,ko   # subset
 *   node scripts/translate-ai-categories.mjs --dry-run       # no API calls
 *   node scripts/translate-ai-categories.mjs --force         # re-translate existing MT locales
 *
 * After running, format the emitted file: `npx prettier --write src/lib/ai-categories-l10n.ts`.
 * Requires Node >= 22.18 (native TypeScript type stripping) to import the l10n map.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createEngine, fixTokenSpacing } from './lib/translate-lib.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LANGS_ALL = 'nl pl pt ru ar th tr id ms ro bg hu tl'.split(' ');
const CACHE_FILE = path.resolve(ROOT, '.cache', 'ai-categories-cache.json');
const OUT_FILE = path.resolve(ROOT, 'src/lib/ai-categories-l10n.ts');

const argOf = (n) => {
  const a = process.argv.find((s) => s.startsWith(`--${n}=`));
  return a ? a.slice(n.length + 3) : null;
};
const LANGS = (argOf('langs') || LANGS_ALL.join(','))
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const DRY_RUN = process.argv.includes('--dry-run');
const FORCE = process.argv.includes('--force');

const engine = createEngine({ cacheFile: CACHE_FILE, dryRun: DRY_RUN, log: console.log });

function emit(existing, data) {
  const merged = { ...existing };
  for (const lang of Object.keys(data)) merged[lang] = data[lang];
  const lines = [];
  lines.push('export const AI_CATEGORIES: Record<string, any> = {');
  for (const lang of Object.keys(merged)) {
    lines.push(`  ${lang}: [`);
    for (const cat of merged[lang]) {
      lines.push('    {');
      lines.push(`      label: ${JSON.stringify(cat.label)},`);
      lines.push(`      icon: ${JSON.stringify(cat.icon)},`);
      lines.push('      questions: [');
      for (const q of cat.questions) lines.push(`        ${JSON.stringify(q)},`);
      lines.push('      ],');
      lines.push('    },');
    }
    lines.push('  ],');
  }
  lines.push('};');
  fs.writeFileSync(OUT_FILE, lines.join('\n') + '\n', 'utf8');
  return Object.keys(merged).length;
}

async function main() {
  const mod = await import(pathToFileURL(OUT_FILE).href);
  const existing = mod.AI_CATEGORIES;
  engine.load();
  console.log(
    `locales present: ${Object.keys(existing).join(',')} | target langs=${LANGS.join(',')} cache=${engine.cacheSize}`
  );
  if (!DRY_RUN) {
    await engine.refreshSession();
    console.log('Bing session ok');
  }

  const en = existing.en;
  const data = {};
  for (const lang of LANGS) {
    if (!FORCE && existing[lang]) {
      console.log(`  ${lang}: already present, skip (use --force to retranslate)`);
      continue;
    }
    const a0 = engine.stats.apiCalls;
    const cats = [];
    for (const cat of en) {
      const out = await engine.translateBatch(cat.questions, lang);
      cats.push({
        label: cat.label,
        icon: cat.icon,
        questions: cat.questions.map((q, i) => fixTokenSpacing(out[i] || q)),
      });
    }
    data[lang] = cats;
    engine.save();
    console.log(`  ${lang}: api=${engine.stats.apiCalls - a0}`);
  }

  if (DRY_RUN) {
    console.log('dry-run: no file written');
    return;
  }
  const total = emit(existing, data);
  console.log(`ai-categories-l10n.ts written: ${total} locales`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
