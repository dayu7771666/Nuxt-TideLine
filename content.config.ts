import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    // English content - separate collections for each page
    home_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/home.yml',
        prefix: '',
      },
      schema: z.object({
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
          videoSrc: z.string(),
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
      }),
    }),
    about_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/about.yml',
        prefix: '',
      },
    }),
    sampling_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/sampling.yml',
        prefix: '',
      },
    }),
    bulk_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/bulk.yml',
        prefix: '',
      },
    }),
    terms_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/terms.yml',
        prefix: '',
      },
    }),
    layout_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/setting/navigation.yml',
        prefix: '',
      },
    }),
    marketing_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/marketing.yml',
        prefix: '',
      },
    }),
    collections_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/collections/**',
        prefix: '',
      },
    }),

    // Other languages - general collections
    content_ar: defineCollection({
      type: 'page',
      source: {
        include: 'ar/**',
        prefix: '',
      },
    }),
    content_de: defineCollection({
      type: 'page',
      source: {
        include: 'de/**',
        prefix: '',
      },
    }),
    content_es: defineCollection({
      type: 'page',
      source: {
        include: 'es/**',
        prefix: '',
      },
    }),
    content_fr: defineCollection({
      type: 'page',
      source: {
        include: 'fr/**',
        prefix: '',
      },
    }),
    content_hi: defineCollection({
      type: 'page',
      source: {
        include: 'hi/**',
        prefix: '',
      },
    }),
    content_it: defineCollection({
      type: 'page',
      source: {
        include: 'it/**',
        prefix: '',
      },
    }),
    content_ja: defineCollection({
      type: 'page',
      source: {
        include: 'ja/**',
        prefix: '',
      },
    }),
    content_ko: defineCollection({
      type: 'page',
      source: {
        include: 'ko/**',
        prefix: '',
      },
    }),
    content_pt: defineCollection({
      type: 'page',
      source: {
        include: 'pt/**',
        prefix: '',
      },
    }),
    content_ru: defineCollection({
      type: 'page',
      source: {
        include: 'ru/**',
        prefix: '',
      },
    }),
    content_zh: defineCollection({
      type: 'page',
      source: {
        include: 'zh/**',
        prefix: '',
      },
    }),
  },
});
