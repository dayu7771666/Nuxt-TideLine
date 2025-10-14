<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <Hero
      :title="brandingData?.title"
      :description="brandingData?.description"
      image="/custom-brand-label-packing.webp"
      :alt="brandingData?.hero?.alt"
      pt="pt-36"
      pb="pb-40"
      text-color="white"
      :decorations="false"
    >
    </Hero>
    <!-- Introduction Section -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-800 via-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-4xl"
          >
            {{ brandingData?.introduction?.title }}
          </h2>
          <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {{ brandingData?.introduction?.description }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div
            v-for="feature in brandingData?.introduction?.features"
            :key="feature.title"
            class="text-center p-6"
          >
            <div
              :class="[
                'w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4',
                `bg-gradient-to-br ${getGradient(feature.gradient)}`,
              ]"
            >
              <component
                :is="getIcon(feature?.icon)"
                class="w-8 h-8 text-white"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Label Types Section -->
    <section
      id="labels"
      class="py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-20"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2
            class="text-3xl py-2 font-bold tracking-tight bg-gradient-to-r from-slate-800 via-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-4xl"
          >
            {{ brandingData?.labels?.title }}
          </h2>
          <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {{ brandingData?.labels?.description }}
          </p>
        </div>

        <!-- Labels Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="label in brandingData?.labels?.types"
            :key="label.id"
            class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden"
            :class="getHoverBorderClass(label.gradient)"
          >
            <div
              :class="`h-2 bg-gradient-to-r ${getGradient(label.gradient)}`"
            ></div>
            <div class="p-8">
              <div class="flex items-start gap-4">
                <div
                  :class="[
                    'flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center',
                    `bg-gradient-to-br ${getGradient(label.gradient)}`,
                  ]"
                >
                  <component
                    :is="getIcon(label?.icon)"
                    class="w-7 h-7 text-white"
                  />
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">
                    {{ label.name }}
                  </h3>
                  <p
                    :class="`text-sm font-semibold mb-3 ${getTextColor(label.gradient)}`"
                  >
                    {{ label.nameChinese }}
                  </p>
                  <div class="space-y-3 text-gray-600">
                    <p>
                      <span class="font-semibold text-gray-900"
                        >Technology:</span
                      >
                      {{ label.technology }}
                    </p>
                    <p>
                      <span class="font-semibold text-gray-900"
                        >Advantages:</span
                      >
                      {{ label.advantages }}
                    </p>
                    <p>
                      <span class="font-semibold text-gray-900">Best For:</span>
                      {{ label.bestFor }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Eco-Friendly Packaging Section -->
    <section
      id="packaging"
      class="py-20 bg-gradient-to-b from-green-50 to-white scroll-mt-20"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 mb-4">
            <CheckCircleIcon class="w-8 h-8 text-green-600" />
            <span class="text-green-600 font-semibold text-lg">
              {{ brandingData?.packaging?.badge }}
            </span>
          </div>
          <h2
            class="text-3xl py-2 font-bold tracking-tight bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent sm:text-4xl"
          >
            {{ brandingData?.packaging?.title }}
          </h2>
          <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {{ brandingData?.packaging?.description }}
          </p>
        </div>

        <!-- Packaging Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div
            v-for="feature in brandingData?.packaging?.features"
            :key="feature.title"
            class="bg-white rounded-2xl shadow-lg p-8 border-2 border-green-100 hover:border-green-300 transition-all duration-300"
          >
            <div
              :class="[
                'w-16 h-16 rounded-2xl flex items-center justify-center mb-6',
                `bg-gradient-to-br ${getGradient(feature.gradient)}`,
              ]"
            >
              <component
                :is="getIcon(feature?.icon)"
                class="w-8 h-8 text-white"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600">
              {{ feature.description }}
            </p>
          </div>
        </div>

        <!-- Packaging Types -->
        <div
          class="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-green-200"
        >
          <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">
            Available Packaging Options
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              v-for="type in brandingData?.packaging?.types"
              :key="type.title"
              class="flex gap-4"
            >
              <div
                :class="[
                  'flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center',
                  `bg-gradient-to-br ${getGradient(type.gradient)}`,
                ]"
              >
                <component
                  :is="getIcon(type?.icon)"
                  class="w-6 h-6 text-white"
                />
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">
                  {{ type.title }}
                </h4>
                <p class="text-gray-600">
                  {{ type.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Environmental Impact -->
        <div
          class="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <h3 class="text-3xl font-bold mb-4">
            {{ brandingData?.packaging?.impact?.title }}
          </h3>
          <p class="text-lg text-green-50 max-w-3xl mx-auto mb-8">
            {{ brandingData?.packaging?.impact?.description }}
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div
              v-for="stat in brandingData?.packaging?.impact?.stats"
              :key="stat.label"
              class="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <div class="text-4xl font-bold mb-2">{{ stat.value }}</div>
              <div class="text-green-50">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTA
      :title="brandingData?.cta?.title"
      :description="brandingData?.cta?.description"
      :button="brandingData?.cta?.button"
      :link="brandingData?.cta?.link"
      :variant="brandingData?.cta?.variant"
    />
  </div>
</template>

<script setup lang="ts">
  import {
    TagIcon,
    ArchiveBoxIcon,
    SparklesIcon,
    ShieldCheckIcon,
    DocumentTextIcon,
    ScissorsIcon,
    PrinterIcon,
    FireIcon,
    SwatchIcon,
    CubeIcon,
    StarIcon,
    HeartIcon,
    BoltIcon,
    LightBulbIcon,
    ArrowPathIcon,
    GlobeAltIcon,
    CheckBadgeIcon,
    CheckCircleIcon,
  } from '@heroicons/vue/24/outline';

  // Get internationalization
  const { locale } = useI18n();

  // Fetch branding data from yml file
  const { data: brandingData } = await useAsyncData(
    `branding-${locale.value}`,
    async () => {
      // Build collection name based on current locale
      const collection = `branding_${locale.value}` as any;
      const content = await queryCollection(collection).first();
      // Optional: fallback to default locale if content is missing
      if (!content && locale.value !== 'en') {
        return await queryCollection('branding_en').first();
      }
      return content?.body;
    },
    {
      watch: [locale],
    }
  );

  // Icon mapping helper - maps simple keys to actual icon components
  const iconMap: Record<string, any> = {
    sparkles: SparklesIcon,
    shield: ShieldCheckIcon,
    globe: GlobeAltIcon,
    scissors: ScissorsIcon,
    printer: PrinterIcon,
    fire: FireIcon,
    swatch: SwatchIcon,
    cube: CubeIcon,
    star: StarIcon,
    document: DocumentTextIcon,
    heart: HeartIcon,
    bolt: BoltIcon,
    lightbulb: LightBulbIcon,
    arrowPath: ArrowPathIcon,
    checkBadge: CheckBadgeIcon,
    checkCircle: CheckCircleIcon,
    archive: ArchiveBoxIcon,
    tag: TagIcon,
  };

  const getIcon = (iconKey: string) => {
    if (!iconKey) return SparklesIcon;
    return iconMap[iconKey] || SparklesIcon;
  };

  // Gradient mapping - converts simple color names to Tailwind gradient classes
  const gradientMap: Record<string, string> = {
    purple: 'from-purple-600 to-pink-600',
    blue: 'from-blue-600 to-cyan-600',
    orange: 'from-orange-600 to-red-600',
    indigo: 'from-indigo-600 to-purple-600',
    cyan: 'from-cyan-600 to-teal-600',
    amber: 'from-amber-700 to-orange-700',
    green: 'from-green-600 to-emerald-600',
    pink: 'from-pink-600 to-rose-600',
    violet: 'from-violet-600 to-purple-600',
    yellow: 'from-yellow-500 to-orange-500',
    emerald: 'from-emerald-500 to-teal-500',
    teal: 'from-teal-500 to-cyan-500',
  };

  const getGradient = (colorKey: string) => {
    if (!colorKey) return 'from-gray-500 to-gray-600';
    return gradientMap[colorKey] || 'from-gray-500 to-gray-600';
  };

  // Helper function to get hover border class based on color key
  const getHoverBorderClass = (colorKey: string) => {
    const borderMap: Record<string, string> = {
      purple: 'hover:border-purple-300',
      blue: 'hover:border-blue-300',
      orange: 'hover:border-orange-300',
      indigo: 'hover:border-indigo-300',
      cyan: 'hover:border-cyan-300',
      amber: 'hover:border-amber-300',
      green: 'hover:border-green-300',
      pink: 'hover:border-pink-300',
      violet: 'hover:border-violet-300',
      yellow: 'hover:border-yellow-300',
      emerald: 'hover:border-emerald-300',
      teal: 'hover:border-teal-300',
    };
    return borderMap[colorKey] || 'hover:border-gray-300';
  };

  // Helper function to get text color based on color key
  const getTextColor = (colorKey: string) => {
    const textColorMap: Record<string, string> = {
      purple: 'text-purple-600',
      blue: 'text-blue-600',
      orange: 'text-orange-600',
      indigo: 'text-indigo-600',
      cyan: 'text-cyan-600',
      amber: 'text-amber-700',
      green: 'text-green-600',
      pink: 'text-pink-600',
      violet: 'text-violet-600',
      yellow: 'text-yellow-600',
      emerald: 'text-emerald-600',
      teal: 'text-teal-600',
    };
    return textColorMap[colorKey] || 'text-gray-600';
  };

  // SEO Meta
  useSeoMeta({
    title:
      brandingData.value?.seo?.title ||
      'Custom Brand Labels & Packaging | Tideline Swimwear',
    description:
      brandingData.value?.seo?.description ||
      'Premium custom labels and eco-friendly packaging solutions for swimwear brands',
    ogTitle:
      brandingData.value?.seo?.ogTitle ||
      brandingData.value?.seo?.title ||
      'Custom Brand Labels & Packaging | Tideline Swimwear',
    ogDescription:
      brandingData.value?.seo?.ogDescription ||
      brandingData.value?.seo?.description ||
      'Elevate your swimwear brand with premium custom labels and sustainable packaging solutions',
    twitterCard: brandingData.value?.seo?.twitterCard || 'summary_large_image',
  });
</script>
