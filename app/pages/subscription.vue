<template>
  <div
    class="flex flex-col items-center justify-center lg:py-[100px] bg-gray-100"
  >
    <div
      class="bg-white rounded shadow-lg max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2"
    >
      <div class="w-full">
        <NuxtImg
          quality="8"
          src="/cta/banner.webp"
          alt=""
          class="size-full object-cover aspect-1"
        >
        </NuxtImg>
      </div>
      <div class="p-8">
        <div class="text-center">
          <h1 class="text-2xl font-bold text-green-500 mb-4">
            {{ $t('successTitle') }}
          </h1>
          <p class="text-gray-700 mb-6">{{ $t('successMessage') }}</p>
        </div>

        <ul class="list-disc list-inside text-left text-gray-600 mb-6">
          <li class="my-2">{{ $t('benefit1') }}</li>
          <li class="my-2">{{ $t('benefit2') }}</li>
          <li class="my-2">{{ $t('benefit3') }}</li>
        </ul>

        <div class="text-center mt-10">
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            @click="goToShop"
          >
            {{ $t('backToHome') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  useHead({
    meta: [
      {
        name: 'robots',
        content: 'noindex, nofollow',
      },
    ],
  });

  // useHead({
  //     script: [
  //         {
  //             src: 'https://www.googletagmanager.com/gtag/js?id=AW-10898942702',
  //             async: true,
  //         },
  //         {
  //             innerHTML: `
  //             window.dataLayer = window.dataLayer || [];
  //             function gtag(){dataLayer.push(arguments);}
  //             gtag('js', new Date());
  //             gtag('config', 'AW-10898942702');
  //           `,
  //             type: 'text/javascript',
  //         },
  //         {
  //             innerHTML: `gtag('event', 'conversion', {'send_to': 'AW-10898942702/H4WsCNS4g_cZEO7Vgs0o'});`,
  //             type: 'text/javascript',
  //         },
  //     ],
  // });

  function goToShop() {
    return history.go(-1);
  }
</script>

<style scoped></style>
