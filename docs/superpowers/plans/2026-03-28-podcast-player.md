# Podcast Player Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an optional podcast player (Waveform Card style) to blog posts, rendered automatically when `podcast` frontmatter is present, with an inline transcript accordion.

**Architecture:** New `PodcastPlayer.astro` component using vanilla JS with the native Audio API. Integrated into `BlogPost.astro` layout between hero header and article content. Content schema extended with an optional `podcast` object.

**Tech Stack:** Astro 6, Tailwind CSS 4, Vanilla JS, native HTML5 Audio API

**Spec:** `docs/superpowers/specs/2026-03-28-podcast-player-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `src/content.config.ts` | Modify | Add optional `podcast` field to blog schema |
| `src/components/widgets/PodcastPlayer.astro` | Create | Player component: HTML structure, styles, audio JS, transcript accordion |
| `src/layouts/BlogPost.astro` | Modify | Accept `podcast` prop, conditionally render PodcastPlayer |
| `src/pages/blog/[...slug].astro` | Modify | Pass `podcast` from collection entry to layout |
| `public/audio/test-podcast.mp3` | Create | Temporary test audio file for verification |

---

### Task 1: Content Schema — add `podcast` field

**Files:**
- Modify: `src/content.config.ts`

- [ ] **Step 1: Add the podcast field to the blog schema**

In `src/content.config.ts`, add the `podcast` field after the `draft` field:

```ts
import {defineCollection, z} from 'astro:content';
import {glob} from 'astro/loaders';

const blog = defineCollection({
    loader: glob({pattern: '**/*.{md,mdx}', base: './src/content/blog'}),
    schema: ({image}) =>
        z.object({
            title: z.string(),
            description: z.string(),
            date: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            tags: z.array(z.string()).default([]),
            aliases: z.array(z.string()).default([]),
            image: image().optional(),
            draft: z.boolean().default(false),
            podcast: z
                .object({
                    audioFile: z.string(),
                    transcript: z.string().optional(),
                })
                .optional(),
        }),
});

export const collections = {blog};
```

- [ ] **Step 2: Verify the build still works**

Run: `pnpm build`
Expected: Build succeeds. No existing posts break because `podcast` is optional.

- [ ] **Step 3: Commit**

```bash
git add src/content.config.ts
git commit -m "feat: add optional podcast field to blog content schema"
```

---

### Task 2: Data pipeline — pass `podcast` through layout

**Files:**
- Modify: `src/pages/blog/[...slug].astro`
- Modify: `src/layouts/BlogPost.astro`

- [ ] **Step 1: Pass `podcast` prop in `[...slug].astro`**

In `src/pages/blog/[...slug].astro`, add `podcast` to the `<BlogPost>` props:

```astro
---
import {getCollection, render} from 'astro:content';
import BlogPost from '../../layouts/BlogPost.astro';

export async function getStaticPaths() {
    const posts = await getCollection('blog', ({data}) => !data.draft);

    const paths = [];
    for (const post of posts) {
        paths.push({
            params: {slug: post.id},
            props: {post, redirectTo: null},
        });
        for (const alias of post.data.aliases) {
            paths.push({
                params: {slug: alias},
                props: {post, redirectTo: `/blog/${post.id}`},
            });
        }
    }
    return paths;
}

const {post, redirectTo} = Astro.props;

if (redirectTo) {
    return Astro.redirect(redirectTo, 301);
}

const {Content} = await render(post);
---

<BlogPost
        title={post.data.title}
        description={post.data.description}
        date={post.data.date}
        updatedDate={post.data.updatedDate}
        tags={post.data.tags}
        image={post.data.image}
        podcast={post.data.podcast}
>
    <Content/>
</BlogPost>
```

The only change is adding `podcast={post.data.podcast}` to the `<BlogPost>` tag.

- [ ] **Step 2: Accept `podcast` prop in `BlogPost.astro`**

In `src/layouts/BlogPost.astro`, update the Props interface and destructuring. Also add the import for PodcastPlayer (the component doesn't exist yet — that's fine, we'll create it in Task 3, but the layout is ready):

```astro
---
import {Image} from 'astro:assets';
import BaseLayout from './BaseLayout.astro';
import TagBadge from '../components/ui/TagBadge.astro';
import ReadingProgress from '../components/ui/ReadingProgress.astro';
import PodcastPlayer from '../components/widgets/PodcastPlayer.astro';

