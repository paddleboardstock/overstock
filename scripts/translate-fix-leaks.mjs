#!/usr/bin/env node
/**
 * translate-fix-leaks.mjs
 *
 * Post-pass repair for the bulk page translations: any translatable leaf whose
 * value still equals the EN source (because a batch request failed mid-page and
 * the engine fell back to the source text) is re-translated in place.
 *
 * Values that are legitimately language-neutral (codes, dimensions, pure
 * numbers) are skipped; brand/person names are still sent, Bing usually keeps
 * them while translating the surrounding words.
 *
 * Usage:
 *   node scripts/translate-fix-leaks.mjs [--langs=bg,ko] [--pages=a,b]
 *     [--dry-run] [--min-len=4] [--verbose] [--apply] [--scrub]
 *
 * Default is dry-run (report only); pass --apply to write the files.
 * --scrub only strips MT artefacts (<Pg6>, <$USD>) from existing files (no network).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';
import {
  createEngine,
  shouldTranslate,
  translateObjectDeep,
  splitParts,
  isTranslatableLine,
} from './lib/translate-lib.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES = path.join(ROOT, 'src/data/pages');
const CACHE_FILE = path.join(ROOT, '.cache', 'page-translate-cache.json');
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
const PAGE_FILTER = argOf('pages')
  ? new Set(
      argOf('pages')
        .split(',')
        .map((s) => s.trim())
    )
  : null;
const MIN_LEN = argOf('min-len') ? Number(argOf('min-len')) : 4;
const APPLY = process.argv.includes('--apply');
const VERBOSE = process.argv.includes('--verbose');
const SCRUB = process.argv.includes('--scrub');

const norm = (s) => String(s).replace(/\s+/g, ' ').trim();
// Bing artefacts: page markers ("<Pg6>") and currency junk ("<$USD>").
const MT_ARTIFACTS = /<Pg\s*\d+\s*>|<\$[^>]{0,12}>/gi;

/** Keys whose values are proper nouns / codes and must never be "fixed". */
const PROPER_NOUN_KEYS = new Set([
  'name',
  'customer',
  'client',
  'author',
  'company',
  'amount',
  'value',
  'spec',
  'size',
  'length',
  'file',
  'sku',
  'code',
  'model',
  'models',
  'recommended_models',
  'instagram',
  'youtube',
  'linkedin',
  'facebook',
  'twitter',
]);
/** Keys that hold display copy, where an untranslated value is always a bug. */
const DISPLAY_KEYS = new Set([
  'title',
  'tagline',
  'heading',
  'subtitle',
  'label',
  'link_label',
  'cta',
  'button',
  'question',
  'answer',
  'description',
  'alt',
  'imageAlt',
  'excerpt',
]);
// English function words: their presence in a value that still matches the EN
// source is the strongest signal that the value was never translated.
const STOPWORDS =
  /\b(the|of|and|for|with|your|our|we|you|is|are|was|were|to|in|on|by|from|at|that|this|these|those|its|their|more|all|can|will|not|how|what|why|when|where|which|who|us|it|as|or|an?)\b/i;

/** Language-neutral values: codes, dimensions, model numbers, pure numbers. */
function isNeutral(v) {
  const t = v.trim();
  if (t.length < MIN_LEN) return true;
  if (/^[\d\s.,:;×xX%+\-/()[\]]+$/.test(t)) return true;
  if (!/\s/.test(t) && /^[A-Z0-9][A-Z0-9 .,'&()/-]*$/.test(t)) return true; // ACRONYM / Model-Name
  return false;
}

/** A leak candidate is a value that still reads as English. */
function isCandidate(key, value) {
  const t = value.trim();
  if (isNeutral(t)) return false;
  if (PROPER_NOUN_KEYS.has(key)) return false;
  const plain = t
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (plain.includes('@') || /^(https?:\/\/|www\.)/i.test(plain)) return false; // e-mail / URL
  if (/^(AirDeck|KaBoat|AF|RIB)\s*\d/i.test(plain)) return false; // product model
  // Model / standard codes ("RIB 520", "AF580 RIB", "ISO 9001:2015", "EN ISO 6185-4").
  const tokens = plain.split(/\s+/).filter(Boolean);
  const codeTokens = tokens.filter((w) => /^[A-Z0-9][A-Z0-9.,:/()&-]*$/.test(w));
  if (tokens.length && codeTokens.length / tokens.length > 0.5) return false;
  if (STOPWORDS.test(plain)) return true;
  // Short display copy ("US Warehouse", "Private Label") carries no stopword.
  return DISPLAY_KEYS.has(key) && tokens.length >= 2 && /[a-zA-Z]{3,}/.test(plain);
}

const TAG_RE = /<[^>]+>/g;
const tagsOf = (s) => (String(s).match(TAG_RE) || []).map((t) => t.toLowerCase().replace(/\s+/g, ''));

function walk(node, key, prefix, out) {
  if (typeof node === 'string') {
    out.push({ key, path: prefix, value: node });
    return out;
  }
  if (Array.isArray(node)) {
    node.forEach((v, i) => walk(v, key, `${prefix}[${i}]`, out));
    return out;
  }
  if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) walk(v, k, prefix ? `${prefix}.${k}` : k, out);
  }
  return out;
}

