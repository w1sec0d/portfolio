# Build a Bilingual Engineering Portfolio — Carlos David Ramírez Muñoz

Act as a senior frontend engineer, product designer, and design-systems specialist. Implement a complete, polished, production-ready personal portfolio website for Carlos David Ramírez Muñoz. Grill me with questions about the project 
important decisions before any code is written. 

Lets first plan the project with clear tasks and details. You can use place holders as needed. Currently, theres an old project
whose only useful content are the project links and social media links. The rest of the content is outdated and should be replaced with the new content described below.

Generate agents.md with AI agents instructions and memory.md with dynamic memory instructions. The agents should be able to read the instructions and memory files, and use them to implement the portfolio website. See also .opencode/context for additional information about carlos's work and experience.

Build a distinctive portfolio for a software engineer specializing in:

- Full-stack web development
- Software architecture and distributed systemscarlos-ramirez-cv.pdf
- Applied AI and machine learning

The portfolio must communicate engineering depth, thoughtful technical decisions, and the ability to build complete systems, from architecture and model development to deployment.

Target audience: software engineering recruiters, technical hiring managers, and international technology teams.

The site should feel personal, technical, modern, and deliberately art-directed. Avoid generic developer portfolio templates.

## 2. Visual identity

Use a dark, engineering-oriented visual system with orange as the personal signature color.

### Initial design tokens

- Background: `#0B0D10`
- Surface: `#12161B`
- Elevated surface: `#191E25`
- Borders: `#28303A`
- Primary text: `#F4F1EC`
- Secondary text: `#A7AFBA`
- Signature orange: `#F97316`
- Orange hover: `#FB923C`
- Dark text on orange: `#171717`

Centralize these values in CSS custom properties so the design can evolve consistently. Adjust shades if necessary to satisfy accessibility and contrast requirements.

### Design language

- Technical, editorial, and minimal.
- Strong typographic hierarchy and generous spacing.
- Subtle grid structures, fine borders, technical labels, and carefully composed diagrams.
- Small monospaced labels for metadata and technical annotations.
- Orange used selectively for emphasis, links, buttons, active navigation, and the engineering illustration.
- Clear page rhythm and consistent layout widths.
- Use CSS and inline SVG for visual details instead of unnecessary image or animation dependencies.

Avoid:
- Generic purple/blue AI gradients.
- Excessive glassmorphism.
- Huge rounded cards everywhere.
- Decorative animations with no functional purpose.
- Fake terminal windows, fake code snippets, fake testimonials, or invented performance claims.
- Stock imagery that does not represent my work.
- Excessive motion or effects that compromise readability.

## 3. Hero composition — highest priority

Create an impressive two-column hero on desktop.

### Left side: personal introduction

Display:

Carlos David Ramírez Muñoz

English headline:
"I build software from architecture to deployment."

English supporting copy:
"Full-stack development, distributed systems, and applied AI — focused on turning complex ideas into useful, reliable software."

Spanish headline:
"Construyo software desde la arquitectura hasta su implementación."

Spanish supporting copy:
"Desarrollo Full-Stack, sistemas distribuidos e IA aplicada para convertir ideas complejas en software útil y confiable."

Use a concise specialty label above the headline:
"SOFTWARE ENGINEERING / FULL-STACK / APPLIED AI"

Add two primary actions:
- View Projects / Ver proyectos
- Download CV / Descargar CV

Add restrained links to GitHub, LinkedIn, and email. Use the actual GitHub profile and email included in the project information. Do not invent a LinkedIn URL.

The CTA for downloading the CV must only be active if the actual CV file exists in the project. Otherwise, make the asset path configurable and report that the PDF still needs to be supplied.

### Right side: portrait + original engineering illustration

The hero MUST combine two visual components:

A. **Professional portrait**
- Reserve a clear, prominent space for my real professional photograph.
- Use `/images/carlos-ramirez.webp` as the configurable default asset path.
- Use an intentional crop, preferably a portrait-oriented rectangular composition with a refined border and subtle orange accent.
- Keep the image distinct from the illustration instead of blending both into an indistinguishable background.
- Provide appropriate alternative text and image dimensions.
- Never invent or generate a fictional photograph of me.
- First inspect the workspace for a real portrait. If none exists, implement a polished placeholder that preserves the intended composition and report that I need to provide the photograph.

B. **Original software-engineering illustration**
Create an original, lightweight SVG component, for example `HeroEngineeringArt.astro`.

