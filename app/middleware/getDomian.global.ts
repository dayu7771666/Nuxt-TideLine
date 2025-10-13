// middleware/getDomain.js
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
    // 显式判断每个条件
    if (
      domain.includes('www.swimsuitcustom.com') ||
      domain.includes('enen.swimsuitcustom.com')
    ) {
      baseURL = 'https://us-api.swimsuitcustom.com';
      siteID = '3';
      language = 'en';
    } else if (
      domain.includes('de.swimsuitcustom.com') ||
      domain.includes('dede.swimsuitcustom.com')
    ) {
      baseURL = 'https://de-api.swimsuitcustom.com';
      siteID = '5';
      language = 'de';
    } else if (
      domain.includes('es.swimsuitcustom.com') ||
      domain.includes('eses.swimsuitcustom.com')
    ) {
      baseURL = 'https://es-api.swimsuitcustom.com';
      siteID = '6';
      language = 'es';
    } else if (
      domain.includes('fr.swimsuitcustom.com') ||
      domain.includes('frfr.swimsuitcustom.com')
    ) {
      baseURL = 'https://fr-api.swimsuitcustom.com';
      siteID = '7';
      language = 'fr';
    } else if (
      domain.includes('ja.swimsuitcustom.com') ||
      domain.includes('jaja.swimsuitcustom.com')
    ) {
      baseURL = 'https://ja-api.swimsuitcustom.com';
      siteID = '8';
      language = 'ja';
    } else if (
      domain.includes('ru.swimsuitcustom.com') ||
      domain.includes('ruru.swimsuitcustom.com')
    ) {
      baseURL = 'https://ru-api.swimsuitcustom.com';
      siteID = '9';
      language = 'ru';
    } else if (
      domain.includes('it.swimsuitcustom.com') ||
      domain.includes('itit.swimsuitcustom.com')
    ) {
      baseURL = 'https://it-api.swimsuitcustom.com';
      siteID = '10';
      language = 'it';
    } else if (
      domain.includes('pt.swimsuitcustom.com') ||
      domain.includes('ptpt.swimsuitcustom.com')
    ) {
      baseURL = 'https://pt-api.swimsuitcustom.com';
      siteID = '11';
      language = 'pt';
    } else if (
      domain.includes('ar.swimsuitcustom.com') ||
      domain.includes('arar.swimsuitcustom.com')
    ) {
      baseURL = 'https://ar-api.swimsuitcustom.com';
      siteID = '12';
      language = 'ar';
    } else if (
      domain.includes('hi.swimsuitcustom.com') ||
      domain.includes('hihi.swimsuitcustom.com')
    ) {
      baseURL = 'https://hi-api.swimsuitcustom.com';
      siteID = '13';
      language = 'hi';
    } else if (
      domain.includes('ko.swimsuitcustom.com') ||
      domain.includes('koko.swimsuitcustom.com')
    ) {
      baseURL = 'https://ko-api.swimsuitcustom.com';
      siteID = '14';
      language = 'ko';
    } else {
      baseURL = 'https://us-api.swimsuitcustom.com';
      siteID = '3'; // 默认使用美国站点ID
      language = 'en';
    }
    // console.log(baseURL, 'baseURL');
  }

  // 存储 baseURL 到全局状态
  useState('language', () => language);
  useState('baseURL', () => baseURL);
  useState('siteID', () => siteID);
});
