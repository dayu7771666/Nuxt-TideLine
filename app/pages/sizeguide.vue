<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero Section -->
    <Hero
      :title="sizeguide?.title"
      :description="sizeguide?.description"
      :image="sizeguide?.hero?.image"
      :alt="sizeguide?.hero?.alt"
    >
      <a
        href="https://wa.me/8618302407790"
        class="flex cursor-pointer items-center mt-10 gap-x-2 rounded-full bg-blue-500 px-9 py-4 font-semibold text-white shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <i class="fas fa-chart-line text-white"></i>
        {{ sizeguide?.hero?.ctaButton }}
      </a>
    </Hero>
    <!-- Main Content -->
    <div class="container max-w-6xl mx-auto px-5 py-20">
      <!-- Measurement Guide Section -->
      <section
        class="bg-white rounded-xl shadow-lg p-12 mb-12 relative overflow-hidden"
      >
        <div
          class="absolute top-0 right-0 w-48 h-full bg-cover bg-top opacity-5"
          style="
            background-image: url('https://images.unsplash.com/photo-1505635552518-344fa7d6dcc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80');
          "
        ></div>
        <h2
          class="text-3xl font-bold text-blue-900 mb-8 pb-4 border-b-2 border-gray-200 flex items-center relative"
        >
          <i class="fas fa-ruler-combined text-blue-500 mr-3"></i>
          {{ sizeguide?.measurementGuide?.title }}
        </h2>
        <p class="text-gray-700 mb-8 text-lg">
          {{ sizeguide?.measurementGuide?.description }}
        </p>

        <!-- 左侧图片，右侧4个box的布局 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 items-start">
          <!-- 左侧图片区域 -->
          <div class="relative rounded-xl overflow-hidden group h-full">
            <NuxtImg
              src="/sizeguide/sizeguide.webp"
              alt="测量指南示意图"
              class="w-[350px] h-[500px] object-top transition-transform duration-300 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>

          <!-- 右侧4个box + Professional Fitting Tip -->
          <div class="flex flex-col gap-4">
            <div
              v-for="(measurement, index) in sizeguide?.measurementGuide
                ?.measurements"
              :key="index"
              class="p-6 bg-blue-50 rounded-xl hover:transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500"
            >
              <h4 class="text-lg font-semibold mb-2 text-blue-900">
                {{ measurement.title }}
              </h4>
              <p class="text-gray-700 text-sm">{{ measurement.description }}</p>
            </div>
          </div>
        </div>

        <div
          class="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-900 p-6 mt-8 rounded-r-xl relative"
        >
          <i
            class="fas fa-info-circle absolute top-5 left-5 text-blue-900 text-xl"
          ></i>
          <h4 class="font-semibold text-lg mb-3 ml-8">
            {{ sizeguide?.measurementGuide?.tip?.title }}
          </h4>
          <p class="text-gray-700 ml-8">
            {{ sizeguide?.measurementGuide?.tip?.description }}
          </p>
        </div>
      </section>

      <!-- Body Type Section -->
      <section class="mb-12">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <!-- Title -->
          <div class="p-12 pb-6">
            <h2
              class="text-3xl font-bold text-blue-900 pb-4 border-b-2 border-gray-200"
            >
              {{ sizeguide?.bodyTypeIdentification?.title }}
            </h2>
          </div>

          <!-- Full-screen Image -->
          <div class="relative w-full h-[450px] overflow-hidden px-12">
            <NuxtImg
              :src="sizeguide?.bodyTypeIdentification?.image"
              :alt="sizeguide?.bodyTypeIdentification?.imageAlt"
              class="w-full h-full object-cover object-top rounded-none"
            />
          </div>

          <!-- Body Type Measurement Instructions -->
          <div class="p-12 pt-8">
            <p class="text-gray-700 text-lg mb-6">
              {{ sizeguide?.bodyTypeIdentification?.description }}
            </p>

            <div class="space-y-4 mb-6">
              <div
                v-for="(measurement, index) in sizeguide?.bodyTypeIdentification
                  ?.measurements"
                :key="index"
                class="flex items-start"
              >
                <div class="flex-shrink-0 w-32 font-semibold text-blue-900">
                  {{ measurement.label }}:
                </div>
                <p class="text-gray-700">
                  {{ measurement.description }}
                </p>
              </div>
            </div>

            <div
              class="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-900 p-6 rounded-r-xl"
            >
              <p class="text-gray-700">
                <strong
                  >{{ sizeguide?.bodyTypeIdentification?.note?.title }}:</strong
                >
                {{ sizeguide?.bodyTypeIdentification?.note?.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Category Size Guides -->
      <!-- <section
        class="bg-white rounded-xl shadow-lg p-12 mb-12 relative overflow-hidden"
      >
        <div
          class="absolute top-0 right-0 w-48 h-full bg-cover bg-top opacity-5"
          style="
            background-image: url('https://images.unsplash.com/photo-1505635552518-344fa7d6dcc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80');
          "
        ></div>
        <h2
          class="text-3xl font-bold text-blue-900 mb-8 pb-4 border-b-2 border-gray-200 flex items-center relative"
        >
          <i class="fas fa-users text-blue-500 mr-3"></i>
          {{ sizeguide?.sizeGuides?.title }}
        </h2>
        <p class="text-gray-700 mb-8 text-lg">
          {{ sizeguide?.sizeGuides?.description }}
        </p>

        <div class="mb-8">
          <div class="flex flex-wrap bg-gray-100 rounded-t-xl overflow-hidden">
            <button
              v-for="(tab, index) in sizeguide?.sizeGuides?.tabs"
              :key="index"
              @click="activeTab = tab.id"
              :class="[
                'flex-1 min-w-48 p-4 font-semibold transition-all duration-300 flex items-center justify-center',
                activeTab === tab.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
              ]"
            >
              <i :class="tab.icon + ' mr-2'"></i>
              {{ tab.name }}
            </button>
          </div>

          <div
            v-show="activeTab === 'womens-swim'"
            class="p-8 bg-white rounded-b-xl border border-t-0 border-gray-200"
          >
            <div
              class="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl mb-6 border-l-4 border-blue-500"
            >
              <h3 class="text-xl font-semibold flex items-center mb-3">
                <i class="fas fa-female mr-3"></i>
                {{ sizeguide?.sizeGuides?.womensSwim?.title }}
              </h3>
              <p class="text-gray-700">
                {{ sizeguide?.sizeGuides?.womensSwim?.description }}
              </p>
            </div>

            <div class="overflow-x-auto mb-8 rounded-xl shadow-md">
              <table class="w-full border-collapse">
                <thead>
                  <tr
                    class="bg-gradient-to-r from-blue-400 to-blue-500 text-white"
                  >
                    <th class="p-4 text-center border border-gray-300">尺码</th>
                    <th class="p-4 text-center border border-gray-300">
                      胸围 (cm/in)
                    </th>
                    <th class="p-4 text-center border border-gray-300">
                      下胸围 (cm/in)
                    </th>
                    <th class="p-4 text-center border border-gray-300">罩杯</th>
                    <th class="p-4 text-center border border-gray-300">
                      腰围 (cm/in)
                    </th>
                    <th class="p-4 text-center border border-gray-300">
                      臀围 (cm/in)
                    </th>
                    <th class="p-4 text-center border border-gray-300">美码</th>
                    <th class="p-4 text-center border border-gray-300">
                      澳/英码
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="even:bg-gray-50 hover:bg-blue-50 transition-colors"
                  >
                    <td
                      class="p-4 text-center border border-gray-300 font-semibold"
                    >
                      S
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      82-86 / 32-34
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      68-72 / 27-28
                    </td>
                    <td class="p-4 text-center border border-gray-300">A-B</td>
                    <td class="p-4 text-center border border-gray-300">
                      64-68 / 25-27
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      88-92 / 34.5-36
                    </td>
                    <td class="p-4 text-center border border-gray-300">4-6</td>
                    <td class="p-4 text-center border border-gray-300">8-10</td>
                  </tr>
                  <tr
                    class="even:bg-gray-50 hover:bg-blue-50 transition-colors"
                  >
                    <td
                      class="p-4 text-center border border-gray-300 font-semibold"
                    >
                      M
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      87-91 / 34-36
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      73-77 / 29-30
                    </td>
                    <td class="p-4 text-center border border-gray-300">B-C</td>
                    <td class="p-4 text-center border border-gray-300">
                      69-73 / 27-29
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      93-97 / 36.5-38
                    </td>
                    <td class="p-4 text-center border border-gray-300">8-10</td>
                    <td class="p-4 text-center border border-gray-300">
                      12-14
                    </td>
                  </tr>
                  <tr
                    class="even:bg-gray-50 hover:bg-blue-50 transition-colors"
                  >
                    <td
                      class="p-4 text-center border border-gray-300 font-semibold"
                    >
                      L
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      92-96 / 36-38
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      78-82 / 31-32
                    </td>
                    <td class="p-4 text-center border border-gray-300">C-D</td>
                    <td class="p-4 text-center border border-gray-300">
                      74-78 / 29-31
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      98-102 / 38.5-40
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      12-14
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      16-18
                    </td>
                  </tr>
                  <tr
                    class="even:bg-gray-50 hover:bg-blue-50 transition-colors"
                  >
                    <td
                      class="p-4 text-center border border-gray-300 font-semibold"
                    >
                      XL
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      97-101 / 38-40
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      83-87 / 33-34
                    </td>
                    <td class="p-4 text-center border border-gray-300">D-DD</td>
                    <td class="p-4 text-center border border-gray-300">
                      79-83 / 31-33
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      103-107 / 40.5-42
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      16-18
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      20-22
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 class="text-xl font-semibold mb-4">罩杯尺寸指南</h4>
            <div class="overflow-x-auto rounded-xl shadow-md">
              <table class="w-full border-collapse">
                <thead>
                  <tr
                    class="bg-gradient-to-r from-blue-400 to-blue-500 text-white"
                  >
                    <th class="p-4 text-center border border-gray-300">
                      罩杯尺寸
                    </th>
                    <th class="p-4 text-center border border-gray-300">
                      胸围-下胸围差值 (cm)
                    </th>
                    <th class="p-4 text-center border border-gray-300">
                      胸围-下胸围差值 (英寸)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="even:bg-gray-50 hover:bg-blue-50 transition-colors"
                  >
                    <td
                      class="p-4 text-center border border-gray-300 font-semibold"
                    >
                      A
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      10-12 cm
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      4-5 英寸
                    </td>
                  </tr>
                  <tr
                    class="even:bg-gray-50 hover:bg-blue-50 transition-colors"
                  >
                    <td
                      class="p-4 text-center border border-gray-300 font-semibold"
                    >
                      B
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      13-14 cm
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      5-5.5 英寸
                    </td>
                  </tr>
                  <tr
                    class="even:bg-gray-50 hover:bg-blue-50 transition-colors"
                  >
                    <td
                      class="p-4 text-center border border-gray-300 font-semibold"
                    >
                      C
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      15-16 cm
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      6-6.5 英寸
                    </td>
                  </tr>
                  <tr
                    class="even:bg-gray-50 hover:bg-blue-50 transition-colors"
                  >
                    <td
                      class="p-4 text-center border border-gray-300 font-semibold"
                    >
                      D
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      17-18 cm
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      7-7.5 英寸
                    </td>
                  </tr>
                  <tr
                    class="even:bg-gray-50 hover:bg-blue-50 transition-colors"
                  >
                    <td
                      class="p-4 text-center border border-gray-300 font-semibold"
                    >
                      DD/E
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      19-20 cm
                    </td>
                    <td class="p-4 text-center border border-gray-300">
                      8-8.5 英寸
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section> -->

      <!-- Platform Optimization Section -->
      <section
        class="bg-white rounded-xl shadow-lg p-12 mb-12 relative overflow-hidden"
      >
        <div
          class="absolute top-0 right-0 w-48 h-full bg-cover bg-top opacity-5"
          style="
            background-image: url('https://images.unsplash.com/photo-1505635552518-344fa7d6dcc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80');
          "
        ></div>
        <h2
          class="text-3xl font-bold text-blue-900 mb-8 pb-4 border-b-2 border-gray-200 flex items-center relative"
        >
          <i class="fas fa-shopping-cart text-blue-500 mr-3"></i>
          {{ sizeguide?.platformOptimization?.title }}
        </h2>
        <p class="text-gray-700 mb-8 text-lg">
          {{ sizeguide?.platformOptimization?.description }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div
            v-for="(platform, index) in sizeguide?.platformOptimization
              ?.platforms"
            :key="index"
            class="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-blue-400 hover:transform hover:-translate-y-2 transition-all duration-300"
          >
            <div
              class="bg-gradient-to-r from-gray-50 to-gray-100 p-5 flex items-center gap-4"
            >
              <div
                class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl"
              >
                <i :class="platform.icon"></i>
              </div>
              <div>
                <h3 class="font-semibold text-lg">{{ platform.name }}</h3>
                <p class="text-gray-600 text-sm">{{ platform.subtitle }}</p>
              </div>
            </div>
            <div class="p-5">
              <p class="text-gray-700 mb-4">
                {{ platform.description }}
              </p>
              <ul class="space-y-2 mb-4">
                <li
                  v-for="(feature, featureIndex) in platform.features"
                  :key="featureIndex"
                  class="flex items-center text-sm text-gray-600"
                >
                  <i class="fas fa-check text-green-500 mr-2 text-xs"></i>
                  {{ feature }}
                </li>
              </ul>
              <a
                href="https://wa.me/8618302407790"
                class="inline-block bg-blue-500 hover:bg-blue-400 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
              >
                {{ platform.ctaText }}
              </a>
            </div>
          </div>
        </div>

        <div
          class="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 mt-8 rounded-r-xl relative"
        >
          <i
            class="fas fa-info-circle absolute top-5 left-5 text-blue-500 text-xl"
          ></i>
          <h4 class="font-semibold text-lg mb-3 ml-8">
            {{ sizeguide?.platformOptimization?.tip?.title }}
          </h4>
          <p class="text-gray-700 ml-8">
            {{ sizeguide?.platformOptimization?.tip?.description }}
          </p>
        </div>
      </section>

      <!-- Consultation Section -->
      <section
        id="consultation"
        class="relative bg-blue-500 text-white py-20 text-center rounded-xl overflow-hidden"
        style="
          background-image:
            linear-gradient(
              135deg,
              rgba(59, 130, 246, 0.9),
              rgba(96, 165, 250, 0.9)
            ),
            url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
        "
      >
        <div class="absolute inset-0 bg-blue-500 bg-opacity-85"></div>
        <div class="relative z-10 px-10">
          <h2 class="text-4xl font-bold mb-5">
            {{ sizeguide?.consultation?.title }}
          </h2>
          <p class="text-lg mb-8 max-w-3xl mx-auto">
            {{ sizeguide?.consultation?.description }}
          </p>

          <div class="flex flex-wrap justify-center gap-5 mb-10">
            <a
              href="https://wa.me/8618302407790"
              class="inline-block bg-green-500 hover:bg-green-600 text-white px-9 py-4 rounded-full font-semibold text-lg transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {{ sizeguide?.consultation?.primaryButton?.text }}
            </a>
            <button
              @click="showCustomToolsModal = true"
              class="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-500 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              {{ sizeguide?.consultation?.secondaryButton?.text }}
            </button>
          </div>

          <div class="text-lg">
            <p>
              Contact our sizing specialists:
              <strong>{{ sizeguide?.consultation?.contact?.email }}</strong> |
              <strong>{{ sizeguide?.consultation?.contact?.phone }}</strong>
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-white">
            <div
              v-for="(feature, index) in sizeguide?.consultation?.features"
              :key="index"
              class="flex items-start space-x-4 bg-white bg-opacity-10 p-6 rounded-xl"
            >
              <i
                :class="
                  feature.icon + ' text-green-400 text-2xl flex-shrink-0 mt-1'
                "
              ></i>
              <div class="text-left">
                <h4 class="font-semibold text-lg mb-2">{{ feature.title }}</h4>
                <p class="text-sm">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- 定制尺码工具弹窗 -->
    <Transition
      name="modal"
      appear
    >
      <div
        v-if="showCustomToolsModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        @click="closeCustomToolsModal"
      >
        <div
          class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          @click.stop
        >
          <div
            class="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 rounded-t-2xl"
          >
            <div class="flex items-center justify-between">
              <h2 class="text-2xl font-bold text-gray-900">
                Request Custom Size Tools
              </h2>
              <button
                @click="showCustomToolsModal = false"
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
              :form-labels="customToolsFormLabels"
              @submit-success="handleCustomToolsSuccess"
              @submit-error="handleCustomToolsError"
            />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  // 获取国际化
  const { locale } = useI18n();

  // 获取sizeguide页面数据
  const { data: sizeguide } = await useAsyncData(
    'sizeguide',
    async () => {
      // 根据当前语言构建集合名称
      const collection = 'sizeguide_' + locale.value;
      const content = await queryCollection(collection).first();
      // 可选：如果内容缺失，回退到默认语言
      if (!content && locale.value !== 'en') {
        return await queryCollection('sizeguide_en').first();
      }
      return content?.body;
    },
    {
      watch: [locale],
      server: true,
    }
  );

  // SEO Meta
  useSeoMeta({
    title:
      sizeguide.value?.seo?.title ||
      'Professional Swimwear Size Guide | TIDELINE SWIMWEAR',
    description:
      sizeguide.value?.seo?.description ||
      'Comprehensive size guides and e-commerce optimization tools for B2B partners and online retailers',
    keywords:
      sizeguide.value?.seo?.keywords ||
      'swimwear size guide, swimsuit sizing, bikini size chart',
    ogTitle:
      sizeguide.value?.seo?.ogTitle ||
      sizeguide.value?.seo?.title ||
      'Professional Swimwear Size Guide | TIDELINE SWIMWEAR',
    ogDescription:
      sizeguide.value?.seo?.ogDescription ||
      sizeguide.value?.seo?.description ||
      'Comprehensive size guides and e-commerce optimization tools for B2B partners and online retailers',
    ogType: sizeguide.value?.seo?.ogType || 'website',
    ogSiteName: 'TIDELINE SWIMWEAR',
    ogImage: sizeguide.value?.seo?.ogImage || '/sizeguide/sizeguide-hero.webp',
    twitterCard: sizeguide.value?.seo?.twitterCard || 'summary_large_image',
    twitterTitle:
      sizeguide.value?.seo?.twitterTitle ||
      sizeguide.value?.seo?.title ||
      'Professional Swimwear Size Guide | TIDELINE SWIMWEAR',
    twitterDescription:
      sizeguide.value?.seo?.twitterDescription ||
      sizeguide.value?.seo?.description ||
      'Comprehensive size guides and e-commerce optimization tools for B2B partners and online retailers',
  });

  // 添加额外的 head 配置（Font Awesome 等）
  useHead({
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name:
            sizeguide.value?.seo?.title || 'Professional Swimwear Size Guide',
          description:
            sizeguide.value?.seo?.description ||
            'Comprehensive size guides and e-commerce optimization tools',
          url: 'https://swimsuitcustom.com/sizeguide',
          mainEntity: {
            '@type': 'HowTo',
            name: 'How to Measure for Swimwear',
            description:
              'Professional guide for accurate swimwear measurements',
            step: [
              {
                '@type': 'HowToStep',
                name: 'Measure Bust',
                text: 'Measure over the fullest area of the bust and straight around the back',
              },
              {
                '@type': 'HowToStep',
                name: 'Measure Underbust',
                text: 'Measure directly under the bust and straight around the back',
              },
              {
                '@type': 'HowToStep',
                name: 'Measure Waist',
                text: 'The waist is below the abdomen between the ribcage and hips',
              },
              {
                '@type': 'HowToStep',
                name: 'Measure Hip',
                text: 'Measure the fullest part of the hip ensuring the tape is straight around the body',
              },
            ],
          },
        }),
      },
    ],
  });

  // Reactive data
  const activeTab = ref('womens-swim');
  const showTooltip = ref(null);

  // 弹窗状态管理
  const showConsultationModal = ref(false);
  const showCustomToolsModal = ref(false);

  // 专业尺码咨询表单标签
  const consultationFormLabels = computed(() => ({
    nameLabel: 'Full Name',
    namePlaceholder: 'Enter your full name',
    emailLabel: 'Email Address',
    emailPlaceholder: 'Enter your email address',
    messageLabel: 'Consultation Requirements',
    messagePlaceholder:
      'Please describe your sizing consultation needs, target market, and specific requirements...',
    consentText:
      'I agree to receive sizing consultation updates from Tideline.',
    submitButton: 'Request Consultation',
    successMessage:
      'Thank you! Our sizing specialist will contact you within 24 hours.',
    errorMessage:
      'Submission failed. Please try again or contact our support team.',
  }));

  // 定制尺码工具表单标签
  const customToolsFormLabels = computed(() => ({
    nameLabel: 'Full Name',
    namePlaceholder: 'Enter your full name',
    emailLabel: 'Email Address',
    emailPlaceholder: 'Enter your email address',
    messageLabel: 'Custom Tools Requirements',
    messagePlaceholder:
      'Please describe your custom size tools needs, platform requirements, and specific features...',
    consentText: 'I agree to receive custom tools updates from Tideline.',
    submitButton: 'Request Custom Tools',
    successMessage:
      'Thank you! We will prepare your custom sizing tools and contact you soon.',
    errorMessage:
      'Submission failed. Please try again or contact our support team.',
  }));

  // 关闭弹窗函数
  const closeConsultationModal = () => {
    showConsultationModal.value = false;
  };

  const closeCustomToolsModal = () => {
    showCustomToolsModal.value = false;
  };

  // 处理专业咨询表单成功提交
  const handleConsultationSuccess = response => {
    console.log('Consultation form submitted successfully:', response);
    setTimeout(() => {
      showConsultationModal.value = false;
    }, 2000);
  };

  // 处理专业咨询表单提交错误
  const handleConsultationError = error => {
    console.error('Consultation form submission error:', error);
  };

  // 处理定制工具表单成功提交
  const handleCustomToolsSuccess = response => {
    console.log('Custom tools form submitted successfully:', response);
    setTimeout(() => {
      showCustomToolsModal.value = false;
    }, 2000);
  };

  // 处理定制工具表单提交错误
  const handleCustomToolsError = error => {
    console.error('Custom tools form submission error:', error);
  };

  // 键盘事件处理 - ESC键关闭弹窗
  onMounted(() => {
    const handleKeydown = event => {
      if (event.key === 'Escape') {
        if (showConsultationModal.value) {
          showConsultationModal.value = false;
        }
        if (showCustomToolsModal.value) {
          showCustomToolsModal.value = false;
        }
      }
    };

    document.addEventListener('keydown', handleKeydown);

    onUnmounted(() => {
      document.removeEventListener('keydown', handleKeydown);
    });
  });
</script>

<style scoped>
  /* Additional custom styles if needed */
  .fade-in {
    animation: fadeIn 0.5s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* 弹窗动画过渡效果 */
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

  /* 弹窗内容动画 */
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
</style>
