<template>
  <div>
    <!-- Banner -->
    <CatalogHeroBanner
      :title="pageData.title"
      :subtitle="pageData.description"
      :cta-text="pageData.hero.cta_text"
      :cta-href="pageData.hero.cta_href"
      :image-src="pageData.hero.image_src"
      :image-alt="pageData.hero.image_alt"
      :image-width="pageData.hero.image_width"
      :seo-title="pageData.seo?.title"
      :seo-description="pageData.seo?.description"
    />
    <!-- Mission  -->
    <div class="py-24 bg-slate-50 bg-opacity-60">
      <div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2
            class="text-pretty text-4xl font-semibold tracking-tight text-gray-900"
          >
            <!-- {{ pageData.mission.title }} -->
          </h2>
          <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p class="text-lg text-gray-600">
                {{ pageData.mission.paragraph1 }}
              </p>
              <p class="text-lg text-gray-600">
                <NuxtLink
                  to="https://wa.me/8618302407790"
                  class="text-blue-500 underline"
                  target="_blank"
                  >{{ pageData.mission.whatsapp_link_text }}</NuxtLink
                >
              </p>
            </div>
            <div class="lg:flex lg:flex-auto lg:justify-center">
              <dl class="w-64 space-y-8 xl:w-80">
                <div
                  v-for="stat in pageData.stats"
                  :key="stat.label"
                  class="flex flex-col-reverse gap-y-4"
                >
                  <dt class="text-base/7 text-blue-600">
                    {{ stat.label }}
                  </dt>
                  <dd
                    class="text-4xl font-semibold tracking-tight text-gray-900"
                  >
                    {{ stat.value }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 定制能力 -->
    <CatalogCustomizationCapabilities
      :title="pageData.customization.title"
      :description="pageData.customization.description"
      :hero-image-src="pageData.customization.hero_image_src"
      :hero-image-alt="pageData.customization.hero_image_alt"
      :hero-image-width="pageData.customization.hero_image_width"
      :features="pageData.customization.features"
    />

    <CatalogGettingStartedSection
      :image-src="pageData.getting_started.image_src"
      :image-width="pageData.getting_started.image_width"
      :image-alt="pageData.getting_started.image_alt"
      :title="pageData.getting_started.title"
      :description="pageData.getting_started.description"
      :beginner-href="pageData.getting_started.beginner_href"
      :beginner-text="pageData.getting_started.beginner_text"
      :pro-href="pageData.getting_started.pro_href"
      :pro-text="pageData.getting_started.pro_text"
    />

    <CatalogFAQSection
      :title="pageData.faq.title"
      :faqs="pageData.faq.questions"
    />

    <CatalogIndexCta />
  </div>
</template>

<script setup>
  const { locale } = useI18n();
  const route = useRoute();
  const normalizedPath = route.path.replace(/^\/[^\/]+/, '');
  // 获取当前slug
  const currentSlug = route.params.slug;

  // 定义允许的slug列表（可选方法1：硬编码列表）
  const allowedSlugs = [
    'women-swimwear',
    'men-swimwear',
    'kids-swimwear',
    'maternity-swimwear',
    'plus-size-swimwear',
    'sports-swimwear',
    'sustainable-swimwear',
    'custom-swimwear',
  ];

  // 检查当前slug是否在允许列表中
  if (!allowedSlugs.includes(currentSlug)) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Catalog page not found',
    });
  }

  const { data: pageData } = await useAsyncData(
    `catalog-${currentSlug}`,
    async () => {
      // Build collection name based on current locale
      const collection = 'catalog_' + locale.value;
      const content = await queryCollection(collection)
        .path(normalizedPath)
        .first();
      // Optional: fallback to default locale if content is missing
      if (!content && locale.value !== 'en') {
        return await queryCollection('catalog_en').path(normalizedPath).first();
      }

      // 如果找不到内容，抛出404错误
      // if (!content) {
      //   throw createError({
      //     statusCode: 404,
      //     statusMessage: 'Catalog content not found',
      //   });
      // }

      return content.body;
    },
    {
      watch: [locale],
      server: true,
    }
  );
  console.log(pageData.value, 'pageData');

  // SEO Meta tags
  useSeoMeta({
    title: pageData.value?.seo?.title || pageData.value?.title,
    description:
      pageData.value?.seo?.description || pageData.value?.description,
    keywords: pageData.value?.seo?.keywords,
    ogTitle:
      pageData.value?.seo?.ogTitle ||
      pageData.value?.seo?.title ||
      pageData.value?.title,
    ogDescription:
      pageData.value?.seo?.ogDescription ||
      pageData.value?.seo?.description ||
      pageData.value?.description,
    ogType: pageData.value?.seo?.ogType || 'website',
    ogSiteName: 'TIDELINE SWIMWEAR',
    ogImage:
      pageData.value?.seo?.ogImage ||
      pageData.value?.hero?.image_src ||
      '/manufacturer.jpg',
    twitterCard: pageData.value?.seo?.twitterCard || 'summary_large_image',
    twitterTitle:
      pageData.value?.seo?.twitterTitle ||
      pageData.value?.seo?.title ||
      pageData.value?.title,
    twitterDescription:
      pageData.value?.seo?.twitterDescription ||
      pageData.value?.seo?.description ||
      pageData.value?.description,
  });
</script>
