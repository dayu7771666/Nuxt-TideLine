<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <Hero
      :title="faqData?.hero?.title"
      :description="faqData?.hero?.description"
      pt="pt-36"
      pb="pb-36"
      bg-gradient="bg-gradient-to-br from-slate-900 to-blue-600"
      text-color="white"
      :decorations="true"
    >
    </Hero>

    <!-- FAQ Section -->
    <FAQ :faq="faqData?.faq" />

    <!-- CTA Section -->
    <CTA
      :title="faqData?.cta?.title"
      :description="faqData?.cta?.description"
      :button="faqData?.cta?.button"
      :link="faqData?.cta?.link"
      variant="blue"
    />
  </div>
</template>

<script setup>
  // Get internationalization
  const { locale } = useI18n();

  // Fetch FAQ data from yml file
  const { data: faqData } = await useAsyncData(
    `faq-${locale.value}`,
    async () => {
      // Build collection name based on current locale
      const collection = 'faq_' + locale.value;
      const content = await queryCollection(collection).first();
      // Optional: fallback to default locale if content is missing
      if (!content && locale.value !== 'en') {
        return await queryCollection('faq_en').first();
      }
      return content?.body;
    },
    {
      watch: [locale],
    }
  );

  // SEO Meta
  useSeoMeta({
    title: faqData.value?.seo?.title || 'FAQ | Tideline',
    description:
      faqData.value?.seo?.description ||
      'Frequently Asked Questions about our swimwear manufacturing services',
    ogTitle:
      faqData.value?.seo?.ogTitle ||
      faqData.value?.seo?.title ||
      'FAQ | Tideline',
    ogDescription:
      faqData.value?.seo?.ogDescription ||
      faqData.value?.seo?.description ||
      'Frequently Asked Questions about our swimwear manufacturing services',
    ogImage: faqData.value?.seo?.ogImage || '/faq-hero.webp',
    twitterCard: faqData.value?.seo?.twitterCard || 'summary_large_image',
  });
</script>
