#!/usr/bin/env node
/**
 * scripts/fold-untranslated-canonical.mjs
 *
 * 未翻译语言页 canonical 折叠到 EN 根（构建后处理 dist）。
 *
 * 背景：fr/de/es/it 背书语言的相当一部分页面正文仍是英文（05_ci_gate 的 X 类
 * 缺口）。这些页面若 canonical 指向自身，会与英文根页面构成重复内容竞争权重。
 * 本站跨语言 canonical 折叠是既定设计（产品页已手动折叠，G 类检查允许
 * "本地页 → EN 根"），本脚本把判定自动化：
 *
 *   对每个可索引的非英文页面：
 *     1. 语言检测（与 langdetect_lite 同口径的停用词统计：忽略单字母
 *        token、平局判不可靠）判为英文，且置信达标（en 停用词命中 ≥5 且
 *        领先页面语言 ≥3）→ 视为未翻译
 *     2. canonical 指向自身（self）→ 改写为英文根路径
 *     3. 已折叠（canonical = EN 根或他页）→ 不动
 *
 * 采样前剥离 Tldr AI 摘要块（data-ai-block="tldr"）：factory 系列页面的
 * 英文 directAnswer 会把已翻译页误判为英文。置信阈值防止近平局误折叠
 * （实测 de/solutions/offshore-energy 曾以 17:17 平局按表序误判 en）。
 *
 * 已翻译页（正文为该语言）→ 保持 self canonical，不受影响。
 */

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = process.argv[2] || './dist';
const BASE = 'https://paddleboardoverstock.com';

const STOPWORDS = {
  en: ['the', 'and', 'of', 'to', 'a', 'in', 'for', 'is', 'on', 'that', 'with', 'as', 'by', 'at', 'from'],
  de: ['der', 'die', 'das', 'und', 'in', 'den', 'von', 'mit', 'ist', 'auf', 'zu', 'ein', 'eine', 'sich'],
  pt: ['o', 'a', 'os', 'as', 'do', 'da', 'de', 'que', 'em', 'para', 'com', 'um', 'uma', 'no', 'na'],
  fr: ['le', 'la', 'les', 'de', 'des', 'et', 'pour', 'avec', 'une', 'dans', 'sur', 'est', 'un', 'en', 'au'],
  es: ['el', 'la', 'los', 'las', 'de', 'del', 'que', 'en', 'para', 'con', 'por', 'un', 'una', 'y', 'es'],
  it: ['il', 'lo', 'la', 'le', 'di', 'del', 'che', 'e', 'per', 'con', 'in', 'un', 'una', 'non', 'è'],
  nl: ['de', 'het', 'een', 'van', 'en', 'in', 'op', 'voor', 'met', 'aan', 'die', 'dat', 'is', 'te', 'zijn'],
  // pl 毕业清单 §16.4-4：波兰语停用词（token 正则 [a-zà-ÿ] 不含 ą/ć/ę/ł/ń/ś/ź/ż，选词避开这些字母）
  pl: ['na', 'do', 'jest', 'oraz', 'dla', 'jak', 'ale', 'czy', 'przez', 'bez', 'ten', 'tego', 'tym', 'tak', 'nie'],
  // 2026-10-19：bg/hu/id/ms/ro/th/tl/tr 毕业。token 正则 [a-zà-ÿ]
  // 不覆盖这些语言的专属字母（ő/ű/ă/â/î/ș/ț/ç/ğ/ı/ş），因此变音/文字检测见
  // 下方 NON_LATIN；下列停用词为拉丁字母兜底（避开被正则过滤的字符）。
  hu: [
    'az',
    'hogy',
    'nem',
    'egy',
    'meg',
    'vagy',
    'mint',
    'van',
    'volt',
    'csak',
    'minden',
    'nagyon',
    'ahol',
    'amikor',
    'mert',
    'ezt',
    'azt',
    'lesz',
    'kell',
    'lehet',
    'ezek',
  ],
  id: [
    'dan',
    'yang',
    'di',
    'ke',
    'dari',
    'untuk',
    'dengan',
    'pada',
    'ini',
    'itu',
    'tidak',
    'adalah',
    'akan',
    'atau',
    'juga',
    'karena',
    'oleh',
    'sebagai',
    'bisa',
    'dalam',
    'ada',
    'saat',
    'agar',
    'maka',
  ],
  ms: [
    'dan',
    'yang',
    'di',
    'ke',
    'dari',
    'untuk',
    'dengan',
    'pada',
    'ini',
    'itu',
    'tidak',
    'adalah',
    'akan',
    'atau',
    'juga',
    'kerana',
    'oleh',
    'sebagai',
    'boleh',
    'dalam',
    'ada',
    'serta',
  ],
  ro: [
    'si',
    'de',
    'la',
    'cu',
    'pe',
    'pentru',
    'care',
    'este',
    'sunt',
    'nu',
    'mai',
    'din',
    'ca',
    'daca',
    'fara',
    'despre',
    'acest',
    'aceasta',
    'sau',
    'fi',
    'fost',
    'prin',
    'sale',
    'lui',
  ],
  tl: [
    'ang',
    'mga',
    'para',
    'hindi',
    'ito',
    'iyan',
    'may',
    'mayroon',
    'bilang',
    'kung',
    'dahil',
    'ngunit',
    'mula',
    'hanggang',
    'dapat',
    'pwede',
    'maaari',
    'sila',
    'nito',
    'natin',
  ],
  tr: [
    've',
    'bir',
    'bu',
    'ile',
    'daha',
    'gibi',
    'olan',
    'olarak',
    'var',
    'yok',
    'ama',
    'veya',
    'ancak',
    'kadar',
    'sonra',
    'once',
    'gore',
    'uzerinde',
    'ise',
    'hem',
    'icin',
    'cok',
  ],
};

