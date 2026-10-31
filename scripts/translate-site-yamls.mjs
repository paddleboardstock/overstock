#!/usr/bin/env node
/**
 * translate-site-yamls.mjs
 *
 * Bulk-translate the per-language site YAML overrides
 * (src/data/site/{family}.{lang}.yaml) from their EN base file
 * (src/data/site/{family}.yaml) using the Bing web-translator endpoint
 * (cn.bing.com), sharing the SAME cache file as the other translators
 * (.cache/page-translate-cache.json).
 *
 * Beyond scripts/translate-pages-bulk.mjs this tool:
 *   - protects full product names (word-boundary) before the generic
 *     acronym patterns so "SUP Explorer 11" is never split,
 *   - runs a strict per-string token-presence validation after batch
 *     translation: any dropped protected token triggers a strict
 *     single-string retranslation (with cache eviction of the polluted
 *     entry),
 *   - asserts the output YAML structure matches the base file and that
 *     no stale B2B terms (Qingdao/BSCI/RIB/...) survive.
 *
 * Usage:
 *   node scripts/translate-site-yamls.mjs --families=proof-points,use-cases,trust-badges
 *   node scripts/translate-site-yamls.mjs --families=tech-cards --langs=id,ms --force
 *   node scripts/translate-site-yamls.mjs --dry-run
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SITE = path.join(ROOT, 'src/data/site');
const CACHE_FILE = path.join(ROOT, '.cache', 'page-translate-cache.json');

const ALL_LANGS = [
  'ar',
  'bg',
  'cs',
  'da',
  'de',
  'el',
  'es',
  'et',
  'fi',
  'fr',
  'he',
  'hr',
  'hu',
  'id',
  'it',
  'ja',
  'ko',
  'lt',
  'lv',
  'ms',
  'nl',
  'no',
  'pl',
  'pt',
  'ro',
  'ru',
  'sk',
  'sl',
  'sr',
  'sv',
  'th',
  'tl',
  'tr',
];

const argOf = (name) => {
  const a = process.argv.find((s) => s.startsWith(`--${name}=`));
  return a ? a.slice(name.length + 3) : null;
};
const FAMILIES = (argOf('families') || 'proof-points,use-cases,trust-badges')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const LANGS = (argOf('langs') || ALL_LANGS.join(','))
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const FORCE = process.argv.includes('--force');
const DRY_RUN = process.argv.includes('--dry-run');

const BATCH_CHARS = 3500; // Bing rejects >~5000 chars; stay well under
const BATCH_LINES = 30;
const RATE_MS = 120;
const SESSION_REFRESH_EVERY = 150;
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

const BING_LANG = { no: 'nb', tl: 'fil', sr: 'sr-Latn' };
const bingCode = (lang) => BING_LANG[lang] || lang;

// --- translatable detection ---------------------------------------------------
const NON_TEXT_KEYS = new Set(['id', 'metric', 'icon', 'variant', 'image', 'products', 'badge', 'status', 'sku', 'HS']);

function shouldTranslate(key, value) {
  if (typeof value !== 'string') return false;
  const v = value.trim();
  if (!v || v.length < 2) return false;
  if (NON_TEXT_KEYS.has(key)) return false;
  if (v.startsWith('http') || v.startsWith('/') || v.startsWith('tabler:')) return false;
  // Machine values (slugs, enum codes) stay verbatim; prose has spaces/uppercase.
  if (/^[a-z0-9]+(?:[-_/.][a-z0-9]+)*$/.test(v)) return false;
  if (/^\d+[\d,.+%+-]*$/.test(v)) return false;
  if (/\n/.test(v)) return false; // translation units must be single-line
  return true;
}

// --- placeholder protection ----------------------------------------------------
// Full product names first (longest match wins), then generic patterns.
const PRODUCT_NAMES = [
  'SUP Explorer 11',
  'Cheetah Surge Series',
  'Leviathan Wake Series',
  'Medusa Glow Series',
  'Ocean Pulse Series',
  'Ocean Voyager Series',
  'Dolphin Wave Series',
  'Flowing Lotus Series',
  'Jungle Mandala Series',
  'Tropical Breeze Series',
  'Life Vest Classic',
  'Life Vest Pro',
  'Oars & Pump Set',
];
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\&]/g, '\\$&');
const PRODUCT_PATTERNS = PRODUCT_NAMES.map((n) => new RegExp(`\\b${escapeRe(n)}\\b`, 'g'));

// HTML/URL patterns MUST run before token-producing patterns, otherwise they
// re-match the "<phN>" placeholders created by earlier patterns and double-mask
// them (Bing then returns literal "<ph0>" in the translation).
const LEAD_PATTERNS = [/<\/?[a-zA-Z][^>]*>/g, /https?:\/\/[^\s<>"']+/g];
const BASE_PATTERNS = [
  /\bPaddle Board Overstock\b/g,
  /\bTÜV Rheinland\b/g,
  /\bCE\b/g,
  /\bSOLAS\b/g,
  /\bISO\b/g,
  /\bBSCI\b/g,
  /\bREACH\b/g,
  /\bUSCG\b/g,
  /\bFDA\b/g,
  /\bEMA\b/g,
  /\bOEM\b/g,
  /\bODM\b/g,
  /\bMOQs?\b/g,
  /\bPVC\b/g,
  /\bEVA\b/g,
  /\bUV\b/g,
  /\bCNC\b/g,
  /\bHP\b/g,
  /\bPSI\b/g,
  /\bFRP\b/g,
  /\bUKCA\b/g,
  /\bAQL\b/g,
  /\bRoHS\b/g,
  /\bEAN\b/g,
  /\bUPC\b/g,
  /\bSKU\b/g,
  /\bSGS\b/g,
  /\bTÜV\b/g,
  /\bDrop-Stitch\b/gi,
  /\bSUPs?\b/g,
  /\bStripe\b/g,
  /\bPayPal\b/g,
  /\+/g,
  /→/g,
  /←/g,
  /±/g,
];
const PROTECT_PATTERNS = [...LEAD_PATTERNS, ...PRODUCT_PATTERNS, ...BASE_PATTERNS];

const IRREGULAR_WS = /[\u00A0\u2000-\u200A\u202F\u205F]/g;
const ZERO_WIDTH = /[\u200B-\u200D\uFEFF]/g;
const cleanWs = (t) => t.replace(IRREGULAR_WS, ' ').replace(ZERO_WIDTH, '');
const MT_ARTIFACTS = /<Pg\s*\d+\s*>|<\$[^>]{0,12}>/gi;
const cleanArtifacts = (t) => t.replace(MT_ARTIFACTS, '');

function extractTokens(text) {
  const tokens = [];
  for (const re of PROTECT_PATTERNS) {
    const clone = new RegExp(re.source, re.flags);
    let m;
    while ((m = clone.exec(text))) tokens.push(m[0]);
  }
  return tokens;
}

function preserve(text, tokens) {
  let result = text;
  for (const re of PROTECT_PATTERNS) {
    result = result.replace(re, (m) => {
      tokens.push(m);
      return `<ph${tokens.length - 1}>`;
    });
  }
  return result;
}
function restore(text, tokens) {
  let result = cleanWs(text);
  if (!tokens.length) return result;
  result = result.replace(/[<＜〈]ph\s*(\d+)\s*\/?[>＞〉]?/gi, (m, d) =>
    Number(d) < tokens.length ? tokens[Number(d)] : m
  );
  result = result.replace(/[<＜〈]ph\s*(\d+)\s*[？?]/gi, (m, d) => (Number(d) < tokens.length ? tokens[Number(d)] : m));
  result = result.replace(/\u27E6(\d+)\u27E7/g, (m, d) => (Number(d) < tokens.length ? tokens[Number(d)] : m));
  return cleanArtifacts(cleanWs(result));
}

// --- stale B2B terms (must never survive) ---------------------------------------
const FORBIDDEN = /Qingdao|BSCI|64 CE|AirDeck|\bRIB\b|\bRIBs\b|Hypalon|[Kk]ayak|[Kk]ajak|[Dd]inghy|Bootsgarantie/;

// --- Bing session ---------------------------------------------------------------
let ig = null,
  iid = null,
  abuseKey = null,
  abuseToken = null,
  requestCount = 0;
async function refreshSession() {
  const res = await fetch('https://cn.bing.com/translator', {
    headers: { 'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.9' },
    signal: AbortSignal.timeout(20000),
  });
  const page = await res.text();
  ig = /IG:"([^"]+)"/.exec(page)?.[1] || null;
  iid = /data-iid="([^"]+)"/.exec(page)?.[1] || null;
  const km = /params_AbusePreventionHelper\s*=\s*\[(\d+),"([^"]+)"[,}]/.exec(page);
  abuseKey = km?.[1] || null;
  abuseToken = km?.[2] || null;
  requestCount = 0;
  if (!ig || !iid || !abuseKey) throw new Error('Bing session tokens not found');
}
async function bingOnce(text, to) {
  const body = new URLSearchParams({ fromLang: 'en', to, text, token: abuseToken, key: abuseKey });
  const res = await fetch(`https://cn.bing.com/ttranslatev3?isVertical=1&IG=${ig}&IID=${iid}`, {
    method: 'POST',
    headers: {
      'User-Agent': UA,
      'Content-Type': 'application/x-www-form-urlencoded',
      Referer: 'https://cn.bing.com/translator',
    },
    body: body.toString(),
    signal: AbortSignal.timeout(30000),
  });
  const raw = await res.text();
  if (!raw) return { error: `empty(status=${res.status})` };
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return { error: 'badjson' };
  }
  if (data.statusCode) return { error: `api-${data.statusCode}` };
  const t = Array.isArray(data) ? data[0]?.translations?.[0]?.text : null;
  if (!t) return { error: 'notext' };
  return { text: t };
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// --- cache -------------------------------------------------------------------
let cache = {};
let cacheHits = 0,
  apiCalls = 0,
  fallbacks = 0,
  failures = 0,
  strictFixes = 0;
function loadCache() {
  try {
    if (fs.existsSync(CACHE_FILE)) cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
  } catch {
    /* ignore */
  }
  fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
}
let saveWarns = 0;
function saveCache() {
  const data = JSON.stringify(cache);
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      fs.writeFileSync(CACHE_FILE, data, 'utf8');
      return;
    } catch (e) {
      if (attempt === 0 && saveWarns++ < 5) console.log(`  [warn] cache save retry (${e.code || e.message})`);
    }
  }
  console.log('  [warn] cache save failed 4x; continuing (will retry at next checkpoint)');
}

