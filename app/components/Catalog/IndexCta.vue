<template>
  <div
    class="bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
  >
    <div
      class="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gray-200 rounded-full opacity-20"
    ></div>
    <div
      class="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-gray-200 rounded-full opacity-20"
    ></div>

    <div
      class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 relative z-10"
    >
      <div
        data-aos="fade-up"
        class="lg:w-1/2"
      >
        <h2
          class="max-w-xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
        >
          {{ $t('你离自己的泳装品牌，只差一个决定') }}
        </h2>
        <p class="mt-6 max-w-xl text-lg leading-8 text-gray-600">
          {{
            $t(
              '免费获取1对1定制咨询，我们的专业团队将为您提供全方位的品牌创建与生产支持，开启您的泳装品牌之路。'
            )
          }}
        </p>
        <div class="mt-10 flex items-center gap-x-6">
          <NuxtLink
            to="/contact"
            class="rounded-md bg-gray-900 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 cta-button"
          >
            {{ $t('获取免费咨询') }}
          </NuxtLink>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        class="mt-12 lg:mt-0 lg:w-1/2"
      >
        <NuxtImg
          src="/cta/banner.webp"
          class="rounded-md"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>
