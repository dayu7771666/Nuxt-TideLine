<template>
    <div class="relative bg-white dark:bg-gray-900">
        <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div class="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6">
                <div class="mx-auto max-w-lg lg:mx-0">
                    <h1
                        class="mt-24 text-5xl font-semibold tracking-tight text-pretty break-words text-gray-900 sm:mt-10 sm:text-7xl dark:text-white">
                        {{ title }}
                    </h1>
                    <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
                        {{ subtitle }}
                    </p>
                    <div class="mt-10 flex items-center gap-x-6">
                        <NuxtLink :href="ctaHref"
                            class="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500">
                            {{ ctaText }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                <NuxtImg preload :width="imageWidth"
                    class="aspect-2/3 w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full dark:bg-gray-800"
                    :src="imageSrc" :alt="imageAlt" />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    ctaText: { type: String, required: true },
    ctaHref: { type: String, required: true },
    imageSrc: { type: String, required: true },
    imageAlt: { type: String, default: '' },
    imageWidth: { type: String, default: '900px' },
    seoTitle: { type: String, default: '' },
    seoDescription: { type: String, default: '' }
})

const route = useRoute()
const requestURL = useRequestURL()
const canonicalUrl = computed(() => `${requestURL.protocol}//${requestURL.hostname}${route.fullPath}`)

// 使用传入的 SEO 参数，如果没有传入则使用默认值
const finalSeoTitle = computed(() => props.seoTitle || props.title)
const finalSeoDescription = computed(() => props.seoDescription || props.subtitle)

useHead({
	title: finalSeoTitle.value,
    meta: [
        { name: 'description', content: finalSeoDescription.value },
        { property: 'og:title', content: finalSeoTitle.value },
        { property: 'og:description', content: finalSeoDescription.value },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: canonicalUrl.value },
        { property: 'og:image', content: props.imageSrc },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: finalSeoTitle.value },
        { name: 'twitter:description', content: finalSeoDescription.value },
        { name: 'twitter:image', content: props.imageSrc }
    ],
    link: [
        {
            rel: 'canonical',
            href: canonicalUrl.value
        }
    ]
})
</script>