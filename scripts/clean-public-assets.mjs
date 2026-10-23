import { existsSync, rmSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');

export function cleanBuildAssets() {
  // Check both dist/client/ (Worker mode) and dist/ (Pages mode)
  const candidates = [
    { dir: path.join(ROOT, 'dist', 'client'), label: 'dist/client/' },
    { dir: path.join(ROOT, 'dist'), label: 'dist/' },
  ];

  const removed = [];

  for (const { dir, label } of candidates) {
    if (!existsSync(dir)) continue;

    for (const sub of ['images', 'files']) {
      const subDir = path.join(dir, sub);
      if (existsSync(subDir)) {
        rmSync(subDir, { recursive: true, force: true });
        removed.push(label + sub + '/');
        console.log(`[clean] Removed ${label}${sub}/`);
      }
    }
  }

  if (removed.length === 0) {
    console.log('[clean] No assets to clean');
  }

  return removed;
}

cleanBuildAssets();
