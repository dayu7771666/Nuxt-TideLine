<template>
  <div class="min-h-screen bg-white">
    <!-- position="top-third" -->
    <Hero
      :title="home.title"
      :description="home.description"
      image="/sampling.webp"
      :alt="home.hero.alt"
      width="1200"
      sizes="100vw sm:90vw md:1200px lg:1500px"
    >
      <div>
        <button
          type="button"
          @click="showContactModal = true"
          class="inline-flex items-center mt-10 gap-x-2 rounded-md bg-blue-600 px-6 py-3 font-medium text-white shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-blue-700"
        >
          <CheckCircleIcon class="w-6 h-6 text-white" />
          {{ home.hero.ctaButton }}
        </button>
        <div
          class="grid grid-cols-1 sm:grid-cols-3 items-center gap-x-10 mt-12 gap-y-3"
        >
          <div
            v-for="(feature, index) in home.hero.features"
            :key="index"
            class="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-lg flex items-center sm:justify-center gap-x-2 border border-gray-200 shadow-sm"
          >
            <CheckCircleIcon class="w-5 h-5 text-green-600" />
            <NuxtLink
              :to="feature.href"
              class="text-sm font-medium text-gray-900"
            >
              {{ feature.text }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </Hero>
    <!-- 视频展示 -->

    <HomeVideoShowcase
      layout="vertical"
      :title="home.videoShowcase.title"
      :description="home.videoShowcase.description"
      :ctaText="home.videoShowcase.ctaText"
      :video-src="home.videoShowcase.videoSrc"
      :video-duration="home.videoShowcase.videoDuration"
      :youtube-watch-text="home.videoShowcase.youtubeWatchText"
      @cta-click="handleVideoCtaClick"
    />

    <!-- 产品展示 -->

    <HomeProductShowcase
      :title="home.products.title"
      :description="home.products.description"
      :products="home.products.items"
      :learn-more-text="home.products.learnMoreText"
      :quote-text="home.products.quoteText"
      :quote-link="home.products.quoteLink"
    />

    <!-- 服务优势 -->
    <HomeServiceAdvantages
      :title="home.serviceAdvantages.title"
      :description="home.serviceAdvantages.description"
      :advantages="home.serviceAdvantages.advantages"
      :decorations="true"
    />

    <!-- 工作流程 -->
    <HomeHowWorks :howWorks="home.howWorks" />

    <!-- 选择我们的理由 -->
    <HomeWhyUs :whyUs="home.whyUs" />

    <!-- 联系表单弹窗 -->
    <Transition
      name="modal"
      appear
    >
      <div
        v-if="showContactModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        @click="closeModal"
      >
        <div
          class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          @click.stop
        >
          <div
            class="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 rounded-t-2xl"
          >
            <div class="flex items-center justify-between">
              <h2 class="text-2xl font-bold text-gray-900">
                {{ home.contactForm?.modalTitle || 'Contact Us' }}
              </h2>
              <button
                @click="showContactModal = false"
                class="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="px-8 py-6">
            <ContactForm
              :form-labels="contactFormLabels"
              @submit-success="handleContactSuccess"
              @submit-error="handleContactError"
            />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
  import { CheckCircleIcon } from '@heroicons/vue/20/solid';

  const { locale } = useI18n();
  console.log(locale.value, 'locale');

  const { data: home } = await useAsyncData(
    async () => {
      // Build collection name based on current locale
      const collection = 'home_' + locale.value;
      const content = await queryCollection(collection).first();
      // Optional: fallback to default locale if content is missing
      if (!content && locale.value !== 'en') {
        return await queryCollection('home_en').first();
      }
      return content.body;
    },
    {
      watch: [locale],
      // server: true,
    }
  );

  // SEO Meta Tags - 从 home 数据中读取
  useSeoMeta({
    title: home.value?.seo?.title || 'Tideline Swim',
    ogTitle: home.value?.seo?.title || 'Tideline Swim',
    description: home.value?.seo?.description || '',
    ogDescription: home.value?.seo?.description || '',
    keywords: home.value?.seo?.keywords || '',
    ogImage: home.value?.seo?.ogImage || '/og-image.jpg',
    twitterCard: home.value?.seo?.twitterCard || 'summary_large_image',
  });

  // 弹窗状态管理
  const showContactModal = ref(false);

  // 联系表单标签 - 从home数据中读取
  const contactFormLabels = computed(() => ({
    nameLabel: home.value?.contactForm?.nameLabel || 'Full Name',
    namePlaceholder:
      home.value?.contactForm?.namePlaceholder || 'Enter your full name',
    emailLabel: home.value?.contactForm?.emailLabel || 'Email Address',
    emailPlaceholder:
      home.value?.contactForm?.emailPlaceholder || 'Enter your email address',
    messageLabel: home.value?.contactForm?.messageLabel || 'Message',
    messagePlaceholder:
      home.value?.contactForm?.messagePlaceholder ||
      'Tell us about your project requirements...',
    consentText:
      home.value?.contactForm?.consentText ||
      'I agree to receive updates and communications from Tideline.',
    submitButton: home.value?.contactForm?.submitButton || 'Submit Inquiry',
    successMessage:
      home.value?.contactForm?.successMessage ||
      'Thank you! We will contact you soon.',
    errorMessage:
      home.value?.contactForm?.errorMessage ||
      'Submission failed. Please try again or contact our support team.',
  }));

  // 关闭弹窗
  const closeModal = () => {
    showContactModal.value = false;
  };

  // 处理联系表单成功提交
  const handleContactSuccess = response => {
    console.log('Contact form submitted successfully:', response);
    // 可以添加额外的成功处理逻辑
    setTimeout(() => {
      showContactModal.value = false;
    }, 2000);
  };

  // 处理联系表单提交错误
  const handleContactError = error => {
    console.error('Contact form submission error:', error);
    // 可以添加额外的错误处理逻辑
  };

  // 处理视频CTA点击
  const handleVideoCtaClick = () => {
    // 可以跳转到关于我们页面或制造流程页面
    navigateTo('/about');
  };

  // 键盘事件处理 - ESC键关闭弹窗
  onMounted(() => {
    const handleKeydown = event => {
      if (event.key === 'Escape' && showContactModal.value) {
        showContactModal.value = false;
      }
    };

    document.addEventListener('keydown', handleKeydown);

    onUnmounted(() => {
      document.removeEventListener('keydown', handleKeydown);
    });
  });
</script>

<style scoped>
  /* 弹窗动画过渡效果 */
  .modal-enter-active,
  .modal-leave-active {
    transition: all 0.3s ease;
  }

  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }

  .modal-enter-to,
  .modal-leave-from {
    opacity: 1;
  }

  /* 弹窗内容动画 */
  .modal-enter-active .bg-white,
  .modal-leave-active .bg-white {
    transition: all 0.3s ease;
  }

  .modal-enter-from .bg-white,
  .modal-leave-to .bg-white {
    transform: scale(0.9) translateY(-20px);
    opacity: 0;
  }

  .modal-enter-to .bg-white,
  .modal-leave-from .bg-white {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
</style>
