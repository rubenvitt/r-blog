---
title: Plan from Issue
tagline: Macht aus einer User Story oder einem GitHub-Issue einen strukturierten, gestreamten Implementierungsplan.
area: ai-engineering
kind: demo
status: stabil
repo: rubenvitt/plan-from-issue
app: https://plan-from-issue.pages.dev
screenshot: ./_images/plan-from-issue/screenshot.webp
screenshotAlt: "Plan from Issue: generierter Implementierungsplan mit Zusammenfassung, betroffenen Bereichen, Risiken und Umsetzungsschritten"
stack: [Next.js, AI SDK, Zod, Tailwind CSS]
posts: [ai-systems-architecture]
lastActivity: 2026-03-19
---

Plan from Issue nimmt eine Ticket-Beschreibung als Text oder per GitHub-Issue-URL und erzeugt daraus einen Implementierungsplan: Zusammenfassung, betroffene Bereiche, Risiken mit Schweregrad, Umsetzungsschritte, Testideen und eine Freigabe-Schwelle.

Der Plan wird als JSON gestreamt und gegen ein Schema validiert, nicht als Fließtext. Danach lässt er sich auf einer Arbeitsfläche bearbeiten. Hat ein Plan Frontend-Bezug, erzeugt die App zusätzlich eine UI-Vorschau.

Der Provider ist frei wählbar, solange er OpenAI-kompatibel ist.
