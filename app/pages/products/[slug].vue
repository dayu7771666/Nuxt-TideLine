<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="relative">
      <Hero
        :title="productData?.hero?.title || 'Products'"
        :description="
          productData?.hero?.description || 'Discover our latest collection'
        "
        pt="pt-20"
        pb="pb-20"
        bg-gradient="bg-gradient-to-br from-blue-50 to-cyan-100"
        text-color="dark"
        :decorations="true"
      />
    </div>

    <nav
      class="flex border-b border-gray-200 bg-white dark:border-white/10 dark:bg-gray-800/50"
      aria-label="Breadcrumb"
    >
      <ol
        role="list"
        class="mx-auto flex w-full max-w-7xl space-x-4 px-4 sm:px-6 lg:px-8"
      >
        <li
          v-for="(page, index) in pages"
          :key="page.name"
          class="flex"
        >
          <div class="flex items-center">
            <!-- 分隔符 - 除了第一个项目 -->
            <svg
              v-if="index > 0"
              class="h-full w-6 shrink-0 text-gray-200 dark:text-white/10"
              viewBox="0 0 24 44"
              preserveAspectRatio="none"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
            </svg>

            <a
              :href="page.href"
              :class="[
                index === 0 ? '' : 'ml-4',
                'text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
                page.current ? 'text-gray-700 dark:text-gray-200' : '',
              ]"
              :aria-current="page.current ? 'page' : undefined"
            >
              <!-- Home 图标 -->
              <HomeIcon
                v-if="page.icon === 'home'"
                class="size-5 shrink-0"
                aria-hidden="true"
              />
              <span v-else>{{ page.name }}</span>
              <span
                v-if="page.icon === 'home'"
                class="sr-only"
                >Home</span
              >
            </a>
          </div>
        </li>
      </ol>
    </nav>

    <main class="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
      <div class="pt-10 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
        <!-- Products Section - Show first on mobile, second on desktop -->
        <section
          aria-labelledby="product-heading"
          class="lg:col-span-2 lg:order-2 xl:col-span-3"
        >
          <h2
            id="product-heading"
            class="sr-only"
          >
            Products
          </h2>

          <div
            class="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3"
          >
            <div
              v-for="product in productData?.products || []"
              :key="product.id"
              class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              @click="openContactModal(product)"
            >
              <!-- Product Image -->
              <div class="aspect-3/4 bg-gray-200 overflow-hidden sm:h-96">
                <img
                  :src="product.imageSrc"
                  :alt="product.imageAlt"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <!-- Product Content -->
              <div class="flex flex-1 flex-col p-4">
                <h3 class="text-sm font-medium text-gray-900 mb-2">
                  {{ product.name }}
                </h3>
                <p class="text-sm text-gray-500 flex-1 line-clamp-3 mb-4">
                  {{ product.description }}
                </p>

                <!-- Get Quote Button - Always at bottom -->
                <div class="mt-auto">
                  <span
                    class="inline-flex items-center text-blue-600 text-sm font-medium"
                  >
                    {{ $t('Free Quote') }}
                    <svg
                      class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Information Section - Show second on mobile, first on desktop -->
        <aside class="mt-6 lg:col-span-1 lg:mt-0 lg:order-1">
          <div
            class="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg p-3"
          >
            <!-- Main Title -->
            <div class="mb-8">
              <h2 class="text-lg font-bold text-gray-900 mb-4">
                Professional Customization
              </h2>
              <p class="text-gray-700 leading-relaxed">
                We offer professional customization services to turn your
                creative designs into unique swimwear. Whether it's the style,
                fabric, or details, we tailor everything to your exact
                specifications.
              </p>
            </div>

            <!-- Contact Section -->
            <div class="mb-8">
              <h3
                class="text-lg font-semibold text-gray-900 mb-4 flex items-center"
              >
                <svg
                  class="w-5 h-5 mr-2 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                Contact Us
              </h3>
              <div class="space-y-3">
                <div class="flex items-center text-gray-700">
                  <svg
                    class="w-4 h-4 mr-3 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                    ></path>
                  </svg>
                  <a
                    href="https://wa.me/8618302407790"
                    target="_blank"
                    class="hover:text-blue-600 transition-colors"
                  >
                    +(86)18302407790
                  </a>
                </div>
                <div class="flex items-center text-gray-700">
                  <svg
                    class="w-4 h-4 mr-3 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <a
                    href="mailto:tidelineswim@swimsuitcustom.com"
                    class="hover:text-blue-600 transition-colors break-all"
                  >
                    tidelineswim@swimsuitcustom.com
                  </a>
                </div>
                <div class="flex items-start text-gray-700">
                  <svg
                    class="w-4 h-4 mr-3 mt-0.5 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span>Xingcheng, Huludao City, Liaoning Province, China</span>
                </div>
              </div>
            </div>

            <!-- Social Media Section -->
            <div class="mb-8">
              <h3
                class="text-lg font-semibold text-gray-900 mb-4 flex items-center"
              >
                <svg
                  class="w-5 h-5 mr-2 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v1a1 1 0 01-1 1h-1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7H3a1 1 0 01-1-1V5a1 1 0 011-1h4z"
                  ></path>
                </svg>
                Follow Us
              </h3>
              <div class="flex space-x-4">
                <!-- Facebook -->
                <a
                  href="https://www.facebook.com/getzwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="white"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <!-- Instagram -->
                <a
                  href="https://www.instagram.com/customswimwearhub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="white"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <!-- LinkedIn -->
                <a
                  href="https://www.linkedin.com/company/tideline-swimwear"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="white"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M19 0h-14c-2.209 0-4 1.791-4 4v16c0 2.209 1.791 4 4 4h14c2.209 0 4-1.791 4-4V4c0-2.209-1.791-4-4-4zm-11 18h-2v-7h2v7zm-1-8.134c-.69 0-1.5-.49-1.5-1.336s.81-1.336 1.5-1.336c.68 0 1.5.49 1.5 1.336s-.82 1.336-1.5 1.336zm10 8.134h-2v-3.5c0-2.469-3-2.3-3 0v3.5h-2v-7h2v1.5c1.654-2.25 6-2.4 6 2v3.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <!-- YouTube -->
                <a
                  href="https://www.youtube.com/@Swimwearcustomization"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  aria-label="Follow us on YouTube"
                >
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="white"
                    aria-hidden="true"
                  >
                    <path
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <!-- CTA Section -->
            <div
              class="bg-white rounded-xl p-2 shadow-sm border border-gray-100"
            >
              <h3
                class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
              >
                <svg
                  class="w-5 h-5 mr-2 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Need Help?
              </h3>
              <p class="text-gray-600 mb-4">
                <strong>Free Consultation</strong><br />
                Professional team provides customized solutions for you
              </p>
              <a
                href="/contact"
                class="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Free Quote
                <svg
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>

    <!-- Contact Form Modal -->
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
              <div>
                <h2 class="text-2xl font-bold text-gray-900">
                  Get Quote for {{ selectedProduct?.name || 'Product' }}
                </h2>
                <p class="text-sm text-gray-600 mt-1">
                  {{
                    selectedProduct?.description || 'Custom swimwear solution'
                  }}
                </p>
              </div>
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
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import { HomeIcon } from '@heroicons/vue/20/solid';

  // 获取路由参数
  const route = useRoute();
  const { locale } = useI18n();
  const normalizedPath = route.path.replace(/^\/[^\/]+/, '');

  // 获取产品数据
  const { data: productData } = await useAsyncData(
    `products-${route.params.slug}`,
    async () => {
      // 根据当前语言和slug构建集合名称
      const collection = 'products_' + locale.value;
      const content = await queryCollection(collection)
        .path(normalizedPath)
        .first();

      // 可选：如果内容缺失，回退到默认语言
      if (!content && locale.value !== 'en') {
        return await queryCollection('products_en')
          .path(normalizedPath)
          .first();
      }
      return content?.body;
    },
    {
      watch: [locale],
      server: true,
    }
  );
  // console.log(productData.value, 'productData');

  // Modal state management
  const showContactModal = ref(false);
  const selectedProduct = ref(null);

  // Contact form labels - can be customized or fetched from content
  const contactFormLabels = computed(() => ({
    nameLabel: 'Full Name',
    namePlaceholder: 'Enter your full name',
    emailLabel: 'Email Address',
    emailPlaceholder: 'Enter your email address',
    messageLabel: 'Project Requirements',
    messagePlaceholder: `Tell us about your ${selectedProduct.value?.name || 'swimwear'} requirements, including quantity, timeline, and any specific customization needs...`,
    consentText: 'I agree to receive updates and communications from Tideline.',
    submitButton: 'Request Quote',
    successMessage: 'Thank you! We will send you a detailed quote soon.',
    errorMessage:
      'Submission failed. Please try again or contact our support team.',
  }));

  // Open contact modal with selected product
  const openContactModal = product => {
    selectedProduct.value = product;
    showContactModal.value = true;
  };

  // Close modal
  const closeModal = () => {
    showContactModal.value = false;
    selectedProduct.value = null;
  };

  // Handle contact form success
  const handleContactSuccess = response => {
    console.log('Contact form submitted successfully:', response);
    setTimeout(() => {
      showContactModal.value = false;
      selectedProduct.value = null;
    }, 2000);
  };

  // Handle contact form error
  const handleContactError = error => {
    console.error('Contact form submission error:', error);
  };

  // Keyboard event handling - ESC key closes modal
  onMounted(() => {
    const handleKeydown = event => {
      if (event.key === 'Escape' && showContactModal.value) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeydown);

    onUnmounted(() => {
      document.removeEventListener('keydown', handleKeydown);
    });
  });

  const mobileFiltersOpen = ref(false);

  // SEO Meta tags
  useSeoMeta({
    title: productData.value?.seo?.title || productData.value?.hero?.title,
    description:
      productData.value?.seo?.description ||
      productData.value?.hero?.description,
    keywords: productData.value?.seo?.keywords,
    ogTitle:
      productData.value?.seo?.ogTitle ||
      productData.value?.seo?.title ||
      productData.value?.hero?.title,
    ogDescription:
      productData.value?.seo?.ogDescription ||
      productData.value?.seo?.description ||
      productData.value?.hero?.description,
    ogType: productData.value?.seo?.ogType || 'website',
    ogSiteName: 'TIDELINE SWIMWEAR',
    ogImage: productData.value?.seo?.ogImage || '/products/default.webp',
    twitterCard: productData.value?.seo?.twitterCard || 'summary_large_image',
    twitterTitle:
      productData.value?.seo?.twitterTitle ||
      productData.value?.seo?.title ||
      productData.value?.hero?.title,
    twitterDescription:
      productData.value?.seo?.twitterDescription ||
      productData.value?.seo?.description ||
      productData.value?.hero?.description,
  });

  import { ChevronRightIcon } from '@heroicons/vue/20/solid';

  // 复用 app.vue 中的导航数据
  const { data: navigationData } = useNuxtData(`navigation-${locale.value}`);

  // 简单的面包屑逻辑
  const formatSlugToTitle = slug => {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // 根据当前路径查找对应的 section
  const findSectionByPath = path => {
    const navData = navigationData.value?.body || navigationData.value;
    if (!navData?.tideHeader?.categories) return null;

    for (const category of navData.tideHeader.categories) {
      if (category.sections) {
        for (const section of category.sections) {
          if (section.items) {
            // 查找匹配的 item
            const matchingItem = section.items.find(
              item => item.href && path.startsWith(item.href)
            );
            if (matchingItem) {
              // 查找 View All 项目的 href
              const viewAllItem = section.items.find(
                item => item.name === 'View All'
              );
              return {
                section,
                allHref: viewAllItem?.href || section.breadcrumb?.href || '#',
              };
            }
          }
        }
      }
    }
    return null;
  };

  // 生成面包屑
  const pages = computed(() => {
    const breadcrumbs = [
      { name: 'Home', href: '/', current: false, icon: 'home' },
    ];

    // 查找当前路径对应的 section
    const sectionInfo = findSectionByPath(route.path);

    if (sectionInfo) {
      // 使用 section 的 breadcrumb name 和 ALL 的 href
      breadcrumbs.push({
        name: sectionInfo.section.breadcrumb?.name || sectionInfo.section.name,
        href: sectionInfo.allHref,
        current: false,
      });
    } else {
      // 默认使用 Products
      breadcrumbs.push({
        name: 'Products',
        href: '/products',
        current: false,
      });
    }

    // 添加当前产品页面
    const productTitle =
      productData.value?.hero?.title || formatSlugToTitle(route.params.slug);
    breadcrumbs.push({
      name: productTitle,
      href: route.path,
      current: true,
    });

    return breadcrumbs;
  });
</script>

<style scoped>
  /* Modal animation transitions */
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

  /* Modal content animation */
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

  /* Line clamp utility for description */
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.5;
    max-height: 4.5em; /* 3 lines * 1.5 line-height */
  }
</style>
