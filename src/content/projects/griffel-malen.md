---
title: Griffel Malen nach Zahlen
tagline: iPad-App, die aus einem Foto eine Malvorlage mit nummerierten Feldern macht, die man mit dem Apple Pencil Strich für Strich ausmalt statt Felder anzutippen.
area: alltag
kind: ios
status: aktiv
repo: rubenvitt/malen-nach-zahlen
stack: [Swift, SwiftUI, UIKit, StoreKit, XcodeGen, fastlane]
license: MIT
lastActivity: 2026-11-08
---

Aus einem Foto entsteht eine Vorlage aus Feldern mit dünnem schwarzem Rand und Nummern. Wie viele Farben und wie fein die Felder werden, stellt man beim Erstellen mit einer Live-Vorschau ein. Dann malt man mit dem Apple Pencil, richtig mit Strichen statt durch Antippen. Der Übermalschutz hält einen Strich in dem Feld, in dem er ansetzt, und lässt sich im Spiel abschalten.

Die Umwandlung vom Foto zur Vorlage, also Farben reduzieren, Felder bilden und Plätze für die Nummern finden, steckt in einem eigenen Swift-Package mit Tests. Ein Web-Prototyp im Repo dient als Referenz für den Algorithmus.

Die Fotos verlassen das iPad nicht, die App läuft offline und sammelt keine Daten. Vier Motive und ein eigenes Foto sind gratis, ein einmaliger Kauf schaltet weitere eigene Fotos frei. Texte gibt es in neun Sprachen, Builds, Screenshots und Einreichung laufen wie bei Griffel Sudoku über GitHub-Workflows mit fastlane.
