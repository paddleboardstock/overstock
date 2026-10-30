#!/usr/bin/env node
/**
 * translate-pages-bulk.mjs
 *
 * Bulk-translate any missing per-language page YAMLs
 * (src/data/pages/<lang>/<page>.yaml) from their EN source using the Bing
 * web-translator endpoint (cn.bing.com — direct connection, no proxy needed;
 * Google's endpoint is unreachable in this environment).
 *
 * Differences vs scripts/translate-pages-bing.mjs:
 *   - no hardcoded page/lang PLAN — it walks every EN page and fills in every
 *     missing target-language file (skips existing ones unless --force),
 *   - batches up to ~30 single-line strings per request (newline-joined),
 *     which is ~100x fewer requests; line count is asserted per batch and a
 *     per-line fallback is used when the MT engine merges/splits lines,
 *   - shares the SAME cache file as the other translators
 *     (.cache/page-translate-cache.json) so it is fully resumable.
 *
 * Usage:
 *   node scripts/translate-pages-bulk.mjs [--langs=bg,ko] [--pages=guides,academy]
 *     [--force] [--dry-run] [--limit=5] [--include-seeds]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PAGES = path.join(ROOT, 'src/data/pages');
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
// Pages already present as EN-copy seeds / gate files — never regenerated here.
const SEED_PAGES = new Set(['about', 'contact', 'news', 'home']);

const argOf = (name) => {
  const a = process.argv.find((s) => s.startsWith(`--${name}=`));
  return a ? a.slice(name.length + 3) : null;
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
const LIMIT = argOf('limit') ? Number(argOf('limit')) : 0;
const FORCE = process.argv.includes('--force');
const DRY_RUN = process.argv.includes('--dry-run');
// Seed pages (about/contact/news/home) ship as EN copies; pass --include-seeds
// together with --pages=about,contact,news,home to translate them.
const INCLUDE_SEEDS = process.argv.includes('--include-seeds');

const BATCH_CHARS = 3500; // Bing rejects >~5000 chars; stay well under
const BATCH_LINES = 30;
const RATE_MS = 120;
const SESSION_REFRESH_EVERY = 150;
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

const BING_LANG = { no: 'nb', tl: 'fil', sr: 'sr-Latn' };
const bingCode = (lang) => BING_LANG[lang] || lang;

// --- translatable detection (mirrors translate-pages.mjs / -bing.mjs) --------
const NON_TEXT_KEYS = new Set([
  'src',
  'href',
  'icon',
  'variant',
  'link',
  'id',
  'source',
  'badge',
  'tag',
  'rating',
  'cta_href',
  'slug',
  'image',
  'video',
  'logo',
  'file',
  'url',
  'color',
  'email',
  'phone',
]);
const SKIP_EXACT = new Set(['primary', 'Best Seller', 'Professional', 'Premium', 'Entrepreneur']);

function shouldTranslate(key, value) {
  if (typeof value !== 'string') return false;
  const v = value.trim();
  if (!v || v.length < 2) return false;
  if (NON_TEXT_KEYS.has(key)) return false;
  if (v.startsWith('http') || v.startsWith('/') || v.startsWith('tabler:')) return false;
  if (SKIP_EXACT.has(v)) return false;
  // Slug / path / enum codes must stay verbatim (slug, category:'guide', type:'business-guide',
  // difficulty:'beginner', relatedGuides/relatedProducts, source:'solutions/clubs', …).
  // Prose always contains a space or uppercase, so this only skips machine values.
  if (/^[a-z0-9]+(?:[-_/.][a-z0-9]+)*$/.test(v)) return false;
  if (/^\d+[\d,.+%+-]*$/.test(v)) return false;
  if (/^\d{4}$/.test(v)) return false;
  return true;
}

// --- placeholder protection (same set as the bing script) -------------------
const PROTECT_PATTERNS = [
  /<\/?[a-zA-Z][^>]*>/g,
  /https?:\/\/[^\s<>"']+/g,
  /\bPaddle Board Overstock\b/g,
  /\bRIBs?\b/g,
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
  /\bAQHB\b/g,
  /\bAQMT\b/g,
  /\bAQDRB\b/g,
  /\bUKCA\b/g,
  /\bDTEX\b/g,
  /\bAQL\b/g,
  /\bRoHS\b/g,
  /\bEAN\b/g,
  /\bUPC\b/g,
  /\bSKU\b/g,
  /\bERP\b/g,
  /\bFOB\b/g,
  /\bCIF\b/g,
  /\bDDP\b/g,
  /\bNDA\b/g,
  /\bCSM\b/g,
  /\bPFD\b/g,
  /\bRCD\b/g,
  /\bSGS\b/g,
  /\bTÜV\b/g,
  /\bHypalon\b/gi,
  /\bValmex\b/gi,
  /\bORCA\b/gi,
  /\bDrop-Stitch\b/gi,
  /\bAirDeck\b/g,
  /\bKaBoat\b/g,
  /\bSUPs?\b/g,
  /\bB2B\b/g,
  /\bROI\b/g,
  /\+/g,
  /→/g,
  /←/g,
  /±/g,
];
const IRREGULAR_WS = /[\u00A0\u2000-\u200A\u202F\u205F]/g;
const ZERO_WIDTH = /[\u200B-\u200D\uFEFF]/g;
const cleanWs = (t) => t.replace(IRREGULAR_WS, ' ').replace(ZERO_WIDTH, '');
// Bing occasionally injects page markers ("<Pg6>") or currency artefacts
// ("<$USD>") that exist in neither the source nor any translation.
const MT_ARTIFACTS = /<Pg\s*\d+\s*>|<\$[^>]{0,12}>/gi;
const cleanArtifacts = (t) => t.replace(MT_ARTIFACTS, '');

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

// --- Bing session ------------------------------------------------------------
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
  failures = 0;
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

// translate one string (cached / single request)
async function translate1(text, lang) {
  const ck = `${lang}::${text}`;
  if (cache[ck]) {
    cacheHits++;
    return cache[ck];
  }
  if (DRY_RUN) return text;
  if (!/[a-zA-Z]{2,}/.test(text)) return text; // acronyms / numbers — language neutral
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
      const restored = restore(out.text, tokens).trim();
      if (restored) {
        const kept = (out.text.match(/[<＜〈]ph\s*\d+/gi) || []).length;
        if (kept >= tokens.length) {
          cache[ck] = restored;
          apiCalls++;
          await sleep(RATE_MS);
          return restored;
        }
        best = restored;
      }
    }
    try {
      await refreshSession();
    } catch {
      /* ignore */
    }
    await sleep(800 * (attempt + 1));
  }
  if (best) {
    cache[ck] = best;
    apiCalls++;
    return best;
  }
  failures++;
  return text;
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
    } else if (!/[a-zA-Z]{2,}/.test(texts[i])) {
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

// --- YAML walk (tag-aware, transltes only text runs) -------------------------
// Split a value into raw HTML tags (kept verbatim) and text runs. Text runs are
// further split on newlines so every translation unit is a single line, which is
// what makes newline-joined batching safe.
const TAG_RE = /(<[^>]+>)/g;
function splitParts(s) {
  const parts = [];
  let last = 0;
  let m;
  TAG_RE.lastIndex = 0;
  while ((m = TAG_RE.exec(s))) {
    if (m.index > last) parts.push({ text: s.slice(last, m.index) });
    parts.push({ raw: m[0] });
    last = m.index + m[0].length;
  }
  if (last < s.length) parts.push({ text: s.slice(last) });
  return parts;
}
const isTranslatableLine = (ln) => ln.trim().length >= 2 && /[a-zA-Z]{2,}/.test(ln) && !/^https?:/.test(ln.trim());

function setSeg(obj, seg, value) {
  let cur = obj;
  for (let i = 0; i < seg.length - 1; i++) cur = cur[seg[i]];
  cur[seg[seg.length - 1]] = value;
}

function collectValues(obj, seg, key, records, units) {
  if (typeof obj === 'string') {
    if (!shouldTranslate(key, obj)) return;
    const parts = splitParts(obj).map((p) => {
      if (p.raw !== undefined) return { raw: p.raw };
      const lines = p.text.split('\n');
      for (const ln of lines) if (isTranslatableLine(ln)) units.add(ln);
      return { lines };
    });
    records.push({ seg: [...seg], parts });
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

function rebuild(parts, map) {
  return parts
    .map((p) => {
      if (p.raw !== undefined) return p.raw;
      return p.lines.map((ln) => (isTranslatableLine(ln) ? (map.get(ln) ?? ln) : ln)).join('\n');
    })
    .join('');
}

async function translatePage(enDoc, lang) {
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

  const out = structuredClone(enDoc);
  for (const { seg, parts } of records) setSeg(out, seg, rebuild(parts, map));
  return out;
}

// --- main --------------------------------------------------------------------
async function main() {
  loadCache();
  const enPages = fs
    .readdirSync(PAGES)
    .filter((f) => f.endsWith('.yaml'))
    .map((f) => f.replace(/\.yaml$/, ''))
    .filter((p) => INCLUDE_SEEDS || !SEED_PAGES.has(p))
    .filter((p) => !PAGE_FILTER || PAGE_FILTER.has(p))
    .sort();
  console.log(`Cache: ${Object.keys(cache).length} entries | langs=${LANGS.length} | target pages=${enPages.length}`);

  if (!DRY_RUN) {
    await refreshSession();
    console.log(`Bing session ok (ig=${String(ig).slice(0, 8)}…, iid=${iid})`);
  }

  let created = 0,
    skipped = 0,
    processed = 0;
  const t0 = Date.now();
  let lastSave = Date.now();
  const maybeSave = (force) => {
    if (force || Date.now() - lastSave > 20000) {
      saveCache();
      lastSave = Date.now();
    }
  };
  for (const lang of LANGS) {
    for (const page of enPages) {
      const outPath = path.join(PAGES, lang, `${page}.yaml`);
      if (fs.existsSync(outPath) && !FORCE) {
        skipped++;
        continue;
      }
      if (LIMIT && processed >= LIMIT) {
        console.log('limit reached');
        return finish(created, skipped);
      }
      const api0 = apiCalls,
        hit0 = cacheHits,
        fb0 = fallbacks,
        fail0 = failures;
      try {
        const enDoc = YAML.parse(fs.readFileSync(path.join(PAGES, `${page}.yaml`), 'utf8'));
        const translated = await translatePage(enDoc, lang);
        if (!DRY_RUN) {
          fs.mkdirSync(path.dirname(outPath), { recursive: true });
          fs.writeFileSync(outPath, YAML.stringify(translated, { lineWidth: 0, singleQuote: true }), 'utf8');
          maybeSave(false);
        }
        created++;
        processed++;
        console.log(
          `  ${lang}/${page}: done api=${apiCalls - api0} cache=${cacheHits - hit0} fb=${fallbacks - fb0} fail=${failures - fail0}`
        );
      } catch (err) {
        maybeSave(true);
        console.log(`  ${lang}/${page}: ERROR ${err.message}`);
        try {
          await refreshSession();
        } catch {
          /* ignore */
        }
      }
    }
  }
  finish(created, skipped);
  function finish(c, s) {
    saveCache();
    console.log(
      `\n=== Done: created=${c} skipped=${s} apiCalls=${apiCalls} cacheHits=${cacheHits} fallbacks=${fallbacks} failures=${failures} in ${Math.round((Date.now() - t0) / 1000)}s ===`
    );
  }
}
main().catch((e) => {
  saveCache();
  console.error('FATAL:', e.message);
  process.exit(1);
});
