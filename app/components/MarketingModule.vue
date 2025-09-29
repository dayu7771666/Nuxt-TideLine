<template>
  <div
    class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 mb-12 border border-pink-100"
  >
    <!-- 主标题和描述 -->
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">
        {{ title }}
      </h2>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        {{ description }}
      </p>
    </div>

    <!-- 商品盒子网格 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group cursor-pointer"
        @click="handleItemClick(item)"
      >
        <!-- 商品图片 -->
        <div
          class="w-full h-48 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300"
        >
          <img
            v-if="item.image"
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover"
          />
          <div
            v-else-if="item.icon"
            class="w-full h-full flex items-center justify-center"
          >
            <component
              :is="getIconComponent(item.icon)"
              class="w-12 h-12 text-white"
            />
          </div>
          <div
            v-else
            class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300"
          >
            <span class="text-gray-500 font-bold text-2xl">{{
              item.title?.charAt(0) || '★'
            }}</span>
          </div>
        </div>

        <!-- 商品标题 -->
        <h3
          class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300"
        >
          {{ item.title }}
        </h3>

        <!-- 商品描述 -->
        <p class="text-sm text-gray-600 leading-relaxed">
          {{ item.description }}
        </p>

        <!-- 悬停时显示的箭头 -->
        <div
          class="mt-4 flex items-center text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span class="text-sm font-medium">{{ $t('Learn More') }}</span>
          <svg
            class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    CameraIcon,
    PlayIcon,
    StarIcon,
    HeartIcon,
    SparklesIcon,
    FireIcon,
  } from '@heroicons/vue/24/outline';

  // 定义 props
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
  });

  // 定义 emits
  const emit = defineEmits(['item-click']);

  // 图标映射
  const iconMap = {
    CameraIcon,
    PlayIcon,
    StarIcon,
    HeartIcon,
    SparklesIcon,
    FireIcon,
  };

  // 获取图标组件
  const getIconComponent = iconName => {
    return iconMap[iconName] || StarIcon;
  };

  // 处理商品点击事件
  const handleItemClick = item => {
    emit('item-click', item);
  };
</script>
