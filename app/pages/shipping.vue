<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Page Header -->
    <Hero
      :title="shipping?.title"
      image="/shipping-banner.webp"
      :description="shipping?.description"
      pt="pt-36"
      pb="pb-40"
    />

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Order Tracking -->
          <section
            class="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-center mb-6">
              <div
                class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4"
              >
                <Icon
                  name="heroicons:magnifying-glass-20-solid"
                  class="w-6 h-6 text-blue-600"
                />
              </div>
              <h2 class="text-2xl font-semibold text-gray-900">
                {{ shipping?.orderTracking?.title }}
              </h2>
            </div>

            <p class="text-gray-600 mb-6">
              {{ shipping?.orderTracking?.description }}
            </p>

            <ul class="space-y-3 mb-6">
              <li
                v-for="feature in shipping?.orderTracking?.features"
                :key="feature"
                class="flex items-start"
              >
                <div
                  class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>

            <!-- Tracking Input -->
            <div class="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
              <p class="font-semibold text-gray-900 mb-4">
                {{ shipping?.orderTracking?.trackTitle }}
              </p>
              <div class="flex flex-col sm:flex-row gap-3">
                <input
                  v-model="trackingNumber"
                  type="text"
                  :placeholder="shipping?.orderTracking?.trackPlaceholder"
                  class="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <button
                  @click="trackOrder"
                  class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  {{ shipping?.orderTracking?.trackButton }}
                </button>
              </div>
            </div>
          </section>

          <!-- Shipping Methods -->
          <section
            class="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-center mb-6">
              <div
                class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4"
              >
                <Icon
                  name="heroicons:truck-20-solid"
                  class="w-6 h-6 text-green-600"
                />
              </div>
              <h2 class="text-2xl font-semibold text-gray-900">
                {{ shipping?.methods?.title }}
              </h2>
            </div>

            <p class="text-gray-600 mb-8">
              {{ shipping?.methods?.description }}
            </p>

            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <!-- Sample Orders -->
              <div
                class="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div class="flex items-center mb-4">
                  <div
                    class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3"
                  >
                    <Icon
                      name="heroicons:cube-20-solid"
                      class="w-5 h-5 text-orange-600"
                    />
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900">
                    {{ shipping?.methods?.sample?.title }}
                  </h3>
                </div>
                <p class="text-gray-600 text-sm mb-4">
                  {{ shipping?.methods?.sample?.description }}
                </p>
                <ul class="space-y-2 text-sm">
                  <li
                    v-for="option in shipping?.methods?.sample?.options"
                    :key="option.name"
                    class="flex items-start"
                  >
                    <span class="font-semibold text-gray-900 mr-2"
                      >{{ option.name }}:</span
                    >
                    <span class="text-gray-600">{{ option.description }}</span>
                  </li>
                </ul>
              </div>

              <!-- Bulk Orders -->
              <div
                class="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div class="flex items-center mb-4">
                  <div
                    class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3"
                  >
                    <Icon
                      name="heroicons:building-storefront-20-solid"
                      class="w-5 h-5 text-purple-600"
                    />
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900">
                    {{ shipping?.methods?.bulk?.title }}
                  </h3>
                </div>
                <p class="text-gray-600 text-sm mb-4">
                  {{ shipping?.methods?.bulk?.description }}
                </p>
                <ul class="space-y-2 text-sm">
                  <li
                    v-for="option in shipping?.methods?.bulk?.options"
                    :key="option.name"
                    class="flex items-start"
                  >
                    <span class="font-semibold text-gray-900 mr-2"
                      >{{ option.name }}:</span
                    >
                    <span class="text-gray-600">{{ option.description }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-500">
              <p class="text-amber-800">
                <span class="font-semibold"
                  >{{ shipping?.methods?.important?.title }}:</span
                >
                {{ shipping?.methods?.important?.note }}
              </p>
            </div>
          </section>

          <!-- Shipping Coverage -->
          <section
            class="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-center mb-6">
              <div
                class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4"
              >
                <Icon
                  name="heroicons:globe-americas-20-solid"
                  class="w-6 h-6 text-indigo-600"
                />
              </div>
              <h2 class="text-2xl font-semibold text-gray-900">
                {{ shipping?.coverage?.title }}
              </h2>
            </div>

            <p class="text-gray-600 mb-8">
              {{ shipping?.coverage?.description }}
            </p>

            <!-- Global Operations Title -->
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">
                {{ shipping?.coverage?.globalOperationsTitle }}
              </h3>
            </div>

            <!-- World Map Visualization -->
            <div
              class="relative h-[300px] overflow-hidden border-gray-200 mb-6"
            >
              <NuxtImg
                src="/shippingmap.webp"
                alt="Shipping Map"
                class="w-full h-full"
              />
            </div>

            <!-- Business Regions Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
              <div
                v-for="region in shipping?.coverage?.businessRegions"
                :key="region.title"
                class="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-200 text-center"
              >
                <div
                  :class="[
                    'w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4',
                    region.color === 'red' ? 'bg-red-100' : '',
                    region.color === 'blue' ? 'bg-blue-100' : '',
                    region.color === 'green' ? 'bg-green-100' : '',
                    region.color === 'purple' ? 'bg-purple-100' : '',
                  ]"
                >
                  <Icon
                    :name="region.icon"
                    :class="[
                      'w-6 h-6',
                      region.color === 'red' ? 'text-red-600' : '',
                      region.color === 'blue' ? 'text-blue-600' : '',
                      region.color === 'green' ? 'text-green-600' : '',
                      region.color === 'purple' ? 'text-purple-600' : '',
                    ]"
                  />
                </div>
                <h4 class="text-lg font-semibold text-gray-900 mb-3">
                  {{ region.title }}
                </h4>
                <p class="text-gray-600 text-sm leading-relaxed">
                  {{ region.description }}
                </p>
              </div>
            </div>

            <!-- Legend -->

            <div class="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
              <p class="text-blue-800">
                <span class="font-semibold"
                  >{{ shipping?.coverage?.note?.title }}:</span
                >
                {{ shipping?.coverage?.note?.text }}
              </p>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="space-y-8">
          <!-- Shipping Overview -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3
              class="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200"
            >
              {{ shipping?.sidebar?.overview?.title }}
            </h3>
            <p class="text-gray-600 mb-4">
              {{ shipping?.sidebar?.overview?.description1 }}
            </p>
            <p class="text-gray-600 mb-4">
              {{ shipping?.sidebar?.overview?.description2 }}
            </p>
            <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p class="text-sm font-medium text-gray-800">
                <span class="font-semibold"
                  >{{ shipping?.sidebar?.overview?.keyFeatures }}:</span
                >
                {{ shipping?.sidebar?.overview?.features }}
              </p>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3
              class="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200"
            >
              {{ shipping?.sidebar?.contact?.title }}
            </h3>

            <div class="space-y-4">
              <div class="flex items-center">
                <div
                  class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3"
                >
                  <Icon
                    name="heroicons:envelope-20-solid"
                    class="w-5 h-5 text-blue-600"
                  />
                </div>
                <div>
                  <div class="font-semibold text-gray-900">
                    {{ shipping?.sidebar?.contact?.email }}
                  </div>
                  <div class="text-gray-600 text-sm">
                    tidelineswim@swimsuitcustom.com
                  </div>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3"
                >
                  <Icon
                    name="heroicons:clock-20-solid"
                    class="w-5 h-5 text-green-600"
                  />
                </div>
                <div>
                  <div class="font-semibold text-gray-900">
                    {{ shipping?.sidebar?.contact?.hours }}
                  </div>
                  <div class="text-gray-600 text-sm">
                    {{ shipping?.sidebar?.contact?.hoursTime }}
                  </div>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3"
                >
                  <Icon
                    name="heroicons:phone-20-solid"
                    class="w-5 h-5 text-red-600"
                  />
                </div>
                <div>
                  <div class="font-semibold text-gray-900">
                    {{ shipping?.sidebar?.contact?.emergency }}
                  </div>
                  <div class="text-gray-600 text-sm">+86 183 0240 7790</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <!-- <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3
              class="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200"
            >
              {{ shipping?.sidebar?.quickLinks?.title }}
            </h3>
            <ul class="space-y-2">
              <li
                v-for="link in shipping?.sidebar?.quickLinks?.links"
                :key="link.key"
              >
                <a
                  :href="link.href"
                  :target="link.external ? '_blank' : '_self'"
                  class="flex items-center text-gray-700 hover:text-blue-600 hover:pl-2 transition-all duration-200 py-2 border-b border-gray-50"
                >
                  <Icon
                    name="heroicons:chevron-right-20-solid"
                    class="w-4 h-4 text-blue-500 mr-2"
                  />
                  {{ link.text }}
                </a>
              </li>
            </ul>
          </div> -->

          <!-- Shipping Partners -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3
              class="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200"
            >
              {{ shipping?.sidebar?.partners?.title }}
            </h3>
            <p class="text-gray-600 mb-4">
              {{ shipping?.sidebar?.partners?.description }}
            </p>
            <ul class="space-y-3">
              <li
                v-for="partner in shipping?.sidebar?.partners?.list"
                :key="partner"
                class="flex items-center"
              >
                <Icon
                  name="heroicons:check-circle-20-solid"
                  class="w-5 h-5 text-green-500 mr-3"
                />
                <span class="text-gray-700">{{ partner }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const { locale } = useI18n();

  // 获取shipping页面数据
  const { data: shipping } = await useAsyncData(
    'shipping',
    async () => {
      // 根据当前语言构建集合名称
      const collection = 'shipping_' + locale.value;
      const content = await queryCollection(collection).first();
      // 可选：如果内容缺失，回退到默认语言
      if (!content && locale.value !== 'en') {
        return await queryCollection('shipping_en').first();
      }
      return content?.body;
    },
    {
      watch: [locale],
      server: true,
    }
  );

  // Meta tags
  useSeoMeta({
    title: shipping.value?.seo?.title || 'Shipping Policy | TIDELINE SWIMWEAR',
    description:
      shipping.value?.seo?.description ||
      'Reliable global shipping solutions for your swimwear business needs.',
    keywords:
      shipping.value?.seo?.keywords ||
      'swimwear shipping, global shipping, express courier',
    ogTitle:
      shipping.value?.seo?.ogTitle ||
      shipping.value?.seo?.title ||
      'Shipping Policy | TIDELINE SWIMWEAR',
    ogDescription:
      shipping.value?.seo?.ogDescription ||
      shipping.value?.seo?.description ||
      'Reliable global shipping solutions for your swimwear business needs.',
    ogType: shipping.value?.seo?.ogType || 'website',
    ogSiteName: 'TIDELINE SWIMWEAR',
    ogImage: shipping.value?.seo?.ogImage || '/shipping.webp',
    twitterCard: shipping.value?.seo?.twitterCard || 'summary_large_image',
    twitterTitle:
      shipping.value?.seo?.twitterTitle ||
      shipping.value?.seo?.title ||
      'Shipping Policy | TIDELINE SWIMWEAR',
    twitterDescription:
      shipping.value?.seo?.twitterDescription ||
      shipping.value?.seo?.description ||
      'Reliable global shipping solutions for your swimwear business needs.',
  });

  // 添加结构化数据
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'TIDELINE SWIMWEAR',
          url: 'https://swimsuitcustom.com',
          logo: 'https://swimsuitcustom.com/tidelinelogo-600.png',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+86-183-0240-7790',
            contactType: 'Customer Service',
            email: 'tidelineswim@swimsuitcustom.com',
            availableLanguage: ['English', 'Chinese'],
          },
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'CN',
          },
        }),
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Shipping Policy',
          description:
            'Reliable global shipping solutions for your swimwear business needs. Express & sea freight options, worldwide coverage to 150+ countries.',
          url: 'https://swimsuitcustom.com/shipping',
          mainEntity: {
            '@type': 'Service',
            name: 'Global Shipping Services',
            provider: {
              '@type': 'Organization',
              name: 'TIDELINE SWIMWEAR',
            },
            areaServed: {
              '@type': 'Place',
              name: 'Worldwide',
            },
            description:
              'We provide shipping services to over 150 countries worldwide with express courier, air freight, and sea freight options.',
          },
        }),
      },
    ],
  });

  // Reactive data
  const trackingNumber = ref('');

  // Methods
  const trackOrder = () => {
    if (!trackingNumber.value.trim()) {
      alert('Please enter a tracking number to check your shipment status.');
    } else {
      // 跳转到 17TRACK 网站并传递追踪号码
      const trackingUrl = `https://t.17track.net/#nums=${encodeURIComponent(trackingNumber.value)}`;
      window.open(trackingUrl, '_blank');
    }
  };
</script>
