<template>
  <div class="pb-20">
    <Hero
      :title="home.hero.title"
      :description="home.hero.description"
      :image="home.hero.src"
      :alt="home.hero.alt"
      position="top-third"
      width="1200"
      sizes="100vw sm:90vw md:1200px lg:1500px"
    >
      <div>
        <button
          type="button"
          class="inline-flex items-center mt-10 gap-x-2 rounded-md bg-blue-600 px-6 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:shadow-none dark:hover:bg-blue-400 dark:focus-visible:outline-blue-500"
        >
          <CheckCircleIcon class="w-6 h-6 text-white" />
          获取免费样品
        </button>
        <div class="grid grid-cols-3 items-center gap-x-10 mt-12">
          <div
            class="bg-gray-100 px-10 py-3 rounded-full flex items-center gap-x-1 bg-opacity-80"
          >
            <CheckCircleIcon class="w-6 h-6 text-green-600" />
            <h3>最低起订量50件</h3>
          </div>
          <div
            class="bg-gray-100 px-10 py-3 rounded-full flex items-center gap-x-1 bg-opacity-80"
          >
            <CheckCircleIcon class="w-6 h-6 text-green-500" />
            <h3>15天快速生产</h3>
          </div>
          <div
            class="bg-gray-100 px-10 py-3 rounded-full flex items-center gap-x-1 bg-opacity-80"
          >
            <CheckCircleIcon class="w-6 h-6 text-green-500" />
            <h3>免费设计支持</h3>
          </div>
        </div>
      </div>
    </Hero>
    <Cards :cards="home.cards" />
    <BrandServices :brandServices="home.brandServices" />
    <HowWorks :howWorks="home.howWorks" />
    <WhyUs :whyUs="home.whyUs" />
    <VideoShowcase
      video-src="/videos/manufacturing-process.mp4"
      poster="/images/video-poster.jpg"
      @cta-click="handleVideoCtaClick"
    />
    <IndexCta :indexCta="home.indexCta" />
    <!-- <ContentRenderer
      v-if="home"
      :value="home"
    /> -->
  </div>
</template>

<script setup>
  import { CheckCircleIcon } from '@heroicons/vue/20/solid';

  const { locale } = useI18n();

  const { data: home } = await useAsyncData(
    async () => {
      // Build collection name based on current locale
      const collection = 'content_' + locale.value;
      const content = await queryCollection(collection).path('/home').first();
      // Optional: fallback to default locale if content is missing
      if (!content && locale.value !== 'en') {
        return await queryCollection('content_en').path('/').first();
      }
      return content.body;
    },
    {
      watch: [locale],
      // server: true,
    }
  );

  // 处理视频CTA点击
  const handleVideoCtaClick = () => {
    // 可以跳转到关于我们页面或制造流程页面
    navigateTo('/about');
  };
</script>
