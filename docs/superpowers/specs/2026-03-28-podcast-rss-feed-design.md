# Podcast-RSS-Feed Design

## Ziel

Einen standardkonformen Podcast-RSS-Feed bereitstellen, damit die Blog-Podcasts in externen Podcast-Apps (Apple Podcasts, Overcast, Pocket Casts etc.) abonniert werden können.

## Entscheidungen

- **Separater Feed** (`/podcast.xml`) statt Erweiterung des bestehenden `/rss.xml` — Podcast-Apps erwarten Feeds ohne reine Text-Posts.
- **Show-Titel**: "rubeen.dev Podcast"
- **Show-Artwork**: `/logo.png` (1024x1024, Hund-Logo)
- **Episode-Artwork**: Hero-Image des jeweiligen Blog-Posts
- **Duration im Frontmatter** statt MP3-Parsing zur Build-Zeit — kein extra Package nötig, wartbarer.

## Architektur

### Neuer Endpoint: `src/pages/podcast.xml.ts`

- Nutzt `@astrojs/rss` (bereits installiert)
- Filtert `blog`-Collection auf Posts mit `podcast`-Frontmatter und `draft: false`
- Sortiert nach Datum absteigend

**Channel-Level:**
- `<title>`: "rubeen.dev Podcast"
- `<description>`: Kurzbeschreibung des Podcasts
- `<language>`: de
- `<itunes:author>`: Ruben
- `<itunes:image>`: `{site}/logo.png`
- `<itunes:category>`: Technology
- `<itunes:explicit>`: false

**Item-Level:**
- `<title>`: Post-Titel
- `<description>`: Post-Beschreibung
- `<pubDate>`: Post-Datum
- `<link>`: URL zum Blog-Post
- `<guid>`: URL zum Blog-Post (permanent)
- `<enclosure>`: Audio-URL, Dateigröße (bytes via `fs.statSync`), type `audio/mpeg`
- `<itunes:duration>`: Aus Frontmatter `podcast.duration`
- `<itunes:image>`: Hero-Image des Posts (aufgelöst zu absoluter URL)

### Schema-Erweiterung: `src/content.config.ts`

```typescript
podcast: z.object({
  audioFile: z.string(),
  transcript: z.string().optional(),
  duration: z.string().optional(),  // NEU — Format "MM:SS" oder "HH:MM:SS"
}).optional(),
```

### Frontmatter-Updates

Duration zu den 3 bestehenden Podcast-Posts hinzufügen:
- `tools-sind-keine-prompts.mdx`
- `ai-evals-ci-pipeline.mdx`
- `ai-systems-architecture.mdx`

## Dateien

| Datei | Aktion |
|-------|--------|
| `src/pages/podcast.xml.ts` | Neu |
| `src/content.config.ts` | `duration` zum podcast-Schema |
| 3 MDX-Posts | `duration` im Frontmatter |

## Nicht im Scope

- Einreichung bei Apple Podcasts / Spotify Directories
- Episode-Nummerierung (`<itunes:episode>`)
- Podcast-Übersichtsseite auf rubeen.dev
- Autodiscovery-Link im HTML-Head (kann als Follow-up ergänzt werden)
