---
title: Chaos Party
tagline: 3D-Party-Brettspiel für zwei bis vier Personen im selben Raum, der PC zeigt das Brett, iPhones oder ein geteiltes iPad sind per Browser die Controller.
area: alltag
kind: web
status: beta
repo: rubenvitt/chaos-party
stack: [TypeScript, Babylon.js, React, Vite, WebSocket, Playwright]
screenshot: ./_images/chaos-party/screenshot.webp
screenshotAlt: "Chaos Party: das Brett Wackelwald in 3D mit Feldern, Abzweigen wie Pilzpfad und Sumpfabkürzung, vier Figuren und unten die Karten der Spieler mit Trophäen, Münzen und Items"
lastActivity: 2026-11-17
---

Ein Brettspiel für den Spieleabend: Das Spiel läuft am PC im Browser, jede Person tritt per QR-Code mit dem iPhone bei, oder mehrere teilen sich ein iPad mit eigenen Touch-Zonen. Gamepads oder App-Installationen braucht es nicht. Ein Befehl (`pnpm play`) installiert, baut und startet den Server, danach läuft alles offline im lokalen Netz.

Gewürfelt wird auf einem 3D-Brett mit Abzweigen, Fallen, Items, Münzen und Trophäen. Nach jeder Runde spielen alle ein Minispiel, etwa Sockenregen, Pudding-Gerangel oder Wackelturm. Am Ende werden die Trophäen gezählt, „Nochmal spielen“ startet direkt die Revanche.

Gebaut ist es agentisch mit Claude Code, Meilenstein für Meilenstein mit menschlicher Abnahme. Vision, Architektur, Entscheidungen und Experimente liegen im Repo. Der aktuelle Stand ist ein Release Candidate: Die Spielwerte stammen aus Bot-Simulationen, die Testrunde mit echten Menschen und Geräten steht laut README noch aus.
