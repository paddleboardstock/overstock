export type Currency = string; // Runtime-validate as an allow-listed ISO 4217 code.
export type Locale = string;

export interface Env {
  SHOP_DB: D1Database;
  SHOP_ASSETS: R2Bucket;
  APP_ORIGIN: string;
  API_ORIGIN: string;
  STRIPE_SECRET_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
  SHOP_SESSION_SECRET: string;
  // Static admin token for the starter. Replace with a proper auth provider
  // (Better Auth session bridge + shop-admin role) before production.
  SHOP_ADMIN_TOKEN: string;
  // Optional override for local testing against a mock Stripe server.
  STRIPE_API_BASE?: string;
  // Optional; configure only if using a separate auth service / verified session bridge.
  AUTH_BASE_URL?: string;
}

export type ProductStatus = "draft" | "active" | "archived";
export type OrderStatus =
  | "pending_shipping_quote"
  | "pending_payment"
  | "paid"
  | "processing"
  | "shipped"
  | "completed"
  | "cancelled"
  | "payment_failed"
  | "partially_refunded"
  | "refunded";

export interface PublicProductVariant {
  id: string;
  sku: string;
  name: string;
  currency: Currency;
  priceCents: number;
  compareAtCents: number | null;
  availableQuantity: number;
}

export interface PublicProduct {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  locale: Locale;
  images: Array<{ url: string; alt: string | null; sortOrder: number }>;
  variants: PublicProductVariant[];
}

export interface CartItemInput {
  variantId: string;
  quantity: number;
}

export interface CheckoutRequest {
  items: CartItemInput[];
  email: string;
  locale: Locale;
  currency: Currency;
  shippingAddress: {
    name: string;
    line1: string;
    line2?: string;
    city: string;
    region?: string;
    postalCode: string;
    countryCode: string;
  };
  shippingQuoteId?: string;
  discountCode?: string;
  idempotencyKey: string;
}

export interface CheckoutResponse {
  orderNumber: string;
  checkoutUrl: string;
}

export interface AuthenticatedPrincipal {
  userId: string;
  roles: string[];
}

export interface ApiError {
  error: {
    code: string;
    message: string;
    requestId?: string;
  };
}

// Framework-neutral handler type; adapt to Hono or native Worker fetch.
export type RouteHandler = (request: Request, env: Env) => Promise<Response>;
