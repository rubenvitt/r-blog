# design-sync notes: @rubeen/lagebild

- The blog itself is Astro. `design-system/` is a **React port** of the Lagebild components that exists only so Claude Design can render them. Source of truth for the look stays `src/styles/global.css` and the Astro components in the blog.
- Run everything from `design-system/`: `npm install && npm run build`, then the driver with `--node-modules ./node_modules --entry ./dist/index.js --out ./ds-bundle` (npm doesn't self-install the package, so `--entry` is required).
- Playwright for capture: pin `playwright@1.56.0` in `.ds-sync` so it matches the cached chromium-1194 in `/opt/pw-browsers`. Never run `playwright install`.
- Known warn: `[FONT_REMOTE]` — fonts come from Google Fonts via `@import` in `src/styles.css`. Expected, not shipped as files.
- The SiteHeader avatar is an inline WebP data URI (`src/avatar.ts`), so no asset files are needed.

## Re-sync risks

- When the Astro components or `global.css` tokens change, mirror the change into `src/styles.css` / `src/components.tsx` by hand. Nothing checks that the two stay in sync.
- If Google Fonts is unreachable, previews fall back to system fonts and grading gets misleading.
- `SiteHeader` overflows by ~40px at 320px viewport width (same as the live site).
