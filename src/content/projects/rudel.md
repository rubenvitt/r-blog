---
title: Rudel
tagline: iOS-App zur Gesundheitsdokumentation für Hunde, die Prognosen immer als Spanne mit Konfidenz zeigt.
area: alltag
kind: ios
status: aktiv
repo: rubenvitt/rudel
stack: [Swift, SwiftUI, SwiftData, AlarmKit, Live Activities]
license: MIT
lastActivity: 2026-10-05
---

Rudel dokumentiert Medikamente und Intervalle, Läufigkeit, Symptome und Gewicht eines Hundes und erinnert lokal daran, was als Nächstes ansteht.

Beim Zyklus geht es um Tracking und Risiko. Die App beantwortet die Frage „Muss sie heute an der Leine bleiben?“. Wann der beste Deckzeitpunkt ist, beantwortet sie nicht. Prognosen erscheinen nie als einzelnes Datum, immer als Spanne mit Konfidenz. Die Beobachtungsfelder sind danach sortiert, wie leicht man sie im Alltag tatsächlich erheben kann.

Bei den Medikamentenplänen gibt es zwei Arten. **Zeitkritische** bekommen einen Alarm mit Countdown als Live Activity. **Vorsorge** wie Wurmkur und Zeckenschutz meldet sich nur per Mitteilung.

Die Rechenlogik steckt in einer eigenen Engine ohne SwiftUI. So lässt sie sich unabhängig von der App testen.
