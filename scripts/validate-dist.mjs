// Post-build CI gates (audit item 20 + b2b-fast-builder static-output contract):
//   1. Every URL listed in the generated sitemaps must exist in dist/ as an
//      index.html (no 404/308 sources by construction).
//   2. Sitemap URLs must use trailing slashes consistently.
//   3. Forbidden paths (/brand/, /v2/) must not appear in sitemaps.
//   4. <title>/meta description length checks + mojibake scan on built HTML.
//   5. 静态输出契约（参照 github.com/jackzhang1314/b2b-fast-builder 的
//      validate-static-output.mjs 规则集，适配本站多语言 SSG）：
//      - 每页：html[lang]、title、meta description、canonical 恰一条且为绝对
//        URL（无 query/hash）、img alt；
//      - 可索引页：canonical 唯一 + 路径自洽 + 单一正式 origin、title 唯一
//        （跨语言重复降为告警）、正文非空壳；
//      - sitemap：无重复 URL、不收 noindex 页、URL 必须是页面的 canonical、
//        可索引 canonical 不得漏收；
//      - robots.txt 引用绝对 sitemap；404.html 存在。
// Exit code 1 on any hard violation (build fails → deploy blocked).
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DIST = path.join(ROOT, 'dist');
const BASE = 'https://paddleboardoverstock.com';
// 分片清单以 sitemap-index.xml（robots.txt 实际通告的树）为准：索引只列全量
// entity 分片；ai/knowledge/products 等专题分片是 entity 的独立子集文件，
// 供定向消费方直接引用，不参与 sitemap 一致性校验。
const SITEMAPS = (() => {
  const indexFile = path.join(DIST, 'sitemap-index.xml');
  const body = readFileSync(indexFile, 'utf8');
  return [...body.matchAll(/<loc>[^<]*\/([^/<]+\.xml)<\/loc>/g)].map((m) => m[1]);
})();
const EXCLUDE_EXACT = new Set(['/brand/', '/v2/']);
const MOJIBAKE = /\uFFFD|u\{2014\}|镥|—\?/;
const PLACEHOLDER = /\b(lorem ipsum|replace me|example product)\b/i;

const errors = [];
const warnings = [];

function walk(dir, base, out) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.join(base, entry.name).replace(/\\/g, '/');
    if (entry.isDirectory()) walk(full, rel, out);
    else if (entry.name === 'index.html')
      out.push(rel.endsWith('index.html') ? rel.slice(0, -'index.html'.length) : rel);
  }
}

function listHtmlFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...listHtmlFiles(full));
    else if (entry.name.endsWith('.html')) results.push(full);
  }
  return results;
}

