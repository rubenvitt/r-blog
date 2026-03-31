# ProjectCard Widget - Design Spec

## Zusammenfassung

Wiederverwendbare Astro-Komponente `ProjectCard` zur Darstellung von Projekten mit App- und GitHub-Links in Blogposts. Ersetzt die bisherige Kombination aus InfoBox + separaten LinkCards.

## Komponente

**Datei:** `src/components/widgets/ProjectCard.astro`

## Props

| Prop | Typ | Required | Beschreibung |
|------|-----|----------|-------------|
| `title` | `string` | ja | Projektname |
| `description` | `string` | ja | Kurzbeschreibung (1-2 Sätze) |
| `appUrl` | `string` | nein | URL zur Live-App |
| `githubUrl` | `string` | nein | URL zum GitHub-Repo |

Mindestens eine URL muss angegeben werden.

## Layout: Split-Card

```
+------------------------------------------+
|  Titel                                   |
|  Beschreibung                            |
+--------------------+---------------------+
|  🌐 App            |  GitHub-Icon Repo   |
|  uav.iuk-ue.de     |  rubenvitt/uav-...  |
+--------------------+---------------------+
```

### Header
- Titel: `font-medium`, `--color-text`
- Beschreibung: `text-sm`, `--color-text-secondary`
- Getrennt vom Footer durch `border-bottom` mit `--color-border`

### Footer (Split)
- Zwei Haelften, getrennt durch vertikale Linie (`border-right`)
- Jede Haelfte ist ein eigener `<a>`-Tag
- **Links (App):** Globe-SVG-Icon in `--color-accent`, Hostname als Text
- **Rechts (GitHub):** GitHub-SVG-Icon in `--color-text-muted`, Repo-Pfad (`owner/repo`) als Text
- Hover: Textfarbe wechselt zu `--color-accent`

### Fallback bei nur einer URL
- Wenn nur `appUrl` oder nur `githubUrl` gesetzt ist: der vorhandene Link nimmt die volle Breite ein (kein Grid, keine vertikale Trennlinie)

### Responsive
- Auf sehr kleinen Screens (< 380px): Stack statt Side-by-Side via `grid-template-columns: 1fr` mit horizontaler Trennlinie statt vertikaler

## Styling

- Tailwind-Klassen, analog zu bestehenden Widgets (LinkCard, InfoBox)
- `not-prose` um Blog-Prose-Styles zu umgehen
- CSS Custom Properties: `--color-bg-secondary`, `--color-border`, `--color-text`, `--color-text-secondary`, `--color-text-muted`, `--color-accent`
- Dark/Light automatisch via bestehende `.dark`-Klasse
- Card: `rounded-2xl`, `border border-(--color-border)`, `bg-(--color-bg-secondary)`
- Hover auf Card-Ebene: `hover:border-(--color-accent)/30`, `hover:shadow-sm`
- `my-4` vertikaler Abstand (analog zu LinkCard)

## URL-Parsing

- `githubUrl`: Extrahiert `owner/repo` aus der URL fuer die Anzeige (z.B. `https://github.com/rubenvitt/uav-checklists` wird zu `rubenvitt/uav-checklists`)
- `appUrl`: Extrahiert Hostname (z.B. `https://uav.iuk-ue.de` wird zu `uav.iuk-ue.de`)
- Beide Links oeffnen in neuem Tab (`target="_blank"`, `rel="noopener noreferrer"`)

## Nutzung im MDX

```mdx
import ProjectCard from '../../components/widgets/ProjectCard.astro';

<ProjectCard
  title="UAV Einsatzverwaltung"
  description="Offline-PWA fuer Drohneneinsaetze im Bevoelkerungsschutz"
  appUrl="https://uav.iuk-ue.de"
  githubUrl="https://github.com/rubenvitt/uav-checklists"
/>
```

## Aenderungen am Blogpost

In `src/content/blog/papier-fliegt-nicht.mdx`:
1. Import von `ProjectCard` hinzufuegen
2. InfoBox (Zeile 48-51) durch `ProjectCard` ersetzen
3. Die zwei separaten LinkCards am Ende (Zeile 231-233) durch eine einzelne `ProjectCard` ersetzen
