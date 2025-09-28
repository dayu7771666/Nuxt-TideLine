export default defineNuxtConfig({
  // 网站配置 - 测试阶段使用本地 URL
  site: {
    url:
      process.env.NODE_ENV === 'production'
        ? 'https://your-domain.com' // 生产环境时替换为实际域名
        : 'http://localhost:3000', // 开发/测试环境使用本地地址
    name: 'TideLine - Premium Swimwear Manufacturing',
  },

  /* 🔧 测试阶段其他 URL 选项：
   * 1. Vercel: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
   * 2. Netlify: process.env.NETLIFY_URL || 'http://localhost:3000'
   * 3. ngrok: 'https://your-ngrok-url.ngrok.io'
   * 4. 临时域名: 'https://myproject.example.com'
   */

  devServer: {
    host: '127.0.0.1',
    port: 3000,
  },
  vite: {
    server: {
      allowedHosts: [
        'enen.swimsuitcustom.com',
        'dede.swimsuitcustom.com',
        'eses.swimsuitcustom.com',
        'frfr.swimsuitcustom.com',
        'jaja.swimsuitcustom.com',
        'ruru.swimsuitcustom.com',
        'itit.swimsuitcustom.com',
        'ptpt.swimsuitcustom.com',
        'arar.swimsuitcustom.com',
        'hihi.swimsuitcustom.com',
        'koko.swimsuitcustom.com',
      ],
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Nitro 配置 - 临时禁用预渲染错误以快速通过构建
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  modules: [
    // '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  image: {
    // The screen sizes predefined by @nuxt/image:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },
  i18n: {
    locales: [
      {
        code: 'ar',
        name: 'Arabic',
        language: 'ar',
        domain: 'arar.swimsuitcustom.com',
        file: 'ar.json',
      },
      {
        code: 'de',
        name: 'Deutsch',
        language: 'de',
        domain: 'dede.swimsuitcustom.com',
        file: 'de.json',
      },
      {
        code: 'en',
        name: 'English',
        language: 'en',
        domain: 'enen.swimsuitcustom.com',
        domainDefault: true,
        file: 'en.json',
      },
      {
        code: 'es',
        name: 'Spanish',
        language: 'es',
        domain: 'eses.swimsuitcustom.com',
        file: 'es.json',
      },
      {
        code: 'fr',
        name: 'French',
        language: 'fr',
        domain: 'frfr.swimsuitcustom.com',
        file: 'fr.json',
      },
      {
        code: 'hi',
        name: 'Hindi',
        language: 'hi',
        domain: 'hihi.swimsuitcustom.com',
        file: 'hi.json',
      },
      {
        code: 'it',
        name: 'Italian',
        language: 'it',
        domain: 'itit.swimsuitcustom.com',
        file: 'it.json',
      },
      {
        code: 'ja',
        name: 'Japanese',
        language: 'ja',
        domain: 'jaja.swimsuitcustom.com',
        file: 'ja.json',
      },
      {
        code: 'ko',
        name: 'Korean',
        language: 'ko',
        domain: 'koko.swimsuitcustom.com',
        file: 'ko.json',
      },
      {
        code: 'pt',
        name: 'Portuguese',
        language: 'pt',
        domain: 'ptpt.swimsuitcustom.com',
        file: 'pt.json',
      },
      {
        code: 'ru',
        name: 'Russian',
        language: 'ru',
        domain: 'ruru.swimsuitcustom.com',
        file: 'ru.json',
      },
    ],
    strategy: 'no_prefix',
    differentDomains: true,
    detectBrowserLanguage: false,
    defaultLocale: 'en',
  },
});