const LANGS = [
  'en',
  'fr',
  'de',
  'es',
  'pt',
  'it',
  'ar',
  'ru',
  'pl',
  'nl',
  'th',
  'tl',
  'hu',
  'ro',
  'bg',
  'tr',
  'id',
  'ms',
];

const NON_LATIN = [
  ['ar', /[\u0600-\u06FF]/g],
  ['ru', /[\u0400-\u04FF]/g],
  // 2026-10-19 毕业：bg/et/he/hr/hu/id/ko/lt/lv/ms/ro/sk/sl/sr/th/tl/tr。
  // 1) 非拉丁文字（西里尔/希伯来/泰文/谚文）直接按字符集检测，英文页面计数恒为 0。
  ['bg', /[\u0400-\u04FF]/g],
  ['th', /[\u0E00-\u0E7F]/g],
  // 2) 拉丁字母语言用专属变音字符检测（token 正则 [a-zà-ÿ] 不覆盖这些字符，
  //    已翻译页面必然命中远超阈值；英文页面计数为 0）。多语言共享字符时次序
  //    只影响判定为哪一个非 en 语言——只要不是 'en' 即不会折叠，因此安全。
  ['hu', /[\u0151\u0171]/g], // ő ű —— 匈牙利语专属
  ['ro', /[\u0103\u00E2\u00EE\u0219\u021B]/g], // ă â î ș ț
  ['tr', /[\u00E7\u011F\u0131\u015F\u011E]/g], // ç ğ ı ş Ğ
];

function stopwordHits(text) {
  const sample = (text || '').slice(0, 4000);
  const words = sample.toLowerCase().match(/[a-zà-ÿ]+/g) || [];
  const multi = words.filter((w) => w.length > 1);
  const hits = {};
  for (const [l, sw] of Object.entries(STOPWORDS)) {
    hits[l] = multi.filter((w) => sw.includes(w)).length;
  }
  return hits;
}

// sv/no/da/fi/de 毕业清单：正文头部变音词通道。停用词法对北欧语言失效：高频功能词
// 与 en 同形（en/de/den/at/for），且页面多为"模板本地化 + 内容区英文"混译形态，en
// 计数虚高（实测 /sv/contact en=10:sv=6、/sv/guides en=52:sv=28 —— and×14/to×17
// 来自列表卡片英文摘要——正文开头即瑞典语仍误折叠）。
//
// 判据：正文前 600 字符唯一变音词型 ≥3，或前 300 字符 ≥2。真翻译页正文第一句即
// 本地化（/sv/guides h600=18、/fi/people、/de/guides "Führer Neu bei SUP?"）；未
// 翻译页头部变音词仅来自分类标签/面包屑（"Anvendelsestilfælde"），唯一词型 ≤1
// （实测 294 折叠页中 211 页 h600=0）。"Läs mer"×N 类 CTA 只贡献 1 个词型，不会
// 误救。title/description 已翻译但正文英文的页面（research/use-cases 摘要组）
// 也会命中——SERP 以本语言展示，保持 self canonical 的本地可见性优于折叠。
// 首字符组覆盖 sv/fi/de（åäö）与 no/da（åæø）；sv 先测。no/da 无法互分，返回
// 'no' —— fold 决策只看是否 'en'，二者等价。dry-run 全语言验证：救回 51 页
// （sv16/no10/da10/fi14/de1）零误触发（fr/es/pt/it/ar/ru/pl/nl/el/cs/ja 均为 0）。
function scandiDiacriticLang(bodyText) {
  if (!bodyText) return null;
  const tok = (s) => s.toLowerCase().match(/[a-zà-ÿ]+/g) || [];
  const uniq = (words, re) => new Set(words.filter((w) => re.test(w))).size;
  const head600 = bodyText.slice(0, 600);
  const head300 = bodyText.slice(0, 300);
  const svRe = /[\u00E5\u00E4\u00F6]/;
  const noDaRe = /[\u00E5\u00E6\u00F8]/;
  if (uniq(tok(head600), svRe) >= 3 || uniq(tok(head300), svRe) >= 2) return 'sv';
  if (uniq(tok(head600), noDaRe) >= 3 || uniq(tok(head300), noDaRe) >= 2) return 'no';
  return null;
}

