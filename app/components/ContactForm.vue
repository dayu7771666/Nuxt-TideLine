<template>
  <form
    @submit.prevent="handleSubmit"
    class="w-full"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="text-left">
        <label
          for="first_name"
          class="block mb-3 text-base font-medium text-slate-800"
          >{{ formLabels.nameLabel || '姓名' }}
          <span class="text-red-500">*</span></label
        >
        <input
          type="text"
          id="first_name"
          v-model="form.first_name"
          :placeholder="formLabels.namePlaceholder || '请输入您的姓名'"
          required
          class="w-full px-4 py-4 border border-gray-200 rounded-lg text-base transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-3 focus:ring-blue-500/10"
        />
      </div>

      <div class="text-left">
        <label
          for="email"
          class="block mb-3 text-base font-medium text-slate-800"
          >{{ formLabels.emailLabel || '邮箱地址' }}
          <span class="text-red-500">*</span></label
        >

        <input
          type="email"
          id="email"
          v-model="form.email"
          :placeholder="formLabels.emailPlaceholder || '请输入您的邮箱'"
          required
          class="w-full px-4 py-4 border border-gray-200 rounded-lg text-base transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-3 focus:ring-blue-500/10"
        />
      </div>

      <div class="text-left md:col-span-2">
        <label
          for="message"
          class="block mb-3 text-base font-medium text-slate-800"
          >{{ formLabels.messageLabel || '消息内容' }}</label
        >
        <textarea
          id="message"
          v-model="form.message"
          :placeholder="
            formLabels.messagePlaceholder || '请简要描述您的需求...'
          "
          rows="4"
          class="w-full px-4 py-4 border border-gray-200 rounded-lg text-base transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-3 focus:ring-blue-500/10 resize-vertical"
        ></textarea>
      </div>
    </div>

    <div class="mb-8 text-left">
      <p class="text-sm text-slate-600 leading-relaxed">
        {{ $t('ContactForm.consentText') }}
        <NuxtLinkLocale
          to="/terms"
          class="text-blue-600 underline hover:text-blue-700 transition-colors duration-200"
        >
          {{ $t('ContactForm.terms') }}
        </NuxtLinkLocale>
      </p>
    </div>

    <button
      type="submit"
      :disabled="isSubmitting"
      class="w-full bg-blue-500 text-white py-4 px-10 rounded-full font-medium text-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
    >
      <span
        v-if="isSubmitting"
        class="flex items-center justify-center"
      >
        <svg
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Submitting...
      </span>
      <span v-else>{{ formLabels.submitButton || '提交' }}</span>
    </button>

    <div
      v-show="showSuccess"
      class="mt-6 bg-green-100 text-green-800 px-5 py-4 rounded-lg text-center"
    >
      <i class="fas fa-check-circle mr-2"></i>
      {{ formLabels.successMessage || '提交成功！我们会尽快与您联系。' }}
    </div>

    <div
      v-show="showError"
      class="mt-6 bg-red-100 text-red-800 px-5 py-4 rounded-lg text-center"
    >
      <i class="fas fa-exclamation-circle mr-2"></i>
      {{ errorMessage }}
    </div>
  </form>
</template>

<script setup>
  // Props
  const props = defineProps({
    formLabels: {
      type: Object,
      default: () => ({}),
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

  // Reactive data
  const form = reactive({
    first_name: '',
    email: '',
    message: '',
  });

  const showSuccess = ref(false);
  const showError = ref(false);
  const errorMessage = ref('');
  const isSubmitting = ref(false);

  // Methods
  const handleSubmit = async () => {
    if (!form.first_name || !form.email) {
      return;
    }

    isSubmitting.value = true;

    try {
      // 直接提交表单到API
      const response = await $fetch(props.apiUrl, {
        method: 'POST',
        body: {
          first_name: form.first_name,
          email: form.email,
          message: form.message || '',
          type: props.consultationType,
        },
      });

      // 提交成功
      showSuccess.value = true;

      // 发出成功事件
      emit('submit-success', response);

      // Reset form
      form.first_name = '';
      form.email = '';
      form.message = '';

      // Hide success message after 5 seconds
      setTimeout(() => {
        showSuccess.value = false;
      }, 5000);
    } catch (error) {
      console.error('Consultation submission error:', error);

      showError.value = true;
      errorMessage.value = '提交失败，请稍后重试或联系客服';

      // 发出错误事件
      emit('submit-error', error);

      // Hide error message after 5 seconds
      setTimeout(() => {
        showError.value = false;
        errorMessage.value = '';
      }, 5000);
    }

    isSubmitting.value = false;
  };

  // 暴露重置表单的方法
  const resetForm = () => {
    form.first_name = '';
    form.email = '';
    form.message = '';
    showSuccess.value = false;
    showError.value = false;
    errorMessage.value = '';
  };

  defineExpose({
    resetForm,
  });
</script>
