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

Flugmappe ersetzt die Papier-Checkliste bei Drohneneinsätzen. Jeder Einsatz läuft durch vier Phasen: Einsatzdaten, Vorflugkontrolle, Flüge und Nachbereitung mit PDF-Export.

Die Wetterbewertung holt Daten von Open-Meteo, gleicht sie in Deutschland über Bright Sky mit der nächsten DWD-Station ab und zeigt amtliche Warnungen. Wind wird auf die gewählte Flughöhe interpoliert, dazu kommt der geomagnetische K-Index. Jeder Wert wird gegen drohnenspezifische Grenzen geprüft und mit einer Handlungsempfehlung versehen.

Für die Risikoeinstufung führt die App durch die Fragebögen zu Boden- und Luftrisiko und berechnet daraus den SAIL nach SORA.
