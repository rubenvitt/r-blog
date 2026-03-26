import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const CACHE_FILE = join(process.cwd(), '.link-card-cache.json');
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
const MAX_FAVICON_BYTES = 100_000; // 100 KB

export interface ExternalLinkCardMetadata {
  title: string;
  description: string;
  faviconDataUri: string | null;
  fetchedAt: string;
  fetchSucceeded: boolean;
}

type CacheStore = Record<string, ExternalLinkCardMetadata>;

let memoryCache: Map<string, ExternalLinkCardMetadata> | null = null;

function loadCache(): Map<string, ExternalLinkCardMetadata> {
  if (memoryCache) {
    return memoryCache;
  }

  memoryCache = new Map();

  try {
    const raw = readFileSync(CACHE_FILE, 'utf-8');
    const parsed: CacheStore = JSON.parse(raw);

    for (const [url, entry] of Object.entries(parsed)) {
      memoryCache.set(url, entry);
    }
  } catch {
    // Cache file missing or corrupt — start fresh
  }

  return memoryCache;
}

function saveCache(cache: Map<string, ExternalLinkCardMetadata>): void {
  try {
    const obj: CacheStore = Object.fromEntries(cache);
    writeFileSync(CACHE_FILE, JSON.stringify(obj, null, 2));
  } catch {
    // Non-critical — build continues without persisting cache
  }
}

const CACHE_STALE_TTL_MS = 60 * 60 * 1000; // 1 hour for failed entries

function isFresh(entry: ExternalLinkCardMetadata): boolean {
  const age = Date.now() - new Date(entry.fetchedAt).getTime();
  const ttl = entry.fetchSucceeded ? CACHE_TTL_MS : CACHE_STALE_TTL_MS;
  return age < ttl;
}

function pickFirstMatch(html: string, patterns: RegExp[]): string | undefined {
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) {
      return match[1].trim();
    }
  }
}

function extractFaviconUrl(html: string, pageUrl: URL): string {
  const iconHref = pickFirstMatch(html, [
    /<link[^>]*rel=["'][^"']*\b(?:icon|shortcut icon|apple-touch-icon(?:-precomposed)?)\b[^"']*["'][^>]*href=["']([^"']+)["']/i,
    /<link[^>]*href=["']([^"']+)["'][^>]*rel=["'][^"']*\b(?:icon|shortcut icon|apple-touch-icon(?:-precomposed)?)\b[^"']*["']/i,
  ]);

  if (iconHref) {
    try {
      return new URL(iconHref, pageUrl).toString();
    } catch {
      // fall through to default
    }
  }

  return new URL('/favicon.ico', pageUrl.origin).toString();
}

function extractTitle(html: string): string | undefined {
  return pickFirstMatch(html, [
    /<meta[^>]*property="og:title"[^>]*content="([^"]*)"/i,
    /<meta[^>]*content="([^"]*)"[^>]*property="og:title"/i,
    /<title[^>]*>([^<]*)<\/title>/i,
  ]);
}

function extractDescription(html: string): string | undefined {
  return pickFirstMatch(html, [
    /<meta[^>]*property="og:description"[^>]*content="([^"]*)"/i,
    /<meta[^>]*content="([^"]*)"[^>]*property="og:description"/i,
    /<meta[^>]*name="description"[^>]*content="([^"]*)"/i,
    /<meta[^>]*content="([^"]*)"[^>]*name="description"/i,
  ]);
}

async function fetchFaviconAsDataUri(faviconUrl: string): Promise<string | null> {
  try {
    const response = await fetch(faviconUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; AstroBot/1.0)' },
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      return null;
    }

    const contentType = response.headers.get('content-type')?.split(';')[0]?.trim() || 'image/x-icon';
    const buffer = await response.arrayBuffer();

    if (buffer.byteLength > MAX_FAVICON_BYTES) {
      return null;
    }

    const base64 = Buffer.from(buffer).toString('base64');
    return `data:${contentType};base64,${base64}`;
  } catch {
    return null;
  }
}

export async function fetchExternalMetadata(url: string): Promise<ExternalLinkCardMetadata> {
  const cache = loadCache();
  const cached = cache.get(url);

  if (cached && isFresh(cached)) {
    return cached;
  }

  try {
    const pageUrl = new URL(url);
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; AstroBot/1.0)' },
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      const fallback: ExternalLinkCardMetadata = {
        title: '',
        description: '',
        faviconDataUri: null,
        fetchedAt: new Date().toISOString(),
        fetchSucceeded: false,
      };
      cache.set(url, fallback);
      saveCache(cache);
      return fallback;
    }

    const html = await response.text();

    const title = extractTitle(html) || '';
    const description = extractDescription(html) || '';
    const faviconUrl = extractFaviconUrl(html, pageUrl);
    const faviconDataUri = await fetchFaviconAsDataUri(faviconUrl);

    const entry: ExternalLinkCardMetadata = {
      title,
      description,
      faviconDataUri,
      fetchedAt: new Date().toISOString(),
      fetchSucceeded: true,
    };

    cache.set(url, entry);
    saveCache(cache);

    return entry;
  } catch {
    const fallback: ExternalLinkCardMetadata = {
      title: '',
      description: '',
      faviconDataUri: null,
      fetchedAt: new Date().toISOString(),
      fetchSucceeded: false,
    };
    cache.set(url, fallback);
    saveCache(cache);

    return fallback;
  }
}
