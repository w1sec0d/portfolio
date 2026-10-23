# Memory — portfolio project

Living ledger. Update when a decision, asset, or open question changes.

## Current status

- Astro 7 static site implemented, bilingual EN/ES.
- 13 routes build successfully: home, about, project index, and 3 project
  detail pages in both languages, plus `404.html`.
- `astro check`: 0 errors.
- `cf dev` serves through Astro at `http://localhost:4321`.
- Lighthouse (desktop, dev): Accessibility 100, Best Practices 100,
  SEO 100, Agentic Browsing 100.
- No horizontal overflow at 320 px, 390 px, 768 px, or 1440 px.
- Production bundle: 13 pages, 0 client JS, 7 font files (Latin subsets).
- `wrangler deploy --dry-run --assets ./dist` reads 46 files successfully.
- OG image: `public/og.png` (1200×630, rendered from `public/og.svg`) wired
  to `og:image` / `twitter:image`.
- CV PDF supplied at `public/cv/carlos-ramirez-cv.pdf` (2 pages); both CV
  CTAs are active and the file serves as `application/pdf`.

## Decisions

- Astro static output (not SSR); no Cloudflare adapter.
- `cf dev` is the local server; `astro build` is the production build;
  `wrangler deploy --assets ./dist` is the deploy fallback.
- `cf build` / `cf deploy` need a Build Output Specification that pure static
  Astro does not emit. Revisit when the beta CLI supports static outputs.
- Portrait is a placeholder until the real photo is supplied.
- CV button auto-enables when the file exists at
  `public/cv/carlos-ramirez-cv.pdf`; the supplied PDF is now live.
- Social links kept: GitHub, LinkedIn, email, WhatsApp, TikTok, YouTube.
- Formatted project IA: 3 featured rows on the homepage + `/projects/` and
  `/es/proyectos/` archive pages.
- Design: dark engineering/editorial, orange signal color, Space Grotesk +
  IBM Plex Mono, instrumentation/blueprint diagrams.
- SVG patterns use `fill="none"` on open paths (prevents accidental black
  triangle fills / diagonal hatching).

## Pending inputs

- Real portrait → `public/images/carlos-ramirez.webp`.
- Real screenshots for the project detail pages (currently original SVG
  diagrams).

## Open questions / quirks

- SENA dates: CV says Jan 2018, LinkedIn says Jan 2019. Site currently uses
  2018–2020; verify with Carlos. TODO is in `src/data/about.ts`.
- 404 page is English by default; it links to the Spanish home. Cloudflare's
  `404-page` handling serves one root `404.html`, so a fully localized 404
  would need a Worker or client-side detection.
- The `cf` CLI is beta; keep the `wrangler deploy` fallback working.
- `cloudflare.config.ts` declares `carlosramirez.app`; confirm the domain is
  attached to the correct account before deploying.
- Phone number appears only behind the WhatsApp link/handle (`wa.me`); the
  number is not printed as visible text.
