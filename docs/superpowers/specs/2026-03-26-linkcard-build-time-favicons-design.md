# LinkCard Build-Time Favicons

## Problem

Die `LinkCard`-Komponente fetcht externe HTML-Seiten zur Build-Time, um Titel und Description zu extrahieren. Die Favicon-Bilder werden aber weiterhin zur Laufzeit von externen Domains geladen — das verursacht zusaetzliche HTTP-Requests und verlangsamt die Seite.

## Loesung

Favicons ebenfalls zur Build-Time herunterladen und als Base64-Data-URIs direkt ins HTML einbetten. Ein dateibasierter Cache beschleunigt wiederholte lokale Builds.

## Architektur

### Neue Datei: `src/lib/link-card-cache.ts`

Zentrale Utility fuer externe LinkCard-Metadaten:

```ts
interface ExternalLinkCardMetadata {
  title: string;
  description: string;
  faviconDataUri: string | null;
  fetchedAt: string; // ISO 8601
}

// Laedt Metadaten fuer eine externe URL, nutzt Cache wenn vorhanden und nicht abgelaufen
async function fetchExternalMetadata(url: string): Promise<ExternalLinkCardMetadata>
```

**Verantwortlichkeiten:**
- HTML der externen Seite fetchen
- OG-Title, OG-Description, Favicon-URL extrahieren (Logik aus LinkCard.astro hierhin verschoben)
- Favicon-Bild separat fetchen und zu `data:image/<type>;base64,...` konvertieren
- Ergebnis in `.link-card-cache.json` cachen (TTL: 7 Tage)
- Bei Fehler: graceful fallback (leere Strings / null fuer faviconDataUri)

**Favicon-Aufloesung:**
- Favicon-URL wird aus `<link rel="icon">` im HTML extrahiert
- Fallback: `<origin>/favicon.ico` wenn kein `<link>` Tag gefunden (wie bisher)
- MIME-Type wird aus dem `Content-Type` Response-Header uebernommen, Fallback `image/x-icon`
- Maximale Favicon-Groesse: 100 KB — groessere Responses werden verworfen (faviconDataUri = null)

**Cache-Verhalten:**
- Cache-Datei: `.link-card-cache.json` im Projekt-Root (gitignored — muss in `.gitignore` eingetragen werden)
- In-Memory `Map` ist die autoritative Quelle waehrend des Builds, wird einmal beim Start von Disk geladen
- Disk-Flush nach jedem neuen Eintrag (write-through), damit bei Build-Abbruch nichts verloren geht
- TTL: 7 Tage — abgelaufene Eintraege werden beim naechsten Build neu gefetcht
- CI-Builds: Cache-Datei existiert dort nicht (gitignored), daher wird immer frisch gefetcht

### Cache-Format

```json
{
  "https://example.com": {
    "title": "Example Site",
    "description": "A description",
    "faviconDataUri": "data:image/png;base64,iVBOR...",
    "fetchedAt": "2026-03-26T14:30:00.000Z"
  }
}
```

### Aenderung: `LinkCard.astro`

Die Komponente wird schlanker:

- **Entfernt:** `pickFirstMatch()`, `extractFaviconUrl()`, der gesamte `fetch`-Block fuer externe Links (Zeilen 13-116)
- **Neu:** Aufruf von `fetchExternalMetadata(url)` fuer externe Links
- **Beibehalten:** Interne Link-Aufloesung via `getInternalLinkCardMetadata()`, HTML/CSS-Template
- **Props-Overrides:** `title` und `description` Props ueberschreiben weiterhin die gefetchten Werte (Caller-Verantwortung, nicht Cache)
- `<img src>` bekommt die Data-URI direkt statt einer externen URL

### Was sich nicht aendert

- `src/lib/link-card-metadata.ts` — interne Links
- `src/lib/site.ts` — Site-Konstanten
- HTML-Struktur und CSS der LinkCard-Komponente
- Fallback-Verhalten (Text-Label wenn kein Favicon)

## Datenfluss

```
Build-Time:
  MDX rendert <LinkCard url="https://...">
    → LinkCard.astro Frontmatter
      → Interner Link? → getInternalLinkCardMetadata() (unveraendert)
      → Externer Link? → fetchExternalMetadata()
        → Cache-Hit + frisch? → Cached-Daten zurueckgeben
        → Cache-Miss/abgelaufen?
          → fetch(url) → HTML parsen → Title, Description extrahieren
          → Favicon-URL aus HTML extrahieren
          → fetch(faviconUrl) → Response-Body als Base64 kodieren
          → In Cache schreiben + Daten zurueckgeben
    → Template rendert mit Data-URI im <img src>

Runtime:
  Keine externen Requests. Alles inline.
```

## Fehlerbehandlung

- Externe Seite nicht erreichbar: Title-Fallback auf Hostname, Description leer, Favicon null
- Favicon nicht ladbar: faviconDataUri = null, Fallback-Label wird angezeigt
- Cache-Datei nicht lesbar: Wird ignoriert, alles wird neu gefetcht
- Cache-Datei nicht schreibbar: Wird ignoriert, Build laeuft trotzdem durch

## Entscheidungen

| Entscheidung | Gewaehlt | Alternativen | Grund |
|---|---|---|---|
| Favicon-Format | Data-URI (Base64) | Lokale Dateien in public/, sharp-Optimierung | Kein File-Management, bei 32x32 kein Groessennachteil |
| Cache-Speicher | JSON-Datei (gitignored) | In-Memory only, im Repo committet | Schnelle lokale Rebuilds, keine Build-Artefakte im Repo |
| Cache-TTL | 7 Tage | Kein TTL, kuerzere TTL | Balance zwischen Frische und Build-Geschwindigkeit |
| Favicon-Max-Groesse | 100 KB | Kein Limit, kleineres Limit | Schutz vor aufgeblaehtem HTML durch grosse SVGs/PNGs |
| MIME-Type-Erkennung | Content-Type Header | URL-Extension, Magic Bytes | Einfachste und zuverlaessigste Methode |
| Concurrency | In-Memory Map + write-through | Lock/Queue, last-write-wins | Einfach, keine Race-Conditions, kein Datenverlust |
