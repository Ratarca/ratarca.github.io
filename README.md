# Rafael Targino — Portfolio

An Astro-powered portfolio with a single scrolling profile page and a dedicated Labs page for selected projects and experiments.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

The included GitHub Actions workflow deploys `dist/` to GitHub Pages whenever `main` is updated. In the repository’s GitHub Pages settings, select **GitHub Actions** as the build source once.

## Content map

- `src/pages/index.astro` — home, about, testimonials, and the Three.js workflow scene
- `src/pages/experience.astro` — dedicated experience timeline
- `src/pages/skills.astro` — combined education carousel and Three.js capability network
- `src/pages/labs.astro` — Labs page and client-side project filters
- `src/data/site.ts` — profile content, education slides, timeline entries, skills, and lab cards
- `src/components/` — reusable layout and content components
- `public/assets/` — retained images and legacy static project-detail pages
