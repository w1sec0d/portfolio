import type { Locale } from '../i18n';

export type L10n = Record<Locale, string>;

export type ProjectVisual = 'ciclomart' | 'courseclash' | 'cyclingsafety';

export interface ProjectLink {
  key: 'frontend' | 'backend' | 'repository' | 'paper';
  href: string;
}

export interface Decision {
  title: L10n;
  body: L10n;
}

export interface ProjectImage {
  src: string;
  alt: L10n;
  fit?: 'cover' | 'contain';
}

export interface Project {
  slug: string;
  name: string;
  category: L10n;
  year?: string;
  summary: L10n;
  contribution: L10n;
  technologies: string[];
  links: ProjectLink[];
  visual: ProjectVisual;
  gallery?: Partial<Record<Locale, ProjectImage[]>>;
  detail: {
    overview: L10n;
    problem: L10n;
    role: L10n;
    architecture: L10n;
    implementation: L10n;
    decisions: Decision[];
    results: L10n;
    limitations?: L10n;
  };
}

const courseclashGallery: ProjectImage[] = [
  {
    src: '/images/projects/courseclash-landing.webp',
    alt: {
      en: 'CourseClash landing page',
      es: 'Landing de CourseClash',
    },
  },
  {
    src: '/images/projects/courseclash-login.webp',
    alt: {
      en: 'CourseClash sign-in screen',
      es: 'Pantalla de inicio de sesión de CourseClash',
    },
  },
  {
    src: '/images/projects/courseclash-duel.webp',
    alt: {
      en: 'CourseClash academic duel screen',
      es: 'Pantalla de duelos académicos de CourseClash',
    },
  },
];

