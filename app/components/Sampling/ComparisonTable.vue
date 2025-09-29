<template>
  <section class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-5">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4">
          {{ comparison?.title }}
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          {{ comparison?.description }}
        </p>
      </div>

      <!-- Comparison Table -->
      <div class="overflow-x-auto shadow-lg rounded-lg">
        <table class="w-full bg-white">
          <!-- Table Header -->
          <thead class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
            <tr>
              <th class="px-6 py-4 text-left font-semibold text-lg">
                {{
                  $t(
                    'sampling.comparison.criteriaHeader',
                    'Comparison Criteria'
                  )
                }}
              </th>
              <th class="px-6 py-4 text-left font-semibold text-lg">
                {{
                  $t(
                    'sampling.comparison.standardHeader',
                    'Standard Sampling Process'
                  )
                }}
              </th>
              <th class="px-6 py-4 text-left font-semibold text-lg relative">
                <div class="flex items-center gap-2">
                  <span class="text-yellow-300">⭐</span>
                  {{
                    $t(
                      'sampling.comparison.expertHeader',
                      'Talk with Expert Advantage'
                    )
                  }}
                </div>
              </th>
            </tr>
          </thead>

          <!-- Table Body -->
          <tbody>
            <tr
              v-for="(criterion, index) in comparison?.criteria"
              :key="index"
              class="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              :class="index % 2 === 0 ? 'bg-gray-25' : 'bg-white'"
            >
              <!-- Criteria Column -->
              <td class="px-6 py-4 font-medium text-gray-900 bg-gray-50">
                {{ criterion.name }}
              </td>

              <!-- Standard Process Column -->
              <td class="px-6 py-4 text-gray-700">
                <div class="flex items-start gap-2">
                  <span class="text-red-500 mt-1 flex-shrink-0">❌</span>
                  <span>{{ criterion.standard }}</span>
                </div>
              </td>

              <!-- Expert Advantage Column -->
              <td class="px-6 py-4 text-gray-700 bg-green-25">
                <div class="flex items-start gap-2">
                  <span class="text-green-500 mt-1 flex-shrink-0">✅</span>
                  <span class="font-medium">{{ criterion.expert }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Call to Action -->
      <!-- <div class="text-center mt-12">
        <div
          class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <span class="text-yellow-300">⭐</span>
          <span class="font-semibold">{{
            $t('sampling.comparison.cta', 'Experience the Expert Advantage')
          }}</span>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
  // 定义props
  defineProps({
    comparison: {
      type: Object,
      required: true,
      default: () => ({
        title: '',
        description: '',
        criteria: [],
      }),
    },
  });
</script>

<style scoped>
  .bg-gray-25 {
    background-color: #fafafa;
  }

  .bg-green-25 {
    background-color: #f0fdf4;
  }

  /* 确保表格在移动设备上的响应式 */
  @media (max-width: 768px) {
    table {
      font-size: 0.875rem;
    }

    th,
    td {
      padding: 0.75rem 0.5rem;
    }

    .text-lg {
      font-size: 1rem;
    }
  }
</style>
