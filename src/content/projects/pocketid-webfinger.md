---
title: PocketID WebFinger
tagline: Kleiner Sidecar-Dienst, der Pocket ID um einen WebFinger-Endpunkt ergänzt, etwa für die OIDC-Anmeldung bei Tailscale.
area: werkzeuge
kind: server
status: stabil
repo: rubenvitt/pocketid-webfinger
stack: [Go, Docker]
license: MIT
lastActivity: 2026-02-06
---

[Pocket ID](https://github.com/pocket-id/pocket-id) bringt keinen WebFinger-Endpunkt nach RFC 7033 mit. Dienste wie Tailscale brauchen ihn aber, um den Identity Provider einer Domain zu finden.

Dieser Dienst schließt die Lücke als leichtgewichtiger Container neben Pocket ID. Konfiguriert wird er über zwei Umgebungsvariablen, das Image liegt fertig in der GitHub Container Registry. Im Repo steht außerdem, wie man ihn per Path-Routing unter derselben Domain wie Pocket ID betreibt.
