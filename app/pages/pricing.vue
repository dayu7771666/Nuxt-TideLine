<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <Hero
      :title="pricing?.title"
      image="/pricing.webp"
      :description="pricing?.description"
      pt="pt-36"
      pb="pb-36"
      bg-gradient="bg-gradient-to-br from-slate-900 to-blue-600"
      text-color="white"
      :decorations="false"
    >
    </Hero>

    <!-- One-Time Initial Costs Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold text-blue-600 mb-4 relative inline-block"
          >
            {{ pricing?.initialCosts?.title }}
            <span
              class="absolute top-full bottom-0 left-1/4 w-1/2 h-1 bg-orange-400"
            ></span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            {{ pricing?.initialCosts?.description }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="card in pricing?.initialCosts?.cards"
            :key="card.id"
            class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            <div
              class="h-44 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-blue-600 text-5xl"
            >
              <NuxtImg
                class="w-full h-full"
                :src="card.icon"
              ></NuxtImg>
            </div>
            <div class="bg-blue-600 text-white text-center py-5">
              <h3 class="text-xl font-semibold">{{ card.title }}</h3>
            </div>
            <div class="p-6 flex-grow">
              <div
                v-for="item in card.items"
                :key="item.name"
                class="flex justify-between py-3 border-b border-gray-200 last:border-b-0"
              >
                <span class="font-medium">{{ item.name }}</span>
                <span class="font-semibold text-blue-600">{{ item.cost }}</span>
              </div>
              <p
                v-if="card.note"
                class="text-sm text-gray-500 italic mt-4 pt-4 border-t border-dashed border-gray-300"
              >
                {{ card.note }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Manufacturing Process Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="bg-white rounded-xl shadow-lg p-12">
          <div class="text-center mb-12">
            <h2
              class="text-3xl font-bold text-blue-600 mb-4 relative inline-block"
            >
              {{ pricing?.process?.title }}
              <span
                class="absolute top-full bottom-0 left-1/4 w-1/2 h-1 bg-orange-400"
              ></span>
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto text-lg">
              {{ pricing?.process?.description }}
            </p>
          </div>

          <div class="relative">
            <!-- Process Line -->
            <div
              class="hidden md:block absolute top-8 left-[10%] w-[80%] h-1 bg-gradient-to-r from-blue-600 to-orange-400"
            ></div>

            <div class="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              <div
                v-for="(step, index) in pricing?.process?.steps"
                :key="step.id"
                class="text-center"
              >
                <div
                  class="w-16 h-16 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center font-bold text-xl text-blue-600 mx-auto mb-4"
                >
                  {{ index + 1 }}
                </div>
                <div class="px-2">
                  <h3 class="font-semibold mb-2">{{ step.title }}</h3>
                  <p class="text-gray-600 text-sm">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Per-Unit Production Costs Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold text-blue-600 mb-4 relative inline-block"
          >
            {{ pricing?.productionCosts?.title }}
            <span
              class="absolute top-full bottom-0 left-1/4 w-1/2 h-1 bg-orange-400"
            ></span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            {{ pricing?.productionCosts?.description }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(card, index) in pricing?.productionCosts?.cards"
            :key="card.id"
            class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            <div
              class="h-72 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-blue-600 text-5xl"
            >
              <!-- <Icon :name="card.icon" /> -->
              <NuxtImg
                class="w-full h-full object-cover"
                :src="card.icon"
              ></NuxtImg>
            </div>
            <div class="bg-blue-600 text-white text-center py-5">
              <h3 class="text-xl font-semibold">{{ card.title }}</h3>
            </div>
            <div class="p-6">
              <div
                v-for="item in card.items"
                :key="item.name"
                class="flex justify-between py-3 border-b border-gray-200 last:border-b-0"
              >
                <span class="font-medium">{{ item.name }}</span>
                <span class="font-semibold text-blue-600">{{ item.cost }}</span>
              </div>
              <p
                v-if="card.note"
                class="text-sm text-gray-500 italic mt-4 pt-4 border-t border-dashed border-gray-300"
              >
                {{ card.note }}
              </p>
              <button
                v-if="index == 0"
                @click="showContactModal = true"
                class="w-full bg-orange-500 mt-4 text-white py-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
              >
                {{ $t('Get Custom Pricing') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Flexible Ordering Options Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="bg-white rounded-xl shadow-lg p-12">
          <div class="text-center mb-12">
            <h2
              class="text-3xl font-bold text-blue-600 mb-4 relative inline-block"
            >
              {{ pricing?.flexibility?.title }}
              <span
                class="absolute top-full bottom-0 left-1/4 w-1/2 h-1 bg-orange-400"
              ></span>
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto text-lg">
              {{ pricing?.flexibility?.description }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="item in pricing?.flexibility?.items"
              :key="item.id"
              class="flex items-start gap-5 p-6 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full"
            >
              <div
                class="w-15 h-15 bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl"
              >
                <Icon :name="item.icon" />
              </div>
              <div>
                <h3 class="font-semibold mb-2">{{ item.title }}</h3>
                <p class="text-gray-600 text-sm">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Budget Example Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="bg-white rounded-xl shadow-lg p-12">
          <div class="text-center mb-12">
            <h2
              class="text-3xl font-bold text-blue-600 mb-4 relative inline-block"
            >
              {{ pricing?.budgetExample?.title }}
              <span
                class="absolute top-full bottom-0 left-1/4 w-1/2 h-1 bg-orange-400"
              ></span>
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto text-lg">
              {{ pricing?.budgetExample?.description }}
            </p>
          </div>

          <!-- Budget Table -->
          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-gray-50">
                  <th
                    class="text-left p-4 font-semibold border-b border-gray-200"
                  >
                    Stage
                  </th>
                  <th
                    class="text-left p-4 font-semibold border-b border-gray-200"
                  >
                    Item
                  </th>
                  <th
                    class="text-left p-4 font-semibold border-b border-gray-200"
                  >
                    Cost Estimate
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, index) in pricing?.budgetExample?.tableData"
                  :key="index"
                >
                  <td
                    v-if="row.stage"
                    :rowspan="row.rowspan"
                    class="p-4 border-b border-gray-200 font-semibold align-top"
                  >
                    {{ row.stage }}
                  </td>
                  <td
                    class="p-4 border-b border-gray-200"
                    :class="{ 'font-semibold': row.isSubtotal }"
                  >
                    {{ row.item }}
                  </td>
                  <td
                    class="p-4 border-b border-gray-200"
                    :class="{ 'font-semibold': row.isSubtotal }"
                  >
                    {{ row.cost }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="mt-5 text-gray-500 italic">
            {{ pricing?.budgetExample?.note }}
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="bg-gradient-to-br from-blue-600 to-slate-900 text-white text-center py-24"
    >
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl font-bold mb-5">{{ pricing?.cta?.title }}</h2>
        <p class="text-xl max-w-2xl mx-auto mb-10 opacity-95">
          {{ pricing?.cta?.description }}
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-5">
          <button
            v-for="(button, btnIndex) in pricing?.cta?.buttons"
            :key="button.text"
            @click="btnIndex === 0 ? (showContactModal = true) : null"
            :class="
              button.primary
                ? 'bg-orange-500 hover:bg-orange-600'
                : 'bg-transparent border-2 border-white hover:bg-white hover:text-blue-600'
            "
            class="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {{ button.text }}
          </button>
        </div>
      </div>
    </section>

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
              <h2 class="text-2xl font-bold text-gray-900">
                {{ pricing?.contact?.title || 'Get Your Custom Quote' }}
              </h2>
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
            <p
              v-if="pricing?.contact?.subtitle"
              class="text-gray-600 mt-2"
            >
              {{ pricing?.contact?.subtitle }}
            </p>
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
  // Get internationalization
  const { locale } = useI18n();

  // Fetch pricing data from yml file
  const { data: pricing } = await useAsyncData(
    `pricing-${locale.value}`,
    async () => {
      // Build collection name based on current locale
      const collection = 'pricing_' + locale.value;
      const content = await queryCollection(collection).first();
      // Optional: fallback to default locale if content is missing
      if (!content && locale.value !== 'en') {
        return await queryCollection('pricing_en').first();
      }
      return content?.body;
    },
    {
      watch: [locale],
    }
  );

  // Modal state management
  const showContactModal = ref(false);

  // Contact form labels from pricing data
  const contactFormLabels = computed(() => ({
    nameLabel: pricing.value?.contact?.formLabels?.nameLabel || 'Full Name',
    namePlaceholder:
      pricing.value?.contact?.formLabels?.namePlaceholder ||
      'Enter your full name',
    emailLabel:
      pricing.value?.contact?.formLabels?.emailLabel || 'Email Address',
    emailPlaceholder:
      pricing.value?.contact?.formLabels?.emailPlaceholder ||
      'Enter your email address',
    messageLabel:
      pricing.value?.contact?.formLabels?.messageLabel || 'Project Details',
    messagePlaceholder:
      pricing.value?.contact?.formLabels?.messagePlaceholder ||
      'Tell us about your swimwear line project...',
    consentText:
      pricing.value?.contact?.formLabels?.consentText ||
      'I agree to receive updates and communications from Tideline.',
    submitButton:
      pricing.value?.contact?.formLabels?.submitButton || 'Request Quote',
    successMessage:
      pricing.value?.contact?.formLabels?.successMessage ||
      'Thank you! We will send you a detailed quote within 24 hours.',
    errorMessage:
      pricing.value?.contact?.formLabels?.errorMessage ||
      'Submission failed. Please try again or contact our support team.',
  }));

  // Close modal
  const closeModal = () => {
    showContactModal.value = false;
  };

  // Handle contact form success
  const handleContactSuccess = response => {
    console.log('Pricing form submitted successfully:', response);
    setTimeout(() => {
      showContactModal.value = false;
    }, 2000);
  };

  // Handle contact form error
  const handleContactError = error => {
    console.error('Pricing form submission failed:', error);
  };

  // Keyboard event handler - ESC key to close modal
  onMounted(() => {
    const handleKeydown = event => {
      if (event.key === 'Escape' && showContactModal.value) {
        showContactModal.value = false;
      }
    };

    document.addEventListener('keydown', handleKeydown);

    onUnmounted(() => {
      document.removeEventListener('keydown', handleKeydown);
    });
  });

  // SEO Meta
  useSeoMeta({
    title: pricing.value?.seo?.title || 'Pricing | Tideline',
    description: pricing.value?.seo?.description || '',
    keywords:
      pricing.value?.seo?.keywords ||
      'swimwear manufacturing pricing, B2B swimwear costs',
    ogTitle:
      pricing.value?.seo?.ogTitle ||
      pricing.value?.seo?.title ||
      'Pricing | Tideline',
    ogDescription:
      pricing.value?.seo?.ogDescription ||
      pricing.value?.seo?.description ||
      '',
    ogType: pricing.value?.seo?.ogType || 'website',
    ogSiteName: 'TIDELINE SWIMWEAR',
    ogImage: pricing.value?.seo?.ogImage || '/img/pricing-hero.webp',
    twitterCard: pricing.value?.seo?.twitterCard || 'summary_large_image',
    twitterTitle:
      pricing.value?.seo?.twitterTitle ||
      pricing.value?.seo?.title ||
      'Pricing | Tideline',
    twitterDescription:
      pricing.value?.seo?.twitterDescription ||
      pricing.value?.seo?.description ||
      '',
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
</style>