interface Props {
    title: string;
    description: string;
    date: Date;
    updatedDate?: Date;
    tags?: string[];
    image?: ImageMetadata;
    podcast?: {audioFile: string; transcript?: string};
}

const {title, description, date, updatedDate, tags = [], image, podcast} = Astro.props;
```

Then insert the PodcastPlayer between the hero section closing `)}` and the `<!-- Post Content -->` comment:

```astro
    )}

    {podcast && (
        <div class="mx-auto max-w-(--content-width) px-6 pt-8">
            <PodcastPlayer audioFile={podcast.audioFile} transcript={podcast.transcript} />
        </div>
    )}

    <!-- Post Content -->
    <article class="prose mx-auto max-w-(--content-width) px-6 py-12">
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/blog/[...slug].astro src/layouts/BlogPost.astro
git commit -m "feat: pass podcast data through layout pipeline"
```

Note: Build will fail at this point because `PodcastPlayer.astro` doesn't exist yet. That's expected — Task 3 creates it.

---

### Task 3: PodcastPlayer component — HTML & CSS

**Files:**
- Create: `src/components/widgets/PodcastPlayer.astro`

- [ ] **Step 1: Create the component with full HTML structure and styles**

Create `src/components/widgets/PodcastPlayer.astro`:

```astro
---
interface Props {
    audioFile: string;
    transcript?: string;
}

const {audioFile, transcript} = Astro.props;

const BAR_COUNT = 36;
const barHeights = Array.from({length: BAR_COUNT}, () => 40 + Math.floor(Math.random() * 50));
---

<div class="podcast-player not-prose" tabindex="0">
    <audio preload="metadata" src={audioFile}></audio>

    <div class="podcast-card">
        <button class="play-btn" type="button" aria-label="Play/Pause">
            <svg class="icon-play" viewBox="0 0 24 24" width="18" height="18">
                <polygon points="6,3 20,12 6,21" fill="currentColor" />
            </svg>
            <svg class="icon-pause" viewBox="0 0 24 24" width="18" height="18" style="display:none">
                <rect x="5" y="3" width="4" height="18" fill="currentColor" />
                <rect x="15" y="3" width="4" height="18" fill="currentColor" />
            </svg>
        </button>

        <div class="wave-area">
            <div class="label-row">
                <span class="podcast-label">Podcast</span>
                <span class="duration">--:--</span>
            </div>

            <div class="waveform">
                {barHeights.map((h) => (
                    <div class="bar" style={`height:${h}%`} />
                ))}
            </div>

            <div class="bottom-row">
                <span class="time-display">0:00 / --:--</span>
                {transcript && (
                    <button class="transcript-toggle" type="button">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                        </svg>
                        Transkript
                    </button>
                )}
            </div>
        </div>
    </div>

    {transcript && (
        <div class="transcript-accordion" data-transcript-src={transcript}>
            <div class="transcript-content"></div>
        </div>
    )}
</div>

