import * as yaml from 'js-yaml';
import { desc, asc, eq, count, and, or, sql, gt, inArray } from 'drizzle-orm';
import { createDb, type DB } from '../shared/client';
import { createAuth, type AuthEnv } from '../shared/auth';
import { assertAdmin, type AdminUser } from '../shared/assert-admin';
import {
  user,
  session as sessionTable,
  inquiry,
  newPost,
  order,
  orderItem,
  inventory,
  inventoryMovement,
  shipment,
  discount,
  adminAuditLog,
  INQUIRY_STATUSES,
  ORDER_STATUSES,
  SHIPMENT_STATUSES,
  type InquiryStatus,
  type OrderStatus,
  type ShipmentStatus,
} from '../shared/schema';
import type { News } from '../shared/schema';
import {
  releaseOrderReservations,
  markOrderPaidByIdAndFulfill,
  recordMovement,
} from '../shared/inventory';
import { applyRuleToText, scanFile, shouldScanPath, validateRule, type RefactorRule } from './link-refactor';

interface Env extends AuthEnv {
  GITHUB_TOKEN?: string;
  GITHUB_OWNER?: string;
  GITHUB_REPO?: string;
  DB: D1Database;
  DATA_BUCKET: R2Bucket;
  BETTER_AUTH_URL?: string;
  EMAIL_FROM?: string;
}

const CORS = {
  'Access-Control-Allow-Origin': 'https://paddleboardoverstock.com',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', ...CORS } });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    const url = new URL(request.url);
    const path = url.pathname;
    const db = createDb(env.DB);

    try {
      // better-auth owns all /api/auth/* endpoints (Google OAuth, email/password,
      // sessions, admin plugin). Admin-plugin endpoints are gated so a role
      // tampered in the DB (or stale cookie cache) cannot escalate.
      if (path.startsWith('/api/auth/')) {
        const auth = createAuth(env, db);
        const adminBypass = new Set(['/api/auth/admin/stop-impersonating']);
        if (path.startsWith('/api/auth/admin/') && !adminBypass.has(path)) {
          const admin = await assertAdmin(env, db, request);
          if (!admin) return json({ error: 'Unauthorized' }, 401);
        }
        return auth.handler(request);
      }
      if (path.startsWith('/api/admin/')) {
        const admin = await assertAdmin(env, db, request);
        if (!admin) return json({ error: 'Unauthorized' }, 401);
        return await handleAdmin(request, env, path, admin, db);
      }
      return json({ error: 'Not found' }, 404);
    } catch (e) {
      return json({ error: e instanceof Error ? e.message : 'Internal error' }, 500);
    }
  },
};

function readCookie(request: Request, name: string): string | null {
  const header = request.headers.get('cookie');
  if (!header) return null;
  for (const part of header.split(';')) {
    const eq = part.indexOf('=');
    if (eq === -1) continue;
    const key = part.slice(0, eq).trim();
    if (key === name) {
      try {
        return decodeURIComponent(part.slice(eq + 1).trim());
      } catch {
        return part.slice(eq + 1).trim();
      }
    }
  }
  return null;
}

function isInternalRef(ref: string): boolean {
  if (!ref) return false;
  if (ref.startsWith('/') && !ref.startsWith('//')) return true;
  return /^https?:\/\/(www\.)?paddleboardoverstock\.com\//i.test(ref);
}

