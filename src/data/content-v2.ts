import yamlData from './site/content-v2.yaml';
import yamlDe from './site/content-v2.de.yaml';
import yamlEs from './site/content-v2.es.yaml';
import yamlFr from './site/content-v2.fr.yaml';
import yamlIt from './site/content-v2.it.yaml';
import yamlCs from './site/content-v2.cs.yaml';
import yamlSv from './site/content-v2.sv.yaml';
import yamlDa from './site/content-v2.da.yaml';
import yamlEl from './site/content-v2.el.yaml';
import yamlNo from './site/content-v2.no.yaml';
import yamlRu from './site/content-v2.ru.yaml';
import yamlNl from './site/content-v2.nl.yaml';
import yamlFi from './site/content-v2.fi.yaml';
import yamlPl from './site/content-v2.pl.yaml';
import yamlAr from './site/content-v2.ar.yaml';
import yamlPt from './site/content-v2.pt.yaml';
import yamlJa from './site/content-v2.ja.yaml';
import yamlBg from './site/content-v2.bg.yaml';
import yamlEt from './site/content-v2.et.yaml';
import yamlHe from './site/content-v2.he.yaml';
import yamlHr from './site/content-v2.hr.yaml';
import yamlHu from './site/content-v2.hu.yaml';
import yamlId from './site/content-v2.id.yaml';
import yamlKo from './site/content-v2.ko.yaml';
import yamlLt from './site/content-v2.lt.yaml';
import yamlLv from './site/content-v2.lv.yaml';
import yamlMs from './site/content-v2.ms.yaml';
import yamlRo from './site/content-v2.ro.yaml';
import yamlSk from './site/content-v2.sk.yaml';
import yamlSl from './site/content-v2.sl.yaml';
import yamlSr from './site/content-v2.sr.yaml';
import yamlTh from './site/content-v2.th.yaml';
import yamlTl from './site/content-v2.tl.yaml';
import yamlTr from './site/content-v2.tr.yaml';
import { businessArticles } from './content-v2-business';
import { businessArticles as businessArticlesDe } from './content-v2-business.de';
import { businessArticles as businessArticlesEs } from './content-v2-business.es';
import { businessArticles as businessArticlesFr } from './content-v2-business.fr';
import { businessArticles as businessArticlesIt } from './content-v2-business.it';
import { businessArticles as businessArticlesCs } from './content-v2-business.cs';
import { businessArticles as businessArticlesSv } from './content-v2-business.sv';
import { businessArticles as businessArticlesDa } from './content-v2-business.da';
import { businessArticles as businessArticlesEl } from './content-v2-business.el';
import { businessArticles as businessArticlesNo } from './content-v2-business.no';
import { businessArticles as businessArticlesRu } from './content-v2-business.ru';
import { businessArticles as businessArticlesNl } from './content-v2-business.nl';
import { businessArticles as businessArticlesFi } from './content-v2-business.fi';
import { businessArticles as businessArticlesPl } from './content-v2-business.pl';
import { businessArticles as businessArticlesAr } from './content-v2-business.ar';
import { businessArticles as businessArticlesPt } from './content-v2-business.pt';
import { businessArticles as businessArticlesJa } from './content-v2-business.ja';
import { businessArticles as businessArticlesBg } from './content-v2-business.bg';
import { businessArticles as businessArticlesEt } from './content-v2-business.et';
import { businessArticles as businessArticlesHe } from './content-v2-business.he';
import { businessArticles as businessArticlesHr } from './content-v2-business.hr';
import { businessArticles as businessArticlesHu } from './content-v2-business.hu';
import { businessArticles as businessArticlesId } from './content-v2-business.id';
import { businessArticles as businessArticlesKo } from './content-v2-business.ko';
import { businessArticles as businessArticlesLt } from './content-v2-business.lt';
import { businessArticles as businessArticlesLv } from './content-v2-business.lv';
import { businessArticles as businessArticlesMs } from './content-v2-business.ms';
import { businessArticles as businessArticlesRo } from './content-v2-business.ro';
import { businessArticles as businessArticlesSk } from './content-v2-business.sk';
import { businessArticles as businessArticlesSl } from './content-v2-business.sl';
import { businessArticles as businessArticlesSr } from './content-v2-business.sr';
import { businessArticles as businessArticlesTh } from './content-v2-business.th';
import { businessArticles as businessArticlesTl } from './content-v2-business.tl';
import { businessArticles as businessArticlesTr } from './content-v2-business.tr';

