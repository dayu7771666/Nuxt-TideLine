<template>
  <div class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
    <!-- 背景装饰 -->
    <div
      class="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
      aria-hidden="true"
    >
      <div
        class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        style="
          clip-path: polygon(
            63.1% 29.6%,
            100% 17.2%,
            76.7% 3.1%,
            48.4% 0.1%,
            44.6% 4.8%,
            54.5% 25.4%,
            59.8% 49.1%,
            55.3% 57.9%,
            44.5% 57.3%,
            27.8% 48%,
            35.1% 81.6%,
            0% 97.8%,
            39.3% 100%,
            35.3% 81.5%,
            97.2% 52.8%,
            63.1% 29.6%
          );
        "
      />
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- 头部介绍 -->
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
          {{ about?.hero?.title }}
        </h1>
        <p class="mt-6 text-xl/8 text-gray-700">
          {{ about?.hero?.description }}
        </p>
      </div>

      <!-- 主要内容网格 -->
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12"
      >
        <!-- 图像或引用区 -->
        <div class="relative lg:order-last lg:col-span-5">
          <svg
            class="absolute left-1 top-[-40rem] -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="pattern-bg"
                width="200"
                height="200"
                patternUnits="userSpaceOnUse"
              >
                <path d="M0.5 0V200M200 0.5L0 0.499983" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#pattern-bg)"
            />
          </svg>
          <figure class="border-l border-indigo-600 pl-8">
            <blockquote
              class="text-xl/8 font-semibold tracking-tight text-gray-900"
            >
              <p>"{{ about?.quote?.text }}"</p>
            </blockquote>
            <figcaption class="mt-8 flex gap-x-4">
              <img
                :src="about?.quote?.author?.avatar"
                :alt="about?.quote?.author?.name"
                class="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
              />
              <div class="text-sm/6">
                <div class="font-semibold text-gray-900">
                  {{ about?.quote?.author?.name }}
                </div>
                <div class="text-gray-600">
                  {{ about?.quote?.author?.handle }}
                </div>
              </div>
            </figcaption>
            <div class="mt-6">
              <button
                class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact US
              </button>
            </div>
          </figure>
        </div>

        <!-- 文本内容区 -->
        <div class="max-w-xl text-base/7 text-gray-600 lg:col-span-7">
          <p>
            {{ about?.content?.intro }}
          </p>

          <ul
            role="list"
            class="mt-8 max-w-xl space-y-8 text-gray-600"
          >
            <li
              v-for="feature in about?.content?.features"
              :key="feature.title"
              class="flex gap-x-3"
            >
              <component
                :is="getIconComponent(feature.icon)"
                class="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong class="font-semibold text-gray-900"
                  >{{ feature.title }}：</strong
                >
                {{ feature.description }}
              </span>
            </li>
          </ul>

          <p class="mt-8">
            {{ about?.content?.mission }}
          </p>

          <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            {{ about?.content?.commitment?.title }}
          </h2>
          <p class="mt-6">
            {{ about?.content?.commitment?.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
  } from '@heroicons/vue/20/solid';

  // 获取国际化
  const { locale } = useI18n();

  // 获取about页面数据
  const { data: about } = await useAsyncData(
    async () => {
      // 根据当前语言构建集合名称
      const collection = 'content_' + locale.value;
      const content = await queryCollection(collection).path('/about').first();
      // 可选：如果内容缺失，回退到默认语言
      if (!content && locale.value !== 'en') {
        return await queryCollection('content_en').path('/about').first();
      }
      return content?.body;
    },
    {
      watch: [locale],
      // server: true,
    }
  );

  // 图标组件映射
  const iconComponents = {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
  };

  // 获取图标组件的函数
  const getIconComponent = iconName => {
    return iconComponents[iconName] || CloudArrowUpIcon;
  };
</script>
