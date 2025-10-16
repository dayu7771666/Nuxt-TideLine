// middleware/getDomain.js
import { isDomainForLanguage } from '../../config/languages';

export default defineNuxtRouteMiddleware((to, from) => {
  const userToken = useCookie('user_token', {
    path: '/', // 确保 Cookie 对整个域有效
    domain: '.swimsuitcustom.com', // 适用于所有子域名
  });

  // 如果没有设置 Cookie，则初始化一个值
  if (!userToken.value) {
    userToken.value = '';
  }

  const userEmail = useCookie('user_email', {
    path: '/', // 确保 Cookie 对整个域有效
    domain: '.swimsuitcustom.com', // 适用于所有子域名
  });

  // 如果没有设置 Cookie，则初始化一个值
  if (!userEmail.value) {
    userEmail.value = '';
  }

  const headers = useRequestHeaders();
  let domain = headers.host || ''; // 获取域名信息
  // console.log(headers, 'headers');
  // console.log(domain, 'domain');
  // 存储域名信息以便在页面组件中使用
  domain = domain.replace(/:\d+$/, '');
  useState('domain', () => domain);

  let baseURL = '';
  let siteID = '';
  let language = '';
  if (import.meta.server) {
    // 使用新的域名检查函数，支持测试和生产环境
    const languageConfigs = [
      { lang: 'en', baseURL: 'https://us-api.swimsuitcustom.com', siteID: '3' },
      { lang: 'de', baseURL: 'https://de-api.swimsuitcustom.com', siteID: '5' },
      { lang: 'es', baseURL: 'https://es-api.swimsuitcustom.com', siteID: '6' },
      { lang: 'fr', baseURL: 'https://fr-api.swimsuitcustom.com', siteID: '7' },
      { lang: 'ja', baseURL: 'https://ja-api.swimsuitcustom.com', siteID: '8' },
      { lang: 'ru', baseURL: 'https://ru-api.swimsuitcustom.com', siteID: '9' },
      {
        lang: 'it',
        baseURL: 'https://it-api.swimsuitcustom.com',
        siteID: '10',
      },
      {
        lang: 'pt',
        baseURL: 'https://pt-api.swimsuitcustom.com',
        siteID: '11',
      },
      {
        lang: 'ar',
        baseURL: 'https://ar-api.swimsuitcustom.com',
        siteID: '12',
      },
      {
        lang: 'hi',
        baseURL: 'https://hi-api.swimsuitcustom.com',
        siteID: '13',
      },
      {
        lang: 'ko',
        baseURL: 'https://ko-api.swimsuitcustom.com',
        siteID: '14',
      },
      {
        lang: 'zh',
        baseURL: 'https://zh-api.swimsuitcustom.com',
        siteID: '15',
      },
    ];

    // 查找匹配的语言配置
    const matchedConfig = languageConfigs.find(config =>
      isDomainForLanguage(domain, config.lang)
    );

    if (matchedConfig) {
      baseURL = matchedConfig.baseURL;
      siteID = matchedConfig.siteID;
      language = matchedConfig.lang;
    } else {
      // 默认使用英文配置
      baseURL = 'https://us-api.swimsuitcustom.com';
      siteID = '3';
      language = 'en';
    }
    // console.log(baseURL, 'baseURL');
  }

  // 存储 baseURL 到全局状态
  useState('language', () => language);
  useState('baseURL', () => baseURL);
  useState('siteID', () => siteID);
});