export interface ContentV2Record {
  slug: string;
  category: 'problem' | 'guide' | 'comparison' | 'product' | 'authority';
  type: string;
  title: string;
  description: string;
  definition: string;
  tldr: string;
  problem: string;
  explanation: string;
  solution: string;
  recommendation: string;
  faq: { q: string; a: string }[];
  relatedGuides: string[];
  relatedProducts: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const contentV2Records = [...(yamlData as ContentV2Record[]), ...businessArticles];

export const contentV2ByLang: Record<string, ContentV2Record[]> = {
  en: [...(yamlData as ContentV2Record[]), ...businessArticles],
  de: [...(yamlDe as ContentV2Record[]), ...businessArticlesDe],
  es: [...(yamlEs as ContentV2Record[]), ...businessArticlesEs],
  fr: [...(yamlFr as ContentV2Record[]), ...businessArticlesFr],
  it: [...(yamlIt as ContentV2Record[]), ...businessArticlesIt],
  cs: [...(yamlCs as ContentV2Record[]), ...businessArticlesCs],
  sv: [...(yamlSv as ContentV2Record[]), ...businessArticlesSv],
  da: [...(yamlDa as ContentV2Record[]), ...businessArticlesDa],
  el: [...(yamlEl as ContentV2Record[]), ...businessArticlesEl],
  no: [...(yamlNo as ContentV2Record[]), ...businessArticlesNo],
  ru: [...(yamlRu as ContentV2Record[]), ...businessArticlesRu],
  nl: [...(yamlNl as ContentV2Record[]), ...businessArticlesNl],
  fi: [...(yamlFi as ContentV2Record[]), ...businessArticlesFi],
  pl: [...(yamlPl as ContentV2Record[]), ...businessArticlesPl],
  ar: [...(yamlAr as ContentV2Record[]), ...businessArticlesAr],
  pt: [...(yamlPt as ContentV2Record[]), ...businessArticlesPt],
  ja: [...(yamlJa as ContentV2Record[]), ...businessArticlesJa],
  tr: [...(yamlTr as ContentV2Record[]), ...businessArticlesTr],
  tl: [...(yamlTl as ContentV2Record[]), ...businessArticlesTl],
  th: [...(yamlTh as ContentV2Record[]), ...businessArticlesTh],
  sr: [...(yamlSr as ContentV2Record[]), ...businessArticlesSr],
  sl: [...(yamlSl as ContentV2Record[]), ...businessArticlesSl],
  sk: [...(yamlSk as ContentV2Record[]), ...businessArticlesSk],
  ro: [...(yamlRo as ContentV2Record[]), ...businessArticlesRo],
  ms: [...(yamlMs as ContentV2Record[]), ...businessArticlesMs],
  lv: [...(yamlLv as ContentV2Record[]), ...businessArticlesLv],
  lt: [...(yamlLt as ContentV2Record[]), ...businessArticlesLt],
  ko: [...(yamlKo as ContentV2Record[]), ...businessArticlesKo],
  id: [...(yamlId as ContentV2Record[]), ...businessArticlesId],
  hu: [...(yamlHu as ContentV2Record[]), ...businessArticlesHu],
  hr: [...(yamlHr as ContentV2Record[]), ...businessArticlesHr],
  he: [...(yamlHe as ContentV2Record[]), ...businessArticlesHe],
  et: [...(yamlEt as ContentV2Record[]), ...businessArticlesEt],
  bg: [...(yamlBg as ContentV2Record[]), ...businessArticlesBg],
};

export function getContentV2Records(lang: string): ContentV2Record[] {
  return contentV2ByLang[lang] || contentV2ByLang.en;
}
