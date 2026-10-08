# Lagebild: Designsystem von rubeen.dev

Deutschsprachiger Tech-Blog. Ruhig, redaktionell, ein Akzent. Texte in UI-Beispielen auf Deutsch, Fachbegriffe (Agent, Eval, Tool-Call) bleiben englisch.

## Setup

- Kein Provider nötig. `styles.css` lädt die Fonts (Google Fonts) und setzt alle Tokens auf `:root`.
- Dark Mode: Klasse `dark` oder `data-theme="dark"` auf `<html>` oder einem Wrapper. Ohne beides gilt Light.
- Seitenhintergrund immer `var(--paper)`, Text `var(--ink)`. Setze das auf `body` bzw. den äußersten Wrapper.
- Eigene Layouts in `<div className="rv-root">` wrappen: dann sind Links Petrol.

## Styling-Idiom: CSS-Variablen + `rv-`-Klassen

Keine Utility-Klassen. Komponenten stylen sich selbst; eigenes Layout-Glue mit Inline-Styles oder eigenem CSS über diese Tokens:

| Familie | Tokens |
|---|---|
| Flächen | `--paper`, `--paper-raised` (Karten), `--paper-sunken` |
| Text | `--ink`, `--ink-muted` |
| Linien | `--line`, `--line-strong` |
| Marke (Links, Navigation, Fokus) | `--petrol`, `--petrol-strong`, `--petrol-soft` |
| Signal (nur Fläche/Markierung) | `--signal`, `--signal-soft`, `--on-signal`; Text in Orange nur `--signal-text` |
| Status | `--moss(-soft)`, `--amber(-soft)`, `--danger(-soft)` |
| Code (immer dunkel) | `--code-bg`, `--code-ink`, `--code-accent` |
| Schrift | `--font-display` (Bricolage Grotesque, Überschriften), `--font-body` (Atkinson Hyperlegible Next), `--font-mono` (Metadaten, Tags, Daten) |
| Abstand | `--space-1/2/3/4/6/8/12/16/24` |
| Radius | `--radius-xs/sm/md/pill` |
| Breite | `--content-width` (760px), `--content-wide` (1120px), `--measure` |

Layout-Helfer: `rv-row` (Flex, wrap, gap), `rv-stack` (Grid, gap), `rv-pad`, `rv-section-title` (h2 im Display-Font).

## Regeln

- Signalorange (`--signal`) ist nie Textfarbe auf `--paper`. Nur Primärbutton, Marker, Fortschritt.
- Pro Ansicht genau ein `Button variant="primary"`.
- Daten im ISO-Format (`2026-07-06`), in `--font-mono`.
- Tags als `#tag`, kleingeschrieben, über `Tag`.
- Codeblöcke über `CodeBlock`, auch im Light-Theme dunkel.
- KI-Hinweis (`AiNote`) steht oberhalb des Artikeltexts, nie im Footer.

## Wo die Wahrheit liegt

`styles.css` → `_ds_bundle.css` (alle Tokens und `rv-`-Klassen), plus `components/<gruppe>/<Name>/<Name>.prompt.md` und `.d.ts` je Komponente.

## Beispiel

```jsx
const { SiteHeader, ArticleHeader, AiNote, Prose, Callout, PostCard, SiteFooter } = window.Lagebild;

<div className="rv-root" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
  <SiteHeader active="Blog" />
  <main style={{ maxWidth: 'var(--content-width)', margin: '0 auto', padding: 'var(--space-8) var(--space-4)' }}>
    <ArticleHeader title="Tools sind keine Prompts" date="2026-03-27" readingTime="12 min" tags={['ai', 'security']} />
    <AiNote level="assisted" />
    <Prose>
      <p>Ein Tool-Call kann Geld bewegen und Konten verändern.</p>
    </Prose>
    <Callout tone="warning" title="Achtung">Ohne Idempotency-Key wird doppelt überwiesen.</Callout>
    <h2 className="rv-section-title">Weiterlesen</h2>
    <PostCard date="2026-04-15" title="Wissen sammeln war nie das Problem" teaser="Klassisches PKM scheitert an der Pflege." tags={['knowledge-management']} />
  </main>
  <SiteFooter year={2026} />
</div>
```