function visibleText(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const stripSlash = (s) => s.replace(/\/+$/, '') || '/';

function main() {
  if (!existsSync(DIST)) {
    console.error('[validate-dist] dist/ not found — run after astro build');
    process.exit(1);
  }

  const pagesArr = [];
  walk(DIST, '', pagesArr);
  const pageSet = new Set(pagesArr.map((p) => (p.startsWith('/') ? p : '/' + p)));

  // ---- Pass 1：每个 index.html 读一次，收集页面元数据并做单页检查 ----
  /** @type {Map<string, {noindex: boolean, canonical: string|null, title: string|null}>} */
  const meta = new Map();
  let checked = 0;
  for (const rel of pagesArr) {
    const urlPath = rel.startsWith('/') ? rel : '/' + rel;
    const file = path.join(DIST, rel, 'index.html');
    const html = readFileSync(file, 'utf8');
    checked++;
    const title = /<title>([\s\S]*?)<\/title>/i.exec(html)?.[1]?.trim();
    const desc = /<meta\s+name="description"\s+content="([^"]*)"/i.exec(html)?.[1];
    const canonicalTags = [...html.matchAll(/<link\b[^>]*\brel="canonical"[^>]*>/gi)].map((m) => m[0]);
    const robots =
      /<meta\s+name="robots"\s+content="([^"]*)"/i.exec(html)?.[1] ||
      /<meta\s+content="([^"]*)"\s+name="robots"/i.exec(html)?.[1] ||
      '';
    const noindex = /noindex/i.test(robots) || /<meta\s+name="googlebot"\s+content="[^"]*noindex/i.test(html);

    // —— 契约 5：单页结构 ——
    // lang/H1/canonical 仅约束可索引页：noindex 重定向壳（~340B meta-refresh）
    // 与管理页是刻意极简页，不套用内容页契约。
    if (!noindex && !/<html\b[^>]*\blang=/i.test(html)) errors.push(`html[lang] missing: ${urlPath}`);
    if (!title || title.length < 3) errors.push(`title missing or too short: ${urlPath}`);
    else {
      // Title limit 110 (not 90): localized (RTL) product titles legitimately reach ~106 chars.
      if (title.length > 110) warnings.push(`title too long (${title.length}): ${urlPath} — ${title.slice(0, 60)}…`);
      if (MOJIBAKE.test(title)) errors.push(`mojibake in <title>: ${urlPath} — ${title.slice(0, 80)}`);
    }
    if (desc) {
      if (desc.length > 190) warnings.push(`description too long (${desc.length}): ${urlPath}`);
      else if (desc.length < 50) warnings.push(`description too short (${desc.length}): ${urlPath}`);
      if (MOJIBAKE.test(desc)) errors.push(`mojibake in description: ${urlPath}`);
    } else if (!noindex) errors.push(`meta description missing: ${urlPath}`);

    let canonical = null;
    if (!noindex) {
      const canonicals = canonicalTags.map((t) => /href="([^"]*)"/i.exec(t)?.[1]).filter(Boolean);
      if (canonicals.length !== 1)
        errors.push(`expected exactly 1 canonical link, found ${canonicals.length}: ${urlPath}`);
      if (canonicals.length === 1) {
        const c = canonicals[0];
        let u = null;
        try {
          u = new URL(c);
        } catch {
          // keep null
        }
        if (!u) errors.push(`canonical is not an absolute URL: ${urlPath} -> ${c}`);
        else {
          if (!/^https?:$/.test(u.protocol)) errors.push(`canonical protocol must be http(s): ${urlPath} -> ${c}`);
          if (u.search || u.hash) errors.push(`canonical must not contain query or fragment: ${urlPath} -> ${c}`);
          if (u.origin !== BASE) errors.push(`canonical origin mismatch: ${urlPath} -> ${u.origin}`);
          if (stripSlash(u.pathname) !== stripSlash(urlPath))
            errors.push(`canonical path does not match route: ${urlPath} -> ${u.pathname}`);
          if (u.origin === BASE && !u.search && !u.hash) canonical = u.href;
        }
      }
    }

    const imgs = html.match(/<img\b[^>]*>/gi) ?? [];
    const noAlt = imgs.filter((t) => !/\balt=/i.test(t)).length;
    if (noAlt) errors.push(`${noAlt} img element(s) missing alt: ${urlPath}`);

    if (!noindex && !/<h1\b[^>]*>[\s\S]*?\S[\s\S]*?<\/h1>/i.test(html)) warnings.push(`missing H1: ${urlPath}`);

    if (!noindex) {
      const text = visibleText(html);
      if (text.length < 120) warnings.push(`thin content (${text.length} visible chars): ${urlPath}`);
      if (PLACEHOLDER.test(text)) warnings.push(`placeholder content in visible text: ${urlPath}`);
    }

    meta.set(urlPath, { noindex, canonical, title });
  }

  // 非 index.html 的零散 HTML（404.html 等）：保留原 title/description/mojibake 扫描
  const extraHtml = listHtmlFiles(DIST).filter((f) => !f.endsWith(path.join('index.html')));
  for (const file of extraHtml) {
    const rel = file.slice(DIST.length).replace(/\\/g, '/');
    const html = readFileSync(file, 'utf8');
    checked++;
    const title = /<title>([\s\S]*?)<\/title>/i.exec(html)?.[1]?.trim();
    const desc = /<meta\s+name="description"\s+content="([^"]*)"/i.exec(html)?.[1];
    if (title && title.length > 110) warnings.push(`title too long (${title.length}): ${rel} — ${title.slice(0, 60)}…`);
    if (title && MOJIBAKE.test(title)) errors.push(`mojibake in <title>: ${rel} — ${title.slice(0, 80)}`);
    if (desc) {
      if (desc.length > 190) warnings.push(`description too long (${desc.length}): ${rel}`);
      else if (desc.length < 50) warnings.push(`description too short (${desc.length}): ${rel}`);
      if (MOJIBAKE.test(desc)) errors.push(`mojibake in description: ${rel}`);
    }
  }

  // ---- 契约 5：跨页唯一性（仅可索引页）----
  const canonBy = new Map();
  const titleBy = new Map();
  const indexableCanons = new Set();
  for (const [urlPath, m] of meta) {
    if (m.noindex) continue;
    if (m.canonical) {
      indexableCanons.add(m.canonical);
      if (canonBy.has(m.canonical))
        errors.push(`canonical shared by ${canonBy.get(m.canonical)} and ${urlPath}: ${m.canonical}`);
      else canonBy.set(m.canonical, urlPath);
    }
    if (m.title) {
      const key = m.title.toLocaleLowerCase().replace(/\s+/g, ' ').trim();
      if (titleBy.has(key)) {
        const first = titleBy.get(key);
        if (first) warnings.push(`duplicate title: ${urlPath} same as ${first} — ${m.title.slice(0, 60)}`);
        titleBy.set(key, null); // 每组只报一次
      } else titleBy.set(key, urlPath);
    }
  }

  // ---- sitemap 校验（存在性 + 尾斜杠 + 禁区 + 双向一致 + 无重复）----
  let locCount = 0;
  const seenLocs = new Set();
  const normLoc = (s) => {
    const u = new URL(s);
    return u.origin + stripSlash(u.pathname);
  };
  for (const sm of SITEMAPS) {
    const file = path.join(DIST, sm);
    if (!existsSync(file)) {
      errors.push(`sitemap missing in dist: ${sm}`);
      continue;
    }
    const xml = readFileSync(file, 'utf8');
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    locCount += locs.length;
    for (const loc of locs) {
      if (seenLocs.has(loc)) errors.push(`duplicate sitemap URL: ${loc}`);
      seenLocs.add(loc);
      const urlPath = new URL(loc).pathname;
      if (!pageSet.has(urlPath)) errors.push(`dead sitemap URL (not in dist): ${loc}`);
      if (!urlPath.endsWith('/')) warnings.push(`missing trailing slash: ${loc}`);
      if (EXCLUDE_EXACT.has(urlPath)) errors.push(`forbidden path in sitemap: ${loc}`);
      const m = meta.get(urlPath);
      if (!m) continue; // dead URL 已报
      if (m.noindex) errors.push(`noindex page listed in sitemap: ${loc}`);
      else if (m.canonical && normLoc(m.canonical) !== normLoc(loc))
        errors.push(`sitemap URL is not the page canonical: ${loc} -> ${m.canonical}`);
    }
  }
  // 可索引 canonical 不得漏收
  const seenLocNorms = new Set([...seenLocs].map(normLoc));
  for (const c of indexableCanons)
    if (!seenLocNorms.has(normLoc(c))) errors.push(`indexable canonical missing from sitemap: ${c}`);

  // ---- 契约 5：必备文件 ----
  const robotsPath = path.join(DIST, 'robots.txt');
  if (!existsSync(robotsPath)) errors.push('robots.txt missing in dist');
  else if (!/^\s*sitemap:\s*https?:\/\/\S+\s*$/im.test(readFileSync(robotsPath, 'utf8')))
    errors.push('robots.txt must reference an absolute sitemap URL');
  if (!existsSync(path.join(DIST, '404.html'))) errors.push('404.html missing in dist');

  const indexable = [...meta.values()].filter((m) => !m.noindex).length;
  console.log(
    `[validate-dist] checked ${locCount} sitemap URLs (${SITEMAPS.length} sitemaps) + ${checked} pages (${indexable} indexable)`
  );
  for (const w of warnings) console.log(`  ⚠ ${w}`);
  for (const e of errors) console.log(`  ✗ ${e}`);
  if (errors.length) {
    console.error(`[validate-dist] FAIL: ${errors.length} hard violations`);
    process.exit(1);
  }
  console.log(warnings.length ? `[validate-dist] PASS (${warnings.length} warnings)` : '[validate-dist] PASS');
}

main();
