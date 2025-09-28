<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 overflow-y-auto"
      @click.self="closeModal"
    >
      <!-- 背景遮罩 -->
      <div
        class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
      ></div>

      <!-- 弹窗内容 -->
      <div class="flex min-h-full items-center justify-center p-4">
        <div
          class="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          @click.stop
        >
          <!-- 关闭按钮 -->
          <button
            @click="closeModal"
            class="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 transition-colors"
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
              ></path>
            </svg>
          </button>

          <!-- 弹窗头部 -->
          <div class="p-6 pb-4 border-b border-gray-200">
            <h3 class="text-2xl font-light text-slate-800 text-center">
              {{ title }}
            </h3>
            <p
              v-if="description"
              class="text-slate-600 text-center mt-2"
            >
              {{ description }}
            </p>
          </div>

          <!-- 表单内容 -->
          <div class="p-6">
            <ContactForm
              ref="contactFormRef"
              :form-labels="formLabels"
              :consultation-type="consultationType"
              :api-url="apiUrl"
              @submit-success="handleSubmitSuccess"
              @submit-error="handleSubmitError"
            />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
  // Props
  const props = defineProps({
    isOpen: {
      type: Boolean,
      default: false,
    },
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
    consultationType: {
      type: Number,
      default: 2,
    },
    apiUrl: {
      type: String,
      default: 'https://user.swimsuitcustom.com/api/consultation/add',
    },
    closeOnSuccess: {
      type: Boolean,
      default: true,
    },
  });

  // Emits
  const emit = defineEmits(['close', 'submit-success', 'submit-error']);

  // Refs
  const contactFormRef = ref(null);

  // Methods
  const closeModal = () => {
    emit('close');
  };

  const handleSubmitSuccess = response => {
    emit('submit-success', response);

    if (props.closeOnSuccess) {
      // 延迟关闭弹窗，让用户看到成功消息
      setTimeout(() => {
        closeModal();
      }, 2000);
    }
  };

  const handleSubmitError = error => {
    emit('submit-error', error);
  };

  // 监听ESC键关闭弹窗
  const handleEscKey = event => {
    if (event.key === 'Escape' && props.isOpen) {
      closeModal();
    }
  };

  // 生命周期
  onMounted(() => {
    document.addEventListener('keydown', handleEscKey);
  });

  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscKey);
  });

  // 监听弹窗打开状态，防止背景滚动
  watch(
    () => props.isOpen,
    newVal => {
      if (newVal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
        // 重置表单
        if (contactFormRef.value) {
          contactFormRef.value.resetForm();
        }
      }
    }
  );

  // 组件卸载时恢复滚动
  onUnmounted(() => {
    document.body.style.overflow = '';
  });
</script>
