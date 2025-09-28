<template>
  <div
    class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
  >
    <!-- 标题部分 -->
    <div
      v-if="title || description"
      class="text-center mb-12"
    >
      <h2
        v-if="title"
        class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        {{ title }}
      </h2>
      <p
        v-if="description"
        class="mt-4 text-lg text-gray-600"
      >
        {{ description }}
      </p>
    </div>

    <!-- 产品网格 -->
    <div
      class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <!-- 产品图片 -->
        <div
          class="aspect-3/4 w-full overflow-hidden bg-gray-200 sm:aspect-auto sm:h-96"
        >
          <img
            :src="product.imageSrc"
            :alt="product.imageAlt"
            class="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-200"
          />
        </div>

        <!-- 产品信息 -->
        <div class="flex flex-1 flex-col space-y-2 p-4">
          <h3 class="text-sm font-medium text-gray-900">
            <div class="hover:text-blue-600 transition-colors duration-200">
              <span aria-hidden="true" />
              {{ product.name }}
            </div>
          </h3>
          <p class="text-sm text-gray-500 line-clamp-2">
            {{ product.description }}
          </p>
          <div class="h-5"></div>
          <div class="flex gap-x-2 justify-between">
            <!-- 这里可以添加价格或其他信息 -->
            <NuxtLink
              :to="learnMoreLink"
              class="inline-flex cursor-pointer items-center gap-x-2 rounded-md text-sm text-blue-600 shadow-xs"
            >
              {{ learnMoreText }}
            </NuxtLink>

            <NuxtLink
              :to="quoteLink"
              class="inline-flex cursor-pointer items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2 text-sm text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:shadow-none dark:hover:bg-blue-400 dark:focus-visible:outline-blue-500"
            >
              <CheckCircleIcon
                class="-ml-0.5 size-5"
                aria-hidden="true"
              />
              {{ quoteText }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { CheckCircleIcon } from '@heroicons/vue/20/solid';
  // Props 定义
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    // 新增的 props
    learnMoreText: {
      type: String,
      default: '了解更多',
    },
    quoteText: {
      type: String,
      default: '免费报价',
    },
    learnMoreLink: {
      type: String,
      default: '/',
    },
    quoteLink: {
      type: String,
      default: '/',
    },
  });
</script>

<style scoped>
  /* 添加文本截断样式 */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
