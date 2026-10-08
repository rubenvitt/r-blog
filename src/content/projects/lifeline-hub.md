---
title: Lifeline Hub
tagline: Führungsunterstützung für Einsatzlagen als eine einzige Datei, die ohne Internet im Einsatzleitwagen läuft.
area: bevoelkerungsschutz
kind: desktop
status: alpha
repo: rubenvitt/lifeline-hub
website: https://lifeline-hub.de
stack: [Rust, axum, SQLite, React, MapLibre, Tauri]
screenshot: ./_images/lifeline-hub/screenshot.webp
screenshotAlt: "Lifeline Hub: Lagebild einer Übungslage mit Kennzahlen, Gefahrenmatrix, Sichtung und Meldungsstrom"
license: Alle Rechte vorbehalten
featured: true
lastActivity: 2026-10-08
---

Einsatztagebuch, Lagekarte, Kräfteübersicht, Betroffenen- und Schadenserfassung, Meldungen und Aufträge. Lifeline Hub bündelt in einer Anwendung, was eine Einsatzleitung im Bevölkerungsschutz braucht.

Ausgangspunkt ist ein Ort, an dem ich nicht mit Netz rechnen darf. Daraus ergibt sich fast alles andere.

Lifeline Hub ist eine einzige Datei ohne Laufzeitabhängigkeiten. Backend, eingebettetes Frontend, SQLite und OpenSSL stecken im Binary. Auf dem Zielrechner muss weder Node.js noch ein Webserver noch eine Datenbank installiert werden. Bauen, Datei kopieren, starten.

Auch die Lagekarte funktioniert offline. Die Kartenkacheln liegen als lokale MBTiles-Datei vor, Schriften und Symbole sind eingebettet. Ohne Netz fehlt der Kartenhintergrund, die Funktion bleibt.

Und die Oberfläche muss unter Einsatzbedingungen bedienbar sein. Trefferflächen, Dichte und Farbrollen folgen einer ausformulierten Leitlinie für Handschuhbetrieb, Tageslicht und Nachtmodus.

Die taktischen Zeichen auf der Lagekarte erzeugt [einsatzzeichen](/projekte/einsatzzeichen), mein Generator für taktische Zeichen.

> Stand: frühe Alpha. Ein Release gibt es noch nicht, Datenmodell und Bedienung ändern sich laufend. Den Quelltext kann man einsehen, er steht aber unter keiner Open-Source-Lizenz.
