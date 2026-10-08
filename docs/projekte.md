# Projekte auf rubeen.dev

Der Bereich `/projekte` zeigt eine kuratierte Auswahl meiner GitHub-Repos. Jedes Projekt ist eine
Markdown-Datei in `src/content/projects/`, das Schema steht in `src/content.config.ts`.

## Eine Projektdatei

```md
---
title: Flugmappe
tagline: Ein Satz, was es ist und für wen. Erscheint in der Liste und als Meta-Description.
area: bevoelkerungsschutz   # bevoelkerungsschutz | ai-engineering | werkzeuge | alltag
kind: web                   # web | desktop | ios | bibliothek | server | demo | cli
status: aktiv               # aktiv | alpha | beta | stabil | pausiert | archiviert
repo: rubenvitt/uav-checklists
website: https://flugmappe.de       # optional, Marketing- oder Projektseite
app: https://app.flugmappe.de       # optional, die laufende Anwendung
stack: [React, Vite, PWA]
screenshot: ./_images/flugmappe/screenshot.webp   # optional, echter Screenshot
screenshotAlt: "Was auf dem Bild zu sehen ist"
license: MIT                # optional, so wie im Repo
posts: [papier-fliegt-nicht]        # optional, Slugs von Blogposts zum Projekt
externalPosts:                      # optional, Artikel an anderer Stelle
  - title: 'Titel des Artikels'
    url: https://www.innoq.com/de/blog/...
    publisher: INNOQ
    date: 2026-09-23
featured: true              # optional, Karte oben auf /projekte (höchstens vier)
lastActivity: 2026-10-03    # letzter Push laut GitHub
---

Zwei bis vier kurze Absätze: welches Problem, was es kann, was daran besonders ist.
Nur Fakten aus Repo, README und Blogposts, nichts erfinden.
```

Der Dateiname ist der Slug unter `/projekte/<slug>`. Nimm den Produktnamen, nicht zwingend den
Repo-Namen. `ai` steht standardmäßig auf `generated`, die Seite zeigt dann den KI-Hinweis.

## Screenshots

Jedes Projekt mit Oberfläche bekommt einen echten Screenshot unter
`src/content/projects/_images/<slug>/screenshot.webp`, als WebP, höchstens 1600 px breit. Diese
Bilder liegen bewusst direkt im Git und nicht in LFS (siehe `.gitattributes`). Quellen in dieser
Reihenfolge: Bilder aus dem Repo oder aus Blogposts, sonst die App lokal starten und mit Playwright
abfotografieren. Keine erfundenen Oberflächen, keine echten Personendaten, und „DRK“ darf auf
keinem Bild und in keinem Text vorkommen. Native Apps (macOS, iOS) lassen sich hier nicht starten:
dafür liefert Ruben die Bilder.

## Was gezeigt wird

Aufnehmen:

- öffentliches Repo, nicht archiviert, kein Fork
- in den letzten zwölf Monaten bewegt
- ein README, aus dem hervorgeht, was das Projekt tut
- etwas, das andere benutzen, wiederverwenden oder daraus lernen können

Nicht aufnehmen:

- private Repos (auch nicht, wenn sie spannend sind: das entscheide ich selbst)
- Kurs-, Tutorial- und Übungsrepos, Konfigurationen, Deploy-Stacks
- Projekte, die in einem anderen aufgegangen sind (dann im Nachfolger erwähnen)

Status: `aktiv` heißt regelmäßige Commits, `alpha`/`beta` sagt das Projekt selbst über sich,
`stabil` ist fertig und wird gepflegt, `pausiert` ruht seit mehr als sechs Monaten.

## Regelmäßiger Abgleich

Eine Claude-Routine prüft wöchentlich die Repos von `rubenvitt` und öffnet bei Bedarf **einen**
PR gegen `main` mit:

1. neuen Projekten, die die Kriterien erfüllen
2. aktualisierten Einträgen, wenn sich README, Website oder Status deutlich geändert haben
3. nachgezogenem `lastActivity` bei allen gezeigten Projekten

Gibt es nichts zu tun, kommt kein PR. Was ich in einem PR ablehne, trage ich unten ein, damit es
nicht wieder vorgeschlagen wird.

## Bewusst nicht gezeigt

Repos, die die Routine nicht vorschlagen soll, mit kurzem Grund.

| Repo | Grund |
|---|---|
| rubenvitt/dotfiles | Konfiguration |
| rubenvitt/r-blog | diese Website |
| rubenvitt/bluelight-hub | Vorgänger von Lifeline Hub |
| rubenvitt/ember-rescue | Vorgänger von Lifeline Hub |
| rubenvitt/uav-praxis | in der IuK-Suite aufgegangen (Modul `uav`) |
| rubenvitt/da-feedback | in der IuK-Suite aufgegangen (Modul `feedback`) |
| rubenvitt/material-dienstabende | Sammlung für die eigene Bereitschaft |
| rubenvitt/life-automations | ohne README |
| rubenvitt/rubenvitt | GitHub-Profil |
| rubenvitt/test | Testrepo |

## Offen

Noch nicht entschieden, ob und wie sie rein sollen: `einsatztagebuch` (noch ohne README),
`r-worktime`, `r-times`, `docker-update-dashboard`, `cv-hub`, `momentchen-app`, `airport-db`,
`bookmark-manager`, `reiseplaner`, `naehrwert-tracker`, `r-rezepte`.
