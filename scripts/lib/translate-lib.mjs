/**
 * scripts/lib/translate-lib.mjs
 *
 * Shared Bing (cn.bing.com) translation engine + object-walk helpers used by the
 * bulk per-language translators (pages, site files, product texts, business
 * articles). Google's endpoint is unreachable in this environment; MyMemory
 * merges newlines and is quota-limited, so newline-batched Bing is the only
 * practical backend.
 *
 * Design notes:
 *  - CHUNKED REQUESTS: up to `batchLines` single-line units are joined with "\n"
 *    and sent in one request (~100x fewer calls than per-string). The line count
 *    of the response is asserted; on mismatch we fall back to per-line calls.
 *  - CACHE: `${cachePrefix}::${lang}::${text}` -> translation, persisted to a
 *    JSON cache file so runs are resumable and share work across scripts.
 *  - PROTECTION: brand/technical terms, HTML tags, URLs, and operators are masked
 *    with `<phN>` tokens around the MT call and restored afterwards, so the
 *    engine never mangles them (and never sees raw markup).
 *  - TEXT-RUN WALK: values are split on HTML tags and newlines; only genuine
 *    prose lines are sent, tags/indentation are reassembled verbatim.
 */
import fs from 'node:fs';
import path from 'node:path';

export const BING_LANG = { no: 'nb', tl: 'fil', sr: 'sr-Latn' };
export const bingCode = (lang) => BING_LANG[lang] || lang;

