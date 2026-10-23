import type { L10n } from './projects';

export interface SkillGroup {
  title: L10n;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: { en: 'Full-Stack', es: 'Full-Stack' },
    items: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML / CSS'],
  },
  {
    title: { en: 'Software Architecture', es: 'Arquitectura de Software' },
    items: [
      'Microservices',
      'API design & integration',
      'API Gateway',
      'RabbitMQ',
      'WebSockets',
      'Real-time systems',
    ],
  },
  {
    title: { en: 'Applied AI', es: 'IA Aplicada' },
    items: [
      'Python',
      'TensorFlow / Keras',
      'MLP & 1D-CNN',
      'KerasTuner',
      'Signal processing',
      'Model evaluation',
      'INT8 quantization',
    ],
  },
  {
    title: { en: 'Embedded / IoT', es: 'Embebidos / IoT' },
    items: [
      'ESP32',
      'TensorFlow Lite Micro',
      'MPU-6050',
      'NEO-6M GPS',
      'microSD',
      'MQTT',
      'ThingsBoard',
    ],
  },
  {
    title: { en: 'Tools & Infrastructure', es: 'Herramientas e Infraestructura' },
    items: [
      'Git',
      'Docker',
      'SQL',
      'Amazon RDS',
      'AWS Cloud Foundations',
      'Cloudinary',
      'MercadoPago',
    ],
  },
];
