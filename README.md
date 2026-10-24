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
| `npm run deploy` | Builds `dist/` and deploys the `portfolio` Worker with Wrangler |

### About `cf build`

The beta `cf` CLI expects a Cloudflare Build Output Specification from the
build command. A purely static Astro build only emits `dist/`, so
`npm run build` uses `astro build` directly. `npm run deploy` uses
`wrangler deploy --config wrangler.deploy.jsonc`, which supports static-only
deployments and applies the 404/observability/domain settings.
`cf dev` continues to work and is the local serving path.

## Deployment

Live at **https://carlosramirez.app** on the Cloudflare Worker `portfolio`.

```bash
npx wrangler login   # once per machine
npm run deploy
```

`wrangler.deploy.jsonc` configures the static `dist/` assets, the custom
`404.html`, observability, and the apex custom domain. Only the apex is
configured; `www` is intentionally not enabled.

## Structure

```
.opencode/            instructions, plan, and personal context
public/               favicon, robots.txt, portrait + CV drop zones
src/components/       header, hero, sections, gallery, diagrams, cards
src/data/             site, projects, experience, skills, about, focus
src/i18n/             EN/ES strings and route helpers
src/layouts/          BaseLayout (meta, hreflang, header, footer)
src/pages/            EN routes + /es routes
src/styles/           global tokens and base styles
```

## Assets

| Asset | Path | Status |
| --- | --- | --- |
| Portrait | `public/images/carlos-ramirez.webp` | Supplied |
| CV PDF (EN) | `public/cv/carlos-ramirez-cv.pdf` | Supplied |
| CV PDF (ES) | `public/cv/carlos-ramirez-cv-es.pdf` | Supplied |
| Project galleries | `public/images/projects/*.webp` | CicloMart + CourseClash + CyclingSafety supplied |
| Academic paper | `public/docs/CyclingSafety.pdf` | Supplied (Spanish only) |

The hero uses the supplied portrait. Each locale links to its own CV (EN/ES).
The project detail pages use screenshot galleries when available, falling back
to the original SVG diagrams; CyclingSafety uses its poster gallery.

## Content

All copy lives in `src/data/` and `src/i18n/`. Every visible string exists in
both English and Spanish. Do not add fabricated metrics, testimonials, dates,
or links.