<style>
    .podcast-player {
        margin-top: 0.5rem;
    }

    .podcast-card {
        display: flex;
        align-items: center;
        gap: 20px;
        background: var(--color-bg-secondary);
        border: 1px solid var(--color-border);
        border-radius: 12px;
        padding: 20px 24px;
    }

    .play-btn {
        width: 48px;
        height: 48px;
        border-radius: 14px;
        background: var(--color-text);
        color: var(--color-bg);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
        transition: background 0.15s;
    }

    .play-btn:hover {
        background: var(--color-accent);
    }

    .wave-area {
        flex: 1;
        min-width: 0;
    }

    .label-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .podcast-label {
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--color-accent);
    }

    .duration {
        font-size: 12px;
        color: var(--color-text-muted);
        font-family: var(--font-mono);
    }

    .waveform {
        display: flex;
        align-items: flex-end;
        gap: 2px;
        height: 32px;
        cursor: pointer;
    }

    .bar {
        flex: 1;
        border-radius: 1px;
        background: var(--color-border);
        transition: background 0.1s;
    }

    .bar.played {
        background: var(--color-accent);
    }

    .bottom-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
    }

    .time-display {
        font-size: 12px;
        color: var(--color-text-muted);
        font-family: var(--font-mono);
    }

    .transcript-toggle {
        font-size: 12px;
        color: var(--color-text-secondary);
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 6px;
        border: 1px solid var(--color-border);
        background: transparent;
        cursor: pointer;
        transition: all 0.15s;
        font-family: inherit;
    }

    .transcript-toggle:hover {
        border-color: var(--color-accent);
        color: var(--color-accent);
    }

    .transcript-toggle[aria-expanded='true'] {
        border-color: var(--color-accent);
        color: var(--color-accent);
    }

    .transcript-accordion {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
        background: var(--color-bg-secondary);
        border: 1px solid var(--color-border);
        border-top: none;
        border-radius: 0 0 12px 12px;
    }

    .transcript-accordion.open {
        max-height: 600px;
        overflow-y: auto;
    }

    .transcript-content {
        padding: 20px 24px;
        font-size: 14px;
        line-height: 1.7;
        color: var(--color-text-secondary);
        white-space: pre-wrap;
    }

    .podcast-player:has(.transcript-accordion.open) .podcast-card {
        border-radius: 12px 12px 0 0;
    }
</style>
```

- [ ] **Step 2: Verify the build succeeds**

Run: `pnpm build`
Expected: Build succeeds. No posts have `podcast` frontmatter yet, so the component is not rendered but the import resolves.

- [ ] **Step 3: Commit**

```bash
git add src/components/widgets/PodcastPlayer.astro
git commit -m "feat: add PodcastPlayer component with waveform card UI"
```

---

### Task 4: PodcastPlayer component — Audio JS & transcript accordion

**Files:**
- Modify: `src/components/widgets/PodcastPlayer.astro`

- [ ] **Step 1: Add the `<script is:inline>` block at the end of `PodcastPlayer.astro`**

Append this script after the closing `</style>` tag:

```astro
<script is:inline>
(function () {
    const player = document.querySelector('.podcast-player');
    if (!player) return;

    const audio = player.querySelector('audio');
    const playBtn = player.querySelector('.play-btn');
    const iconPlay = player.querySelector('.icon-play');
    const iconPause = player.querySelector('.icon-pause');
    const waveform = player.querySelector('.waveform');
    const bars = player.querySelectorAll('.bar');
    const timeDisplay = player.querySelector('.time-display');
    const durationDisplay = player.querySelector('.duration');
    const transcriptToggle = player.querySelector('.transcript-toggle');
    const accordion = player.querySelector('.transcript-accordion');

    function formatTime(seconds) {
        var m = Math.floor(seconds / 60);
        var s = Math.floor(seconds % 60);
        return m + ':' + (s < 10 ? '0' : '') + s;
    }

    function updateProgress() {
        if (!audio.duration) return;
        var progress = audio.currentTime / audio.duration;
        var playedCount = Math.floor(progress * bars.length);
        for (var i = 0; i < bars.length; i++) {
            if (i < playedCount) {
                bars[i].classList.add('played');
            } else {
                bars[i].classList.remove('played');
            }
        }
        timeDisplay.textContent = formatTime(audio.currentTime) + ' / ' + formatTime(audio.duration);
    }

    audio.addEventListener('loadedmetadata', function () {
        var dur = formatTime(audio.duration);
        durationDisplay.textContent = dur;
        timeDisplay.textContent = '0:00 / ' + dur;
    });

    audio.addEventListener('timeupdate', updateProgress);

    audio.addEventListener('ended', function () {
        iconPlay.style.display = '';
        iconPause.style.display = 'none';
        audio.currentTime = 0;
        updateProgress();
    });

    playBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            iconPlay.style.display = 'none';
            iconPause.style.display = '';
        } else {
            audio.pause();
            iconPlay.style.display = '';
            iconPause.style.display = 'none';
        }
    });

    waveform.addEventListener('click', function (e) {
        if (!audio.duration) return;
        var rect = waveform.getBoundingClientRect();
        var pos = (e.clientX - rect.left) / rect.width;
        audio.currentTime = pos * audio.duration;
        updateProgress();
    });

    player.addEventListener('keydown', function (e) {
        if (e.code === 'Space' && e.target === player) {
            e.preventDefault();
            playBtn.click();
        }
    });

    if (transcriptToggle && accordion) {
        var loaded = false;
        transcriptToggle.addEventListener('click', function () {
            var isOpen = accordion.classList.contains('open');
            if (isOpen) {
                accordion.classList.remove('open');
                transcriptToggle.setAttribute('aria-expanded', 'false');
            } else {
                if (!loaded) {
                    var src = accordion.getAttribute('data-transcript-src');
                    fetch(src)
                        .then(function (r) { return r.text(); })
                        .then(function (text) {
                            accordion.querySelector('.transcript-content').textContent = text;
                            loaded = true;
                        });
                }
                accordion.classList.add('open');
                transcriptToggle.setAttribute('aria-expanded', 'true');
            }
        });
    }
})();
</script>
```

- [ ] **Step 2: Verify the build succeeds**

Run: `pnpm build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/widgets/PodcastPlayer.astro
git commit -m "feat: add audio controls and transcript accordion to PodcastPlayer"
```

---

### Task 5: End-to-end verification

**Files:**
- Create (temporary): `public/audio/test-podcast.mp3`
- Modify (temporary): one blog post frontmatter for testing

- [ ] **Step 1: Create a test audio file**

Generate a short silent MP3 for testing (requires ffmpeg, or use any small MP3):

```bash
ffmpeg -f lavfi -i anullsrc=r=44100:cl=mono -t 5 -q:a 9 public/audio/test-podcast.mp3
```

If ffmpeg is not available, download any small MP3 and place it at `public/audio/test-podcast.mp3`.

- [ ] **Step 2: Create a test transcript file**

```bash
echo "Dies ist ein Test-Transkript für den Podcast Player.\n\nZeile zwei des Transkripts.\n\nEnde." > public/audio/test-podcast.txt
```

- [ ] **Step 3: Add podcast frontmatter to one test post**

Temporarily add to the frontmatter of `src/content/blog/tools-sind-keine-prompts.mdx` (or any post):

```yaml
podcast:
  audioFile: /audio/test-podcast.mp3
  transcript: /audio/test-podcast.txt
