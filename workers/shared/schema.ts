import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer, index } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: integer('email_verified', { mode: 'boolean' }).default(false).notNull(),
  image: text('image'),
  createdAt: integer('created_at', { mode: 'timestamp_ms' })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull(),
  role: text('role'),
  banned: integer('banned', { mode: 'boolean' }).default(false),
  banReason: text('ban_reason'),
  banExpires: integer('ban_expires', { mode: 'timestamp_ms' }),
});

export const session = sqliteTable(
  'session',
  {
    id: text('id').primaryKey(),
    expiresAt: integer('expires_at', { mode: 'timestamp_ms' }).notNull(),
    token: text('token').notNull().unique(),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
    ipAddress: text('ip_address'),
    userAgent: text('user_agent'),
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    impersonatedBy: text('impersonated_by'),
  },
  (table) => [index('session_userId_idx').on(table.userId)]
);

export const account = sqliteTable(
  'account',
  {
    id: text('id').primaryKey(),
    accountId: text('account_id').notNull(),
    providerId: text('provider_id').notNull(),
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    accessToken: text('access_token'),
    refreshToken: text('refresh_token'),
    idToken: text('id_token'),
    accessTokenExpiresAt: integer('access_token_expires_at', {
      mode: 'timestamp_ms',
    }),
    refreshTokenExpiresAt: integer('refresh_token_expires_at', {
      mode: 'timestamp_ms',
    }),
    scope: text('scope'),
    password: text('password'),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index('account_userId_idx').on(table.userId)]
);

export const verification = sqliteTable(
  'verification',
  {
    id: text('id').primaryKey(),
    identifier: text('identifier').notNull(),
    value: text('value').notNull(),
    expiresAt: integer('expires_at', { mode: 'timestamp_ms' }).notNull(),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index('verification_identifier_idx').on(table.identifier)]
);

// Backs better-auth's `rateLimit: { storage: 'database' }`.
export const rateLimit = sqliteTable(
  'rateLimit',
  {
    id: text('id').primaryKey(),
    key: text('key'),
    count: integer('count'),
    lastRequest: integer('last_request'),
  },
  (table) => [index('rateLimit_key_idx').on(table.key)]
);

// Contact-form submissions (merged field set: reference inquiry fields +
// the local contact form's fields). B2B inquiries + site contact messages.
export const inquiry = sqliteTable('inquiry', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  company: text('company').notNull().default(''),
  country: text('country').notNull().default(''),
  email: text('email').notNull(),
  whatsapp: text('whatsapp').notNull().default(''),
  businessType: text('business_type').notNull().default('other'), // InquiryBusinessType
  quantity: text('quantity').notNull().default('unsure'), // InquiryQuantity
  requirements: text('requirements').notNull().default(''),
  subject: text('subject').notNull().default(''),
  message: text('message').notNull().default(''),
  address: text('address').notNull().default(''),
  zip: text('zip').notNull().default(''),
  tel: text('tel').notNull().default(''),
  logoKey: text('logo_key'),
  status: text('status').notNull().default('new'), // InquiryStatus
  locale: text('locale').notNull().default('en'),
  ip: text('ip'),
  userAgent: text('user_agent'),
  createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull(),
});

export type Inquiry = typeof inquiry.$inferSelect;
export type InquiryStatus = 'new' | 'contacted' | 'quoted' | 'closed';
export const INQUIRY_STATUSES: InquiryStatus[] = ['new', 'contacted', 'quoted', 'closed'];

// News posts (English-only canonical content; per-language chrome is applied
// by the news-worker when rendering /news and /{lang}/news routes).
export const newPost = sqliteTable(
  'news',
  {
    id: text('id').primaryKey(),
    slug: text('slug').notNull().unique(),
    title: text('title').notNull(),
    excerpt: text('excerpt'),
    body: text('body').notNull().default(''),
    image: text('image'),
    category: text('category'),
    tags: text('tags').notNull().default('[]'),
    author: text('author'),
    publishDate: integer('publish_date', { mode: 'timestamp_ms' }).notNull(),
    updateDate: integer('update_date', { mode: 'timestamp_ms' }),
    draft: integer('draft', { mode: 'boolean' }).notNull().default(false),
    metadataTitle: text('metadata_title'),
    metadataDescription: text('metadata_description'),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index('news_category_idx').on(table.category)]
);

