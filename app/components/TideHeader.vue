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
                      <div
                        v-for="(item, index) in category.featured"
                        v-show="index < 1"
                        :key="item.name"
                        class="group relative text-sm"
                      >
                        <img
                          :src="item.imageSrc"
                          :alt="item.imageAlt"
                          class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                        />
                        <a
                          :href="item.href"
                          class="mt-6 block font-medium text-gray-900"
                        >
                          <span
                            class="absolute inset-0 z-10"
                            aria-hidden="true"
                          />
                          {{ item.name }}
                        </a>
                      </div>
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
                class=""
                to="/"
                aria-label="TideLine - Go to homepage"
              >
                <NuxtImg
                  class="h-8 w-8"
                  src="/tidelinelogo.png"
                  alt="TideLine Logo"
                />
              </NuxtLink>
              <div
                class="flex justify-center items-center font-bold text-lg ml-3"
              >
                TideLine
              </div>
            </div>

            <!-- 自定义导航菜单组件 -->
            <nav
              class="hidden lg:ml-8 lg:block lg:self-stretch overflow-visible"
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
                          : 'text-gray-700 hover:text-blue-600',
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

              <!-- 自定义下拉菜单 -->
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
                  v-show="activeCategory !== null"
                  class="dropdown-menu absolute left-0 right-0 top-full z-20 bg-white/95 backdrop-blur-lg text-sm text-gray-500 transform"
                  style="
                    margin-left: calc(-50vw + 50%);
                    margin-right: calc(-50vw + 50%);
                  "
                  role="menu"
                  :aria-labelledby="
                    activeCategory ? `menu-${activeCategory}` : undefined
                  "
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
                      <template
                        v-for="category in [
                          ...navData.categories,
                          ...navData.pages.filter(page => page.sections),
                        ]"
                        :key="category.id"
                      >
                        <div
                          v-if="activeCategory === category.id"
                          class="grid grid-cols-4 gap-x-8 gap-y-10 py-16 animate-fade-in-up"
                        >
                          <div class="col-start-5 grid grid-cols-1 gap-x-8">
                            <div
                              v-for="(item, index) in category.featured"
                              v-show="index < 1"
                              :key="item.name"
                              class="group relative text-base sm:text-sm"
                              role="menuitem"
                            >
                              <img
                                :src="item.imageSrc"
                                :alt="item.imageAlt"
                                class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                              />
                              <a
                                :href="item.href"
                                class="mt-4 block font-medium text-gray-900"
                                tabindex="0"
                              >
                                <span
                                  class="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {{ item.name }}
                              </a>
                            </div>
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
                                    class="hover:text-gray-800"
                                    tabindex="0"
                                    >{{ item.name }}</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
              </transition>
            </nav>

            <div class="ml-auto flex items-center">
              <!-- Search -->
              <div class="hidden lg:grid w-full grid-cols-1 sm:max-w-xs">
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
              </div>
              <button
                type="button"
                class="rounded-md ml-3 bg-blue-600 px-4 py-2.5 text-sm text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:shadow-none dark:hover:bg-blue-400 dark:focus-visible:outline-blue-500"
              >
                {{ $t('Contact') }}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue';
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
  const fallbackNavigation = {};

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

  // 点击外部关闭菜单
  const handleDocumentClick = event => {
    const navElement = event.target.closest('nav');
    if (!navElement || !navElement.contains(event.target)) {
      activeCategory.value = null;
    }
  };

  // 监听滚动事件
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10;
  };

  // 挂载和卸载事件监听器
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
</script>

<style scoped>
  /* 防止横向滚动 */
  :global(body) {
    overflow-x: hidden;
  }

  /* 增强模糊效果 */
  header {
    backdrop-filter: blur(12px) saturate(180%);
    -webkit-backdrop-filter: blur(12px) saturate(180%);
  }

  /* 滚动时的额外阴影效果 */
  header.shadow-sm {
    box-shadow:
      0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  /* 确保下拉菜单也有模糊效果 */
  .dropdown-menu {
    backdrop-filter: blur(12px) saturate(180%);
    -webkit-backdrop-filter: blur(12px) saturate(180%);
    background: rgba(255, 255, 255, 0.95);
  }

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.3s ease-out;
  }

  /* 为菜单项添加交错动画 */
  .animate-fade-in-up > div:nth-child(1) {
    animation-delay: 0.05s;
  }

  .animate-fade-in-up > div:nth-child(2) {
    animation-delay: 0.1s;
  }

  /* 为列表项添加悬停动画 */
  .animate-fade-in-up a {
    transition: all 0.2s ease-out;
  }

  .animate-fade-in-up a:hover {
    transform: translateX(4px);
    color: #1d4ed8;
  }

  /* 下拉菜单容器优化 */
  .dropdown-container {
    position: relative;
    overflow: hidden;
  }
</style>
