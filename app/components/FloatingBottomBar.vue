<template>
  <div
    class="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-100 to-purple-100 shadow-lg border-t border-gray-200 dark:bg-gradient-to-r dark:from-blue-900 dark:to-purple-900 dark:border-gray-700"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between py-2">
        <!-- 左侧 - Talk To Us -->
        <div class="flex items-center">
          <h3
            class="text-lg sm:text-2xl italic font-semibold text-gray-900 dark:text-white"
          >
            Talk To Us
          </h3>
        </div>

        <!-- 右侧 - 按钮和联系方式 -->
        <div class="flex items-center space-x-2 sm:space-x-4">
          <!-- Get a Quote 按钮 -->
          <button
            type="button"
            class="inline-flex items-center px-3 py-2 sm:px-4 rounded-md bg-blue-500 text-xs sm:text-sm font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors duration-200"
            @click="handleQuoteClick"
          >
            Free Quote
          </button>

          <!-- Email 链接 - 只在桌面端显示 -->
          <a
            :href="`mailto:${email}`"
            class="hidden sm:inline-flex items-center p-2 rounded-full text-blue-500 bg-gray-100 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-gray-800 transition-colors duration-200"
            title="发送邮件"
          >
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span class="ml-2 text-sm text-gray-900"
              >tidelineswim@swimsuitcustom.com</span
            >
          </a>

          <!-- WhatsApp 链接 - 只在桌面端显示 -->
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden sm:inline-flex items-center p-2 rounded-full text-green-500 bg-gray-100 dark:text-gray-400 dark:hover:text-green-400 dark:hover:bg-gray-800 transition-colors duration-200"
            title="通过WhatsApp联系"
          >
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
              />
            </svg>
            <span class="ml-2 text-sm text-gray-900">+(86)18302407790</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // Props - 允许自定义配置
  const props = defineProps({
    email: {
      type: String,
      default: 'tidelineswim@swimsuitcustom.com',
    },
    phone: {
      type: String,
      default: '+(86)18302407790',
    },
    whatsappMessage: {
      type: String,
      default: 'Hello, I would like to get a quote for your services.',
    },
  });

  // 生成 WhatsApp URL
  const whatsappUrl = computed(() => {
    const message = encodeURIComponent(props.whatsappMessage);
    return `https://wa.me/${props.phone.replace(/\D/g, '')}?text=${message}`;
  });

  // 处理 Get a Quote 按钮点击
  const handleQuoteClick = () => {
    // 跳转到批量生产页面的联系表单
    navigateTo('/bulkproduction#contact-form');
  };
</script>

<style scoped>
  /* 确保悬浮条不会被其他元素遮挡 */
  .fixed {
    backdrop-filter: blur(8px);
  }

  /* 响应式调整 */
  @media (max-width: 640px) {
    .space-x-2 > * + * {
      margin-left: 0.5rem;
    }

    /* 在小屏幕上隐藏文字，只显示图标 */
    .hidden-mobile-text {
      display: none;
    }
  }
</style>
