<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="px-6 py-10 lg:px-8">
      <div class="mx-auto max-w-3xl text-base/7 text-gray-700">
        <p class="text-base/7 font-semibold text-blue-600">
          {{ forbrandData?.hero?.badge }}
        </p>
        <h1
          class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
        >
          {{ forbrandData?.hero?.title }}
        </h1>
        <p class="mt-6 text-xl/8">
          {{ forbrandData?.hero?.intro }}
        </p>
        <div class="mt-10 max-w-2xl">
          <p>{{ forbrandData?.hero?.description }}</p>

          <!-- Why Brands Choose Us -->
          <h2
            class="mt-16 text-2xl font-semibold tracking-tight text-pretty text-gray-900"
          >
            {{ forbrandData?.why_choose?.title }}
          </h2>
          <ul
            role="list"
            class="mt-8 max-w-xl space-y-8 text-gray-600"
          >
            <li
              v-for="item in forbrandData?.why_choose?.items"
              :key="item.id"
              class="flex gap-x-3"
            >
              <CheckCircleIcon
                class="mt-1 size-5 flex-none text-blue-600"
                aria-hidden="true"
              />
              <span
                ><strong class="font-semibold text-gray-900">{{
                  item.title
                }}</strong>
                {{ item.description }}</span
              >
            </li>
          </ul>

          <!-- What Sets Us Apart -->
          <h2
            class="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900"
          >
            {{ forbrandData?.what_sets_apart?.title }}
          </h2>

          <div class="mt-8 overflow-hidden">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Feature
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Benefit for Your Brand
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr
                  v-for="feature in forbrandData?.what_sets_apart?.features"
                  :key="feature.name"
                >
                  <td
                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                  >
                    {{ feature.icon }} {{ feature.name }}
                  </td>
                  <td class="px-3 py-4 text-sm text-gray-500">
                    {{ feature.benefit }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Brand Success Stories -->
          <h2
            class="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900"
          >
            {{ forbrandData?.success_stories?.title }}
          </h2>

          <figure
            v-for="testimonial in forbrandData?.success_stories?.testimonials"
            :key="testimonial.id"
            class="mt-10 border-l border-blue-600 pl-9"
          >
            <blockquote class="font-semibold text-gray-900">
              <p>"{{ testimonial.quote }}"</p>
            </blockquote>
            <figcaption class="mt-6 flex gap-x-4">
              <img
                class="size-6 flex-none rounded-full bg-gray-50"
                :src="testimonial.avatar"
                alt=""
              />
              <div class="text-sm/6">
                <strong class="font-semibold text-gray-900">{{
                  testimonial.author
                }}</strong>
              </div>
            </figcaption>
          </figure>

          <!-- How We Work -->
          <h2
            class="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900"
          >
            {{ forbrandData?.how_we_work?.title }}
          </h2>
          <ol class="mt-8 space-y-6 text-gray-600">
            <li
              v-for="step in forbrandData?.how_we_work?.steps"
              :key="step.id"
              class="flex gap-x-3"
            >
              <span
                class="size-5 rounded-full bg-blue-600 text-white font-medium text-center flex items-center justify-center"
                >{{ step.id }}</span
              >
              <span>{{ step.text }}</span>
            </li>
          </ol>

          <!-- Start Partnership -->
          <h2
            class="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900"
          >
            {{ forbrandData?.partnership?.title }}
          </h2>
          <p class="mt-6">{{ forbrandData?.partnership?.description }}</p>
          <div class="mt-8">
            <NuxtLink
              to="/contact"
              class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >{{ forbrandData?.partnership?.cta_text }}</NuxtLink
            >
          </div>
        </div>

        <!-- Image Section -->
        <figure class="mt-16">
          <img
            class="aspect-video rounded-xl bg-gray-50 object-cover"
            :src="forbrandData?.image?.src"
            :alt="forbrandData?.image?.alt"
          />
          <figcaption class="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
            <InformationCircleIcon
              class="mt-0.5 size-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            {{ forbrandData?.image?.caption }}
          </figcaption>
        </figure>
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

  // Fetch forbrand data from YAML
  const { data: forbrandData } = await useAsyncData(
    `forbrand-${locale.value}`,
    async () => {
      // Build collection name based on current locale
      const collection = 'forbrand_' + locale.value;
      const content = await queryCollection(collection).first();
      // Optional: fallback to default locale if content is missing
      if (!content && locale.value !== 'en') {
        return await queryCollection('forbrand_en').first();
      }
      return content?.body;
    },
    {
      watch: [locale],
    }
  );

  // SEO Meta
  useSeoMeta({
    title: forbrandData.value?.seo_title || 'For Brands | TideLine Swimwear',
    description:
      forbrandData.value?.seo_description ||
      'Premium swimwear manufacturer for brands',
    ogTitle: forbrandData.value?.seo_title || 'For Brands | TideLine Swimwear',
    ogDescription:
      forbrandData.value?.seo_description ||
      'Premium swimwear manufacturer for brands',
    ogImage: forbrandData.value?.seo_image || '/manufacturer.jpg',
    twitterCard: 'summary_large_image',
  });
</script>