// Keys whose values are machine values (paths, css, ids) and must never be sent.
export const NON_TEXT_KEYS = new Set([
  'src',
  'href',
  'icon',
  'variant',
  'link',
  'id',
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

export function shouldTranslate(key, value) {
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

export const PROTECT_PATTERNS = [
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

// Literal protected terms, longest first. Bing occasionally glues a restored term to the
// neighbouring word ("лодкиRIBs", "SUPмашина") because it treats `<phN>` as an inline tag
// and collapses the surrounding space; fixTokenSpacing re-inserts it at emit time.
export const PROTECTED_TERMS = [
  'Drop-Stitch',
  'Paddle Board Overstock',
  'Hypalon',
  'Valmex',
  'AirDeck',
  'KaBoat',
  'SOLAS',
  'BSCI',
  'REACH',
  'USCG',
  'AQDRB',
  'AQHB',
  'AQMT',
  'RoHS',
  'ORCA',
  'SUPs',
  'RIBs',
  'MOQs',
  'UKCA',
  'DTEX',
  'SVHC',
  'PFD',
  'RCD',
  'SGS',
  'TÜV',
  'PVC',
  'EVA',
  'CNC',
  'FRP',
  'AQL',
  'EAN',
  'UPC',
  'SKU',
  'ERP',
  'FOB',
  'CIF',
  'DDP',
  'NDA',
  'CSM',
  'OEM',
  'ODM',
  'MOQ',
  'RIB',
  'SUP',
  'ISO',
  'CE',
  'UV',
  'HP',
  'PSI',
  'EMA',
  'FDA',
];
const TERM_RE = new RegExp(`(${PROTECTED_TERMS.join('|')})`, 'g');
const LOWER = /\p{Ll}/u;

/** Re-insert the space MT dropped between a protected term and its neighbour. */
export function fixTokenSpacing(text) {
  if (!text) return text;
  return text.replace(TERM_RE, (m, _g, offset, all) => {
    const before = all[offset - 1] || '';
    const after = all[offset + m.length] || '';
    const next = all[offset + m.length + 1] || '';
    // Any letter glued in front is MT gluing ("napuhivačemSUP", "лодкиRIBs").
    const gluedBefore = /\p{L}/u.test(before) || /\d/.test(before);
    let gluedAfter = false;
    if (LOWER.test(after)) gluedAfter = !(after === 's' && !/\p{L}/u.test(next));
    else if (/[A-Z]/.test(after)) gluedAfter = LOWER.test(next);
    else if (/\p{L}/u.test(after)) gluedAfter = true;
    return `${gluedBefore ? ' ' : ''}${m}${gluedAfter ? ' ' : ''}`;
  });
}
// Bing occasionally injects page markers ("<Pg6>") or currency artefacts
// ("<$USD>") that exist in neither the source nor any translation.
const MT_ARTIFACTS = /<Pg\s*\d+\s*>|<\$[^>]{0,12}>/gi;
const cleanArtifacts = (t) => t.replace(MT_ARTIFACTS, '');

export function preserve(text, tokens, patterns = PROTECT_PATTERNS) {
  let result = text;
  for (const re of patterns) {
    result = result.replace(re, (m) => {
      tokens.push(m);
      return `<ph${tokens.length - 1}>`;
    });
  }
  return result;
}
export function restore(text, tokens) {
  let result = cleanWs(text);
  if (!tokens.length) return result;
  result = result.replace(/[<＜〈]ph\s*(\d+)\s*\/?[>＞〉]?/gi, (m, d) =>
    Number(d) < tokens.length ? tokens[Number(d)] : m
  );
  result = result.replace(/[<＜〈]ph\s*(\d+)\s*[？?]/gi, (m, d) => (Number(d) < tokens.length ? tokens[Number(d)] : m));
  result = result.replace(/\u27E6(\d+)\u27E7/g, (m, d) => (Number(d) < tokens.length ? tokens[Number(d)] : m));
  return fixTokenSpacing(cleanArtifacts(cleanWs(result)));
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export function createEngine(opts = {}) {
  const {
    cacheFile,
    rateMs = 120,
    batchChars = 3500,
    batchLines = 30,
    sessionRefreshEvery = 150,
    dryRun = false,
    extraPatterns = [],
    userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    log = () => {},
  } = opts;
  const patterns = extraPatterns.length ? [...PROTECT_PATTERNS, ...extraPatterns] : PROTECT_PATTERNS;

  let ig = null,
    iid = null,
    abuseKey = null,
    abuseToken = null,
    requestCount = 0;
  let cache = {};
  const stats = { apiCalls: 0, cacheHits: 0, fallbacks: 0, failures: 0 };

  function load() {
    try {
      if (fs.existsSync(cacheFile)) cache = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
    } catch {
      /* ignore */
    }
    fs.mkdirSync(path.dirname(cacheFile), { recursive: true });
  }
  function save() {
    const data = JSON.stringify(cache);
    for (let attempt = 0; attempt < 4; attempt++) {
      try {
        fs.writeFileSync(cacheFile, data, 'utf8');
        return;
      } catch {
        /* transient Windows lock — retry */
      }
    }
    log('  [warn] cache save failed 4x; continuing');
  }

  async function refreshSession() {
    const res = await fetch('https://cn.bing.com/translator', {
      headers: { 'User-Agent': userAgent, 'Accept-Language': 'en-US,en;q=0.9' },
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
        'User-Agent': userAgent,
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

  async function translate1(text, lang) {
    const ck = `${lang}::${text}`;
    if (cache[ck]) {
      stats.cacheHits++;
      return cache[ck];
    }
    if (dryRun) return text;
    if (!/[a-zA-Z]{2,}/.test(text)) return text;
    const tokens = [];
    const masked = preserve(text, tokens, patterns);
    let best = null;
    for (let attempt = 0; attempt < 3; attempt++) {
      if (requestCount >= sessionRefreshEvery) await refreshSession();
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
            stats.apiCalls++;
            await sleep(rateMs);
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
      stats.apiCalls++;
      return best;
    }
    stats.failures++;
    return text;
  }

  async function translateBatch(texts, lang) {
    const result = new Array(texts.length);
    const todo = [];
    for (let i = 0; i < texts.length; i++) {
      const ck = `${lang}::${texts[i]}`;
      if (cache[ck]) {
        result[i] = cache[ck];
        stats.cacheHits++;
      } else if (dryRun) {
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
    const masked = preserve(joined, tokens, patterns);
    if (requestCount >= sessionRefreshEvery) await refreshSession();
    requestCount++;
    let out;
    try {
      out = await bingOnce(masked, bingCode(lang));
    } catch (e) {
      out = { error: e.message };
    }
    if (out.text) {
      const lines = restore(out.text, tokens).split('\n');
      if (lines.length === todo.length && lines.every((l) => l.trim())) {
        for (let k = 0; k < todo.length; k++) {
          const v = lines[k].trim();
          if (v && v !== texts[todo[k]]) cache[`${lang}::${texts[todo[k]]}`] = v;
          result[todo[k]] = v || texts[todo[k]];
        }
        stats.apiCalls++;
        await sleep(rateMs);
        return result;
      }
    }
    stats.fallbacks++;
    for (const i of todo) result[i] = await translate1(texts[i], lang);
    return result;
  }

  return {
    load,
    save,
    refreshSession,
    translate1,
    translateBatch,
    stats,
    get cacheSize() {
      return Object.keys(cache).length;
    },
    get session() {
      return { ig, iid };
    },
    get cache() {
      return cache;
    },
    opts: { batchChars, batchLines },
  };
}

// --- text-run walk -----------------------------------------------------------
const TAG_RE = /(<[^>]+>)/g;
export function splitParts(s) {
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
export const isTranslatableLine = (ln) =>
  ln.trim().length >= 2 && /[a-zA-Z]{2,}/.test(ln) && !/^https?:/.test(ln.trim());

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
  if (obj && typeof obj === 'object')
    for (const [k, v] of Object.entries(obj)) collectValues(v, [...seg, k], k, records, units);
}

function rebuild(parts, map) {
  return parts
    .map((p) =>
      p.raw !== undefined ? p.raw : p.lines.map((ln) => (isTranslatableLine(ln) ? (map.get(ln) ?? ln) : ln)).join('\n')
    )
    .join('');
}

/** Translate every translatable prose line in a nested object/array, returning a clone. */
export async function translateObjectDeep(engine, obj, lang) {
  const records = [];
  const units = new Set();
  collectValues(obj, [], '', records, units);
  const list = [...units];
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
  const out = structuredClone(obj);
  for (const { seg, parts } of records) setSeg(out, seg, rebuild(parts, map));
  return out;
}
