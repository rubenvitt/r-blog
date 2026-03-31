# ProjectCard Widget Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eine wiederverwendbare `ProjectCard`-Komponente bauen, die Projekte mit App- und GitHub-Links als Split-Card darstellt.

**Architecture:** Einzelne Astro-Komponente mit Props fuer Titel, Beschreibung, App-URL und GitHub-URL. Split-Card-Layout mit Header (Info) und Footer (zwei klickbare Link-Haelften). Styling via Tailwind und bestehende CSS Custom Properties.

**Tech Stack:** Astro, Tailwind CSS 4, SVG-Icons inline

---

### Task 1: ProjectCard-Komponente erstellen

**Files:**
- Create: `src/components/widgets/ProjectCard.astro`

- [ ] **Step 1: Komponente mit Props-Interface erstellen**

```astro
---
interface Props {
    title: string;
    description: string;
    appUrl?: string;
    githubUrl?: string;
}

const { title, description, appUrl, githubUrl } = Astro.props;

function extractHostname(url: string): string {
    try {
        return new URL(url).hostname.replace('www.', '');
    } catch {
        return url;
    }
}

function extractRepoPath(url: string): string {
    try {
        const pathname = new URL(url).pathname.replace(/^\//, '').replace(/\/$/, '');
        return pathname || url;
    } catch {
        return url;
    }
}

const appHostname = appUrl ? extractHostname(appUrl) : '';
const repoPath = githubUrl ? extractRepoPath(githubUrl) : '';
const hasBothLinks = !!(appUrl && githubUrl);
---

<div class="not-prose my-4 overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-bg-secondary) transition-all hover:border-(--color-accent)/30 hover:shadow-sm">
    <!-- Header -->
    <div class:list={["px-5 py-4", { "border-b border-(--color-border)": appUrl || githubUrl }]}>
        <div class="font-medium text-(--color-text)">{title}</div>
        <div class="mt-1 text-sm text-(--color-text-secondary)">{description}</div>
    </div>

    <!-- Footer: Links -->
    {(appUrl || githubUrl) && (
        <div class:list={["grid", { "grid-cols-2": hasBothLinks, "grid-cols-1": !hasBothLinks }]}>
            {appUrl && (
                <a
                    href={appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class:list={[
                        "flex items-center gap-2.5 px-5 py-3 no-underline transition-colors hover:bg-(--color-border)/50",
                        { "border-r border-(--color-border)": hasBothLinks }
                    ]}
                >
                    <svg class="size-4 shrink-0 text-(--color-accent)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M2 12h20"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    <div>
                        <div class="text-xs text-(--color-text-muted)">App</div>
                        <div class="text-sm text-(--color-accent)">{appHostname}</div>
                    </div>
                </a>
            )}
            {githubUrl && (
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2.5 px-5 py-3 no-underline transition-colors hover:bg-(--color-border)/50"
                >
                    <svg class="size-4 shrink-0 text-(--color-text-muted)" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <div>
                        <div class="text-xs text-(--color-text-muted)">GitHub</div>
                        <div class="text-sm text-(--color-text)">{repoPath}</div>
                    </div>
                </a>
            )}
        </div>
    )}
</div>
```

- [ ] **Step 2: Dev-Server starten und visuell pruefen**

Run: `pnpm dev`

Oeffne den Blogpost im Browser und pruefe:
- Light Mode und Dark Mode
- Hover-Effekte auf Card und Links
- Responsive Verhalten (schmaler Viewport)

- [ ] **Step 3: Commit**

```bash
git add src/components/widgets/ProjectCard.astro
git commit -m "feat: add ProjectCard widget component"
```

---

### Task 2: Blogpost aktualisieren

**Files:**
- Modify: `src/content/blog/papier-fliegt-nicht.mdx`

- [ ] **Step 1: Import hinzufuegen**

In der Import-Sektion (nach Zeile 11) hinzufuegen:

```mdx
import ProjectCard from '../../components/widgets/ProjectCard.astro';
```

- [ ] **Step 2: InfoBox ersetzen**

Die InfoBox (Zeile 48-51) ersetzen:

```mdx
<!-- vorher -->
<InfoBox>
  App: [https://uav.iuk-ue.de](https://uav.iuk-ue.de)<br />
  GitHub: [https://github.com/rubenvitt/uav-checklists](https://github.com/rubenvitt/uav-checklists)
</InfoBox>

<!-- nachher -->
<ProjectCard
  title="UAV Einsatzverwaltung"
  description="Offline-PWA fuer Drohneneinsaetze im Bevoelkerungsschutz"
  appUrl="https://uav.iuk-ue.de"
  githubUrl="https://github.com/rubenvitt/uav-checklists"
/>
```

- [ ] **Step 3: Separate LinkCards am Ende ersetzen**

Die zwei separaten LinkCards (fuer uav.iuk-ue.de und github.com/rubenvitt/uav-checklists) durch eine einzelne ProjectCard ersetzen:

```mdx
<!-- vorher -->
<LinkCard url="https://uav.iuk-ue.de"/>

<LinkCard url="https://github.com/rubenvitt/uav-checklists"/>

<!-- nachher -->
<ProjectCard
  title="UAV Einsatzverwaltung"
  description="Offline-PWA fuer Drohneneinsaetze im Bevoelkerungsschutz - Open Source auf GitHub"
  appUrl="https://uav.iuk-ue.de"
  githubUrl="https://github.com/rubenvitt/uav-checklists"
/>
```

Die dritte LinkCard (BBK-Link) bleibt unveraendert.

- [ ] **Step 4: InfoBox-Import entfernen falls nicht mehr genutzt**

Pruefen ob `InfoBox` noch anderswo im Post verwendet wird. Falls nein, den Import entfernen:

```mdx
// diese Zeile entfernen:
import InfoBox from '../../components/widgets/InfoBox.astro';
```

- [ ] **Step 5: Build pruefen**

Run: `pnpm build`
Expected: Erfolgreicher Build ohne Fehler

- [ ] **Step 6: Commit**

```bash
git add src/content/blog/papier-fliegt-nicht.mdx
git commit -m "feat: use ProjectCard in papier-fliegt-nicht post"
```
