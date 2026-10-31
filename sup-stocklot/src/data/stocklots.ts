// =============================================================================
// SAMPLE DATA — replace every lot below with live inventory before launch.
// All titles are deliberately de-branded (engineering descriptions only).
// Never store original brand names, SKUs or barcode ranges in this file —
// branded material belongs in the gated portal only (public/portal/assets).
// =============================================================================

export type Grade = 'A' | 'B';
export type LotStatus =
  | 'available'
  | 'low'
  | 'reserved'
  | 'sold'
  | 'inspection'
  | 'compliance'
  | 'archived';
export type LotType = 'all-around' | 'touring' | 'accessories';
export type PackagingMode = 'palletized' | 'loose';

export const HS_CODE = '9506.99.00';

export const STATUS_LABELS: Record<LotStatus, string> = {
  available: 'Available',
  low: 'Low Stock',
  reserved: 'Reserved',
  sold: 'Sold Out',
  inspection: 'Under Inspection',
  compliance: 'Compliance Review',
  archived: 'Archived',
};

export interface PriceTier {
  minQty: number;
  unitPriceUsd: number;
}

export interface CartonSpec {
  lengthCm: number;
  widthCm: number;
  heightCm: number;
  grossWeightKg: number;
  netWeightKg: number;
  unitsPerCarton: number;
  cartonsPerPallet: number;
}

export interface StockLot {
  id: string;
  slug: string;
  title: string;
  type: LotType;
  sizeLabel: string;
  construction: string;
  included: string[];
  condition: string;
  grade: Grade;
  availableQty: number;
  moq: number;
  priceTiers: PriceTier[];
  carton: CartonSpec;
  status: LotStatus;
  notes: string;
}

export interface ContainerSpec {
  code: string;
  name: string;
  usableCbm: number;
  /** Practical stowage volume when floor-loaded loose (no pallets). */
  looseLoadCbm: number;
  maxPayloadKg: number;
  palletsStandard: number;
}

export const CONTAINERS: ContainerSpec[] = [
  { code: '20GP', name: '20ft General Purpose', usableCbm: 33, looseLoadCbm: 28, maxPayloadKg: 21700, palletsStandard: 10 },
  { code: '40HQ', name: '40ft High Cube', usableCbm: 76, looseLoadCbm: 68, maxPayloadKg: 26500, palletsStandard: 24 },
];

