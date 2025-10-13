<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <Hero
      :title="fabricData?.hero?.title"
      :description="fabricData?.hero?.description"
      image="/sampling.webp"
      :alt="fabricData?.hero?.alt || 'Premium Fabric Selection'"
      pt="pt-36"
      pb="pb-40"
      text-color="white"
      :decorations="false"
    >
      <!-- PDF Buttons -->
      <div class="flex flex-wrap gap-4 justify-center mt-10">
        <!-- Polyester Fabric Button -->
        <a
          :href="fabricData?.catalog?.pdfs?.[0]?.file"
          target="_blank"
          class="inline-flex cursor-pointer items-center gap-x-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <DocumentTextIcon class="w-5 h-5" />
          {{ fabricData?.catalog?.pdfs?.[0]?.title }}
        </a>

        <!-- Sustainable Fabric Button -->
        <a
          :href="fabricData?.catalog?.pdfs?.[1]?.file"
          target="_blank"
          class="inline-flex cursor-pointer items-center gap-x-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <DocumentTextIcon class="w-5 h-5" />
          {{ fabricData?.catalog?.pdfs?.[1]?.title }}
        </a>

        <!-- UV Protection Fabric Button -->
        <a
          :href="fabricData?.catalog?.pdfs?.[2]?.file"
          target="_blank"
          class="inline-flex cursor-pointer items-center gap-x-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <DocumentTextIcon class="w-5 h-5" />
          {{ fabricData?.catalog?.pdfs?.[2]?.title }}
        </a>
      </div>
    </Hero>

    <!-- Fabric Features Section -->
    <HomeServiceAdvantages
      :title="fabricData?.features?.title"
      :description="fabricData?.features?.description || ''"
      :advantages="fabricData?.features?.items || []"
      :show-numbers="false"
      :grid-cols="3"
      :decorations="true"
    />

    <!-- PDF Catalog Section -->
    <section
      id="catalog"
      class="py-20 bg-white scroll-mt-20"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2
            class="text-3xl py-2 font-bold tracking-tight bg-gradient-to-r from-slate-800 via-blue-600 to-pink-600 bg-clip-text text-transparent sm:text-4xl"
          >
            {{ fabricData?.catalog?.title }}
          </h2>
          <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {{ fabricData?.catalog?.description }}
          </p>
        </div>

        <!-- PDF Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Card 1: Polyester Fabric -->
          <div
            class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300 overflow-hidden flex flex-col"
          >
            <!-- Hover Gradient Background -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <!-- Card Content -->
            <div class="relative z-10 p-8 flex-1 flex flex-col">
              <!-- Icon -->
              <div class="flex justify-center mb-6">
                <div class="relative">
                  <!-- Icon Glow Effect -->
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"
                  ></div>
                  <!-- Icon Container -->
                  <div
                    class="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 transition-all duration-500 group-hover:scale-110"
                  >
                    <DocumentTextIcon class="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>

              <!-- Title & Description -->
              <div class="text-center mb-6 flex-1">
                <h3
                  class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors"
                >
                  {{ fabricData?.catalog?.pdfs?.[0]?.title }}
                </h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  {{ fabricData?.catalog?.pdfs?.[0]?.description }}
                </p>

                <!-- Features List -->
                <ul class="text-sm text-gray-500 space-y-2 mb-6">
                  <li
                    v-for="(feature, fIndex) in fabricData?.catalog?.pdfs?.[0]
                      ?.features"
                    :key="fIndex"
                    class="flex items-center justify-center gap-2"
                  >
                    <CheckCircleIcon
                      class="h-5 w-5 text-green-500 flex-shrink-0"
                    />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <!-- Download Button (Fixed at bottom) -->
              <div class="mt-auto">
                <a
                  :href="fabricData?.catalog?.pdfs?.[0]?.file"
                  target="_blank"
                  class="block w-full text-center px-6 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 group-hover:scale-105"
                >
                  <span class="flex items-center justify-center gap-2">
                    <ArrowDownTrayIcon class="h-5 w-5" />
                    {{ fabricData?.catalog?.viewButtonText || 'View Catalog' }}
                  </span>
                </a>

                <!-- File Info -->
                <p class="text-xs text-gray-400 text-center mt-3">
                  {{ fabricData?.catalog?.pdfs?.[0]?.fileInfo }}
                </p>
              </div>
            </div>

            <!-- Bottom Accent Line -->
            <div
              class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600"
            ></div>
          </div>

          <!-- Card 2: Sustainable Fabric -->
          <div
            class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-green-300 overflow-hidden flex flex-col"
          >
            <!-- Hover Gradient Background -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <!-- Card Content -->
            <div class="relative z-10 p-8 flex-1 flex flex-col">
              <!-- Icon -->
              <div class="flex justify-center mb-6">
                <div class="relative">
                  <!-- Icon Glow Effect -->
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"
                  ></div>
                  <!-- Icon Container -->
                  <div
                    class="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 transition-all duration-500 group-hover:scale-110"
                  >
                    <DocumentTextIcon class="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>

              <!-- Title & Description -->
              <div class="text-center mb-6 flex-1">
                <h3
                  class="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-900 transition-colors"
                >
                  {{ fabricData?.catalog?.pdfs?.[1]?.title }}
                </h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  {{ fabricData?.catalog?.pdfs?.[1]?.description }}
                </p>

                <!-- Features List -->
                <ul class="text-sm text-gray-500 space-y-2 mb-6">
                  <li
                    v-for="(feature, fIndex) in fabricData?.catalog?.pdfs?.[1]
                      ?.features"
                    :key="fIndex"
                    class="flex items-center justify-center gap-2"
                  >
                    <CheckCircleIcon
                      class="h-5 w-5 text-green-500 flex-shrink-0"
                    />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <!-- Download Button (Fixed at bottom) -->
              <div class="mt-auto">
                <a
                  :href="fabricData?.catalog?.pdfs?.[1]?.file"
                  target="_blank"
                  class="block w-full text-center px-6 py-3 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition-all duration-300 group-hover:scale-105"
                >
                  <span class="flex items-center justify-center gap-2">
                    <ArrowDownTrayIcon class="h-5 w-5" />
                    {{ fabricData?.catalog?.viewButtonText || 'View Catalog' }}
                  </span>
                </a>

                <!-- File Info -->
                <p class="text-xs text-gray-400 text-center mt-3">
                  {{ fabricData?.catalog?.pdfs?.[1]?.fileInfo }}
                </p>
              </div>
            </div>

            <!-- Bottom Accent Line -->
            <div
              class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-emerald-600"
            ></div>
          </div>

          <!-- Card 3: UV Protection Fabric -->
          <div
            class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-purple-300 overflow-hidden flex flex-col"
          >
            <!-- Hover Gradient Background -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <!-- Card Content -->
            <div class="relative z-10 p-8 flex-1 flex flex-col">
              <!-- Icon -->
              <div class="flex justify-center mb-6">
                <div class="relative">
                  <!-- Icon Glow Effect -->
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"
                  ></div>
                  <!-- Icon Container -->
                  <div
                    class="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 transition-all duration-500 group-hover:scale-110"
                  >
                    <DocumentTextIcon class="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>

              <!-- Title & Description -->
              <div class="text-center mb-6 flex-1">
                <h3
                  class="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-900 transition-colors"
                >
                  {{ fabricData?.catalog?.pdfs?.[2]?.title }}
                </h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  {{ fabricData?.catalog?.pdfs?.[2]?.description }}
                </p>

                <!-- Features List -->
                <ul class="text-sm text-gray-500 space-y-2 mb-6">
                  <li
                    v-for="(feature, fIndex) in fabricData?.catalog?.pdfs?.[2]
                      ?.features"
                    :key="fIndex"
                    class="flex items-center justify-center gap-2"
                  >
                    <CheckCircleIcon
                      class="h-5 w-5 text-green-500 flex-shrink-0"
                    />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <!-- Download Button (Fixed at bottom) -->
              <div class="mt-auto">
                <a
                  :href="fabricData?.catalog?.pdfs?.[2]?.file"
                  target="_blank"
                  class="block w-full text-center px-6 py-3 rounded-lg font-semibold bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 group-hover:scale-105"
                >
                  <span class="flex items-center justify-center gap-2">
                    <ArrowDownTrayIcon class="h-5 w-5" />
                    {{ fabricData?.catalog?.viewButtonText || 'View Catalog' }}
                  </span>
                </a>

                <!-- File Info -->
                <p class="text-xs text-gray-400 text-center mt-3">
                  {{ fabricData?.catalog?.pdfs?.[2]?.fileInfo }}
                </p>
              </div>
            </div>

            <!-- Bottom Accent Line -->
            <div
              class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600"
            ></div>
          </div>
        </div>

        <!-- Additional Info -->
        <div
          v-if="fabricData?.catalog?.note"
          class="mt-12 text-center"
        >
          <div
            class="inline-flex items-center gap-3 px-6 py-4 bg-blue-50 border border-blue-200 rounded-xl"
          >
            <InformationCircleIcon
              class="h-6 w-6 text-blue-600 flex-shrink-0"
            />
            <p class="text-sm text-blue-900">
              {{ fabricData?.catalog?.note }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Our Fabrics Section -->
    <section
      v-if="fabricData?.whyChoose"
      class="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            class="text-3xl py-2 font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent sm:text-4xl"
          >
            {{ fabricData?.whyChoose?.title }}
          </h2>
          <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {{ fabricData?.whyChoose?.description }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(reason, index) in fabricData?.whyChoose?.reasons"
            :key="index"
            class="flex gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div class="flex-shrink-0">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600"
              >
                <CheckBadgeIcon class="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                {{ reason.title }}
              </h3>
              <p class="text-gray-600">{{ reason.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <CTA
      :title="fabricData?.cta?.title"
      :description="fabricData?.cta?.description"
      :button="fabricData?.cta?.button"
      :link="fabricData?.cta?.link"
      variant="blue"
    />
  </div>
</template>

<script setup>
  import {
    SparklesIcon,
    DocumentTextIcon,
    ArrowDownTrayIcon,
    CheckCircleIcon,
    InformationCircleIcon,
    CheckBadgeIcon,
  } from '@heroicons/vue/24/outline';

  // Get internationalization
  const { locale } = useI18n();

  // Fetch fabric data from yml file
  const { data: fabricData } = await useAsyncData(
    `fabric-${locale.value}`,
    async () => {
      // Build collection name based on current locale
      const collection = 'fabric_' + locale.value;
      const content = await queryCollection(collection).first();
      // Optional: fallback to default locale if content is missing
      if (!content && locale.value !== 'en') {
        return await queryCollection('fabric_en').first();
      }
      return content?.body;
    },
    {
      watch: [locale],
    }
  );

  // SEO Meta
  useSeoMeta({
    title: fabricData.value?.seo?.title || 'Premium Fabrics | Tideline',
    description:
      fabricData.value?.seo?.description ||
      'Explore our premium fabric collection for swimwear manufacturing',
    ogTitle:
      fabricData.value?.seo?.ogTitle ||
      fabricData.value?.seo?.title ||
      'Premium Fabrics | Tideline',
    ogDescription:
      fabricData.value?.seo?.ogDescription ||
      fabricData.value?.seo?.description ||
      'Explore our premium fabric collection for swimwear manufacturing',
    ogImage: fabricData.value?.seo?.ogImage || '/fabric-hero.webp',
    twitterCard: fabricData.value?.seo?.twitterCard || 'summary_large_image',
  });
</script>
