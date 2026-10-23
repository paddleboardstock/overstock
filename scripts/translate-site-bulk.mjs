#!/usr/bin/env node
/**
 * translate-site-bulk.mjs
 *
 * Translates the per-language site data files:
 *   src/data/site/<base>.yaml  ->  src/data/site/<base>.<lang>.yaml
 * for the bases the graduated languages carry (about, content-v2, proof-points,
 * tech-cards, trust-badges, use-cases). Skips existing files unless --force.
 *
 * Usage: node scripts/translate-site-bulk.mjs [--langs=bg,ko] [--bases=about,use-cases] [--force]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { createEngine, translateObjectDeep } from './lib/translate-lib.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(path.join(ROOT, 'package.json'));
const YAML = require('yaml');

const SITE = path.join(ROOT, 'src/data/site');
const CACHE_FILE = (() => {
  const a = process.argv.find((s) => s.startsWith('--cache='));
  return a ? path.resolve(ROOT, a.slice('--cache='.length)) : path.join(ROOT, '.cache', 'page-translate-cache.json');
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
const BASES = [
  'about',
  'content-v2',
  'proof-points',
  'tech-cards',
  'trust-badges',
  'use-cases',
  'evidence',
  'research',
];

const argOf = (n) => {
  const a = process.argv.find((s) => s.startsWith(`--${n}=`));
  return a ? a.slice(n.length + 3) : null;
};
const LANGS = (argOf('langs') || DEFAULT_LANGS.join(','))
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const baseArg = argOf('bases');
const BASE_FILTER = baseArg ? new Set(baseArg.split(',').map((s) => s.trim())) : null;
const FORCE = process.argv.includes('--force');
const DRY_RUN = process.argv.includes('--dry-run');

async function main() {
  const engine = createEngine({ cacheFile: CACHE_FILE, dryRun: DRY_RUN, log: console.log });
  engine.load();
  const bases = BASES.filter(
    (b) => (!BASE_FILTER || BASE_FILTER.has(b)) && fs.existsSync(path.join(SITE, `${b}.yaml`))
  );
  console.log(`Cache: ${engine.cacheSize} entries | langs=${LANGS.length} | bases=${bases.join(', ')}`);
  if (!DRY_RUN) {
    await engine.refreshSession();
    console.log(`Bing session ok (ig=${String(engine.session.ig).slice(0, 8)}…)`);
  }

  let created = 0,
    skipped = 0;
  const t0 = Date.now();
  let lastSave = Date.now();
  const maybeSave = (f) => {
    if (f || Date.now() - lastSave > 20000) {
      engine.save();
      lastSave = Date.now();
    }
  };

  for (const lang of LANGS) {
    for (const base of bases) {
      const out = path.join(SITE, `${base}.${lang}.yaml`);
      if (fs.existsSync(out) && !FORCE) {
        skipped++;
        continue;
      }
      const a0 = engine.stats.apiCalls,
        c0 = engine.stats.cacheHits,
        fb0 = engine.stats.fallbacks;
      try {
        const doc = YAML.parse(fs.readFileSync(path.join(SITE, `${base}.yaml`), 'utf8'));
        const translated = await translateObjectDeep(engine, doc, lang);
        if (!DRY_RUN) {
          fs.writeFileSync(out, YAML.stringify(translated, { lineWidth: 0, singleQuote: true }), 'utf8');
          maybeSave(false);
        }
        created++;
        console.log(
          `  ${lang}/${base}: done api=${engine.stats.apiCalls - a0} cache=${engine.stats.cacheHits - c0} fb=${engine.stats.fallbacks - fb0}`
        );
      } catch (err) {
        maybeSave(true);
        console.log(`  ${lang}/${base}: ERROR ${err.message}`);
        try {
          await engine.refreshSession();
        } catch {
          /* ignore */
        }
      }
    }
  }
  engine.save();
  console.log(
    `\n=== site done: created=${created} skipped=${skipped} api=${engine.stats.apiCalls} cache=${engine.stats.cacheHits} fb=${engine.stats.fallbacks} fail=${engine.stats.failures} in ${Math.round((Date.now() - t0) / 1000)}s ===`
  );
}
main().catch((e) => {
  console.error('FATAL:', e.message);
  process.exit(1);
});
