<template>
  <div
    class="relative"
    v-click-outside="closeDropdown"
  >
    <button
      @click="toggleDropdown"
      class="flex items-center px-3 py-2 text-sm font-medium text-white rounded-md"
      aria-expanded="isOpen"
      :aria-label="
        isOpen
          ? $t('LanguageSwitcher.关闭语言菜单')
          : $t('LanguageSwitcher.打开语言菜单')
      "
    >
      <Icon
        name="ion:language-outline"
        class="mr-1"
      />
      <span>{{ currentLocale.name }}</span>
      <Icon
        :name="isOpen ? 'heroicons:chevron-up' : 'heroicons:chevron-down'"
        class="ml-1 w-4 h-4"
      />
    </button>

    <transition name="dropdown">
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
      >
        <a
          v-for="locale in availableLocales"
          :key="locale.code"
          :href="getLocaleUrl(locale)"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          :aria-label="locale.name"
          @click="closeDropdown"
        >
          {{ locale.name }}
        </a>
      </div>
    </transition>
  </div>
</template>

<script setup>
  const { locale, locales } = useI18n();
  const route = useRoute();
  const isOpen = ref(false);

  // 查找当前语言的完整对象
  const currentLocale = computed(() => {
    return locales.value.find(l => l.code === locale.value) || {};
  });

  // 创建一个可供切换的其他语言的列表
  const availableLocales = computed(() => {
    return locales.value.filter(l => l.code !== locale.value);
  });

  // 切换下拉菜单
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };

  // 关闭下拉菜单
  const closeDropdown = () => {
    isOpen.value = false;
  };

  // 点击外部关闭指令
  const vClickOutside = {
    mounted(el, binding) {
      el._clickOutside = event => {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event);
        }
      };
      document.addEventListener('click', el._clickOutside);
    },
    unmounted(el) {
      document.removeEventListener('click', el._clickOutside);
    },
  };

  // 为指定语言生成正确的域名链接
  const getLocaleUrl = targetLocale => {
    // 获取目标语言的默认域名
    const defaultDomain = targetLocale.domain;
    if (!defaultDomain) {
      console.warn(`No default domain found for locale ${targetLocale.code}`);
      return '/';
    }

    // 构建完整的URL
    const protocol = process.client ? window.location.protocol : 'http:';
    const currentPath = route.path === '/' ? '' : route.path;

    return `${protocol}//${defaultDomain}${currentPath}`;
  };
</script>
