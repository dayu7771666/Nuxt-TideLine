<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-semibold tracking-tight text-gray-900">
          {{ whyUs.title }}
        </h2>
        <p class="mt-6 text-lg text-gray-600">{{ whyUs.description }}</p>
      </div>

      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <div class="md:hidden w-full overflow-x-auto scrollbar-hide pb-6">
          <div class="inline-flex min-w-max space-x-6 px-4">
            <div
              data-aos="zoom-in"
              v-for="(advantage, index) in whyUs.advantages"
              :key="index"
              class="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm w-80"
            >
              <dt
                class="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900"
              >
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm"
                >
                  <component
                    :is="getIconComponent(advantage.icon)"
                    class="h-6 w-6 text-gray-700 advantage-icon"
                  />
                </div>
                <span class="line-clamp-2">{{ advantage.name }}</span>
              </dt>
              <dd
                class="mt-4 flex flex-auto flex-col text-sm leading-7 text-gray-600"
              >
                <p class="flex-auto">{{ advantage.description }}</p>
              </dd>
            </div>
          </div>
        </div>

        <dl
          class="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          <div
            data-aos="zoom-in"
            v-for="(advantage, index) in whyUs.advantages"
            :key="index"
            class="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm advantage-card"
          >
            <dt
              class="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900"
            >
              <div
                class="flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm advantage-icon-container"
              >
                <component
                  :is="getIconComponent(advantage.icon)"
                  class="h-6 w-6 text-gray-700 advantage-icon"
                />
              </div>
              <span class="line-clamp-2">{{ advantage.name }}</span>
            </dt>
            <dd
              class="mt-4 flex flex-auto flex-col text-sm leading-7 text-gray-600"
            >
              <p class="flex-auto">{{ advantage.description }}</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    SwatchIcon,
    BuildingOfficeIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    ClockIcon,
    ChevronRightIcon,
  } from '@heroicons/vue/24/outline';

  // 定义props接收数据
  const props = defineProps({
    whyUs: {
      type: Object,
      default: () => ({
        title: '',
        description: '',
        advantages: [],
        cta: '',
      }),
    },
  });

  // 图标映射
  const iconMap = {
    SwatchIcon,
    BuildingOfficeIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    ClockIcon,
  };

  // 获取图标组件
  const getIconComponent = iconName => {
    return iconMap[iconName] || SwatchIcon;
  };
</script>

<style scoped>
  .advantage-card {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .advantage-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(59, 130, 246, 0.1),
      transparent
    );
    transition: left 0.6s ease;
  }

  .advantage-card:hover {
    transform: translateY(-8px);
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    background-color: #fefefe;
  }

  .advantage-card:hover::before {
    left: 100%;
  }

  .advantage-icon-container {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .advantage-icon {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    color: #3b82f6;
  }

  .advantage-card:hover .advantage-icon-container {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
    transform: rotate(5deg) scale(1.05);
  }

  .advantage-card:hover .advantage-icon {
    transform: scale(1.15) rotate(-5deg);
    color: #ffffff;
  }

  /* 标题文字悬停效果 */
  .advantage-card dt span {
    transition: color 0.3s ease;
  }

  .advantage-card:hover dt span {
    color: #1d4ed8;
  }

  /* 描述文字悬停效果 */
  .advantage-card dd p {
    transition: color 0.3s ease;
  }

  .advantage-card:hover dd p {
    color: #374151;
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* 移动端卡片悬停效果（触摸设备） */
  @media (hover: none) {
    .advantage-card:active {
      transform: translateY(-4px);
    }
  }
</style>
