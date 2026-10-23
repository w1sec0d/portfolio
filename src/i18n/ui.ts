export type Locale = 'en' | 'es';

export interface UIStrings {
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
    menu: string;
    close: string;
    primary: string;
    mobile: string;
  };
  skip: string;
  lang: {
    label: string;
    switchTo: string;
    en: string;
    es: string;
    current: string;
  };
  hero: {
    label: string;
    headline: string;
    support: string;
    viewProjects: string;
    downloadCv: string;
    cvPending: string;
    linksLabel: string;
    portraitAlt: string;
    portraitPending: string;
    availability: string;
  };
  projects: {
    selectedLabel: string;
    selectedTitle: string;
    selectedNote: string;
    viewAll: string;
    allLabel: string;
    allTitle: string;
    allNote: string;
    problem: string;
    contribution: string;
    stack: string;
    links: string;
    frontend: string;
    backend: string;
    repository: string;
    openProject: string;
    index: string;
    project: string;
    focus: string;
    year: string;
    details: string;
  };
  experience: {
    label: string;
    title: string;
    note: string;
    present: string;
  };
  skills: {
    label: string;
    title: string;
    note: string;
  };
  contact: {
    label: string;
    title: string;
    note: string;
    email: string;
    socials: string;
    cv: string;
    cvPending: string;
  };
  footer: {
    builtWith: string;
    rights: string;
    backToTop: string;
  };
  about: {
    label: string;
    title: string;
    intro: string;
    focusLabel: string;
    focusValue: string;
    experienceLabel: string;
    educationLabel: string;
    certificationsLabel: string;
    languagesLabel: string;
    currentlyLabel: string;
    reviewNote: string;
    locationLabel: string;
  };
  detail: {
    back: string;
    overview: string;
    problem: string;
    role: string;
    architecture: string;
    implementation: string;
    decisions: string;
    results: string;
    limitations: string;
    technologies: string;
    links: string;
    next: string;
    previous: string;
    atAGlance: string;
    roleLabel: string;
    yearLabel: string;
    focusLabel: string;
    stackLabel: string;
    visualPending: string;
    contents: string;
  };
  notFound: {
    title: string;
    body: string;
    home: string;
  };
  meta: {
    homeTitle: string;
    homeDescription: string;
    projectsTitle: string;
    projectsDescription: string;
    aboutTitle: string;
    aboutDescription: string;
  };
  languages: {
    spanish: string;
    english: string;
    portuguese: string;
    native: string;
    professional: string;
    beginner: string;
  };
}

