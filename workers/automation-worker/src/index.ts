import { cron } from './cron';
import { dbCleanup } from './db-cleanup';
import { geoGenerator } from './geo-generator';
import { gscFetch } from './gsc-fetch';
import { ruleEngine } from './rule-engine';
import { taskExport } from './task-export';
import { geoScore } from './geo-score';
import { indexnowHandler } from './indexnow';

interface Env {
  DATA_BUCKET: R2Bucket;
  DB: D1Database;
  GSC_CLIENT_ID?: string;
  GSC_CLIENT_SECRET?: string;
  GSC_REFRESH_TOKEN?: string;
  GSC_SITE_URL?: string;
  INDEXNOW_KEY?: string;
  INDEXNOW_HOST?: string;
  INDEXNOW_KEY_LOCATION?: string;
  AUTOMATION_TOKEN?: string;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' },
  });
}

function safeEqual(a: string, b: string): boolean {
  const ea = new TextEncoder().encode(a);
  const eb = new TextEncoder().encode(b);
  const n = Math.max(ea.length, eb.length);
  let diff = ea.length ^ eb.length;
  for (let i = 0; i < n; i++) {
    diff |= (ea[i] || 0) ^ (eb[i] || 0);
  }
  return diff === 0;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS')
      return new Response(null, { status: 204, headers: { 'Access-Control-Allow-Origin': '*' } });

    const url = new URL(request.url);
    const path = url.pathname.replace(/^\/api\/automation/, '') || '/';

    // Every /api/automation/* endpoint is an internal maintenance trigger.
    // Fail closed like ai-worker's REINDEX_TOKEN: without AUTOMATION_TOKEN the
    // HTTP surface stays disabled (404); a mismatched token is 401. The daily
    // cron runs via `scheduled` and is unaffected.
    if (!env.AUTOMATION_TOKEN) return json({ error: 'Not found' }, 404);
    const bearer = request.headers.get('Authorization') || '';
    const provided = bearer.startsWith('Bearer ')
      ? bearer.slice(7).trim()
      : url.searchParams.get('token') || '';
    if (!provided || !safeEqual(provided, env.AUTOMATION_TOKEN))
      return json({ error: 'Unauthorized' }, 401);

    try {
      switch (path) {
        case '/run':
          return await cron(env);
        case '/geo-generate':
          return await geoGenerator(env);
        case '/gsc-fetch':
          return await gscFetch(env);
        case '/rules/run':
          return await ruleEngine(env);
        case '/tasks/export':
          return await taskExport(request, env);
        case '/geo/score':
          return await geoScore(env);
        case '/indexnow':
          return await indexnowHandler(env, request);
        case '/cleanup-db':
          return json(await dbCleanup(env));
        default:
          return json(
            {
              error: 'Not found',
              endpoints: [
                '/run',
                '/geo-generate',
                '/gsc-fetch',
                '/rules/run',
                '/tasks/export',
                '/geo/score',
                '/indexnow',
                '/cleanup-db',
              ],
            },
            404
          );
      }
    } catch (e) {
      return json({ error: e instanceof Error ? e.message : 'Internal error' }, 500);
    }
  },

  // Cloudflare Cron Trigger (daily 02:00)
  async scheduled(_event: unknown, env: Env, _ctx: unknown): Promise<void> {
    await Promise.allSettled([cron(env), dbCleanup(env)]);
  },
};
