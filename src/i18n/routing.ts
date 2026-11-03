import { defaultLang } from './config';

export const LOCALIZED_ROUTES = new Set([
  '/disclaimer',
  '/privacy',
  '/terms',
  '/products',
  '/supboard',
  '/accessory',
  '/guides',
  '/faq',
  '/v2',
  '/use-cases',
  '/compare',
  '/compare/sup-vs-kayak',
  '/compare/inflatable-vs-hardboard',
  '/llms/brand/paddleboardoverstock',
  '/llms/compare/sup-types',
  '/llms/industry/inflatable-water-sports',
  '/geo-report',
  '/learn',
  '/technology',
  '/safety',
  '/size-guide',
  '/journal',
  '/knowledge-graph',
  '/news',
  '/about',
  '/paddleboardoverstock-story',
  '/brand-marine-expertise',
  '/brand-why-paddleboardoverstock',
  '/why-paddleboardoverstock',
  '/brand/team',
  '/cases',
  '/resources',
  '/contact',
  '/factory',
  '/academy',
  '/media',
  '/quality',
  '/quality-control',
  '/warranty',
  '/engineering-perfection',
  '/manufacturer',
  '/solutions',
  '/solutions/by-use-case',
  '/community',
  '/trust',
  '/design-powerhouse',
  '/engineering-team',
  '/knowledge',
  '/lifestyle',
  '/gallery',
  '/learn/sup',
  '/learn/inflatable-boat',
  '/learn/water-safety',
  '/learn/materials',
  '/factory/capacity',
  '/factory/quality-lab',
  '/factory/tour',
  '/solutions/clubs',
  '/solutions/resorts',
  '/solutions/rental-business',
  '/success-stories',
  '/testimonials',
  '/why-paddleboardoverstock',
  '/cart',
  '/checkout',
  '/checkout/success',
]);

export function localizeHref(href: string | URL | undefined | null, locale: string): string {
  const str = typeof href === 'string' ? href : href?.toString() || '';
  if (!str || !str.startsWith('/') || str.startsWith('//')) return str || '';
  // The default language (en) is served at the root (see localizePath in
  // ./utils). The /en/ tree only carries mirrored redirect pages and worker
  // routes (e.g. /news, served by news-worker) have no /en/ twin at all, so
  // English links must stay un-prefixed or they 404 (/en/news).
  if (locale === defaultLang) return str;
  const base = str.split('?')[0].split('#')[0];
  if (base === '/') return str;
  if ([...LOCALIZED_ROUTES].some((r) => base === r || base.startsWith(r + '/'))) {
    return '/' + locale + str;
  }
  return str;
}

export function entityForHref(href?: string): string {
  if (!href) return 'page';
  const path = href.replace(/^\/+/g, '');
  if (path === '' || path === 'home') return 'brand';
  if (path.startsWith('products/compare') || path.startsWith('products/bundles') || path.startsWith('size-guide'))
    return 'product';
  if (path.startsWith('products') && !path.includes('/compare') && !path.includes('/bundles')) return 'product';
  if (path.startsWith('technology')) return 'technology';
  if (path.startsWith('safety')) return 'safety';
  if (path.startsWith('guides')) return 'guide';
  if (path.startsWith('news') || path.startsWith('blog')) return 'article';
  if (path.startsWith('about')) return 'brand';
  if (path.startsWith('services') || path.startsWith('pricing') || path.startsWith('contact')) return 'service';
  return 'page';
}
