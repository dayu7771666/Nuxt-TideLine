import { isDomainForLanguage } from '../../config/languages';

/**
 * 英文专属页面中间件
 * 只允许英文域名访问特定页面，其他域名返回404
 * 支持测试环境和生产环境的不同域名格式
 */
export default defineNuxtRouteMiddleware(to => {
  // 获取运行时配置和环境信息
  const config = useRuntimeConfig();
  const isDev = import.meta.dev;
  const isServer = import.meta.server;

  // 根据环境获取域名
  let domain = '';

  if (isServer) {
    // 服务器端：使用请求头
    const headers = useRequestHeaders();
    domain = headers.host || '';

    // 如果 useRequestHeaders 失败，尝试 useRequestEvent
    if (!domain) {
      const event = useRequestEvent();
      domain = event?.node?.req?.headers?.host || '';
    }
  } else {
    // 客户端：使用 window.location
    if (typeof window !== 'undefined') {
      domain = window.location.hostname;
      // 如果需要包含端口号（开发环境通常需要）
      if (
        window.location.port &&
        window.location.port !== '80' &&
        window.location.port !== '443'
      ) {
        domain = `${domain}:${window.location.port}`;
      }
    }
  }

  // 定义英文专属页面路径
  const englishOnlyPages = ['/swim-wholesale'];

  // 检查是否是英文专属页面
  const isEnglishOnlyPage = englishOnlyPages.some(
    page => to.path === page || to.path.startsWith(page + '/')
  );

  if (isEnglishOnlyPage) {
    // 使用域名检查函数，支持测试和生产环境
    const isEnglishDomain = isDomainForLanguage(domain, 'en');

    if (!isEnglishDomain) {
      // 非英文域名访问英文专属页面，抛出404错误
      throw createError({
        statusCode: 404,
        statusMessage: 'Page not found',
      });
    }
  }
});
