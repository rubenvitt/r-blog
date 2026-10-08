---
title: Support Agent Reliability Lab
tagline: Werkbank, die zeigt, warum eine plausible Agent-Antwort kein Beweis dafür ist, dass der richtige Tool-Call passiert ist.
area: ai-engineering
kind: demo
status: stabil
repo: rubenvitt/refund-agent
app: https://refund-agent.pages.dev
screenshot: ./_images/refund-agent/screenshot.webp
screenshotAlt: "Reliability Lab: Chat mit dem Support-Agenten links, rechts Routing-Entscheidung und der ausgeführte Tool-Call lookup_order"
stack: [Next.js, AI SDK, Zod, Vitest]
posts: [ai-evals-ci-pipeline, tools-sind-keine-prompts, human-in-the-loop]
lastActivity: 2026-04-28
---

Ein Support-Agent sagt „Ihre Erstattung ist veranlasst.“ Aber wurde `refund_order` wirklich aufgerufen? Genau diese Lücke macht das Reliability Lab sichtbar.

Ein zentraler Router delegiert an spezialisierte Agenten. Jeder Agent hat seine Tools mit expliziten Schemas, also echte Tool-Contracts. Destruktive Aktionen wie eine Erstattung brauchen eine menschliche Freigabe. Und behauptet die Antwort einen Erfolg, obwohl der Tool-Call nie stattgefunden hat, schlägt ein Alarm an.

Prompts und Tool-Beschreibungen kann man im Lab bearbeiten. So sieht man, wie schon kleine Änderungen das Routing brechen. Dazu gibt es 20 deterministische Evals, bewertet nach Route, Tools, Freigabe, Seiteneffekten und erkannter Abweichung.

Das Lab läuft absichtlich nur lokal. Es ist das Begleitprojekt zu mehreren Blogposts.
