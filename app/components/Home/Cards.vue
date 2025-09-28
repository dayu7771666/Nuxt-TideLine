<template>
  <div class="relative isolate overflow-hidden bg-gray-100 py-16">
    <div class="mx-auto max-w-8xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8"
      >
        <div
          data-aos="fade-up"
          v-for="(card, index) in cards"
          :key="card.name"
          @click="handleCardClick(card, index)"
          class="cursor-pointer flex gap-x-6 rounded-xl p-8 bg-white/25 backdrop-blur-sm border border-white/30 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:bg-white/35 hover:border-white/40 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 relative overflow-hidden"
        >
          <component
            :is="getIconComponent(card.icon)"
            class="h-10 w-10 flex-none text-sky-600"
            aria-hidden="true"
          />
          <div class="text-base">
            <h3 class="font-semibold text-gray-900 text-md">
              {{ card.name }}
            </h3>
            <p class="mt-3 text-gray-500">{{ card.description }}</p>
            <p class="text-xs mt-3 text-blue-500">→{{ card.contact }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    TagIcon,
    ClockIcon,
    PencilSquareIcon,
    ChatBubbleLeftRightIcon,
  } from '@heroicons/vue/24/outline';

  // 定义props接收数据
  const props = defineProps({
    cards: {
      type: Array,
      default: () => [],
    },
  });

  // 图标映射
  const iconMap = {
    TagIcon,
    ClockIcon,
    PencilSquareIcon,
    ChatBubbleLeftRightIcon,
  };

  // 获取图标组件
  const getIconComponent = iconName => {
    return iconMap[iconName] || TagIcon;
  };

  // 处理卡片点击事件
  const handleCardClick = (card, index) => {
    console.log('Card clicked:', card, 'Index:', index);
    // 这里可以添加点击处理逻辑，比如跳转到联系页面或下载
  };
</script>
