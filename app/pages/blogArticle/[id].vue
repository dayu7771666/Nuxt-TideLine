<template>
  <article class="py-0 lg:py-0 min-h-screen bg-gray-50">
    <!-- 面包屑导航 -->
    <div class="w-full relative">
      <div
        class="banner-container h-[50vh] min-h-[300px] relative overflow-hidden"
      >
        <div class="absolute inset-0 bg-black/50"></div>
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
        ></div>
        <img
          :src="imageUrl || '/img/blog-default-banner.jpg'"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1
            class="text-3xl lg:text-5xl text-white font-bold tracking-tight mb-6 max-w-4xl"
          >
            {{ title }}
          </h1>
          <div class="flex flex-wrap gap-6 text-gray-100 justify-center">
            <div class="flex items-center">
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <time :datetime="titleTime">{{ titleTime }}</time>
            </div>
            <div class="flex items-center">
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>{{ titleAuthor }}</span>
            </div>
          </div>
          <NuxtLink
            to="/contact"
            class="text-black tracking-tight bg-white mt-6 px-10 py-3 rounded-lg transition-colors"
          >
            {{ $t('立即咨询') }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="mx-auto lg:max-w-[1500px] max-w-7xl px-4 py-8">
      <div class="grid lg:grid-cols-12 gap-x-8 gap-y-8">
        <!-- 文章目录 -->
        <aside class="hidden lg:block lg:col-span-2">
          <div class="sticky top-24 bg-white rounded-xl shadow-sm py-4">
            <!-- <h2 class="text-lg font-semibold mb-4 px-4 text-center pt-4">{{ $t('目录') }}</h2> -->
            <nav
              class="toc-nav space-y-2"
              aria-label="Article table of contents"
            >
              <div
                v-if="tableOfContents.length > 0"
                v-for="(item, index) in tableOfContents"
                :key="index"
                class="toc-item"
                :class="{ 'pl-4': item.level > 2 }"
              >
                <a
                  :href="`#heading-${item.id}`"
                  style="font-size: 14px"
                  class="block py-1 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                  :class="{
                    'text-gray-700': item.level === 2,
                    'text-gray-600': item.level > 2,
                  }"
                  @click.prevent="scrollToHeading(item.id)"
                >
                  {{ item.text }}
                </a>
              </div>
              <div
                v-if="tableOfContents.length === 0"
                class="text-sm text-gray-500 italic"
              >
                {{ $t('没有找到目录项') }}
              </div>
            </nav>
          </div>
        </aside>

        <!-- 主要内容区 -->
        <main
          class="lg:col-span-7 lg:bg-white lg:rounded-2xl lg:shadow-sm text-sm"
        >
          <div class="px-3 lg:px-16 pb-12">
            <div
              ref="articleContent"
              class="contentBlog article-content"
              v-html="content"
            ></div>
          </div>
        </main>

        <!-- 侧边栏 -->
        <aside class="lg:col-span-3">
          <div class="sticky top-24 space-y-8">
            <!-- 最新文章 -->
            <div
              class="bg-white rounded-xl shadow-sm p-8 hidden lg:block"
              v-if="posts.length > 0"
            >
              <h2 class="text-lg font-semibold mb-4">{{ $t('最新文章') }}</h2>
              <nav
                class="toc"
                aria-label="Table of contents"
              >
                <div
                  v-for="item in posts"
                  :key="item.id"
                  class="mb-3 hover:bg-gray-50 rounded-lg relative group"
                >
                  <NuxtLink
                    :to="`/blogArticle/${item.id}`"
                    class="text-sm block py-2 px-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 truncate"
                  >
                    {{ item.title }}
                    <div
                      class="tooltip opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute z-50 bottom-full left-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg max-w-xs whitespace-normal break-words"
                    >
                      {{ item.title }}
                      <div
                        class="tooltip-arrow absolute top-full left-4 -mt-px border-8 border-transparent border-t-gray-900"
                      ></div>
                    </div>
                  </NuxtLink>
                </div>
              </nav>
            </div>

            <!-- CTA卡片 -->
            <div class="bg-white rounded-xl shadow-sm p-8">
              <h3 class="text-base font-semibold mb-4">
                {{ $t('想创建自己的泳装品牌吗？') }}
              </h3>
              <p class="text-gray-600 mb-6 text-sm">
                {{
                  $t(
                    '我们提供一系列的服务，提供最具性价比的泳衣，同时我们也支持定制服务，让您的想法变成现实，为您轻松开启自己的泳装品牌！'
                  )
                }}
              </p>
              <div class="space-y-4">
                <NuxtLink
                  to="/"
                  class="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium lg:px-6 lg:py-3 px-4 py-2 rounded-lg transition-colors"
                >
                  {{ $t('了解更多') }}
                </NuxtLink>
                <NuxtLink
                  to="https://wa.me/8618302407790"
                  target="_blank"
                  class="block w-full text-center border-2 border-green-600 text-green-600 hover:bg-green-50 font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  {{ $t('WhatsApp') }}
                </NuxtLink>
                <NuxtLink
                  to="/contact"
                  class="block w-full text-center border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  {{ $t('联系我们') }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </article>
</template>

<script setup>
  import { onMounted, nextTick, ref, watch } from 'vue';

  const title = ref('');
  const content = ref('');
  const imageUrl = ref('');
  const titleTime = ref('');
  const titleAuthor = ref('');
  const createTime = ref('');
  const updateTime = ref('');
  const route = useRoute();
  const isLoading = ref(false); // 改为 false，因为数据会在服务端预取
  const articleContent = ref(null);
  const tableOfContents = ref([]);

  // Meta tags for SEO
  const description = ref('');
  const metaImage = ref('');

  // 服务端预取文章数据
  const config = useRuntimeConfig();
  const siteID = useState('siteID');
  const { data: articleData, error } = await useFetch('/api/article/info', {
    baseURL: useState('baseURL').value,
    query: { id: route.params.id },
    server: true, // 确保在服务端执行
    onRequest({ options }) {
      options.headers = {
        'X-LANG': useState('language').value || 'en',
        'X-SITE-ID': siteID.value || '',
        ...options.headers,
      };
    },
  });

  // 如果文章不存在或发生错误，抛出 404
  if (error.value || !articleData.value || articleData.value.code !== 200) {
    const { $t } = useNuxtApp();
    throw createError({
      statusCode: 404,
      statusMessage: $t('文章未找到'),
      message: $t('文章未找到'),
    });
  }

  // 如果文章存在，设置数据
  if (articleData.value && articleData.value.code === 200) {
    const data = articleData.value.data;
    title.value = data.title;
    titleTime.value = data.create_time.match(/^\d{4}-\d{2}/)[0];
    titleAuthor.value = data.author;
    content.value = data.content;
    imageUrl.value = data.image;
    description.value = data.description;
    metaImage.value = data.image;
    createTime.value = data.create_time;
    updateTime.value = data.update_time;

    // 先处理内容中的标题以生成目录
    processContentForToc();
  }

  // 时间格式转换函数：从 "2025-08-05 14:38:07" 转为 "2024-01-05T08:00:00+08:00"
  const formatDateToISO = dateStr => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toISOString().replace('Z', '+08:00');
  };

  // 设置 SEO meta 标签
  const domain = useState('domain');
  useHead({
    title: () => `${title.value}`,
    meta: [
      { name: 'description', content: () => description.value },
      { name: 'keywords', content: () => `${title.value}` },
      { property: 'og:title', content: () => title.value },
      { property: 'og:description', content: () => description.value },
      { property: 'og:image', content: () => metaImage.value },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content: () =>
          `https://${domain.value || 'swimsuitcustom.com'}/blogArticle/${route.params.id}`,
      },
      { name: 'article:published_time', content: () => titleTime.value },
      { name: 'article:author', content: () => titleAuthor.value },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: () => title.value },
      { name: 'twitter:description', content: () => description.value },
      { name: 'twitter:image', content: () => metaImage.value },
    ],
    link: [
      {
        rel: 'canonical',
        href: () =>
          `https://${domain.value || 'swimsuitcustom.com'}/blogArticle/${route.params.id}`,
      },
    ],
  });

  // 添加结构化数据
  const currentDomain = domain.value || 'swimsuitcustom.com';

  // 已移除schema包，注释相关代码
  // useSchemaOrg([
  //   defineWebPage({
  //     '@type': 'WebPage',
  //     '@id': `https://${currentDomain}/blogArticle/${route.params.id}#webpage`,
  //     url: `https://${currentDomain}/blogArticle/${route.params.id}`,
  //     name: title.value,
  //     description: description.value,
  //     image: metaImage.value,
  //     isPartOf: {
  //       '@type': 'WebSite',
  //       '@id': `https://swimsuitcustom.com/#website`
  //     },
  //   }),
  //   defineArticle({
  //     headline: title.value,
  //     description: description.value,
  //     image: metaImage.value,
  //     datePublished: formatDateToISO(createTime.value),
  //     dateModified: formatDateToISO(updateTime.value),
  //     author: {
  //       name: titleAuthor.value
  //     }
  //   }),
  // ])

  const posts = ref([]);

  const getPostsList = async () => {
    let res = await GetApi('/api/article/index', {
      query: { page: 1, size: 4, classify_id: '1' },
    });
    if (res.code === 200) {
      posts.value = res.data.rows;
    }
  };
  getPostsList();

  // 处理内容以生成目录
  function processContentForToc() {
    if (!content.value) return;

    // 检查是否在客户端环境
    if (typeof document === 'undefined') {
      // 在服务端环境，使用正则表达式来解析h2标签
      const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
      const toc = [];
      let match;
      let index = 0;

      // 替换h2标签并添加ID
      let updatedContent = content.value;

      while ((match = h2Regex.exec(content.value)) !== null) {
        const id = `heading-${index}`;
        const text = match[1].replace(/<[^>]*>/g, ''); // 去除HTML标签

        toc.push({
          id: index,
          text: text,
          level: 2,
        });

        // 替换原始h2标签，添加ID
        const originalTag = match[0];
        const newTag = originalTag.replace('<h2', `<h2 id="${id}"`);
        updatedContent = updatedContent.replace(originalTag, newTag);

        index++;
      }

      content.value = updatedContent;
      tableOfContents.value = toc;
      console.log('服务端预处理生成的目录项:', tableOfContents.value);
      return;
    }

    // 客户端环境的处理
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content.value;

    // 只查找h2标签
    const headings = tempDiv.querySelectorAll('h2');
    const toc = [];

    headings.forEach((heading, index) => {
      const id = `heading-${index}`;
      // 为原始内容中的标题添加ID
      heading.id = id;

      toc.push({
        id: index,
        text: heading.textContent,
        level: parseInt(heading.tagName.substring(1)),
      });
    });

    // 更新含有ID的内容
    content.value = tempDiv.innerHTML;

    // 更新目录
    tableOfContents.value = toc;
    console.log('客户端预处理生成的目录项:', tableOfContents.value);
  }

  // 生成文章目录（DOM加载后的备用方法）
  const generateTableOfContents = () => {
    if (!articleContent.value) return;

    // 如果已经有目录，则不再重复生成
    if (tableOfContents.value.length > 0) return;

    // 等待DOM更新完成
    nextTick(() => {
      setTimeout(() => {
        try {
          // 只查找h2标签
          const headings = articleContent.value.querySelectorAll('h2');
          console.log('DOM中找到h2标题元素数量:', headings.length);
          const toc = [];

          headings.forEach((heading, index) => {
            // 为每个标题添加ID
            const id = `heading-${index}`;
            heading.id = id;

            toc.push({
              id: index,
              text: heading.textContent,
              level: parseInt(heading.tagName.substring(1)),
            });
          });

          tableOfContents.value = toc;
        } catch (err) {
          console.error('生成目录时出错:', err);
        }
      }, 500); // 添加延时确保内容已渲染
    });
  };

  // 滚动到指定标题
  const scrollToHeading = id => {
    const headingElement = document.getElementById(`heading-${id}`);
    if (headingElement) {
      const yOffset = -100; // 调整滚动位置的偏移量
      const y =
        headingElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // 监听文章内容加载完成
  onMounted(() => {
    if (tableOfContents.value.length === 0) {
      // 作为备用方案，如果预处理没有生成目录，则尝试从DOM中生成
      setTimeout(generateTableOfContents, 1000);
    }
  });
</script>

<style lang="postcss">
  .banner-container {
    position: relative;
    width: 100%;
    background-color: #000;
  }

  .contentBlog {
    @apply text-gray-800 w-full;
  }

  .article-content {
    width: 100%;
    overflow-x: hidden;
    word-break: break-word;
  }

  .contentBlog p {
    @apply text-base leading-relaxed my-6 text-gray-700;
    min-height: 1em;
  }

  .contentBlog img {
    @apply rounded-xl shadow-lg my-8 mx-auto;
    max-width: 100%;
    height: auto;
    display: block;
  }

  .contentBlog h2 {
    @apply text-2xl font-bold text-gray-900 mt-12 mb-6;
    line-height: 1.4;
    scroll-margin-top: 100px;
  }

  .contentBlog h3 {
    @apply text-base font-semibold text-gray-900 mt-8 mb-4;
    line-height: 1.4;
    font-size: 1.3rem;
    scroll-margin-top: 100px;
  }

  .contentBlog ul {
    @apply my-6 ml-6 list-disc;
  }

  .contentBlog ol {
    @apply my-6 ml-6 list-decimal;
  }

  .contentBlog li {
    @apply text-base leading-relaxed my-2 text-gray-700;
    padding-left: 0.5em;
  }

  .contentBlog a {
    @apply text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2;
    word-break: break-all;
  }

  .contentBlog blockquote {
    @apply pl-4 border-l-4 border-blue-500 italic my-6 text-gray-700;
    padding: 1em;
    background-color: #f8f9fa;
    margin-left: 0;
    margin-right: 0;
  }

  .contentBlog table {
    @apply w-full border-collapse my-1;
    min-width: 100%;
    table-layout: fixed;
  }

  .contentBlog.article-content th p {
    @apply bg-gray-50 font-semibold mx-0;
    text-align: center;
  }

  .contentBlog.article-content td {
    font-size: 14px;
    border: 1px solid #e5e7eb;
    padding: 0.75rem;
  }

  .contentBlog.article-content td p {
    font-size: 14px;
    margin: 0.5rem;
    line-height: 1.5;
    margin-bottom: 0;
  }

  .contentBlog iframe {
    @apply w-full rounded-xl shadow-lg my-8;
    position: relative;
    width: 100%;
    height: 400px;
  }

  .contentBlog iframe iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  /* 代码块样式 */
  .contentBlog pre {
    @apply bg-gray-800 text-gray-100 rounded-lg p-4 my-6 overflow-x-auto;
  }

  .contentBlog code {
    @apply bg-gray-100 text-gray-800 px-1 py-0.5 rounded;
    font-family:
      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
      'Courier New', monospace;
  }

  .contentBlog pre code {
    @apply bg-transparent text-gray-100 p-0;
  }

  /* 目录导航样式 */
  .toc-nav {
    max-height: calc(100vh - 200px);
    overflow-y: auto;
  }

  .toc-item a.active {
    @apply bg-blue-50 text-blue-700 font-medium;
  }

  /* 暗色模式支持 */
  @media (prefers-color-scheme: dark) {
    .contentBlog {
      @apply text-gray-300;
    }

    .contentBlog p,
    .contentBlog li {
      @apply text-gray-300;
    }

    .contentBlog h2,
    .contentBlog h3 {
      @apply text-gray-100;
    }

    .contentBlog blockquote {
      @apply bg-gray-800 text-gray-300;
    }

    .contentBlog code {
      @apply bg-gray-700 text-gray-100;
    }
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0.5;
    }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  /* Tooltip 样式 */
  .tooltip {
    pointer-events: none;
    width: max-content;
    max-width: 300px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
  }

  /* 暗色模式支持 */
  @media (prefers-color-scheme: dark) {
    .tooltip {
      @apply bg-gray-800;
    }

    .tooltip-arrow {
      border-top-color: theme('colors.gray.800');
    }
  }
</style>
