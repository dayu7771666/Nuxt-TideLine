import { defineContentConfig, defineCollection } from '@nuxt/content';
import { z } from 'zod';

// 基础枚举定义
const iconEnum = z.enum([
  'ChatBubbleLeftRightIcon',
  'PencilSquareIcon',
  'CheckCircleIcon',
  'TruckIcon',
  'ChartBarIcon',
  'SwatchIcon',
  'BuildingOfficeIcon',
  'LightBulbIcon',
  'ShieldCheckIcon',
  'CogIcon',
  'ClockIcon',
  'UserGroupIcon',
]);

// 通用 schema 构建器
const createBaseSchema = () =>
  z.object({
    title: z.string().min(1),
    description: z.string().min(1),
  });

const createImageSchema = () =>
  z.object({
    src: z.string().min(1),
    alt: z.string().min(1),
  });

const createFeatureItemSchema = () =>
  z.object({
    text: z.string().min(1),
  });

const createStepSchema = () =>
  z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    icon: iconEnum,
  });

const createAdvantageSchema = () =>
  z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    icon: iconEnum,
  });

const createProductItemSchema = () =>
  z.object({
    id: z.number(),
    name: z.string().min(1),
    href: z.string().min(1),
    description: z.string().min(1),
    imageSrc: z.string().min(1),
    imageAlt: z.string().min(1),
  });

const createServiceAdvantageSchema = () =>
  z.object({
    id: z.number(),
    title: z.string().min(1),
    description: z.string().min(1),
    icon: iconEnum,
  });

// Home 页面 schema
const homeSchema = z.object({
  hero: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    src: z.string().min(1),
    alt: z.string().min(1),
    ctaButton: z.string().min(1),
    features: z.array(createFeatureItemSchema()),
  }),
  videoShowcase: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    ctaText: z.string().min(1),
    videoSrc: z.string().url(),
  }),
  howWorks: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    cta: z.string().min(1),
    steps: z.array(createStepSchema()),
  }),
  whyUs: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    cta: z.string().min(1),
    advantages: z.array(createAdvantageSchema()),
  }),
  indexCta: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    cta: z.string().min(1),
    image: createImageSchema(),
  }),
  products: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    learnMoreText: z.string().min(1),
    quoteText: z.string().min(1),
    learnMoreLink: z.string().min(1),
    quoteLink: z.string().min(1),
    items: z.array(createProductItemSchema()),
  }),
  serviceAdvantages: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    advantages: z.array(createServiceAdvantageSchema()),
  }),
  contactForm: z.object({
    modalTitle: z.string().min(1),
    nameLabel: z.string().min(1),
    namePlaceholder: z.string().min(1),
    emailLabel: z.string().min(1),
    emailPlaceholder: z.string().min(1),
    messageLabel: z.string().min(1),
    messagePlaceholder: z.string().min(1),
    consentText: z.string().min(1),
    submitButton: z.string().min(1),
    successMessage: z.string().min(1),
    errorMessage: z.string().min(1),
  }),
});

// 营销模块 schema
const marketingSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  items: z.array(
    z.object({
      title: z.string().min(1),
      description: z.string().min(1),
      image: z.string().min(1),
    })
  ),
});

// 集合数据 schema
const collectionSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  image: z.object({
    src: z.string().min(1),
    alt: z.string().min(1),
  }),
  tags: z.array(z.string()).optional(),
  category: z.string().min(1).optional(),
  featured: z.boolean().optional(),
  products: z
    .array(
      z.object({
        id: z.number(),
        name: z.string().min(1),
        description: z.string().min(1),
        price: z.string().min(1),
        originalPrice: z.string().optional(),
        image: z.string().min(1),
        gallery: z.array(z.string()).optional(),
        features: z.array(z.string()).optional(),
        specifications: z.record(z.string()).optional(),
      })
    )
    .optional(),
});

// 通用页面 schema 映射
const getSchemaForPath = (path: string) => {
  if (path === '/home') return homeSchema;
  if (path === '/marketing') return marketingSchema;
  if (
    path.startsWith('/collections/') ||
    path.includes('swimwear') ||
    path.includes('accessories')
  ) {
    return collectionSchema;
  }
  return z.any(); // 默认允许任何内容
};

// 通用语言集合定义
const createLanguageCollection = (langCode: string) =>
  defineCollection({
    type: 'page',
    source: {
      include: `${langCode}/**`,
      prefix: '',
    },
  });

export default defineContentConfig({
  collections: {
    // 英语内容集合
    content_en: createLanguageCollection('en'),
    // 阿拉伯语内容集合
    content_ar: createLanguageCollection('ar'),
    // 德语内容集合
    content_de: createLanguageCollection('de'),
    // 西班牙语内容集合
    content_es: createLanguageCollection('es'),
    // 法语内容集合
    content_fr: createLanguageCollection('fr'),
    // 印地语内容集合
    content_hi: createLanguageCollection('hi'),
    // 意大利语内容集合
    content_it: createLanguageCollection('it'),
    // 日语内容集合
    content_ja: createLanguageCollection('ja'),
    // 韩语内容集合
    content_ko: createLanguageCollection('ko'),
    // 葡萄牙语内容集合
    content_pt: createLanguageCollection('pt'),
    // 俄语内容集合
    content_ru: createLanguageCollection('ru'),
    // 中文内容集合
    content_zh: createLanguageCollection('zh'),

    // 专门的 Home 页面集合
    home_pages: defineCollection({
      type: 'page',
      source: {
        include: '**/home.yml',
        prefix: '',
      },
      schema: homeSchema,
    }),

    // 专门的营销模块集合
    marketing_pages: defineCollection({
      type: 'page',
      source: {
        include: '**/marketing.yml',
        prefix: '',
      },
      schema: marketingSchema,
    }),

    // 专门的集合页面集合
    collection_pages: defineCollection({
      type: 'page',
      source: {
        include: '**/collections/**',
        prefix: '',
      },
      schema: collectionSchema,
    }),
  },
});
