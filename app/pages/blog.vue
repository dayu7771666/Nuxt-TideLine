<template>
  <div class="bg-white pb-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-4">
        <div class="col-span-3">
          <div class="mt-16">
            <h2 class="text-2xl font-semibold">{{ $t('blog.categories') }}</h2>
            <div class="mt-4 flex flex-col gap-2">
              <!-- 全部选项 -->
              <div
                @click="selectCategory('1')"
                :class="[
                  'cursor-pointer transition-colors',
                  selectedCategoryId === '1'
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-bule-600',
                ]"
              >
                {{ $t('blog.all') }}
              </div>
              <!-- 其他分类 -->
              <div
                v-for="item in category"
                :key="item.id"
                @click="selectCategory(item.id)"
                :class="[
                  'cursor-pointer transition-colors',
                  selectedCategoryId === item.id.toString()
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-bule-600',
                ]"
              >
                {{ item.title }}
              </div>
            </div>
            <h2 class="text-2xl font-semibold mt-16">
              {{ $t('blog.blogTagsTitle') }}
            </h2>
            <div class="flex gap-x-2 flex-wrap gap-y-2 mt-4">
              <span
                v-for="(tagValue, tagKey) in blogTags"
                :key="tagKey"
                @click="selectTag(tagKey)"
                :class="[
                  'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium cursor-pointer transition-colors',
                  selectedTag === tagKey
                    ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                ]"
              >
                {{ tagValue.body.static }}
              </span>
            </div>
          </div>
        </div>
        <div class="col-span-9">
          <!-- 加载状态 -->
          <div
            v-if="loading"
            class="mt-16 flex justify-center"
          >
            <div
              class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"
            ></div>
          </div>

          <div
            v-else
            class="mt-16 space-y-20"
          >
            <article
              v-for="post in posts"
              :key="post.id"
              class="relative isolate flex flex-col gap-8 lg:flex-row"
            >
              <div
                class="relative aspect-video sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0"
              >
                <NuxtLinkLocale
                  :to="`/blogArticle/${post.id}`"
                  class="block"
                >
                  <img
                    :src="post.image"
                    :alt="post.title"
                    class="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover hover:opacity-90 transition-opacity cursor-pointer"
                  />
                  <div
                    class="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10"
                  />
                </NuxtLinkLocale>
              </div>
              <div>
                <div class="flex items-center gap-x-4 text-xs">
                  <span
                    v-if="post.classify_id"
                    class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >{{ getCategoryName(post.classify_id) }}</span
                  >
                </div>
                <div class="group relative max-w-xl">
                  <h3
                    class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600"
                  >
                    <NuxtLinkLocale :to="`/blogArticle/${post.id}`">
                      <span class="absolute inset-0" />
                      {{ post.title }}
                    </NuxtLinkLocale>
                  </h3>
                  <p class="mt-5 text-sm/6 text-gray-600">
                    {{ post.description }}
                  </p>
                </div>
                <div
                  class="mt-6 flex items-center gap-x-4 border-t border-gray-900/5 pt-6"
                >
                  <div class="text-sm/6">
                    <p class="text-gray-600">
                      {{ $t('blog.by') }}
                      <span class="font-semibold text-gray-900">{{
                        post.author
                      }}</span>
                    </p>
                  </div>
                  <span class="text-gray-300">•</span>
                  <time
                    :datetime="formatDate(post.create_time, 'iso')"
                    class="text-sm text-gray-500"
                    >{{ formatDate(post.create_time, 'display') }}</time
                  >
                </div>
              </div>
            </article>
          </div>

          <!-- 分页器 -->
          <div
            v-if="!loading && totalPages > 1"
            class="mt-16"
          >
            <!-- 页面信息 -->
            <div class="flex justify-center mb-4">
              <p class="text-sm text-gray-700">
                {{ $t('blog.showingPage') }}
                <span class="font-medium">{{ searchParams.pageNo }}</span>
                {{ $t('blog.of') }}
                <span class="font-medium">{{ totalPages }}</span>
                ({{ total }} {{ $t('blog.totalArticles') }})
              </p>
            </div>

            <!-- 分页导航 -->
            <div class="flex justify-center">
              <!-- 桌面端分页 -->
              <nav
                class="hidden md:flex items-center border-t border-gray-200 px-4 sm:px-0"
              >
                <div class="-mt-px flex">
                  <template
                    v-for="page in getPageNumbers()"
                    :key="page"
                  >
                    <button
                      v-if="page !== '...'"
                      @click="getPageNo(page)"
                      :class="[
                        'inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium',
                        page === searchParams.pageNo
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      ]"
                    >
                      {{ page }}
                    </button>
                    <span
                      v-else
                      class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
                    >
                      ...
                    </span>
                  </template>
                </div>
              </nav>

              <!-- 移动端分页 -->
              <div
                class="md:hidden flex justify-center border-t border-gray-200 pt-4"
              >
                <div class="flex items-center space-x-1">
                  <template
                    v-for="page in getPageNumbers()"
                    :key="page"
                  >
                    <button
                      v-if="page !== '...'"
                      @click="getPageNo(page)"
                      :class="[
                        'px-3 py-2 text-sm font-medium rounded-md',
                        page === searchParams.pageNo
                          ? 'bg-indigo-600 text-white'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                      ]"
                    >
                      {{ page }}
                    </button>
                    <span
                      v-else
                      class="px-2 py-2 text-sm font-medium text-gray-500"
                    >
                      ...
                    </span>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { t, tm } = useI18n();

  const posts = ref();
  const loading = ref(false);
  const searchParams = ref({
    pageNo: 1,
    pageSize: 12,
    classify_id: '1', // 默认分类ID
    tags: '', // 选中的标签
  });
  const total = ref();

  // 选中状态
  const selectedCategoryId = ref('1'); // 默认选中第一个分类
  const selectedTag = ref(''); // 选中的标签

  const blogTags = tm('blog.blogTags');

  // 格式化日期函数
  const formatDate = (dateString, format = 'display') => {
    if (!dateString) return '';

    const date = new Date(dateString);

    if (format === 'iso') {
      return date.toISOString().split('T')[0];
    }

    // 默认显示格式
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // 根据分类ID获取分类名称
  const getCategoryName = classifyId => {
    const categoryMap = {
      1: 'Business',
      2: 'Technology',
      3: 'Design',
      4: 'Manufacturing',
    };
    return categoryMap[classifyId] || 'General';
  };

  // 计算总页数
  const totalPages = computed(() => {
    return Math.ceil(total.value / searchParams.value.pageSize);
  });

  // 生成页码数组
  const getPageNumbers = () => {
    const current = searchParams.value.pageNo;
    const total = totalPages.value;
    const pages = [];

    if (total <= 7) {
      // 如果总页数小于等于7，显示所有页码
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      // 总页数大于7时，使用省略号
      if (current <= 4) {
        // 当前页在前面
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(total);
      } else if (current >= total - 3) {
        // 当前页在后面
        pages.push(1);
        pages.push('...');
        for (let i = total - 4; i <= total; i++) {
          pages.push(i);
        }
      } else {
        // 当前页在中间
        pages.push(1);
        pages.push('...');
        for (let i = current - 1; i <= current + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(total);
      }
    }

    return pages;
  };

  const getPageNo = newPageNo => {
    // 边界检查
    if (newPageNo < 1 || newPageNo > totalPages.value) {
      return;
    }

    searchParams.value.pageNo = newPageNo;
    getPostsList();

    // 滚动到页面顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 选择分类
  const selectCategory = categoryId => {
    selectedCategoryId.value = categoryId.toString();
    searchParams.value.classify_id = categoryId.toString();
    searchParams.value.pageNo = 1; // 重置到第一页
    getPostsList();
  };

  // 选择标签
  const selectTag = tagKey => {
    if (selectedTag.value === tagKey) {
      // 如果点击的是已选中的标签，则取消选择
      selectedTag.value = '';
      searchParams.value.tags = '';
    } else {
      // 选择新标签
      selectedTag.value = tagKey;
      searchParams.value.tags = tagKey;
    }
    searchParams.value.pageNo = 1; // 重置到第一页
    getPostsList();
  };

  const getPostsList = async () => {
    loading.value = true;
    try {
      const queryParams = {
        page: searchParams.value.pageNo,
        size: searchParams.value.pageSize,
        classify_id: searchParams.value.classify_id,
      };

      // 只有当tags不为空时才添加tags参数
      if (searchParams.value.tags) {
        queryParams.tags = searchParams.value.tags;
      }

      let res = await GetApi('/api/article/index', {
        query: queryParams,
      });
      if (res.code === 200) {
        posts.value = res.data.rows;
        total.value = res.data.total;
      }
    } finally {
      loading.value = false;
    }
  };

  getPostsList();

  const category = ref();
  const getCategoryList = async () => {
    let res = await GetApi('/api/article/cate', {
      query: {
        pid: 1,
      },
    });
    if (res.code === 200) {
      // 隐藏第一个分类
      category.value = res.data.slice(1);
    }
  };
  getCategoryList();

  // SEO Meta
  useSeoMeta({
    title: t('blog.seoblog.title'),
    ogTitle: t('blog.seoblog.title'),
    description: t('blog.seoblog.description'),
    ogDescription: t('blog.seoblog.description'),
    keywords: t('blog.seoblog.keywords'),
    ogImage: t('blog.seoblog.ogImage'),
    twitterCard: t('blog.seoblog.twitterCard'),
  });
</script>
