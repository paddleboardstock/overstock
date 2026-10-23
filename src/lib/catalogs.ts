// Language-specific inflatable boat catalog PDFs.
// EN serves the original high-res file; each translated catalog lives at
// /catalogs/aquafarer-inflatable-boat-catalog-<lang>.pdf. Langs without a
// translated PDF fall back to the EN edition.
export const INFLATABLE_CATALOG_LANGS: ReadonlySet<string> = new Set([
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
]);

export function inflatableBoatCatalogPath(lang: string | undefined): string {
  if (lang && INFLATABLE_CATALOG_LANGS.has(lang)) {
    return `/catalogs/aquafarer-inflatable-boat-catalog-${lang}.pdf`;
  }
  return '/catalogs/aquafarer-inflatable-boat-catalog.pdf';
}
