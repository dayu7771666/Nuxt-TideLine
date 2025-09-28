<template>
  <section
    :id="id"
    :class="containerClass"
  >
    <div class="max-w-6xl mx-auto px-5">
      <h2 :class="titleClass">
        {{ title }}
      </h2>
      <p
        v-if="description"
        :class="descriptionClass"
      >
        {{ description }}
      </p>
      <NuxtLinkLocale
        v-if="button && link"
        :to="link"
        :class="buttonClass"
      >
        {{ button }}
      </NuxtLinkLocale>
    </div>
  </section>
</template>

<script setup lang="ts">
  interface Props {
    id?: string;
    title: string;
    description?: string;
    button?: string;
    link?: string;
    variant?: 'blue' | 'indigo' | 'purple' | 'green' | 'custom';
    containerClass?: string;
    titleClass?: string;
    descriptionClass?: string;
    buttonClass?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    id: 'cta',
    variant: 'blue',
    containerClass: '',
    titleClass: '',
    descriptionClass: '',
    buttonClass: '',
  });

  // 计算容器样式类
  const containerClass = computed(() => {
    if (props.containerClass) {
      return props.containerClass;
    }

    const variants = {
      blue: 'bg-gradient-to-br from-blue-800 to-blue-600 text-white text-center py-24',
      indigo:
        'bg-gradient-to-br from-indigo-800 to-indigo-600 text-white text-center py-24',
      purple:
        'bg-gradient-to-br from-purple-800 to-purple-600 text-white text-center py-24',
      green:
        'bg-gradient-to-br from-emerald-800 to-emerald-600 text-white text-center py-24',
      custom:
        'bg-gradient-to-br from-gray-800 to-gray-600 text-white text-center py-24',
    };

    return variants[props.variant] || variants.blue;
  });

  // 计算标题样式类
  const titleClass = computed(() => {
    if (props.titleClass) {
      return props.titleClass;
    }
    return 'text-3xl lg:text-4xl font-bold mb-6';
  });

  // 计算描述样式类
  const descriptionClass = computed(() => {
    if (props.descriptionClass) {
      return props.descriptionClass;
    }
    return 'text-xl max-w-3xl mx-auto mb-8 opacity-90';
  });

  // 计算按钮样式类
  const buttonClass = computed(() => {
    if (props.buttonClass) {
      return props.buttonClass;
    }

    const variants = {
      blue: 'inline-flex cursor-pointer items-center mt-10 gap-x-2 rounded-md bg-white px-6 py-3 font-medium text-blue-700 shadow-lg  hover:font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-blue-700',
      indigo:
        'inline-flex cursor-pointer items-center mt-10 gap-x-2 rounded-md bg-white px-6 py-3 font-medium text-indigo-700 shadow-lg hover:font-bold  hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-indigo-700',
      purple:
        'inline-flex cursor-pointer items-center mt-10 gap-x-2 rounded-md bg-white px-6 py-3 font-medium text-purple-700 shadow-lg hover:font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-purple-700',
      green:
        'inline-flex cursor-pointer items-center mt-10 gap-x-2 rounded-md bg-white px-6 py-3 font-medium text-emerald-700 shadow-lg hover:font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-emerald-700',
      custom:
        'inline-flex cursor-pointer items-center mt-10 gap-x-2 rounded-md bg-white px-6 py-3 font-medium text-gray-700 shadow-lg hover:font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-gray-700',
    };

    return variants[props.variant] || variants.blue;
  });
</script>
