export const SITE = {
  name: 'Carlos David Ramírez Muñoz',
  shortName: 'Carlos Ramírez',
  role: {
    en: 'Software Engineer',
    es: 'Ingeniero de Software',
  },
  location: {
    en: 'Bogotá, Colombia',
    es: 'Bogotá, Colombia',
  },
  email: 'carlosramirez9045@gmail.com',
  url: 'https://carlosramirez.app',
  links: {
    github: 'https://github.com/w1sec0d',
    linkedin: 'https://www.linkedin.com/in/carlosrmmz',
    whatsapp: 'https://wa.me/573002146746',
    tiktok: 'https://www.tiktok.com/@codewi',
    youtube: 'https://www.youtube.com/@codewi',
  },
} as const;

/** Configurable asset paths — drop the real files here when available. */
export const ASSETS = {
  portrait: '/images/carlos-ramirez.webp',
  cv: '/cv/carlos-ramirez-cv.pdf',
} as const;

export type SocialKey = keyof typeof SITE.links;

export interface SocialLink {
  key: SocialKey;
  label: string;
  handle: string;
}

export const SOCIALS: SocialLink[] = [
  { key: 'github', label: 'GitHub', handle: '@w1sec0d' },
  { key: 'linkedin', label: 'LinkedIn', handle: 'in/carlosrmmz' },
  { key: 'whatsapp', label: 'WhatsApp', handle: 'wa.me' },
  { key: 'tiktok', label: 'TikTok', handle: '@codewi' },
  { key: 'youtube', label: 'YouTube', handle: '@codewi' },
];

export const SOCIAL_ORDER: SocialKey[] = [
  'github',
  'linkedin',
  'whatsapp',
  'tiktok',
  'youtube',
];
