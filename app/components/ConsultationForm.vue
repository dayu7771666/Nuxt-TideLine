<template>
  <section
    id="contact-form"
    class="py-20 text-center bg-gradient-to-br from-gray-50 to-gray-100"
  >
    <div class="max-w-6xl mx-auto px-5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl lg:text-4xl text-slate-800 mb-4">
          {{ title }}
        </h2>
        <p
          class="text-lg lg:text-xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed"
        >
          {{ description }}
        </p>

        <div
          class="bg-white rounded-xl p-8 lg:p-10 shadow-xl max-w-4xl mx-auto"
        >
          <ContactForm
            :form-labels="formLabels"
            :consultation-type="consultationType"
            :api-url="apiUrl"
            @submit-success="handleSubmitSuccess"
            @submit-error="handleSubmitError"
          />

          <div
            v-if="showBrowseLink"
            class="mt-8 text-slate-600"
          >
            {{ formLabels.browseText || '想要浏览我们的产品？' }}
            <NuxtLinkLocale
              to="/"
              class="text-blue-500 font-medium hover:underline ml-1"
            >
              {{ formLabels.browseLink || '查看我们的产品系列' }}
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  // Props
  const props = defineProps({
    title: {
      type: String,
      default: '联系我们',
    },
    description: {
      type: String,
      default: '请填写下方表单，我们会尽快与您联系。',
    },
    formLabels: {
      type: Object,
      default: () => ({}),
    },
    showBrowseLink: {
      type: Boolean,
      default: true,
    },
    consultationType: {
      type: Number,
      default: 2,
    },
    apiUrl: {
      type: String,
      default: 'https://user.swimsuitcustom.com/api/consultation/add',
    },
  });

  // Emits
  const emit = defineEmits(['submit-success', 'submit-error']);

  // Methods
  const handleSubmitSuccess = response => {
    // 可以在这里添加额外的成功处理逻辑
    emit('submit-success', response);
  };

  const handleSubmitError = error => {
    // 可以在这里添加额外的错误处理逻辑
    emit('submit-error', error);
  };
</script>
