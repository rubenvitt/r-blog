---
title: Zunder
tagline: Selbst gehostete Aufgabenverwaltung für eine Person, offline-first auf Web, Desktop und Mobile, mit einem Dev-Modus für Agenten über MCP.
area: alltag
kind: web
status: aktiv
repo: rubenvitt/zunder
stack: [Rust, axum, SQLite, SolidJS, Tauri, MCP]
screenshot: ./_images/zunder/screenshot.webp
screenshotAlt: "Zunder: Dev-Board mit den Spalten Offen, In Arbeit, Review, Blockiert und Erledigt, Beispieldaten"
license: Apache-2.0
lastActivity: 2026-10-22
---

Zunder ist das, womit man Feuer entfacht. Aufgaben sind der Brennstoff für fokussierte Arbeit. Die App ordnet sie nach Lebensbereichen, Projekten und schnellen, losen Aufgaben, und sie soll ClickUp bei mir ablösen.

Server und Clients teilen sich einen Kern in Rust. Jede Änderung ist eine Operation mit hybrider logischer Uhr, zusammengeführt wird nach dem Prinzip „letzter Schreiber gewinnt“. Deshalb arbeitet die App offline weiter und gleicht später ab. Der Server liefert Sync-API, Login über OIDC, API-Tokens und Backups in einem einzigen Container.

Der Dev-Modus zeigt Softwareprojekte als Board mit Offen, In Arbeit, Review, Blockiert und Erledigt. Agenten arbeiten über einen MCP-Endpunkt vollständig darauf: Sie legen Aufgaben an, zerlegen und reservieren sie, setzen den Status und schreiben Plan, Branch und PR-Link an die Aufgabe. Für eigene Projekte ersetzt das die GitHub Issues.

Die Sicht „Phönix“ ist eine Markierung über alle Bereiche hinweg, kein eigener Ordner. Sie sammelt Wochenschritte und Deep-Work-Blöcke. Ein Block lässt sich als „Flamme“ starten, dann läuft parallel ein Timer in Timing.

> Stand: Web-Oberfläche und Server sind umgesetzt und mit Playwright getestet. Die Apps für Desktop, iOS und Android auf Basis von Tauri 2 synchronisieren bereits, sind aber noch nicht von Hand durchgeklickt.
