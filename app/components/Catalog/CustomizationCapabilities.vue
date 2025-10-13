<template>
  <div class="bg-white">
    <div
      aria-hidden="true"
      class="relative"
    >
      <NuxtImg
        :src="heroImageSrc"
        :alt="heroImageAlt"
        :width="heroImageWidth"
        loading="lazy"
        class="h-96 w-full object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-white to-transparent"
      />
    </div>

    <div
      class="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8"
    >
      <div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {{ title }}
        </h2>
        <p
          class="mt-4 text-gray-500"
          v-if="description"
        >
          {{ description }}
        </p>
      </div>

      <dl
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8"
      >
        <div
          v-for="feature in features"
          :key="feature.name"
          class="border-t border-gray-200 pt-4 h-full flex flex-col"
        >
          <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
          <dd
            class="mt-2 text-sm text-gray-500 flex flex-col justify-between flex-1"
          >
            <span>{{ feature.description }}</span>
            <NuxtLink
              v-if="feature.link"
              :to="feature.link"
              class="inline-flex mt-10 items-center self-end rounded-md bg-black px-3.5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {{ feature.cta_text || '咨询' }}
              <span
                aria-hidden="true"
                class="ml-1"
                >→</span
              >
            </NuxtLink>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    heroImageSrc: { type: String, required: true },
    heroImageAlt: { type: String, default: '' },
    heroImageWidth: { type: String, default: '1000px' },
    features: { type: Array, required: true },
  });
</script>