The graphic should visually combine:
- Connected nodes and paths inspired by system architecture and distributed services.
- A compact sequence of connected components or layers, suggesting data flow through a software system.
- An inertial time-series waveform inspired by accelerometer or gyroscope signals.
- Small orange highlights representing critical nodes or detected events.
- Fine technical grid lines, coordinate-like marks, and subtle geometric framing.

This must be original SVG artwork implemented as part of the site, not an external stock graphic.

Compose it behind, around, or adjacent to the portrait to create depth while maintaining excellent legibility. The photograph must remain recognizable and visually important.

Use SVG paths, strokes, circles, and rectangles. Keep the illustration decorative and accessible, using appropriate `aria-hidden` handling when it conveys no essential content.

On mobile, simplify the composition and stack the elements deliberately. Do not shrink the hero into an unreadable miniature diagram.

Use only subtle motion if it enhances the experience. Respect `prefers-reduced-motion`.

## 4. Internationalization

The first release must be fully bilingual in English and Spanish.

Use Astro's native routing and keep static generation as the default.

Preferred routes:
- `/` — English home page
- `/projects/` — English project listing, if a separate listing page is needed
- `/projects/ciclomart/`
- `/projects/courseclash/`
- `/projects/cyclingsafety/`
- `/about/`
- `/es/` — Spanish home page
- `/es/proyectos/`
- `/es/proyectos/ciclomart/`
- `/es/proyectos/courseclash/`
- `/es/proyectos/cyclingsafety/`
- `/es/sobre-mi/`

Keep the actual information architecture focused. If all projects fit well on the homepage, use featured project sections instead of creating redundant index pages.

Requirements:
- Visible EN / ES language switcher in the navigation.
- Switching languages should preserve the equivalent page whenever that translation exists, rather than always sending visitors to the home page.
- Every section, button, navigation item, project description, project detail page, metadata description, and accessibility label must be translated.
- Never mix English and Spanish within the same interface.
- Use language-appropriate dates and descriptions.
- Configure canonical URLs and `hreflang` metadata where appropriate.
- Ensure both language variants are generated and build successfully.
- Prefer explicit language selection over JavaScript browser-language detection.

## 5. Main page sections

Implement these sections:

### Navigation
- Name or compact personal wordmark.
- Home.
- Projects.
- About.
- Contact.
- EN / ES toggle.
- Responsive mobile navigation.

Use semantic navigation and accessible keyboard interactions.

### Hero
Use the exact portrait-plus-original-illustration direction described above.

### Selected projects
Feature three projects, each with a well-designed card containing a project name, brief problem statement, contribution, key technologies, a representative visual, and links to the detail page and repository when available.

**CicloMart — Full-Stack Development**
- Bicycle marketplace for buying and selling bicycles and cycling spare parts.
- MercadoPago integration.
- Cloudinary and Amazon RDS.
- Frontend: https://github.com/w1sec0d/ciclomart_frontend
- Backend: https://github.com/w1sec0d/ciclomart_backend

**CourseClash — Software Architecture**
- Gamified classroom platform.
- Microservices for authentication, activities, and duels.
- FastAPI, Go, Next.js, API Gateway patterns, RabbitMQ, and real-time features.
- Repository: https://github.com/w1sec0d/CourseClash

**CyclingSafety — Applied AI, TinyML & IoT**
- Multiclass classification of cycling risk events using inertial sensor data.
- MLP and 1D-CNN experiments.
- INT8 quantization and TensorFlow Lite Micro deployment on ESP32.
- MPU-6050, NEO-6M GPS, microSD, and MQTT-based event reporting to ThingsBoard.
- Python/Folium maps for geospatial risk visualization.
- Repository: https://github.com/w1sec0d/CyclingSafety

Do not invent live demos, screenshots, or repository paths. Look for actual assets in the workspace and existing repositories/files if available. Where an asset is missing, create a visually coherent placeholder with an obvious configurable path.

### Experience snapshot
Show a compact summary of relevant experience:
- Alignerr: AI-generated code review and AI-agent behavior evaluation.
- Outlier: frontend code review and UI/UX evaluation.
- Previous web development experience.

Focus on technical contributions and concise descriptions. Avoid making claims about directly training model parameters when the work consisted of evaluation, code review, or behavioral feedback.

### Technical specialties
Organize skills by category instead of displaying a wall of tags:

- Full-Stack: JavaScript, TypeScript, React, Node.js.
- Software architecture: microservices, API integration, messaging, real-time systems.
- Applied AI: Python, TensorFlow/Keras, neural networks, signal processing, model evaluation.
- Embedded / IoT: ESP32, TensorFlow Lite Micro, MQTT, sensor integration.
- Tools and infrastructure: Git, Docker, SQL, AWS-related services where supported by my experience.

