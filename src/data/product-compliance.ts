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
  rib: {
    certs: [
      { label: 'CE', standard: '2013/53/EU (RCD)', body: 'TÜV Rheinland' },
      { label: 'ISO 9001:2015', body: 'SGS' },
      { label: 'BSCI', body: 'Intertek' },
      { label: 'UKCA', body: 'Intertek' },
    ],
    materialCompliance: ['REACH (EU)', 'RoHS (EU)', 'California Prop 65'],
    testStandards: ['ISO 6185 (RIB Safety)', 'ASTM D751 (Seam Strength)', 'ISO 12217 (Stability)'],
    warranty: '5 years against manufacturing defects',
  },
  inflatable: {
    certs: [
      { label: 'CE', standard: 'EN 6185-1:2018', body: 'TÜV Rheinland' },
      { label: 'ISO 9001:2015', body: 'SGS' },
      { label: 'UKCA', body: 'Intertek' },
    ],
    materialCompliance: ['REACH (EU)', 'RoHS (EU)', 'California Prop 65'],
    testStandards: ['ASTM D751 (Tensile/Seam)', 'ASTM G154 (UV Aging)', 'ISO 4646 (Cold Crack)'],
    warranty: '5 years against manufacturing defects',
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
  kayak: {
    certs: [
      { label: 'CE', standard: 'EN 6185-1:2018', body: 'TÜV Rheinland' },
      { label: 'ISO 9001:2015', body: 'SGS' },
      { label: 'UKCA', body: 'Intertek' },
    ],
    materialCompliance: ['REACH (EU)', 'RoHS (EU)', 'California Prop 65'],
    testStandards: ['ASTM D751 (Tensile/Seam)', 'ASTM G154 (UV Aging)', 'ISO 4646 (Cold Crack)'],
    warranty: '5 years against manufacturing defects',
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