export type News = typeof newPost.$inferSelect;

// Shop orders (Stripe Checkout + PayPal Orders). Money is INTEGER cents.
export const order = sqliteTable(
  'order',
  {
    id: text('id').primaryKey(),
    provider: text('provider').notNull(), // 'stripe' | 'paypal'
    providerRef: text('provider_ref'), // Stripe session id / PayPal order id
    email: text('email').notNull(),
    status: text('status').notNull().default('pending'), // pending | paid | failed | refunded | cancelled
    currency: text('currency').notNull().default('USD'),
    subtotal: integer('subtotal').notNull(),
    shippingCost: integer('shipping_cost').notNull().default(0),
    total: integer('total').notNull(),
    shippingName: text('shipping_name').notNull().default(''),
    shippingAddress: text('shipping_address').notNull().default(''),
    shippingCity: text('shipping_city').notNull().default(''),
    shippingPostal: text('shipping_postal').notNull().default(''),
    shippingCountry: text('shipping_country').notNull().default(''),
    ip: text('ip'),
    userAgent: text('user_agent'),
    discountCents: integer('discount_cents').notNull().default(0),
    discountCode: text('discount_code').notNull().default(''),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    paidAt: integer('paid_at', { mode: 'timestamp_ms' }),
  },
  (table) => [
    index('idx_order_provider_ref').on(table.providerRef),
    index('idx_order_status').on(table.status),
    index('idx_order_created_at').on(table.createdAt),
  ]
);

export const orderItem = sqliteTable(
  'order_item',
  {
    id: text('id').primaryKey(),
    orderId: text('order_id')
      .notNull()
      .references(() => order.id, { onDelete: 'cascade' }),
    slug: text('slug').notNull(),
    title: text('title').notNull(),
    unitPrice: integer('unit_price').notNull(), // cents
    qty: integer('qty').notNull().default(1),
    lineTotal: integer('line_total').notNull(), // cents
  },
  (table) => [index('idx_order_item_order').on(table.orderId)]
);

export type Order = typeof order.$inferSelect;
export type OrderItem = typeof orderItem.$inferSelect;
export type OrderStatus = 'pending' | 'paid' | 'failed' | 'refunded' | 'cancelled';
export const ORDER_STATUSES: OrderStatus[] = ['pending', 'paid', 'failed', 'refunded', 'cancelled'];

// ---------------------------------------------------------------------------
// Shop upgrade (migration 0005): inventory, reservations, idempotency,
// shipments, audit logs, discounts. Money is INTEGER cents; timestamps are
// INTEGER ms (timestamp_ms).
// ---------------------------------------------------------------------------

export const inventory = sqliteTable('inventory', {
  slug: text('slug').primaryKey(),
  onHand: integer('on_hand').notNull().default(0),
  reserved: integer('reserved').notNull().default(0),
  updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull(),
});

export type Inventory = typeof inventory.$inferSelect;

export const INVENTORY_MOVEMENT_REASONS = [
  'seed',
  'reserve',
  'release',
  'expire',
  'consume',
  'adjust',
  'backorder',
] as const;
export type InventoryMovementReason = (typeof INVENTORY_MOVEMENT_REASONS)[number];

export const inventoryMovement = sqliteTable(
  'inventory_movements',
  {
    id: text('id').primaryKey(),
    slug: text('slug').notNull(),
    onHandDelta: integer('on_hand_delta').notNull().default(0),
    reservedDelta: integer('reserved_delta').notNull().default(0),
    reason: text('reason').notNull(),
    orderId: text('order_id'),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
  },
  (table) => [
    index('idx_inventory_movements_slug').on(table.slug),
    index('idx_inventory_movements_order').on(table.orderId),
    index('idx_inventory_movements_created').on(table.createdAt),
  ]
);

export type InventoryMovement = typeof inventoryMovement.$inferSelect;

export const RESERVATION_STATUSES = ['active', 'consumed', 'released', 'expired'] as const;
export type ReservationStatus = (typeof RESERVATION_STATUSES)[number];

export const inventoryReservation = sqliteTable(
  'inventory_reservations',
  {
    id: text('id').primaryKey(),
    orderId: text('order_id').notNull(),
    slug: text('slug').notNull(),
    qty: integer('qty').notNull(),
    status: text('status').notNull().default('active'),
    expiresAt: integer('expires_at', { mode: 'timestamp_ms' }).notNull(),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
  },
  (table) => [
    index('idx_inventory_reservations_status').on(table.status),
    index('idx_inventory_reservations_expiry').on(table.status, table.expiresAt),
    index('idx_inventory_reservations_order').on(table.orderId),
  ]
);

