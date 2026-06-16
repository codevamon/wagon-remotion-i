# Wagon Motion

Programmatic brand film for **Wagon Studio**, built with [Remotion](https://www.remotion.dev/) and React. The project renders a cinematic, frame-accurate video that presents the studio, its work, and its creative process to prospective clients.

---

## Project Overview

**Wagon Motion** is a code-driven brand video — not a traditional After Effects export. Every scene, transition, and animation is authored in TypeScript/React and rendered to MP4 via Remotion.

The film is designed to feel **editorial, premium, and restrained**: bold typography on warm cream backgrounds, motion with purpose, and confidence over spectacle. It targets founders and brand teams evaluating Wagon Studio as a creative partner.

> **Status:** Active adaptation from the Creativly.ai Remotion template. Visual identity and copy are partially migrated; several scenes still carry legacy Creativly UI and styling. See [Known Issues / TODOs](#known-issues--todos).

---

## Goals

- **Present Wagon Studio** — establish who the studio is and what it stands for
- **Showcase real projects** — demonstrate craft through work samples and case-study visuals
- **Reveal the creative process** — collaboration, tools, and workflow
- **Build trust with prospects** — premium tone that signals reliability for founders and brand teams

---

## Audience

| Segment | Why they watch |
|---|---|
| **Founders** | Evaluating a studio partner for brand and launch work |
| **Startups** | Need fast, high-quality brand identity and launch assets |
| **Consumer Brands** | Looking for editorial, design-forward creative direction |
| **CPG Brands** | Need product storytelling, packaging, and campaign-ready visuals |

---

## Technology Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | **React 19** | Component-based scene architecture |
| Language | **TypeScript 5.9** | Strict typing across scenes and components |
| Video engine | **Remotion 4** | Frame-driven rendering, Studio preview, MP4 export |
| Transitions | `@remotion/transitions` | `TransitionSeries`, fade, slide, wipe, flip |
| Animation utilities | `@remotion/noise`, `@remotion/paths`, `@remotion/shapes`, `@remotion/animation-utils` | Organic motion, SVG paths, particles |
| Effects | `@remotion/light-leaks` | Cinematic light leak overlays |
| Typography | `@remotion/google-fonts` | Inter (loaded per scene) |
| Styling | **Tailwind CSS 4** | Global styles via `src/styles.css` |
| Validation | **Zod 4** | Schema types via `@remotion/zod-types` |
| Runtime | **Node.js 18+** | Required for Remotion CLI |
| AI-assisted dev | **Cursor**, **Claude Code** | Workflow tools — not npm dependencies |
| Motion library | **GSAP** | **TODO:** not installed in this repository; all animation is Remotion-native today |

### Remotion Packages (installed)

```
remotion
@remotion/cli
@remotion/transitions
@remotion/noise
@remotion/paths
@remotion/shapes
@remotion/light-leaks
@remotion/google-fonts
@remotion/animation-utils
@remotion/layout-utils
@remotion/zod-types
```

---

## Project Origin

This project is adapted from the open-source Remotion template:

**[creativly.ai-brand-video-remotion](https://github.com/naveen-annam/creativly.ai-brand-video-remotion)**

The original template is a 17-scene product demo for Creativly.ai. Wagon Studio forked and restructured it:

- Reduced the active timeline from 17 to **9 scenes**
- Renamed `DURATIONS` keys to match Wagon narrative beats
- Migrated the color system to Wagon's cream/black editorial palette (`src/constants.ts`)
- Began copy and visual updates scene-by-scene (Intro, Collaboration, Models, Text Generation)

Legacy artifacts remain: composition ID (`CreativlyBrandVideo`), `package.json` name (`creativly-brand-video`), and Creativly-era visuals in several scenes.

---

## Video Specifications

| Property | Value | Source |
|---|---|---|
| Resolution | 1920 × 1080 (Full HD) | `src/constants.ts` → `VIDEO_WIDTH`, `VIDEO_HEIGHT` |
| Frame rate | 30 fps | `VIDEO_FPS` |
| Composition ID | `CreativlyBrandVideo` | `src/Root.tsx` (TODO: rename) |
| Registered duration | **1,082 frames (~36.1 s)** | Calculated in `src/Root.tsx` |
| Active timeline duration | **862 frames (~28.7 s)** | Sum of scenes in `src/BrandVideo.tsx` minus transitions |

> **Important:** `Root.tsx` currently sums **all** `DURATIONS` keys — including three reserved scenes not yet wired into `BrandVideo.tsx`. This causes the registered composition to be ~7.4 seconds longer than the active `TransitionSeries` content. See [Architecture Rules](#architecture-rules).

---

## Installation

### Prerequisites

- Node.js 18 or later
- npm (or pnpm / yarn)

### Setup

```bash
git clone <your-repo-url>
cd wagon-motion
npm install
```

---

## Development

Start Remotion Studio for frame-by-frame preview and scrubbing:

```bash
npm run dev
```

Opens at `http://localhost:3000` by default.

### Other scripts

| Command | Description |
|---|---|
| `npm run dev` | Launch Remotion Studio |
| `npm run build` | Bundle the Remotion project |
| `npm run upgrade` | Upgrade Remotion packages |
| `npm run lint` | Run ESLint + TypeScript check (`eslint src && tsc`) |

---

## Rendering

Export the final MP4:

```bash
npx remotion render src/index.ts CreativlyBrandVideo out/brand-video.mp4
```

This command is documented in `src/index.ts`. There is no dedicated `render` script in `package.json`.

Output settings (`remotion.config.ts`):

- Image format: JPEG
- Overwrite output: enabled

---

## Project Structure

```
wagon-motion/
├── public/                  # Static assets (logos, project images, UI screenshots)
├── remotion.config.ts       # Remotion CLI configuration
├── src/
│   ├── index.ts             # Entry point — registers RemotionRoot
│   ├── Root.tsx             # Composition definition + total duration calculation
│   ├── BrandVideo.tsx       # TransitionSeries — active scene timeline
│   ├── constants.ts         # Colors, durations, easing, video specs
│   ├── styles.css           # Tailwind import
│   ├── components/          # 16 reusable visual components
│   │   ├── BrowserWindow.tsx
│   │   ├── Typewriter.tsx
│   │   ├── FlowNode.tsx
│   │   └── ...
│   └── scenes/              # 17 scene files (9 active, 3 reserved, 5 removed from timeline)
│       ├── IntroScene.tsx
│       ├── CollaborationScene.tsx
│       ├── ModelsScene.tsx
│       └── ...
└── package.json
```

---

## Narrative Structure

### Intended narrative arc

The target story for the Wagon Studio brand film:

| # | Beat | Narrative purpose |
|---|---|---|
| 1 | **Intro** | Hook — Wagon Studio identity and promise |
| 2 | **Stats** | Credibility — scale, capability, results |
| 3 | **Services** | What Wagon offers |
| 4 | **Web Design** | "Ask and it appears" — creative tools in action |
| 5 | **Collaboration** | Human-centered creative process |
| 6 | **Process** | How work gets made — timeline, craft, delivery |
| 7 | **Impact** | Outcomes and performance |
| 8 | **Bogotá → World** | Origin story — local roots, global reach |
| 9 | **Outro** | Call to action — wagondesignstudio.com |

### Current playback order

The active timeline in `src/BrandVideo.tsx` differs from the intended arc above. **Collaboration plays before Stats**, and several beats still use Creativly-era scene files:

| Playback # | Narrative beat | `DURATIONS` key | Scene file |
|---|---|---|---|
| 1 | Intro | `intro` | `IntroScene.tsx` |
| 2 | Collaboration | `collaboration` | `CollaborationScene.tsx` |
| 3 | Stats | `stats` | `ModelsScene.tsx` |
| 4 | Web Design | `webDesign` | `TextGenerationScene.tsx` |
| 5 | Services | `services` | `StylePresetsScene.tsx` |
| 6 | Process | `process` | `EditorScene.tsx` |
| 7 | Impact | `impact` | `PerformanceScene.tsx` |
| 8 | Origin | `origin` | `OpenSourceScene.tsx` |
| 9 | Outro | `outro` | `OutroScene.tsx` |

> **TODO:** Reorder scenes in `BrandVideo.tsx` to match the intended narrative arc. Adapt `OpenSourceScene.tsx` copy/visuals for the "Bogotá → World" beat (no such copy exists in the repo today).

---

## Scene Mapping

| Scene file | `DURATIONS` key | Duration (s) | Frames @ 30fps | Status | Current purpose |
|---|---|---|---|---|---|
| `IntroScene.tsx` | `intro` | 3.5 | 105 | **Adapted** | Wagon opener — cream/black editorial; copy in progress |
| `CollaborationScene.tsx` | `collaboration` | 3.0 | 90 | **Adapted** | "ANTES / Crear era / HUMANO" — live cursors, team collaboration |
| `ModelsScene.tsx` | `stats` | 5.5 | 165 | **Adapted** | "30+ MODELS" + "Luego, todos pudieron hacer de todo" |
| `TextGenerationScene.tsx` | `webDesign` | 3.5 | 105 | **Adapted** | "PÍDELO / Y APARECE" — LLM chat mockup, typewriter response |
| `StylePresetsScene.tsx` | `services` | 4.0 | 120 | **Legacy** | Style preset cards UI (Creativly-era visuals) |
| `EditorScene.tsx` | `process` | 3.5 | 105 | **Legacy** | Timeline editor mockup ("Pro Video Editor") |
| `PerformanceScene.tsx` | `impact` | 2.5 | 75 | **Legacy** | Performance metrics and speed visuals |
| `OpenSourceScene.tsx` | `origin` | 3.5 | 105 | **Legacy** | GitHub / open-source stats (Creativly-era) |
| `OutroScene.tsx` | `outro` | 4.0 | 120 | **Legacy** | Creativly CTA ("Start Creating") — TODO: Wagon outro |

### Duration registry (`src/constants.ts`)

All scene lengths are defined once in `DURATIONS` and converted to frames via:

```ts
const f = (seconds: number) => Math.round(seconds * VIDEO_FPS);
```

To extend a scene (e.g. Stats for readability), change the seconds value in `constants.ts`. If `Root.tsx` sums that key, the composition total updates automatically.

---

## Removed Scenes

These scenes exist as files but were **removed from the active timeline** in `BrandVideo.tsx` during the Wagon adaptation. They are not rendered in the current video.

| Scene file | Original Creativly purpose |
|---|---|
| `AudioGenerationScene.tsx` | Audio waveform generation demo |
| `BatchGenerationScene.tsx` | Batch image generation queue |
| `InpaintingScene.tsx` | Inpainting / brush mask tool |
| `UpscalingScene.tsx` | Image upscaling comparison |
| `RecorderScene.tsx` | Screen recorder with live timer |

Do not re-add these without an explicit narrative decision. If restored, update both `BrandVideo.tsx` and the duration calculation in `Root.tsx`.

---

## Future Scenes

Three scenes are **reserved** in `DURATIONS` but not yet wired into `BrandVideo.tsx`. They correspond to Wagon case-study beats:

| `DURATIONS` key | Scene file | Planned purpose |
|---|---|---|
| `kyemera` | `FlowDemoScene.tsx` | Kyemera project showcase — cinematic pipeline walkthrough |
| `impulseBeans` | `TemplatesScene.tsx` | Impulse Beans project — template/category grid |
| `superspoon` | `FocusedDemoScene.tsx` | Superspoon project — focused studio editing experience |

These files are imported in `BrandVideo.tsx` but unused (TypeScript unused-import warnings). When ready:

1. Insert `<TransitionSeries.Sequence>` blocks in the correct narrative position
2. Ensure `Root.tsx` duration sum matches the active timeline
3. Follow the Sequence → Transition pattern (no consecutive transitions)

---

## Visual Direction

The Wagon Studio brand film aims for an **editorial, premium, minimal** aesthetic aligned with [wagondesignstudio.com](https://wagondesignstudio.com):

| Principle | Implementation |
|---|---|
| **Editorial** | Strong typographic hierarchy, generous whitespace, magazine-like layouts |
| **Premium** | Restrained palette, subtle shadows, no gratuitous effects |
| **Minimal** | Few decorative elements; every visual earns its place |
| **Apple-inspired** | Clean grids, confident type, product-forward framing |
| **Zara-inspired** | High-contrast fashion-editorial typography |
| **Nothing-inspired** | Monochrome restraint, dot-grid textures, technical precision |

### Migration status

| Area | Status |
|---|---|
| `constants.ts` color tokens | Migrated to Wagon cream/black |
| `IntroScene.tsx` | Partially migrated (cream `#F5F2EB`, black type) |
| `CollaborationScene.tsx`, `ModelsScene.tsx`, `TextGenerationScene.tsx` | Copy partially adapted |
| Most other scenes | Still use Creativly blue gradients (`#3B82F6`, `#06B6D4`) — **TODO** |

---

## Color System

Defined in `src/constants.ts` → `COLORS`. Use these tokens instead of hardcoded hex values in new work.

| Token | Value | Usage |
|---|---|---|
| `bg` | `#0A0A0A` | Primary dark background |
| `bgWhite` | `#F5F2EB` | Warm cream background |
| `bgGrid` | `#1a1a1a` | Grid/dot background |
| `bgSurface` | `#111111` | Dark surface cards |
| `bgSurfaceLight` | `#EDEAE0` | Light surface cards |
| `border` | `rgba(0,0,0,0.12)` | Default border |
| `borderDark` | `rgba(0,0,0,0.08)` | Subtle border |
| `borderBright` | `rgba(0,0,0,0.25)` | Emphasis border |
| `text` | `#ffffff` | Text on dark backgrounds |
| `textBlack` | `#0A0A0A` | Primary text on light backgrounds |
| `textMuted` | `#6b6b6b` | Secondary text |
| `textMutedDark` | `#888888` | Secondary text (light bg) |
| `textDim` | `#999999` | Tertiary / caption text |
| `primary` | `#0A0A0A` | Primary accent |
| `secondary` | `#0A0A0A` | Secondary accent |
| `accent` | `#0A0A0A` | Interactive accent |
| `brand` | `#0A0A0A` | Brand color |
| `brandLight` | `#F5F2EB` | Brand light variant |
| `brandDark` | `#0A0A0A` | Brand dark variant |
| `brandCyan` | `#0A0A0A` | Legacy token (neutralized) |
| `glass` | `rgba(245,242,235,0.85)` | Glass panel (cream) |
| `glassLight` | `rgba(245,242,235,0.9)` | Glass panel (lighter) |

### Easing presets

| Token | Curve |
|---|---|
| `EASING.elastic` | `bezier(0.1, 0.9, 0.2, 1)` |
| `EASING.cinematic` | `bezier(0.22, 1, 0.36, 1)` |
| `EASING.exp` | `bezier(0.19, 1, 0.22, 1)` |
| `EASING.linear` | Linear |

---

## Animation Architecture

All motion is **Remotion-native** — driven by `useCurrentFrame()`, not CSS transitions or `requestAnimationFrame`.

```tsx
// Spring entrance
const entrance = spring({
  frame: Math.max(0, frame - delay),
  fps,
  config: { damping: 16, stiffness: 120, mass: 0.4 },
});

// Interpolated opacity
const opacity = interpolate(frame, [20, 40], [0, 1], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});

// Organic drift
const drift = noise2D("cursor", frame * 0.02, 0) * 50;

// Animated SVG path
const evolved = evolvePath(progress, svgPath);
```

### Reusable components (`src/components/`)

| Component | Description |
|---|---|
| `BrowserWindow` | Chrome-style browser frame |
| `Typewriter` | Character-by-character text reveal with cursor |
| `CharacterReveal` | Per-character staggered entrance |
| `SplitText` | Split and animate text fragments |
| `KineticType` | Word-by-word kinetic typography |
| `FlowNode` / `FlowEdge` | Pipeline node cards and bezier edges |
| `PulseRings` | Expanding concentric rings |
| `Rotating3D` | CSS perspective 3D shapes |
| `ParticleField` | Floating particles with noise |
| `AuroraBackground` | Layered gradient aurora |
| `GridBackground` | Dot grid with fade mask |
| `GlowOrb` | Pulsing gradient orb |
| `MatrixRain` | Matrix-style character rain |
| `WordHighlight` | Sequential word highlight |
| `CreativlyLogo` | SVG logo with draw-on effect (legacy) |

---

## Architecture Rules

Rules discovered during the Wagon adaptation audit. Follow these to avoid timeline bugs.

### 1. Single source of truth for durations

Scene lengths live in `src/constants.ts` → `DURATIONS`. Both `BrandVideo.tsx` and `Root.tsx` read from this object. Change durations in one place only.

### 2. Keep `Root.tsx` in sync with `BrandVideo.tsx`

`Root.tsx` calculates `durationInFrames` for the `<Composition>`. It must sum **only the scenes actually present** in `BrandVideo.tsx`, minus transition overlaps.

**Current mismatch:** `Root.tsx` sums 12 duration keys (including `kyemera`, `impulseBeans`, `superspoon`) but `BrandVideo.tsx` only renders 9 scenes. This registers ~220 extra frames of empty timeline.

### 3. TransitionSeries pattern

Valid pattern:

```
Sequence → Transition → Sequence → Transition → Sequence
```

**Never** place two `<TransitionSeries.Transition />` elements consecutively without a `<TransitionSeries.Sequence />` between them. Consecutive transitions cause Remotion runtime errors and `NaN` frame calculations.

`<TransitionSeries.Overlay />` (light leaks) does not replace a Sequence and does not subtract from the timeline.

### 4. Transition overlap accounting

Each transition subtracts frames from the total. Current active transitions in `BrandVideo.tsx`:

| Transition | Duration (frames) |
|---|---|
| Fade (Intro → Collaboration) | 18 |
| Flip (Collaboration → Stats) | 25 |
| Slide (Stats → Web Design) | 20 (default) |
| Fade (Web Design → Services) | 20 |
| Flip (Process → Impact) | 25 |
| Wipe (Impact → Origin) | 20 |
| **Total overlaps** | **128** |

### 5. Remotion constraints

- Animations must derive from `useCurrentFrame()` — no CSS `@keyframes`, no `transition` properties, no `requestAnimationFrame`
- Prefer `transform` and `opacity` for performance
- Inside nested `<Sequence>`, `useCurrentFrame()` returns the frame relative to that sequence's `from` prop
- Static assets go in `public/` and are referenced via `staticFile("filename.png")`

### 6. Atomic edits

When adapting scenes, change one file at a time. Update copy, colors, or durations in isolation. Verify with `npx tsc --noEmit` after each change.

---

## Known Issues / TODOs

| Item | Location | Notes |
|---|---|---|
| Composition ID still `CreativlyBrandVideo` | `src/Root.tsx:44` | Rename when publishing |
| `package.json` name still `creativly-brand-video` | `package.json:2` | Rename to `wagon-motion` |
| Duration mismatch (Root vs BrandVideo) | `src/Root.tsx` | Root sums 12 keys; timeline uses 9 |
| Outdated comment "13 transitions / 17 scenes" | `src/Root.tsx:27` | Leftover from Creativly template |
| Unused imports (FlowDemo, Templates, FocusedDemo) | `src/BrandVideo.tsx:15–17` | Reserved for future scenes |
| "Bogotá → World" copy not written | `OpenSourceScene.tsx` | Scene still shows Creativly GitHub UI |
| Outro still Creativly CTA | `OutroScene.tsx` | "Start Creating" — needs Wagon CTA |
| GSAP not installed | — | All animation is Remotion-native |
| Legacy blue gradients in several scenes | Multiple scene files | Migrate to `COLORS` tokens |
| Intro copy incomplete ("TODO") | `IntroScene.tsx:344` | Final headline TBD |

---

## Cursor Workflow

This project is actively developed with **Cursor**. Follow these rules for safe, reviewable changes.

### Atomic prompts

Scope every prompt to **one file** (or one logical unit):

```
File: src/scenes/ModelsScene.tsx — ONLY this file.

Task: replace the headline copy from "30+ AI Models" to "30+ Projects".
Do not touch animations, timings, or other files.
```

### Rules

1. **Read before write** — locate the exact file, line, and selector before editing
2. **One concern per change** — copy, colors, duration, or structure — never all at once
3. **Preserve structure** — do not reorder `TransitionSeries`, rename composition IDs, or add dependencies without explicit approval
4. **Verify after edit** — run `npx tsc --noEmit` or `npm run lint`
5. **Report, don't guess:**

   > If something cannot be changed because the selector, component, or file does not exist, report the exact file and line number without modifying anything.

6. **Duration changes** — edit `DURATIONS` in `constants.ts`; confirm `Root.tsx` propagates the new total

---

## Claude Code Workflow

Best practices when using **Claude Code** on this repository:

1. **Start with context** — point Claude to this README, `constants.ts`, and `BrandVideo.tsx` before scene work
2. **Use the Remotion skill** — ensures correct APIs (`spring`, `interpolate`, `TransitionSeries`, `noise2D`)
3. **Frame-driven only** — reject any suggestion using CSS animations or GSAP unless explicitly adding GSAP as a dependency
4. **Scene isolation** — edit one scene file per session; the template has 300–1100 line scene files
5. **Copy-first migrations** — when adapting a Creativly scene, change strings and colors before restructuring layout
6. **Type-check always** — run `npx tsc --noEmit` before committing; unused imports and stale `DURATIONS` keys are common failure modes
7. **Preview in Studio** — run `npm run dev` and scrub to the target frame range after every change

---

## Development Philosophy

| Principle | Meaning |
|---|---|
| **Story over effects** | Narrative clarity beats visual complexity. If an animation doesn't serve the story, remove it. |
| **Typography over decoration** | Bold, confident type on clean backgrounds. Let words carry the message. |
| **Motion with purpose** | Every spring, fade, and drift communicates something — entrance, emphasis, or transition. |
| **Premium restraint** | Less is more. Cream backgrounds, black type, subtle shadows. No gradient overload. |

---

## Static Assets

Files in `public/`:

| File | Likely use |
|---|---|
| `logo-dark.png` | Wagon logo (dark variant) |
| `logo-white.png` | Wagon logo (light variant) |
| `logo-icon.png` | Favicon / icon |
| `og-image.png` | Social preview |
| `brand-identity-system_800w.jpg` | Project showcase |
| `character-performance_800w.jpg` | Project showcase |
| `director-board_800w.jpg` | Project showcase |
| `launch-film-suite_800w.jpg` | Project showcase |
| `surrealist-concept_800w.jpg` | Project showcase |
| `ugc-product-story_800w.jpg` | Project showcase |
| `flow-canvas.jpg` | Flow demo UI screenshot |
| `focused-editor.jpg` | Editor UI screenshot |
| `timeline-editor.jpg` | Timeline UI screenshot (used in `EditorScene`) |

---

## License

MIT — see [LICENSE](./LICENSE).

---

## Links

- [Wagon Design Studio](https://wagondesignstudio.com)
- [Remotion Documentation](https://www.remotion.dev/docs)
- [Original Creativly Template](https://github.com/naveen-annam/creativly.ai-brand-video-remotion)