export const projects: Project[] = [
  {
    slug: 'ciclomart',
    name: 'CicloMart',
    category: {
      en: 'Full-Stack Development',
      es: 'Desarrollo Full-Stack',
    },
    summary: {
      en: 'A bicycle marketplace for buying and selling bikes and cycling spare parts, built around trust and fast discovery.',
      es: 'Un marketplace de bicicletas para comprar y vender bicicletas y repuestos de ciclismo, construido alrededor de la confianza y el descubrimiento rápido.',
    },
    contribution: {
      en: 'Led full-stack development: seller ownership verification, advanced filtering, cart, and MercadoPago checkout.',
      es: 'Lideré el desarrollo full-stack: verificación de propiedad del vendedor, filtros avanzados, carrito y pago con MercadoPago.',
    },
    technologies: [
      'React',
      'JavaScript / TypeScript',
      'Node.js',
      'SQL',
      'Amazon RDS',
      'Cloudinary',
      'MercadoPago',
    ],
    links: [
      {
        key: 'frontend',
        href: 'https://github.com/w1sec0d/ciclomart_frontend',
      },
      {
        key: 'backend',
        href: 'https://github.com/w1sec0d/ciclomart_backend',
      },
    ],
    visual: 'ciclomart',
    gallery: {
      en: [
        {
          src: '/images/projects/ciclomart-en.webp',
          alt: {
            en: 'CicloMart English landing page with the hero and best sellers',
            es: 'Landing de CicloMart en inglés con el hero y los más vendidos',
          },
        },
      ],
      es: [
        {
          src: '/images/projects/ciclomart-es.webp',
          alt: {
            en: 'CicloMart Spanish landing page with the hero and best sellers',
            es: 'Landing de CicloMart en español con el hero y los más vendidos',
          },
        },
      ],
    },
    detail: {
      overview: {
        en: 'CicloMart is a two-repository marketplace where cyclists list bicycles and spare parts, and buyers search, filter, and purchase through a managed checkout.',
        es: 'CicloMart es un marketplace de dos repositorios donde ciclistas publican bicicletas y repuestos, y compradores buscan, filtran y compran mediante un checkout gestionado.',
      },
      problem: {
        en: 'Buying a used bicycle online is risky: listings are hard to compare, ownership is unclear, and payment happens off-platform. The objective was a focused marketplace where listing, discovery, and payment felt trustworthy.',
        es: 'Comprar una bicicleta usada en línea es riesgoso: las publicaciones son difíciles de comparar, la propiedad no está clara y el pago ocurre fuera de la plataforma. El objetivo fue un marketplace enfocado donde publicar, descubrir y pagar resultara confiable.',
      },
      role: {
        en: 'I built the frontend and backend, from data modelling and API integration to the listing and checkout flows. I also handled ownership verification, catalog filtering, media storage, and payment integration.',
        es: 'Construí el frontend y el backend, desde el modelado de datos y la integración de APIs hasta los flujos de publicación y checkout. También me encargué de la verificación de propiedad, el filtrado del catálogo, el almacenamiento de medios y la integración de pagos.',
      },
      architecture: {
        en: 'A React frontend talks to an HTTP API backed by a relational database on Amazon RDS. Product media is stored on Cloudinary, and MercadoPago authorizes payments. Seller ownership is verified before a listing becomes publicly purchasable.',
        es: 'Un frontend en React se comunica con una API HTTP respaldada por una base de datos relacional en Amazon RDS. Los medios de los productos se almacenan en Cloudinary y MercadoPago autoriza los pagos. La propiedad del vendedor se verifica antes de que una publicación pueda comprarse públicamente.',
      },
      implementation: {
        en: 'The catalog supports multi-field filtering so buyers can narrow by bicycle type, condition, and parts. The cart keeps the selection through checkout, and the API validates listing state and ownership before payment. Media is uploaded to Cloudinary, keeping binary assets out of the database.',
        es: 'El catálogo admite filtrado por múltiples campos para que los compradores acoten por tipo de bicicleta, condición y repuestos. El carrito mantiene la selección durante el checkout y la API valida el estado y la propiedad de la publicación antes del pago. Los medios se suben a Cloudinary, manteniendo los archivos binarios fuera de la base de datos.',
      },
      decisions: [
        {
          title: {
            en: 'Managed services over self-hosting',
            es: 'Servicios gestionados en lugar de autohospedaje',
          },
          body: {
            en: 'RDS and Cloudinary replace database and media operations, so the project stays focused on product behaviour instead of infrastructure maintenance.',
            es: 'RDS y Cloudinary reemplazan la operación de base de datos y medios, para que el proyecto se centre en el comportamiento del producto y no en el mantenimiento de infraestructura.',
          },
        },
        {
          title: {
            en: 'Verify ownership before sale',
            es: 'Verificar la propiedad antes de vender',
          },
          body: {
            en: 'A verification step adds friction when listing, but it reduces fraudulent listings and gives buyers a reason to trust the marketplace.',
            es: 'Un paso de verificación añade fricción al publicar, pero reduce publicaciones fraudulentas y da a los compradores una razón para confiar en el marketplace.',
          },
        },
        {
          title: {
            en: 'Two repositories, one contract',
            es: 'Dos repositorios, un contrato',
          },
          body: {
            en: 'Separating frontend and backend keeps the API contract explicit and lets each side deploy independently.',
            es: 'Separar frontend y backend mantiene explícito el contrato de la API y permite que cada lado se despliegue de forma independiente.',
          },
        },
      ],
      results: {
        en: 'The marketplace supports end-to-end listing, discovery, cart, and payment flows in separate frontend and backend repositories. No production usage metrics are published.',
        es: 'El marketplace cubre flujos de publicación, descubrimiento, carrito y pago de extremo a extremo, en repositorios separados de frontend y backend. No se publican métricas de uso en producción.',
      },
      limitations: {
        en: "No live demo is linked. The payment flow was implemented against MercadoPago's integration model and is not presented as a running commercial service.",
        es: 'No se enlaza una demo en vivo. El flujo de pago se implementó según el modelo de integración de MercadoPago y no se presenta como un servicio comercial en operación.',
      },
    },
  },
  {
    slug: 'courseclash',
    name: 'CourseClash',
    category: {
      en: 'Software Architecture',
      es: 'Arquitectura de Software',
    },
    year: '2025',
    summary: {
      en: 'A gamified classroom platform where students complete activities and duel each other in real time.',
      es: 'Una plataforma educativa gamificada donde los estudiantes completan actividades y se enfrentan en duelos en tiempo real.',
    },
    contribution: {
      en: 'Led architecture and full-stack implementation, splitting authentication, activities, and duels into independent services.',
      es: 'Lideré la arquitectura y la implementación full-stack, separando autenticación, actividades y duelos en servicios independientes.',
    },
    technologies: [
      'FastAPI',
      'Go',
      'Next.js',
      'API Gateway',
      'RabbitMQ',
      'WebSockets',
    ],
    links: [
      {
        key: 'repository',
        href: 'https://github.com/w1sec0d/CourseClash',
      },
    ],
    visual: 'courseclash',
    gallery: {
      en: courseclashGallery,
      es: courseclashGallery,
    },
    detail: {
      overview: {
        en: 'CourseClash is an educational platform that motivates students with achievements, rankings, profile customization, and real-time duels. It was built with a small team to practise software architecture in a realistic product.',
        es: 'CourseClash es una plataforma educativa que motiva a los estudiantes con logros, rankings, personalización de perfil y duelos en tiempo real. Se construyó con un equipo pequeño para practicar arquitectura de software en un producto realista.',
      },
      problem: {
        en: 'A single application would couple identity, classroom activity, and live gameplay. The objective was to explore how independent services, asynchronous messaging, and real-time channels could support a responsive classroom experience.',
        es: 'Una sola aplicación acoplaría identidad, actividad de aula y juego en vivo. El objetivo fue explorar cómo servicios independientes, mensajería asíncrona y canales en tiempo real podían sostener una experiencia de aula ágil.',
      },
      role: {
        en: 'I led the architecture and full-stack development with a small team: defining service boundaries, the API gateway, event flows, and the real-time duel channel, and contributing to the Next.js frontend.',
        es: 'Lideré la arquitectura y el desarrollo full-stack con un equipo pequeño: definí los límites entre servicios, el API gateway, los flujos de eventos y el canal de duelos en tiempo real, y contribuí al frontend en Next.js.',
      },
      architecture: {
        en: 'Authentication, activities, and duels run as separate services behind an API gateway. FastAPI and Go provide the backend services, RabbitMQ carries domain events, and WebSockets keep duels synchronized. A Next.js frontend consumes the gateway.',
        es: 'Autenticación, actividades y duelos se ejecutan como servicios separados detrás de un API gateway. FastAPI y Go proveen los servicios de backend, RabbitMQ transporta eventos de dominio y WebSockets mantienen sincronizados los duelos. Un frontend en Next.js consume el gateway.',
      },
      implementation: {
        en: 'The gateway centralizes routing and token validation. Services publish and consume events for activity completion, ranking updates, and duel state. The duel service pushes state over WebSockets so both players see the same progression.',
        es: 'El gateway centraliza el enrutamiento y la validación de tokens. Los servicios publican y consumen eventos de finalización de actividades, actualización de rankings y estado de duelos. El servicio de duelos empuja el estado por WebSockets para que ambos jugadores vean la misma progresión.',
      },
      decisions: [
        {
          title: {
            en: 'Service boundaries by domain',
            es: 'Límites de servicio por dominio',
          },
          body: {
            en: 'Authentication, activities, and duels change at different rates; separating them limits blast radius and lets each service evolve independently.',
            es: 'Autenticación, actividades y duelos cambian a ritmos distintos; separarlos limita el radio de impacto y permite que cada servicio evolucione de forma independiente.',
          },
        },
        {
          title: {
            en: 'Async messaging for cross-domain events',
            es: 'Mensajería asíncrona para eventos entre dominios',
          },
          body: {
            en: 'RabbitMQ decouples ranking and activity updates from the request path, trading immediate consistency for resilience.',
            es: 'RabbitMQ desacopla las actualizaciones de rankings y actividades del camino de la petición, cambiando consistencia inmediata por resiliencia.',
          },
        },
        {
          title: {
            en: 'WebSockets for duels only',
            es: 'WebSockets solo para duelos',
          },
          body: {
            en: 'Real-time transport is scoped to the feature that needs it, keeping the rest of the platform on conventional request/response.',
            es: 'El transporte en tiempo real se limita a la función que lo necesita, manteniendo el resto de la plataforma en petición/respuesta convencional.',
          },
        },
      ],
      results: {
        en: 'The platform demonstrates a working microservices topology with gateway routing, event-driven updates, and real-time duels. It is an academic project; no production load or adoption metrics are claimed.',
        es: 'La plataforma demuestra una topología de microservicios funcional con enrutamiento por gateway, actualizaciones por eventos y duelos en tiempo real. Es un proyecto académico; no se afirman métricas de carga ni adopción en producción.',
      },
      limitations: {
        en: 'Distributed services add operational overhead. The project explores architecture patterns rather than operating at production scale.',
        es: 'Los servicios distribuidos añaden sobrecarga operativa. El proyecto explora patrones de arquitectura en lugar de operar a escala de producción.',
      },
    },
  },
  {
    slug: 'cyclingsafety',
    name: 'CyclingSafety',
    category: {
      en: 'Applied AI, TinyML & IoT',
      es: 'IA Aplicada, TinyML e IoT',
    },
    year: '2026',
    summary: {
      en: 'Classifying cycling risk events from inertial sensor data, from model experiments to an INT8-quantized model on an ESP32.',
      es: 'Clasificación de eventos de riesgo en ciclismo a partir de datos de sensores inerciales, desde experimentos de modelos hasta un modelo cuantizado INT8 en un ESP32.',
    },
    contribution: {
      en: 'Built the ML pipeline, compared MLP and 1D-CNN models, and deployed the quantized model to an ESP32 with GPS and MQTT reporting.',
      es: 'Construí el pipeline de ML, comparé modelos MLP y 1D-CNN, y desplegué el modelo cuantizado en un ESP32 con GPS y reporte por MQTT.',
    },
    technologies: [
      'Python',
      'TensorFlow / Keras',
      'KerasTuner',
      'TensorFlow Lite Micro',
      'ESP32',
      'MPU-6050',
      'NEO-6M GPS',
      'MQTT',
      'ThingsBoard',
      'Folium',
    ],
    links: [
      {
        key: 'repository',
        href: 'https://github.com/w1sec0d/CyclingSafety',
      },
      {
        key: 'paper',
        href: '/docs/CyclingSafety.pdf',
      },
    ],
    visual: 'cyclingsafety',
    gallery: {
      en: [
        {
          src: '/images/projects/cyclingSafety-en.webp',
          alt: {
            en: 'CyclingSafety showcase: phone logger, confusion matrix, GPS event map, and ESP32 prototype',
            es: 'Vista general de CyclingSafety: registrador en el teléfono, matriz de confusión, mapa de eventos GPS y prototipo ESP32',
          },
          fit: 'contain',
        },
      ],
      es: [
        {
          src: '/images/projects/cyclingSafety-es.webp',
          alt: {
            en: 'CyclingSafety showcase in Spanish: phone logger, confusion matrix, GPS event map, and ESP32 prototype',
            es: 'Vista general de CyclingSafety en español: registrador en el teléfono, matriz de confusión, mapa de eventos GPS y prototipo ESP32',
          },
          fit: 'contain',
        },
      ],
    },
    detail: {
      overview: {
        en: 'CyclingSafety turns smartphone and wearable inertial signals into a multiclass classification of cycling risk events, then explores deploying that model on a low-cost ESP32 device.',
        es: 'CyclingSafety convierte señales inerciales de teléfonos y wearables en una clasificación multiclase de eventos de riesgo en ciclismo, y luego explora el despliegue de ese modelo en un dispositivo ESP32 de bajo costo.',
      },
      problem: {
        en: 'Urban cyclists face potholes, sudden braking, and uneven surfaces. Detecting these events from inertial data could support safer routes and post-ride analysis, but the model has to run close to the rider, not only in the cloud.',
        es: 'Los ciclistas urbanos enfrentan huecos, frenadas bruscas y superficies irregulares. Detectar estos eventos a partir de datos inerciales podría apoyar rutas más seguras y el análisis posterior al recorrido, pero el modelo debe ejecutarse cerca del ciclista, no solo en la nube.',
      },
      role: {
        en: 'I built the data and model pipeline, ran MLP and 1D-CNN experiments with Bayesian hyperparameter search, quantized the selected model, and integrated the embedded prototype with sensors, GPS, storage, and MQTT reporting.',
        es: 'Construí el pipeline de datos y modelos, ejecuté experimentos con MLP y 1D-CNN con búsqueda bayesiana de hiperparámetros, cuantifiqué el modelo seleccionado e integré el prototipo embebido con sensores, GPS, almacenamiento y reporte por MQTT.',
      },
      architecture: {
        en: 'The pipeline moves from IMU windows to a multiclass model, then to an INT8 TensorFlow Lite model for microcontrollers. On the ESP32, the MPU-6050 provides inertial data, the NEO-6M adds GPS, microSD stores logs, and MQTT forwards detected events to ThingsBoard. Python and Folium render event maps and severity heatmaps.',
        es: 'El pipeline pasa de ventanas de IMU a un modelo multiclase y luego a un modelo INT8 de TensorFlow Lite para microcontroladores. En el ESP32, el MPU-6050 aporta datos inerciales, el NEO-6M añade GPS, la microSD almacena registros y MQTT reenvía los eventos detectados a ThingsBoard. Python y Folium generan mapas de eventos y mapas de calor de severidad.',
      },
      implementation: {
        en: 'The 1D-CNN operates directly on time-series windows, while the MLP uses engineered features. KerasTuner searches architecture and training parameters. INT8 quantization shrinks the artifact for TensorFlow Lite Micro, and event predictions are joined with GPS coordinates to produce maps.',
        es: 'La 1D-CNN opera directamente sobre ventanas de series temporales, mientras que el MLP usa características diseñadas. KerasTuner busca arquitectura y parámetros de entrenamiento. La cuantización INT8 reduce el artefacto para TensorFlow Lite Micro, y las predicciones de eventos se unen con coordenadas GPS para producir mapas.',
      },
      decisions: [
        {
          title: {
            en: 'On-device inference',
            es: 'Inferencia en el dispositivo',
          },
          body: {
            en: 'Running the model on the ESP32 reduces dependence on connectivity and keeps raw sensor data local, at the cost of a smaller model and a tighter compute budget.',
            es: 'Ejecutar el modelo en el ESP32 reduce la dependencia de la conectividad y mantiene locales los datos crudos del sensor, a cambio de un modelo más pequeño y un presupuesto de cómputo más ajustado.',
          },
        },
        {
          title: {
            en: '1D-CNN over engineered features',
            es: '1D-CNN frente a características diseñadas',
          },
          body: {
            en: 'Convolutional windows learn local temporal patterns, while the MLP remains a lighter baseline for comparison.',
            es: 'Las ventanas convolucionales aprenden patrones temporales locales, mientras que el MLP sigue siendo una línea base más ligera para comparar.',
          },
        },
        {
          title: {
            en: 'Quantization for deployment',
            es: 'Cuantización para el despliegue',
          },
          body: {
            en: 'INT8 quantization makes the model fit microcontroller constraints; the trade-off is a measurable gap between conversion benchmarks and field behaviour.',
            es: 'La cuantización INT8 permite que el modelo quepa en las restricciones del microcontrolador; el costo es una brecha medible entre los benchmarks de conversión y el comportamiento en campo.',
          },
        },
      ],
      results: {
        en: 'The project report documents an approximately 90.5% reduction in artifact size through quantization. Embedded field classification performance was lower than with smartphone-based data, which is reported here rather than smoothed over.',
        es: 'El informe del proyecto documenta una reducción aproximada del 90,5 % en el tamaño del artefacto mediante cuantización. El rendimiento de clasificación en campo con el dispositivo embebido fue inferior al obtenido con datos de teléfono inteligente, y se reporta aquí sin suavizarlo.',
      },
      limitations: {
        en: 'The notebook documents window-level splitting with overlapping windows, so exploratory classification metrics may be affected by leakage. Those metrics should not be read as definitive generalization performance on unseen rides. Quantization results describe model conversion, not ESP32 field accuracy.',
        es: 'El cuaderno documenta una división a nivel de ventana con ventanas solapadas, por lo que las métricas exploratorias de clasificación pueden verse afectadas por fuga de información. Esas métricas no deben interpretarse como rendimiento definitivo de generalización en recorridos no vistos. Los resultados de cuantización describen la conversión del modelo, no la precisión en campo del ESP32.',
      },
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  previous: Project;
  next: Project;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  const safeIndex = index === -1 ? 0 : index;
  const previous = projects[(safeIndex - 1 + projects.length) % projects.length];
  const next = projects[(safeIndex + 1) % projects.length];
  return { previous, next };
}
