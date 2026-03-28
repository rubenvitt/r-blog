# Podcast Player Komponente

Optionaler Audio-Player für Blogposts mit Wellenform-Visualisierung und Transkript-Accordion. Wird automatisch im Layout gerendert, wenn `podcast`-Frontmatter vorhanden ist.

## Entscheidungen

- **Audio-Hosting**: Selbst gehostet — MP3-Dateien in `public/audio/`
- **Frontmatter**: Minimal — `audioFile` (Pflicht) + `transcript` (optional)
- **Platzierung**: Fest im Layout zwischen Hero-Header und Artikel-Content
- **Stil**: Waveform Card — kompakte Karte mit Wellenform-Visualisierung
- **Transkript**: Inline-Accordion direkt unter dem Player
- **Dependencies**: Keine — Vanilla JS mit nativer Audio API

## Content Schema

Neues optionales `podcast`-Feld im Blog-Schema (`src/content.config.ts`):

```ts
podcast: z.object({
  audioFile: z.string(),              // Pfad relativ zu /public, z.B. "/audio/tools-sind-keine-prompts.mp3"
  transcript: z.string().optional(),  // Pfad zur Transkript-Textdatei, z.B. "/audio/tools-sind-keine-prompts.txt"
}).optional(),
```

Frontmatter-Beispiel:

```yaml
podcast:
  audioFile: /audio/tools-sind-keine-prompts.mp3
  transcript: /audio/tools-sind-keine-prompts.txt
```

Audio- und Transkript-Dateien liegen in `public/audio/` und werden von Astro unverändert in den Build kopiert.

## Komponente: PodcastPlayer.astro

**Pfad**: `src/components/widgets/PodcastPlayer.astro`

**Props**:

```ts
interface Props {
  audioFile: string;
  transcript?: string;
}
```

### Visueller Aufbau

```
┌─────────────────────────────────────────────────┐
│  ▶  │  🎙 PODCAST                      12:08    │
│     │  ▊▊▊▊▊▊▊▊▊▊▊▊▊░░░░░░░░░░░░░░░░░░░░░░░   │
│     │  4:12 / 12:08                 📄 Transkript│
└─────────────────────────────────────────────────┘
│ ▼ Transkript                                     │  ← Accordion (zugeklappt)
```

**Elemente:**

- **Play/Pause-Button**: Runder Button (48px), abgerundetes Quadrat (`border-radius: 14px`). Background: `--color-text`, Hover: `--color-accent`. Toggled zwischen Play- und Pause-SVG-Icon.
- **Podcast-Label**: `🎙 PODCAST` in `--color-accent`, uppercase, 12px, font-weight 700.
- **Dauer**: Gesamtdauer rechts oben, Monospace (`--font-mono`), 12px, `--color-text-muted`.
- **Wellenform**: ~35 vertikale Bars mit zufälligen Höhen (40–90%, statisch generiert via `Math.random()` zur Build-Zeit). Container-Höhe: 32px. Gespielte Bars: `--color-accent`, ungespielte: `--color-border`. Klickbar für Seek.
- **Zeitanzeige**: `currentTime / duration` in Monospace, links unten.
- **Transkript-Button**: Nur sichtbar wenn `transcript`-Prop vorhanden. Subtiler Button mit Border und Dokument-Icon. Hover: `--color-accent`.

**Card-Styling:**

- Background: `--color-bg-secondary`
- Border: `1px solid --color-border`
- Border-radius: 12px
- Padding: 20px 24px
- Flexbox-Layout: Button links, Wellenform-Bereich rechts (flex: 1)

### Audio-Steuerung (Vanilla JS, `<script is:inline>`)

- Verstecktes `<audio>`-Element mit `preload="metadata"`
- `loadedmetadata` → setzt Gesamtdauer-Anzeige
- `timeupdate` → aktualisiert Wellenform-Fortschritt (Bars einfärben) und Zeitanzeige
- `ended` → Reset auf Play-Icon, Position auf 0
- Klick auf Wellenform → berechnet relative Position → `audio.currentTime = position * duration`
- Play/Pause-Button → `audio.play()` / `audio.pause()`
- Keyboard: Space toggled Play/Pause wenn Player-Container fokussiert

### Transkript-Accordion

- Rendert nur wenn `transcript`-Prop vorhanden
- Direkt unter der Player-Card, visuell verbunden (gleiche Breite)
- Zugeklappt per Default
- Transkript-Text wird per `fetch()` beim ersten Öffnen geladen (lazy)
- Geladener Text wird in `<div>` gerendert, Zeilenumbrüche werden zu `<br>` konvertiert
- Animation: `max-height` Transition (300ms ease)
- Styling: gleicher Background/Border wie Player-Card, `border-top: none`, `border-radius: 0 0 12px 12px`

### Dark Mode

Kein spezielles Handling nötig. Alle Farben nutzen CSS Custom Properties, die in `.dark` automatisch überschrieben werden.

### Mehrere Player pro Seite

Da der Player pro Post nur einmal im Layout gerendert wird, gibt es nur eine Instanz. Das JS selektiert Elemente relativ zum eigenen `<div>`-Container, nicht global.

## Layout-Integration

### BlogPost.astro

Neue Prop `podcast` hinzufügen und PodcastPlayer bedingt rendern:

```astro
---
import PodcastPlayer from '../components/widgets/PodcastPlayer.astro';

interface Props {
  // ... bestehende Props
  podcast?: { audioFile: string; transcript?: string };
}

const { ..., podcast } = Astro.props;
---

<!-- nach dem Hero-Block, vor <article> -->
{podcast && (
  <div class="mx-auto max-w-(--content-width) px-6 pt-8">
    <PodcastPlayer audioFile={podcast.audioFile} transcript={podcast.transcript} />
  </div>
)}
```

### [...slug].astro

`podcast` aus der Collection-Entry lesen und als Prop an das Layout durchreichen.

## Geänderte / neue Dateien

| Datei | Aktion |
|-------|--------|
| `src/content.config.ts` | `podcast`-Feld zum Schema hinzufügen |
| `src/components/widgets/PodcastPlayer.astro` | Neue Komponente |
| `src/layouts/BlogPost.astro` | `podcast`-Prop, bedingt PodcastPlayer rendern |
| `src/pages/blog/[...slug].astro` | `podcast` aus Entry an Layout durchreichen |
