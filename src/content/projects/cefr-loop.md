---
title: cefr-loop
tagline: Demo, in der ein Entscheidungsmodell das Sprachniveau eines Textes misst und ein Sprachmodell ihn so lange vereinfacht, bis es passt.
area: ai-engineering
kind: demo
status: stabil
repo: rubenvitt/cefr-loop
stack: [Python, Claude, Jev]
screenshot: ./_images/cefr-loop/screenshot.webp
screenshotAlt: "cefr-loop: Umschreibung des Sprachmodells und Einstufung des Entscheidungsmodells mit Verteilung über A1 bis C2"
externalPosts:
  - title: 'Jev und System One Models: wie Formulare und UIs intelligent werden können'
    url: https://www.innoq.com/de/blog/2026/09/jev-system-one-models-intelligente-formulare-und-uis/
    publisher: INNOQ
    date: 2026-09-23
lastActivity: 2026-09-18
---

In cefr-loop arbeiten ein Entscheidungsmodell und ein Sprachmodell zusammen. Jedes übernimmt den Teil, den es gut kann:

| Aufgabe | Modell |
|---|---|
| **Entscheiden:** Wie schwer ist der Text? | Entscheidungsmodell, Score über A1 bis C2 |
| **Erzeugen:** Schreib ihn einfacher. | Claude |
| **Prüfen:** Ist er jetzt einfacher? | Entscheidungsmodell, dieselbe Frage |

Der Prüfschritt kostet nur einen Bruchteil des Erzeugens. Deshalb kann er bei jedem Durchlauf mitlaufen, sparen muss man ihn sich nicht.

Bei jedem Urteil zeigt die Oberfläche die komplette Verteilung über alle sechs Stufen. Liegt ein Absatz zwischen B2 und C1, sieht man das auch, und er wird nicht auf eine einzelne Stufe plattgedrückt. Was ich beim Bauen sonst noch gelernt habe, steht im Repo in `ERKENNTNISSE.md`.
