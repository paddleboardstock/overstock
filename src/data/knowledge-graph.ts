import { SITE } from 'astrowind:config';

const siteUrl = String(SITE.site).replace(/\/+$/, '');

export interface BusinessEntity {
  id: string;
  type: 'BusinessAudience' | 'Service' | 'Product';
  name: string;
  description: string;
  url: string;
  sameAs?: string[];
  audience?: string[];
  offers?: string[];
}

export const businessEntities: BusinessEntity[] = [
  {
    id: `${siteUrl}/#business-clubs`,
    type: 'BusinessAudience',
    name: 'Water Sports Clubs',
    description:
      'SUP clubs, surf schools, and training centers needing equipment packages, instructor gear, branding, and maintenance support.',
    url: `${siteUrl}/solutions/clubs`,
    sameAs: [],
    audience: ['Club Owners', 'Program Directors', 'Instructors'],
    offers: ['Club Equipment Packages', 'Instructor Gear', 'Brand Kits', 'Maintenance Support'],
  },
  {
    id: `${siteUrl}/#business-resorts`,
    type: 'BusinessAudience',
    name: 'Resorts & Hotels',
    description:
      'Beach resorts, lakeside hotels, eco resorts, and yacht clubs needing guest activity equipment, rental fleet solutions, safety systems, and custom branding.',
    url: `${siteUrl}/solutions/resorts`,
    sameAs: [],
    audience: ['Resort Managers', 'Hotel Owners', 'Activity Directors'],
    offers: ['Guest Activity Equipment', 'Rental Fleet Packages', 'Safety Systems', 'Custom Branding'],
  },
  {
    id: `${siteUrl}/#success-stories`,
    type: 'Service',
    name: 'Success Stories',
    description:
      'Case studies showing how water sports businesses built profitable operations with Paddle Board Overstock equipment and solutions.',
    url: `${siteUrl}/success-stories`,
    audience: ['Potential Partners', 'Business Owners'],
    offers: ['Case Studies', 'Business Results', 'ROI Analysis'],
  },
];

export const productToBusinessMap: Record<string, string[]> = {
  'sup-explorer-11': [`${siteUrl}/#business-clubs`, `${siteUrl}/#business-resorts`],
  'sup-ocean-voyager': [`${siteUrl}/#business-clubs`, `${siteUrl}/#business-resorts`],
  'sup-cheetah-surge': [`${siteUrl}/#business-clubs`, `${siteUrl}/#business-resorts`],
  'sup-ocean-pulse': [`${siteUrl}/#business-clubs`, `${siteUrl}/#business-resorts`],
  'sup-dolphin-wave': [`${siteUrl}/#business-clubs`, `${siteUrl}/#business-resorts`],
  'sup-leviathan-wake': [`${siteUrl}/#business-clubs`],
  'sup-medusa-glow': [`${siteUrl}/#business-resorts`, `${siteUrl}/#business-clubs`],
  'sup-flowing-lotus': [`${siteUrl}/#business-resorts`, `${siteUrl}/#business-clubs`],
  'sup-jungle-mandala': [`${siteUrl}/#business-resorts`],
  'sup-tropical-breeze': [`${siteUrl}/#business-resorts`],
  'oars-pump-set': [`${siteUrl}/#business-clubs`, `${siteUrl}/#business-resorts`],
};

export function getBusinessEntityJsonLd(entityId: string): Record<string, unknown> | null {
  const entity = businessEntities.find((e) => e.id === entityId);
  if (!entity) return null;
  return {
    '@type': entity.type === 'BusinessAudience' ? 'Audience' : 'Service',
    '@id': entity.id,
    name: entity.name,
    description: entity.description,
    url: entity.url,
    ...(entity.audience?.length ? { audience: entity.audience } : {}),
    ...(entity.offers?.length ? { offers: entity.offers } : {}),
  };
}

export function getProductMentionsJsonLd(productId: string): Record<string, unknown>[] {
  const entityIds = productToBusinessMap[productId];
  if (!entityIds) return [];
  return entityIds.map((id) => getBusinessEntityJsonLd(id)).filter(Boolean) as Record<string, unknown>[];
}

export function getHomepageEntityGraphJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: SITE.name,
        url: siteUrl,
        makesOffer: businessEntities.map((e) => ({
          '@type': 'Offer',
          itemOffered: { '@id': e.id },
        })),
      },
      ...businessEntities.map((e) => getBusinessEntityJsonLd(e.id)).filter(Boolean),
    ],
  };
}
