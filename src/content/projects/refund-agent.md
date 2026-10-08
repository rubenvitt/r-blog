---
title: Support Agent Reliability Lab
tagline: Werkbank, die zeigt, warum eine plausible Agent-Antwort kein Beweis dafür ist, dass der richtige Tool-Call passiert ist.
area: ai-engineering
kind: demo
status: stabil
repo: rubenvitt/refund-agent
app: https://refund-agent.pages.dev
stack: [Next.js, AI SDK, Zod, Vitest]
posts: [ai-evals-ci-pipeline, tools-sind-keine-prompts, human-in-the-loop]
lastActivity: 2026-04-28
---

Ein Support-Agent sagt „Ihre Erstattung ist veranlasst.“ Aber wurde `refund_order` wirklich aufgerufen? Das Reliability Lab macht genau diese Lücke sichtbar.

- **Orchestrator-Routing:** Ein zentraler Router delegiert an spezialisierte Agenten.
- **Tool-Contracts:** Jeder Agent hat Werkzeuge mit expliziten Schemas.
- **Approval-Gates:** Destruktive Aktionen wie eine Erstattung brauchen menschliche Freigabe.
- **False-Success-Erkennung:** Behauptet die Antwort einen Erfolg, ohne dass der Tool-Call stattfand, schlägt ein Alarm an.
- **Drift:** Prompts und Tool-Beschreibungen sind editierbar, damit man sieht, wie kleine Änderungen das Routing brechen.
- **Deterministische Evals:** 20 Fälle, bewertet nach Route, Tools, Freigabe, Seiteneffekten und erkannter Abweichung.

Das Lab läuft bewusst nur lokal und ist das Begleitprojekt zu mehreren Blogposts.