// strict single-string translation: every protected token must be kept
async function translateStrict(text, lang) {
  const ck = `${lang}::${text}`;
  const tokens = [];
  const masked = preserve(text, tokens);
  let best = null;
  for (let attempt = 0; attempt < 3; attempt++) {
    if (requestCount >= SESSION_REFRESH_EVERY) await refreshSession();
    requestCount++;
    let out;
    try {
      out = await bingOnce(masked, bingCode(lang));
    } catch (e) {
      out = { error: e.message };
    }
    if (out.text) {
      const kept = (out.text.match(/[<＜〈]ph\s*\d+/gi) || []).length;
      if (kept >= tokens.length) {
        const restored = restore(out.text, tokens).trim();
        if (restored) {
          cache[ck] = restored;
          apiCalls++;
          await sleep(RATE_MS);
          return restored;
        }
      }
      if (out.text) best = restore(out.text, tokens).trim();
    }
    delete cache[ck]; // evict any polluted entry
    try {
      await refreshSession();
    } catch {
      /* ignore */
    }
    await sleep(800 * (attempt + 1));
  }
  failures++;
  return best || text;
}

// cached single-string translation (no strict assertion)
async function translate1(text, lang) {
  const ck = `${lang}::${text}`;
  if (cache[ck]) {
    cacheHits++;
    return cache[ck];
  }
  if (DRY_RUN) return text;
  return translateStrict(text, lang);
}

