import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'node:fs';

import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';

import mdx from '@astrojs/mdx';

import astrowind from './vendor/integration';
import imageOptimizer from './vendor/integration/image-optimizer';
import imgDimensions from './vendor/integration/img-dimensions';
import yaml from '@rollup/plugin-yaml';
import tailwindcss from '@tailwindcss/vite';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const locale = process.env.SITE_LOCALE || 'en';

const configFile = locale === 'en' ? './src/config.yaml' : `./src/config.${locale}.yaml`;

// P1-A：/v2/ 内容库处置重定向表（由 06_v2_disposition 生成，2 条错配已修正为 KILL）
const V2_REDIRECTS = JSON.parse(
  readFileSync(new URL('./src/config/v2-redirects.json', import.meta.url), 'utf8')
) as Record<string, string>;

// P1-A：同一份单语言表套 14 个语言前缀（en 走根路径）
function buildLocalizedRedirects(map: Record<string, string>): Record<string, string> {
  const locales = [
    'fr',
    'de',
    'es',
    'pt',
    'ar',
    'it',
    'ru',
    'pl',
    'nl',
    'sv',
    'no',
    'el',
    'fi',
    'da',
    'cs',
    'th',
    'hr',
    'tl',
    'hu',
    'ro',
    'sk',
    'bg',
    'sl',
    'sr',
    'ja',
    'ko',
    'tr',
    'id',
    'he',
    'ms',
    'lt',
    'lv',
    'et',
  ];
  const out: Record<string, string> = {};
  for (const [from, to] of Object.entries(map)) {
    out[from] = to;
    for (const l of locales) out[`/${l}${from}`] = `/${l}${to}`;
  }
  return out;
}

// 遗留 Astro.redirect 页面迁移表：静态输出模式不执行 JS redirect（生成 200 空壳），
// 统一改为 config 301（meta refresh）。源页面文件删除后由 buildLocalizedRedirects 生成全语言条目。
const LEGACY_REDIRECTS = {
  '/about/paddleboardoverstock/': '/about/',
  '/paddleboardoverstock/': '/about/',
  '/brand-story/': '/paddleboardoverstock-story/',
  '/brand/paddleboardoverstock/': '/paddleboardoverstock-story/',
  '/brand/': '/paddleboardoverstock-story/',
  '/commercial-workboats/': '/use-cases/commercial-workboats/',
  '/disaster-relief-humanitarian-aid/': '/use-cases/disaster-relief/',
  '/oem-process/': '/oem-odm-manufacturer/',
  '/quality-testing/': '/quality/',
  '/search-rescue-operations/': '/use-cases/search-and-rescue/',
  '/solutions-diving-center-boats/': '/solutions/diving-center-boats/',
  '/solutions-fishing-boat-solutions/': '/solutions/fishing-boat-solutions/',
  '/solutions-marine-tourism-equipment/': '/solutions/marine-tourism-equipment/',
  '/solutions-rescue-watercraft/': '/solutions/rescue-watercraft/',
  '/solutions-yacht-tender-solutions/': '/solutions/yacht-tender-solutions/',
};

export default defineConfig({
  output: 'static',

  // Astro 7 默认改为 'jsx'（JSX 空白规则会把内联元素间的文字粘在一起）。
  // 显式固定为 true 以保持 v6 的 HTML 感知压缩行为。
  compressHTML: true,

  redirects: {
    // P0-5：/zh/ 无页面（仓库无 zh 路由），防线上残留软 200
    '/zh/': '/',
    // P1-A：/v2/ 内容库 43 篇收敛（MERGE_301 + KILL_410→栏目页），×14 语言
    ...buildLocalizedRedirects(V2_REDIRECTS),
    // /manufacturer/ 是 /factory/ 的同内容克隆路由（同数据同布局），收敛为 301，消除重复 title/内容
    ...buildLocalizedRedirects({ '/manufacturer/': '/factory/' }),
    // 遗留 JS redirect 页迁移（静态模式空壳修复），×14 语言
    ...buildLocalizedRedirects(LEGACY_REDIRECTS),
    // P0-7：原 JS 软跳转页改服务端 301（fr 特例目标与通用表不同，需在 LEGACY 之后重声明）
    '/fr/oem-process/': '/fr/oem-odm-blueprint/',
    '/ru/brand-story/': '/ru/paddleboardoverstock-story/',
    '/nl/search-rescue-operations/': '/nl/use-cases/search-and-rescue/',
  },
  integrations: [
    mdx(),

    imageOptimizer(),

    imgDimensions(),

    astrowind({
      config: configFile,
    }),
  ],

  image: {
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    processor: unified({
      remarkPlugins: [readingTimeRemarkPlugin],
      rehypePlugins: [responsiveTablesRehypePlugin],
    }),
  },

  vite: {
    plugins: [yaml(), tailwindcss()],

    optimizeDeps: {
      exclude: ['@keystatic/core'],
    },

    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        ...(locale !== 'en'
          ? {
              '~/data/site/navigation.yaml': path.resolve(__dirname, `./src/data/site/navigation.${locale}.yaml`),
            }
          : {}),
      },
    },
  },
});
