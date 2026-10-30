// Inventory + reservations + order fulfilment shared by the shop and admin
// workers. Every stock mutation is a single conditional UPDATE
// (`on_hand - reserved >= qty`) so two concurrent checkouts can never claim
// the same unit. All functions take the raw D1 binding and speak plain SQL.
// Reference architecture: pbo-shop-starter.

export interface CartLine {
  slug: string;
  title: string;
  unitPriceCents: number;
  qty: number;
  lineTotalCents: number;
}

export interface MovementInput {
  slug: string;
  onHandDelta: number;
  reservedDelta: number;
  reason: string;
  orderId: string | null;
}

/** How long unpaid-checkout stock reservations are held before lazy release. */
export const RESERVATION_TTL_MS = 30 * 60 * 1000;

/** Upper bound of expired reservations released per checkout request. */
export const LAZY_RELEASE_BATCH = 50;

export async function recordMovement(d1: D1Database, m: MovementInput): Promise<void> {
  await d1
    .prepare(
      `INSERT INTO inventory_movements (id, slug, on_hand_delta, reserved_delta, reason, order_id)
       VALUES (?1, ?2, ?3, ?4, ?5, ?6)`
    )
    .bind(crypto.randomUUID(), m.slug, m.onHandDelta, m.reservedDelta, m.reason, m.orderId)
    .run();
}

/** Merge cart lines per slug so there is exactly one reservation per slug. */
export function mergeLines(lines: CartLine[]): Map<string, number> {
  const merged = new Map<string, number>();
  for (const line of lines) merged.set(line.slug, (merged.get(line.slug) || 0) + line.qty);
  return merged;
}

/**
 * Conditionally reserve stock for an order. Returns the slug that could not
 * be reserved (null on success); reservations claimed within this call are
 * rolled back on failure.
 */
export async function reserveStock(
  d1: D1Database,
  orderId: string,
  lines: CartLine[],
  expiresAtMs: number
): Promise<string | null> {
  const merged = mergeLines(lines);
  const claimed: Array<[string, number]> = [];
  for (const [slug, qty] of merged) {
    const res = await d1
      .prepare(
        `UPDATE inventory SET reserved = reserved + ?2, updated_at = ?3
         WHERE slug = ?1 AND on_hand - reserved >= ?2`
      )
      .bind(slug, qty, Date.now())
      .run();
    if (res.meta.changes !== 1) {
      for (const [doneSlug, doneQty] of claimed) {
        await d1
          .prepare(`UPDATE inventory SET reserved = MAX(0, reserved - ?2), updated_at = ?3 WHERE slug = ?1`)
          .bind(doneSlug, doneQty, Date.now())
          .run();
        await recordMovement(d1, {
          slug: doneSlug,
          onHandDelta: 0,
          reservedDelta: -doneQty,
          reason: 'release',
          orderId,
        });
      }
      return slug;
    }
    claimed.push([slug, qty]);
    await d1
      .prepare(
        `INSERT INTO inventory_reservations (id, order_id, slug, qty, status, expires_at)
         VALUES (?1, ?2, ?3, ?4, 'active', ?5)`
      )
      .bind(crypto.randomUUID(), orderId, slug, qty, expiresAtMs)
      .run();
    await recordMovement(d1, { slug, onHandDelta: 0, reservedDelta: qty, reason: 'reserve', orderId });
  }
  return null;
}

/** Return active reservations to the sellable pool (order cancelled/failed). */
export async function releaseOrderReservations(
  d1: D1Database,
  orderId: string,
  reason: 'release' | 'expire'
): Promise<void> {
  const rows = (await d1
    .prepare(`SELECT id, slug, qty FROM inventory_reservations WHERE order_id = ?1 AND status = 'active'`)
    .bind(orderId)
    .all()) as { results?: Array<{ id: string; slug: string; qty: number }> };
  for (const r of rows.results || []) {
    await d1
      .prepare(`UPDATE inventory SET reserved = MAX(0, reserved - ?2), updated_at = ?3 WHERE slug = ?1`)
      .bind(r.slug, r.qty, Date.now())
      .run();
    await d1
      .prepare(`UPDATE inventory_reservations SET status = ?2, updated_at = ?3 WHERE id = ?1`)
      .bind(r.id, reason, Date.now())
      .run();
    await recordMovement(d1, { slug: r.slug, onHandDelta: 0, reservedDelta: -r.qty, reason, orderId });
  }
}

/** Lazily release reservations whose checkout never completed. */
export async function releaseExpiredReservations(d1: D1Database): Promise<void> {
  try {
    const rows = (await d1
      .prepare(
        `SELECT DISTINCT order_id FROM inventory_reservations
         WHERE status = 'active' AND expires_at <= ?1 LIMIT ?2`
      )
      .bind(Date.now(), LAZY_RELEASE_BATCH)
      .all()) as { results?: Array<{ order_id: string }> };
    for (const r of rows.results || []) {
      await releaseOrderReservations(d1, r.order_id, 'expire');
    }
  } catch {
    // Non-fatal: expiry is best-effort, webhooks also release.
  }
}

/**
 * Consume an order's reservations on payment. When the payment arrives after
 * the reservation was already released (late completion), the payment is the
 * source of truth: take the stock anyway, backordering when short.
 */