// translate a batch of single-line strings; asserts line-count preservation
async function translateBatch(texts, lang) {
  const result = new Array(texts.length);
  const todo = [];
  for (let i = 0; i < texts.length; i++) {
    const ck = `${lang}::${texts[i]}`;
    if (cache[ck]) {
      result[i] = cache[ck];
      cacheHits++;
    } else if (DRY_RUN) {
      result[i] = texts[i];
    } else {
      todo.push(i);
    }
  }
  if (!todo.length) return result;

  const joined = todo.map((i) => texts[i]).join('\n');
  const tokens = [];
  const masked = preserve(joined, tokens);
  if (requestCount >= SESSION_REFRESH_EVERY) await refreshSession();
  requestCount++;
  let out;
  try {
    out = await bingOnce(masked, bingCode(lang));
  } catch (e) {
    out = { error: e.message };
  }
  if (out.text) {
    const restored = restore(out.text, tokens);
    const lines = restored.split('\n');
    if (lines.length === todo.length && lines.every((l) => l.trim())) {
      for (let k = 0; k < todo.length; k++) {
        const v = lines[k].trim();
        if (v && v !== texts[todo[k]]) {
          cache[`${lang}::${texts[todo[k]]}`] = v;
          result[todo[k]] = v;
        } else result[todo[k]] = v || texts[todo[k]];
      }
      apiCalls++;
      await sleep(RATE_MS);
      return result;
    }
  }
  // fallback: translate each line individually
  fallbacks++;
  for (const i of todo) result[i] = await translate1(texts[i], lang);
  return result;
}

// --- YAML walk ------------------------------------------------------------------
function setSeg(obj, seg, value) {
  let cur = obj;
  for (let i = 0; i < seg.length - 1; i++) cur = cur[seg[i]];
  cur[seg[seg.length - 1]] = value;
}

function collectValues(obj, seg, key, records, units) {
  if (typeof obj === 'string') {
    if (!shouldTranslate(key, obj)) return;
    records.push({ seg: [...seg], source: obj });
    units.add(obj);
    return;
  }
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => collectValues(v, [...seg, i], key, records, units));
    return;
  }
  if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) collectValues(v, [...seg, k], k, records, units);
  }
}

