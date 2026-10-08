---
title: Lifeline Hub
tagline: Führungsunterstützung für Einsatzlagen als eine einzige Datei, die ohne Internet im Einsatzleitwagen läuft.
area: bevoelkerungsschutz
kind: desktop
status: alpha
repo: rubenvitt/lifeline-hub
stack: [Rust, axum, SQLite, React, MapLibre, Tauri]
license: Alle Rechte vorbehalten
featured: true
lastActivity: 2026-10-08
---

Einsatztagebuch, Lagekarte, Kräfteübersicht, Betroffenen- und Schadenserfassung, Meldungen und Aufträge: Lifeline Hub bündelt, was eine Einsatzleitung im Bevölkerungsschutz braucht, in einer Anwendung.

Der Ausgangspunkt ist ein Ort, an dem Netz nicht vorausgesetzt werden darf. Daraus folgen die tragenden Entscheidungen:

- **Eine Datei, keine Laufzeitabhängigkeiten.** Backend, eingebettetes Frontend, SQLite und OpenSSL stecken im Binary. Auf dem Zielrechner wird weder Node.js noch ein Webserver noch eine Datenbank installiert. Bauen, Datei kopieren, starten.
- **Offline-fähige Lagekarte.** Kartenkacheln liegen als lokale MBTiles-Datei vor, Schriften und Symbole sind eingebettet. Ohne Netz fehlt der Kartenhintergrund, nicht die Funktion.
- **Bedienbar unter Einsatzbedingungen.** Trefferflächen, Dichte und Farbrollen folgen einer ausformulierten Leitlinie für Handschuhbetrieb, Tageslicht und Nachtmodus.

Die taktischen Zeichen auf der Lagekarte kommen aus [einsatzzeichen](/projekte/einsatzzeichen), meinem Generator für taktische Zeichen.

> Stand: frühe Alpha. Es gibt noch kein Release, Datenmodell und Bedienung ändern sich laufend. Der Quelltext ist einsehbar, steht aber unter keiner Open-Source-Lizenz.
