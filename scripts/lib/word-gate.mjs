/**
 * scripts/lib/word-gate.mjs — dist 侧词数闸门的唯一实现（P11 全站自查收敛）。
 *
 * 被 generate-sitemaps.mjs（sitemap 排除）与 apply-word-gate-noindex.mjs
 * （渲染后置 noindex）共享，保证「可索引面 == sitemap」两边永不漂移。
 *
 * 口径改动时必须同步的实现（AGENTS.md 索引词数闸门铁律）：
 *   - 本文件（dist 侧：distSeo / passesWordGate）
 *   - src/utils/seo-suppress.ts（渲染侧：countWords / countStructureElements / decideIndexing）
 *   - scripts/05_ci_gate.py（C 检查）
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const DIST = path.join(ROOT, 'dist');

const SEO_CFG = JSON.parse(readFileSync(path.join(ROOT, 'src/config/seo-suppress.json'), 'utf8'));
export const MIN_WORDS_TO_INDEX = SEO_CFG.minWordsToIndex ?? 400;
export const SOURCE_STRUCTURE_FLOOR = SEO_CFG.sourceStructureFloor ?? 0.5;
export const COMPARE_ALLOWLIST = new Set(SEO_CFG.compareAllowlist);
export const COMPARE_REGEX = new RegExp(SEO_CFG.compareRegex);

// 无词间空格的文字（汉字 / 日文假名 / 泰文）：按字符数折算词数，否则被严重低估
const CJK_RANGES = ['\\u3040-\\u30ff', '\\u3400-\\u4dbf', '\\u4e00-\\u9fff', '\\uf900-\\ufaff', '\\u0e00-\\u0e7f'];
const cjkCharRe = () => new RegExp(`[${CJK_RANGES.join('')}]`, 'g');

export function normalizePath(p) {
  const clean = String(p)
    .replace(/^https?:\/\/[^/]+/, '')
    .split('?')[0];
  const t = '/' + clean.replace(/^\/+|\/+$/g, '');
  return t === '/' ? '/' : t + '/';
}

/**
 * 与 05_ci_gate / 渲染侧同一口径：<main> 词数 + 内容结构元素数 + 渲染后的 noindex 状态。
 * 结果按路径缓存（译文页判词数时要读同源英文页，缓存可避免重复解析）。
 */
const MEASURE_CACHE = new Map();
export function distSeo(urlPath) {
  if (MEASURE_CACHE.has(urlPath)) return MEASURE_CACHE.get(urlPath);
  let out;
  try {
    const html = readFileSync(path.join(DIST, urlPath.replace(/^\//, ''), 'index.html'), 'utf8');
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
    out = {
      noindex,
      words: latin + Math.ceil(cjk / 2),
      struct: count(/<h[23]\b/gi) + count(/<li\b/gi) + count(/<table\b/gi) + count(/<p\b/gi),
    };
  } catch {
    out = { noindex: false, words: Infinity, struct: Infinity };
  }
  MEASURE_CACHE.set(urlPath, out);
  return out;
}

/**
 * 词数闸门（与 src/utils/seo-suppress.ts 的 decideIndexing 同一规则）。
 * 译文页词数不足时允许「借英文源页面的实质」：英文源达标 + 译文保留了源页 ≥
 * sourceStructureFloor 的内容结构（h2/h3/li/table/p）。
 */
export function passesWordGate(urlPath) {
  const own = distSeo(urlPath);
  if (own.words >= MIN_WORDS_TO_INDEX) return true;
  const m = /^\/([a-z]{2})\/(.*)$/.exec(urlPath);
  if (!m) return false; // 英文页没有源页面可借
  const source = distSeo('/' + m[2]);
  if (!(source.words >= MIN_WORDS_TO_INDEX)) return false; // 英文源自己也是薄页
  if (!Number.isFinite(source.struct) || source.struct === 0) return false;
  if (!Number.isFinite(own.struct)) return true; // 计量失败：不因结构再否决一次
  return own.struct / source.struct >= SOURCE_STRUCTURE_FLOOR;
}