export const ui: Record<Locale, UIStrings> = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      menu: 'Open menu',
      close: 'Close menu',
      primary: 'Primary',
      mobile: 'Mobile primary',
    },
    skip: 'Skip to content',
    lang: {
      label: 'Language',
      switchTo: 'Ver en español',
      en: 'EN',
      es: 'ES',
      current: 'Current language',
    },
    hero: {
      label: 'Software engineering / Full-stack / Applied AI',
      headline: 'I build software from architecture to deployment.',
      support:
        'Full-stack development, distributed systems, and applied AI — focused on turning complex ideas into useful, reliable software.',
      viewProjects: 'View projects',
      downloadCv: 'Download CV',
      cvPending: 'PDF pending',
      linksLabel: 'Elsewhere',
      portraitAlt: 'Portrait of Carlos David Ramírez Muñoz',
      portraitPending: 'Photograph pending',
      availability: 'Open to software engineering roles',
    },
    projects: {
      selectedLabel: 'Selected work',
      selectedTitle: 'Three systems, from architecture to deployment.',
      selectedNote:
        'Full-stack product work, distributed architecture, and applied machine learning on constrained hardware.',
      viewAll: 'All projects',
      allLabel: 'Project index',
      allTitle: 'A complete view of the systems in this portfolio.',
      allNote:
        'Each entry links to its architecture notes and repositories. More work will be added as it is documented.',
      problem: 'Problem',
      contribution: 'Contribution',
      stack: 'Stack',
      links: 'Links',
      frontend: 'Frontend',
      backend: 'Backend',
      repository: 'Repository',
      openProject: 'Read the case study',
      index: 'Index',
      project: 'Project',
      focus: 'Focus',
      year: 'Year',
      details: 'Details',
    },
    experience: {
      label: 'Experience',
      title: 'Code review, AI evaluation, and shipped web work.',
      note: 'A compact record of the roles that shaped how I build and review software.',
      present: 'Present',
    },
    skills: {
      label: 'Capabilities',
      title: 'Grounded in systems I have built.',
      note: 'Grouped by practice, not presented as a wall of tags.',
    },
    contact: {
      label: 'Contact',
      title: "Let's build something that has to work.",
      note: 'Open to full-stack, platform, and applied AI roles. Email is the fastest route.',
      email: 'Email',
      socials: 'Social',
      cv: 'Curriculum',
      cvPending: 'PDF pending',
    },
    footer: {
      builtWith: 'Built with Astro. Deployed on Cloudflare.',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
    about: {
      label: 'About',
      title: 'I care about the whole system, not just the happy path.',
      intro:
        "I'm a software engineer working across full-stack development, software architecture, and applied AI. I like problems that span the stack: the data, the model, the service boundaries, and the interface someone actually uses.",
      focusLabel: 'Focus',
      focusValue: 'Full-stack / Architecture / Applied AI',
      experienceLabel: 'Experience',
      educationLabel: 'Education',
      certificationsLabel: 'Certifications',
      languagesLabel: 'Languages',
      currentlyLabel: 'Currently',
      reviewNote:
        'My work with Alignerr and Outlier focuses on reviewing AI-generated code and evaluating agent behaviour — logic, security, maintainability, accessibility, and whether an action is grounded in the request.',
      locationLabel: 'Location',
    },
    detail: {
      back: 'All projects',
      overview: 'Overview',
      problem: 'Problem and objective',
      role: 'Role and contributions',
      architecture: 'Solution and architecture',
      implementation: 'Technical implementation',
      decisions: 'Engineering decisions',
      results: 'Results',
      limitations: 'Limitations',
      technologies: 'Technologies',
      links: 'Repository and links',
      next: 'Next project',
      previous: 'Previous project',
      atAGlance: 'At a glance',
      roleLabel: 'Role',
      yearLabel: 'Year',
      focusLabel: 'Focus',
      stackLabel: 'Stack',
      visualPending: 'Visual pending',
      contents: 'Contents',
    },
    notFound: {
      title: 'Page not found',
      body: "The page you're looking for doesn't exist or has moved.",
      home: 'Back home',
    },
    meta: {
      homeTitle: 'Carlos David Ramírez Muñoz — Software Engineer',
      homeDescription:
        'Full-stack development, distributed systems, and applied AI. Software engineer building reliable systems from architecture to deployment.',
      projectsTitle: 'Projects — Carlos David Ramírez Muñoz',
      projectsDescription:
        'Full-stack, distributed architecture, and applied AI projects, with architecture notes and repositories.',
      aboutTitle: 'About — Carlos David Ramírez Muñoz',
      aboutDescription:
        'Software engineer focused on full-stack development, software architecture, and applied AI.',
    },
    languages: {
      spanish: 'Spanish',
      english: 'English',
      portuguese: 'Portuguese',
      native: 'Native',
      professional: 'Professional working proficiency',
      beginner: 'Beginner',
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto',
      menu: 'Abrir menú',
      close: 'Cerrar menú',
      primary: 'Principal',
      mobile: 'Principal móvil',
    },
    skip: 'Saltar al contenido',
    lang: {
      label: 'Idioma',
      switchTo: 'View in English',
      en: 'EN',
      es: 'ES',
      current: 'Idioma actual',
    },
    hero: {
      label: 'Ingeniería de software / Full-stack / IA aplicada',
      headline: 'Construyo software desde la arquitectura hasta su implementación.',
      support:
        'Desarrollo Full-Stack, sistemas distribuidos e IA aplicada para convertir ideas complejas en software útil y confiable.',
      viewProjects: 'Ver proyectos',
      downloadCv: 'Descargar CV',
      cvPending: 'PDF pendiente',
      linksLabel: 'En otros sitios',
      portraitAlt: 'Retrato de Carlos David Ramírez Muñoz',
      portraitPending: 'Fotografía pendiente',
      availability: 'Abierto a roles de ingeniería de software',
    },
    projects: {
      selectedLabel: 'Trabajo seleccionado',
      selectedTitle: 'Tres sistemas, de la arquitectura al despliegue.',
      selectedNote:
        'Producto full-stack, arquitectura distribuida y aprendizaje automático aplicado en hardware limitado.',
      viewAll: 'Todos los proyectos',
      allLabel: 'Índice de proyectos',
      allTitle: 'Una vista completa de los sistemas de este portafolio.',
      allNote:
        'Cada entrada enlaza a sus notas de arquitectura y repositorios. Se añadirá más trabajo a medida que esté documentado.',
      problem: 'Problema',
      contribution: 'Contribución',
      stack: 'Stack',
      links: 'Enlaces',
      frontend: 'Frontend',
      backend: 'Backend',
      repository: 'Repositorio',
      openProject: 'Leer el caso',
      index: 'Índice',
      project: 'Proyecto',
      focus: 'Enfoque',
      year: 'Año',
      details: 'Detalles',
    },
    experience: {
      label: 'Experiencia',
      title: 'Revisión de código, evaluación de IA y desarrollo web entregado.',
      note: 'Un registro compacto de los roles que formaron mi forma de construir y revisar software.',
      present: 'Presente',
    },
    skills: {
      label: 'Capacidades',
      title: 'Basado en sistemas que he construido.',
      note: 'Agrupado por práctica, no presentado como un muro de etiquetas.',
    },
    contact: {
      label: 'Contacto',
      title: 'Construyamos algo que tenga que funcionar.',
      note: 'Abierto a roles full-stack, plataforma e IA aplicada. El correo es la vía más rápida.',
      email: 'Correo',
      socials: 'Social',
      cv: 'Currículum',
      cvPending: 'PDF pendiente',
    },
    footer: {
      builtWith: 'Construido con Astro. Desplegado en Cloudflare.',
      rights: 'Todos los derechos reservados.',
      backToTop: 'Volver arriba',
    },
    about: {
      label: 'Sobre mí',
      title: 'Me importa el sistema completo, no solo el camino feliz.',
      intro:
        'Soy ingeniero de software y trabajo en desarrollo full-stack, arquitectura de software e IA aplicada. Me gustan los problemas que cruzan todo el stack: los datos, el modelo, los límites entre servicios y la interfaz que alguien realmente usa.',
      focusLabel: 'Enfoque',
      focusValue: 'Full-stack / Arquitectura / IA aplicada',
      experienceLabel: 'Experiencia',
      educationLabel: 'Educación',
      certificationsLabel: 'Certificaciones',
      languagesLabel: 'Idiomas',
      currentlyLabel: 'Actualmente',
      reviewNote:
        'Mi trabajo con Alignerr y Outlier se centra en revisar código generado por IA y evaluar el comportamiento de agentes: lógica, seguridad, mantenibilidad, accesibilidad y si una acción está fundamentada en la solicitud.',
      locationLabel: 'Ubicación',
    },
    detail: {
      back: 'Todos los proyectos',
      overview: 'Resumen',
      problem: 'Problema y objetivo',
      role: 'Rol y contribuciones',
      architecture: 'Solución y arquitectura',
      implementation: 'Implementación técnica',
      decisions: 'Decisiones de ingeniería',
      results: 'Resultados',
      limitations: 'Limitaciones',
      technologies: 'Tecnologías',
      links: 'Repositorio y enlaces',
      next: 'Siguiente proyecto',
      previous: 'Proyecto anterior',
      atAGlance: 'De un vistazo',
      roleLabel: 'Rol',
      yearLabel: 'Año',
      focusLabel: 'Enfoque',
      stackLabel: 'Stack',
      visualPending: 'Visual pendiente',
      contents: 'Contenido',
    },
    notFound: {
      title: 'Página no encontrada',
      body: 'La página que buscas no existe o se ha movido.',
      home: 'Volver al inicio',
    },
    meta: {
      homeTitle: 'Carlos David Ramírez Muñoz — Ingeniero de Software',
      homeDescription:
        'Desarrollo full-stack, sistemas distribuidos e IA aplicada. Ingeniero de software construyendo sistemas confiables desde la arquitectura hasta el despliegue.',
      projectsTitle: 'Proyectos — Carlos David Ramírez Muñoz',
      projectsDescription:
        'Proyectos full-stack, de arquitectura distribuida e IA aplicada, con notas de arquitectura y repositorios.',
      aboutTitle: 'Sobre mí — Carlos David Ramírez Muñoz',
      aboutDescription:
        'Ingeniero de software enfocado en desarrollo full-stack, arquitectura de software e IA aplicada.',
    },
    languages: {
      spanish: 'Español',
      english: 'Inglés',
      portuguese: 'Portugués',
      native: 'Nativo',
      professional: 'Competencia profesional',
      beginner: 'Principiante',
    },
  },
};
