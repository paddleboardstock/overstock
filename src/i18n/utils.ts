import { defaultLang, languages } from './config';
import { nodes } from '~/content/graph/nodes';

const USE_CASE_NODES = nodes.filter((n) => n.type === 'use-case');

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) return lang;
  return defaultLang;
}

export function removeLang(path: string): string {
  const parts = path.split('/').filter(Boolean);
  if (parts.length > 0 && parts[0] in languages) {
    return '/' + parts.slice(1).join('/');
  }
  return path.startsWith('/') ? path : '/' + path;
}

export function localizePath(path: string, lang: string): string {
  // The default language (en) is served at the root — /en/ 308-redirects to /.
  // Always map English to the root-level URL so hreflang anchors don't point to
  // a redirect (Google ignores hreflang entries whose URLs redirect).
  if (lang === defaultLang) return removeLang(path);
  const hasTrailingSlash = path.endsWith('/');
  const clean = path.startsWith('/') ? path.slice(1) : path;
  const base = '/' + lang + '/' + clean;
  return hasTrailingSlash && !base.endsWith('/') ? base + '/' : base;
}

/**
 * Slug-aware variant of localizePath. Use-case node slugs differ per locale
 * (e.g. en `/use-cases/rescue` vs de/fr `/use-cases/search-rescue`), so a
 * naive lang prefix produces dead hreflang/language-switcher URLs. This helper
 * resolves the node by the source slug then rewrites to the target locale's
 * slug (falling back to the node id, same as `[lang]/use-cases/[slug].astro`).
 */
export function localizeUseCasePath(path: string, lang: string): string {
  const parts = path.split('/').filter(Boolean);
  if (parts.length < 2 || parts[0] !== 'use-cases') return localizePath(path, lang);
  const node = USE_CASE_NODES.find(
    (n) =>
      (n.slug && n.slug[lang]) === parts[1] || (n.slug && Object.values(n.slug).includes(parts[1])) || n.id === parts[1]
  );
  if (!node) return localizePath(path, lang);
  const targetSlug = (node.slug && node.slug[lang]) || node.id;
  const newPath = ['', 'use-cases', targetSlug].join('/');
  return localizePath(path.replace(/^\/(use-cases\/)[^/]+/, `${newPath}`), lang);
}
