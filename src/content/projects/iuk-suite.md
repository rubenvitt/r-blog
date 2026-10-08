---
title: IuK-Suite
tagline: Eine Web-Suite für die Informations- und Kommunikationsarbeit einer DRK-Bereitschaft, mit einem Login für alle Module.
area: bevoelkerungsschutz
kind: web
status: aktiv
repo: rubenvitt/iuk-suite
stack: [Next.js, React, Ant Design, Drizzle, SQLite, Auth.js, Playwright]
posts: [drei-abende-drei-tools]
lastActivity: 2026-10-06
---

Über die Zeit sind für unsere Bereitschaft viele kleine Anwendungen entstanden: QR-Codes, Feedback zu Dienstabenden, Dateifreigaben, Materialverwaltung, Funkgeräte-Ausleihe, Drohnentraining. Die IuK-Suite holt sie unter ein Dach.

**Ein Container, mehrere Domains, ein Login.** Jedes Modul läuft unter einem eigenen Host, alle teilen sich denselben Next.js-Prozess, dasselbe Single Sign-on über Pocket ID und dieselbe Oberfläche. Jedes Modul hat seine eigene SQLite-Datei. Wer welches Modul sehen darf, entscheidet allein eine zentrale Registry.

Die Alt-Anwendungen wurden per Import übernommen und ihre Domains umgeschwenkt. Für Helferinnen und Helfer ändert sich dadurch nichts außer, dass alles gleich aussieht.
