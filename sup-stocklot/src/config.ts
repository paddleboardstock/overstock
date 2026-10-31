// Neutral trading identity. Deliberately contains NO legal entity name,
// NO brand names, and NO cross-references to any other business.
// See DEPLOY.md before changing or deploying.
export const SITE = {
  name: 'SUP Stocklot Direct',
  domain: 'supstocklot.com',
  tagline: 'Inflatable SUP Overstock & Wholesale Supply — FOB Qingdao',
  description:
    'New inflatable SUP overstock and cancelled-order stocklots for retailers, rental operators, SUP schools, clubs and bulk buyers. Live quantities, 72-hour inflated pressure QC, third-party inspection welcome, FOB Qingdao.',
  port: 'Qingdao (CNQDG)',
  portFull: 'Port of Loading: Qingdao, China (CNQDG)',
  whatsappNumber: '+8613305324192',
  whatsappDisplay: '+86 133 0532 4192',
  whatsappPrefill:
    "Hi, I found supstocklot.com. I'd like live inspection photos & video of the current SUP stocklots.",
  // Placeholder mailbox on this site's own domain — set up via Cloudflare
  // Email Routing before launch. Do NOT reuse a mailbox tied to another entity.
  contactEmail: 'sales@supstocklot.com',
  warehouseLocation: 'Qingdao, China',
  incoterms: 'FOB Qingdao / EXW Qingdao Warehouse (Incoterms 2020)',
  dispatchWindow: '3–5 business days after payment confirmation',
  moqPolicy: 'Minimum order: 50 pcs / 1 pallet (per lot, mixed lots negotiable)',
  qcProtocol: {
    id: 'WI-QC-AT-001 Rev A',
    pressure: '15–18 PSI (1.03–1.24 bar)',
    duration: '72 continuous hours',
    maxDrop: '≤ 0.05 bar (temperature-corrected)',
    scope: '100% of boards — seam & valve integrity verified, no structural bubbles or deformation',
  },
  paymentTerms:
    '30–50% T/T deposit locks your allocation (non-refundable); balance before container dispatch or against B/L copy. No open account (O/A), no usance L/C.',
  allocationHoldDays: 15,
} as const;

export function waLink(message: string = SITE.whatsappPrefill): string {
  return `https://wa.me/${SITE.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}
