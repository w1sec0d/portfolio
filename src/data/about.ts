import type { L10n } from './projects';

export interface EducationEntry {
  institution: string;
  program: L10n;
  start: string;
  end: string;
  note: L10n;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface LanguageEntry {
  nameKey: 'spanish' | 'english' | 'portuguese';
  levelKey: 'native' | 'professional' | 'beginner';
  detail?: string;
}

export const education: EducationEntry[] = [
  {
    institution: 'Universidad Nacional de Colombia',
    program: {
      en: 'Systems and Computing Engineering',
      es: 'Ingeniería de Sistemas y Computación',
    },
    start: '2021',
    end: '2026',
    note: {
      en: 'Grade 4.4 · Generación E scholarship (Excellence component)',
      es: 'Nota 4.4 · Beca Generación E (componente de excelencia)',
    },
  },
  {
    institution: 'SENA',
    program: {
      en: 'Software Programming Technician',
      es: 'Técnico en Programación de Software',
    },
    // TODO(verify): CV lists Jan 2018, LinkedIn lists Jan 2019.
    start: '2018',
    end: '2020',
    note: {
      en: 'Excellence award received',
      es: 'Premio a la excelencia recibido',
    },
  },
];

export const certifications: Certification[] = [
  {
    name: 'AI-Driven Software Development',
    issuer: 'BIG school',
    date: 'Oct 2026',
  },
  {
    name: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    date: 'Nov 2025',
  },
  {
    name: 'Full Stack Web Development',
    issuer: 'University of Helsinki',
    date: 'Mar 2025',
  },
  {
    name: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco Network Academy',
    date: 'Oct 2024',
  },
  {
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Feb 2023',
  },
  {
    name: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: 'Jul 2021',
  },
  {
    name: 'Python Programming',
    issuer: 'Mimo',
    date: 'Jun 2021',
  },
  {
    name: 'B2 English Course',
    issuer: 'Cafam Colombia',
    date: 'Sep 2018',
  },
];

export const languages: LanguageEntry[] = [
  { nameKey: 'spanish', levelKey: 'native' },
  {
    nameKey: 'english',
    levelKey: 'professional',
    detail: 'B2 · Duolingo 130',
  },
  { nameKey: 'portuguese', levelKey: 'beginner' },
];
