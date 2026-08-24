# Rafael Targino — Portfolio

An Astro-powered portfolio with a single scrolling profile page, a dedicated Labs page for selected projects, and a structured System Design walkthrough on each project detail page.

---

## 🚀 Getting started

### Prerequisites

| Tool    | Version |
| ------- | ------- |
| Node.js | ≥ 18.17 |
| npm     | ≥ 9     |

### Run locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:4321)
npm run dev
```

### Production build & preview

```bash
# Build the static site into dist/
npm run build

# Preview the production build locally
npm run preview

# Type-check all .astro files
npm run check
```

### Deployment

A GitHub Actions workflow deploys `dist/` to **GitHub Pages** automatically whenever `main` is updated.
In the repository's GitHub Pages settings, select **GitHub Actions** as the build source once.

---

## 📁 Project structure

```
├── public/
│   └── assets/              # Images, fonts, and legacy vendor scripts
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── AboutMap.astro
│   │   ├── DagScene.astro       # Three.js workflow scene
│   │   ├── EducationCarousel.astro
│   │   ├── ExperienceTimeline.astro
│   │   ├── Footer.astro / Header.astro
│   │   ├── Icon.astro           # Inline SVG icon system
│   │   ├── LabGrid.astro        # Labs cards + client-side filters
│   │   ├── SectionHeading.astro
│   │   ├── SkillNetwork.astro   # Three.js capability network
│   │   └── TestimonialCarousel.astro
│   ├── data/
│   │   └── site.ts          # ✏️ Single source of content: profile, timeline,
│   │                          skills, education slides, and lab cards
│   ├── layouts/
│   │   └── BaseLayout.astro # HTML shell, fonts, meta, nav, footer
│   ├── pages/
│   │   ├── index.astro      # Home, about, testimonials, DAG scene
│   │   ├── experience.astro # Experience timeline
│   │   ├── skills.astro     # Education carousel + skill network
│   │   ├── labs.astro       # Labs index with filters
│   │   └── labs/
│   │       └── azure-data-lake.astro  # Project detail + System Design section
│   └── styles/
│       └── global.css       # Design tokens + all styling
└── astro.config.mjs
```

> **Adding content:** most edits happen in `src/data/site.ts` — pages read from it, so no markup changes are needed.

---

## 🎨 Design system

All design tokens live in `:root` at the top of [`src/styles/global.css`](src/styles/global.css).

### Color palette

| Token         | Value     | Usage                                        |
| ------------- | --------- | -------------------------------------------- |
| `--paper`     | `#fffdfa` | Page background (warm off-white)             |
| `--ink`       | `#000000` | Primary text                                 |
| `--navy`      | `#14213d` | Dark surfaces, primary buttons, table header |
| `--muted`     | `#3d2a11` | Secondary text                               |
| `--lime`      | `#fca311` | Accent — highlights, badges, shadows         |
| `--lime-deep` | `#a52422` | Emphasis (`<em>`), eyebrows, links on hover  |
| `--line`      | `#bea57d` | Borders, dividers                            |
| `--blue`      | `#bea57d` | Alias of `--line` (kept for compatibility)   |

Quick visual reference:

```
Paper   █ #fffdfa   — background
Ink     █ #000000   — text
Navy    █ #14213d   — dark blocks
Lime    █ #fca311   — accent
Brick   █ #a52422   — emphasis
Sand    █ #bea57d   — lines/borders
Cream   █ #eadfc8   — tinted sections
```

### Typography

| Token     | Stack                              | Usage                                           |
| --------- | ---------------------------------- | ----------------------------------------------- |
| `--serif` | `'Fraunces', Georgia, serif`       | Display headings (`h1`, `h2`), wordmark, quotes |
| `--sans`  | `'DM Sans', system-ui, sans-serif` | Body copy, navigation, buttons                  |
| `--mono`  | `'DM Mono', monospace`             | Eyebrows, labels, badges, captions, numbers     |

Type scale highlights:

- `h1` — `clamp(3.2rem, 6.2vw, 5.85rem)`, tight `-0.055em` letter-spacing
- Section headings — `clamp(2.4rem, 4.5vw, 4rem)`
- Eyebrow labels — `11px` mono, uppercase, `.08em` letter-spacing
- Body — `16px`, line-height `1.55`

### Signature visual motifs

- **Hard offset shadows** — `box-shadow: 15px 15px 0 var(--lime)` on project covers
- **Split diagonal backgrounds** — two-tone `linear-gradient(135deg, …)` sections
- **1px sand-colored grid lines** between cards instead of gaps
- **Reveal-on-scroll** via `[data-reveal]` with staggered `--delay`
- **Reduced motion respected** — `prefers-reduced-motion` disables transitions

---

## 🧩 Conventions

- **Astro zero-JS by default** — interactivity is scoped `<script>` per component; Three.js scenes load only where used.
- **Content in data files** — edit `src/data/site.ts`; avoid hardcoding copy in pages.
- **Icons** — use `<Icon name="…" size={16} />` from `src/components/Icon.astro`.
- **Styling** — plain CSS in `global.css`, organized per-section; mobile breakpoint at `780px`.
- **Naming** — kebab-case file names, section-prefixed classes (`.hero-*`, `.project-*`, `.design-*`).

---

## 📄 License

Personal portfolio — content and design © Rafael Targino.
