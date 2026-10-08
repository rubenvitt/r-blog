---
title: PR Radar
tagline: Native macOS-App für Pull Requests über viele GitHub-Repos, mit Pipelines, Auto-Merge und Release-Übersicht.
area: werkzeuge
kind: desktop
status: aktiv
repo: rubenvitt/pr-radar
stack: [Rust, GPUI, GitHub GraphQL]
license: Apache-2.0
lastActivity: 2026-10-06
---

Wer viele Repos betreut, hat schnell zwanzig Tabs mit Pull Requests offen. PR Radar bündelt sie in einem Fenster und spricht GitHub direkt an, ohne eigenen Server.

- **Offene PRs** gruppiert nach Repo oder flach, mit Review-Status, Konflikten, Labels und Diff-Größe.
- **Pipelines** pro PR als Ampel, aufklappbar bis zum einzelnen Check.
- **Auto-Merge** mit einem Klick. Angeboten werden nur Methoden, die Repo-Einstellungen und Rulesets des Ziel-Branches auch erlauben. Lehnt GitHub einen Merge kurzzeitig ab, versucht die App es erneut, immer nur auf dem geprüften Commit.
- **Zuletzt gemergt** als Timeline und **Releases** aller Repos.

Die App pollt per GraphQL mit wenigen Requests für alle Repos und wird schneller, solange irgendwo eine Pipeline läuft.
