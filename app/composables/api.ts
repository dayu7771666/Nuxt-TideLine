export const apiCore = (url: string, options: any) => {
  const config = useRuntimeConfig();
  return useFetch(url, {
    baseURL: useState('baseURL').value,
    onRequest({ options }) {
      let userToken: any = '';
      if (import.meta.client) {
        userToken = useCookie('user_token', {
          path: '/', // 确保 Cookie 对整个域有效
          domain: '.swimsuitcustom.com', // 适用于所有子域名
        });
      }
      options.headers = {
        'X-LANG': useState('language').value || 'en',
        'X-SITE-ID': useState('siteID').value,
        ...options.headers,
      };
    },
    ...options,
  });
};

export const GetApi = (url: string, options: any) => {
  return new Promise((resolve, reject) => {
    apiCore(url, {
      method: 'GET',
      ...options,
    })
      .then(res => {
        resolve(res.data.value);
      })
      .catch(err => {
        reject(err);
      });
  });
};
