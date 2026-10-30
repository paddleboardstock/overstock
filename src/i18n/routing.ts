import { defaultLang } from './config';

export const LOCALIZED_ROUTES = new Set([
  '/disclaimer',
  '/privacy',
  '/terms',
  '/products',
  '/rib-boats',
  '/inflatable-boats',
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
  '/buyer-center',
  '/brand-marine-expertise',
  '/brand-global-presence',
  '/brand-why-paddleboardoverstock',
  '/why-paddleboardoverstock',
  '/brand/team',
  '/cases',
  '/certifications',
  '/ce-compliance',
  '/partners',
  '/request-quotation',
  '/resources',
  '/solutions-diving-center-boats',
  '/solutions-fishing-boat-solutions',
  '/solutions-marine-tourism-equipment',
  '/solutions-rescue-watercraft',
  '/solutions-yacht-tender-solutions',
  '/randdcenter',
  '/contact',
  '/factory',
  '/academy',
  '/custom',
  '/media',
  '/quality',
  '/quality-control',
  '/warranty',
  '/use-cases/search-and-rescue',
  '/engineering-perfection',
  '/engineering-capability',
  '/manufacturer',
  '/use-cases/disaster-relief',
  '/use-cases/commercial-workboats',
  '/solutions',
  '/solutions/by-industry',
  '/solutions/by-use-case',
  '/community',
  '/trust',
  '/design-powerhouse',
  '/engineering-team',
  '/knowledge',
  '/oem-odm-manufacturer',
  '/lifestyle',
  '/gallery',
  '/learn/sup',
  '/learn/inflatable-boat',
  '/learn/water-safety',
  '/learn/materials',
  '/compare/aluminum-vs-fiberglass',
  '/compare/commercial-vs-recreational-rib',
  '/compare/paddleboardoverstock-vs-traditional-manufacturers',
  '/factory/capacity',
  '/factory/quality-lab',
  '/factory/oem-capability',
  '/factory/tour',
  '/oem-odm-blueprint',
  '/oem-odm',
  '/solutions-matrix',
  '/research/engineering-whitepaper',
  '/solutions/clubs',
  '/solutions/resorts',
  '/solutions/entrepreneurs',
  '/solutions/rental-business',
  '/business-packages',
  '/success-stories',
  '/testimonials',
  '/why-paddleboardoverstock',
  '/industries/schools',
  '/industries/distributors',
  '/technical-drawings',
  '/oem-odm-rib-boats',
  '/factory-audit',
  '/dealers-distributors',
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
  if (path.startsWith('technology') || path.startsWith('randdcenter')) return 'technology';
  if (path.startsWith('safety')) return 'safety';
  if (path.startsWith('guides')) return 'guide';
  if (path.startsWith('news') || path.startsWith('blog')) return 'article';
  if (path.startsWith('about')) return 'brand';
  if (path.startsWith('services') || path.startsWith('pricing') || path.startsWith('contact')) return 'service';
  return 'page';
}
