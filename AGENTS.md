# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Projekt

Persönlicher deutschsprachiger Tech-Blog von Ruben (rubeen.dev). Themen: AI Systems Engineering, Evals, Observability, Tool-Sicherheit in Agent-Architekturen. Gehostet auf Cloudflare Pages.

## Commands

```bash
pnpm dev          # Dev-Server auf localhost:4321
pnpm build        # Astro build + Pagefind-Index generieren
pnpm preview      # Production-Build lokal testen
pnpm lint         # oxlint
pnpm lint:fix     # oxlint --fix
pnpm format       # oxfmt
pnpm format:check # oxfmt --check
```

## Tech Stack

- **Astro 6** mit MDX und Content Collections (glob loader)
- **Tailwind CSS 4** via Vite-Plugin (kein PostCSS)
- **Pagefind** für Client-seitige Suche (wird im Build generiert)
- **Shiki** Syntax Highlighting mit dual theme (github-light / github-dark)
- **sharp** für Bildoptimierung
- **oxlint / oxfmt** statt ESLint/Prettier

## Architektur

### Content Collection

Einzige Collection `blog` in `src/content.config.ts`. Schema-Felder: `title`, `description`, `date`, `updatedDate?`, `tags[]`, `aliases[]`, `image?`, `draft`, `ai`. Posts sind MDX-Dateien in `src/content/blog/`.

`aliases` ermöglicht alte URLs als 301-Redirects (generiert in `[...slug].astro`). Zusätzlich existieren manuelle Redirects in `astro.config.mjs`.

### KI-Kennzeichnung

Das Frontmatter-Feld `ai` steuert den Transparenzhinweis nach Art. 50 KI-VO — `generated` (Default), `assisted` oder `none`. `BlogPost.astro` rendert daraus über `AiDisclosure.astro` einen Hinweis **oberhalb** des Artikeltextes (Art. 50 Abs. 5: spätestens bei erster Wahrnehmung, nicht im Footer). Derselbe Hinweis geht in `rss.xml.ts`; der Podcast-Feed und der Player weisen zusätzlich auf die synthetischen Stimmen hin. Details und die benannte redaktionelle Verantwortung stehen auf `/ki-transparenz`.

Keine manuellen Transparenz-Callouts in Posts — das Feld ist die einzige Quelle.

### Layouts

- `BaseLayout.astro` — HTML-Shell mit Dark-Mode (3-State: system/light/dark via `data-theme`), Fonts (Nunito + JetBrains Mono), Pagefind Search Modal, Image Zoom, externe Links auto `target="_blank"`
- `BlogPost.astro` — Hero-Header (mit/ohne Bild), Lesezeit-Berechnung, Reading Progress Bar

### MDX Widgets

In Posts als Astro-Komponenten importiert und inline genutzt:

- `Callout` — type: info | warning | tip | danger
- `Figure` — Bild mit optionaler Caption, zoombar via `data-zoomable`
- `LinkCard` — automatische Metadaten-Auflösung (intern: aus Collection, extern: gecached via fetch). Interne Cards zeigen Hero-Image.
- `Accordion`, `CodeTabs`, `InfoBox`, `Embed`

### Styling

Kein `@tailwindcss/typography` — eigene Prose-Styles in `global.css`. Dark-Mode via `.dark`-Klasse auf `<html>`. Design-Tokens als CSS Custom Properties in `@theme`.

Content-Width: `--content-width: 820px`, Wide: `--content-width-wide: 1100px`. Accent-Farbe: Orange (#c2410c light / #ea580c dark).

### Bilder

Post-Bilder liegen in `src/content/blog/_images/<post-slug>/`. Hero-Bilder heißen `hero.png`. Im Frontmatter referenziert als `image: ./_images/<post-slug>/hero.png`. Inline-Bilder werden per ESM-Import im MDX referenziert und an die `Figure`-Komponente übergeben.

## Blog-Sprachstil (für neue Posts)

- **Sprache**: Deutsch, aber englische Fachbegriffe bleiben englisch (Contract, Eval, Tool-Call, Observability, Prompt, Agent, Orchestrator)
- **Perspektive**: Ich-Form, bezieht Leser mit "wir" ein
- **Ton**: Fachlich fundiert, aber zugänglich und direkt. Gelegentlich provokant/pointiert
- **Blockquotes** als prägnante Kernthesen/Takeaways, oft am Ende eines Abschnitts
- **Rhetorische Fragen** zum Einbinden des Lesers ("Woher weiß ich, dass das Ergebnis ein gutes Ergebnis ist?")
- **Kurze Sätze neben längeren Erklärungen** für Rhythmus ("40 Zeilen Ergebnis. LGTM. Done. Oder... nicht?")
- **Konkrete Beispiele** mit Links zu echten Repos und Live-Demos
- **Artikel bauen aufeinander auf** — Rückverweise auf vorherige Posts via LinkCard
- Gelegentlicher Humor und Selbstironie ("Meine ehrliche Meinung dazu? Das möchte ich nicht, nein!")