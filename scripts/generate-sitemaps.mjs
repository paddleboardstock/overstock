import { existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { COMPARE_ALLOWLIST, COMPARE_REGEX, distSeo, normalizePath, passesWordGate } from './lib/word-gate.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const DIST = path.join(ROOT, 'dist');
const PUBLIC = path.join(ROOT, 'public');
const BASE = 'https://paddleboardoverstock.com';

const EXCLUDE_PREFIXES = ['/keystatic/', '/admin/', '/login/', '/register/', '/api/', '/404/', '/500/'];
const EXCLUDE_EXACT = new Set(['/brand/', '/v2/']);

// P0-1/P0-6：noindex 页不进任何 sitemap（由 03_apply_noindex 生成）
const EXCLUDE_CFG = JSON.parse(readFileSync(path.join(ROOT, 'src/config/sitemap-exclude.json'), 'utf8'));
const EXCLUDE_PATHS = new Set(EXCLUDE_CFG.paths.map((p) => normalizePath(p)));
const EXCLUDE_REGEX = EXCLUDE_CFG.regex.map((r) => new RegExp(r));

// 渲染层 noindex(seo-suppress) = 不进任何 sitemap：从同一来源派生，避免配置漂移
const SEO_CFG = JSON.parse(readFileSync(path.join(ROOT, 'src/config/seo-suppress.json'), 'utf8'));
const RENDER_NOINDEX_PATHS = new Set(SEO_CFG.paths.map((p) => normalizePath(p)));
const RENDER_NOINDEX_REGEX = SEO_CFG.regex.map((r) => new RegExp(r));

// P1-D：降级语言整体 noindex + 移出 sitemap/hreflang；hreflang alternates 只为背书语言输出（清单见 TECH.md §16.4）
const LANGS = ['fr', 'de', 'es', 'it', 'ru', 'nl', 'pl', 'ar', 'pt', 'bg', 'hu', 'id', 'ms', 'ro', 'th', 'tl', 'tr'];

function hreflangLinks(urlPath, pages) {
  const m = /^\/([a-z]{2})\/(.*)$/.exec(urlPath);
  const base = m ? '/' + m[2] : urlPath;
  const exists = (q) => pages.includes(q);
  const links = [
    `\n    <xhtml:link rel="alternate" hreflang="en" href="${BASE}${base}"/>`,
    `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}${base}"/>`,
  ];
  for (const l of LANGS) {
    const variant = `/${l}${base}`;
    if (exists(variant)) links.push(`\n    <xhtml:link rel="alternate" hreflang="${l}" href="${BASE}${variant}"/>`);
  }
  return links.join('');
}

function walk(dir, base, out) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.join(base, entry.name).replace(/\\/g, '/');
    if (entry.isDirectory()) {
      walk(full, rel, out);
    } else if (entry.name === 'index.html') {
      let urlPath = rel.slice(0, -'index.html'.length);
      if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
      out.push(urlPath);
    }
  }
}

function collectPages() {
  const pages = [];
  walk(DIST, '', pages);
  const seen = new Set();
  const result = [];
  for (const p of pages) {
    if (EXCLUDE_PREFIXES.some((prefix) => p.startsWith(prefix))) continue;
    if (EXCLUDE_EXACT.has(p)) continue;
    if (EXCLUDE_PATHS.has(p)) continue;
    if (EXCLUDE_REGEX.some((re) => re.test(p))) continue;
    if (RENDER_NOINDEX_PATHS.has(p)) continue;
    if (RENDER_NOINDEX_REGEX.some((re) => re.test(p))) continue;
    const cm = COMPARE_REGEX.exec(p);
    if (cm && !COMPARE_ALLOWLIST.has(cm[1])) continue;
    const seo = distSeo(p);
    if (seo.noindex) continue; // 渲染侧已 noindex（显式/正则/词数任一来源）→ 不进 sitemap
    if (!passesWordGate(p)) continue; // 词数兜底（译文页可按结构保留率借英文源实质）
    if (seen.has(p)) continue;
    seen.add(p);
    result.push(p);
  }
  return result.sort();
}

const TYPE_BY_PREFIX = [
  ['/products/', 'product'],
  ['/guides/', 'guide'],
  ['/compare/', 'compare'],
  ['/use-cases/', 'service'],
  ['/v2/', 'article'],
  ['/news/', 'article'],
  ['/llms/', 'reference'],
  ['/academy/', 'education'],
  ['/learn/', 'guide'],
  ['/faq', 'support'],
  ['/factory', 'service'],
  ['/about', 'brand'],
  ['/randdcenter', 'technology'],
  ['/technology', 'technology'],
  ['/safety', 'safety'],
  ['/media', 'media'],
  ['/gallery', 'media'],
  ['/solutions/', 'service'],
  ['/oem-odm-manufacturer', 'service'],
  ['/paddleboardoverstock-story', 'brand'],
  ['/marine-industry', 'industry'],
  ['/contact', 'service'],
  ['/warranty', 'support'],
  ['/custom', 'service'],
];

const PRIORITY_BY_TYPE = {
  brand: '0.8',
  product: '0.8',
  guide: '0.7',
  compare: '0.7',
  service: '0.6',
  article: '0.5',
  education: '0.6',
  support: '0.5',
  safety: '0.7',
  technology: '0.7',
  media: '0.5',
  industry: '0.6',
  reference: '0.3',
};

function classify(urlPath) {
  for (const [prefix, type] of TYPE_BY_PREFIX) {
    if (urlPath.startsWith(prefix)) return { type, entity: urlPath.slice(prefix.length).replace(/\/$/, '') || 'index' };
  }
  return { type: 'page', entity: urlPath.replace(/^\/+/, '').replace(/\/$/, '') || 'index' };
}

