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
            class="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm cursor-default"
          >
            <dt
              class="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900"
            >
              <div
                class="flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm advantage-icon-container"
              >
                <component
                  :is="getIconComponent(advantage.icon)"
                  class="h-6 w-6 text-blue-600 advantage-icon"
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
