<template>
	<div class="relative bg-gray-800 px-6 py-32 max-w-7xl mx-auto sm:px-12 sm:py-40 lg:px-16">
		<div class="absolute inset-0 overflow-hidden">
			<NuxtImg format="webp" :src="imageSrc" :width="imageWidth" :alt="imageAlt" loading="lazy"
				class="size-full object-cover" />
		</div>
		<div aria-hidden="true" class="absolute inset-0 bg-gray-900/50" />
		<div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">{{ title }}</h2>
			<p class="mt-3 text-xl text-white">{{ description }}</p>
			<div class="flex items-center gap-x-8">
				<NuxtLink :to="beginnerHref"
					class="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">
					{{ beginnerText }}
				</NuxtLink>
				<NuxtLink :to="proHref"
					class="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">
					{{ proText }}
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	imageSrc: { type: String, required: true },
	imageWidth: { type: String, default: '1000px' },
	imageAlt: { type: String, default: '' },
	title: { type: String, required: true },
	description: { type: String, required: true },
	beginnerHref: { type: String, required: true },
	beginnerText: { type: String, required: true },
	proHref: { type: String, required: true },
	proText: { type: String, required: true }
})
</script> 