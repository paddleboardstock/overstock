export const languages: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  pt: 'Português',
  ar: 'العربية',
  it: 'Italiano',
  ru: 'Русский',
  pl: 'Polski',
  nl: 'Nederlands',
  th: 'ไทย',
  tl: 'Filipino',
  hu: 'Magyar',
  ro: 'Română',
  bg: 'Български',
  tr: 'Türkçe',
  id: 'Bahasa Indonesia',
  ms: 'Bahasa Melayu',
};
export const defaultLang = 'en';
export const showDefaultLang = true;

// @ts-nocheck
import { getUiForLang } from './generated/ui-all';

// `ui` holds the active language's generated UI strings. Layout populates it per
// request/language via setLang() (see src/layouts/Layout.astro); middleware may
// override it at runtime via setUi() from fetched JSON. Mutated in place so all
// importers see the live object.
const _ui: Record<string, any> = {};
export const ui: any = _ui;

export function setLang(lang: string) {
  const data = getUiForLang(lang || 'en') || {};
  Object.keys(_ui).forEach((k) => delete _ui[k]);
  Object.assign(_ui, data);
}

export function setUi(data: Record<string, any>) {
  Object.keys(_ui).forEach((k) => delete _ui[k]);
  Object.assign(_ui, data || {});
}
