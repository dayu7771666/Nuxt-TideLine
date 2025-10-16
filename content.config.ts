import { defineContentConfig, defineCollection, z } from '@nuxt/content';
import {
  generateContentCollections,
  isLanguageEnabled,
} from './config/languages';

// 定义通用的 schema，可以被所有语言复用
const sizeGuideSchema = z.object({
  hero: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    alt: z.string(),
    ctaButton: z.string(),
    ctaLink: z.string(),
  }),
  measurementGuide: z.object({
    title: z.string(),
    description: z.string(),
    measurements: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      })
    ),
    tip: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
  bodyTypes: z.object({
    title: z.string(),
    description: z.string(),
    types: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        gradient: z.string(),
        borderRadius: z.string(),
        measurements: z.object({
          bust: z.string(),
          underbust: z.string(),
          waist: z.string(),
          hips: z.string(),
        }),
        recommendedSize: z.string(),
        cupSize: z.string(),
      })
    ),
    tip: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
  sizeGuides: z.object({
    title: z.string(),
    description: z.string(),
    tabs: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        icon: z.string(),
      })
    ),
    womensSwim: z.object({
      title: z.string(),
      description: z.string(),
      sizeChart: z.object({
        headers: z.array(z.string()),
        sizes: z.array(
          z.object({
            size: z.string(),
            bust: z.string(),
            underbust: z.string(),
            cup: z.string(),
            waist: z.string(),
            hips: z.string(),
            us: z.string(),
            ukAu: z.string(),
          })
        ),
      }),
      cupSizeGuide: z.object({
        title: z.string(),
        headers: z.array(z.string()),
        sizes: z.array(
          z.object({
            cup: z.string(),
            diffCm: z.string(),
            diffInch: z.string(),
          })
        ),
      }),
    }),
  }),
  platformOptimization: z.object({
    title: z.string(),
    description: z.string(),
    platforms: z.array(
      z.object({
        name: z.string(),
        subtitle: z.string(),
        icon: z.string(),
        description: z.string(),
        features: z.array(z.string()),
        ctaText: z.string(),
        ctaLink: z.string(),
      })
    ),
    tip: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
  consultation: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    primaryButton: z.object({
      text: z.string(),
      link: z.string(),
    }),
    secondaryButton: z.object({
      text: z.string(),
      link: z.string(),
    }),
    contact: z.object({
      email: z.string(),
      phone: z.string(),
    }),
    features: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      })
    ),
  }),
});

// 生成动态集合配置
function createDynamicCollections() {
  const baseCollections = generateContentCollections();
  const collections: Record<string, any> = {};

  // 添加基础集合
  Object.entries(baseCollections).forEach(([key, config]) => {
    collections[key] = defineCollection(config);
  });

  // 为启用的语言添加带 schema 的特殊集合
  if (isLanguageEnabled('en')) {
    collections.sizeguide_en = defineCollection({
      type: 'page',
      source: {
        include: 'en/sizeguide.yml',
        prefix: '',
      },
      schema: sizeGuideSchema,
    });

    collections.products_en = defineCollection({
      type: 'page',
      source: {
        include: 'en/products/**',
        prefix: '',
      },
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string(),
        }),
        filters: z.array(
          z.object({
            id: z.string(),
            name: z.string(),
            options: z.array(
              z.object({
                value: z.string(),
                label: z.string(),
              })
            ),
          })
        ),
        products: z.array(
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
    });

    collections.home_en = defineCollection({
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
    });
  }

  return collections;
}

export default defineContentConfig({
  collections: createDynamicCollections(),
});
