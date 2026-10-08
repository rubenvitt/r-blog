---
title: Rudel
tagline: iOS-App zur Gesundheitsdokumentation für Hunde, deren Prognosen immer als Spanne mit Konfidenz erscheinen.
area: alltag
kind: ios
status: aktiv
repo: rubenvitt/rudel
stack: [Swift, SwiftUI, SwiftData, AlarmKit, Live Activities]
license: MIT
lastActivity: 2026-10-05
---

Rudel dokumentiert Medikamente und Intervalle, Läufigkeit, Symptome und Gewicht eines Hundes und erinnert lokal daran, was als Nächstes ansteht.

Beim Zyklus liegt der Schwerpunkt auf Tracking und Risiko. Die App beantwortet „Muss sie heute an der Leine bleiben?“ und nicht „Wann ist der beste Deckzeitpunkt?“. Prognosen erscheinen nie als einzelnes Datum, sondern als Spanne mit Konfidenz. Die Beobachtungsfelder sind danach sortiert, wie leicht sie sich im Alltag tatsächlich erheben lassen.

Medikamentenpläne sind entweder **zeitkritisch** und bekommen einen Alarm mit Countdown als Live Activity, oder sie sind **Vorsorge** wie Wurmkur und Zeckenschutz und melden sich nur per Mitteilung.

Die Rechenlogik steckt in einer eigenen Engine ohne SwiftUI, die sich unabhängig von der App testen lässt.