Do not claim expertise in every technology. Keep the presentation grounded in my CV and project evidence.

### Contact
Use a strong but restrained closing section, with email, GitHub, LinkedIn where the actual URL is available, and CV access if the file exists.

No backend, authentication, contact database, or newsletter is required. Prefer a direct email link over implementing a form that cannot actually send messages.

## 6. Project detail pages

Give each project its own page with a consistent but flexible structure:

1. Project overview.
2. Problem and objective.
3. My role and contributions.
4. Solution and system architecture.
5. Technical implementation.
6. Main engineering decisions and trade-offs.
7. Results and limitations where supported by available evidence.
8. Technologies.
9. Repository and related links.
10. Navigation to the next or previous project.

Use appropriate screenshots, architecture diagrams, or project-specific visuals when actual assets are available.

For CyclingSafety, distinguish results from the model-conversion benchmark from performance observed on the physical ESP32. The project report notes an approximately 90.5% reduction in artifact size through quantization, while embedded field classification performance was lower than with smartphone-based data.

Also preserve the notebook's documented evaluation caveat: window-level splitting with overlapping windows and the associated potential leakage means the exploratory classification metrics should not be marketed as definitive generalization performance on unseen rides.

Do not overwhelm each project page with excessive prose. Use concise sections, clear visuals, and progressive disclosure.

## 7. About page

Create an About page that reinforces the same professional identity:
- Software engineer focused on full-stack development, architecture, and applied AI.
- Experience reviewing AI-generated code and evaluating agent behavior.
- Interest in building complete systems, from data and model development to the deployed product.
- Compact experience and education timeline grounded in the available CV.

Do not invent graduation status, dates, achievements, client names, or employment details. If information needs updating, add a clearly documented TODO rather than guessing.

## 8. Architecture and implementation

- Use the current stable Astro release compatible with the environment.
- Static output by default.
- TypeScript.
- Astro components and scoped CSS.
- Reusable design tokens and layout primitives.
- Keep content separate from presentation so translations and project descriptions remain maintainable.
- Prefer simple data structures or Astro Content Collections if they improve validation and organization.
- Avoid unnecessary React, third-party UI kits, animation libraries, and client-side JavaScript.
- Prefer native HTML and CSS interactions.
- Use semantic HTML and accessible controls.
- Make all external links and download links functional or explicitly unavailable until their assets are supplied.
- Use existing package manager conventions. Do not replace a working package manager or overwrite unrelated project files without a reason.

Suggested reusable components:
- `SiteHeader.astro`
- `LanguageSwitcher.astro`
- `HeroSection.astro`
- `HeroEngineeringArt.astro`
- `ProjectCard.astro`
- `ExperienceSection.astro`
- `SkillsSection.astro`
- `ContactSection.astro`
- `SiteFooter.astro`

Adapt the names and structure to the actual codebase where that makes sense.

## 9. Quality requirements

- Excellent layouts at mobile, tablet, and desktop widths.
- Accessible contrast, visible focus indicators, keyboard navigation, and appropriate alt text.
- Correct heading hierarchy and landmark elements.
- Appropriate page titles, meta descriptions, Open Graph metadata, canonical URLs, and bilingual `hreflang` links.
- Favicon and sitemap where appropriate.
- Optimized images and no unnecessary client-side JavaScript.
- No console errors, broken internal links, missing translations, or accidental horizontal overflow.
- Use subtle interaction feedback without sacrificing performance.
- No fake analytics, fake testimonials, fake awards, fabricated metrics, or unfinished sections disguised as completed work.

## 10. Required implementation workflow

1. Inspect the repository, existing instructions such as `AGENTS.md`, installed dependencies, and available assets before making changes.
2. Identify whether an existing Astro project should be extended or a new one initialized.
3. Implement the complete website within the existing project's conventions.
4. Build the bilingual routes and shared components.
5. Implement the hero portrait slot and the original SVG engineering illustration.
6. Add the project content and dedicated detail pages.
7. Run the production build and any existing type checks or linting commands.
8. Fix build errors, invalid routes, broken assets, and responsive issues.
9. Summarize the files created or changed, checks performed, and anything that still requires my input.

Do not fabricate a portrait if the image is missing. Do not stop because the portrait or CV PDF is unavailable; finish the rest of the website and report the missing assets.

The final result should be a cohesive, professional engineering portfolio, not a starter template with placeholder copy.