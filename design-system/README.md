# @rubeen/lagebild

React-Fassung des Designsystems „Lagebild“, damit Claude Design (claude.ai/design) mit den echten Bausteinen von rubeen.dev arbeiten kann. Der Blog selbst bleibt Astro; dieses Paket spiegelt Tokens und Komponenten von dort.

## Nach Claude Design synchronisieren

In einer lokalen, interaktiven Claude-Code-Session im Repo:

1. `cd design-system && npm install && npm run build`
2. `/design-sync` eingeben. Konfiguration, Vorschauen und Konventionen liegen in `.design-sync/`, der Lauf nutzt sie direkt.

Ändern sich `src/styles/global.css` oder die Astro-Komponenten, hier nachziehen (`src/styles.css`, `src/components.tsx`) und erneut `/design-sync` ausführen.
