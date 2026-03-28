# Podcast-RSS-Feed Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Einen standardkonformen Podcast-RSS-Feed (`/podcast.xml`) bereitstellen, der in Podcast-Apps abonniert werden kann.

**Architecture:** Neuer Astro-Endpoint nutzt `@astrojs/rss` mit `customData` für iTunes-Namespace. Filtert Blog-Collection auf Posts mit `podcast`-Frontmatter. Dateigröße wird via `fs.statSync` zur Build-Zeit gelesen.

**Tech Stack:** Astro 6, @astrojs/rss (bereits installiert), Node.js `fs` für Dateigrößen

---

### Task 1: Schema erweitern — `duration` zum Podcast-Objekt

**Files:**
- Modify: `src/content.config.ts:16-21`

- [ ] **Step 1: `duration` Feld hinzufügen**

In `src/content.config.ts`, das `podcast`-Objekt um `duration` erweitern:

```typescript
podcast: z
  .object({
    audioFile: z.string(),
    transcript: z.string().optional(),
    duration: z.string().optional(),
  })
  .optional(),
```

- [ ] **Step 2: Commit**

```bash
git add src/content.config.ts
git commit -m "feat: add duration field to podcast schema"
```

---

### Task 2: Frontmatter der 3 Podcast-Posts aktualisieren

**Files:**
- Modify: `src/content/blog/ai-systems-architecture.mdx` (Frontmatter)
- Modify: `src/content/blog/ai-evals-ci-pipeline.mdx` (Frontmatter)
- Modify: `src/content/blog/tools-sind-keine-prompts.mdx` (Frontmatter)

Dauern (aus ffprobe):
- `ai-systems-architecture.mp3`: 676s → `11:16`
- `ai-evals-ci-pipeline.mp3`: 1025s → `17:05`
- `tools-sind-keine-prompts.mp3`: 1268s → `21:08`

- [ ] **Step 1: `duration` zu `ai-systems-architecture.mdx` hinzufügen**

Im `podcast:`-Block unter `transcript:` hinzufügen:

```yaml
podcast:
  audioFile: /audio/ai-systems-architecture.mp3
  transcript: /audio/ai-systems-architecture.txt
  duration: "11:16"
```

- [ ] **Step 2: `duration` zu `ai-evals-ci-pipeline.mdx` hinzufügen**

```yaml
podcast:
  audioFile: /audio/ai-evals-ci-pipeline.mp3
  transcript: /audio/ai-evals-ci-pipeline.txt
  duration: "17:05"
```

- [ ] **Step 3: `duration` zu `tools-sind-keine-prompts.mdx` hinzufügen**

```yaml
podcast:
  audioFile: /audio/tools-sind-keine-prompts.mp3
  transcript: /audio/tools-sind-keine-prompts.txt
  duration: "21:08"
```

- [ ] **Step 4: Commit**

```bash
git add src/content/blog/ai-systems-architecture.mdx src/content/blog/ai-evals-ci-pipeline.mdx src/content/blog/tools-sind-keine-prompts.mdx
git commit -m "feat: add podcast duration to frontmatter"
```

---

### Task 3: Podcast-RSS-Feed Endpoint erstellen

**Files:**
- Create: `src/pages/podcast.xml.ts`

- [ ] **Step 1: Feed-Endpoint erstellen**

Erstelle `src/pages/podcast.xml.ts`:

```typescript
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { statSync } from 'node:fs';
import { join } from 'node:path';

export async function GET(context: APIContext) {
  const site = context.site!.toString().replace(/\/$/, '');

  const posts = (
    await getCollection('blog', ({ data }) => !data.draft && !!data.podcast)
  ).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    xmlns: {
      itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd',
    },
    title: 'rubeen.dev Podcast',
    description:
      'AI Systems Engineering, Evals, Observability und Tool-Sicherheit — als Podcast-Dialog zu jedem Blogpost.',
    site: site,
    customData: [
      '<language>de</language>',
      '<itunes:author>Ruben</itunes:author>',
      `<itunes:image href="${site}/logo.png"/>`,
      '<itunes:category text="Technology"/>',
      '<itunes:explicit>false</itunes:explicit>',
    ].join('\n'),
    items: posts.map((post) => {
      const podcast = post.data.podcast!;
      const audioUrl = `${site}${podcast.audioFile}`;
      const publicPath = join(process.cwd(), 'public', podcast.audioFile);
      let fileSize = 0;
      try {
        fileSize = statSync(publicPath).size;
      } catch {
        // fallback: 0 if file not found during dev
      }

      const itemCustomData = [
        podcast.duration
          ? `<itunes:duration>${podcast.duration}</itunes:duration>`
          : '',
        `<itunes:image href="${site}/blog/${post.id}/og.png"/>`,
      ]
        .filter(Boolean)
        .join('\n');

      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `/blog/${post.id}/`,
        enclosure: {
          url: audioUrl,
          length: fileSize,
          type: 'audio/mpeg',
        },
        customData: itemCustomData,
      };
    }),
  });
}
```

Note: For episode images, we use `og.png` as a proxy since Astro image assets can't be resolved to static URLs in an API endpoint. If the blog doesn't generate `og.png` per post, use the site-level logo instead: `<itunes:image href="${site}/logo.png"/>`.

- [ ] **Step 2: Build testen**

```bash
pnpm build
```

Expected: Build succeeds without errors.

- [ ] **Step 3: Feed-Output prüfen**

```bash
cat dist/podcast.xml
```

Expected: Valid XML with `<rss>` root, iTunes namespace, 3 `<item>` elements each with `<enclosure>` tags.

- [ ] **Step 4: Commit**

```bash
git add src/pages/podcast.xml.ts
git commit -m "feat: add podcast RSS feed endpoint"
```

---

### Task 4: Validierung und Cleanup

- [ ] **Step 1: Feed-XML validieren**

Prüfe den generierten Feed auf korrekte Struktur:
- Jedes `<item>` hat `<enclosure url="..." length="..." type="audio/mpeg"/>`
- `<itunes:duration>` ist vorhanden
- Channel hat `<itunes:image>`, `<itunes:category>`, `<itunes:author>`

```bash
pnpm build && grep -c '<enclosure' dist/podcast.xml
```

Expected: `3`

- [ ] **Step 2: Episode-Image-URL prüfen**

Prüfe ob die `<itunes:image>`-URLs für Episoden sinnvoll sind. Falls kein `og.png` pro Post existiert, ändere auf das globale Logo:

```bash
ls dist/blog/*/og.png 2>/dev/null | head -5
```

Falls keine Ergebnisse: In `podcast.xml.ts` die Episode-Image-Zeile ändern zu:
```typescript
`<itunes:image href="${site}/logo.png"/>`,
```

- [ ] **Step 3: Dev-Server testen**

```bash
pnpm dev &
curl -s http://localhost:4321/podcast.xml | head -30
kill %1
```

Expected: Feed wird korrekt ausgeliefert.

- [ ] **Step 4: Final Commit (falls Änderungen)**

```bash
git add -A
git commit -m "fix: adjust podcast feed episode images"
```