export const STOCKLOTS: StockLot[] = [
  {
    id: 'SL-01',
    slug: '9-6-all-around-inflatable-sup-dual-layer-drop-stitch',
    title: `9'6" All-Around Inflatable SUP (Dual-Layer Drop Stitch)`,
    type: 'all-around',
    sizeLabel: `9'6" × 32" × 6" (290 × 81 × 15 cm)`,
    construction: '0.7mm + 0.7mm dual-layer PVC drop stitch, machine-welded rails, EVA diamond-groove deck',
    included: [
      'Inflatable board',
      '3-piece adjustable paddle',
      'Double-action hand pump',
      'Coiled leash',
      'Removable center fin (slide-in)',
      'Repair kit',
      'Wheelie backpack',
    ],
    condition: 'New, unused — cancelled OEM production order',
    grade: 'A',
    availableQty: 320,
    moq: 50,
    priceTiers: [
      { minQty: 50, unitPriceUsd: 118 },
      { minQty: 100, unitPriceUsd: 108 },
      { minQty: 200, unitPriceUsd: 98 },
    ],
    carton: { lengthCm: 86, widthCm: 55, heightCm: 32, grossWeightKg: 14.5, netWeightKg: 13.2, unitsPerCarton: 1, cartonsPerPallet: 12 },
    status: 'available',
    notes: 'Cancelled OEM production order — boards complete, never retailed.',
  },
  {
    id: 'SL-02',
    slug: '10-6-all-around-inflatable-sup-dual-layer-fusion',
    title: `10'6" All-Around Inflatable SUP (Dual-Layer Fusion)`,
    type: 'all-around',
    sizeLabel: `10'6" × 33" × 6" (320 × 84 × 15 cm)`,
    construction: 'Fusion dual-layer drop stitch (0.7mm + 0.7mm), machine-welded rails, dual cargo D-rings',
    included: [
      'Inflatable board',
      '3-piece adjustable paddle',
      'Double-action hand pump',
      'Coiled leash',
      'Removable center fin (slide-in)',
      'Repair kit',
      'Wheelie backpack',
    ],
    condition: 'New, unused — surplus production run',
    grade: 'A',
    availableQty: 480,
    moq: 50,
    priceTiers: [
      { minQty: 50, unitPriceUsd: 128 },
      { minQty: 100, unitPriceUsd: 118 },
      { minQty: 200, unitPriceUsd: 106 },
    ],
    carton: { lengthCm: 90, widthCm: 58, heightCm: 33, grossWeightKg: 15.5, netWeightKg: 14.2, unitsPerCarton: 1, cartonsPerPallet: 12 },
    status: 'available',
    notes: 'Surplus production run — first-quality, factory-sealed cartons.',
  },
  {
    id: 'SL-03',
    slug: '11-touring-inflatable-sup-double-wall-drop-stitch',
    title: `11' Touring Inflatable SUP (Double-Wall Drop Stitch + Stringer)`,
    type: 'touring',
    sizeLabel: `11'0" × 32" × 6" (335 × 81 × 15 cm)`,
    construction: 'Double-wall drop stitch with reinforcing center stringer, welded rails, front cargo bungee',
    included: [
      'Inflatable board',
      '3-piece adjustable paddle',
      'Double-action hand pump',
      'Coiled leash',
      'Removable center fin (US box)',
      'Repair kit',
      'Wheelie backpack',
    ],
    condition: 'New, unused — cancelled export order',
    grade: 'A',
    availableQty: 210,
    moq: 40,
    priceTiers: [
      { minQty: 40, unitPriceUsd: 142 },
      { minQty: 100, unitPriceUsd: 132 },
      { minQty: 200, unitPriceUsd: 120 },
    ],
    carton: { lengthCm: 95, widthCm: 60, heightCm: 34, grossWeightKg: 16.5, netWeightKg: 15.2, unitsPerCarton: 1, cartonsPerPallet: 12 },
    status: 'available',
    notes: 'Cancelled export order — touring shape, displacement nose.',
  },
  {
    id: 'SL-04',
    slug: '12-6-touring-inflatable-sup-double-layer-fusion',
    title: `12'6" Touring Inflatable SUP (Double-Layer Fusion, Rocker Line)`,
    type: 'touring',
    sizeLabel: `12'6" × 32" × 6" (381 × 81 × 15 cm)`,
    construction: 'Double-layer fusion drop stitch, tapered displacement hull, welded rails, 6-point cargo rig',
    included: [
      'Inflatable board',
      '3-piece adjustable paddle',
      'Double-action hand pump',
      'Coiled leash',
      'Removable center fin (US box)',
      'Repair kit',
      'Wheelie backpack',
    ],
    condition: 'New, unused — surplus production run',
    grade: 'A',
    availableQty: 150,
    moq: 30,
    priceTiers: [
      { minQty: 30, unitPriceUsd: 158 },
      { minQty: 60, unitPriceUsd: 150 },
      { minQty: 100, unitPriceUsd: 142 },
    ],
    carton: { lengthCm: 100, widthCm: 62, heightCm: 35, grossWeightKg: 18, netWeightKg: 16.6, unitsPerCarton: 1, cartonsPerPallet: 12 },
    status: 'low',
    notes: 'Small lot — early allocation recommended.',
  },
  {
    id: 'SL-05',
    slug: 'mixed-all-around-inflatable-sup-cosmetic-seconds',
    title: `Mixed All-Around Inflatable SUPs — Cosmetic Seconds (100% Airtight)`,
    type: 'all-around',
    sizeLabel: `10'6"–11'0" × 32"–33" × 6" (assorted)`,
    construction: 'Assorted dual-layer drop stitch constructions, machine-welded rails',
    included: [
      'Inflatable board',
      '3-piece adjustable paddle',
      'Double-action hand pump',
      'Coiled leash',
      'Removable center fin',
      'Repair kit',
      'Wheelie backpack',
    ],
    condition: 'New, cosmetic seconds — 100% airtight',
    grade: 'B',
    availableQty: 400,
    moq: 100,
    priceTiers: [
      { minQty: 100, unitPriceUsd: 58 },
      { minQty: 200, unitPriceUsd: 52 },
      { minQty: 300, unitPriceUsd: 48 },
    ],
    carton: { lengthCm: 90, widthCm: 58, heightCm: 33, grossWeightKg: 15.5, netWeightKg: 14.2, unitsPerCarton: 1, cartonsPerPallet: 12 },
    status: 'available',
    notes: 'Factory seconds: minor cosmetic marks (deck print, rail finish). 100% airtight — every board passes the same 72-hour pressure test. Sold AS-IS.',
  },
  {
    id: 'SL-06',
    slug: 'complete-accessory-sets-paddle-pump-leash-fin-bag',
    title: 'Complete Accessory Sets (Paddle / Pump / Leash / Fin / Bag)',
    type: 'accessories',
    sizeLabel: '6-piece set, one-size paddle 67"–86" (170–218 cm)',
    construction: 'Alloy-shaft paddles, ABS blades, nylon coiled leashes, PP slide-in fins',
    included: [
      '3-piece adjustable paddle (alloy shaft)',
      'Double-action hand pump',
      'Coiled leash',
      'Slide-in fin + spare',
      'Repair kit',
      'Wheelie backpack',
    ],
    condition: 'New, unused — overstocked accessory sets',
    grade: 'A',
    availableQty: 600,
    moq: 100,
    priceTiers: [
      { minQty: 100, unitPriceUsd: 36 },
      { minQty: 300, unitPriceUsd: 32 },
      { minQty: 500, unitPriceUsd: 28 },
    ],
    carton: { lengthCm: 80, widthCm: 55, heightCm: 35, grossWeightKg: 16, netWeightKg: 14.5, unitsPerCarton: 4, cartonsPerPallet: 12 },
    status: 'available',
    notes: 'Overstocked accessory sets — ideal add-on to any board lot, also sold separately.',
  },
];

