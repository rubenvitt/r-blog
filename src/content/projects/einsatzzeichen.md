---
title: einsatzzeichen
tagline: Regelbasierter Generator für taktische Zeichen der Gefahrenabwehr, der SVG und Canvas aus einer Beschreibung erzeugt.
area: bevoelkerungsschutz
kind: bibliothek
status: aktiv
repo: rubenvitt/einsatzzeichen
website: https://einsatzzeichen.rubeen.dev
stack: [TypeScript, SVG, Canvas, React, Web Components, MapLibre, QGIS]
license: MIT
featured: true
lastActivity: 2026-10-05
---

Taktische Zeichen gibt es meist als Sammlung einzelner SVG-Dateien. Das reicht, bis man eine Kombination braucht, die niemand gezeichnet hat. einsatzzeichen dreht das um: Eine Anwendung beschreibt, **was** dargestellt werden soll, und der Generator erzeugt daraus das Zeichen nach der BBK/BABZ-Systematik.

SVG und Canvas entstehen aus derselben internen Repräsentation statt aus zwei parallel gepflegten Renderern. Ungültige Kombinationen werden ausdrücklich abgelehnt, statt still ein plausibel aussehendes Zeichen zu liefern.

Das Projekt besteht aus acht Paketen mit einer festen Abhängigkeitsrichtung. `core` ist das eigentliche Produkt. Dazu kommen Ausgabekanäle für React, Web Components, MapLibre und QGIS, eine CLI und ein eigenes Prüfpaket, das die Zeichen gegen die Vorlagen belegt.

Im Einsatz ist der Generator unter anderem in [Lifeline Hub](/projekte/lifeline-hub).
