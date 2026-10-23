# Agent guide — Carlos David Ramírez Muñoz portfolio

Read this file before changing the project.

## Source of truth

| File | Purpose |
| --- | --- |
| `.opencode/instructions.md` | Product brief and hard requirements |
| `.opencode/plan.md` | Implemented plan, decisions, and task history |
| `.opencode/context/cv.md` | CV, roles, education, certifications, skills |
| `.opencode/context/linkedin-scrapped.md` | LinkedIn profile, projects, dates, links |
| `MEMORY.md` | Living decisions, pending assets, open questions |

If a requirement conflicts with code, the brief wins. Do not invent facts,
metrics, testimonials, awards, dates, employers, or links.

## Stack and commands

- Astro 7, `output: 'static'`, TypeScript, scoped CSS.
- Cloudflare Workers static assets from `dist/`.
- `npm run dev` → `cf dev` (delegates to Astro dev server).
- `npm run build` → `astro build` (emits `dist/`).
- `npm run preview` → `astro preview`.
- `npm run check` → `astro check`.
- `npm run deploy` → `astro build && wrangler deploy --assets ./dist ...`.

`cf build` / `cf deploy` currently require a Cloudflare Build Output
Specification; pure static Astro only emits `dist/`. Use the scripts above.
The runtime config (`cloudflare.config.ts`) still declares the custom domain,
404 handling, and observability for the `cf` path when it supports static
outputs.

## Design system

Tokens live in `src/styles/global.css`:

- Background `#0B0D10`, surface `#12161B`, elevated `#191E25`
- Borders `#28303A`, text `#F4F1EC`, muted `#A7AFBA`
- Signature orange `#F97316`, hover `#FB923C`, on-orange `#171717`

Typography: Space Grotesk Variable (display/body) and IBM Plex Mono
(labels/metadata), both self-hosted via Fontsource.

Visual language: dark engineering/editorial, fine grids, hairline rules,
technical diagrams, orange used for signal and emphasis. Avoid gradients,
glassmorphism, stock imagery, fake terminals, and decorative motion.

## Content and i18n

- Every visible string must exist in both languages.
- Strings: `src/i18n/ui.ts`. Routes and language switching: `src/i18n/index.ts`.
- Project content: `src/data/projects.ts` (bilingual fields).
- Experience, skills, education, certifications, focus: `src/data/*.ts`.
- Add a page in both `src/pages/` and `src/pages/es/`; update
  `alternatePath()` if the route shape changes.
- No mixed-language copy. Technical proper nouns and acronyms are fine.
- Preserve the CyclingSafety caveats: quantization conversion vs. ESP32 field
  accuracy, and overlapping-window leakage in exploratory metrics.

## Assets

| Asset | Expected path | Fallback |
| --- | --- | --- |
| Portrait | `public/images/carlos-ramirez.webp` (`.jpg/.png/.avif` accepted) | `PortraitFrame` placeholder |
| CV | `public/cv/carlos-ramirez-cv.pdf` | disabled CV button + "pending" |
| Project visuals | inline SVG in `ProjectVisual.astro` | swap in real screenshots when available |

`src/lib/assets.ts` checks `public/` at build time. Do not hardcode a
fabricated portrait or CV.

## Adding a project

1. Add an entry to `src/data/projects.ts` with EN and ES fields and a
   `visual` key.
2. Add a diagram branch to `src/components/ProjectVisual.astro` (localized
   labels, `fill="none"` on open paths).
3. The homepage cards and `/projects/` routes are generated automatically.
4. Run `npm run check` and `npm run build`, then verify both languages.

## Quality bar

- Semantic landmarks, one `h1` per page, correct heading order.
- Visible focus, skip link, labelled controls, AA contrast.
- `prefers-reduced-motion` respected.
- No horizontal overflow at 320–1440 px.
- Canonical, `hreflang`, OG/Twitter metadata, sitemap, robots.txt.
- No console errors or broken internal links.
- Run `npm run check`, `npm run build`, and a browser pass before finishing.
