<template>
  <div
    data-aos="fade-up"
    class="bg-gray-50 py-24 sm:py-32"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h2
          class="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 leading-tight"
        >
          {{ howWorks.title }}
        </h2>
        <p
          class="mt-4 sm:mt-6 text-base sm:text-lg text-gray-500 leading-relaxed"
        >
          {{ howWorks.description }}
        </p>
      </div>

      <div class="mx-auto mt-16 max-w-7xl">
        <div class="relative">
          <!-- 桌面端连接线 -->
          <div
            class="absolute hidden md:block top-8 left-0 h-0.5 w-full bg-gray-300"
          ></div>
          <div
            class="absolute hidden md:block top-8 left-0 h-0.5 bg-blue-500 w-full"
          ></div>

          <!-- 移动端 -->
          <div class="md:hidden w-full overflow-x-auto scrollbar-hide pb-6">
            <div class="inline-flex min-w-max space-x-6 px-4">
              <div
                v-for="(step, index) in howWorks.steps"
                :key="index"
                class="flex flex-col items-center w-60"
              >
                <div
                  class="relative flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 mb-4 z-10 step-icon border border-blue-500"
                >
                  <component
                    :is="getIconComponent(step.icon)"
                    class="h-8 w-8 text-blue-500"
                  />
                  <div
                    class="absolute top-0 right-0 flex h-6 w-6 items-center justify-center rounded-full text-white text-xs font-bold bg-blue-500"
                  >
                    {{ index + 1 }}
                  </div>
                </div>
                <h3
                  class="text-base font-semibold text-gray-900 text-center leading-tight mb-2"
                >
                  {{ step.title }}
                </h3>
                <p class="text-sm text-gray-600 text-center leading-relaxed">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- 桌面端 -->
          <div class="hidden md:grid relative grid-cols-5 gap-8">
            <div
              v-for="(step, index) in howWorks.steps"
              :key="index"
              class="flex flex-col items-center service-step-container"
            >
              <div
                class="relative flex h-16 w-16 items-center justify-center rounded-full mb-4 z-10 step-icon border border-blue-600 bg-blue-50"
              >
                <component
                  :is="getIconComponent(step.icon)"
                  class="h-8 w-8 text-blue-600"
                />
                <div
                  class="absolute top-0 right-0 flex h-6 w-6 items-center justify-center rounded-full text-white text-xs font-bold bg-blue-600"
                >
                  {{ index + 1 }}
                </div>
              </div>
              <h3
                class="text-base sm:text-lg font-semibold text-gray-900 text-center leading-tight mb-2"
              >
                {{ step.title }}
              </h3>
              <p class="text-sm text-gray-600 text-center leading-relaxed">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 flex justify-center">
        <a
          href="/contact"
          class="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transform transition-all duration-300 hover:scale-105 opacity-100 translate-y-0"
        >
          {{ howWorks.cta }} <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    ChatBubbleLeftRightIcon,
    PencilSquareIcon,
    CheckCircleIcon,
    TruckIcon,
    ChartBarIcon,
  } from '@heroicons/vue/24/outline';
  // 定义props接收数据
  const props = defineProps({
    howWorks: {
      type: Object,
      default: () => ({
        title: '',
        description: '',
        steps: [],
        cta: '',
      }),
    },
  });

  // 图标映射
  const iconMap = {
    ChatBubbleLeftRightIcon,
    PencilSquareIcon,
    CheckCircleIcon,
    TruckIcon,
    ChartBarIcon,
  };

  // 获取图标组件
  const getIconComponent = iconName => {
    return iconMap[iconName] || ChatBubbleLeftRightIcon;
  };
</script>

<style scoped>
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }

  @keyframes bounce {
    0%,
    20%,
    53%,
    80%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    40%,
    43% {
      transform: translate3d(0, -8px, 0);
    }
    70% {
      transform: translate3d(0, -4px, 0);
    }
    90% {
      transform: translate3d(0, -2px, 0);
    }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .animate-bounce {
    animation: bounce 1s;
  }

  .duration-3000 {
    transition-duration: 3000ms;
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
</style>