function detectLanguage(text, bodyText) {
  const sample = (text || '').slice(0, 4000);
  if (!sample.trim()) return null;
  for (const [l, re] of NON_LATIN) {
    const letters = sample.match(re) || [];
    if (letters.length >= 6) return l;
  }
  const scandi = scandiDiacriticLang(bodyText || sample);
  if (scandi) return scandi;
  const hits = stopwordHits(sample);
  let best = 0;
  for (const n of Object.values(hits)) if (n > best) best = n;
  if (best < 3) return null;
  const bestLangs = Object.keys(hits).filter((l) => hits[l] === best);
  return bestLangs.length === 1 ? bestLangs[0] : null;
}

function mainText(html) {
  const body = html.split('</head>')[1] || '';
  let t = (body.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i) || [])[1] || body;
  t = t.replace(/<section\b[^>]*data-ai-block="tldr"[^>]*>[\s\S]*?<\/section>/gi, ' ');
  t = t.replace(/<(script|style|nav|header|footer|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ');
  // Form controls are not prose: the contact form's country <select> lists ~200 English
  // country names, which pushed en stopword hits above the fold threshold for a page
  // whose actual copy is translated (hr/contact was folded for this reason).
  t = t.replace(/<(select|datalist)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ');
  t = t
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return t;
}

function localeOf(pathKey) {
  const seg = pathKey.replace(/^\//, '').split('/')[0];
  return seg && LANGS.includes(seg) && seg !== 'en' ? seg : 'en';
}

function enRootPath(pathKey) {
  // /de/a/b/ -> /a/b/ ； /de/ -> /  ； 根路径返回 null（本来就在 EN 根）
  const seg = pathKey.replace(/^\//, '').split('/');
  if (seg[0] && LANGS.includes(seg[0]) && seg[0] !== 'en') {
    const rest = seg.slice(1).join('/').replace(/\/+$/, '');
    return rest ? `/${rest}/` : '/';
  }
  return null;
}

let folded = 0;
let kept = 0;
let already = 0;
let skippedNoindex = 0;
const samples = [];

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      walk(p);
    } else if (e.name === 'index.html') {
      const rel = '/' + path.relative(DIST, p).replace(/\\/g, '/');
      const pathKey = rel.replace(/\/index\.html$/, '/');
      const locale = localeOf(pathKey);
      if (locale === 'en') continue;
      const html = fs.readFileSync(p, 'utf8');
      const robots = (html.match(/<meta\s+name="robots"\s+content="([^"]*)"/i) || [])[1] || '';
      if (/noindex/i.test(robots)) {
        skippedNoindex++;
        continue;
      }
      const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '';
      const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gis)].map((m) => m[1].replace(/<[^>]+>/g, ' ').trim());
      const text = mainText(html);
      // 采样窗口 3000 字符：产品页开头是规格表（数字/单位/保留原文的技术值），
      // 功能词稀少；正文译文在 1200 字符之后，窗口太小会把已翻译页误判为英文
      // （实测 de/products/ap330 在 1200 时 en=9:de=5 误折叠，3000 时 de=25:en=12 正确）。
      const sample = [title, ...h1s, text.slice(0, 3000)].join(' ').trim();
      const det = detectLanguage(sample, text);
      if (det === 'en') {
        const hits = stopwordHits(sample);
        const enHits = hits.en || 0;
        const locHits = hits[locale] || 0;
        if (!(enHits >= 5 && enHits - locHits >= 3)) {
          kept++;
          continue;
        }
        const enRoot = enRootPath(pathKey);
        const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
        const canonical = canonicalMatch ? canonicalMatch[1] : '';
        const isSelf =
          !canonical ||
          new URL(canonical).pathname.replace(/\/+$/, '').replace(/^\//, '') ===
            pathKey.replace(/^\//, '').replace(/\/+$/, '');
        if (!isSelf) {
          already++;
          continue;
        }
        if (!enRoot) continue;
        const newHtml = html.replace(
          /<link\s+rel="canonical"\s+href="[^"]*"/i,
          `<link rel="canonical" href="${BASE}${enRoot}"`
        );
        fs.writeFileSync(p, newHtml, 'utf8');
        folded++;
        if (samples.length < 8)
          samples.push(
            `${pathKey} (${locale}) -> ${enRoot} | en=${enHits} ${locale}=${locHits} | title: ${title.slice(0, 50)}`
          );
      }
    }
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  walk(DIST);
  console.log(
    `[fold-canonical] folded=${folded} keptLowConfidence=${kept} alreadyFolded=${already} noindexSkipped=${skippedNoindex}`
  );
  for (const s of samples) console.log('  ', s);
}

export { mainText, detectLanguage, stopwordHits };