// "50 + Länder" → "50+ Länder" (Bing inserts a space around the masked +)
const normalizePlus = (t) => t.replace(/(\d)\s+\+\s+/g, '$1+ ');

function sameShape(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((v, i) => sameShape(v, b[i]));
  }
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    const ka = Object.keys(a);
    const kb = Object.keys(b);
    if (ka.length !== kb.length || !ka.every((k) => k in b)) return false;
    return ka.every((k) => sameShape(a[k], b[k]));
  }
  return typeof a === typeof b;
}

async function translateFamily(family, lang) {
  const basePath = path.join(SITE, `${family}.yaml`);
  const outPath = path.join(SITE, `${family}.${lang}.yaml`);
  const enDoc = YAML.parse(fs.readFileSync(basePath, 'utf8'));

  const records = [];
  const units = new Set();
  collectValues(enDoc, [], '', records, units);

  const list = [...units];
  const map = new Map();
  for (let i = 0; i < list.length;) {
    const chunk = [];
    let chars = 0;
    while (
      i < list.length &&
      (chunk.length === 0 || (chunk.length < BATCH_LINES && chars + list[i].length + 1 <= BATCH_CHARS))
    ) {
      chars += list[i].length + 1;
      chunk.push(list[i]);
      i++;
    }
    const out = await translateBatch(chunk, lang);
    chunk.forEach((t, k) => map.set(t, out[k]));
  }

  // strict per-string validation: every protected token must survive
  const out = structuredClone(enDoc);
  for (const { seg, source } of records) {
    let translated = map.get(source) ?? source;
    const srcTokens = [...new Set(extractTokens(source))];
    const missing = srcTokens.filter((t) => !translated.includes(t));
    if (missing.length && !DRY_RUN) {
      const fixed = await translateStrict(source, lang);
      if (!srcTokens.some((t) => !fixed.includes(t))) {
        strictFixes++;
        translated = fixed;
      } else {
        console.log(
          `  [warn] ${family}.${lang}: token(s) ${JSON.stringify(missing)} untranslatable, keeping best effort`
        );
        translated = fixed;
      }
    }
    translated = normalizePlus(translated);
    if (FORBIDDEN.test(translated)) {
      console.log(`  [ERROR] ${family}.${lang}: forbidden B2B term in "${translated.slice(0, 80)}"`);
      throw new Error(`forbidden term survived translation in ${family}.${lang}`);
    }
    setSeg(out, seg, translated);
  }

  if (!sameShape(enDoc, out)) {
    throw new Error(`structure mismatch after translation in ${family}.${lang}`);
  }

  if (!DRY_RUN) {
    fs.writeFileSync(outPath, YAML.stringify(out, { lineWidth: 0, singleQuote: true }), 'utf8');
  }
  return records.length;
}

// --- main --------------------------------------------------------------------
async function main() {
  loadCache();
  console.log(
    `Cache: ${Object.keys(cache).length} entries | families=${FAMILIES.join(',')} | langs=${LANGS.length}${FORCE ? ' (force)' : ''}`
  );

  if (!DRY_RUN) {
    await refreshSession();
    console.log(`Bing session ok (ig=${String(ig).slice(0, 8)}…, iid=${iid})`);
  }

  let created = 0,
    skipped = 0,
    strings = 0;
  const t0 = Date.now();
  let lastSave = Date.now();
  const maybeSave = (force) => {
    if (force || Date.now() - lastSave > 20000) {
      saveCache();
      lastSave = Date.now();
    }
  };
  for (const family of FAMILIES) {
    for (const lang of LANGS) {
      const outPath = path.join(SITE, `${family}.${lang}.yaml`);
      if (fs.existsSync(outPath) && !FORCE) {
        skipped++;
        continue;
      }
      const api0 = apiCalls,
        fb0 = fallbacks,
        sf0 = strictFixes,
        fail0 = failures;
      try {
        const n = await translateFamily(family, lang);
        strings += n;
        created++;
        maybeSave(false);
        console.log(
          `  ${family}.${lang}: done strings=${n} api=${apiCalls - api0} fb=${fallbacks - fb0} strict=${strictFixes - sf0} fail=${failures - fail0}`
        );
      } catch (err) {
        maybeSave(true);
        console.log(`  ${family}.${lang}: ERROR ${err.message}`);
        try {
          await refreshSession();
        } catch {
          /* ignore */
        }
      }
    }
  }
  saveCache();
  console.log(
    `\n=== Done: created=${created} skipped=${skipped} strings=${strings} apiCalls=${apiCalls} cacheHits=${cacheHits} fallbacks=${fallbacks} strictFixes=${strictFixes} failures=${failures} in ${Math.round((Date.now() - t0) / 1000)}s ===`
  );
}
main().catch((e) => {
  saveCache();
  console.error('FATAL:', e.message);
  process.exit(1);
});
