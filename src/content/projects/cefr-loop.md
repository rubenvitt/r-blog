---
title: cefr-loop
tagline: Demo, in der ein Entscheidungsmodell das Sprachniveau eines Textes misst und ein Sprachmodell ihn so lange vereinfacht, bis es passt.
area: ai-engineering
kind: demo
status: stabil
repo: rubenvitt/cefr-loop
stack: [Python, Claude, Jev]
lastActivity: 2026-09-18
---

cefr-loop zeigt, wie ein Entscheidungsmodell und ein Sprachmodell zusammenarbeiten, jedes dort, wo es stark ist:

| Aufgabe | Modell |
|---|---|
| **Entscheiden:** Wie schwer ist der Text? | Entscheidungsmodell, Score über A1 bis C2 |
| **Erzeugen:** Schreib ihn einfacher. | Claude |
| **Prüfen:** Ist er jetzt einfacher? | Entscheidungsmodell, dieselbe Frage |

Der Prüfschritt kostet einen Bruchteil des Erzeugens. Genau deshalb kann er bei jedem Durchlauf mitlaufen, statt eingespart zu werden.

Die Oberfläche zeigt bei jedem Urteil die vollständige Verteilung über alle sechs Stufen. Ein Absatz zwischen B2 und C1 sieht hier auch so aus, statt zu einer einzelnen Behauptung zusammenzufallen. Was der Bau darüber hinaus gezeigt hat, steht im Repo in `ERKENNTNISSE.md`.