export type InventoryReservation = typeof inventoryReservation.$inferSelect;

export const stripeEvent = sqliteTable(
  'stripe_events',
  {
    eventId: text('event_id').primaryKey(),
    eventType: text('event_type'),
    objectId: text('object_id'),
    processingStatus: text('processing_status').notNull().default('received'),
    errorCode: text('error_code'),
    receivedAt: integer('received_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    processedAt: integer('processed_at', { mode: 'timestamp_ms' }),
  },
  (table) => [index('idx_stripe_events_object').on(table.objectId)]
);

export type StripeEvent = typeof stripeEvent.$inferSelect;

export const checkoutRequest = sqliteTable(
  'checkout_requests',
  {
    id: text('id').primaryKey(),
    idempotencyKeyHash: text('idempotency_key_hash').notNull().unique(),
    requestFingerprint: text('request_fingerprint').notNull(),
    orderId: text('order_id'),
    status: text('status').notNull().default('created'),
    responseJson: text('response_json'),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
  },
  (table) => [index('idx_checkout_requests_order').on(table.orderId)]
);

export type CheckoutRequest = typeof checkoutRequest.$inferSelect;

export const SHIPMENT_STATUSES = ['pending', 'shipped', 'in_transit', 'delivered', 'failed'] as const;
export type ShipmentStatus = (typeof SHIPMENT_STATUSES)[number];

export const shipment = sqliteTable(
  'shipments',
  {
    id: text('id').primaryKey(),
    orderId: text('order_id').notNull().unique(),
    carrier: text('carrier').notNull().default(''),
    trackingNumber: text('tracking_number').notNull().default(''),
    trackingUrl: text('tracking_url').notNull().default(''),
    status: text('status').notNull().default('pending'),
    shippedAt: integer('shipped_at', { mode: 'timestamp_ms' }),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
  },
  (table) => [index('idx_shipments_order').on(table.orderId)]
);

export type Shipment = typeof shipment.$inferSelect;

export const adminAuditLog = sqliteTable(
  'admin_audit_logs',
  {
    id: text('id').primaryKey(),
    adminId: text('admin_id').notNull(),
    adminEmail: text('admin_email').notNull().default(''),
    action: text('action').notNull(),
    targetType: text('target_type').notNull().default(''),
    targetId: text('target_id').notNull().default(''),
    metadata: text('metadata').notNull().default('{}'),
    requestId: text('request_id'),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
  },
  (table) => [
    index('idx_admin_audit_logs_created').on(table.createdAt),
    index('idx_admin_audit_logs_target').on(table.targetType, table.targetId),
  ]
);

export type AdminAuditLog = typeof adminAuditLog.$inferSelect;

export const DISCOUNT_KINDS = ['percent', 'fixed'] as const;
export type DiscountKind = (typeof DISCOUNT_KINDS)[number];

export const discount = sqliteTable(
  'discounts',
  {
    id: text('id').primaryKey(),
    code: text('code').notNull().unique(),
    kind: text('kind').notNull().default('percent'),
    value: integer('value').notNull(),
    currency: text('currency').notNull().default('USD'),
    active: integer('active', { mode: 'boolean' }).notNull().default(true),
    startsAt: integer('starts_at', { mode: 'timestamp_ms' }),
    expiresAt: integer('expires_at', { mode: 'timestamp_ms' }),
    usageLimit: integer('usage_limit'),
    usageCount: integer('usage_count').notNull().default(0),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
  },
  (table) => [index('idx_discounts_active').on(table.active)]
);

export type Discount = typeof discount.$inferSelect;

export const discountRedemption = sqliteTable(
  'discount_redemptions',
  {
    id: text('id').primaryKey(),
    discountId: text('discount_id')
      .notNull()
      .references(() => discount.id, { onDelete: 'cascade' }),
    orderId: text('order_id').notNull(),
    code: text('code').notNull().default(''),
    amountCents: integer('amount_cents').notNull().default(0),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
  },
  (table) => [index('idx_discount_redemptions_order').on(table.orderId)]
);

export type DiscountRedemption = typeof discountRedemption.$inferSelect;
