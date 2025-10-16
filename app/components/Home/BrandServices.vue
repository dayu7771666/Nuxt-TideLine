<template>
  <div
    class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
  >
    <div data-aos="fade-up">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {{ brandServices.title }}
      </h2>
      <p class="mt-4 text-gray-500">
        {{ brandServices.description }}
      </p>

      <dl
        class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"
      >
        <div
          v-for="feature in brandServices.features"
          :key="feature.title"
          class="border-t border-gray-200 pt-4"
        >
          <dt class="font-medium text-gray-900">{{ feature.title }}</dt>
          <dd class="mt-2 text-sm text-gray-500">
            {{ feature.description }}
          </dd>
        </div>
      </dl>
    </div>
    <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
      <img
        v-for="image in brandServices.images"
        :key="image.src"
        data-aos="zoom-in"
        :src="image.src"
        :alt="image.alt"
        class="rounded-lg bg-gray-100"
      />
    </div>
  </div>
</template>

<script setup>
  // 定义props接收数据
  const props = defineProps({
    brandServices: {
      type: Object,
      default: () => ({
        title: '',
        description: '',
        features: [],
        images: [],
      }),
    },
  });
</script>

