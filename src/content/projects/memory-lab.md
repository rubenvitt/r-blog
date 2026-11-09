---
title: Memory Lab
tagline: Experiment zur Frage, was von einer Nachricht übrig bleibt, wenn jemand den Chat löscht und der Agent ein Gedächtnis hat, mit Demo und allen Rohantworten im Repo.
area: ai-engineering
kind: demo
status: stabil
repo: rubenvitt/memory-lab
app: https://rubenvitt.github.io/memory-lab/
stack: [Node.js, JavaScript, Mem0-Prompt]
screenshot: ./_images/memory-lab/screenshot.webp
screenshotAlt: "Memory Lab: eine Nachricht mit einer Diagnose und ihre vier Kopien in Chat, Gedächtnis, Protokoll und Suchindex, von denen nur der Chat beim Löschen verschwindet"
license: Apache-2.0
posts: [memory-datenarchitektur]
lastActivity: 2026-11-08
---

Ein Auskunfts-Assistent einer erfundenen Stadtbücherei bekommt ein Gedächtnis. Gemessen wird, was davon bleibt, wenn die Person einen Chat löscht. Aus einer Nachricht entstehen abgeleitete Kopien: ein Eintrag im Gedächtnis, eine Suchanfrage im Protokoll, ein Eintrag im Suchindex. „Chat löschen“ erreicht nur die Kopien, die einen eigenen Löschpfad haben.

Verglichen werden zwei Stellschrauben: eine Regel für alle abgeleiteten Daten oder eine je Datenart, und Kopien mit oder ohne Herkunft samt Löschkaskade. Die Herkunft entscheidet, ob eine Angabe wie eine Diagnose aus Gedächtnis, Suchindex und Zusammenfassung verschwindet. Die Regel je Datenart entscheidet, ob dabei sonst etwas verloren geht. Ganz weg ist sie trotzdem nicht: Ein ausdrücklich gespeicherter Wunsch bleibt sichtbar und einzeln widerrufbar stehen, und im Klartext-Protokoll bleibt die Suchanfrage in jeder Variante. Erst eine Verschlüsselung pro Chat macht sie unlesbar, und die ist im Experiment nur simuliert. Dazu kommen gemessene Läufe mit erfundenen sensiblen Angaben, einmal mit dem Original-Prompt von Mem0 und einmal mit einem eigenen, der solche Angaben ohne ausdrücklichen Wunsch nicht speichert.

Erwartungen und Prompts sind vor den Läufen per Git-Tag festgehalten, alle Rohantworten liegen im Repo. Die Demo zeigt die Kopien einer Nachricht und was der Klick auf „Chat löschen“ jeweils davon erreicht.
