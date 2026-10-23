import type { L10n } from './projects';

export interface FocusArea {
  title: L10n;
  body: L10n;
}

export const focusAreas: FocusArea[] = [
  {
    title: {
      en: 'Full-stack web development',
      es: 'Desarrollo web full-stack',
    },
    body: {
      en: 'Product interfaces and the APIs behind them, from data modelling and integration to the deployed experience.',
      es: 'Interfaces de producto y las APIs que las sostienen, desde el modelado de datos y la integración hasta la experiencia desplegada.',
    },
  },
  {
    title: {
      en: 'Software architecture',
      es: 'Arquitectura de software',
    },
    body: {
      en: 'Service boundaries, asynchronous messaging, and real-time systems designed so the whole thing can change safely.',
      es: 'Límites entre servicios, mensajería asíncrona y sistemas en tiempo real diseñados para que todo pueda cambiar sin romperse.',
    },
  },
  {
    title: {
      en: 'Applied AI',
      es: 'IA aplicada',
    },
    body: {
      en: 'Models that leave the notebook: data pipelines, honest evaluation, quantization, and deployment on constrained hardware.',
      es: 'Modelos que salen del cuaderno: pipelines de datos, evaluación honesta, cuantización y despliegue en hardware limitado.',
    },
  },
];
