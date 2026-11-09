/**
 * scripts/apply-word-gate-noindex.mjs — P11 全站自查：补上从未接通的渲染层词数闸门。
 *
 * 背景：Metadata.astro 自初始快照起 wordCount 一直是 undefined（Astro 组件内拿不到
 * 渲染后 HTML），导致词数不足的页面渲染成 index,follow + 自 canonical，却被
 * generate-sitemaps 的同一闸门排除出 sitemap —— 971 个「可索引孤儿页」。
 *
 * 本步骤在 mirror-root-en 之后、generate-sitemaps 之前运行：词数闸门失败、或命中
 * sitemap-exclude.json 显式排除清单（generate-sitemaps 同源）的页面 rewrite robots
 * meta → noindex, follow，使可索引面与 sitemap 完全对齐（系统性收敛：
 * sitemap = 可索引集；判定口径与 generate-sitemaps 共用 lib/word-gate.mjs +
 * sitemap-exclude.json，零第二实现）。
 *
 * 跳过：redirect stub（已带 noindex）、已 noindex 页、canonical 指向他页的折叠页
 * （canonical 已是去重信号，noindex + cross-page canonical 是矛盾信号）。
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { passesWordGate, normalizePath } from './lib/word-gate.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const DIST = path.join(ROOT, 'dist');
const EXCLUDE_CFG = JSON.parse(readFileSync(path.join(ROOT, 'src/config/sitemap-exclude.json'), 'utf8'));
const EXCLUDE_PATHS = new Set(EXCLUDE_CFG.paths.map((p) => normalizePath(p)));
const EXCLUDE_REGEX = EXCLUDE_CFG.regex.map((r) => new RegExp(r));

function walk(dir, base, out) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.join(base, entry.name).replace(/\\/g, '/');
    if (entry.isDirectory()) walk(full, rel, out);
    else if (entry.name === 'index.html') out.push('/' + rel.slice(0, -'index.html'.length));
  }
}

function rewriteRobotsNoindex(html) {
  // 支持两种属性顺序；content 值整体替换，保留 follow
  const variants = [
    /(<meta\s+name=["']robots["']\s+content=["'])([^"']*)(["'])/i,
    /(<meta\s+content=["'])([^"']*)(["']\s+name=["']robots["'])/i,
  ];
  for (const re of variants) {
    const m = re.exec(html);
    if (m && !/noindex/i.test(m[2])) {
      const keep = /nofollow/i.test(m[2]) ? 'noindex, nofollow' : 'noindex, follow';
      return html.slice(0, m.index) + m[1] + keep + m[3] + html.slice(m.index + m[0].length);
    }
    if (m) return null; // 已 noindex
  }
  return null;
}

function main() {
  const pages = [];
  walk(DIST, '', pages);
  let noindexed = 0;
  let byExclude = 0;
  let skipped = 0;
  for (const urlPath of pages) {
    const file = path.join(DIST, urlPath.replace(/^\//, ''), 'index.html');
    let html;
    try {
      html = readFileSync(file, 'utf8');
    } catch {
      continue;
    }
    skipped++;
    if (/http-equiv="refresh"/i.test(html)) continue; // redirect stub
    const robotsMeta = html.match(/<meta\b[^>]*\bname=["']robots["'][^>]*>/i)?.[0] ?? '';
    if (/noindex/i.test(robotsMeta)) continue; // 渲染层已 noindex
    const canon = /rel=["']canonical["'] href=["']([^"']+)["']/.exec(html)?.[1] ?? '';
    const canonPath = canon.startsWith('http') ? canon.replace(/^https?:\/\/[^/]+/, '') : canon;
    if (canonPath && canonPath.replace(/\/+$/, '') !== urlPath.replace(/\/+$/, '')) continue; // 折叠页
    const norm = normalizePath(urlPath);
    const excluded = EXCLUDE_PATHS.has(norm) || EXCLUDE_REGEX.some((re) => re.test(norm));
    if (!excluded && passesWordGate(urlPath)) continue;
    const rewritten = rewriteRobotsNoindex(html);
    if (rewritten) {
      writeFileSync(file, rewritten);
      noindexed++;
      if (excluded) byExclude++;
    }
  }
  console.log(
    `[word-gate-noindex] scanned ${skipped} pages, noindexed ${noindexed} pages (${byExclude} via sitemap-exclude config, ${noindexed - byExclude} via word gate; render-side gate backfill, sitemap set unchanged)`
  );
}

main();
