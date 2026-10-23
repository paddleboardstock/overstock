#!/usr/bin/env node
/**
 * translate-content-v2-business.mjs
 *
 * Translates src/data/content-v2-business.ts (the English business-article
 * records) into src/data/content-v2-business.<lang>.ts for every target
 * language, then wires the new modules + the new site/content-v2.<lang>.yaml
 * files into src/data/content-v2.ts (imports + contentV2ByLang entries).
 *
 * The wiring step is idempotent: re-running only adds what is missing.
 *
 * Usage: node scripts/translate-content-v2-business.mjs [--langs=bg,ko] [--force] [--no-wire]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createEngine, translateObjectDeep } from './lib/translate-lib.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const EN_TS = path.join(ROOT, 'src/data/content-v2-business.ts');
const CONSUMER = path.join(ROOT, 'src/data/content-v2.ts');
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

const argOf = (n) => {
  const a = process.argv.find((s) => s.startsWith(`--${n}=`));
  return a ? a.slice(n.length + 3) : null;
};
const LANGS = (argOf('langs') || DEFAULT_LANGS.join(','))
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const FORCE = process.argv.includes('--force');
const DRY_RUN = process.argv.includes('--dry-run');
const WIRE = !process.argv.includes('--no-wire');
const pascal = (l) => l.charAt(0).toUpperCase() + l.slice(1);

function loadEnRecords() {
  const src = fs.readFileSync(EN_TS, 'utf8');
  const eq = src.indexOf('=');
  const semi = src.lastIndexOf(';');
  const literal = src.slice(eq + 1, semi).trim();
  return new Function(`return (${literal})`)();
}

function renderTs(records) {
  return `import type { ContentV2Record } from './content-v2';\n\nexport const businessArticles: ContentV2Record[] = ${JSON.stringify(records, null, 2)};\n`;
}

function wireConsumer(langs) {
  let src = fs.readFileSync(CONSUMER, 'utf8');
  const added = [];
  for (const l of langs) {
    const P = pascal(l);
    const yamlLine = `import yaml${P} from './site/content-v2.${l}.yaml';`;
    if (!src.includes(yamlLine) && fs.existsSync(path.join(ROOT, `src/data/site/content-v2.${l}.yaml`))) {
      src = src.replace(
        /(import yamlData from '\.\/site\/content-v2\.yaml';\n(?:import yaml\w+ from '\.\/site\/content-v2\.[a-z]{2}\.yaml';\n)*)/,
        `$1${yamlLine}\n`
      );
      added.push(`yaml:${l}`);
    }
    const bizLine = `import { businessArticles as businessArticles${P} } from './content-v2-business.${l}';`;
    if (!src.includes(bizLine) && fs.existsSync(path.join(ROOT, `src/data/content-v2-business.${l}.ts`))) {
      src = src.replace(
        /(import \{ businessArticles \} from '\.\/content-v2-business';\n(?:import \{ businessArticles as businessArticles\w+ \} from '\.\/content-v2-business\.[a-z]{2}';\n)*)/,
        `$1${bizLine}\n`
      );
      added.push(`biz:${l}`);
    }
    const entry = `  ${l}: [...(yaml${P} as ContentV2Record[]), ...businessArticles${P}],`;
    if (!src.includes(`\n  ${l}: [...`)) {
      src = src.replace(
        /(\n {2}ja: \[\.\.\.\(yamlJa as ContentV2Record\[\]\), \.\.\.businessArticlesJa\],\n)/,
        `$1${entry}\n`
      );
      // if ja anchor missing, append before closing brace of the map
      if (!src.includes(`\n  ${l}: [...`))
        src = src.replace(/(\nexport function getContentV2Records)/, `${entry}\n};\n$1`);
      added.push(`entry:${l}`);
    }
  }
  // guard against a duplicated closing brace if the fallback insert fired
  if (added.some((a) => a.startsWith('entry:')) && (src.match(/^};$/gm) || []).length > 1) {
    src = src.replace(/;\n};\n(export function getContentV2Records)/, ';\n}\n\n$1');
  }
  if (!DRY_RUN) fs.writeFileSync(CONSUMER, src, 'utf8');
  return added;
}

async function main() {
  const engine = createEngine({ cacheFile: CACHE_FILE, dryRun: DRY_RUN, log: console.log });
  engine.load();
  const records = loadEnRecords();
  console.log(`Cache: ${engine.cacheSize} entries | langs=${LANGS.length} | business records=${records.length}`);
  if (!DRY_RUN) {
    await engine.refreshSession();
    console.log(`Bing session ok`);
  }

  const t0 = Date.now();
  let created = 0,
    skipped = 0;
  const done = [];
  for (const lang of LANGS) {
    const out = path.join(ROOT, `src/data/content-v2-business.${lang}.ts`);
    if (fs.existsSync(out) && !FORCE) {
      skipped++;
      done.push(lang);
      continue;
    }
    const a0 = engine.stats.apiCalls,
      c0 = engine.stats.cacheHits;
    try {
      const translated = await translateObjectDeep(engine, records, lang);
      if (!DRY_RUN) fs.writeFileSync(out, renderTs(translated), 'utf8');
      created++;
      done.push(lang);
      console.log(`  ${lang}: done api=${engine.stats.apiCalls - a0} cache=${engine.stats.cacheHits - c0}`);
    } catch (err) {
      console.log(`  ${lang}: ERROR ${err.message}`);
      try {
        await engine.refreshSession();
      } catch {
        /* ignore */
      }
    }
    engine.save();
  }
  engine.save();
  if (WIRE) {
    const added = wireConsumer(done);
    console.log(`  wired content-v2.ts: ${added.join(', ') || 'nothing to add'}`);
  }
  console.log(
    `\n=== content-v2-business done: created=${created} skipped=${skipped} api=${engine.stats.apiCalls} cache=${engine.stats.cacheHits} in ${Math.round((Date.now() - t0) / 1000)}s ===`
  );
}
main().catch((e) => {
  console.error('FATAL:', e.message);
  process.exit(1);
});
