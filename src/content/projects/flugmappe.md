---
title: Flugmappe
tagline: PWA für Drohneneinsätze im Katastrophenschutz, mit Vorflugcheck, Wetterbewertung, SORA-Einstufung und PDF-Bericht.
area: bevoelkerungsschutz
kind: web
status: aktiv
repo: rubenvitt/uav-checklists
website: https://flugmappe.de
app: https://app.flugmappe.de
screenshot: ./_images/flugmappe/screenshot.webp
screenshotAlt: "Flugmappe: Einsatzkarte mit eingezeichnetem Einsatzgebiet und Standort"
stack: [React, Vite, PWA, Leaflet, TanStack Query, jsPDF]
posts: [papier-fliegt-nicht]
featured: true
lastActivity: 2026-10-03
---

Flugmappe ersetzt bei Drohneneinsätzen die Checkliste auf Papier. Jeder Einsatz läuft durch vier Phasen: Einsatzdaten, Vorflugkontrolle, Flüge und zum Schluss die Nachbereitung mit PDF-Export.

Die Wetterdaten kommen von Open-Meteo. In Deutschland gleicht die App sie über Bright Sky mit der nächsten DWD-Station ab und zeigt amtliche Warnungen an. Den Wind interpoliert sie auf die gewählte Flughöhe, dazu kommt der geomagnetische K-Index. Jeden Wert prüft sie gegen die Grenzen der jeweiligen Drohne und gibt eine Handlungsempfehlung dazu.

Bei der Risikoeinstufung führt die App durch die Fragebögen zu Boden- und Luftrisiko und berechnet daraus den SAIL nach SORA.
