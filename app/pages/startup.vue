<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="px-6 py-10 lg:px-8">
      <div class="mx-auto max-w-4xl text-base/7 text-gray-700">
        <p class="text-base/7 font-semibold text-blue-600">
          {{ startupData?.hero?.badge }}
        </p>
        <h1
          class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
        >
          {{ startupData?.title }}
        </h1>
        <p class="mt-6 text-xl/8">
          {{ startupData?.description }}
        </p>

        <!-- Company Introduction -->
        <div class="mt-10 max-w-2xl">
          <p>{{ startupData?.company?.introduction }}</p>

          <!-- Features List -->
          <ul
            role="list"
            class="mt-8 max-w-2xl space-y-8 text-gray-600"
          >
            <li
              v-for="feature in startupData?.features"
              :key="feature.id"
              class="flex gap-x-3"
            >
              <CheckCircleIcon
                class="mt-1 size-5 flex-none text-green-600"
                aria-hidden="true"
              />
              <span>
                <strong class="font-semibold text-gray-900">{{
                  feature.title
                }}</strong>
                {{ feature.description }}
              </span>
            </li>
          </ul>

          <p class="mt-8">{{ startupData?.company?.benefits }}</p>

          <!-- Success Section -->
          <h2
            class="mt-16 text-pretty text-3xl font-semibold tracking-tight text-gray-900"
          >
            {{ startupData?.success?.title }}
          </h2>
          <p class="mt-6">{{ startupData?.success?.description }}</p>

          <!-- Quote -->
          <figure class="mt-10 border-l border-blue-600 pl-9">
            <blockquote class="font-semibold text-gray-900">
              <p>{{ startupData?.quote?.text }}</p>
            </blockquote>
            <figcaption class="mt-6 flex gap-x-4">
              <NuxtImg
                class="size-6 flex-none rounded-full bg-gray-50"
                :src="startupData?.quote?.avatar"
                alt=""
              />
              <div class="text-sm/6">
                <strong class="font-semibold text-gray-900">{{
                  startupData?.quote?.company
                }}</strong>
                –
                {{ startupData?.quote?.role }}
              </div>
            </figcaption>
          </figure>

          <p class="mt-10">
            <span class="text-blue-500 underline">{{
              startupData?.cta?.text
            }}</span
            >,
            {{ startupData?.cta?.description }}
          </p>
        </div>

        <!-- Image Section -->
        <figure class="mt-16">
          <NuxtImg
            loading="lazy"
            quality="10"
            class="aspect-video rounded-xl bg-gray-50 object-cover"
            :src="startupData?.image?.src"
            :alt="startupData?.image?.alt"
          />
          <figcaption class="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
            <InformationCircleIcon
              class="mt-0.5 size-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            {{ startupData?.image?.caption }}
          </figcaption>
        </figure>

        <!-- Services Section -->
        <div class="mt-16 max-w-2xl">
          <h2
            class="text-pretty text-3xl font-semibold tracking-tight text-gray-900"
          >
            {{ startupData?.services?.title }}
          </h2>
          <p class="mt-6">{{ startupData?.services?.description }}</p>
          <p class="mt-8">{{ startupData?.services?.cta }}</p>
        </div>
      </div>
    </div>

    <!-- Contact Form Section -->
    <div class="relative isolate bg-white px-6 py-20 lg:px-8">
      <div class="mx-auto max-w-xl lg:max-w-4xl">
        <h2
          class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
        >
          {{ startupData?.contact?.title }}
        </h2>
        <div class="mt-5 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <!-- Contact Form -->
          <div
            v-if="startupData?.contact?.form"
            class="lg:flex-auto"
          >
            <ContactForm
              :form-labels="{
                nameLabel:
                  startupData?.contact?.form?.firstName || 'First Name',
                namePlaceholder: `Enter your ${(startupData?.contact?.form?.firstName || 'first name').toLowerCase()}`,
                emailLabel: startupData?.contact?.form?.email || 'Email',
                emailPlaceholder: `Enter your ${(startupData?.contact?.form?.email || 'email').toLowerCase()} address`,
                messageLabel: startupData?.contact?.form?.message || 'Message',
                messagePlaceholder: 'Tell us about your business needs...',
                submitButton: startupData?.contact?.form?.submit || 'Submit',
                successMessage: 'Thank you! We will contact you soon.',
              }"
              :consultation-type="2"
              @submit-success="handleFormSuccess"
              @submit-error="handleFormError"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    CheckCircleIcon,
    InformationCircleIcon,
  } from '@heroicons/vue/20/solid';

  // Get current locale
  const { locale } = useI18n();

  // Fetch startup data from YAML
  const { data: startupData } = await useAsyncData(
    `startup-${locale.value}`,
    async () => {
      // Build collection name based on current locale
      const collection = 'startup_' + locale.value;
      const content = await queryCollection(collection).first();
      // Optional: fallback to default locale if content is missing
      if (!content && locale.value !== 'en') {
        return await queryCollection('startup_en').first();
      }
      return content?.body;
    },
    {
      watch: [locale],
    }
  );

  // Form submission handlers
  const handleFormSuccess = response => {
    console.log('Form submitted successfully:', response);
  };

  const handleFormError = error => {
    console.error('Form submission failed:', error);
  };

  // SEO Meta
  useSeoMeta({
    title:
      startupData.value?.seo?.title ||
      'Swimwear Factory Services for Startups | TIDELINE SWIMWEAR',
    description:
      startupData.value?.seo?.description ||
      'We are a Chinese swimwear factory with a complete supply chain.',
    keywords:
      startupData.value?.seo?.keywords ||
      'swimwear factory, swimwear manufacturer, startup swimwear',
    ogTitle:
      startupData.value?.seo?.ogTitle ||
      startupData.value?.seo?.title ||
      'Swimwear Factory Services for Startups | TIDELINE SWIMWEAR',
    ogDescription:
      startupData.value?.seo?.ogDescription ||
      startupData.value?.seo?.description ||
      'We are a Chinese swimwear factory with a complete supply chain.',
    ogType: startupData.value?.seo?.ogType || 'website',
    ogSiteName: 'TIDELINE SWIMWEAR',
    ogImage: startupData.value?.seo?.ogImage || '/manufacturer.jpg',
    twitterCard: startupData.value?.seo?.twitterCard || 'summary_large_image',
    twitterTitle:
      startupData.value?.seo?.twitterTitle ||
      startupData.value?.seo?.title ||
      'Swimwear Factory Services for Startups | TIDELINE SWIMWEAR',
    twitterDescription:
      startupData.value?.seo?.twitterDescription ||
      startupData.value?.seo?.description ||
      'We are a Chinese swimwear factory with a complete supply chain.',
  });
</script>
