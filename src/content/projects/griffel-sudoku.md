---
title: Griffel Sudoku
tagline: Sudoku für iPad und iPhone, auf dem iPad mit dem Apple Pencil direkt in die Zellen geschrieben, mit unendlich vielen Rätseln und Tipps, die den nächsten Schritt erklären.
area: alltag
kind: ios
status: aktiv
repo: rubenvitt/sudoku
stack: [Swift, SwiftUI, XcodeGen, fastlane]
license: MIT
lastActivity: 2026-10-22
---

Auf dem iPad schreibt man Ziffern und Notizen mit dem Apple Pencil direkt ins Feld, wie auf Papier. Auf dem iPhone geht es über eine Zifferntastatur, die zeigt, wie oft jede Ziffer noch fehlt. Fehler markiert die App erst, wenn man „Prüfen“ tippt.

Die Rätsel entstehen auf dem Gerät und haben genau eine Lösung. Die vier Stufen von Leicht bis Experte richten sich nach den Techniken, die man zum Lösen braucht, raten muss man nie. Hängt man fest, zeigt der Tipp den nächsten logischen Schritt und erklärt ihn, vom einfachen Einer bis zu X-Wing und Schwertfisch.

Generator, Löser, Bewerter und Tipp stecken in einem eigenen Swift-Package ohne Oberfläche, das sich mit `swift test` prüfen lässt. Die App speichert jeden Zug sofort, läuft komplett offline und sammelt keine Daten. Screenshots, Texte und Builds für den App Store erzeugen GitHub-Workflows mit fastlane.
