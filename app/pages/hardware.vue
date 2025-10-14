<template>
  <div class="text-slate-800 leading-relaxed">
    <!-- Hero Section -->
    <div class="relative">
      <Hero
        :title="hardware?.title"
        image="/hardware.webp"
        :description="hardware?.description"
        :alt="hardware?.hero?.alt || 'Swimwear Hardware and Trims'"
        pt="pt-36"
        pb="pb-40"
        bg-gradient="bg-gradient-to-br from-purple-50 to-pink-100"
        text-color="white"
        :decorations="true"
      >
      </Hero>
    </div>

    <!-- Hardware Gallery Section -->
    <div
      id="catalog"
      class="bg-white py-24 sm:py-32"
    >
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {{ hardware?.gallery?.title }}
          </h2>
          <p class="mt-4 text-lg text-gray-600">
            {{ hardware?.gallery?.description }}
          </p>
        </div>

        <!-- Hardware Categories Grid -->
        <div
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <div
            v-for="category in hardware?.gallery?.categories"
            :key="category.name"
            class="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
          >
            <!-- Image Container -->
            <div class="relative h-64 w-full overflow-hidden bg-gray-100">
              <img
                :src="category.image"
                :alt="category.name"
                class="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              />
              <div class="absolute bottom-4 left-4 right-4">
                <h3 class="text-2xl font-bold text-white">
                  {{ category.name }}
                </h3>
              </div>
            </div>

            <!-- Content -->
            <div class="flex flex-1 flex-col p-6">
              <p class="text-sm text-gray-600 mb-4">
                {{ category.description }}
              </p>

              <!-- Items List -->
              <ul class="space-y-2 flex-1">
                <li
                  v-for="item in category.items"
                  :key="item"
                  class="flex items-start gap-x-2 text-sm text-gray-700"
                >
                  <CheckIcon
                    class="h-5 w-5 flex-shrink-0 text-purple-600 mt-0.5"
                  />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="bg-gradient-to-br from-purple-50 to-pink-50 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {{ hardware?.features?.title }}
          </h2>
          <p class="mt-4 text-lg text-gray-600">
            {{ hardware?.features?.description }}
          </p>
        </div>

        <div
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div
            v-for="feature in hardware?.features?.items"
            :key="feature.title"
            class="flex gap-x-4 rounded-2xl bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <component
              :is="getIconComponent(feature.icon)"
              class="h-8 w-8 flex-shrink-0 text-purple-600"
              aria-hidden="true"
            />
            <div>
              <h3 class="text-lg font-semibold text-gray-900">
                {{ feature.title }}
              </h3>
              <p class="mt-2 text-gray-600">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Process Section -->
    <HomeServiceAdvantages
      :title="hardware?.process?.title"
      :description="hardware?.process?.description || ''"
      :advantages="transformProcessSteps(hardware?.process?.steps || [])"
      :show-numbers="true"
      :grid-cols="3"
      :decorations="true"
    />

    <!-- Technical Specifications Section -->
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {{ hardware?.specifications?.title }}
          </h2>
          <p class="mt-4 text-lg text-gray-600">
            {{ hardware?.specifications?.description }}
          </p>
        </div>

        <div
          class="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3"
        >
          <div
            v-for="spec in hardware?.specifications?.items"
            :key="spec.category"
            class="rounded-2xl bg-gradient-to-br from-purple-50 to-white p-8 shadow-md border border-purple-100"
          >
            <h3
              class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-x-2"
            >
              <CogIcon class="h-6 w-6 text-purple-600" />
              {{ spec.category }}
            </h3>
            <ul class="space-y-3">
              <li
                v-for="(item, index) in spec.specs"
                :key="index"
                class="flex items-start gap-x-3 text-sm text-gray-700"
              >
                <div
                  class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-600 mt-2"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <FAQ :faq="hardware?.faq" />

    <!-- CTA Section -->
    <CTA
      :title="hardware?.cta?.title"
      :description="hardware?.cta?.description"
      :button="hardware?.cta?.button"
      :link="hardware?.cta?.link"
      variant="blue"
    />
  </div>
</template>

<script setup>
  import {
    SparklesIcon,
    CheckIcon,
    ShieldCheckIcon,
    HeartIcon,
    CheckBadgeIcon,
    CogIcon,
  } from '@heroicons/vue/20/solid';
  import { SwatchIcon } from '@heroicons/vue/24/outline';

  // 获取国际化
  const { locale } = useI18n();

  // 获取hardware页面数据
  const { data: hardware } = await useAsyncData(
    'hardware',
    async () => {
      // 根据当前语言构建集合名称
      const collection = 'hardware_' + locale.value;
      const content = await queryCollection(collection).first();
      // 可选：如果内容缺失，回退到默认语言
      if (!content && locale.value !== 'en') {
        return await queryCollection('hardware_en').first();
      }
      return content?.body;
    },
    {
      watch: [locale],
      server: true,
    }
  );

  // 转换 process steps 数据结构以适配 ServiceAdvantages 组件
  const transformProcessSteps = steps => {
    if (!steps || !Array.isArray(steps)) return [];

    return steps.map((step, index) => ({
      id: step.number || index + 1,
      title: step.title,
      description: step.description,
      icon: 'CogIcon',
    }));
  };

  // 图标组件映射
  const iconComponents = {
    ShieldCheckIcon,
    HeartIcon,
    SwatchIcon,
    CheckBadgeIcon,
    CogIcon,
  };

  // 获取图标组件的函数
  const getIconComponent = iconName => {
    return iconComponents[iconName] || CheckBadgeIcon;
  };

  // SEO Meta
  useSeoMeta({
    title:
      hardware.value?.seo?.title || 'Swimwear Hardware & Trims | Tideline Swim',
    description:
      hardware.value?.seo?.description ||
      'Premium quality swimwear hardware and trims for your designs',
    keywords:
      hardware.value?.seo?.keywords ||
      'swimwear hardware, swimsuit accessories, chlorine resistant elastic',
    ogTitle:
      hardware.value?.seo?.ogTitle ||
      hardware.value?.seo?.title ||
      'Swimwear Hardware & Trims | Tideline Swim',
    ogDescription:
      hardware.value?.seo?.ogDescription ||
      hardware.value?.seo?.description ||
      'Premium quality swimwear hardware and trims for your designs',
    ogType: hardware.value?.seo?.ogType || 'website',
    ogSiteName: 'TIDELINE SWIMWEAR',
    ogImage: hardware.value?.seo?.ogImage || '/hardware/hardware-hero.webp',
    twitterCard: hardware.value?.seo?.twitterCard || 'summary_large_image',
    twitterTitle:
      hardware.value?.seo?.twitterTitle ||
      hardware.value?.seo?.title ||
      'Swimwear Hardware & Trims | Tideline Swim',
    twitterDescription:
      hardware.value?.seo?.twitterDescription ||
      hardware.value?.seo?.description ||
      'Premium quality swimwear hardware and trims for your designs',
    twitterImage:
      hardware.value?.seo?.ogImage || '/hardware/hardware-hero.webp',
  });

  // 添加结构化数据
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Swimwear Hardware & Trims',
          description:
            hardware.value?.seo?.description ||
            'Premium quality swimwear hardware and trims',
          image: hardware.value?.seo?.ogImage || '/hardware/hardware-hero.webp',
          brand: {
            '@type': 'Brand',
            name: 'TIDELINE SWIMWEAR',
          },
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'TIDELINE SWIMWEAR',
            },
          },
        }),
      },
    ],
  });
</script>
