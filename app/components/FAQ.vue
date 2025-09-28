<template>
  <section class="bg-white py-20">
    <div class="max-w-6xl mx-auto px-5">
      <h2 class="text-3xl lg:text-4xl text-center mb-12 font-bold">
        {{ faq?.title }}
      </h2>
      <div class="max-w-4xl mx-auto">
        <div
          itemscope
          itemtype="https://schema.org/FAQPage"
        >
          <div
            v-for="(item, index) in faq?.items"
            :key="index"
            class="mb-5 border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-blue-600"
            :class="{ 'border-blue-600': activeFaq === index }"
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <!-- 问题部分 -->
            <div
              class="p-5 bg-slate-50 cursor-pointer flex justify-between items-center font-semibold hover:bg-slate-100 transition-colors duration-200"
              @click="toggleFaq(index)"
              itemprop="name"
            >
              <h3 class="text-lg">{{ item.question }}</h3>
              <span class="text-xl font-bold text-blue-600 select-none">
                {{ activeFaq === index ? '−' : '+' }}
              </span>
            </div>

            <!-- 答案部分 - 始终在DOM中，只是视觉上隐藏/显示 -->
            <div
              class="transition-all duration-300 ease-in-out bg-white"
              :class="
                activeFaq === index
                  ? 'opacity-100 max-h-96 py-5 px-5'
                  : 'opacity-0 max-h-0 py-0 px-5 overflow-hidden'
              "
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <div
                itemprop="text"
                class="text-slate-600 leading-relaxed"
              >
                {{ item.answer }}
              </div>
            </div>

            <!-- 隐藏但对搜索引擎可见的完整内容 -->
            <div class="sr-only">
              <h3>{{ item.question }}</h3>
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue';

  // 定义props
  defineProps({
    faq: {
      type: Object,
      required: true,
      default: () => ({
        title: '',
        items: [],
      }),
    },
  });

  // 活跃的FAQ项
  const activeFaq = ref(-1);

  // 切换FAQ项
  const toggleFaq = index => {
    activeFaq.value = activeFaq.value === index ? -1 : index;
  };

  // SEO优化：在服务端渲染时确保内容可见
  onMounted(() => {
    // 客户端挂载后的逻辑
    // 可以在这里添加任何需要的客户端特定逻辑
  });
</script>

<style scoped>
  /* 确保搜索引擎可以访问隐藏内容 */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* 平滑的高度过渡 */
  .max-h-0 {
    max-height: 0;
  }

  .max-h-96 {
    max-height: 24rem;
  }
</style>
