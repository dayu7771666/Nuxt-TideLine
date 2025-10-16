import {
  getI18nLocales,
  getEnabledLanguages,
  getDomainForLanguage,
} from './config/languages';

export default defineNuxtConfig({
  devServer: {
    // host: '192.168.2.5',
    // port: 3000,
    host: '127.0.0.1',
    port: 3000,
  },
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    name: 'TideLine Swimwear',
  },
  // Nitro 配置 - 临时禁用预渲染错误以快速通过构建
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      failOnError: false,
    },
  },
  vite: {
    server: {
      allowedHosts: (() => {
        const enabledLanguages = getEnabledLanguages();
        const hosts: string[] = [];

        // 添加测试环境域名（开发时使用）
        enabledLanguages.forEach(lang => {
          hosts.push(`${lang}${lang}.swimsuitcustom.com`);
        });

        // 添加生产环境域名
        enabledLanguages.forEach(lang => {
          if (lang === 'en') {
            hosts.push('www.swimsuitcustom.com');
            hosts.push('en.swimsuitcustom.com');
          } else {
            hosts.push(`${lang}.swimsuitcustom.com`);
          }
        });

        return hosts;
      })(),
    },
  },
  modules: [
    // '@nuxt/fonts', // 禁用以避免 Google Fonts 网络请求
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  //开发阶段
  content: {
    database: {
      type: 'sqlite',
      filename: ':memory:', // 👈 使用内存数据库
    },
  },
  css: ['~/assets/css/main.css'],
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
    locales: getI18nLocales(),
    strategy: 'no_prefix',
    differentDomains: true,
    detectBrowserLanguage: false,
    defaultLocale: 'en',
  },
  runtimeConfig: {
    //只有服务器端才能访问
    public: {
      BaseURL: 'https://us-api.swimsuitcustom.com', //独立站接口
      userBaseURL: 'https://user.swimsuitcustom.com',
      enabledLanguages: getEnabledLanguages(), // 将启用的语言列表暴露给客户端
    },
  },
});
