export interface ProductCompliance {
  testing: string[];
  warranty: string;
}

const complianceByCategory: Record<string, ProductCompliance> = {
  sup: {
    testing: [
      '100% pressure-tested — 24-48h hold at 1.25x rated pressure',
      'Seam and valve leak inspection on every unit',
      'UV aging and cold crack resistance spot checks',
    ],
    warranty: '2 years against manufacturing defects',
  },
  accessory: {
    testing: ['100% functional inspection on every unit'],
    warranty: '2 years against manufacturing defects',
  },
};

const defaultCompliance: ProductCompliance = {
  testing: ['100% pressure-tested before packing'],
  warranty: 'Standard manufacturer warranty',
};

export function getProductCompliance(category?: string): ProductCompliance {
  if (!category) return defaultCompliance;
  const key = category.toLowerCase();
  return complianceByCategory[key] || defaultCompliance;
}
