---
title: Moonlander-Keymap
tagline: Mein Tastaturlayout für den ZSA Moonlander als begehbare 3D-Ansicht, dazu eine reproduzierbare Build- und Flash-Pipeline für die Firmware.
area: werkzeuge
kind: web
status: aktiv
repo: rubenvitt/zsa-layout
website: https://keymap.rubeen.dev
stack: [QMK, C, Docker, three.js]
screenshot: ./_images/zsa-layout/screenshot.webp
screenshotAlt: "Moonlander-Keymap: beide Hälften des Moonlander in 3D, Tasten nach Funktion farbig hinterleuchtet, oben die Reiter für die sechs Layer"
lastActivity: 2026-10-23
---

Ich tippe auf einem ZSA Moonlander mit [Bone](https://neo-layout.org/Layouts/bone/) als Basislayout, einer Variante aus der Neo-Familie. Dazu kommen Layer für QWERTZ, Symbole und F-Tasten, Navigation und Numpad, Maus und Medien sowie einen eigenen für IDE-Shortcuts.

Die 3D-Ansicht liest die `keymap.c` direkt ein. Jede Taste ist nach ihrer Funktion eingefärbt, ein Klick zeigt, was sie auf allen Layern tut. So muss ich mir das Layout nicht mehr in Oryx zusammensuchen.

Das Layout entsteht in Oryx, gebaut wird es aber selbst: Ein Docker-Container kompiliert die Firmware gegen den QMK-Fork von ZSA, `zapp` flasht sie aufs Board. `make flash-auto` erkennt dabei über USB, ob revA oder revB angeschlossen ist.