export async function consumeOrderReservations(d1: D1Database, orderId: string): Promise<void> {
  const rows = (await d1
    .prepare(`SELECT id, slug, qty, status FROM inventory_reservations WHERE order_id = ?1`)
    .bind(orderId)
    .all()) as { results?: Array<{ id: string; slug: string; qty: number; status: string }> };
  for (const r of rows.results || []) {
    if (r.status === 'active') {
      await d1
        .prepare(
          `UPDATE inventory
           SET on_hand = MAX(0, on_hand - ?2), reserved = MAX(0, reserved - ?3), updated_at = ?4
           WHERE slug = ?1`
        )
        .bind(r.slug, r.qty, r.qty, Date.now())
        .run();
      await d1
        .prepare(`UPDATE inventory_reservations SET status = 'consumed', updated_at = ?2 WHERE id = ?1`)
        .bind(r.id, Date.now())
        .run();
      await recordMovement(d1, {
        slug: r.slug,
        onHandDelta: -r.qty,
        reservedDelta: -r.qty,
        reason: 'consume',
        orderId,
      });
    } else if (r.status !== 'consumed') {
      const inv = (await d1.prepare(`SELECT on_hand FROM inventory WHERE slug = ?1`).bind(r.slug).first()) as {
        on_hand: number;
      } | null;
      const take = Math.min(r.qty, inv?.on_hand ?? 0);
      if (take > 0) {
        await d1
          .prepare(`UPDATE inventory SET on_hand = on_hand - ?2, updated_at = ?3 WHERE slug = ?1`)
          .bind(r.slug, take, Date.now())
          .run();
      }
      await d1
        .prepare(`UPDATE inventory_reservations SET status = 'consumed', updated_at = ?2 WHERE id = ?1`)
        .bind(r.id, Date.now())
        .run();
      await recordMovement(d1, { slug: r.slug, onHandDelta: -take, reservedDelta: 0, reason: 'backorder', orderId });
    }
  }
}

/** Shared post-paid bookkeeping: consume reservations + count the discount. */
async function fulfillOrderById(d1: D1Database, orderId: string): Promise<void> {
  await consumeOrderReservations(d1, orderId);
  await d1
    .prepare(
      `UPDATE discounts SET usage_count = usage_count + 1, updated_at = ?2
       WHERE id = (SELECT discount_id FROM discount_redemptions WHERE order_id = ?1 LIMIT 1)`
    )
    .bind(orderId, Date.now())
    .run();
}

/**
 * Mark an order paid exactly once (guarded status flip by provider ref),
 * then consume its reservations and count the discount redemption.
 * Duplicate webhooks, /verify polls and capture calls are all idempotent on
 * this single UPDATE.
 */
export async function markOrderPaidAndFulfill(d1: D1Database, providerRef: string): Promise<void> {
  const now = Date.now();
  const res = await d1
    .prepare(
      `UPDATE "order" SET status = 'paid', paid_at = ?2, updated_at = ?2
       WHERE provider_ref = ?1 AND status != 'paid'`
    )
    .bind(providerRef, now)
    .run();
  if (res.meta.changes !== 1) return; // already fulfilled
  const row = (await d1.prepare(`SELECT id FROM "order" WHERE provider_ref = ?1`).bind(providerRef).first()) as {
    id: string;
  } | null;
  if (!row) return;
  await fulfillOrderById(d1, row.id);
}

/**
 * Admin-side manual fulfilment by order id (same guarded flip). Returns
 * false when the order was already paid.
 */
export async function markOrderPaidByIdAndFulfill(d1: D1Database, orderId: string): Promise<boolean> {
  const now = Date.now();
  const res = await d1
    .prepare(
      `UPDATE "order" SET status = 'paid', paid_at = COALESCE(paid_at, ?2), updated_at = ?2
       WHERE id = ?1 AND status != 'paid'`
    )
    .bind(orderId, now)
    .run();
  if (res.meta.changes !== 1) return false;
  await fulfillOrderById(d1, orderId);
  return true;
}

/** Mark a pending order failed/cancelled and release its reservations. */
export async function failOrderAndRelease(
  d1: D1Database,
  ref: { orderId?: string; providerRef?: string },
  status: 'failed' | 'cancelled'
): Promise<void> {
  let orderId = ref.orderId || '';
  if (!orderId && ref.providerRef) {
    const row = (await d1.prepare(`SELECT id FROM "order" WHERE provider_ref = ?1`).bind(ref.providerRef).first()) as {
      id: string;
    } | null;
    orderId = row?.id || '';
  }
  const now = Date.now();
  if (orderId) {
    await releaseOrderReservations(d1, orderId, 'release');
    await d1
      .prepare(`UPDATE "order" SET status = ?2, updated_at = ?3 WHERE id = ?1 AND status = 'pending'`)
      .bind(orderId, status, now)
      .run();
  } else if (ref.providerRef) {
    await d1
      .prepare(`UPDATE "order" SET status = ?2, updated_at = ?3 WHERE provider_ref = ?1 AND status = 'pending'`)
      .bind(ref.providerRef, status, now)
      .run();
  }
}
