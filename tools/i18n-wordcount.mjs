// Check that dist routes reach MIN_WORDS_TO_INDEX (sitemap inclusion floor).
// Usage (after npm run build): node tools/i18n-wordcount.mjs <route...>
// Routes are dist-relative paths without trailing slash, e.g. fr/factory/capacity
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const seoCfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/config/seo-suppress.json'), 'utf8'));
const MIN = seoCfg.minWordsToIndex ?? 400;
const FLOOR = seoCfg.sourceStructureFloor ?? 0.5;
const routes = process.argv.slice(2).filter((a) => !a.startsWith('--'));
if (!routes.length)
  routes.push(
    'de/factory/capacity',
    'fr/factory/capacity',
    'es/factory/capacity',
    'it/factory/capacity',
    'cs/factory/capacity',
    'sv/factory/capacity',
    'da/factory/capacity',
    'el/factory/capacity',
    'no/factory/capacity',
    'ru/factory/capacity',
    'nl/factory/capacity',
    'fi/factory/capacity',
    'pl/factory/capacity',
    'ar/factory/capacity',
    'pt/factory/capacity',
    'ja/factory/capacity',
    'factory/capacity'
  );
console.log('MIN_WORDS_TO_INDEX =', MIN, '| sourceStructureFloor =', FLOOR);

const CJK_RANGES = ['\\u3040-\\u30ff', '\\u3400-\\u4dbf', '\\u4e00-\\u9fff', '\\uf900-\\ufaff', '\\u0e00-\\u0e7f'];
const cjkCharRe = () => new RegExp(`[${CJK_RANGES.join('')}]`, 'g');

// 口径与 scripts/generate-sitemaps.mjs / src/utils/seo-suppress.ts 一致：
// 词数（CJK/泰文按字符折算）+ 内容结构元素数（h2/h3/li/table/p）
function seo(p) {
  const html = fs.readFileSync(`${DIST}/${p}/index.html`, 'utf8');
  const robots = html.match(/<meta[^>]+name=["']robots["'][^>]*>/i)?.[0] ?? '';
  const noindex = /noindex/i.test(robots);
  const body = html.split('</head>')[1] || '';
  const main = body.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || body;
  const stripped = main
    .replace(/<(script|style|nav|header|footer|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ');
  const text = stripped
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const cjk = (text.match(cjkCharRe()) || []).length;
  const latin = text.replace(cjkCharRe(), ' ').split(/\s+/).filter(Boolean).length;
  const count = (re) => (stripped.match(re) || []).length;
  return {
    noindex,
    words: latin + Math.ceil(cjk / 2),
    struct: count(/<h[23]\b/gi) + count(/<li\b/gi) + count(/<table\b/gi) + count(/<p\b/gi),
  };
}

// 译文页词数不足时可借英文源页面的实质（英文源达标 + 结构保留率 >= FLOOR）
function passesWordGate(p) {
  const own = seo(p);
  if (own.words >= MIN) return true;
  const m = /^([a-z]{2})\/(.*)$/.exec(p);
  if (!m) return false;
  let source;
  try {
    source = seo(m[2]);
  } catch {
    return false;
  }
  if (!(source.words >= MIN)) return false;
  if (!Number.isFinite(source.struct) || source.struct === 0) return false;
  return own.struct / source.struct >= FLOOR;
}

for (const p of routes) {
  try {
    const s = seo(p);
    console.log(
      `${p}: noindex=${s.noindex} words=${s.words} struct=${s.struct} inSitemap=${!s.noindex && passesWordGate(p)}`
    );
  } catch {
    console.log(`${p}: FILE MISSING`);
  }
}
