import { ui, type Locale, type UIStrings } from './ui';

export type { Locale, UIStrings };
export { ui };

export function t(locale: Locale): UIStrings {
  return ui[locale];
}

export const routes = {
  home: { en: '/', es: '/es/' },
  projects: { en: '/projects/', es: '/es/proyectos/' },
  about: { en: '/about/', es: '/es/sobre-mi/' },
  contact: { en: '/#contact', es: '/es/#contact' },
  project(slug: string, locale: Locale): string {
    return locale === 'en'
      ? `/projects/${slug}/`
      : `/es/proyectos/${slug}/`;
  },
} as const;

export function localeFromPath(pathname: string): Locale {
  return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en';
}

/** Map any known page to its counterpart in the other language. */
export function alternatePath(pathname: string): {
  href: string;
  locale: Locale;
} {
  const clean = pathname.replace(/\/+$/, '') || '/';

  if (clean === '/') return { href: '/es/', locale: 'es' };
  if (clean === '/es') return { href: '/', locale: 'en' };

  // Spanish routes -> English
  if (clean.startsWith('/es/')) {
    const rest = clean.slice(3); // strip '/es'
    if (rest === '/proyectos') return { href: '/projects/', locale: 'en' };
    if (rest.startsWith('/proyectos/')) {
      const slug = rest.slice('/proyectos/'.length);
      return { href: `/projects/${slug}/`, locale: 'en' };
    }
    if (rest === '/sobre-mi') return { href: '/about/', locale: 'en' };
    return { href: '/', locale: 'en' };
  }

  // English routes -> Spanish
  if (clean === '/projects') return { href: '/es/proyectos/', locale: 'es' };
  if (clean.startsWith('/projects/')) {
    const slug = clean.slice('/projects/'.length);
    return { href: `/es/proyectos/${slug}/`, locale: 'es' };
  }
  if (clean === '/about') return { href: '/es/sobre-mi/', locale: 'es' };

  return { href: '/es/', locale: 'es' };
}
