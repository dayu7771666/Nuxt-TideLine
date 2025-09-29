<template>
  <div class="min-h-screen bg-white">
    hello
    {{ home }}
  </div>
</template>

<script setup>
  import { CheckCircleIcon } from '@heroicons/vue/20/solid';
  definePageMeta({
    layout: false,
  });

  const { locale } = useI18n();
  console.log(locale.value, 'locale');

  const { data: home } = await useAsyncData(
    async () => {
      // Build collection name based on current locale
      const collection = 'content_' + locale.value;
      const content = await queryCollection(collection).path('/home').first();
      // Optional: fallback to default locale if content is missing
      if (!content && locale.value !== 'en') {
        return await queryCollection('content_en').path('/home').first();
      }
      return content.body;
    },
    {
      watch: [locale],
      // server: true,
    }
  );

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
