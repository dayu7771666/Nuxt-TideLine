<template>
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
		<h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{{ title }}</h2>
		<dl class="mt-20 divide-y divide-gray-900/10">
			<div v-for="faq in faqs" :key="faq.id"
				class="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
				<dt class="text-base/7 font-semibold text-gray-900 lg:col-span-5">{{ $t(faq.question) }}</dt>
				<dd class="mt-4 lg:col-span-7 lg:mt-0">
					<p class="text-base/7 text-gray-600">{{ $t(faq.answer) }}</p>
				</dd>
			</div>
		</dl>
	</div>
</template>

<script setup>
const props = defineProps({
	title: { type: String, required: true },
	faqs: { type: Array, required: true }
})
const {t} = useI18n()
// 已移除schema包，注释相关代码
// 添加schema.org结构化数据
// useSchemaOrg([
//   defineWebPage({
//     '@type': 'FAQPage',
//   }),
//   // 为每个FAQ问题定义Question类型
//   ...props.faqs.map(faq => 
//     defineQuestion({
//       name: () => t(faq.question),
//       acceptedAnswer: () => t(faq.answer),
//     })
//   ),
// ])
</script> 