// ---------------------------------------------------------------------------
// Loading & pricing helpers
// ---------------------------------------------------------------------------

export function cartonCbm(c: CartonSpec): number {
  return (c.lengthCm * c.widthCm * c.heightCm) / 1_000_000;
}

export function unitsPerPallet(lot: StockLot): number {
  return lot.carton.unitsPerCarton * lot.carton.cartonsPerPallet;
}

export function tierPriceUsd(lot: StockLot, qty: number): number {
  let price = lot.priceTiers[0].unitPriceUsd;
  for (const tier of lot.priceTiers) {
    if (qty >= tier.minQty) price = tier.unitPriceUsd;
  }
  return price;
}

export interface LoadingResult {
  cartons: number;
  pallets: number;
  totalCbm: number;
  totalGrossWeightKg: number;
  totalNetWeightKg: number;
  unitPriceUsd: number;
  estFobUsd: number;
}

export function calcLoading(
  lot: StockLot,
  qty: number,
  mode: PackagingMode = 'palletized',
): LoadingResult {
  const n = Math.max(0, Math.floor(qty));
  const cartons = n > 0 ? Math.ceil(n / lot.carton.unitsPerCarton) : 0;
  const pallets =
    mode === 'palletized' && cartons > 0 ? Math.ceil(cartons / lot.carton.cartonsPerPallet) : 0;
  const unitPrice = tierPriceUsd(lot, n);
  return {
    cartons,
    pallets,
    totalCbm: Number((cartons * cartonCbm(lot.carton)).toFixed(2)),
    totalGrossWeightKg: Number((cartons * lot.carton.grossWeightKg).toFixed(1)),
    totalNetWeightKg: Number((cartons * lot.carton.netWeightKg).toFixed(1)),
    unitPriceUsd: unitPrice,
    estFobUsd: n * unitPrice,
  };
}

export interface ContainerFit {
  code: string;
  name: string;
  maxUnits: number;
  fullContainers: number;
  remainderUnits: number;
}

export function containerFits(
  lot: StockLot,
  qty: number,
  mode: PackagingMode = 'palletized',
): ContainerFit[] {
  const n = Math.max(0, Math.floor(qty));
  const unitCbm = cartonCbm(lot.carton) / lot.carton.unitsPerCarton;
  const unitGw = lot.carton.grossWeightKg / lot.carton.unitsPerCarton;
  return CONTAINERS.map((c) => {
    const byVolume = Math.floor((mode === 'loose' ? c.looseLoadCbm : c.usableCbm) / unitCbm);
    const byWeight = Math.floor(c.maxPayloadKg / unitGw);
    const byPallets =
      mode === 'palletized' ? c.palletsStandard * unitsPerPallet(lot) : Number.MAX_SAFE_INTEGER;
    const maxUnits = Math.max(0, Math.min(byPallets, byVolume, byWeight));
    return {
      code: c.code,
      name: c.name,
      maxUnits,
      fullContainers: n > 0 ? Math.floor(n / maxUnits) : 0,
      remainderUnits: n > 0 ? n % maxUnits : 0,
    };
  });
}

/** Aggregate multi-lot stowage across a selection (used by the portal simulator). */
export interface StowageItem {
  lot: StockLot;
  qty: number;
}

export interface StowageTotals {
  cbm: number;
  grossWeightKg: number;
  pallets: number;
  units: number;
}

export function stowageTotals(items: StowageItem[], mode: PackagingMode): StowageTotals {
  let cbm = 0;
  let gw = 0;
  let pallets = 0;
  let units = 0;
  for (const item of items) {
    const l = calcLoading(item.lot, item.qty, mode);
    cbm += l.totalCbm;
    gw += l.totalGrossWeightKg;
    pallets += l.pallets;
    units += item.qty;
  }
  return {
    cbm: Number(cbm.toFixed(2)),
    grossWeightKg: Number(gw.toFixed(1)),
    pallets,
    units,
  };
}
