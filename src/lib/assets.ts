import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

/** Check whether a file exists under public/ at build time. */
export function publicFileExists(publicPath: string): boolean {
  if (!publicPath.startsWith('/')) return false;
  return fs.existsSync(path.join(PUBLIC_DIR, publicPath));
}

/** Return the first existing candidate path, if any. */
export function firstExisting(candidates: string[]): string | undefined {
  return candidates.find(publicFileExists);
}
