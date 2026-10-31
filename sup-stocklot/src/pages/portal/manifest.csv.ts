import type { APIRoute } from 'astro';
import { STOCKLOTS, HS_CODE, cartonCbm, unitsPerPallet, STATUS_LABELS } from '../../data/stocklots';

// GATED manifest — served only behind the portal session cookie (the Pages
// Function intercepts /portal/*). Richer than the public /manifest.csv:
// adds HS code, net weights, condition, slug and status labels.
function csvEscape(value: string | number): string {
  const s = String(value);
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

export const GET: APIRoute = () => {
  const header = [
    'Lot ID',
    'Slug',
    'Title',
    'Grade',
    'Condition',
    'Status',
    'Size',
    'Construction',
    'Included',
    'Available Qty',
    'MOQ',
    'Price Tier 1 (USD/pc)',
    'Price Tier 2 (USD/pc)',
    'Price Tier 3 (USD/pc)',
    'HS Code',
    'Carton LxWxH (cm)',
    'Carton GW (kg)',
    'Carton NW (kg)',
    'Units per Carton',
    'Cartons per Pallet',
    'Units per Pallet',
    'Carton CBM',
    'Notes',
  ];

  const rows = STOCKLOTS.map((lot) => {
    const tiers = [0, 1, 2].map((i) => lot.priceTiers[i]?.unitPriceUsd ?? '');
    return [
      lot.id,
      lot.slug,
      lot.title,
      lot.grade,
      lot.condition,
      STATUS_LABELS[lot.status],
      lot.sizeLabel,
      lot.construction,
      lot.included.join('; '),
      lot.availableQty,
      lot.moq,
      ...tiers,
      HS_CODE,
      `${lot.carton.lengthCm}x${lot.carton.widthCm}x${lot.carton.heightCm}`,
      lot.carton.grossWeightKg,
      lot.carton.netWeightKg,
      lot.carton.unitsPerCarton,
      lot.carton.cartonsPerPallet,
      unitsPerPallet(lot),
      cartonCbm(lot.carton).toFixed(3),
      lot.notes,
    ].map(csvEscape).join(',');
  });

  const csv = [header.map(csvEscape).join(','), ...rows].join('\r\n') + '\r\n';

  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="portal-manifest-full.csv"',
      'Cache-Control': 'no-store',
    },
  });
};
