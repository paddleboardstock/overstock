#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createEngine } from './lib/translate-lib.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const CONFIG_PATH = path.join(ROOT, 'src/data/site/i18n-config.json');
const CACHE_FILE = path.join(ROOT, '.cache', 'i18n-translate-cache.json');
const DRY_RUN = process.argv.includes('--dry-run');

const SKIP_PATTERNS = [
  /^(ISO|CE|OEM|ODM|SUP|RIB|PVC|Hypalon|Drop-Stitch|CSM|UV|RFID|SLA|MOQ|FOB|CIF|BSCI|REACH|UKCA|EVA|PFD|TLDR|FAQ)[\s/]|^(ISO|CE|OEM|ODM|SUP|RIB|PVC|Hypalon|Drop-Stitch|CSM|UV|RFID|SLA|MOQ|FOB|CIF|BSCI|REACH|UKCA|EVA|PFD|TLDR|FAQ)$/,
  /^Paddle Board Overstock$/,
];

function shouldTranslate(value) {
  if (typeof value !== 'string') return false;
  const v = value.trim();
  if (!v || v.length < 3) return false;
  if (/^\d+[\d,.+-]*$/.test(v)) return false;
  for (const p of SKIP_PATTERNS) {
    if (p.test(v)) return false;
  }
  if (!/[a-zA-Z]{3,}/.test(v)) return false;
  return true;
}

// Bing engine (shared lib): batched requests, brand/technical-term masking,
// resumable cache keyed `${lang}::${text}` — same key format as the previous
// Google-path cache, so existing entries hit.
const engine = createEngine({
  cacheFile: CACHE_FILE,
  rateMs: 120,
  dryRun: DRY_RUN,
  log: (m) => console.log(m),
});

async function main() {
  engine.load();
  await engine.refreshSession(); // fail fast if Bing is unreachable
  console.log(`Cache: ${engine.cacheSize} entries`);

  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
  const enKeys = Object.keys(config.en);
  const langs = Object.keys(config).filter((l) => l !== 'en');

  let translated = 0;
  let skipped = 0;

  for (const lang of langs) {
    console.log(`\n--- ${lang} ---`);
    const todo = [];
    for (const key of enKeys) {
      const enVal = config.en[key];
      const langVal = config[lang][key];
      if (langVal && langVal !== enVal) continue;
      if (!shouldTranslate(enVal)) {
        skipped++;
        continue;
      }
      todo.push(key);
    }
    if (!todo.length) {
      console.log(`  ${lang}: up to date`);
      continue;
    }

    let langTranslated = 0;
    // Multi-line values would break translateBatch's line-count assertion;
    // send those through translate1 one at a time.
    const singles = todo.filter((k) => config.en[k].includes('\n'));
    const batchKeys = todo.filter((k) => !singles.includes(k));

    if (batchKeys.length) {
      const values = batchKeys.map((k) => config.en[k]);
      const out = await engine.translateBatch(values, lang);
      for (let i = 0; i < batchKeys.length; i++) {
        if (out[i] && out[i] !== values[i]) {
          config[lang][batchKeys[i]] = out[i];
          langTranslated++;
          translated++;
        } else {
          skipped++;
        }
      }
    }
    for (const key of singles) {
      const enVal = config.en[key];
      const out = await engine.translate1(enVal, lang);
      if (out && out !== enVal) {
        config[lang][key] = out;
        langTranslated++;
        translated++;
      } else {
        skipped++;
      }
    }

    if (langTranslated > 0) {
      fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf8');
      engine.save();
    }
    console.log(`  ${lang}: ${langTranslated} keys translated (${todo.length} candidates)`);
  }

  engine.save();
  const s = engine.stats;
  console.log(`\n=== Done ===`);
  console.log(`Translated: ${translated}, Skipped: ${skipped}`);
  console.log(`API calls: ${s.apiCalls}, Cache hits: ${s.cacheHits}, Failures: ${s.failures}`);
  if (s.failures > 0) console.log(`!!! WARNING: ${s.failures} strings fell back to EN untranslated — re-run required`);
}

main().catch(console.error);
