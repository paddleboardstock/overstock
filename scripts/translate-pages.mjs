#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';
import { createEngine, translateObjectDeep } from './lib/translate-lib.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const PAGES = [
  'home',
  'about',
  'trust',
  'success-stories',
  'authority',
  'solutions',
  'brand-why-paddleboardoverstock',
  'why-paddleboardoverstock',
  'brand-team',
  'markets-africa',
  'markets-brazil',
  'markets-indonesia',
  'markets-kenya',
  'markets-latin-america',
  'markets-mexico',
  'markets-middle-east',
  'markets-philippines',
  'markets-south-africa',
  'markets-southeast-asia',
  'markets-thailand',
  'markets-uae',
  'wholesale-paddle-boards',
  'mixed-model-wholesale',
  'international-shipping',
  'about-paddle-board-overstock',
  'academy',
  'brand-marine-expertise',
  'cases',
  'community',
  'contact',
  'factory',
  'factory-capacity',
  'factory-equipment',
  'factory-process',
  'factory-quality-lab',
  'gallery',
  'knowledge',
  'learn',
  'learn-content',
  'lifestyle',
  'media',
  'paddleboardoverstock-story',
  'quality',
  'quality-control',
  'resources',
  'safety',
  'solutions-clubs',
  'solutions-rental-business',
  'solutions-resorts',
  'technology',
  'testimonials',
  'warranty',
];

const LANGS = ['de', 'es', 'fr', 'it', 'pt', 'ru', 'pl', 'ar', 'nl', 'th', 'tr', 'id', 'hu', 'ro', 'bg', 'ms', 'tl'];

const CACHE_FILE = path.join(ROOT, '.cache', 'page-translate-cache.json');
const FORCE = process.argv.includes('--force');
const DRY_RUN = process.argv.includes('--dry-run');

// Bing engine (shared lib with the other bulk translators): batched requests,
// brand/technical-term masking, resumable cache keyed `${lang}::${text}` —
// same key format as the previous Google-path cache, so existing entries hit.
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

  let done = 0,
    skipped = 0;

  for (const page of PAGES) {
    const enPath = path.join(ROOT, 'src/data/pages', `${page}.yaml`);
    if (!fs.existsSync(enPath)) {
      console.log(`  SKIP ${page}: EN not found`);
      continue;
    }
    const enDoc = YAML.parse(fs.readFileSync(enPath, 'utf8'));
    console.log(`\n--- ${page} ---`);

    for (const lang of LANGS) {
      const outDir = path.join(ROOT, 'src/data/pages', lang);
      const outPath = path.join(outDir, `${page}.yaml`);

      if (fs.existsSync(outPath) && !FORCE) {
        const existingDoc = YAML.parse(fs.readFileSync(outPath, 'utf8'));
        const enJson = JSON.stringify(enDoc);
        const existingJson = JSON.stringify(existingDoc);
        if (enJson !== existingJson) {
          skipped++;
          continue;
        }
      }

      if (DRY_RUN) {
        console.log(`  ${lang}: would translate ${page}`);
        continue;
      }

      try {
        const translated = await translateObjectDeep(engine, enDoc, lang);
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(outPath, YAML.stringify(translated, { lineWidth: 0, singleQuote: true }), 'utf8');
        engine.save();
        done++;
        const s = engine.stats;
        console.log(`  ${lang}: done (api=${s.apiCalls} cache=${s.cacheHits} fail=${s.failures})`);
      } catch (err) {
        engine.save();
        console.log(`  ${lang}: ERROR - ${err.message}`);
      }
    }
  }

  engine.save();
  const s = engine.stats;
  console.log(
    `\n=== Done: created=${done} skipped=${skipped} apiCalls=${s.apiCalls} cacheHits=${s.cacheHits} fallbacks=${s.fallbacks} failures=${s.failures} ===`
  );
  if (s.failures > 0) console.log(`!!! WARNING: ${s.failures} strings fell back to EN untranslated — re-run required`);
}

main().catch(console.error);
