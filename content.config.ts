import { defineContentConfig, defineCollection } from '@nuxt/content';
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
    // Arabic content collection
    content_ar: defineCollection({
      type: 'page',
      source: {
        include: 'ar/**',
        prefix: '',
      },
      // schema: commonSchema,
    }),
    // German content collection
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
    // Russian content collection
    content_ru: defineCollection({
      type: 'page',
      source: {
        include: 'ru/**',
        prefix: '',
      },
      // schema: commonSchema,
    }),
  },
});
