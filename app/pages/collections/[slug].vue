<template>
  <div class="bg-white">
    <div>
      <!-- Mobile filter dialog -->
      <TransitionRoot
        as="template"
        :show="mobileFiltersOpen"
      >
        <Dialog
          class="relative z-40 lg:hidden"
          @close="mobileFiltersOpen = false"
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
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel
                class="relative ml-auto flex size-full max-w-xs flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl"
              >
                <div class="flex items-center justify-between px-4">
                  <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    class="relative -mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    @click="mobileFiltersOpen = false"
                  >
                    <span class="absolute -inset-0.5" />
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon
                      class="size-6"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                <!-- Filters -->
                <form class="mt-4 border-t border-gray-200">
                  <h3 class="sr-only">Categories</h3>
                  <ul
                    role="list"
                    class="px-2 py-3 font-medium text-gray-900"
                  >
                    <li
                      v-for="category in subCategories"
                      :key="category.name"
                    >
                      <button
                        type="button"
                        @click="selectCategory(category.name)"
                        class="block w-full text-left px-2 py-3 transition-colors duration-200 text-gray-900 hover:bg-gray-50"
                      >
                        {{ category.name }}
                      </button>
                    </li>
                  </ul>

                  <Disclosure
                    as="div"
                    v-for="section in filters"
                    :key="section.id"
                    class="border-t border-gray-200 px-4 py-6"
                    v-slot="{ open }"
                  >
                    <h3 class="-mx-2 -my-3 flow-root">
                      <DisclosureButton
                        class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                      >
                        <span class="font-medium text-gray-900">{{
                          section.name
                        }}</span>
                        <span class="ml-6 flex items-center">
                          <PlusIcon
                            v-if="!open"
                            class="size-5"
                            aria-hidden="true"
                          />
                          <MinusIcon
                            v-else
                            class="size-5"
                            aria-hidden="true"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel class="pt-6">
                      <div class="space-y-6">
                        <div
                          v-for="(option, optionIdx) in section.options"
                          :key="option.value"
                          class="flex gap-3"
                        >
                          <div class="flex h-5 shrink-0 items-center">
                            <div class="group grid size-4 grid-cols-1">
                              <input
                                :id="`filter-mobile-${section.id}-${optionIdx}`"
                                :name="`${section.id}[]`"
                                :value="option.value"
                                type="checkbox"
                                class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-blue-600 checked:bg-blue-600 indeterminate:border-blue-600 indeterminate:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                              />
                              <svg
                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                viewBox="0 0 14 14"
                                fill="none"
                              >
                                <path
                                  class="opacity-0 group-has-checked:opacity-100"
                                  d="M3 8L6 11L11 3.5"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  class="opacity-0 group-has-indeterminate:opacity-100"
                                  d="M3 7H11"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          <label
                            :for="`filter-mobile-${section.id}-${optionIdx}`"
                            class="min-w-0 flex-1 text-gray-500"
                            >{{ option.label }}</label
                          >
                        </div>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200 pt-10 pb-6">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">
            {{ collectionData?.title || 'New Arrivals' }}
          </h1>
          <p
            v-if="
              collectionData?.description || collectionData?.body?.description
            "
            class="mt-4 text-lg text-gray-600"
          >
            {{
              collectionData?.description || collectionData?.body?.description
            }}
          </p>
          <div class="w-full flex justify-end mt-4 lg:hidden">
            <button
              type="button"
              class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-500"
              @click="mobileFiltersOpen = true"
            >
              <FunnelIcon
                class="mr-2 h-5 w-5"
                aria-hidden="true"
              />
              Filter
            </button>
          </div>
        </div>

        <section
          aria-labelledby="products-heading"
          class="pt-6 pb-24"
        >
          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <!-- Filters -->
            <form class="hidden lg:block sticky top-20 self-start">
              <h3 class="sr-only">Categories</h3>
              <ul
                role="list"
                class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
              >
                <li
                  v-for="category in subCategories"
                  :key="category.name"
                >
                  <button
                    type="button"
                    @click="selectCategory(category.name)"
                    :class="[
                      'block w-full text-left transition-colors duration-200 py-1',
                      activeCategory === category.name
                        ? 'text-blue-600 font-semibold border-l-2 border-blue-600 pl-2 bg-blue-50'
                        : 'text-gray-900 hover:text-blue-500 pl-2',
                    ]"
                  >
                    {{ category.name }}
                  </button>
                </li>
              </ul>

              <Disclosure
                as="div"
                v-for="section in filters"
                :key="section.id"
                class="border-b border-gray-200 py-6"
                v-slot="{ open }"
              >
                <h3 class="-my-3 flow-root">
                  <DisclosureButton
                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                  >
                    <span class="font-medium text-gray-900">{{
                      section.name
                    }}</span>
                    <span class="ml-6 flex items-center">
                      <PlusIcon
                        v-if="!open"
                        class="size-5"
                        aria-hidden="true"
                      />
                      <MinusIcon
                        v-else
                        class="size-5"
                        aria-hidden="true"
                      />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel class="pt-6">
                  <div class="space-y-4">
                    <div
                      v-for="(option, optionIdx) in section.options"
                      :key="option.value"
                      class="flex gap-3"
                    >
                      <div class="flex h-5 shrink-0 items-center">
                        <div class="group grid size-4 grid-cols-1">
                          <input
                            :id="`filter-${section.id}-${optionIdx}`"
                            :name="`${section.id}[]`"
                            :value="option.value"
                            type="checkbox"
                            :checked="option.checked"
                            class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-blue-600 checked:bg-blue-600 indeterminate:border-blue-600 indeterminate:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          />
                          <svg
                            class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              class="opacity-0 group-has-checked:opacity-100"
                              d="M3 8L6 11L11 3.5"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              class="opacity-0 group-has-indeterminate:opacity-100"
                              d="M3 7H11"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <label
                        :for="`filter-${section.id}-${optionIdx}`"
                        class="text-sm text-gray-600"
                        >{{ option.label }}</label
                      >
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </form>

            <!-- Category Content -->
            <div class="lg:col-span-3 space-y-12">
              <!-- Marketing Module -->
              <MarketingModule
                v-if="marketingData"
                :title="marketingData.title"
                :description="marketingData.description"
                :items="marketingData.items"
                @item-click="handleMarketingItemClick"
              />

              <div
                v-for="category in subCategories"
                :key="category.name"
                :id="`category-${category.name.replace(/\s+/g, '-').toLowerCase()}`"
              >
                <CategoryContent
                  :title="category.name"
                  :items="category.products || []"
                  :learn-more-href="category.href"
                  @inquire="handleInquire"
                  @details="handleDetails"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, watch, onMounted } from 'vue';
  import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
  } from '@headlessui/vue';
  import { XMarkIcon } from '@heroicons/vue/24/outline';
  import {
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
    Squares2X2Icon,
  } from '@heroicons/vue/20/solid';
  import CategoryContent from '~/components/CategoryContent.vue';
  import MarketingModule from '~/components/MarketingModule.vue';

  const mobileFiltersOpen = ref(false);
  const activeCategory = ref('');

  // 获取国际化
  const { locale } = useI18n();
  const route = useRoute();
  console.log(route.path, 'route.path');
  const normalizedPath = route.path.replace(/^\/[^\/]+/, '');
  // 获取当前集合的数据
  const { data: collectionData } = await useAsyncData(
    `collection-${route.path}`,
    async () => {
      // 根据当前语言构建集合名称
      const collection = 'collections_' + locale.value;
      const content = await queryCollection(collection)
        .path(normalizedPath)
        .first();

      // 可选：如果内容缺失，回退到默认语言
      if (!content && locale.value !== 'en') {
        return await queryCollection('collections_en')
          .path(normalizedPath)
          .first();
      }

      return content;
    },
    {
      watch: [locale],
      // server: true,
    }
  );
  console.log(collectionData.value, 'collectionData');

  // 从yml文件中获取subCategories
  const subCategories = computed(() => {
    return collectionData.value?.body.subcategories || [];
  });

  // 获取营销模块数据
  const { data: marketingData } = await useAsyncData(
    `marketing-${locale.value}`,
    async () => {
      try {
        // 根据当前语言构建营销数据路径
        const marketingCollection = 'marketing_' + locale.value;
        const content = await queryCollection(marketingCollection).first();

        // 如果内容缺失，回退到默认语言
        if (!content && locale.value !== 'en') {
          return await queryCollection('marketing_en').first();
        }

        return content?.body || content;
      } catch (error) {
        console.error('Error loading marketing data:', error);
      }
    },
    {
      watch: [locale],
    }
  );

  // 简化的初始化逻辑
  onMounted(() => {
    // 不设置默认高亮，只有点击时才高亮
    activeCategory.value = '';
  });

  // 选择分类的方法（用于跳转到对应分类区域）
  const selectCategory = categoryName => {
    mobileFiltersOpen.value = false;

    // 设置当前活跃分类（点击时高亮）
    activeCategory.value = categoryName;

    // 跳转到对应的分类区域，考虑固定头部的偏移
    const categoryElement = document.getElementById(
      `category-${categoryName.replace(/\s+/g, '-').toLowerCase()}`
    );
    if (categoryElement) {
      const headerOffset = 70; // h-16= 64px
      const elementPosition = categoryElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // 处理询价事件
  const handleInquire = item => {
    console.log('Inquire for:', item);
    // 这里可以打开询价弹窗或跳转到询价页面
  };

  // 处理详情事件
  const handleDetails = item => {
    console.log('Show details for:', item);
    // 这里可以跳转到产品详情页面
  };

  // 处理营销模块项目点击事件
  const handleMarketingItemClick = item => {
    console.log('Marketing item clicked:', item);
    // 这里可以添加营销项目的点击逻辑，比如跳转到特定的商品分类或打开详情页面
  };

  // SEO Meta tags
  useSeoMeta({
    title: collectionData.value?.seo?.title || collectionData.value?.title,
    description:
      collectionData.value?.seo?.description ||
      collectionData.value?.description,
    keywords: collectionData.value?.seo?.keywords,
    ogTitle:
      collectionData.value?.seo?.ogTitle ||
      collectionData.value?.seo?.title ||
      collectionData.value?.title,
    ogDescription:
      collectionData.value?.seo?.ogDescription ||
      collectionData.value?.seo?.description ||
      collectionData.value?.description,
    ogType: collectionData.value?.seo?.ogType || 'website',
    ogSiteName: 'TIDELINE SWIMWEAR',
    ogImage: collectionData.value?.seo?.ogImage || '/collections/default.webp',
    twitterCard:
      collectionData.value?.seo?.twitterCard || 'summary_large_image',
    twitterTitle:
      collectionData.value?.seo?.twitterTitle ||
      collectionData.value?.seo?.title ||
      collectionData.value?.title,
    twitterDescription:
      collectionData.value?.seo?.twitterDescription ||
      collectionData.value?.seo?.description ||
      collectionData.value?.description,
  });
</script>
