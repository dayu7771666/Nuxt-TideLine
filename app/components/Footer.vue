<template>
  <footer
    v-if="footerData"
    class="bg-gray-900"
    aria-labelledby="footer-heading"
  >
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <!-- 品牌标语 -->
      <h2 class="text-xl font-bold leading-10 tracking-tight text-white">
        {{ footerData.banner }}
      </h2>

      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <!-- 社交媒体 -->
          <div class="flex space-x-6">
            <a
              href="https://www.facebook.com/getzwa"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white"
              aria-label="Follow us on Facebook"
            >
              <span class="sr-only">Facebook</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/customswimwearhub/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white"
              aria-label="Follow us on Instagram"
            >
              <span class="sr-only">Instagram</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.316-1.296C4.343 14.928 3.9 13.764 3.9 12.456c0-1.297.49-2.448 1.296-3.316.806-.868 1.97-1.311 3.279-1.311 1.297 0 2.448.49 3.316 1.296.868.806 1.311 1.97 1.311 3.279 0 1.297-.49 2.448-1.296 3.316-.806.868-1.97 1.311-3.279 1.311z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/tideline-swimwear"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white"
              aria-label="Follow us on LinkedIn"
            >
              <span class="sr-only">LinkedIn</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@tidelineswimwear"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white"
              aria-label="Follow us on YouTube"
            >
              <span class="sr-only">YouTube</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
            </a>
          </div>

          <!-- 联系信息 -->
          <div class="space-y-4">
            <div>
              <dt class="text-sm font-semibold leading-6 text-white">
                WhatsApp
              </dt>
              <dd class="text-sm leading-6 text-gray-300">
                {{ footerData.contact.whatsapp }}
              </dd>
            </div>
            <div>
              <dt class="text-sm font-semibold leading-6 text-white">
                {{ footerData.contact.emailLabel }}
              </dt>
              <dd class="text-sm leading-6 text-gray-300">
                {{ footerData.contact.email }}
              </dd>
            </div>
            <div>
              <dt class="text-sm font-semibold leading-6 text-white">
                {{ footerData.contact.addressLabel }}
              </dt>
              <dd class="text-sm leading-6 text-gray-300">
                {{ footerData.contact.address }}
              </dd>
            </div>
          </div>
        </div>

        <!-- 导航链接 -->
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <!-- Solutions -->
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">
                {{ footerData.sections.solutions.title }}
              </h3>
              <ul
                role="list"
                class="mt-6 space-y-4"
              >
                <li
                  v-for="item in footerData.sections.solutions.items"
                  :key="item.title"
                >
                  <NuxtLink
                    :to="item.href"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Company -->
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">
                {{ footerData.sections.company.title }}
              </h3>
              <ul
                role="list"
                class="mt-6 space-y-4"
              >
                <li
                  v-for="item in footerData.sections.company.items"
                  :key="item.title"
                >
                  <NuxtLink
                    :to="item.href"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <!-- Contact -->
          <div class="md:grid md:grid-cols-1 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">
                {{ footerData.sections.contact.title }}
              </h3>
              <ul
                role="list"
                class="mt-6 space-y-4"
              >
                <li
                  v-for="item in footerData.sections.contact.items"
                  :key="item.title"
                >
                  <NuxtLink
                    :to="item.href"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 品牌标语 -->
      <div class="text-white font-bold text-7xl italic mt-16 max-w-7xl mx-auto">
        {{ footerData.slogan }}
      </div>

      <!-- 版权信息 -->
      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5 text-gray-400">
          &copy; 2025 TideLine. {{ footerData.copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
  const { locale } = useI18n();

  // --- Props 定义 ---
  const props = defineProps({
    navigation: {
      type: Object,
      default: () => null,
    },
  });

  // --- 计算属性：安全获取footer数据 ---
  const footerData = computed(() => {
    return props.navigation?.body?.footer || null;
  });
</script>
