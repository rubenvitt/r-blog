# LinkCard Build-Time Favicons — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eliminate runtime favicon requests by downloading and inlining favicons as Base64 data URIs at build time.

**Architecture:** New `src/lib/link-card-cache.ts` handles all external metadata fetching (HTML parsing, favicon download, base64 encoding) with a file-based JSON cache. `LinkCard.astro` becomes a thin rendering layer that delegates to this utility. No new dependencies needed — uses Node.js `Buffer` for base64 and `fs` for cache I/O.

**Tech Stack:** Astro 6 (static), TypeScript, Node.js fs/Buffer APIs

**Spec:** `docs/superpowers/specs/2026-03-26-linkcard-build-time-favicons-design.md`

**Note:** This project has no test framework. Verification is done via `astro build` (build succeeds, no errors) and inspecting output HTML for data URIs.

---

### Task 1: Add cache file to .gitignore

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Add `.link-card-cache.json` to `.gitignore`**

Append to the end of `.gitignore`:

```
# link-card build cache
.link-card-cache.json
```

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: gitignore link-card cache file"
```

---

### Task 2: Create `src/lib/link-card-cache.ts` — HTML parsing helpers

Extract the HTML parsing logic from `LinkCard.astro` into reusable functions. These are pure functions with no side effects.

**Files:**
- Create: `src/lib/link-card-cache.ts`

- [ ] **Step 1: Create file with types and HTML parsing helpers**

```ts
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
```

- [ ] **Step 2: Verify it compiles**

```bash
cd /Users/rubeen/dev/personal/r-blog && npx astro check 2>&1 | head -20
```

No errors expected for the new file.

---

### Task 3: Add favicon fetching and base64 encoding

**Files:**
- Modify: `src/lib/link-card-cache.ts`

- [ ] **Step 1: Add `fetchFaviconAsDataUri` function**

Append after `extractDescription`:

```ts
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
```

---

### Task 4: Add cache layer (read/write)

**Files:**
- Modify: `src/lib/link-card-cache.ts`

- [ ] **Step 1: Add cache read/write with in-memory Map**

Add after the `ExternalLinkCardMetadata` interface definition (before `pickFirstMatch`):

```ts
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

