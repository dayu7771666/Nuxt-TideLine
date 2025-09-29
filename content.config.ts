import { defineContentConfig, defineCollection } from '@nuxt/content';
import { z } from 'zod';

// Home 页面的完整 schema
const homeSchema = z.object({
  hero: z.object({
    title: z.string(),
    description: z.string(),
    src: z.string(),
    alt: z.string(),
    ctaButton: z.string(),
    features: z.array(
      z.object({
        text: z.string(),
      })
    ),
  }),

  videoShowcase: z.object({
    title: z.string(),
    description: z.string(),
    ctaText: z.string(),
    videoSrc: z.string().url(),
  }),

  howWorks: z.object({
    title: z.string(),
    description: z.string(),
    cta: z.string(),
    steps: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
  }),

  whyUs: z.object({
    title: z.string(),
    description: z.string(),
    cta: z.string(),
    advantages: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
  }),

  indexCta: z.object({
    title: z.string(),
    description: z.string(),
    cta: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),

  products: z.object({
    title: z.string(),
    description: z.string(),
    learnMoreText: z.string(),
    quoteText: z.string(),
    learnMoreLink: z.string(),
    quoteLink: z.string(),
    items: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        href: z.string(),
        description: z.string(),
        imageSrc: z.string(),
        imageAlt: z.string(),
      })
    ),
  }),

  serviceAdvantages: z.object({
    title: z.string(),
    description: z.string(),
    advantages: z.array(
      z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
  }),

  contactForm: z.object({
    modalTitle: z.string(),
    nameLabel: z.string(),
    namePlaceholder: z.string(),
    emailLabel: z.string(),
    emailPlaceholder: z.string(),
    messageLabel: z.string(),
    messagePlaceholder: z.string(),
    consentText: z.string(),
    submitButton: z.string(),
    successMessage: z.string(),
    errorMessage: z.string(),
  }),
});

// const commonSchema = ...;
export default defineContentConfig({
  collections: {
    // English content collection
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: '',
      },
      // schema: commonSchema,
    }),

    // Home page collections for each locale
    home_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/home.yml',
        prefix: '',
      },
      schema: homeSchema,
    }),
    home_zh: defineCollection({
      type: 'page',
      source: {
        include: 'zh/home.yml',
        prefix: '',
      },
      schema: homeSchema,
    }),
    home_ar: defineCollection({
      type: 'page',
      source: {
        include: 'ar/home.yml',
        prefix: '',
      },
      schema: homeSchema,
    }),
    home_de: defineCollection({
      type: 'page',
      source: {
        include: 'de/home.yml',
        prefix: '',
      },
      schema: homeSchema,
    }),
    home_es: defineCollection({
      type: 'page',
      source: {
        include: 'es/home.yml',
        prefix: '',
      },
      schema: homeSchema,
    }),
    home_fr: defineCollection({
      type: 'page',
      source: {
        include: 'fr/home.yml',
        prefix: '',
      },
      schema: homeSchema,
    }),
    home_hi: defineCollection({
      type: 'page',
      source: {
        include: 'hi/home.yml',
        prefix: '',
      },
      schema: homeSchema,
    }),
    home_it: defineCollection({
      type: 'page',
      source: {
        include: 'it/home.yml',
        prefix: '',
      },
      schema: homeSchema,
    }),
    home_ja: defineCollection({
      type: 'page',
      source: {
        include: 'ja/home.yml',
        prefix: '',
      },
      schema: homeSchema,
    }),
    home_ko: defineCollection({
      type: 'page',
      source: {
        include: 'ko/home.yml',
        prefix: '',
      },
      schema: homeSchema,
    }),
    home_pt: defineCollection({
      type: 'page',
      source: {
        include: 'pt/home.yml',
        prefix: '',
      },
      schema: homeSchema,
    }),
    home_ru: defineCollection({
      type: 'page',
      source: {
        include: 'ru/home.yml',
        prefix: '',
      },
      schema: homeSchema,
    }),

    // Other language content collections
    content_ar: defineCollection({
      type: 'page',
      source: {
        include: 'ar/**',
        prefix: '',
      },
      // schema: commonSchema,
    }),
    content_de: defineCollection({
      type: 'page',
      source: {
        include: 'de/**',
        prefix: '',
      },
      // schema: commonSchema,
    }),
    content_es: defineCollection({
      type: 'page',
      source: {
        include: 'es/**',
        prefix: '',
      },
      // schema: commonSchema,
    }),
    content_fr: defineCollection({
      type: 'page',
      source: {
        include: 'fr/**',
        prefix: '',
      },
      // schema: commonSchema,
    }),
    content_hi: defineCollection({
      type: 'page',
      source: {
        include: 'hi/**',
        prefix: '',
      },
      // schema: commonSchema,
    }),
    content_it: defineCollection({
      type: 'page',
      source: {
        include: 'it/**',
        prefix: '',
      },
      // schema: commonSchema,
    }),
    content_ja: defineCollection({
      type: 'page',
      source: {
        include: 'ja/**',
        prefix: '',
      },
      // schema: commonSchema,
    }),
    content_ko: defineCollection({
      type: 'page',
      source: {
        include: 'ko/**',
        prefix: '',
      },
      // schema: commonSchema,
    }),
    content_pt: defineCollection({
      type: 'page',
      source: {
        include: 'pt/**',
        prefix: '',
      },
      // schema: commonSchema,
    }),
    content_ru: defineCollection({
      type: 'page',
      source: {
        include: 'ru/**',
        prefix: '',
      },
      // schema: commonSchema,
    }),
    content_zh: defineCollection({
      type: 'page',
      source: {
        include: 'zh/**',
        prefix: '',
      },
      // schema: commonSchema,
    }),
  },
});
