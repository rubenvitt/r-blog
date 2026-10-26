---
title: Suchlage
tagline: Lagehub für Drohneneinsätze bei Personensuchen, der Livebild, Position und Flugspur der Drohne in den Einsatzleitwagen und aufs Handy bringt.
area: bevoelkerungsschutz
kind: web
status: alpha
repo: rubenvitt/suchlage
stack: [Rust, axum, SQLite, MQTT, MediaMTX, React, MapLibre]
screenshot: ./_images/suchlage/screenshot.webp
screenshotAlt: "Suchlage im Vorschau-Modus: Lagekarte mit Suchgebiet, Flugspur und Fernsteuerung, rechts das Livebild-Feld und die Flugdaten, unten die Telemetrie"
posts: [ehrenamt-software-betreiben]
lastActivity: 2026-10-25
---

Wenn wir bei einer Personensuche die Drohne starten, sieht das Bild bisher nur, wer die Fernsteuerung in der Hand hat. Suchlage soll das ändern. Livebild, Position und Flugspur erscheinen im Browser, am Arbeitsplatz im Einsatzleitwagen, als Großbild und mobil auf dem Handy. Ohne Lizenzkosten und ohne Cloud-Dienst des Herstellers.

Dafür spricht Suchlage die DJI Cloud API selbst. Die Fernsteuerung meldet sich über eine eigene Anmeldeseite an und schickt ihre Telemetrie per MQTT, das Video geht per RTMP an MediaMTX und von dort per WebRTC in den Browser. Der Server in Rust erkennt Start und Landung, speichert die Spur in SQLite und schiebt den Lagezustand per Server-Sent Events an alle offenen Oberflächen. Jeder Flug landet danach mit Spur, Kennzahlen und Aufzeichnung in der Flugliste.

Auf der Karte lassen sich Punkte und Flächen zeichnen, die auf der Fernsteuerung erscheinen, und umgekehrt. Fotos aus der Drohne liegen nach dem Flug an ihrer Koordinate. Nur der DJI-Adapter kennt die Datentypen des Herstellers, der Rest der Anwendung bleibt davon unberührt. Ein Simulator spielt mitgeschnittene Flüge ab, so lässt sich ohne Drohne entwickeln und testen.

Oberfläche und Designsystem kommen aus [Lifeline Hub](/projekte/lifeline-hub), die taktischen Zeichen auf der Karte aus [einsatzzeichen](/projekte/einsatzzeichen). Suchlage ist der Nachfolger von `uav-lagebild`. Das Zielbild bleibt die eigentliche Suche mit Sektoren, Abdeckungsnachweis, Hinweisen und Export für die Einsatzleitung. Sie baut auf einer Übertragung auf, die zuverlässig funktioniert, und kommt deshalb danach.

> Stand: erste Versuche. Live-Lage, Kartenelemente und Fotos sind umgesetzt, die Erprobung mit der echten Drohne läuft gerade. Der Screenshot zeigt den Vorschau-Modus mit Beispieldaten und abgespieltem Flug.
