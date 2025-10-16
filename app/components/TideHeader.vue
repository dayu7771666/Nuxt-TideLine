<template>
  <div class="">
    <!-- Mobile menu -->
    <TransitionRoot
      as="template"
      :show="open"
    >
      <Dialog
        class="relative z-40 lg:hidden"
        @close="open = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to=""
          leave="transition-opacity ease-linear duration-300"
          leave-from=""
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>
        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
            >
              <div class="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  @click="open = false"
                >
                  <span class="absolute -inset-0.5" />
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon
                    class="size-6"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <!-- Links -->
              <TabGroup
                as="div"
                class="mt-2"
              >
                <div class="border-b border-gray-200">
                  <TabList class="-mb-px flex space-x-8 px-4">
                    <Tab
                      as="template"
                      v-for="category in navData.categories"
                      :key="category.name"
                      v-slot="{ selected }"
                    >
                      <button
                        :class="[
                          selected
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-900',
                          'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium',
                        ]"
                      >
                        {{ category.name }}
                      </button>
                    </Tab>
                  </TabList>
                </div>
                <TabPanels as="template">
                  <TabPanel
                    v-for="category in navData.categories"
                    :key="category.name"
                    class="space-y-10 px-4 pb-8 pt-10"
                  >
                    <div class="grid grid-cols-1 gap-x-4">
                      <template
                        v-if="category.featured && category.featured.length > 0"
                      >
                        <a
                          :href="category.featured[0].href"
                          class="group relative text-sm cursor-pointer"
                        >
                          <img
                            :src="category.featured[0].imageSrc"
                            :alt="category.featured[0].imageAlt"
                            class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                            loading="lazy"
                          />
                          <div class="mt-6 block font-medium text-gray-900">
                            {{ category.featured[0].name }}
                          </div>
                        </a>
                      </template>
                    </div>
                    <div
                      v-for="section in category.sections"
                      :key="section.name"
                    >
                      <p
                        :id="`${category.id}-${section.id}-heading-mobile`"
                        class="font-medium text-gray-900"
                      >
                        {{ section.name }}
                      </p>
                      <ul
                        role="list"
                        :aria-labelledby="`${category.id}-${section.id}-heading-mobile`"
                        class="mt-6 flex flex-col space-y-6"
                      >
                        <li
                          v-for="item in section.items"
                          :key="item.name"
                          class="flow-root"
                        >
                          <a
                            :href="item.href"
                            class="-m-2 block p-2 text-gray-500"
                            >{{ item.name }}</a
                          >
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <template
                  v-for="page in navData.pages"
                  :key="page.name"
                >
                  <!-- 普通页面链接 -->
                  <div
                    v-if="!page.sections"
                    class="flow-root"
                  >
                    <a
                      :href="page.href"
                      class="-m-2 block p-2 font-medium text-gray-900"
                      >{{ page.name }}</a
                    >
                  </div>
                  <!-- 有sections的页面 -->
                  <div
                    v-else
                    class="space-y-6"
                  >
                    <div class="flow-root">
                      <div class="-m-2 block p-2 font-medium text-gray-900">
                        {{ page.name }}
                      </div>
                    </div>
                    <div
                      v-for="section in page.sections"
                      :key="section.name"
                      class="ml-4"
                    >
                      <p class="font-medium text-gray-900 text-sm">
                        {{ section.name }}
                      </p>
                      <ul
                        role="list"
                        class="mt-3 flex flex-col space-y-3"
                      >
                        <li
                          v-for="item in section.items"
                          :key="item.name"
                          class="flow-root"
                        >
                          <a
                            :href="item.href"
                            class="-m-2 block p-2 text-gray-500 text-sm"
                            >{{ item.name }}</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </template>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div class="flow-root">
                  <a
                    href="#"
                    class="-m-2 block p-2 font-medium text-gray-900"
                    >Sign in</a
                  >
                </div>
                <div class="flow-root">
                  <a
                    href="#"
                    class="-m-2 block p-2 font-medium text-gray-900"
                    >Create account</a
                  >
                </div>
              </div>

              <div class="border-t border-gray-200 px-4 py-6">
                <a
                  href="#"
                  class="-m-2 flex items-center p-2"
                >
                  <img
                    src=""
                    alt=""
                    class="block h-auto w-5 shrink-0"
                  />
                  <span class="ml-3 block text-base font-medium text-gray-900"
                    >CAD</span
                  >
                  <span class="sr-only">, change currency</span>
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header
      :class="[
        'sticky top-0 z-50 backdrop-blur-lg border-b transition-all duration-300',
        isScrolled ? 'bg-white/90' : 'bg-white/80',
      ]"
    >
      <nav
        aria-label="Top"
        class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div class="">
          <div class="flex h-16 items-center">
            <button
              type="button"
              class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              @click="open = true"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open menu</span>
              <Bars3Icon
                class="size-6"
                aria-hidden="true"
              />
            </button>

            <!--PC Logo -->
            <div class="ml-4 flex lg:ml-0">
              <NuxtLink
                class="flex items-center"
                to="/"
                aria-label="TideLine - Go to homepage"
              >
                <NuxtImg
                  class="h-9 w-9"
                  src="/tidelinelogo-600.png"
                  alt="TideLine Logo"
                />
                <div
                  class="flex justify-center items-center font-semibold text-xl ml-3 italic"
                >
                  TideLine
                </div>
              </NuxtLink>
            </div>

            <!-- 自定义导航菜单组件 -->
            <nav
              class="hidden lg:ml-[170px] lg:block lg:self-stretch overflow-visible"
            >
              <div class="flex h-full items-center space-x-8">
                <NuxtLink
                  to="/"
                  class="relative text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 ease-out group"
                >
                  {{ $t('Home') }}
                  <span
                    class="absolute inset-x-0 -bottom-px z-30 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition duration-200 ease-out"
                    aria-hidden="true"
                  />
                </NuxtLink>
                <div
                  v-for="category in navData.categories"
                  :key="category.name"
                  class="flex group"
                  @mouseenter="setActiveCategory(category.id)"
                  @mouseleave="handleMouseLeave"
                >
                  <div class="relative flex items-center">
                    <button
                      :class="[
                        activeCategory === category.id
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600 ',
                        'relative flex items-center justify-center text-sm font-medium transition-all duration-200 ease-out',
                      ]"
                      :aria-expanded="activeCategory === category.id"
                      :aria-haspopup="true"
                    >
                      {{ category.name }}
                      <ChevronDownIcon
                        class="ml-1 h-4 w-4 transition-transform duration-200"
                        :class="[
                          activeCategory === category.id ? 'rotate-180' : '',
                        ]"
                        aria-hidden="true"
                      />
                      <span
                        :class="[
                          activeCategory === category.id
                            ? 'bg-blue-600 scale-x-100'
                            : 'bg-blue-600 scale-x-0 group-hover:scale-x-100',
                          'absolute inset-x-0 -bottom-px z-30 h-0.5 transform transition duration-200 ease-out',
                        ]"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
                <template
                  v-for="page in navData.pages"
                  :key="page.name"
                >
                  <!-- 普通页面链接 -->
                  <a
                    v-if="!page.sections"
                    :href="page.href"
                    class="relative flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 ease-out group"
                  >
                    {{ page.name }}
                    <span
                      class="absolute inset-x-0 -bottom-px z-30 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition duration-200 ease-out"
                      aria-hidden="true"
                    />
                  </a>
                  <!-- 带下拉菜单的页面 -->
                  <div
                    v-else
                    class="flex group"
                    @mouseenter="setActiveCategory(page.id)"
                    @mouseleave="handleMouseLeave"
                  >
                    <div class="relative flex items-center">
                      <button
                        :class="[
                          activeCategory === page.id
                            ? 'text-blue-600'
                            : 'text-gray-700 hover:text-blue-600',
                          'relative flex items-center justify-center text-sm font-medium transition-all duration-200 ease-out',
                        ]"
                        :aria-expanded="activeCategory === page.id"
                        :aria-haspopup="true"
                      >
                        {{ page.name }}
                        <ChevronDownIcon
                          class="ml-1 h-4 w-4 transition-transform duration-200"
                          :class="[
                            activeCategory === page.id ? 'rotate-180' : '',
                          ]"
                          aria-hidden="true"
                        />
                        <span
                          :class="[
                            activeCategory === page.id
                              ? 'bg-blue-600 scale-x-100'
                              : 'bg-blue-600 scale-x-0 group-hover:scale-x-100',
                            'absolute inset-x-0 -bottom-px z-30 h-0.5 transform transition duration-200 ease-out',
                          ]"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                </template>
              </div>

              <!-- 自定义下拉菜单 - SSR 完全渲染版本 -->
              <template
                v-for="category in [
                  ...navData.categories,
                  ...navData.pages.filter(page => page.sections),
                ]"
                :key="`dropdown-${category.id}`"
              >
                <transition
                  name="dropdown"
                  enter-active-class="transition ease-out duration-200"
                  enter-from-class="opacity-0 -translate-y-2"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition ease-in duration-150"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-2"
                >
                  <div
                    v-show="activeCategory === category.id"
                    class="dropdown-menu absolute left-0 right-0 top-full z-20 bg-white/95 backdrop-blur-lg text-sm text-gray-500 transform"
                    style="
                      margin-left: calc(-50vw + 50%);
                      margin-right: calc(-50vw + 50%);
                    "
                    role="menu"
                    :aria-labelledby="`menu-${category.id}`"
                    :aria-hidden="activeCategory !== category.id"
                    @mouseenter="handleDropdownEnter"
                    @mouseleave="handleMouseLeave"
                  >
                    <!-- 阴影背景 -->
                    <div
                      class="absolute inset-0 top-1/2 bg-white/95 backdrop-blur-lg shadow-lg transition-all duration-200"
                      aria-hidden="true"
                    />
                    <div class="relative bg-white/95 backdrop-blur-lg">
                      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div
                          class="grid grid-cols-4 gap-x-8 gap-y-10 py-16 animate-fade-in-up"
                        >
                          <div class="col-start-5 grid grid-cols-1 gap-x-8">
                            <template
                              v-if="
                                category.featured &&
                                category.featured.length > 0
                              "
                            >
                              <a
                                :href="category.featured[0].href"
                                class="group relative text-base sm:text-sm cursor-pointer"
                                role="menuitem"
                                tabindex="0"
                              >
                                <img
                                  :src="category.featured[0].imageSrc"
                                  :alt="category.featured[0].imageAlt"
                                  class="aspect-square w-[400px] rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                  loading="eager"
                                />
                                <div
                                  class="mt-4 block font-medium text-gray-900"
                                >
                                  {{ category.featured[0].name }}
                                </div>
                              </a>
                            </template>
                          </div>
                          <div
                            class="row-start-1 col-span-4 grid grid-cols-4 gap-x-8 gap-y-10 text-sm"
                          >
                            <div
                              v-for="section in category.sections"
                              :key="section.name"
                            >
                              <p
                                :id="`${section.name}-heading`"
                                class="font-medium text-gray-900"
                              >
                                {{ section.name }}
                              </p>
                              <ul
                                role="list"
                                :aria-labelledby="`${section.name}-heading`"
                                class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                              >
                                <li
                                  v-for="item in section.items"
                                  :key="item.name"
                                  class="flex"
                                  role="menuitem"
                                >
                                  <a
                                    :href="item.href"
                                    class="hover:text-gray-800 cursor-pointer hover:font-semibold"
                                    tabindex="0"
                                    >{{ item.name }}</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </template>
            </nav>

            <div class="ml-auto flex items-center">
              <!-- Search -->
              <!-- <div class="hidden lg:grid w-full grid-cols-1 sm:max-w-xs">
                <input
                  name="search"
                  placeholder="Search..."
                  class="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-blue-500"
                />
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  class="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
                >
                  <path
                    d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  />
                </svg>
              </div> -->
              <NuxtLinkLocale
                to="/contact"
                class="rounded-md ml-3 bg-blue-600 px-4 py-2.5 text-sm text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:shadow-none dark:hover:bg-blue-400 dark:focus-visible:outline-blue-500"
              >
                {{ $t('Contact') }}
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import {
    Dialog,
    DialogPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
  } from '@headlessui/vue';
  import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    XMarkIcon,
    ChevronDownIcon,
  } from '@heroicons/vue/24/outline';

  // --- Props 定义 ---
  const props = defineProps({
    navigation: {
      type: Object,
      default: () => null,
    },
  });

  // --- 用于数据安全的计算属性 ---
  const navData = computed(() => {
    return props.navigation?.body?.tideHeader || fallbackNavigation;
  });

  // 备用导航数据（当没有从YAML获取到数据时使用）
  const fallbackNavigation = {
    categories: [],
    pages: [],
  };

  const open = ref(false);
  const activeCategory = ref(null);
  const isScrolled = ref(false);
  let hideTimeout = null;

  const setActiveCategory = categoryId => {
    // 清除之前的延迟隐藏计时器
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
    activeCategory.value = categoryId;
  };

  const handleMouseLeave = () => {
    // 延迟隐藏菜单，给用户时间移动鼠标到下拉菜单
    hideTimeout = setTimeout(() => {
      activeCategory.value = null;
    }, 150); // 150ms 延迟
  };

  const handleDropdownEnter = () => {
    // 取消隐藏菜单的计时器
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
  };

  // 点击外部关闭菜单（仅客户端）
  const handleDocumentClick = event => {
    if (import.meta.client) {
      const navElement = event.target.closest('nav');
      if (!navElement || !navElement.contains(event.target)) {
        activeCategory.value = null;
      }
    }
  };

  // 监听滚动事件（仅客户端）
  const handleScroll = () => {
    if (import.meta.client) {
      isScrolled.value = window.scrollY > 10;
    }
  };

  // 使用 Nuxt 的 onMounted（SSR 友好）
  if (import.meta.client) {
    onMounted(() => {
      document.addEventListener('click', handleDocumentClick);
      window.addEventListener('scroll', handleScroll);
      // 初始化滚动状态
      handleScroll();
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    });
  }
</script>