function setPath(root, p, value) {
  const segs = [];
  for (const part of p.split('.')) {
    const m = /^([^[]*)((?:\[\d+\])*)$/.exec(part);
    segs.push(m[1]);
    for (const idx of m[2].match(/\d+/g) || []) segs.push(Number(idx));
  }
  let cur = root;
  for (let i = 0; i < segs.length - 1; i++) cur = cur[segs[i]];
  cur[segs[segs.length - 1]] = value;
}

const enFiles = fs
  .readdirSync(PAGES)
  .filter((f) => f.endsWith('.yaml'))
  .filter((f) => !PAGE_FILTER || PAGE_FILTER.has(f.replace(/\.yaml$/, '')))
  .sort();

const engine = createEngine({ cacheFile: CACHE_FILE, log: () => {} });
engine.load();

// Entries where the engine cached the source text as the "translation" would
// make the repair a no-op, so drop them before re-running.
function dropIdentityCache(lang) {
  let dropped = 0;
  for (const k of Object.keys(engine.cache)) {
    const sep = k.indexOf('::');
    if (sep < 0) continue;
    if (k.slice(0, sep) !== lang) continue;
    if (norm(engine.cache[k]) === norm(k.slice(sep + 2))) {
      delete engine.cache[k];
      dropped++;
    }
  }
  return dropped;
}

async function main() {
  if (SCRUB) {
    let touched = 0,
      total = 0;
    for (const lang of LANGS) {
      for (const f of enFiles) {
        const tp = path.join(PAGES, lang, f);
        if (!fs.existsSync(tp)) continue;
        const doc = YAML.parse(fs.readFileSync(tp, 'utf8'));
        let n = 0;
        for (const leaf of walk(doc, '', '', [])) {
          let cleaned = leaf.value.replace(MT_ARTIFACTS, '');
          if (cleaned !== leaf.value) cleaned = cleaned.replace(/ {2,}/g, ' ');
          if (cleaned !== leaf.value) {
            setPath(doc, leaf.path, cleaned);
            n++;
          }
        }
        if (n) {
          fs.writeFileSync(tp, YAML.stringify(doc, { lineWidth: 0, singleQuote: true }), 'utf8');
          touched++;
          total += n;
        }
      }
    }
    console.log(`scrub: ${total} values cleaned in ${touched} files`);
    return;
  }
  if (APPLY) {
    await engine.refreshSession();
    console.log(`Bing session ok | cache=${engine.cacheSize}`);
  }
  let grand = 0,
    grandFixed = 0;
  for (const lang of LANGS) {
    let leaks = 0,
      fixed = 0;
    const details = [];
    if (APPLY) {
      const dropped = dropIdentityCache(lang);
      if (dropped) console.log(`     ${lang}: dropped ${dropped} identity cache entries`);
    }
    for (const f of enFiles) {
      const tPath = path.join(PAGES, lang, f);
      if (!fs.existsSync(tPath)) continue;
      const en = YAML.parse(fs.readFileSync(path.join(PAGES, f), 'utf8'));
      const raw = fs.readFileSync(tPath, 'utf8');
      const doc = YAML.parse(raw);
      const enLeaves = walk(en, '', '', []);
      const tLeaves = walk(doc, '', '', []);
      const tByPath = new Map(tLeaves.map((l) => [l.path, l.value]));

      const hits = [];
      for (const leaf of enLeaves) {
        const tv = tByPath.get(leaf.path);
        if (typeof tv !== 'string') continue;
        if (!shouldTranslate(leaf.key, leaf.value)) continue;
        // A translated value must keep the EN tag sequence; MT sometimes wraps
        // text in <i>/<b> or eats a tag. Treat that as a defect worth redoing.
        const tagBad = tagsOf(leaf.value).join('|') !== tagsOf(tv).join('|');
        if (!tagBad) {
          if (!isCandidate(leaf.key, leaf.value)) continue;
          if (norm(leaf.value) !== norm(tv)) continue;
        }
        hits.push({ path: leaf.path, key: leaf.key, value: leaf.value, tagBad });
      }
      if (!hits.length) continue;
      leaks += hits.length;
      details.push(`${f.replace(/\.yaml$/, '')}:${hits.length}`);
      if (VERBOSE) for (const h of hits) console.log(`    ${lang}/${f} [${h.path}] ${norm(h.value).slice(0, 110)}`);

      if (!APPLY) continue;
      // Force a fresh MT call for every defective value: drop the cached
      // (bad) translation of its line units first.
      for (const h of hits) {
        for (const part of splitParts(h.value)) {
          if (part.raw !== undefined) continue;
          for (const ln of part.text.split('\n')) {
            if (!isTranslatableLine(ln)) continue;
            delete engine.cache[`${lang}::${ln}`];
          }
        }
      }
      const translated = await translateObjectDeep(engine, { v: hits.map((h) => h.value) }, lang);
      let changed = 0;
      hits.forEach((h, i) => {
        const nv = translated.v[i];
        if (typeof nv === 'string' && nv.trim() && norm(nv) !== norm(h.value)) {
          setPath(doc, h.path, nv);
          changed++;
        }
      });
      if (changed) {
        fs.writeFileSync(tPath, YAML.stringify(doc, { lineWidth: 0, singleQuote: true }), 'utf8');
        fixed += changed;
        engine.save();
      }
    }
    grand += leaks;
    grandFixed += fixed;
    const tag = leaks ? (APPLY ? 'FIX ' : 'BAD ') : 'OK  ';
    console.log(
      `${tag} ${lang.padEnd(4)} leaks=${String(leaks).padEnd(4)} fixed=${fixed}` +
        (details.length ? `  ${details.join(' ')}` : '')
    );
  }
  console.log(`\nTOTAL leaks=${grand} fixed=${grandFixed} | mode=${APPLY ? 'apply' : 'dry-run'}`);
  if (APPLY) engine.save();
}

main().catch((e) => {
  console.error('FATAL:', e.message);
  process.exit(1);
});