async function handleAdmin(request: Request, env: Env, path: string, admin: AdminUser, db: DB): Promise<Response> {
  // ---- DB-backed admin surface (better-auth users + D1 inquiries) ----
  if (path === '/api/admin/me' && request.method === 'GET') {
    return json({ user: admin });
  }

  if (path === '/api/admin/stats' && request.method === 'GET') {
    const now = new Date();
    const [userCount, activeRows, inquiryCount, newInquiryCount] = await Promise.all([
      db.select({ c: count() }).from(user),
      db.select({ userId: sessionTable.userId }).from(sessionTable).where(gt(sessionTable.expiresAt, now)),
      db.select({ c: count() }).from(inquiry),
      db.select({ c: count() }).from(inquiry).where(eq(inquiry.status, 'new')),
    ]);
    return json({
      totalUsers: userCount[0].c,
      activeUsers: new Set(activeRows.map((r) => r.userId)).size,
      totalInquiries: inquiryCount[0].c,
      newInquiries: newInquiryCount[0].c,
    });
  }

  if (path === '/api/admin/users' && request.method === 'GET') {
    const q = urlParam(request, 'q') ?? undefined;
    const page = Math.max(0, Number(urlParam(request, 'page') || 0) || 0);
    const pageSize = Math.min(100, Math.max(1, Number(urlParam(request, 'pageSize') || 20) || 20));
    const sortBy = urlParam(request, 'sortBy') || 'createdAt';
    const sortDir = urlParam(request, 'sortDir') === 'asc' ? 'asc' : 'desc';
    return json(await listUsers(db, { q, page, pageSize, sortBy, sortDir }));
  }

  if (path === '/api/admin/inquiries' && request.method === 'GET') {
    const page = Math.max(0, Number(urlParam(request, 'page') || 0) || 0);
    const pageSize = Math.min(200, Math.max(1, Number(urlParam(request, 'pageSize') || 30) || 30));
    const status = urlParam(request, 'status') || undefined;
    return json(await listInquiries(db, { page, pageSize, status }));
  }

  if (path === '/api/admin/inquiries/status' && request.method === 'POST') {
    const { id, status } = (await request.json()) as { id?: string; status?: string };
    if (!id || !INQUIRY_STATUSES.includes(status as InquiryStatus)) {
      return json({ error: 'Invalid status' }, 400);
    }
    await db.update(inquiry).set({ status }).where(eq(inquiry.id, id));
    return json({ success: true });
  }

  if (path === '/api/admin/inquiries.csv' && request.method === 'GET') {
    return await exportInquiriesCsv(db);
  }

  // ---- Shop orders (Stripe + PayPal) ----
  if (path === '/api/admin/orders' && request.method === 'GET') {
    const status = urlParam(request, 'status') || undefined;
    return json(await listOrders(db, status));
  }

  if (path === '/api/admin/orders.csv' && request.method === 'GET') {
    return await exportOrdersCsv(db);
  }

  // ---- Shop admin: order status, shipments, inventory, discounts, audit ----

  if (path === '/api/admin/orders/status' && request.method === 'POST') {
    const { id, status } = (await request.json()) as { id?: string; status?: string };
    if (!id || !ORDER_STATUSES.includes(status as OrderStatus)) {
      return json({ error: 'Invalid status' }, 400);
    }
    const rows = await db.select({ id: order.id, status: order.status }).from(order).where(eq(order.id, id)).limit(1);
    const existing = rows[0];
    if (!existing) return json({ error: 'Order not found' }, 404);
    const s = status as OrderStatus;
    if (s === 'paid') {
      const flipped = await markOrderPaidByIdAndFulfill(env.DB, id);
      if (!flipped && existing.status === 'paid') {
        return json({ error: 'Order is already paid' }, 409);
      }
    } else {
      // Cancelling a pending order returns its reserved stock to the pool.
      if (s === 'cancelled' && existing.status === 'pending') {
        await releaseOrderReservations(env.DB, id, 'release');
      }
      await db.update(order).set({ status: s, updatedAt: new Date() }).where(eq(order.id, id));
    }
    await writeAudit(db, admin, 'order.status_update', 'order', id, { from: existing.status, to: s });
    return json({ success: true });
  }

  if (path === '/api/admin/orders/shipment' && request.method === 'POST') {
    const body = (await request.json()) as {
      orderId?: string;
      carrier?: string;
      trackingNumber?: string;
      trackingUrl?: string;
      status?: string;
    };
    const orderId = String(body.orderId || '').trim();
    if (!orderId) return json({ error: 'orderId is required' }, 400);
    const rows = await db.select({ id: order.id }).from(order).where(eq(order.id, orderId)).limit(1);
    if (!rows[0]) return json({ error: 'Order not found' }, 404);
    const carrier = String(body.carrier || '').trim().slice(0, 100);
    const trackingNumber = String(body.trackingNumber || '').trim().slice(0, 100);
    const trackingUrl = String(body.trackingUrl || '').trim().slice(0, 500);
    if (trackingUrl && !/^https?:\/\//i.test(trackingUrl)) {
      return json({ error: 'trackingUrl must be an absolute http(s) URL' }, 400);
    }
    const status = String(body.status || 'pending');
    if (!SHIPMENT_STATUSES.includes(status as ShipmentStatus)) {
      return json({ error: 'Invalid shipment status' }, 400);
    }
    const existing = await db.select().from(shipment).where(eq(shipment.orderId, orderId)).limit(1);
    const now = new Date();
    const shippedAt = status === 'pending' ? (existing[0]?.shippedAt ?? null) : (existing[0]?.shippedAt ?? now);
    if (existing[0]) {
      await db
        .update(shipment)
        .set({ carrier, trackingNumber, trackingUrl, status, shippedAt, updatedAt: now })
        .where(eq(shipment.orderId, orderId));
    } else {
      await db.insert(shipment).values({
        id: crypto.randomUUID(),
        orderId,
        carrier,
        trackingNumber,
        trackingUrl,
        status,
        shippedAt,
        createdAt: now,
        updatedAt: now,
      });
    }
    await writeAudit(db, admin, 'order.shipment_update', 'order', orderId, {
      carrier,
      trackingNumber,
      status,
    });
    return json({ success: true });
  }

  if (path === '/api/admin/inventory' && request.method === 'GET') {
    const rows = await db.select().from(inventory).orderBy(asc(inventory.slug));
    const movements = await db
      .select()
      .from(inventoryMovement)
      .orderBy(desc(inventoryMovement.createdAt))
      .limit(100);
    return json({ rows, movements });
  }

  if (path === '/api/admin/inventory/adjust' && request.method === 'POST') {
    const body = (await request.json()) as { slug?: string; delta?: number; onHand?: number; reason?: string };
    const slug = String(body.slug || '').trim();
    if (!slug) return json({ error: 'slug is required' }, 400);
    const rows = await db.select().from(inventory).where(eq(inventory.slug, slug)).limit(1);
    const inv = rows[0];
    if (!inv) return json({ error: 'Unknown inventory slug' }, 404);
    const reason = String(body.reason || 'adjust').trim().slice(0, 200) || 'adjust';
    let target: number;
    if (Number.isInteger(body.onHand)) target = Math.max(0, Number(body.onHand));
    else if (Number.isInteger(body.delta)) target = Math.max(0, inv.onHand + Number(body.delta));
    else return json({ error: 'Provide either delta or onHand as an integer' }, 400);
    if (target === inv.onHand) return json({ success: true, onHand: target, changed: 0 });
    // Optimistic concurrency: only apply when on_hand did not move meanwhile.
    const res = await env.DB
      .prepare(`UPDATE inventory SET on_hand = ?2, updated_at = ?3 WHERE slug = ?1 AND on_hand = ?4`)
      .bind(slug, target, Date.now(), inv.onHand)
      .run();
    if (res.meta.changes !== 1) {
      return json({ error: 'Inventory changed concurrently — please retry' }, 409);
    }
    await recordMovement(env.DB, {
      slug,
      onHandDelta: target - inv.onHand,
      reservedDelta: 0,
      reason,
      orderId: null,
    });
    await writeAudit(db, admin, 'inventory.adjust', 'inventory', slug, {
      from: inv.onHand,
      to: target,
      reason,
    });
    return json({ success: true, onHand: target, changed: target - inv.onHand });
  }

  if (path === '/api/admin/discounts' && request.method === 'GET') {
    const rows = await db.select().from(discount).orderBy(desc(discount.createdAt));
    return json({ rows });
  }

  if (path === '/api/admin/discounts' && request.method === 'POST') {
    const body = (await request.json()) as Record<string, unknown>;
    const code = String(body.code || '').trim().toUpperCase().slice(0, 64);
    if (!/^[A-Z0-9_-]{2,64}$/.test(code)) {
      return json({ error: 'Code must be 2-64 characters (A-Z, 0-9, - or _)' }, 400);
    }
    const kind = body.kind === 'fixed' ? 'fixed' : 'percent';
    const value = Number(body.value);
    if (!Number.isInteger(value) || value <= 0) {
      return json({ error: 'value must be a positive integer (percent or cents)' }, 400);
    }
    if (kind === 'percent' && value > 100) {
      return json({ error: 'A percent discount cannot exceed 100' }, 400);
    }
    const active = body.active !== false;
    const usageLimit =
      Number.isInteger(body.usageLimit) && Number(body.usageLimit) > 0 ? Number(body.usageLimit) : null;
    const startsAtMs = parseEpochMs(body.startsAt);
    const expiresAtMs = parseEpochMs(body.expiresAt);
    if (startsAtMs !== null && expiresAtMs !== null && expiresAtMs <= startsAtMs) {
      return json({ error: 'expiresAt must be after startsAt' }, 400);
    }
    try {
      const id = crypto.randomUUID();
      await db.insert(discount).values({
        id,
        code,
        kind,
        value,
        active,
        usageLimit,
        startsAt: startsAtMs === null ? null : new Date(startsAtMs),
        expiresAt: expiresAtMs === null ? null : new Date(expiresAtMs),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await writeAudit(db, admin, 'discount.create', 'discount', id, { code, kind, value });
      return json({ success: true, id }, 201);
    } catch (e) {
      if (String(e).includes('UNIQUE')) {
        return json({ error: `Discount code "${code}" already exists` }, 409);
      }
      throw e;
    }
  }

  if (path === '/api/admin/discounts/update' && request.method === 'POST') {
    const body = (await request.json()) as Record<string, unknown>;
    const id = String(body.id || '').trim();
    if (!id) return json({ error: 'id is required' }, 400);
    const rows = await db.select().from(discount).where(eq(discount.id, id)).limit(1);
    const existing = rows[0];
    if (!existing) return json({ error: 'Discount not found' }, 404);
    const patch: Partial<typeof discount.$inferInsert> = { updatedAt: new Date() };
    if (body.code !== undefined) {
      const code = String(body.code).trim().toUpperCase().slice(0, 64);
      if (!/^[A-Z0-9_-]{2,64}$/.test(code)) return json({ error: 'Invalid code' }, 400);
      patch.code = code;
    }
    if (body.kind !== undefined) patch.kind = body.kind === 'fixed' ? 'fixed' : 'percent';
    if (body.value !== undefined) {
      const value = Number(body.value);
      if (!Number.isInteger(value) || value <= 0) {
        return json({ error: 'value must be a positive integer' }, 400);
      }
      const kind = (patch.kind as string | undefined) || existing.kind;
      if (kind === 'percent' && value > 100) {
        return json({ error: 'A percent discount cannot exceed 100' }, 400);
      }
      patch.value = value;
    }
    if (body.active !== undefined) patch.active = body.active !== false;
    if (body.usageLimit !== undefined) {
      patch.usageLimit =
        Number.isInteger(body.usageLimit) && Number(body.usageLimit) > 0 ? Number(body.usageLimit) : null;
    }
    if (body.startsAt !== undefined) {
      const t = parseEpochMs(body.startsAt);
      patch.startsAt = t === null ? null : new Date(t);
    }
    if (body.expiresAt !== undefined) {
      const t = parseEpochMs(body.expiresAt);
      patch.expiresAt = t === null ? null : new Date(t);
    }
    try {
      await db.update(discount).set(patch).where(eq(discount.id, id));
    } catch (e) {
      if (String(e).includes('UNIQUE')) {
        return json({ error: 'Discount code already in use' }, 409);
      }
      throw e;
    }
    await writeAudit(db, admin, 'discount.update', 'discount', id, {
      fields: Object.keys(patch).filter((k) => k !== 'updatedAt'),
    });
    return json({ success: true });
  }

  if (path === '/api/admin/discounts/delete' && request.method === 'POST') {
    const { id } = (await request.json()) as { id?: string };
    if (!id) return json({ error: 'id is required' }, 400);
    await db.delete(discount).where(eq(discount.id, id));
    await writeAudit(db, admin, 'discount.delete', 'discount', id, {});
    return json({ success: true });
  }

  if (path === '/api/admin/audit-logs' && request.method === 'GET') {
    const page = Math.max(0, Number(urlParam(request, 'page') || 0) || 0);
    const pageSize = Math.min(200, Math.max(1, Number(urlParam(request, 'pageSize') || 50) || 50));
    const [rows, [{ c: total }]] = await Promise.all([
      db
        .select()
        .from(adminAuditLog)
        .orderBy(desc(adminAuditLog.createdAt))
        .limit(pageSize)
        .offset(page * pageSize),
      db.select({ c: count() }).from(adminAuditLog),
    ]);
    return json({ rows, total: Number(total), page, pageSize });
  }

  // Stream a submitted inquiry attachment from R2. R2 objects are not public —
  // this is the read side for admins (the /api/admin/* prefix already gates it).
  if (path === '/api/admin/inquiries/file' && request.method === 'GET') {
    const id = urlParam(request, 'id') || '';
    if (!id) return json({ error: 'Missing id' }, 400);
    const rows = await db.select({ logoKey: inquiry.logoKey }).from(inquiry).where(eq(inquiry.id, id)).limit(1);
    const key = rows[0]?.logoKey || '';
    if (!key) return json({ error: 'Not found' }, 404);
    const object = await env.DATA_BUCKET.get(key);
    if (!object) return json({ error: 'Not found' }, 404);
    // Uploaded attachments are raw user content: sandbox the response so an
    // opened-as-document SVG (or other type) can never execute script, and
    // force download for everything that is not an image.
    const headers = new Headers();
    headers.set('Content-Type', object.httpMetadata?.contentType || 'application/octet-stream');
    headers.set('ETag', object.httpEtag);
    headers.set('Cache-Control', 'private, max-age=60');
    headers.set('Content-Security-Policy', "default-src 'none'; sandbox");
    headers.set('X-Content-Type-Options', 'nosniff');
    const ext = key.split('.').pop() || '';
    const filename = ext ? `inquiry-${id}.${ext}` : `inquiry-${id}`;
    const inline = (object.httpMetadata?.contentType || '').startsWith('image/') ? 'inline' : 'attachment';
    headers.set('Content-Disposition', `${inline}; filename="${filename}"`);
    return new Response(object.body, { status: 200, headers });
  }

  // ---- News (D1) ----
  if (path === '/api/admin/news' && request.method === 'GET') {
    return await listNews(request, db);
  }
  if (path === '/api/admin/news/read' && request.method === 'GET') {
    return await getNews(request, db);
  }
  if (path === '/api/admin/news' && request.method === 'POST') {
    return await createNews(request, db);
  }
  if (path === '/api/admin/news/update' && request.method === 'POST') {
    return await updateNews(request, db);
  }
  if (path === '/api/admin/news/delete' && request.method === 'POST') {
    return await deleteNews(request, db);
  }

  // ---- GitHub-backed CMS endpoints (unchanged) ----
  // Token priority: per-user cookie (set via /api/admin/save-token) > worker env.
  const cookieToken = readCookie(request, 'ks-gh-token');
  const token = cookieToken || env.GITHUB_TOKEN || '';
  if (!token) return json({ error: 'GitHub token not configured' }, 500);

  const owner = env.GITHUB_OWNER || 'paddleboardoverstock';
  const repo = env.GITHUB_REPO || 'official';
  const api = `https://api.github.com/repos/${owner}/${repo}`;

  if (path === '/api/admin/pages' && request.method === 'POST') {
    const { slug, label, path: pagePath, permalink, sections } = (await request.json()) as any;
    if (!slug || !/^[a-z][a-z0-9_-]*$/.test(String(slug))) return json({ error: 'Invalid slug' }, 400);
    if (!label) return json({ error: 'label is required' }, 400);
    const s = String(slug);
    const safeLabel = String(label).trim();
    const safePath = String(pagePath || permalink || '/' + s).trim() || '/' + s;
    const safeSections = Array.isArray(sections) ? sections : [];

    const branch = 'draft';
    const ensured = await ensureBranch(token, owner, repo, branch);
    if (!ensured.ok) return json({ error: ensured.error || 'Branch error' }, 500);

    const ghHeaders = { Authorization: `Bearer ${token}`, 'User-Agent': 'paddleboardoverstock-admin' };

    const pageFile = `src/data/pages/${s}.yaml`;
    const pageYaml = `# ${safeLabel}\n\nhero:\n  title: ${safeLabel}\n  subtitle: ''\n  image: ''\n`;
    const putPage = await fetch(`${api}/contents/${pageFile}`, {
      method: 'PUT',
      headers: { ...ghHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: `Create page: ${safeLabel}`, content: b64encode(pageYaml), branch }),
    });
    if (!putPage.ok) {
      const txt = await putPage.text();
      return json({ error: `Failed to create page file: ${txt.slice(0, 300)}` }, putPage.status);
    }

    const pagesListPath = 'src/data/site/pages.yaml';
    const listRes = await fetch(`${api}/contents/${pagesListPath}?ref=${branch}`, { headers: ghHeaders });
    if (listRes.ok) {
      const listData = (await listRes.json()) as any;
      if (listData.content && listData.encoding === 'base64') {
        const decoded = b64decode(listData.content);
        const entry = {
          slug: s,
          label: safeLabel,
          path: safePath,
          permalink: safePath,
          file: pageFile,
          sections: safeSections.map((sec: any) => ({
            key: sec.key,
            type: sec.type,
            label: sec.label || sec.key,
          })),
        };
        let parsed: any[] = [];
        try {
          const loaded = yaml.load(decoded);
          if (Array.isArray(loaded)) parsed = loaded;
        } catch {
          /* keep empty list */
        }
        if (!parsed.some((p) => p?.slug === s)) parsed.push(entry);
        const newYaml = yaml.dump(parsed, { lineWidth: -1, noRefs: true, sortKeys: false });
        await fetch(`${api}/contents/${pagesListPath}`, {
          method: 'PUT',
          headers: { ...ghHeaders, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: `Register page: ${safeLabel}`,
            content: b64encode(newYaml),
            sha: listData.sha,
            branch,
          }),
        });
      }
    }

    return json({ success: true, slug: s });
  }

  if (path === '/api/admin/refactor/scan' && request.method === 'POST') {
    const rule: RefactorRule = (await request.json()) as RefactorRule;
    const ruleError = validateRule(rule);
    if (ruleError) return json({ error: ruleError }, 400);

    const branch = 'draft';
    const ensured = await ensureBranch(token, owner, repo, branch);
    if (!ensured.ok) return json({ error: ensured.error || 'Branch error' }, 500);

    const ghHeaders = { Authorization: `Bearer ${token}`, 'User-Agent': 'paddleboardoverstock-admin' };
    const treeRes = await fetch(`${api}/git/trees/${branch}?recursive=1`, { headers: ghHeaders });
    if (!treeRes.ok) return json({ error: 'Failed to fetch repo tree' }, treeRes.status);
    const tree = (await treeRes.json()) as any;
    const paths: string[] = (tree.tree || [])
      .filter((t: any) => t.type === 'blob' && shouldScanPath(t.path || ''))
      .map((t: any) => t.path);

    const results = await Promise.all(
      paths.map(async (p) => {
        try {
          const r = await fetch(`${api}/contents/${p}?ref=${branch}`, { headers: ghHeaders });
          if (!r.ok) return null;
          const d = (await r.json()) as any;
          if (!d.content || d.encoding !== 'base64') return null;
          const match = scanFile(p, b64decode(d.content), rule, d.sha || '');
          if (!match) return null;
          return { path: match.path, sha: match.sha, occurrences: match.occurrences, diff: match.diff };
        } catch {
          return null;
        }
      })
    );

    const files = results.filter(Boolean) as { path: string; sha: string; occurrences: number; diff: any[] }[];
    const totalOccurrences = files.reduce((n, f) => n + f.occurrences, 0);
    return json({ success: true, rule, files, totalOccurrences, fileCount: files.length });
  }

  if (path === '/api/admin/refactor/apply' && request.method === 'POST') {
    const body = (await request.json()) as any;
    const changes: {
      path: string;
      sha: string;
      oldUrl?: string;
      newUrl?: string;
      oldName?: string;
      newName?: string;
    }[] = Array.isArray(body?.changes) ? body.changes : [];
    if (changes.length === 0) return json({ error: 'No changes to apply' }, 400);

    const branch = 'draft';
    const ensured = await ensureBranch(token, owner, repo, branch);
    if (!ensured.ok) return json({ error: ensured.error || 'Branch error' }, 500);

    const ghHeaders = { Authorization: `Bearer ${token}`, 'User-Agent': 'paddleboardoverstock-admin' };
    const results: { path: string; ok: boolean; error?: string }[] = [];

    for (const change of changes) {
      try {
        const rule: RefactorRule = {
          oldUrl: change.oldUrl,
          newUrl: change.newUrl,
          oldName: change.oldName,
          newName: change.newName,
        };
        const readRes = await fetch(`${api}/contents/${change.path}?ref=${branch}`, { headers: ghHeaders });
        if (!readRes.ok) {
          results.push({ path: change.path, ok: false, error: `read failed (${readRes.status})` });
          continue;
        }
        const d = (await readRes.json()) as any;
        if (!d.content || d.encoding !== 'base64') {
          results.push({ path: change.path, ok: false, error: 'unexpected content format' });
          continue;
        }
        const original = b64decode(d.content);
        const { text: newContent, urlCount, nameCount } = applyRuleToText(original, rule);
        if (urlCount + nameCount === 0) {
          results.push({ path: change.path, ok: false, error: 'no matches found in current content' });
          continue;
        }
        const putRes = await fetch(`${api}/contents/${change.path}`, {
          method: 'PUT',
          headers: { ...ghHeaders, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: body?.commitMessage || 'Refactor link/name',
            content: b64encode(newContent),
            sha: d.sha,
            branch,
          }),
        });
        if (!putRes.ok) {
          const txt = await putRes.text();
          results.push({ path: change.path, ok: false, error: txt.slice(0, 200) });
        } else {
          results.push({ path: change.path, ok: true });
        }
      } catch (e) {
        results.push({ path: change.path, ok: false, error: String(e) });
      }
    }

    return json({ success: true, results });
  }

  if (path === '/api/admin/validate-links' && request.method === 'POST') {
    const branch = 'draft';
    const ensured = await ensureBranch(token, owner, repo, branch);
    if (!ensured.ok) return json({ error: ensured.error || 'Branch error' }, 500);

    const ghHeaders = { Authorization: `Bearer ${token}`, 'User-Agent': 'paddleboardoverstock-admin' };
    const treeRes = await fetch(`${api}/git/trees/${branch}?recursive=1`, { headers: ghHeaders });
    if (!treeRes.ok) return json({ error: 'Failed to fetch repo tree' }, treeRes.status);
    const tree = (await treeRes.json()) as any;

    const dataPaths = (tree.tree || [])
      .filter((t: any) => t.type === 'blob' && shouldScanPath(t.path || ''))
      .map((t: any) => t.path);
    const slugSet = new Set<string>();
    for (const p of dataPaths) {
      const m = p.match(/^src\/(?:data\/pages|content\/[^/]+|data\/post|data\/product)\/(.+)\.(?:md|mdx|ya?ml|yml)$/);
      if (m) slugSet.add(m[1]);
    }

    const known = new Set<string>();
    const collectUrls = (text: string) => {
      const re = /(?:url|linkUrl|href|permalink|path|canonical)\s*[:=]\s*["']([^"']+)["']/g;
      let m: RegExpExecArray | null;
      while ((m = re.exec(text))) known.add(m[1]);
    };

    const configPath = 'src/config.yaml';
    const configRes = await fetch(`${api}/contents/${configPath}?ref=${branch}`, { headers: ghHeaders });
    if (configRes.ok) {
      const d = (await configRes.json()) as any;
      if (d.content && d.encoding === 'base64') collectUrls(b64decode(d.content));
    }

    const broken: { url: string; path: string }[] = [];
    let totalUrls = 0;

    const fileContents = await Promise.all(
      dataPaths.slice(0, 60).map(async (p: string) => {
        try {
          const r = await fetch(`${api}/contents/${p}?ref=${branch}`, { headers: ghHeaders });
          if (!r.ok) return null;
          const d = (await r.json()) as any;
          if (!d.content || d.encoding !== 'base64') return null;
          return { path: p, text: b64decode(d.content) };
        } catch {
          return null;
        }
      })
    );

    for (const item of fileContents) {
      if (!item) continue;
      const re = /(?:\burl\b|\blinkUrl\b|\bhref)\s*[:=]\s*["']([^"']+)["']/g;
      const linkRe = /\]\(([^)\s]+)\)/g;
      let m: RegExpExecArray | null;
      while ((m = re.exec(item.text))) {
        totalUrls++;
        const ref = m[1];
        if (!isInternalRef(ref)) continue;
        if (!known.has(ref) && !known.has(ref.replace(/\/$/, '')) && !slugSet.has(ref.replace(/^\//, ''))) {
          broken.push({ url: ref, path: item.path });
        }
      }
      while ((m = linkRe.exec(item.text))) {
        const ref = m[1];
        if (!ref || ref.startsWith('#')) continue;
        totalUrls++;
        if (!isInternalRef(ref)) continue;
        const clean = ref.split('#')[0];
        if (!known.has(clean) && !slugSet.has(clean.replace(/^\//, '')) && !slugSet.has(clean.replace(/\.mdx?$/, ''))) {
          broken.push({ url: ref, path: item.path });
        }
      }
    }

    return json({
      success: true,
      scannedFiles: fileContents.filter(Boolean).length,
      totalUrls,
      known: [...known],
      broken,
    });
  }

  if (path === '/api/admin/list' && request.method === 'GET') {
    const dir = urlParam(request, 'dir') || 'src/content/news';
    const res = await fetch(`${api}/contents/${dir}`, {
      headers: { Authorization: `Bearer ${token}`, 'User-Agent': 'paddleboardoverstock-admin' },
    });
    const data = await res.json();
    return json(data);
  }

  if (path === '/api/admin/read' && request.method === 'GET') {
    const filePath = urlParam(request, 'path') || '';
    const branch = urlParam(request, 'branch') || 'main';
    const format = urlParam(request, 'format');
    const readUrl = `${api}/contents/${filePath}${branch !== 'main' ? `?ref=${branch}` : ''}`;
    const res = await fetch(readUrl, {
      headers: { Authorization: `Bearer ${token}`, 'User-Agent': 'paddleboardoverstock-admin' },
    });
    const data = (await res.json()) as any;

    if (data.content && data.encoding === 'base64') {
      const decoded = b64decode(data.content);

      if (format === 'yaml') {
        try {
          const parsed = yaml.load(decoded);
          return json({ ...data, decoded, parsed });
        } catch {
          return json({ ...data, decoded, parsed: null, parseError: 'YAML parse failed' });
        }
      }

      if (format === 'frontmatter') {
        let frontmatter: Record<string, any> = {};
        let body = decoded;
        const match = decoded.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
        if (match) {
          try {
            frontmatter = (yaml.load(match[1]) as Record<string, any>) || {};
          } catch {
            /* skip */
          }
          body = decoded.slice(match[0].length);
        }
        return json({ ...data, decoded, parsed: frontmatter, body });
      }

      return json({ ...data, decoded });
    }

    return json(data);
  }

  if (path === '/api/admin/create' && request.method === 'POST') {
    const body = (await request.json()) as any;
    const branch = String(body.branch || 'draft');

    let filePath: string;
    let content: string;
    let message: string;

    if (body.collection) {
      const dir = COLLECTION_DIRS[body.collection];
      if (!dir) return json({ error: `Unknown collection: ${body.collection}` }, 400);
      const title = String((body.frontmatter as any)?.title || body.title || 'untitled').trim();
      const rawName = String(body.filename || '').trim() || toSlug(title);
      const filename = rawName.replace(/\.(md|mdx)$/i, '');
      filePath = `${dir}/${filename}.mdx`;
      content = serializeMdx(body.frontmatter, body.body);
      message = String(body.commitMessage || body.message || `Create ${filename}`).trim();
    } else {
      filePath = String(body.path || '');
      content = String(body.content ?? '');
      message = String(body.message || 'Create via admin').trim();
    }
    if (!filePath) return json({ error: 'path is required' }, 400);

    const ensured = await ensureBranch(token, owner, repo, branch);
    if (!ensured.ok) return json({ error: ensured.error || 'Branch error' }, 500);

    const res = await fetch(`${api}/contents/${filePath}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': 'paddleboardoverstock-admin',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        content: b64encode(content),
        branch,
      }),
    });
    const data = await res.json();
    return json(data, res.status);
  }

  if (path === '/api/admin/update' && request.method === 'POST') {
    const body = (await request.json()) as any;

    if (body.format === 'yaml' && body.data) {
      body.content = yaml.dump(body.data, { lineWidth: -1, noRefs: true, sortKeys: false });
      body.message = body.commitMessage || body.message || 'Update via admin';
    }

    const { path: filePath, content, sha, message, branch } = body;
    const targetBranch = branch || 'draft';
    const ensured = await ensureBranch(token, owner, repo, targetBranch);
    if (!ensured.ok) return json({ error: ensured.error || 'Branch error' }, 500);
    const res = await fetch(`${api}/contents/${filePath}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': 'paddleboardoverstock-admin',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message || 'Update via admin',
        content: b64encode(content || ''),
        sha,
        branch: targetBranch,
      }),
    });
    const data = await res.json();
    return json(data, res.status);
  }

  if (path === '/api/admin/delete' && request.method === 'POST') {
    const { path: filePath, sha, message, branch } = (await request.json()) as any;
    const targetBranch = branch || 'draft';
    const ensured = await ensureBranch(token, owner, repo, targetBranch);
    if (!ensured.ok) return json({ error: ensured.error || 'Branch error' }, 500);
    const res = await fetch(`${api}/contents/${filePath}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': 'paddleboardoverstock-admin',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message || 'Delete via admin', sha, branch: targetBranch }),
    });
    return json({ success: res.ok }, res.status);
  }

  if (path === '/api/admin/publish' && request.method === 'POST') {
    const res = await fetch(`${api}/merges`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': 'paddleboardoverstock-admin',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ base: 'main', head: 'draft', commit_message: 'Publish drafts to production' }),
    });
    if (res.status === 204) {
      return json({ success: true, message: 'Nothing to publish — draft is up to date with main' });
    }
    const data = (await res.json()) as any;
    if (res.status === 409) {
      return json(
        { success: false, error: 'Merge conflict between draft and main. Resolve manually on GitHub.', conflict: data },
        409
      );
    }
    return json({ success: res.ok, ...data }, res.status);
  }

  if (path === '/api/admin/save-token' && request.method === 'POST') {
    const body = (await request.json()) as any;
    if (body?.action === 'clear') {
      const headers = new Headers({ 'Content-Type': 'application/json', ...CORS });
      headers.append('Set-Cookie', 'ks-gh-token=; Path=/; Secure; SameSite=Lax; Max-Age=0');
      return new Response(JSON.stringify({ success: true }), { status: 200, headers });
    }
    const newToken = body?.token;
    const verified =
      typeof newToken === 'string' && (newToken.startsWith('ghp_') || newToken.startsWith('github_pat_'));
    if (!verified)
      return json({ success: false, error: 'Invalid token format. Must start with ghp_ or github_pat_' }, 400);
    const headers = new Headers({ 'Content-Type': 'application/json', ...CORS });
    headers.append(
      'Set-Cookie',
      `ks-gh-token=${encodeURIComponent(newToken)}; Path=/; Secure; SameSite=Lax; Max-Age=${30 * 24 * 60 * 60}`
    );
    return new Response(JSON.stringify({ success: true, verified: true }), { status: 200, headers });
  }

  return json({ error: 'Admin endpoint not found', path }, 404);
}

// ---- DB helpers (new admin surface) ----

const SORT_COLUMNS = {
  name: user.name,
  email: user.email,
  createdAt: user.createdAt,
} as const;

async function listUsers(
  db: DB,
  params: { q?: string; page: number; pageSize: number; sortBy: string; sortDir: 'asc' | 'desc' }
) {
  const pattern = params.q ? `%${params.q.replace(/[%_!]/g, '!$&')}%` : null;
  const where = pattern
    ? or(sql`${user.email} LIKE ${pattern} ESCAPE '!'`, sql`${user.name} LIKE ${pattern} ESCAPE '!'`)
    : undefined;
  const sortCol = SORT_COLUMNS[params.sortBy as keyof typeof SORT_COLUMNS] ?? user.createdAt;
  const orderBy = params.sortDir === 'asc' ? asc(sortCol) : desc(sortCol);

  const [listed, [{ c: total }]] = await Promise.all([
    db
      .select({
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        role: user.role,
        banned: user.banned,
        banReason: user.banReason,
        banExpires: user.banExpires,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      })
      .from(user)
      .where(where)
      .orderBy(orderBy)
      .limit(params.pageSize)
      .offset(params.page * params.pageSize),
    db.select({ c: count() }).from(user).where(where),
  ]);

  return { rows: listed, total: Number(total) };
}

async function listInquiries(db: DB, params: { page: number; pageSize: number; status?: string }) {
  const where =
    params.status && INQUIRY_STATUSES.includes(params.status as InquiryStatus)
      ? eq(inquiry.status, params.status as InquiryStatus)
      : undefined;
  const [rows, [{ c: total }]] = await Promise.all([
    db
      .select()
      .from(inquiry)
      .where(where)
      .orderBy(desc(inquiry.createdAt))
      .limit(params.pageSize)
      .offset(params.page * params.pageSize),
    db.select({ c: count() }).from(inquiry).where(where),
  ]);
  return { rows, total: Number(total), status: params.status || 'all' };
}

async function exportInquiriesCsv(db: DB) {
  const rows = await db.select().from(inquiry).orderBy(desc(inquiry.createdAt)).limit(5000);
  const headers = [
    'id',
    'created_at',
    'name',
    'company',
    'country',
    'email',
    'whatsapp',
    'business_type',
    'quantity',
    'requirements',
    'subject',
    'message',
    'address',
    'zip',
    'tel',
    'status',
    'locale',
  ];
  const esc = (v: unknown) => {
    const s = String(v ?? '');
    // CSV-injection guard: a cell that Excel/Sheets would evaluate as a formula
    // gets a leading quote so it renders as literal text (reference pattern).
    const guarded = /^[=+\-@\t\r]/.test(s) ? `'${s}` : s;
    return /[",\n]/.test(guarded) ? `"${guarded.replace(/"/g, '""')}"` : guarded;
  };
  const lines = rows.map((r) =>
    [
      r.id,
      r.createdAt,
      r.name,
      r.company,
      r.country,
      r.email,
      r.whatsapp,
      r.businessType,
      r.quantity,
      r.requirements,
      r.subject,
      r.message,
      r.address,
      r.zip,
      r.tel,
      r.status,
      r.locale,
    ]
      .map(esc)
      .join(',')
  );
  const csv = '\ufeff' + headers.join(',') + '\n' + lines.join('\n');
  const headersRes = new Headers({
    'Content-Type': 'text/csv; charset=utf-8',
    'Content-Disposition': `attachment; filename="inquiries-${new Date().toISOString().slice(0, 10)}.csv"`,
    // Exports contain PII — never let a shared cache/CDN retain them.
    'Cache-Control': 'private, no-store',
  });
  return new Response(csv, { status: 200, headers: headersRes });
}

// ---- Shop order helpers (Stripe + PayPal orders) ----

const ORDER_ITEM_LIMIT = 200;

/** Every admin mutation lands in admin_audit_logs (who/what/when). */
async function writeAudit(
  db: DB,
  admin: AdminUser,
  action: string,
  targetType: string,
  targetId: string,
  metadata: Record<string, unknown> = {}
): Promise<void> {
  await db.insert(adminAuditLog).values({
    id: crypto.randomUUID(),
    adminId: admin.id,
    adminEmail: admin.email,
    action,
    targetType,
    targetId,
    metadata: JSON.stringify(metadata),
    createdAt: new Date(),
  });
}

/** Accept an epoch-ms number or an ISO string; null/'' clears the value. */
function parseEpochMs(v: unknown): number | null {
  if (v === null || v === undefined || v === '') return null;
  if (typeof v === 'number' && Number.isFinite(v)) return Math.round(v);
  if (typeof v === 'string') {
    const t = Date.parse(v);
    if (!Number.isNaN(t)) return t;
  }
  return null;
}

async function listOrders(db: DB, status?: string) {
  const where =
    status && ORDER_STATUSES.includes(status as OrderStatus) ? eq(order.status, status as OrderStatus) : undefined;
  const rows = await db
    .select()
    .from(order)
    .where(where)
    .orderBy(desc(order.createdAt))
    .limit(ORDER_ITEM_LIMIT);
  const orderIds = rows.map((r) => r.id);
  const items = orderIds.length
    ? await db
        .select()
        .from(orderItem)
        .where(inArray(orderItem.orderId, orderIds))
    : [];
  const shipments = orderIds.length
    ? await db.select().from(shipment).where(inArray(shipment.orderId, orderIds))
    : [];
  const itemsByOrder = new Map<string, typeof items>();
  for (const item of items) {
    const list = itemsByOrder.get(item.orderId) || [];
    list.push(item);
    itemsByOrder.set(item.orderId, list);
  }
  const shipmentByOrder = new Map(shipments.map((s) => [s.orderId, s]));
  const total = rows.filter((r) => r.status === 'paid').reduce((sum, r) => sum + r.total, 0);
  return {
    rows: rows.map((r) => ({
      ...r,
      items: itemsByOrder.get(r.id) || [],
      shipment: shipmentByOrder.get(r.id) || null,
    })),
    paidRevenueCents: total,
    status: status || 'all',
  };
}

async function exportOrdersCsv(db: DB) {
  const rows = await db.select().from(order).orderBy(desc(order.createdAt)).limit(5000);
  const orderIds = rows.map((r) => r.id);
  const items = orderIds.length
    ? await db
        .select()
        .from(orderItem)
        .where(inArray(orderItem.orderId, orderIds))
    : [];
  const itemsByOrder = new Map<string, typeof items>();
  for (const item of items) {
    const list = itemsByOrder.get(item.orderId) || [];
    list.push(item);
    itemsByOrder.set(item.orderId, list);
  }
  const headers = [
    'id',
    'created_at',
    'paid_at',
    'provider',
    'provider_ref',
    'status',
    'email',
    'currency',
    'subtotal_cents',
    'shipping_cents',
    'total_cents',
    'shipping_name',
    'shipping_address',
    'shipping_city',
    'shipping_postal',
    'shipping_country',
    'items',
  ];
  const esc = (v: unknown) => {
    const s = String(v ?? '');
    const guarded = /^[=+\-@\t\r]/.test(s) ? `'${s}` : s;
    return /[",\n]/.test(guarded) ? `"${guarded.replace(/"/g, '""')}"` : guarded;
  };
  const lines = rows.map((r) =>
    [
      r.id,
      r.createdAt,
      r.paidAt,
      r.provider,
      r.providerRef,
      r.status,
      r.email,
      r.currency,
      r.subtotal,
      r.shippingCost,
      r.total,
      r.shippingName,
      r.shippingAddress,
      r.shippingCity,
      r.shippingPostal,
      r.shippingCountry,
      (itemsByOrder.get(r.id) || [])
        .map((i) => `${i.title} (${i.slug}) x${i.qty} @ ${i.unitPrice}c`)
        .join('; '),
    ]
      .map(esc)
      .join(',')
  );
  const csv = '\ufeff' + headers.join(',') + '\n' + lines.join('\n');
  return new Response(csv, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="orders-${new Date().toISOString().slice(0, 10)}.csv"`,
      'Cache-Control': 'private, no-store',
    },
  });
}

// ---- News DB helpers ----

function toSlug(s: string): string {
  return String(s ?? '')
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function parseTags(raw: string | string[] | null | undefined): string[] {
  if (Array.isArray(raw)) return raw.map(String).filter(Boolean);
  if (typeof raw === 'string') {
    try {
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr.map(String).filter(Boolean) : [];
    } catch {
      return raw
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);
    }
  }
  return [];
}

function newsToApi(n: News) {
  const tags = parseTags(n.tags);
  return {
    id: n.id,
    slug: n.slug,
    title: n.title,
    excerpt: n.excerpt || '',
    body: n.body || '',
    image: n.image || '',
    category: n.category || '',
    tags,
    author: n.author || '',
    publishDate: new Date(n.publishDate).toISOString(),
    updateDate: n.updateDate ? new Date(n.updateDate).toISOString() : null,
    draft: !!n.draft,
    metadataTitle: n.metadataTitle || '',
    metadataDescription: n.metadataDescription || '',
    publishedURL: `/news/${n.slug}/`,
  };
}

const NEWS_SEARCHABLE = (q: string) =>
  or(
    sql`${newPost.title} LIKE ${q} ESCAPE '!'`,
    sql`${newPost.slug} LIKE ${q} ESCAPE '!'`,
    sql`${newPost.excerpt} LIKE ${q} ESCAPE '!'`
  );

async function listNews(request: Request, db: DB) {
  const url = new URL(request.url);
  const page = Math.max(0, Number(url.searchParams.get('page') || 0) || 0);
  const pageSize = Math.min(100, Math.max(1, Number(url.searchParams.get('pageSize') || 20) || 20));
  const q = url.searchParams.get('q') || '';
  const status = url.searchParams.get('status') || 'all';
  const pattern = q ? `%${q.replace(/[%_!]/g, '!$&')}%` : null;
  const filters = [];
  if (status === 'draft') filters.push(eq(newPost.draft, true));
  if (status === 'published') filters.push(eq(newPost.draft, false));
  if (pattern) filters.push(NEWS_SEARCHABLE(pattern));
  const where = filters.length ? and(...filters) : undefined;

  const [rows, [{ c: total }]] = await Promise.all([
    db
      .select()
      .from(newPost)
      .where(where)
      .orderBy(desc(newPost.publishDate))
      .limit(pageSize)
      .offset(page * pageSize),
    db.select({ c: count() }).from(newPost).where(where),
  ]);
  return json({ rows: rows.map(newsToApi), total: Number(total), page, pageSize, status });
}

async function getNews(request: Request, db: DB) {
  const slug = urlParam(request, 'slug') || '';
  if (!slug) return json({ error: 'slug required' }, 400);
  const rows = await db.select().from(newPost).where(eq(newPost.slug, slug)).limit(1);
  const post = rows[0];
  if (!post) return json({ error: 'Not found' }, 404);
  return json(newsToApi(post));
}

async function createNews(request: Request, db: DB) {
  const input = (await request.json()) as any;
  const title = String(input.title || '').trim();
  if (!title) return json({ error: 'title is required' }, 400);
  let slug = String(input.slug || '').trim() || toSlug(title);
  const existing = await db.select({ id: newPost.id }).from(newPost).where(eq(newPost.slug, slug)).limit(1);
  if (existing.length) slug = `${slug}-${Date.now().toString(36)}`;
  const publishDate = new Date(input.publishDate ? new Date(input.publishDate) : Date.now());
  const now = new Date();
  const id = crypto.randomUUID();
  await db.insert(newPost).values({
    id,
    slug,
    title,
    excerpt: String(input.excerpt || '') || null,
    body: String(input.body || '') || '',
    image: String(input.image || '') || null,
    category: String(input.category || '') || null,
    tags: JSON.stringify(parseTags(input.tags)),
    author: String(input.author || '') || null,
    publishDate,
    updateDate: null,
    draft: input.draft !== false,
    metadataTitle: String(input.metadataTitle || '') || null,
    metadataDescription: String(input.metadataDescription || '') || null,
    createdAt: now,
    updatedAt: now,
  });
  return json({ success: true, slug, id }, 201);
}

async function updateNews(request: Request, db: DB) {
  const body = (await request.json()) as any;
  const id = String(body.id || '');
  if (!id) return json({ error: 'id is required' }, 400);
  const rows = await db.select().from(newPost).where(eq(newPost.id, id)).limit(1);
  const existing = rows[0];
  if (!existing) return json({ error: 'Not found' }, 404);

  const title = String(body.title ?? existing.title).trim();
  const slug = String(body.slug ?? existing.slug).trim() || toSlug(title);
  if (slug !== existing.slug) {
    const clash = await db
      .select({ id: newPost.id })
      .from(newPost)
      .where(and(eq(newPost.slug, slug), sql`${newPost.id} != ${id}`))
      .limit(1);
    if (clash.length) return json({ error: `slug "${slug}" is already in use` }, 409);
  }
  const publishDate = body.publishDate ? new Date(body.publishDate) : existing.publishDate;

  await db
    .update(newPost)
    .set({
      slug,
      title,
      excerpt: typeof body.excerpt === 'string' ? body.excerpt || null : existing.excerpt,
      body: typeof body.body === 'string' ? body.body : existing.body,
      image: typeof body.image === 'string' ? body.image || null : existing.image,
      category: typeof body.category === 'string' ? body.category || null : existing.category,
      tags: JSON.stringify(parseTags(body.tags ?? existing.tags)),
      author: typeof body.author === 'string' ? body.author || null : existing.author,
      publishDate,
      updateDate: new Date(),
      draft: typeof body.draft === 'boolean' ? body.draft : existing.draft,
      metadataTitle: typeof body.metadataTitle === 'string' ? body.metadataTitle || null : existing.metadataTitle,
      metadataDescription:
        typeof body.metadataDescription === 'string' ? body.metadataDescription || null : existing.metadataDescription,
      updatedAt: new Date(),
    })
    .where(eq(newPost.id, id));

  return json({ success: true, slug });
}

async function deleteNews(request: Request, db: DB) {
  const body = (await request.json()) as any;
  const id = String(body.id || '');
  if (!id) return json({ error: 'id is required' }, 400);
  await db.delete(newPost).where(eq(newPost.id, id));
  return json({ success: true });
}

const COLLECTION_DIRS: Record<string, string> = {
  product: 'src/content/products',
  technology: 'src/content/technology',
  'case-use': 'src/content/case-use',
  news: 'src/content/news',
  post: 'src/content/news',
};

async function ensureBranch(
  token: string,
  owner: string,
  repo: string,
  branch: string
): Promise<{ ok: boolean; error?: string }> {
  if (branch === 'main') return { ok: true };
  const base = `https://api.github.com/repos/${owner}/${repo}`;
  const headers = { Authorization: `Bearer ${token}`, 'User-Agent': 'paddleboardoverstock-admin' };
  const headRes = await fetch(`${base}/branches/${branch}`, { headers });
  if (headRes.ok) return { ok: true };
  if (headRes.status !== 404) {
    return { ok: false, error: `Cannot check branch ${branch}: ${headRes.status}` };
  }
  const mainRes = await fetch(`${base}/git/ref/heads/main`, { headers });
  if (!mainRes.ok) return { ok: false, error: 'Cannot resolve main HEAD' };
  const main = (await mainRes.json()) as { object: { sha: string } };
  const createRes = await fetch(`${base}/git/refs`, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ ref: `refs/heads/${branch}`, sha: main.object.sha }),
  });
  if (!createRes.ok) {
    return { ok: false, error: `Cannot create branch ${branch}: ${createRes.status}` };
  }
  return { ok: true };
}

function serializeMdx(frontmatter: Record<string, any>, body: string): string {
  const fm = yaml.dump(frontmatter || {}, { lineWidth: -1, noRefs: true, sortKeys: false });
  return `---\n${fm}---\n\n${body || ''}`;
}

// ---- GitHub-backed fallback ----

function urlParam(request: Request, key: string): string | null {
  const url = new URL(request.url);
  return url.searchParams.get(key);
}

function b64encode(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function b64decode(b64: string): string {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}
