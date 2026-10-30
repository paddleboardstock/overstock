export interface ProductCompliance {
  certs: { label: string; standard?: string; body?: string }[];
  materialCompliance: string[];
  testStandards: string[];
  warranty: string;
}

const complianceByCategory: Record<string, ProductCompliance> = {
  sup: {
    certs: [
      { label: 'CE', standard: 'EN 6185-1:2018', body: 'TÜV Rheinland' },
      { label: 'ISO 9001:2015', body: 'SGS' },
      { label: 'UKCA', body: 'Intertek' },
    ],
    materialCompliance: ['REACH (EU)', 'RoHS (EU)', 'California Prop 65'],
    testStandards: ['ASTM D751 (Tensile)', 'ASTM G154 (UV Aging)', 'ISO 4646 (Cold Crack)'],
    warranty: '2 years against manufacturing defects',
  },
  accessory: {
    certs: [
      { label: 'CE', body: 'TÜV Rheinland' },
      { label: 'ISO 9001:2015', body: 'SGS' },
    ],
    materialCompliance: ['REACH (EU)', 'RoHS (EU)'],
    testStandards: ['Product-specific safety testing per EU directive'],
    warranty: '2 years against manufacturing defects',
  },
};

const defaultCompliance: ProductCompliance = {
  certs: [
    { label: 'CE', body: 'TÜV Rheinland' },
    { label: 'ISO 9001:2015', body: 'SGS' },
  ],
  materialCompliance: ['REACH (EU)', 'RoHS (EU)'],
  testStandards: ['Product-specific testing per applicable standards'],
  warranty: 'Standard manufacturer warranty',
};

export function getProductCompliance(category?: string): ProductCompliance {
  if (!category) return defaultCompliance;
  const key = category.toLowerCase();
  return complianceByCategory[key] || defaultCompliance;
}
