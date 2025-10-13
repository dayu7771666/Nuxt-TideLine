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

<style scoped>
  .cta-button {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.7s ease;
  }
  .cta-button:hover::before {
    left: 100%;
  }
  .cta-image {
    transition: all 0.6s ease;
  }
  .cta-image:hover {
    transform: scale(1.03);
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .cta-text-highlight {
    position: relative;
    display: inline-block;
  }
  .cta-text-highlight::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background-color: rgba(209, 213, 219, 0.5);
    z-index: -1;
    transition: height 0.3s ease;
  }
  .cta-text-highlight:hover::after {
    height: 10%;
  }
</style>
