import type { APIRoute } from 'astro';
import { STOCKLOTS, cartonCbm, unitsPerPallet } from '../data/stocklots';

function csvEscape(value: string | number): string {
  const s = String(value);
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

export const GET: APIRoute = () => {
  const header = [
    'Lot ID',
    'Title',
    'Grade',
    'Size',
    'Construction',
    'Included',
    'Available Qty',
    'MOQ',
    'Price Tier 1 (USD/pc)',
    'Price Tier 2 (USD/pc)',
    'Price Tier 3 (USD/pc)',
    'Carton LxWxH (cm)',
    'Carton GW (kg)',
    'Units per Carton',
    'Cartons per Pallet',
    'Units per Pallet',
    'Carton CBM',
    'Status',
    'Notes',
  ];

  const rows = STOCKLOTS.map((lot) => {
    const tiers = [0, 1, 2].map((i) => lot.priceTiers[i]?.unitPriceUsd ?? '');
    return [
      lot.id,
      lot.title,
      lot.grade,
      lot.sizeLabel,
      lot.construction,
      lot.included.join('; '),
      lot.availableQty,
      lot.moq,
      ...tiers,
      `${lot.carton.lengthCm}x${lot.carton.widthCm}x${lot.carton.heightCm}`,
      lot.carton.grossWeightKg,
      lot.carton.unitsPerCarton,
      lot.carton.cartonsPerPallet,
      unitsPerPallet(lot),
      cartonCbm(lot.carton).toFixed(3),
      lot.status,
      lot.notes,
    ].map(csvEscape).join(',');
  });

  const csv = [header.map(csvEscape).join(','), ...rows].join('\r\n') + '\r\n';

  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="sup-stocklot-manifest.csv"',
      'Cache-Control': 'no-store',
    },
  });
};
