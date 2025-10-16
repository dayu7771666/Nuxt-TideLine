// 语言配置工具
export const AVAILABLE_LANGUAGES = [
  'ar',
  'de',
  'en',
  'es',
  'fr',
  'hi',
  'it',
  'ja',
  'ko',
  'pt',
  'ru',
  'zh',
] as const;

export type Language = (typeof AVAILABLE_LANGUAGES)[number];

/**
 * 获取当前环境应该加载的语言列表
 * @returns 语言代码数组
 */
export function getEnabledLanguages(): Language[] {
  // 生产环境始终加载所有语言
  if (process.env.NODE_ENV === 'production') {
    return [...AVAILABLE_LANGUAGES];
  }

  // 开发环境检查环境变量
  const devLanguages = process.env.DEV_LANGUAGES;

  if (devLanguages) {
    // 如果设置了 DEV_LANGUAGES=all，加载所有语言
    if (devLanguages.toLowerCase() === 'all') {
      return [...AVAILABLE_LANGUAGES];
    }

    // 解析逗号分隔的语言列表
    const requestedLanguages = devLanguages
      .split(',')
      .map(lang => lang.trim().toLowerCase())
      .filter((lang): lang is Language =>
        AVAILABLE_LANGUAGES.includes(lang as Language)
      );

    // 如果解析出有效语言，返回这些语言，否则返回默认英语
    return requestedLanguages.length > 0 ? requestedLanguages : ['en'];
  }

  // 默认开发环境只加载英语
  return ['en'];
}

/**
 * 检查指定语言是否启用
 * @param language 语言代码
 * @returns 是否启用
 */
export function isLanguageEnabled(language: Language): boolean {
  return getEnabledLanguages().includes(language);
}

/**
 * 根据环境获取域名格式
 * @param langCode 语言代码
 * @returns 对应环境的域名
 */
export function getDomainForLanguage(langCode: string): string {
  const isProduction = process.env.NODE_ENV === 'production';
  const baseDomain = 'swimsuitcustom.com';

  if (isProduction) {
    // 生产环境：en.swimsuitcustom.com
    return langCode === 'en'
      ? `www.${baseDomain}`
      : `${langCode}.${baseDomain}`;
  } else {
    // 测试环境：enen.swimsuitcustom.com
    return `${langCode}${langCode}.${baseDomain}`;
  }
}

/**
 * 检查域名是否匹配指定语言（支持测试、生产和开发环境）
 * @param domain 当前域名
 * @param langCode 语言代码
 * @returns 是否匹配
 */
export function isDomainForLanguage(domain: string, langCode: string): boolean {
  // 开发环境：localhost 和 127.0.0.1 默认视为英文域名
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isLocalhost =
    domain.includes('localhost') ||
    domain.includes('127.0.0.1') ||
    domain.includes('0.0.0.0');

  if (isDevelopment && isLocalhost) {
    // 开发环境的本地域名，根据环境变量或默认为英文
    const devLanguage = process.env.DEV_DEFAULT_LANGUAGE || 'en';
    return langCode === devLanguage;
  }

  const prodDomain = getDomainForLanguage(langCode);
  const testDomain = `${langCode}${langCode}.swimsuitcustom.com`;

  // 特殊处理英文域名
  if (langCode === 'en') {
    return (
      domain.includes('www.swimsuitcustom.com') ||
      domain.includes('enen.swimsuitcustom.com') ||
      domain.includes('en.swimsuitcustom.com')
    );
  }

  return domain.includes(prodDomain) || domain.includes(testDomain);
}

/**
 * 获取启用语言的 i18n 配置
 */
export function getI18nLocales() {
  const enabledLanguages = getEnabledLanguages();

  const allLocales = [
    {
      code: 'ar',
      name: 'Arabic',
      language: 'ar',
      domain: getDomainForLanguage('ar'),
      file: 'ar.json',
    },
    {
      code: 'de',
      name: 'Deutsch',
      language: 'de',
      domain: getDomainForLanguage('de'),
      file: 'de.json',
    },
    {
      code: 'en',
      name: 'English',
      language: 'en',
      domain: getDomainForLanguage('en'),
      domainDefault: true,
      file: 'en.json',
    },
    {
      code: 'es',
      name: 'Spanish',
      language: 'es',
      domain: getDomainForLanguage('es'),
      file: 'es.json',
    },
    {
      code: 'fr',
      name: 'French',
      language: 'fr',
      domain: getDomainForLanguage('fr'),
      file: 'fr.json',
    },
    {
      code: 'hi',
      name: 'Hindi',
      language: 'hi',
      domain: getDomainForLanguage('hi'),
      file: 'hi.json',
    },
    {
      code: 'it',
      name: 'Italian',
      language: 'it',
      domain: getDomainForLanguage('it'),
      file: 'it.json',
    },
    {
      code: 'ja',
      name: 'Japanese',
      language: 'ja',
      domain: getDomainForLanguage('ja'),
      file: 'ja.json',
    },
    {
      code: 'ko',
      name: 'Korean',
      language: 'ko',
      domain: getDomainForLanguage('ko'),
      file: 'ko.json',
    },
    {
      code: 'pt',
      name: 'Portuguese',
      language: 'pt',
      domain: getDomainForLanguage('pt'),
      file: 'pt.json',
    },
    {
      code: 'ru',
      name: 'Russian',
      language: 'ru',
      domain: getDomainForLanguage('ru'),
      file: 'ru.json',
    },
    {
      code: 'zh',
      name: '中文',
      language: 'zh',
      domain: getDomainForLanguage('zh'),
      file: 'zh.json',
    },
  ];

  return allLocales.filter(locale =>
    enabledLanguages.includes(locale.code as Language)
  );
}

/**
 * 生成动态的 content collections 配置
 */
export function generateContentCollections() {
  const enabledLanguages = getEnabledLanguages();
  const collections: Record<string, any> = {};

  // 为每个启用的语言生成 collections
  enabledLanguages.forEach(lang => {
    // 基础内容集合
    const collectionTypes = [
      'content',
      'shipping',
      'sizeguide',
      'catalog',
      'products',
      'home',
      'about',
      'sampling',
      'bulk',
      'terms',
      'layout',
      'marketing',
      'collections',
      'pricing',
      'faq',
      'fabric',
      'branding',
      'hardware',
      'startup',
      'forbrand',
    ];

    collectionTypes.forEach(type => {
      const collectionName = `${type}_${lang}`;

      // 根据不同类型设置不同的 source 配置
      let sourceConfig: any = {};

      switch (type) {
        case 'content':
          sourceConfig = { include: `${lang}/**`, prefix: '' };
          break;
        case 'catalog':
          sourceConfig = { include: `${lang}/catalog/**`, prefix: '' };
          break;
        case 'products':
          sourceConfig = { include: `${lang}/products/**`, prefix: '' };
          break;
        case 'collections':
          sourceConfig = { include: `${lang}/collections/**`, prefix: '' };
          break;
        case 'layout':
          sourceConfig = {
            include: `${lang}/setting/navigation.yml`,
            prefix: '',
          };
          break;
        default:
          sourceConfig = { include: `${lang}/${type}.yml`, prefix: '' };
      }

      collections[collectionName] = {
        type: 'page',
        source: sourceConfig,
      };
    });
  });

  return collections;
}
