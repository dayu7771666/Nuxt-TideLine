<template>
  <section class="bg-white py-20">
    <div class="max-w-6xl mx-auto px-5">
      <h2 class="text-3xl lg:text-4xl text-center mb-12 font-bold">
        {{ problemSolution?.title }}
      </h2>
      <div class="flex flex-wrap gap-8 justify-center">
        <!-- Problem Section -->
        <div
          class="flex-1 min-w-[300px] p-10 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 bg-red-50 border-l-4 border-red-500"
        >
          <h3 class="text-2xl mb-4 flex items-center gap-3">
            <span class="text-2xl">{{ problemSolution?.problem?.icon }}</span>
            {{ problemSolution?.problem?.title }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="(item, index) in problemSolution?.problem?.items"
              :key="index"
              class="pl-6 relative"
            >
              <span class="absolute left-0 text-red-500 font-bold">✗</span>
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Solution Section -->
        <div
          class="flex-1 min-w-[300px] p-10 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 bg-green-50 border-l-4 border-green-500"
        >
          <h3 class="text-2xl mb-4 flex items-center gap-3">
            <span class="text-2xl">{{ problemSolution?.solution?.icon }}</span>
            {{ problemSolution?.solution?.title }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="(item, index) in problemSolution?.solution?.items"
              :key="index"
              class="pl-6 relative"
            >
              <span class="absolute left-0 text-green-500 font-bold">✓</span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  // 定义props
  defineProps({
    problemSolution: {
      type: Object,
      required: true,
      default: () => ({
        title: '',
        problem: {
          title: '',
          icon: '',
          items: [],
        },
        solution: {
          title: '',
          icon: '',
          items: [],
        },
      }),
    },
  });
</script>
