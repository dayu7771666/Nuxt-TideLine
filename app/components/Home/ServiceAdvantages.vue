<template>
  <div
    :class="[
      'relative py-20 overflow-hidden',
      bgClass || 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50',
    ]"
  >
    <!-- 背景装饰 -->
    <div
      v-if="decorations"
      class="absolute inset-0 pointer-events-none"
    >
      <!-- 网格背景 -->
      <div
        class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"
      ></div>

      <!-- 浮动渐变光球 -->
      <div
        class="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s"
      ></div>

      <!-- 几何装饰 -->
      <div
        class="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-2xl rotate-12 blur-sm"
      ></div>
      <div
        class="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-tl from-green-200/25 to-emerald-200/25 rounded-full blur-sm"
      ></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <!-- 标题区域 -->
      <div class="mx-auto max-w-3xl text-center">
        <h2
          class="text-3xl py-2 font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent sm:text-4xl"
        >
          {{ title }}
        </h2>
        <p class="text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          {{ description }}
        </p>
      </div>

      <div class="mx-auto mt-20 max-w-7xl">
        <!-- 移动端横向滑动布局 -->
        <div class="sm:hidden">
          <div class="overflow-x-auto pb-6 scrollbar-hide">
            <div class="flex gap-6 px-4 w-max">
              <div
                v-for="(advantage, index) in advantages"
                :key="advantage.id"
                class="flex-shrink-0 w-80 group"
                :style="{ animationDelay: `${index * 100}ms` }"
              >
                <div
                  class="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-white/20"
                >
                  <!-- 卡片光泽效果 -->
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  ></div>

                  <div class="relative p-8">
                    <!-- 图标容器 -->
                    <div class="flex justify-center mb-6">
                      <div class="relative">
                        <div
                          class="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"
                        ></div>
                        <div
                          class="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-500 group-hover:scale-110"
                        >
                          <!-- 显示数字或图标 -->
                          <span
                            v-if="showNumbers"
                            class="text-2xl font-bold text-white"
                          >
                            {{ index + 1 }}
                          </span>
                          <component
                            v-else
                            :is="getIcon(advantage.icon)"
                            class="h-8 w-8 text-white"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>

                    <!-- 内容 -->
                    <div class="text-center">
                      <h3
                        class="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300"
                      >
                        {{ advantage.title }}
                      </h3>
                      <p class="text-gray-600 leading-relaxed">
                        {{ advantage.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 桌面端网格布局 -->
        <div :class="gridClasses">
          <div
            v-for="(advantage, index) in advantages"
            :key="advantage.id"
            class="group animate-fade-in-up"
            :style="{ animationDelay: `${index * 150}ms` }"
          >
            <div
              class="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 border border-white/20"
            >
              <!-- 卡片顶部装饰线 -->
              <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-b-full"
              ></div>

              <!-- 卡片光泽效果 -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <div class="relative p-8">
                <!-- 图标容器 -->
                <div class="flex justify-center mb-6">
                  <div class="relative">
                    <!-- 背景光晕 -->
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"
                    ></div>
                    <!-- 图标背景 -->
                    <div
                      class="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    >
                      <!-- 显示数字或图标 -->
                      <span
                        v-if="showNumbers"
                        class="text-2xl font-bold text-white"
                      >
                        {{ index + 1 }}
                      </span>
                      <component
                        v-else
                        :is="getIcon(advantage.icon)"
                        class="h-8 w-8 text-white"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                <!-- 内容 -->
                <div class="text-center">
                  <h3
                    class="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300"
                  >
                    {{ advantage.title }}
                  </h3>
                  <p class="text-gray-600 leading-relaxed">
                    {{ advantage.description }}
                  </p>
                </div>
              </div>

              <!-- 底部微妙渐变 -->
              <div
                class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rounded-b-2xl"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import {
    CogIcon,
    ClockIcon,
    ShieldCheckIcon,
    UserGroupIcon,
  } from '@heroicons/vue/24/outline';

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
    advantages: {
      type: Array,
      required: true,
    },
    showNumbers: {
      type: Boolean,
      default: false,
    },
    gridCols: {
      type: Number,
      default: 4,
      validator: value => [1, 2, 3, 4, 5, 6].includes(value),
    },
    decorations: {
      type: Boolean,
      default: true,
    },
    bgClass: {
      type: String,
      default: '',
    },
    // 新增：外层传入的图标映射
    iconMap: {
      type: Object,
      default: () => ({}),
    },
  });

  // 图标映射函数
  const getIcon = iconName => {
    // 默认图标映射
    const defaultIconMap = {
      CogIcon,
      ClockIcon,
      ShieldCheckIcon,
      UserGroupIcon,
    };

    // 合并外层传入的图标映射和默认图标映射
    const combinedIconMap = { ...defaultIconMap, ...props.iconMap };

    return combinedIconMap[iconName] || CogIcon;
  };

  // 动态网格类名
  const gridClasses = computed(() => {
    const baseClasses = 'hidden sm:grid grid-cols-1 gap-8 sm:grid-cols-2';

    // 根据 gridCols 值生成对应的 lg: 类名
    const lgGridClass = `lg:grid-cols-${props.gridCols}`;

    return `${baseClasses} ${lgGridClass}`;
  });
</script>

<style scoped>
  /* 网格背景 */
  .bg-grid-slate-100 {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e");
  }

  /* 隐藏滚动条 */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* 动画定义 */
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
    opacity: 0;
  }

  /* 脉冲动画 */
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
