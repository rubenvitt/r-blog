---
title: Sani-Lernzettel
tagline: Lernzettel zur Sanitätsausbildung im Katastrophenschutz, mit Normalwerten, Untersuchungsschemata, Krankheitsbildern, Glossar und Karteikarten.
area: bevoelkerungsschutz
kind: web
status: aktiv
repo: rubenvitt/san-website
app: https://san-website-chi.vercel.app/
stack: [Next.js, React, TypeScript, Tailwind CSS]
screenshot: ./_images/sani-lernzettel/screenshot.webp
screenshotAlt: "Sani-Lernzettel: Startseite mit dem (c)ABCDE-Schema in großen Buchstaben, den Normalwerten für Erwachsene und der Themenliste"
order: 1
lastActivity: 2026-11-23
---

Eine Website zum Nachschlagen und Wiederholen für die Sanitätsausbildung: (c)ABCDE und SAMPLER, Atmung, Herz-Kreislauf, Abdomen und Prüfungsvorbereitung, jeweils als eigenes Thema mit Abschnitten, Werten, Tabellen, Schritten, Krankheitsbildern und Quizfragen.

Fachbegriffe und Abkürzungen stehen in einem gemeinsamen Glossar. Daraus entstehen die Glossarseite mit Suche, die Karteikarten zum Abfragen und die Begriffs-Links im Fließtext, die eine Kurzerklärung zeigen.

Alle Inhalte liegen als typisierte Daten im Repo. Ein Verweis auf einen Begriff, den das Glossar nicht kennt, lässt den Build fehlschlagen, damit keine toten Links entstehen.
