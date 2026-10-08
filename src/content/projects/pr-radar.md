---
title: PR Radar
tagline: Native macOS-App für Pull Requests über viele GitHub-Repos, mit Pipelines, Auto-Merge und Release-Übersicht.
area: werkzeuge
kind: desktop
status: aktiv
repo: rubenvitt/pr-radar
stack: [Rust, GPUI, GitHub GraphQL]
screenshot: ./_images/pr-radar/screenshot.webp
screenshotIllustration: true
screenshotAlt: "Illustration: PR Radar mit offenen Pull Requests nach Repo gruppiert, aufgeklappten Checks, Auto-Merge und Zeitleiste der zuletzt gemergten PRs"
license: Apache-2.0
lastActivity: 2026-10-06
---

Wer viele Repos betreut, hat schnell zwanzig Tabs mit Pull Requests offen. PR Radar holt sie in ein Fenster und spricht GitHub direkt an. Einen eigenen Server braucht es dafür nicht.

- **Offene PRs** nach Repo gruppiert oder als flache Liste, mit Review-Status, Konflikten, Labels und Diff-Größe.
- **Pipelines** pro PR als Ampel, aufklappbar bis zum einzelnen Check.
- **Auto-Merge** mit einem Klick.
- **Zuletzt gemergt** als Timeline und **Releases** aller Repos.

Beim Auto-Merge bietet die App nur die Methoden an, die Repo-Einstellungen und Rulesets des Ziel-Branches auch erlauben. Lehnt GitHub einen Merge kurzzeitig ab, versucht sie es erneut, und zwar immer nur auf dem geprüften Commit.

Abgefragt wird per GraphQL, mit wenigen Requests für alle Repos. Solange irgendwo eine Pipeline läuft, pollt die App schneller.
