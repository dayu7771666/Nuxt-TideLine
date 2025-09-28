<template>
  <div class="text-slate-800 leading-relaxed">
    <!-- Hero Section -->
    <div class="relative">
      <Hero
        :title="sampling?.hero?.title"
        :description="sampling?.hero?.description"
        :image="sampling?.hero?.image"
        :alt="sampling?.hero?.alt || 'Sampling Services'"
        pt="pt-36"
        pb="pb-40"
        bg-gradient="bg-gradient-to-br from-blue-50 to-cyan-100"
        text-color="dark"
        :decorations="true"
      >
        <NuxtLinkLocal
          v-if="sampling?.hero?.ctaButton"
          :to="sampling?.hero?.ctaLink"
          class="inline-flex items-center mt-10 gap-x-2 rounded-md bg-blue-600 px-6 py-3 font-medium text-white shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-blue-700"
        >
          <CheckCircleIcon class="w-6 h-6 text-white" />
          {{ sampling?.hero?.ctaButton }}
        </NuxtLinkLocal>
      </Hero>
    </div>

    <!-- Problem/Solution Section -->
    <SamplingProblemSolution :problem-solution="sampling?.problemSolution" />

    <!-- Process Section -->
    <HomeServiceAdvantages
      :title="sampling?.process?.title"
      :description="sampling?.process?.description || ''"
      :advantages="transformProcessSteps(sampling?.process?.steps || [])"
      :show-numbers="true"
      :grid-cols="3"
      :decorations="false"
      bg-class="bg-gray-50"
    />

    <!-- FAQ Section -->
    <FAQ :faq="sampling?.faq" />

    <!-- CTA Section -->
    <CTA
      :title="sampling?.cta?.title"
      :description="sampling?.cta?.description"
      :button="sampling?.cta?.button"
      :link="sampling?.cta?.link"
      variant="blue"
    />
  </div>
</template>

<script setup>
  import { CheckCircleIcon } from '@heroicons/vue/20/solid';
  // 获取国际化
  const { locale } = useI18n();

  // 获取sampling页面数据
  const { data: sampling } = await useAsyncData(
    'sampling',
    async () => {
      // 根据当前语言构建集合名称
      const collection = 'content_' + locale.value;
      const content = await queryCollection(collection)
        .path('/sampling')
        .first();
      // 可选：如果内容缺失，回退到默认语言
      if (!content && locale.value !== 'en') {
        return await queryCollection('content_en').path('/sampling').first();
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
      icon: 'CogIcon', // 当使用数字模式时，图标不会显示，但保留以避免错误
    }));
  };
</script>
