<template>
  <div class="bg-white pb-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-4">
        <div class="col-span-3">
          <div class="mt-16">
            <h2 class="text-2xl font-semibold">Categories</h2>
            <div class="mt-4 flex flex-col gap-2">
              <div
                v-for="item in category.data"
                class="text-gray-700 hover:text-gray-900 font-semibold"
              >
                {{ item.title }}
              </div>
              <div class="text-gray-700 hover:text-gray-900 font-semibold">
                category
              </div>
              <div class="text-gray-700 hover:text-gray-900 font-semibold">
                category
              </div>
              <div class="text-gray-700 hover:text-gray-900 font-semibold">
                category
              </div>
              <div class="text-gray-700 hover:text-gray-900 font-semibold">
                category
              </div>
              <div class="text-gray-700 hover:text-gray-900 font-semibold">
                category
              </div>
              <div class="text-gray-700 hover:text-gray-900 font-semibold">
                category
              </div>
              <div class="text-gray-700 hover:text-gray-900 font-semibold">
                category
              </div>
            </div>
            <h2 class="text-2xl font-semibold mt-16">Tags</h2>
            <div class="flex gap-x-2 flex-wrap gap-y-2 mt-4">
              <span
                class="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700"
                >Badge</span
              >
              <span
                class="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700"
                >Badge</span
              >
            </div>
          </div>
        </div>
        <div class="col-span-9">
          <div class="mt-16 space-y-20">
            <article
              v-for="post in posts"
              :key="post.id"
              class="relative isolate flex flex-col gap-8 lg:flex-row"
            >
              <div
                class="relative aspect-video sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0"
              >
                <img
                  :src="post.imageUrl"
                  alt=""
                  class="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
                />
                <div
                  class="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10"
                />
              </div>
              <div>
                <div class="flex items-center gap-x-4 text-xs">
                  <time
                    :datetime="post.datetime"
                    class="text-gray-500"
                    >{{ post.date }}</time
                  >
                  <a
                    :href="post.category.href"
                    class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >{{ post.category.title }}</a
                  >
                </div>
                <div class="group relative max-w-xl">
                  <h3
                    class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600"
                  >
                    <a :href="post.href">
                      <span class="absolute inset-0" />
                      {{ post.title }}
                    </a>
                  </h3>
                  <p class="mt-5 text-sm/6 text-gray-600">
                    {{ post.description }}
                  </p>
                </div>
                <div class="mt-6 flex border-t border-gray-900/5 pt-6">
                  <div class="relative flex items-center gap-x-4">
                    <img
                      :src="post.author.imageUrl"
                      alt=""
                      class="size-10 rounded-full bg-gray-50"
                    />
                    <div class="text-sm/6">
                      <p class="font-semibold text-gray-900">
                        <a :href="post.author.href">
                          <span class="absolute inset-0" />
                          {{ post.author.name }}
                        </a>
                      </p>
                      <p class="text-gray-600">{{ post.author.role }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { data: articleList } = await useFetch(
    'https://us-api.swimsuitcustom.com/api/article/index',
    {
      method: 'GET',
      params: {
        page: 1,
        pageSize: 10,
      },
    }
  );
  console.log(articleList.value, 'articleList');

  // 将articleList数据转换为模板所需的格式
  const posts = computed(() => {
    if (!articleList.value.data) return [];

    return articleList.value.data.rows.map((article, index) => ({
      id: article.id,
      title: article.title,
      href: article.url || '#',
      description: article.description,
      imageUrl: article.image,
      date: new Date(article.create_time).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
      datetime: article.create_time.split(' ')[0], // 取日期部分
      category: {
        title: article.classify_id === 1 ? 'Business' : 'General',
        href: '#',
      },
      author: {
        name: article.author,
        role: 'Author',
        href: '#',
        imageUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(article.author)}&background=f3f4f6&color=374151`,
      },
    }));
  });

  const { data: category, refresh } = await useFetch(
    'https://us-api.swimsuitcustom.com/api/article/cate',
    {
      method: 'GET',
      query: {
        pid: 1,
      },
    }
  );
  refresh();
  console.log(category.value, 'category');

  console.log(category.value, 'category');
</script>
