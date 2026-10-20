---
title: Teilnehmerliste
tagline: Checkliste zum Abhaken von Teilnehmenden pro Gruppe, importiert aus Excel und komplett im Browser, ohne Backend.
area: werkzeuge
kind: web
status: aktiv
repo: rubenvitt/teilnehmerliste
app: https://teilnehmerliste.pages.dev
stack: [TypeScript, Vite, SheetJS, Service Worker, Cloudflare Pages]
screenshot: ./_images/teilnehmerliste/screenshot.webp
screenshotAlt: "Teilnehmerliste auf dem Handy: Gruppen als Tabs, darunter die Namen mit Häkchen, erfundene Demo-Daten"
lastActivity: 2026-10-17
---

Die Liste kommt aus einer Excel-Datei, jedes Arbeitsblatt wird zu einer Gruppe. Danach hakt man Namen ab, sucht über alle Gruppen und blendet Erledigte aus. Gelesen werden `.xlsx`, `.xls`, `.xlsm`, `.ods` und `.csv`.

Alles läuft im Browser. Es gibt kein Backend, keine Analytics und keine externen Requests, Namen und Häkchen liegen nur im `localStorage` des Geräts. Eine strikte Content Security Policy sichert das ab.

Ein erneuter Import übernimmt bestehende Häkchen, der Abgleich läuft über Gruppe und Name. Der Export als Excel lässt sich wieder importieren, auch auf einem anderen Gerät. Ein Service Worker hält alle Dateien vor, damit die Liste auch ohne Netz funktioniert.
