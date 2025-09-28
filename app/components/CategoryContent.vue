<template>
  <div class="space-y-4">
    <!-- 标题和下划线 -->
    <div class="">
      <h3 class="text-2xl font-bold text-gray-900">
        {{ title }}
      </h3>
    </div>

    <!-- 商品展示区域 -->
    <div
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
    >
      <div
        v-for="item in items"
        :key="item.id"
        class="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
      >
        <!-- 商品图片 -->
        <div class="aspect-square w-full overflow-hidden bg-gray-200">
          <img
            :src="item.imageSrc || '/placeholder-image.jpg'"
            :alt="item.imageAlt || item.title"
            class="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-200"
          />
        </div>

        <!-- 商品信息 -->
        <div class="p-6 flex flex-col flex-1">
          <h4 class="text-lg font-semibold text-gray-900 mb-2">
            {{ item.title }}
          </h4>
          <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
            {{ item.description }}
          </p>

          <!-- 按钮组 -->
          <div class="flex space-x-3 mt-auto">
            <button
              type="button"
              @click="onInquire(item)"
              class="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Inquire
            </button>
            <button
              type="button"
              @click="onDetails(item)"
              class="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 空状态 -->
    <div
      v-if="!items || items.length === 0"
      class="text-center py-12"
    >
      <div class="text-gray-400 mb-4">
        <svg
          class="mx-auto h-16 w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-5.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H1"
          />
        </svg>
      </div>
      <h3 class="text-lg font-medium text-gray-900 mb-1">No items found</h3>
      <p class="text-gray-500">Try selecting a different category.</p>
    </div>
  </div>
</template>

<script setup>
  // 定义 props
  const props = defineProps({
    title: {
      type: String,
      default: 'Category Items',
    },
    items: {
      type: Array,
      default: () => [],
    },
  });

  // 定义 emits
  const emit = defineEmits(['inquire', 'details']);

  // 处理询价按钮点击
  const onInquire = item => {
    emit('inquire', item);
  };

  // 处理详情按钮点击
  const onDetails = item => {
    emit('details', item);
  };
</script>
