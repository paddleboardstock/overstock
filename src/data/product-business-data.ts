export interface BusinessProductInfo {
  bestFor: ('clubs' | 'resorts' | 'entrepreneurs')[];
  recommendation: string;
  useCase: string;
  operatingCost: string;
  whyBusinessesChooseIt: string;
  lifespan: string;
}

export const productBusinessData: Record<string, BusinessProductInfo> = {
  'sup-explorer-11': {
    bestFor: ['clubs', 'resorts'],
    recommendation:
      'Ideal rental board for SUP clubs and resort programs. The 11\' length and 32" width provide exceptional stability for first-time renters. Commercial-grade 1.2mm PVC withstands daily use. Packs flat for storage.',
    useCase: 'Daily rental fleet, beginner lessons, group tours',
    operatingCost: 'Low — minimal maintenance, no fuel costs, easy to repair with patch kit',
    whyBusinessesChooseIt:
      'Proven rental workhorse with high guest satisfaction. Wide stable platform reduces falls and damage. Inflatable design eliminates storage space requirements. Quick turnaround between rentals.',
    lifespan: '3-5 years with regular use in rental fleet',
  },
  'sup-ocean-voyager': {
    bestFor: ['clubs', 'resorts'],
    recommendation:
      'Touring-oriented SUP for club excursions and resort guided tours. Sleeker profile handles moderate chop while maintaining stability. Great for experienced renters and guided paddle experiences.',
    useCase: 'Guided tours, excursion programs, intermediate rental fleet',
    operatingCost: 'Low — minimal upkeep, no fuel, occasional fin replacement',
    whyBusinessesChooseIt:
      'Better performance in open water opens up more touring routes for guests. Higher guest satisfaction from smoother glide. Versatile enough for both rental and guided programs.',
    lifespan: '3-5 years with regular use',
  },
  'sup-cheetah-surge': {
    bestFor: ['clubs', 'resorts'],
    recommendation:
      'Performance board for club racing programs and advanced resort guests. Sportier shape appeals to experienced paddlers. Suitable for fitness-focused rental programs.',
    useCase: 'Racing programs, fitness classes, advanced guest experiences',
    operatingCost: 'Low-maintenance, no fuel, replace tracking fin as needed',
    whyBusinessesChooseIt:
      'Differentiates your offering from standard rental boards. Attracts experienced paddlers and fitness enthusiasts. Creates upsell opportunity for premium rental experience.',
    lifespan: '3-4 years with regular use',
  },
  'sup-ocean-pulse': {
    bestFor: ['clubs', 'resorts'],
    recommendation:
      'Versatile all-around rental SUP. Balanced dimensions suit a wide range of guest skill levels. Good choice for clubs and resorts with mixed-use fleets.',
    useCase: 'Mixed-skill rental fleet, introductory lessons, leisure paddling',
    operatingCost: 'Low — durable PVC construction, easy field repairs',
    whyBusinessesChooseIt:
      'One board serves most guest needs, simplifying fleet management. Good stability for beginners while still responsive enough for intermediate users.',
    lifespan: '3-5 years with regular use',
  },
  'sup-dolphin-wave': {
    bestFor: ['clubs', 'resorts'],
    recommendation:
      'Compact board ideal for youth programs and smaller guests. Lighter weight makes it easy for kids and teens to handle. Great for club junior programs and family resort activities.',
    useCase: 'Youth programs, kids rental, family activities, lightweight carry programs',
    operatingCost: 'Very low — smaller board uses less material, easy storage',
    whyBusinessesChooseIt:
      'Opens up children and youth market segment. Lower weight reduces injury risk for young users. Perfect for resort kids club and family programming.',
    lifespan: '3-5 years with regular use',
  },
  'sup-leviathan-wake': {
    bestFor: ['clubs'],
    recommendation:
      'Performance-oriented SUP for wake surfing and advanced paddle sports. Designed for clubs offering specialized water sports programs beyond standard paddling.',
    useCase: 'Wake surfing, advanced paddle sports, club competition training',
    operatingCost: 'Low — inflatable construction, simple maintenance routine',
    whyBusinessesChooseIt:
      'Enables clubs to offer wake surfing without a boat. Differentiates club programming from competitors. Attracts younger, action-sports oriented members.',
    lifespan: '3-4 years with regular use',
  },
  'sup-medusa-glow': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Unique glow-in-the-dark SUP for evening and night paddling experiences. Creates a premium after-dark activity for resorts and clubs looking to extend operating hours.',
    useCase: 'Night paddling events, sunset tours, evening resort activities',
    operatingCost: 'Low — LED components sealed, standard SUP maintenance',
    whyBusinessesChooseIt:
      'Creates a signature guest experience that generates social media buzz. Extends revenue hours into evening. Highly photogenic activity drives organic marketing.',
    lifespan: '2-3 years (LED battery dependent)',
  },
  'sup-flowing-lotus': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Wide SUP platform ideal for yoga and fitness programs. Extra width provides unmatched stability for on-board exercises. Perfect for resort wellness programs and club fitness classes.',
    useCase: 'SUP yoga classes, wellness retreats, fitness programs',
    operatingCost: 'Low — standard SUP care, non-slip deck minimizes wear',
    whyBusinessesChooseIt:
      'Supports premium wellness programming with higher per-guest revenue. Wide platform accommodates various body types and skill levels. Pairs well with resort spa and wellness offerings.',
    lifespan: '3-5 years with regular use',
  },
  'sup-jungle-mandala': {
    bestFor: ['resorts'],
    recommendation:
      'Designer-print SUP for resort flagship experiences and retail resale. Eye-catching pattern creates memorable guest photos and drives social media exposure for your brand.',
    useCase: 'Premium rental fleet, retail resale, brand flagship experiences',
    operatingCost: 'Low — same as standard SUP, print is UV-protected',
    whyBusinessesChooseIt:
      'Visual appeal drives guest preference and social sharing. Resale potential creates additional revenue stream. Enhances resort brand image with premium aesthetics.',
    lifespan: '3-5 years with regular use',
  },
  'sup-tropical-breeze': {
    bestFor: ['resorts'],
    recommendation:
      'Vibrant tropical-print SUP for resort rental fleets and retail. The colorful design appeals to vacation guests and creates Instagram-worthy moments that market your resort.',
    useCase: 'Resort rental fleet, retail merchandise, guest photography experiences',
    operatingCost: 'Low — durable print layer, standard SUP maintenance',
    whyBusinessesChooseIt:
      'Guests consistently choose visually distinctive boards. Print acts as floating advertising for your brand. Retail version creates merchandise revenue opportunity.',
    lifespan: '3-5 years with regular use',
  },
  'life-vest-classic': {
    bestFor: ['clubs', 'resorts', 'entrepreneurs'],
    recommendation:
      'Essential safety equipment for any rental fleet or club program. Universal fit suits most guests. Affordable bulk pricing enables commercial use. CE certified per applicable EU directives.',
    useCase: 'Mandatory safety gear for all rental and club operations',
    operatingCost: 'Very low — rinse with fresh water, inspect straps, replace every 3-5 years',
    whyBusinessesChooseIt:
      'Regulatory compliance for commercial operations. Universal adult fit simplifies inventory management. Bulk pricing significantly reduces per-unit cost. Trusted brand for guest safety.',
    lifespan: '3-5 years in commercial use',
  },
  'life-vest-pro': {
    bestFor: ['clubs', 'resorts', 'entrepreneurs'],
    recommendation:
      'Premium PFD for guided tours and professional operations. Enhanced features suit higher-end resort programs and commercial guiding operations.',
    useCase: 'Guided tours, premium experiences, professional instruction',
    operatingCost: 'Very low — minimal maintenance, replace every 3-5 years',
    whyBusinessesChooseIt:
      'Enhanced features justify premium rental pricing. Higher guest comfort leads to better reviews. Professional appearance reinforces brand quality.',
    lifespan: '3-5 years in commercial use',
  },
  'oars-pump-set': {
    bestFor: ['clubs', 'resorts', 'entrepreneurs'],
    recommendation:
      'Essential operations accessory for any rental fleet. High-output pump reduces turnaround time between rentals. Durable construction withstands commercial use.',
    useCase: 'Daily fleet inflation/deflation, maintenance operations',
    operatingCost: 'Very low — replace pump valve seals every 1-2 years, oars last 3-5 years',
    whyBusinessesChooseIt:
      'High-volume pump cuts inflation time by 50% vs consumer pumps. Reduces staff labor cost per rental. Commercial-grade oars withstand daily guest use without breaking.',
    lifespan: '2-3 years pump, 3-5 years oars',
  },
};