function entityXml(pages) {
  const rows = [];
  for (const p of pages) {
    const { type, entity } = classify(p);
    rows.push(
      `  <url>\n    <loc>${BASE}${p}</loc>${hreflangLinks(p, pages)}\n    <x:entity>${entity}</x:entity>\n    <x:type>${type}</x:type>\n    <priority>${PRIORITY_BY_TYPE[type] || '0.5'}</priority>\n  </url>`
    );
  }
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:x="https://paddleboardoverstock.com/geo" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${rows.join('\n')}\n</urlset>\n`;
}

function simpleXml(urls, changefreq, pages) {
  const rows = urls.map(
    (u) =>
      `  <url><loc>${BASE}${u}</loc>${hreflangLinks(u, pages)}<priority>0.5</priority><changefreq>${changefreq}</changefreq></url>`
  );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${rows.join('\n')}\n</urlset>\n`;
}

const AI_TOP_SECTIONS = [
  '/',
  '/about/',
  '/about/paddleboardoverstock/',
  '/products/',
  '/faq/',
  '/academy/',
  '/factory/',
  '/technology/',
  '/safety/',
  '/news/',
  '/guides/',
  '/compare/',
  '/custom/',
  '/media/',
  '/contact/',
  '/size-guide/',
  '/randdcenter/',
  '/paddleboardoverstock-story/',
  '/gallery/',
  '/warranty/',
  '/quality/',
  '/oem-odm-manufacturer/',
  '/engineering-perfection/',
  '/design-powerhouse/',
  '/engineering-team/',
  '/marine-industry/',
  '/solutions/by-industry/',
  '/solutions/by-use-case/',
  '/use-cases/search-and-rescue/',
  '/use-cases/disaster-relief/',
  '/use-cases/commercial-workboats/',
];

function main() {
  if (!existsSync(DIST)) {
    console.error('[sitemaps] dist/ not found 鈥?run after astro build');
    process.exit(1);
  }

  const pages = collectPages();
  const isEn = (p) => !/^\/[a-z]{2}\//.test(p);

  const entity = entityXml(pages);
  writeFileSync(path.join(DIST, 'sitemap-entity.xml'), entity);
  writeFileSync(path.join(PUBLIC, 'sitemap-entity.xml'), entity);

  const ai = AI_TOP_SECTIONS.filter((u) => pages.includes(u));
  const aiXml = simpleXml(ai, 'monthly', pages);
  writeFileSync(path.join(DIST, 'ai-sitemap.xml'), aiXml);
  writeFileSync(path.join(PUBLIC, 'ai-sitemap.xml'), aiXml);

  const knowledge = pages.filter(
    (p) =>
      isEn(p) &&
      (p.startsWith('/v2/') ||
        p.startsWith('/guides/') ||
        p.startsWith('/faq') ||
        p.startsWith('/academy/') ||
        p.startsWith('/learn/'))
  );
  const knowledgeXml = simpleXml(knowledge, 'monthly', pages);
  writeFileSync(path.join(DIST, 'knowledge-sitemap.xml'), knowledgeXml);
  writeFileSync(path.join(PUBLIC, 'knowledge-sitemap.xml'), knowledgeXml);

  const products = pages.filter((p) => isEn(p) && p.startsWith('/products/'));
  const productsXml = simpleXml(products, 'monthly', pages);
  writeFileSync(path.join(DIST, 'sitemap-products.xml'), productsXml);
  writeFileSync(path.join(PUBLIC, 'sitemap-products.xml'), productsXml);

  const community = pages.filter(
    (p) => isEn(p) && ['/community/', '/gallery/', '/lifestyle/', '/journal/'].includes(p)
  );
  const media = pages.filter((p) => isEn(p) && ['/media/', '/news/'].includes(p));
  const learning = pages.filter((p) => isEn(p) && p.startsWith('/learn/'));

  // P11（审计 P1-4）：空分片不写文件、不进 sitemap-index，避免 GSC 报错；
  // 分片重新有内容时会自动恢复写入与索引。
  const optionalShards = [
    { name: 'sitemap-community.xml', urls: community },
    { name: 'sitemap-media.xml', urls: media },
    { name: 'sitemap-learning.xml', urls: learning },
  ];
  for (const shard of optionalShards) {
    for (const dir of [DIST, PUBLIC]) {
      const stale = path.join(dir, shard.name);
      if (existsSync(stale)) rmSync(stale);
    }
    if (shard.urls.length === 0) continue;
    const xml = simpleXml(shard.urls, 'monthly', pages);
    writeFileSync(path.join(DIST, shard.name), xml);
    writeFileSync(path.join(PUBLIC, shard.name), xml);
  }

  // 单一 sitemap 入口（robots.txt 指向 sitemap-index.xml；gate 汇总时跳过 sitemapindex）
  const INDEX_FILES = [
    'sitemap-entity.xml',
    'ai-sitemap.xml',
    'knowledge-sitemap.xml',
    'sitemap-products.xml',
    ...optionalShards.filter((s) => s.urls.length > 0).map((s) => s.name),
  ];
  const indexXml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    INDEX_FILES.map((f) => `  <sitemap><loc>${BASE}/${f}</loc></sitemap>`).join('\n') +
    `\n</sitemapindex>\n`;
  writeFileSync(path.join(DIST, 'sitemap-index.xml'), indexXml);
  writeFileSync(path.join(PUBLIC, 'sitemap-index.xml'), indexXml);

  console.log(
    `[sitemaps] entity=${pages.length} ai=${ai.length} knowledge=${knowledge.length} products=${products.length} community=${community.length} media=${media.length} learning=${learning.length}`
  );
}

main();
