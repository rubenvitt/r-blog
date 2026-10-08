---
title: einsatzzeichen
tagline: Regelbasierter Generator für taktische Zeichen der Gefahrenabwehr, der SVG und Canvas aus einer Beschreibung erzeugt.
area: bevoelkerungsschutz
kind: bibliothek
status: aktiv
repo: rubenvitt/einsatzzeichen
website: https://einsatzzeichen.dev
screenshot: ./_images/einsatzzeichen/screenshot.webp
screenshotAlt: "Baukasten von einsatzzeichen: Grundform-Auswahl links, rechts die Vorschau des zusammengesetzten Zeichens in mehreren Größen"
screenshotFocus: rechts
stack: [TypeScript, SVG, Canvas, React, Web Components, MapLibre, QGIS]
license: MIT
featured: true
lastActivity: 2026-10-05
---

Taktische Zeichen gibt es meistens als Sammlung einzelner SVG-Dateien. Das reicht, bis man eine Kombination braucht, die noch niemand gezeichnet hat. einsatzzeichen dreht das um. Die Anwendung beschreibt, **was** dargestellt werden soll, und der Generator baut daraus das Zeichen nach der BBK/BABZ-Systematik.

SVG und Canvas entstehen aus derselben internen Repräsentation. Zwei Renderer, die parallel gepflegt werden müssen, gibt es also nicht. Ungültige Kombinationen lehnt der Generator ausdrücklich ab, anstatt still ein Zeichen zu liefern, das nur plausibel aussieht.

Das Projekt besteht aus acht Paketen mit fester Abhängigkeitsrichtung. Das eigentliche Produkt ist `core`. Drumherum gibt es Ausgabekanäle für React, Web Components, MapLibre und QGIS, eine CLI und ein eigenes Prüfpaket, das die Zeichen gegen die Vorlagen belegt.

Eingesetzt wird der Generator unter anderem in [Lifeline Hub](/projekte/lifeline-hub).
