import type { L10n } from './projects';

export interface ExperienceEntry {
  org: string;
  role: L10n;
  start: string;
  end: string | 'present';
  location: L10n;
  bullets: L10n[];
  featured: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    org: 'Alignerr',
    role: {
      en: 'Software Engineer / AI Trainer',
      es: 'Ingeniero de Software / Entrenador de IA',
    },
    start: 'Nov 2025',
    end: 'present',
    location: { en: 'Remote', es: 'Remoto' },
    bullets: [
      {
        en: 'Review AI-generated code in Python and JavaScript/TypeScript for logic, security, and maintainability.',
        es: 'Reviso código generado por IA en Python y JavaScript/TypeScript por lógica, seguridad y mantenibilidad.',
      },
      {
        en: 'Evaluate agent behaviour, flagging destructive actions, ungrounded statements, and incorrect approaches.',
        es: 'Evalúo el comportamiento de agentes, señalando acciones destructivas, afirmaciones sin fundamento y enfoques incorrectos.',
      },
      {
        en: 'Train agents to navigate codebases, run terminal tools, and complete engineering tasks.',
        es: 'Entreno agentes para navegar bases de código, ejecutar herramientas de terminal y completar tareas de ingeniería.',
      },
    ],
    featured: true,
  },
  {
    org: 'Outlier',
    role: {
      en: 'Frontend Developer / AI Trainer',
      es: 'Desarrollador Frontend / Entrenador de IA',
    },
    start: 'May 2025',
    end: 'Jul 2025',
    location: { en: 'Remote', es: 'Remoto' },
    bullets: [
      {
        en: 'Reviewed AI-generated frontend code in HTML, CSS, JavaScript, and React for accuracy and completeness.',
        es: 'Revisé código frontend generado por IA en HTML, CSS, JavaScript y React por precisión y completitud.',
      },
      {
        en: 'Assessed interfaces against UI/UX, accessibility, and responsive-design principles.',
        es: 'Evalué interfaces según principios de UI/UX, accesibilidad y diseño responsive.',
      },
      {
        en: 'Wrote technical feedback and training content on modern web standards.',
        es: 'Escribí retroalimentación técnica y contenido de entrenamiento sobre estándares web modernos.',
      },
    ],
    featured: true,
  },
  {
    org: 'JDR Asistenciamos',
    role: {
      en: 'Junior Web Developer',
      es: 'Desarrollador Web Junior',
    },
    start: 'Jan 2022',
    end: 'Jun 2022',
    location: { en: 'Bogotá, Colombia', es: 'Bogotá, Colombia' },
    bullets: [
      {
        en: 'Built an inventory management web application used by public health hospitals in Bogotá.',
        es: 'Construí una aplicación web de gestión de inventario usada por hospitales públicos de Bogotá.',
      },
      {
        en: 'Worked with healthcare staff to translate operational needs into practical features.',
        es: 'Trabajé con personal de salud para traducir necesidades operativas en funcionalidades prácticas.',
      },
    ],
    featured: true,
  },
  {
    org: 'Centro Odontológico Mundo Oral',
    role: {
      en: 'Frontend Web Developer',
      es: 'Desarrollador Web Frontend',
    },
    start: 'Jan 2020',
    end: 'Oct 2020',
    location: { en: 'Bogotá, Colombia', es: 'Bogotá, Colombia' },
    bullets: [
      {
        en: 'Designed and built a responsive appointment and services application, replacing paper-based workflows.',
        es: 'Diseñé y construí una aplicación responsive de citas y servicios, reemplazando flujos basados en papel.',
      },
      {
        en: 'Improved scheduling and service discovery for staff and patients.',
        es: 'Mejoré la programación de citas y el descubrimiento de servicios para el personal y los pacientes.',
      },
    ],
    featured: true,
  },
  {
    org: 'Freelance',
    role: {
      en: 'Computer Technician',
      es: 'Técnico de Computadores',
    },
    start: 'Jan 2021',
    end: 'May 2025',
    location: { en: 'Bogotá, Colombia', es: 'Bogotá, Colombia' },
    bullets: [
      {
        en: 'Diagnosed and repaired hardware faults and provided remote and on-site support for individuals and small businesses.',
        es: 'Diagnostiqué y reparé fallas de hardware y brindé soporte remoto y en sitio a personas y pequeñas empresas.',
      },
    ],
    featured: false,
  },
];