```

- [ ] **Step 4: Run dev server and verify**

Run: `pnpm dev`

Open the post in browser and verify:
1. Player card appears between hero header and article content
2. Play button works — toggles to pause icon, audio plays
3. Wellenform bars fill with accent color as audio progresses
4. Click on waveform to seek — position updates
5. Time display updates correctly
6. Duration shows after metadata loads
7. Transcript button is visible
8. Clicking transcript opens accordion with loaded text
9. Clicking transcript again closes accordion
10. Dark mode toggle — player colors adapt correctly
11. Space key toggles play/pause when player is focused

- [ ] **Step 5: Verify build**

Run: `pnpm build && pnpm preview`
Expected: Build succeeds, preview shows same behavior.

- [ ] **Step 6: Run lint and format**

Run: `pnpm lint && pnpm format:check`
Expected: No errors. Fix any that appear.

- [ ] **Step 7: Clean up test data and commit**

Remove the temporary `podcast` frontmatter from the test post (unless you want to keep it).
Remove `public/audio/test-podcast.mp3` and `public/audio/test-podcast.txt` (unless you want to keep them).

Do NOT commit the test data — only commit if lint/format fixes were needed:

```bash
# Only if lint/format fixes were needed:
git add -A
git commit -m "chore: lint and format fixes"
```

---

### Hinweis: MP3-Header-Problem bei TTS-generierten Dateien

TTS-Dienste erzeugen häufig MP3-Dateien mit fehlerhaften Xing/Info-Headern (falsche Frame-Counts). Browser lesen diesen Header und zeigen eine kürzere Dauer an als die tatsächliche Audio-Länge.

**Nach jeder neuen Podcast-Generierung** müssen die MP3s re-encoded werden:

```bash
./scripts/fix-podcast-mp3s.sh
# oder einzelne Datei:
./scripts/fix-podcast-mp3s.sh public/audio/neuer-post.mp3
```

Das Script re-encoded mit `ffmpeg -c:a libmp3lame -b:a 128k` und schreibt dabei korrekte Xing-Header.
