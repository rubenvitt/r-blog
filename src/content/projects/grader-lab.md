---
title: Grader Lab
tagline: Experiment und Werkbank zur Frage, welcher Eval-Grader welchen Fehler findet, mit absichtlich eingebauten Fehlern in Release Notes und allen Rohantworten im Repo.
area: ai-engineering
kind: demo
status: stabil
repo: rubenvitt/grader-lab
app: https://rubenvitt.github.io/grader-lab/
stack: [Node.js, JavaScript, LLM-as-a-Judge, Playwright]
screenshot: ./_images/grader-lab/screenshot.webp
screenshotAlt: "Grader Lab: links Release Notes mit eingebautem Fehler „Geister-PR“, rechts die elf Grader, von denen drei anschlagen"
license: Apache-2.0
posts: [wer-prueft-den-grader]
lastActivity: 2026-11-01
---

Ein Grader ist selbst ein System, das getestet werden muss. Grader Lab dreht deshalb die Frage um: Statt einen Agenten zu prüfen, baut es mit Absicht Fehler in korrekte Release Notes einer fiktiven Bibliothek ein und misst, welcher von elf Gradern welche der zwölf Fehlerarten findet. Code-Grader, Modell-Judges und ein paarweiser Vergleich treten gegeneinander an.

Das Ergebnis: Kein Grader findet alle Fehlerarten. Der Referenz-Judge findet alles im Text, aber nichts, was nur in Sandbox oder Ablauf sichtbar wird, und Werte aus Mutationen übertragen sich schlecht auf echte Läufe des Agenten. Prompts und Rubric wurden vor dem ersten Lauf eingefroren, alle Rohantworten liegen im Repo, und `npm run report` rechnet jede Zahl daraus ohne einen einzigen Modellaufruf nach.

Die Demo ist eine statische Werkbank: Fehler per Klick einbauen und sehen, welcher Grader anschlägt. Die Code-Grader laufen direkt im Browser, die Modell-Judges zeigen aufgezeichnete Urteile oder prüfen mit eigenem API-Key live.
