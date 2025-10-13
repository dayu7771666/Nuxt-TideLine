<template>
  <footer
    v-if="footerData"
    class="bg-blue-600"
    aria-labelledby="footer-heading"
  >
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <!-- 品牌标语 -->
      <h3 class="text-xl font-bold text-white mb-12">
        {{ footerData.banner }}
      </h3>

      <div class="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <!-- 左侧：社交媒体 & 联系信息 -->
        <div class="space-y-8">
          <!-- 社交媒体图标 -->
          <div class="flex gap-6">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-gray-200 transition-transform hover:scale-110"
              :aria-label="`Follow us on ${social.name}`"
            >
              <span class="sr-only">{{ social.name }}</span>
              <component
                :is="social.icon"
                class="h-6 w-6"
              />
            </a>
          </div>

          <!-- 联系信息 -->
          <dl class="space-y-4 text-sm text-white">
            <div>
              <dt class="font-semibold">WhatsApp</dt>
              <dd class="mt-1">{{ footerData.contact.whatsapp }}</dd>
            </div>
            <div>
              <dt class="font-semibold">{{ footerData.contact.emailLabel }}</dt>
              <dd class="mt-1">{{ footerData.contact.email }}</dd>
            </div>
            <div>
              <dt class="font-semibold">
                {{ footerData.contact.addressLabel }}
              </dt>
              <dd class="mt-1">{{ footerData.contact.address }}</dd>
            </div>
          </dl>
        </div>

        <!-- 右侧：导航链接 (4列) -->
        <nav
          class="grid grid-cols-2 gap-8 xl:col-span-2 sm:grid-cols-4"
          aria-label="Footer navigation"
        >
          <div
            v-for="(section, key) in footerData.sections"
            :key="key"
          >
            <h4 class="text-sm font-semibold text-white">
              {{ section.title }}
            </h4>
            <ul
              role="list"
              class="mt-6 space-y-4"
            >
              <li
                v-for="item in section.items"
                :key="item.title"
              >
                <NuxtLink
                  :to="item.href"
                  class="text-sm text-white hover:text-gray-200 transition-colors"
                >
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <!-- 版权信息 -->
      <div class="mt-24 py-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-sm text-white">
          &copy; {{ currentYear }} TideLine. {{ footerData.copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import { h } from 'vue';

  // --- Props ---
  const props = defineProps({
    navigation: {
      type: Object,
      default: () => null,
    },
  });

  // --- 计算属性 ---
  const footerData = computed(() => {
    return props.navigation?.body?.footer || null;
  });

  const currentYear = new Date().getFullYear();

  // --- 社交媒体链接配置 ---
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/getzwa',
      icon: () =>
        h(
          'svg',
          {
            viewBox: '0 0 24 24',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
            'clip-rule': 'evenodd',
          })
        ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/customswimwearhub/',
      icon: () =>
        h(
          'svg',
          {
            viewBox: '0 0 24 24',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
            'clip-rule': 'evenodd',
          })
        ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/tideline-swimwear',
      icon: () =>
        h(
          'svg',
          {
            viewBox: '0 0 24 24',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M19 0h-14c-2.209 0-4 1.791-4 4v16c0 2.209 1.791 4 4 4h14c2.209 0 4-1.791 4-4V4c0-2.209-1.791-4-4-4zm-11 18h-2v-7h2v7zm-1-8.134c-.69 0-1.5-.49-1.5-1.336s.81-1.336 1.5-1.336c.68 0 1.5.49 1.5 1.336s-.82 1.336-1.5 1.336zm10 8.134h-2v-3.5c0-2.469-3-2.3-3 0v3.5h-2v-7h2v1.5c1.654-2.25 6-2.4 6 2v3.5z',
            'clip-rule': 'evenodd',
          })
        ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@tidelineswimwear',
      icon: () =>
        h(
          'svg',
          {
            viewBox: '0 0 24 24',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          h('path', {
            d: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
          })
        ),
    },
  ];
</script>
