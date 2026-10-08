---
title: Vault MCP
tagline: Remote-MCP-Server, der Claude kontrollierten Zugriff auf einen Obsidian-Vault gibt, abgesichert über OAuth mit Pocket ID.
area: ai-engineering
kind: server
status: aktiv
repo: rubenvitt/vault-mcp
stack: [TypeScript, MCP, SQLite FTS5, OAuth, Docker]
lastActivity: 2026-10-03
---

Vault MCP gibt Claude auf claude.ai, im Desktop und in Claude Code Zugriff auf meinen Obsidian-Vault: suchen, lesen, Notizen im Posteingang anlegen und bestehende Notizen gezielt bearbeiten.

Die Werkzeuge sind bewusst klein geschnitten. Lesen und Suchen sind frei, Anlegen braucht den Scope `vault:capture`, Bearbeiten den Scope `vault:edit`. Bearbeitet wird nie die ganze Datei, sondern eine exakte Textstelle, ein Anhang unter einer Überschrift oder ein einzelnes Frontmatter-Feld.

Der Server ist ein reiner OAuth-Resource-Server. Pocket ID ist der Authorization Server, Claude weist sich über ein Client-Metadata-Dokument aus. Die Volltextsuche läuft über SQLite FTS5 mit Filtern auf Tag, Ordner und Notiztyp.
