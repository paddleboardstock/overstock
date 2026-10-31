import type { Env } from '../types';

const BASE_HEADERS = {
  'Cache-Control': 'no-store',
};

export function corsHeaders(env: Env): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': env.APP_ORIGIN,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Idempotency-Key',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

export function json(
  env: Env,
  requestId: string,
  data: unknown,
  status = 200,
  extra: Record<string, string> = {},
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...BASE_HEADERS,
      'Content-Type': 'application/json; charset=utf-8',
      'X-Request-Id': requestId,
      ...corsHeaders(env),
      ...extra,
    },
  });
}

export function apiError(
  env: Env,
  requestId: string,
  code: string,
  message: string,
  status = 400,
): Response {
  return json(
    env,
    requestId,
    { error: { code, message, requestId } },
    status,
  );
}

export function clientIp(request: Request): string {
  return request.headers.get('CF-Connecting-IP') ?? 'unknown';
}

export async function readJson(request: Request): Promise<unknown> {
  try {
    return await request.json();
  } catch {
    return null;
  }
}
