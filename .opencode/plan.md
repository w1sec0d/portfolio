# Implementation plan — Bilingual engineering portfolio

Portfolio for **Carlos David Ramírez Muñoz**. Source of truth:
`.opencode/instructions.md`, `.opencode/context/cv.md`,
`.opencode/context/linkedin-scrapped.md`.

## 1. Confirmed decisions

| Decision | Choice |
| --- | --- |
| Framework | Astro 7, `output: 'static'`, TypeScript |
| Hosting | Cloudflare Workers static assets; `cf dev` / `cf build` / `cf deploy` |
| Portrait | Polished placeholder at configurable `/images/carlos-ramirez.webp`; real photo pending |
| CV | Configurable `/cv/carlos-ramirez-cv.pdf`; CTA auto-enables when file exists; PDF pending |
| Socials | GitHub, LinkedIn, email, WhatsApp, TikTok, YouTube |
| Projects IA | 3 featured cards on home + full list at `/projects/` and `/es/proyectos/` |
| Languages | EN default at `/`, ES under `/es/`, switcher preserves equivalent route |

## 2. Information architecture

| Route | Content |
| --- | --- |
| `/` | EN home: hero, selected projects, experience, specialties, contact |
| `/projects/` | EN full project list |
| `/projects/ciclomart/` | EN detail |
| `/projects/courseclash/` | EN detail |
| `/projects/cyclingsafety/` | EN detail |
| `/about/` | EN about |
| `/es/` | ES home |
| `/es/proyectos/` | ES full list |
| `/es/proyectos/ciclomart/` | ES detail |
| `/es/proyectos/courseclash/` | ES detail |
| `/es/proyectos/cyclingsafety/` | ES detail |
| `/es/sobre-mi/` | ES about |
| `/404.html` | Bilingual-aware not found |

## 3. Visual system

- **Palette:** `--bg #0B0D10`, `--surface #12161B`,
  `--surface-elevated #191E25`, `--border #28303A`,
  `--text #F4F1EC`, `--muted #A7AFBA`, `--orange #F97316`,
  `--orange-hover #FB923C`, `--on-orange #171717`.
- **Type:** Space Grotesk Variable (display + body), IBM Plex Mono
  (technical labels, metadata). Self-hosted via Fontsource.
- **Layout:** 1200 px editorial grid, hairline rules, fine coordinate grid,
  asymmetric two-column hero, generous vertical rhythm.
- **Motifs:** instrumentation/blueprint — system graphs, signal traces,
  coordinate ticks, node highlights. No gradients, glassmorphism, or stock art.
- **Motion:** one restrained hero reveal + subtle SVG trace drift;
  `prefers-reduced-motion` disables it.
- **Accessibility:** semantic landmarks, skip link, visible focus,
  AA contrast, labelled controls, reduced-motion support.

## 4. Tasks

### Phase 0 — Foundation
1. Move docs: `.context/` → `.opencode/context/`, `instructions.md` →
   `.opencode/instructions.md`; keep them out of the published bundle.
2. Add Astro 7 + `@astrojs/sitemap`, `@astrojs/check`, TypeScript,
   Fontsource packages.
3. `astro.config.mjs`: `site`, `output: 'static'`, i18n routing, sitemap.
4. `wrangler.config.ts`: `assetsDirectory: './dist'`,
   `build.command: 'astro build'`.
5. `cloudflare.config.ts`: `worker.assets.notFoundHandling = '404-page'`.
6. Design tokens, global CSS, base layout, font imports.
7. Typed project data module + i18n dictionary (EN/ES).

### Phase 1 — Bilingual shell
8. `BaseLayout.astro`: meta, canonical, hreflang, OG/Twitter, skip link.
9. `SiteHeader.astro`: wordmark, nav, responsive `<details>` menu,
   `LanguageSwitcher.astro` (route-preserving).
10. `SiteFooter.astro`; favicon; `robots.txt`; sitemap.
11. `src/pages/index.astro` and `src/pages/es/index.astro`.

### Phase 2 — Hero
12. `HeroSection.astro`: specialty label, headline, copy, CTAs, social links.
13. `PortraitFrame.astro`: build-time existence check for
    `/images/carlos-ramirez.webp`; polished placeholder otherwise.
14. `HeroEngineeringArt.astro`: original SVG — node graph, layered data flow,
    IMU waveform, orange signal nodes, fine grid, coordinate marks.

### Phase 3 — Home sections
15. `SelectedProjects.astro` / `ProjectCard.astro` (3 featured cards).
16. `ExperienceSection.astro` (Alignerr, Outlier, prior web dev, technician).
17. `SkillsSection.astro` (categorized, grounded in CV).
18. `ContactSection.astro` (email, GitHub, LinkedIn, WhatsApp, TikTok, YouTube,
    CV state).

### Phase 4 — Projects
19. `src/pages/projects/index.astro` + `es/proyectos/index.astro` full list.
20. `src/pages/projects/[slug].astro` + `es/proyectos/[slug].astro` detail
    pages with the 10-section structure.
21. `ProjectVisual.astro`: original SVG diagram per project, swappable for real
    screenshots when supplied.
22. Preserve CyclingSafety caveats (quantization vs. ESP32 accuracy;
    overlapping-window leakage caveat).

### Phase 5 — About
23. `src/pages/about.astro` + `src/pages/es/sobre-mi.astro`:
    focus, experience reviewing AI code, timeline, education, certifications,
    languages. TODO markers for unverified dates/status.

### Phase 6 — Agent docs
24. `AGENTS.md` (root): how agents read instructions, memory, context, and
    project conventions.
25. `MEMORY.md` (root): dynamic memory ledger (decisions, pending assets,
    open questions).

### Phase 7 — Quality
26. `npm run check` (astro check) + `cf build`.
27. `cf dev`; verify every route, asset, translation, link, focus state,
    responsive widths, and no horizontal overflow.
28. Report changed files, checks, and pending inputs.

## 5. Pending assets (do not block the build)

| Asset | Expected path | Behavior today |
| --- | --- | --- |
| Portrait | `public/images/carlos-ramirez.webp` | Polished placeholder |
| CV PDF | `public/cv/carlos-ramirez-cv.pdf` | Supplied; CTAs active |
| Screenshots | `public/images/projects/*` | Original SVG diagrams |

## 6. Result

- 13 routes built (12 content pages + 404), zero client-side JavaScript.
- `astro check`: 0 errors, 0 warnings.
- Lighthouse (desktop, dev): Accessibility 100, Best Practices 100, SEO 100,
  Agentic Browsing 100.
- No horizontal overflow at 320, 390, 768, or 1440 px.
- No broken internal links.
- `wrangler deploy --dry-run --assets ./dist` validates 46 files.
- CV supplied and served; portrait remains the only pending visual input.

## 6. Content guardrails

- No fabricated metrics, testimonials, awards, employers, dates, or links.
- No claim of training model parameters; describe evaluation/code review.
- No invented graduation status; UNAL listed as 2021–2026 degree program.
- LinkedIn uses the real scraped URL `linkedin.com/in/carlosrmmz`.
- All copy exists in both EN and ES; never mix languages in one view.
