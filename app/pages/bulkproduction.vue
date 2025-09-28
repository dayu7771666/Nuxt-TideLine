<template>
  <div class="text-slate-800 leading-relaxed">
    <!-- Hero Section -->
    <Hero
      :title="content.hero?.title"
      :description="content.hero?.description"
      bg-gradient="bg-gradient-to-br from-slate-800 to-blue-700"
      text-color="white"
      pt="py-32"
      pb="py-32"
      :decorations="false"
    />

    <!-- Intro Section -->
    <section class="py-20 text-center bg-white">
      <div class="max-w-6xl mx-auto px-5">
        <p
          class="text-xl lg:text-2xl max-w-4xl mx-auto text-slate-800 font-light leading-relaxed"
        >
          {{ content.intro?.text }}
        </p>
      </div>
    </section>

    <!-- Process Section -->
    <HomeServiceAdvantages
      :title="content.process?.title"
      :description="content.process?.description || ''"
      :advantages="content.process?.steps || []"
      :show-numbers="false"
      :grid-cols="4"
      bg-class="bg-slate-50"
      :icon-map="processIconMap"
    />

    <!-- Sustainability Section -->
    <section
      class="py-24 text-white text-center relative overflow-hidden"
      style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)"
    >
      <!-- Wave Background -->
      <div
        class="absolute inset-0"
        style="opacity: 0.1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          class="absolute bottom-0 w-full h-full"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="white"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="white"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="white"
          />
        </svg>
      </div>

      <div class="max-w-6xl mx-auto px-5 relative z-10">
        <h2 class="text-3xl lg:text-4xl font-light mb-5">
          {{ content.sustainability?.title }}
        </h2>
        <p
          class="text-lg lg:text-xl max-w-4xl mx-auto mb-16"
          style="opacity: 0.9"
        >
          {{ content.sustainability?.description }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in content.sustainability?.features || []"
            :key="index"
            class="rounded-xl p-10 hover:-translate-y-2 transition-all duration-300"
            style="
              background: rgba(255, 255, 255, 0.15);
              backdrop-filter: blur(5px);
              border: 1px solid rgba(255, 255, 255, 0.2);
            "
          >
            <i :class="feature.icon + ' text-5xl mb-5 block'"></i>
            <h3 class="text-xl font-medium mb-4">{{ feature.title }}</h3>
            <p
              class="leading-relaxed"
              style="opacity: 0.9"
            >
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <ConsultationForm
      :title="content.cta?.title"
      :description="content.cta?.description"
      :form-labels="content.cta?.form || {}"
      :consultation-type="2"
    />
  </div>
</template>

<script setup>
  import {
    PencilIcon,
    RectangleStackIcon,
    ScissorsIcon,
    BuildingOffice2Icon,
  } from '@heroicons/vue/24/outline';

  const { locale } = useI18n();

  // 为生产流程创建图标映射
  const processIconMap = {
    'fas fa-pencil-alt': PencilIcon,
    'fas fa-ruler-combined': RectangleStackIcon,
    'fas fa-cut': ScissorsIcon,
    'fas fa-industry': BuildingOffice2Icon,
  };

  // 获取bulk页面数据
  const { data: bulk } = await useAsyncData(
    'bulk',
    async () => {
      // 根据当前语言构建集合名称
      const collection = 'content_' + locale.value;
      const content = await queryCollection(collection).path('/bulk').first();
      // 可选：如果内容缺失，回退到默认语言
      if (!content && locale.value !== 'en') {
        return await queryCollection('content_en').path('/bulk').first();
      }
      return content?.body;
    },
    {
      watch: [locale],
      server: true,
    }
  );

  const content = bulk.value || {};

  // Meta tags
  useHead({
    title: content.meta?.title || 'Production Process - Tideline',
    meta: [
      {
        name: 'description',
        content:
          content.meta?.description ||
          'Discover how Tideline swimwear transforms from concept to finished product through meticulous craftsmanship',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
      },
    ],
  });
</script>
