---
title: mbar
tagline: Statusleiste und Menüleisten-Ersatz für macOS in Rust, kompatibel zu SketchyBar, mit Metal-Renderer und Lua-Konfiguration.
area: werkzeuge
kind: desktop
status: alpha
repo: rubenvitt/mbar
stack: [Rust, Metal, Lua]
license: GPL-3.0
featured: true
lastActivity: 2026-10-08
---

mbar implementiert die Befehlssprache und das Verhalten von [SketchyBar](https://github.com/FelixKratz/SketchyBar) neu. Bestehende `sketchybarrc`-Dateien und Plugin-Skripte laufen weiter.

Was dazukommt:

- **Lua 5.4 im Prozess.** Event-Handler laufen im Daemon, es wird nicht für jedes Event, jeden Klick oder jeden Update-Takt eine Shell gestartet.
- **Native Datenquellen** für Uhr, CPU, Speicher, Akku, Lautstärke, WLAN, Netzwerk, Festplatte, aktive App und Medien.
- **Metal-Renderer** und ein natives Anwendungsmenü.

> Stand: frühe Entwicklung. Der plattformunabhängige Kern ist unter Linux getestet, die macOS-Schicht baut und besteht ihre Tests in der CI. Auf echter Hardware ist mbar noch kaum gelaufen.
