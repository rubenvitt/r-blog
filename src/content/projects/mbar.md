---
title: mbar
tagline: Statusleiste und Menüleisten-Ersatz für macOS in Rust, kompatibel zu SketchyBar, mit Metal-Renderer und Lua-Konfiguration.
area: werkzeuge
kind: desktop
status: alpha
repo: rubenvitt/mbar
stack: [Rust, Metal, Lua]
screenshot: ./_images/mbar/screenshot.webp
screenshotIllustration: true
screenshotAlt: "Illustration: mbar als Statusleiste am oberen Bildschirmrand mit Workspaces, aktiver App, Medien, CPU, RAM, WLAN, Lautstärke, Akku und Uhrzeit"
license: GPL-3.0
featured: true
lastActivity: 2026-10-08
---

mbar implementiert die Befehlssprache und das Verhalten von [SketchyBar](https://github.com/FelixKratz/SketchyBar) neu. Bestehende `sketchybarrc`-Dateien und Plugin-Skripte laufen also weiter.

Dazu kommt einiges. Lua 5.4 läuft direkt im Prozess, die Event-Handler also im Daemon. mbar startet nicht für jedes Event, jeden Klick oder jeden Update-Takt eine Shell. Uhr, CPU, Speicher, Akku, Lautstärke, WLAN, Netzwerk, Festplatte, aktive App und Medien kommen aus nativen Datenquellen. Gerendert wird mit Metal, und ein natives Anwendungsmenü gibt es auch.

> Stand: frühe Entwicklung. Der plattformunabhängige Kern ist unter Linux getestet, die macOS-Schicht baut und besteht ihre Tests in der CI. Auf echter Hardware ist mbar bisher kaum gelaufen.
