/**
 * src/utils/seo-suppress.ts
 *
 * 单一判定入口：这个页面该不该被索引 / 该不该进 sitemap。
 * 布局层（BaseHead.astro）和 sitemap 生成器共用同一份逻辑，避免两边判断不一致
 * —— 线上目前就有「noindex 却在 sitemap 里」和「canonical 指向他页却在 sitemap 里」两类矛盾。
 *
 * 数据源：src/config/seo-suppress.json（由 scripts/03_apply_noindex.py 生成）
 */

import suppress from '../config/seo-suppress.json';

export const MIN_WORDS_TO_INDEX = suppress.minWordsToIndex ?? 400;

/**
 * 译文页「借英文源页面实质」的结构保留门槛（见 seo-suppress.json 的说明）。
 * 译文自身词数不足 MIN_WORDS_TO_INDEX 时，若英文源达标且保留了 ≥ 该比例的内容
 * 结构元素，则视为完整翻译而非空壳页。
 */
export const SOURCE_STRUCTURE_FLOOR = (suppress as { sourceStructureFloor?: number }).sourceStructureFloor ?? 0.5;

/** 有真实搜索需求的对比组合白名单，其余程序化组合一律 noindex（P0-1） */
export const COMPARE_ALLOWLIST = new Set<string>(suppress.compareAllowlist);

const SUPPRESS_PATHS = new Set<string>(suppress.paths.map(normalizePath));
const SUPPRESS_REGEX = suppress.regex.map((r: string) => new RegExp(r));
const COMPARE_REGEX = new RegExp(suppress.compareRegex);

export function normalizePath(p: string): string {
  if (!p) return '/';
  const clean = p.split('?')[0].split('#')[0];
  const trimmed = '/' + clean.replace(/^\/+|\/+$/g, '');
  return trimmed === '/' ? '/' : trimmed + '/';
}

/**
 * 词数统计口径（渲染侧 / generate-sitemaps.mjs / 05_ci_gate.py 三处必须一致）。
 * 有空格文字（拉丁/西里尔/希腊/韩文）按空白分词；CJK（汉字/假名）与泰文没有词间
 * 空格，按字符数折算（2 字 ≈ 1 词）——否则日文/泰文页会被严重低估而误判成薄页。
 */
export function countWords(html: string): number {
  const text = html
    .replace(/<(script|style|nav|header|footer|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ');
  const cjk = (text.match(cjkCharRe()) ?? []).length;
  const latin = text.replace(cjkCharRe(), ' ').split(/\s+/).filter(Boolean).length;
  return latin + Math.ceil(cjk / 2);
}

/** 无词间空格的文字：汉字 / 日文假名 / 泰文 */
const CJK_RANGES = ['\\u3040-\\u30ff', '\\u3400-\\u4dbf', '\\u4e00-\\u9fff', '\\uf900-\\ufaff', '\\u0e00-\\u0e7f'];
const cjkCharRe = () => new RegExp(`[${CJK_RANGES.join('')}]`, 'g');

/**
 * 内容结构元素计数（h2/h3/li/table/p）。数量跨语言可比（不像词数那样受语言紧凑度
 * 与文字系统影响），用于判断译文页是否保留了英文源页面的完整结构。
 */
export function countStructureElements(html: string): number {
  const body = html.split('</head>')[1] ?? html;
  const main = body.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? body;
  const clean = main
    .replace(/<(script|style|nav|header|footer|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ');
  const count = (re: RegExp) => (clean.match(re) ?? []).length;
  return count(/<h[23]\b/gi) + count(/<li\b/gi) + count(/<table\b/gi) + count(/<p\b/gi);
}

export interface IndexDecision {
  noindex: boolean;
  inSitemap: boolean;
  reason: string;
}

/**
 * 唯一判定函数。
 * @param path      页面路径（可带或不带尾斜杠）
 * @param opts.wordCount   正文词数（能拿到就传，作为兜底）
 * @param opts.sourceWordCount  该语言的英文源页面词数（译文页借用源页实质时使用）
 * @param opts.structureRatio   译文页相对英文源的内容结构保留率（h2/h3/li/table/p）
 * @param opts.canonical   页面的 canonical 路径（若指向他页则不进 sitemap）
 * @param opts.explicitNoindex  frontmatter 里显式声明的 noindex
 */
export function decideIndexing(
  path: string,
  opts: {
    wordCount?: number;
    sourceWordCount?: number;
    structureRatio?: number;
    canonical?: string;
    explicitNoindex?: boolean;
  } = {}
): IndexDecision {
  const p = normalizePath(path);

  if (opts.explicitNoindex) {
    return { noindex: true, inSitemap: false, reason: 'frontmatter 显式 noindex' };
  }

  // 内部页 / 登录页 / CMS（P0-6）
  for (const re of SUPPRESS_REGEX) {
    if (re.test(p)) {
      return { noindex: true, inSitemap: false, reason: `内部路径匹配 ${re}` };
    }
  }

  // 程序化对比页白名单（P0-1）
  const m = COMPARE_REGEX.exec(p);
  if (m && !COMPARE_ALLOWLIST.has(m[1])) {
    return {
      noindex: true,
      inSitemap: false,
      reason: `对比组合 "${m[1]}" 不在白名单内（无搜索需求且无正文）`,
    };
  }

  // 审计脚本产出的具体路径清单
  if (SUPPRESS_PATHS.has(p)) {
    return { noindex: true, inSitemap: false, reason: '在 seo-suppress.json 清单中' };
  }

  // 词数兜底：新生成的空壳页也会被拦住。
  // 译文页例外：词数偏低常常只是语言更紧凑、或文字系统被低估（日文/泰文没有词间
  // 空格）。只要英文源页面达标、且译文保留了它的内容结构，就按完整翻译放行。
  if (typeof opts.wordCount === 'number' && opts.wordCount < MIN_WORDS_TO_INDEX) {
    const sourceSubstantial = typeof opts.sourceWordCount === 'number' && opts.sourceWordCount >= MIN_WORDS_TO_INDEX;
    const keepsStructure = (opts.structureRatio ?? 0) >= SOURCE_STRUCTURE_FLOOR;
    if (!sourceSubstantial || !keepsStructure) {
      return {
        noindex: true,
        inSitemap: false,
        reason: `正文仅 ${opts.wordCount} 词 < ${MIN_WORDS_TO_INDEX}（英文源 ${opts.sourceWordCount ?? 'n/a'} 词 / 结构保留率 ${opts.structureRatio ?? 'n/a'}）`,
      };
    }
  }

  // canonical 指向他页 → 可索引但不进 sitemap
  if (opts.canonical) {
    const cp = normalizePath(opts.canonical.replace(/^https?:\/\/[^/]+/, ''));
    if (cp !== p) {
      return { noindex: false, inSitemap: false, reason: `canonical 指向 ${cp}` };
    }
  }

  return { noindex: false, inSitemap: true, reason: 'ok' };
}
