# Carlos David Ramírez Muñoz — Portfolio

Bilingual (EN / ES) engineering portfolio built with Astro and deployed as
Cloudflare Workers static assets.

## Stack

- Astro 7, static output, TypeScript
- Scoped CSS with centralized design tokens
- Self-hosted Space Grotesk + IBM Plex Mono (Fontsource)
- `@astrojs/sitemap` for the sitemap
- Cloudflare Workers static assets (`dist/`)

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local server through `cf dev` (delegates to Astro) |
| `npm run build` | Builds the static site into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run check` | Runs `astro check` (types + templates) |
| `npm run deploy` | Builds and deploys `dist/` with Wrangler |

### About `cf build`

The beta `cf` CLI expects a Cloudflare Build Output Specification from the
build command. A purely static Astro build only emits `dist/`, so
`npm run build` uses `astro build` directly. `npm run deploy` uses
`wrangler deploy --assets ./dist`, which supports static-only deployments.
`cf dev` continues to work and is the local serving path.

## Structure

```
.opencode/            instructions, plan, and personal context
public/               favicon, robots.txt, portrait + CV drop zones
src/components/       header, hero, sections, diagrams, cards
src/data/             site, projects, experience, skills, about, focus
src/i18n/             EN/ES strings and route helpers
src/layouts/          BaseLayout (meta, hreflang, header, footer)
src/pages/            EN routes + /es routes
src/styles/           global tokens and base styles
```

## Assets

| Asset | Path | Status |
| --- | --- | --- |
| Portrait | `public/images/carlos-ramirez.webp` | Placeholder until supplied |
| CV PDF | `public/cv/carlos-ramirez-cv.pdf` | Supplied |

The portrait slot renders a polished placeholder until the image exists. The
CV button is active because the PDF is present.

## Content

All copy lives in `src/data/` and `src/i18n/`. Every visible string exists in
both English and Spanish. Do not add fabricated metrics, testimonials, dates,
or links.
