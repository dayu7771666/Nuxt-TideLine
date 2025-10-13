<template>
  <!-- Hero section -->
  <div :class="['relative overflow-hidden', backgroundClass]">
    <!-- Background Decorations -->
    <div
      v-if="decorations"
      class="absolute inset-0 pointer-events-none"
    >
      <!-- Grid pattern -->
      <div
        class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"
      ></div>

      <!-- Floating gradient orbs -->
      <div
        class="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-300/15 to-teal-300/15 rounded-full blur-2xl animate-pulse"
        style="animation-delay: 2s"
      ></div>

      <!-- Geometric shapes -->
      <div
        class="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-2xl rotate-12 blur-sm"
      ></div>
      <div
        class="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-tl from-green-200/25 to-emerald-200/25 rounded-full blur-sm"
      ></div>
    </div>

    <!-- Decorative image and overlay (only when using image mode) -->
    <template v-if="image">
      <div
        aria-hidden="true"
        class="absolute inset-0 overflow-hidden"
      >
        <NuxtImg
          :quality="imgQulity"
          priority
          :src="image"
          :alt="alt"
          :width="width || 1600"
          :height="height || 800"
          :sizes="sizes || '100vw sm:50vw md:80vw lg:1600px'"
          loading="eager"
          :class="imageClasses"
          fetchpriority="high"
          densities="x1 x2"
        />
      </div>
      <div
        aria-hidden="true"
        :class="['absolute inset-0', overlayClass]"
      />
    </template>

    <div :class="containerClasses">
      <h1
        v-if="title"
        :class="titleClasses"
      >
        {{ title }}
      </h1>
      <p
        v-if="description"
        :class="descriptionClasses"
      >
        {{ description }}
      </p>
      <div class="flex gap-x-5">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps<{
    title?: string;
    description?: string;
    image?: string;
    alt?: string;
    width?: string | number;
    height?: string | number;
    sizes?: string;
    imgQulity?: number;
    // 新的 padding 控制
    pt?: string;
    pb?: string;
    // 背景配置
    bgColor?: string;
    bgGradient?: string;
    // 背景装饰效果
    decorations?: boolean;
    // 文字颜色配置
    textColor?: 'white' | 'dark';
    // 叠加层配置
    overlay?: string;
    // 向后兼容的 position 属性
    position?: 'center' | 'top-third';
    // 图片显示模式控制
    objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
    // 图片位置控制
    imagePosition?:
      | 'center'
      | 'top'
      | 'bottom'
      | 'left'
      | 'right'
      | 'top-left'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-right';
  }>();

  // 背景类名
  const backgroundClass = computed(() => {
    if (props.image) {
      return 'bg-gray-900'; // 图片模式默认背景
    }
    if (props.bgGradient) {
      return props.bgGradient;
    }
    if (props.bgColor) {
      return props.bgColor;
    }
    return 'bg-gray-900'; // 默认背景
  });

  // 叠加层类名
  const overlayClass = computed(() => {
    return props.overlay || 'bg-gray-900 opacity-50';
  });

  // 容器类名
  const containerClasses = computed(() => {
    let pt = props.pt;
    let pb = props.pb;

    // 向后兼容：如果没有设置 pt/pb，使用 position
    if (!pt || !pb) {
      if (props.position === 'top-third') {
        pt = pt || 'pt-44';
        pb = pb || 'pb-60';
      } else {
        pt = pt || 'pt-48';
        pb = pb || 'pb-60';
      }
    }

    return [
      'relative mx-auto flex max-w-6xl flex-col px-6 lg:px-0',
      'items-center justify-center text-center',
      pt,
      pb,
    ];
  });

  // 标题类名
  const titleClasses = computed(() => {
    const baseClasses = 'text-3xl font-bold tracking-tight lg:text-5xl italic';
    const colorClass =
      props.textColor === 'dark' ? 'text-gray-900' : 'text-white';
    return `${baseClasses} ${colorClass}`;
  });

  // 描述类名
  const descriptionClasses = computed(() => {
    const baseClasses = 'mt-4 text-xl font-semibold italic';
    const colorClass =
      props.textColor === 'dark' ? 'text-gray-600' : 'text-white';
    return `${baseClasses} ${colorClass}`;
  });

  // 图片显示类名
  const imageClasses = computed(() => {
    const objectFitClass = getObjectFitClass(props.objectFit || 'cover');
    const positionClass = getObjectPositionClass(
      props.imagePosition || 'center'
    );
    return `w-full h-full ${objectFitClass} ${positionClass}`;
  });

  // 获取 object-fit 类名
  function getObjectFitClass(objectFit: string): string {
    const fitMap: Record<string, string> = {
      cover: 'object-cover',
      contain: 'object-contain',
      fill: 'object-fill',
      'scale-down': 'object-scale-down',
      none: 'object-none',
    };
    return fitMap[objectFit] || 'object-cover';
  }

  // 获取 object-position 类名
  function getObjectPositionClass(position: string): string {
    const positionMap: Record<string, string> = {
      center: 'object-center',
      top: 'object-top',
      bottom: 'object-bottom',
      left: 'object-left',
      right: 'object-right',
      'top-left': 'object-left-top',
      'top-right': 'object-right-top',
      'bottom-left': 'object-left-bottom',
      'bottom-right': 'object-right-bottom',
    };
    return positionMap[position] || 'object-center';
  }
</script>

<style scoped>
  /* 网格背景样式 */
  .bg-grid-slate-100 {
    background-image: radial-gradient(
      circle at 1px 1px,
      rgba(148, 163, 184, 0.15) 1px,
      transparent 0
    );
    background-size: 20px 20px;
  }

  /* 自定义脉冲动画 */
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
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>
