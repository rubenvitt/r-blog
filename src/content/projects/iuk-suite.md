---
title: IuK-Suite
tagline: Web-Suite für die Informations- und Kommunikationsarbeit einer ehrenamtlichen Einheit im Bevölkerungsschutz, mit einem Login für alle Module.
area: bevoelkerungsschutz
kind: web
status: aktiv
repo: rubenvitt/iuk-suite
screenshot: ./_images/iuk-suite/screenshot.webp
screenshotAlt: "IuK-Suite: Portal mit den Kacheln aller Module, von QR-Codes über Lagerbuch und Funkgeräte bis Drohnentraining"
stack: [Next.js, React, Ant Design, Drizzle, SQLite, Auth.js, Playwright]
posts: [drei-abende-drei-tools]
lastActivity: 2026-10-06
---

Über die Zeit sind für unsere Bereitschaft viele kleine Anwendungen entstanden: QR-Codes, Feedback zu Dienstabenden, Dateifreigaben, Materialverwaltung, Funkgeräte-Ausleihe, Drohnentraining. Die IuK-Suite holt sie unter ein Dach.

Technisch heißt das ein Container, mehrere Domains und ein Login. Jedes Modul läuft unter einem eigenen Host. Alle teilen sich aber denselben Next.js-Prozess, dasselbe Single Sign-on über Pocket ID und dieselbe Oberfläche. Die Daten liegen pro Modul in einer eigenen SQLite-Datei. Wer welches Modul sehen darf, entscheidet allein eine zentrale Registry.

Die alten Anwendungen habe ich per Import übernommen und ihre Domains auf die Suite umgestellt. Für Helferinnen und Helfer ändert sich dadurch nichts, außer dass jetzt alles gleich aussieht.