function isFresh(entry: ExternalLinkCardMetadata): boolean {
  const age = Date.now() - new Date(entry.fetchedAt).getTime();
  return age < CACHE_TTL_MS;
}
```

---

### Task 5: Add the main `fetchExternalMetadata` export

**Files:**
- Modify: `src/lib/link-card-cache.ts`

- [ ] **Step 1: Add the public API function**

Append at the end of the file:

```ts
export async function fetchExternalMetadata(url: string): Promise<ExternalLinkCardMetadata> {
  const cache = loadCache();
  const cached = cache.get(url);

  if (cached && isFresh(cached)) {
    return cached;
  }

  const fallback: ExternalLinkCardMetadata = {
    title: '',
    description: '',
    faviconDataUri: null,
    fetchedAt: new Date().toISOString(),
  };

  try {
    const pageUrl = new URL(url);
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; AstroBot/1.0)' },
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
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
    };

    cache.set(url, entry);
    saveCache(cache);

    return entry;
  } catch {
    cache.set(url, fallback);
    saveCache(cache);

    return fallback;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/link-card-cache.ts
git commit -m "feat: add build-time external link metadata fetcher with cache"
```

---

### Task 6: Refactor `LinkCard.astro` to use the new utility

**Files:**
- Modify: `src/components/widgets/LinkCard.astro`

- [ ] **Step 1: Replace the frontmatter**

Replace the entire frontmatter (lines 1-123) with:

```astro
---
import { getInternalLinkCardMetadata, normalizeInternalPath } from '../../lib/link-card-metadata';
import { fetchExternalMetadata } from '../../lib/link-card-cache';
import { SITE_HOSTNAME, SITE_ORIGIN } from '../../lib/site';

interface Props {
    url: string;
    title?: string;
    description?: string;
}

const {url, title, description} = Astro.props;

function getFaviconFallbackLabel(value: string) {
    const hostnameParts = value
        .split('.')
        .map((part) => part.trim())
        .filter(Boolean)
        .filter((part) => !['www', 'com', 'org', 'net', 'dev', 'app', 'io', 'co', 'de'].includes(part.toLowerCase()));
    const source = hostnameParts[0] ?? value;
    const words = source.split(/[^a-z0-9]+/i).filter(Boolean);
    const initials = words.slice(0, 2).map((word) => word[0]?.toUpperCase() ?? '').join('');

    return initials || source.slice(0, 1).toUpperCase() || 'L';
}

let resolvedTitle = title;
let resolvedDescription = description ?? '';
let hostname = '';
let linkLabel = url;
let faviconSrc = '/favicon-32.png';
let faviconFallback = 'L';
let isExternalLink = false;

try {
    const siteUrl = new URL(Astro.site ?? SITE_ORIGIN);
    const urlObj = new URL(url, siteUrl);
    const isHttpLink = urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    const isInternalLink = url.startsWith('/') || (isHttpLink && urlObj.origin === siteUrl.origin);
    const normalizedPath = normalizeInternalPath(urlObj.pathname);

    hostname = isInternalLink ? SITE_HOSTNAME : urlObj.hostname.replace('www.', '');
    linkLabel = isInternalLink
        ? normalizedPath === '/'
            ? SITE_HOSTNAME
            : `${SITE_HOSTNAME}${normalizedPath}`
        : hostname;
    isExternalLink = isHttpLink && !isInternalLink;
    faviconFallback = getFaviconFallbackLabel(hostname || linkLabel);

    if (isInternalLink) {
        const metadata = await getInternalLinkCardMetadata(urlObj.pathname);

        resolvedTitle = resolvedTitle ?? metadata?.title ?? linkLabel;
        resolvedDescription = resolvedDescription || metadata?.description || '';
        faviconSrc = '/favicon-32.png';
    }

    if (isExternalLink) {
        const metadata = await fetchExternalMetadata(urlObj.toString());

        resolvedTitle = resolvedTitle ?? metadata.title || hostname;
        resolvedDescription = resolvedDescription || metadata.description;
        faviconSrc = metadata.faviconDataUri ?? faviconSrc;
    }
} catch {
    resolvedTitle = resolvedTitle ?? url;
}

resolvedTitle = resolvedTitle ?? linkLabel;
faviconFallback = getFaviconFallbackLabel(hostname || linkLabel);
---
```

The HTML template below the frontmatter stays exactly the same (lines 125-157 of the original).

- [ ] **Step 2: Verify build succeeds**

```bash
cd /Users/rubeen/dev/personal/r-blog && pnpm run build 2>&1 | tail -30
```

Expected: Build completes without errors.

- [ ] **Step 3: Inspect output to verify data URIs**

```bash
grep -o 'data:image[^"]*' /Users/rubeen/dev/personal/r-blog/dist/blog/*/index.html | head -10
```

Expected: Multiple `data:image/...;base64,...` matches in the built HTML.

- [ ] **Step 4: Verify no external favicon requests remain**

```bash
grep -c 'favicon.ico' /Users/rubeen/dev/personal/r-blog/dist/blog/*/index.html || echo "none found"
```

Expected: No matches — all favicon.ico URLs should be replaced with data URIs.

- [ ] **Step 5: Commit**

```bash
git add src/components/widgets/LinkCard.astro
git commit -m "refactor: move external link fetching to link-card-cache, inline favicons as data URIs"
```

---

### Task 7: Verify locally with dev server

- [ ] **Step 1: Start dev server and manually check a page with LinkCards**

```bash
cd /Users/rubeen/dev/personal/r-blog && pnpm run dev
```

Open a blog post with LinkCards (e.g. `/blog/ai-systems-architecture`) and verify:
- External LinkCards show favicons (rendered from data URIs)
- Internal LinkCards still work as before
- No network requests to external favicon domains in browser DevTools

- [ ] **Step 2: Done**

All changes committed. Verify the `.link-card-cache.json` file was created in the project root (this is the build cache, gitignored).
