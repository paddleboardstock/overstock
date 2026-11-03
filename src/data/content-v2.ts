import yamlData from './site/content-v2.yaml';
import yamlDe from './site/content-v2.de.yaml';
import yamlEs from './site/content-v2.es.yaml';
import yamlFr from './site/content-v2.fr.yaml';
import yamlIt from './site/content-v2.it.yaml';
import yamlRu from './site/content-v2.ru.yaml';
import yamlNl from './site/content-v2.nl.yaml';
import yamlPl from './site/content-v2.pl.yaml';
import yamlAr from './site/content-v2.ar.yaml';
import yamlPt from './site/content-v2.pt.yaml';
import yamlBg from './site/content-v2.bg.yaml';
import yamlHu from './site/content-v2.hu.yaml';
import yamlId from './site/content-v2.id.yaml';
import yamlMs from './site/content-v2.ms.yaml';
import yamlRo from './site/content-v2.ro.yaml';
import yamlTh from './site/content-v2.th.yaml';
import yamlTl from './site/content-v2.tl.yaml';
import yamlTr from './site/content-v2.tr.yaml';
import { businessArticles } from './content-v2-business';
import { businessArticles as businessArticlesDe } from './content-v2-business.de';
import { businessArticles as businessArticlesEs } from './content-v2-business.es';
import { businessArticles as businessArticlesFr } from './content-v2-business.fr';
import { businessArticles as businessArticlesIt } from './content-v2-business.it';
import { businessArticles as businessArticlesRu } from './content-v2-business.ru';
import { businessArticles as businessArticlesNl } from './content-v2-business.nl';
import { businessArticles as businessArticlesPl } from './content-v2-business.pl';
import { businessArticles as businessArticlesAr } from './content-v2-business.ar';
import { businessArticles as businessArticlesPt } from './content-v2-business.pt';
import { businessArticles as businessArticlesBg } from './content-v2-business.bg';
import { businessArticles as businessArticlesHu } from './content-v2-business.hu';
import { businessArticles as businessArticlesId } from './content-v2-business.id';
import { businessArticles as businessArticlesMs } from './content-v2-business.ms';
import { businessArticles as businessArticlesRo } from './content-v2-business.ro';
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
            ru: [...(yamlRu as ContentV2Record[]), ...businessArticlesRu],
  nl: [...(yamlNl as ContentV2Record[]), ...businessArticlesNl],
    pl: [...(yamlPl as ContentV2Record[]), ...businessArticlesPl],
  ar: [...(yamlAr as ContentV2Record[]), ...businessArticlesAr],
  pt: [...(yamlPt as ContentV2Record[]), ...businessArticlesPt],
    tr: [...(yamlTr as ContentV2Record[]), ...businessArticlesTr],
  tl: [...(yamlTl as ContentV2Record[]), ...businessArticlesTl],
  th: [...(yamlTh as ContentV2Record[]), ...businessArticlesTh],
        ro: [...(yamlRo as ContentV2Record[]), ...businessArticlesRo],
  ms: [...(yamlMs as ContentV2Record[]), ...businessArticlesMs],
        id: [...(yamlId as ContentV2Record[]), ...businessArticlesId],
  hu: [...(yamlHu as ContentV2Record[]), ...businessArticlesHu],
        bg: [...(yamlBg as ContentV2Record[]), ...businessArticlesBg],
};

export function getContentV2Records(lang: string): ContentV2Record[] {
  return contentV2ByLang[lang] || contentV2ByLang.en;
}
