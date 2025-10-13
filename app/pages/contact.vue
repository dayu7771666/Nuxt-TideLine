<template>
  <div class="relative isolate bg-white pb-40">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-1">
      <div class="relative px-6 pb-20 pt-24 lg:static lg:px-8">
        <div
          class="mx-auto max-w-7xl grid lg:grid-cols-2 items-center lg:gap-x-20"
        >
          <div>
            <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden">
              <svg
                class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width="200"
                    height="200"
                    x="100%"
                    y="-1"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M130 200V.5M.5 .5H200"
                      fill="none"
                    />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  stroke-width="0"
                  fill="white"
                />
                <svg
                  x="100%"
                  y="-1"
                  class="overflow-visible fill-gray-50"
                >
                  <path
                    d="M-470.5 0h201v201h-201Z"
                    stroke-width="0"
                  />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  stroke-width="0"
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>

            <h2
              class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
            >
              {{ $t('联系我们') }}
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              {{ $t('联系我们页面内容') }}
            </p>
            <div class="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <PhoneIcon
                    class="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <div class="w-16">WhatsApp</div>
                  <span class="hover:text-gray-900"> +(86)18302407790</span>
                </dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <EnvelopeIcon
                    class="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <div class="w-32">{{ $t('Email') }}</div>
                  <span class="hover:text-gray-900"
                    >tidelineswim@swimsuitcustom.com</span
                  >
                </dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 text-gray-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                </dt>
                <dd>
                  <div class="w-32">{{ $t('地址') }}</div>
                  <span class="hover:text-gray-900">
                    {{
                      $t('Xingcheng, HuludaoCity,Liaoning Province, China')
                    }}</span
                  >
                </dd>
              </div>
            </div>
            <!-- <div class="mt-10 grid lg:grid-cols-2 gap-x-10 gap-y-5">
              <NuxtLink to="/shop" class=" py-3 border shadow rounded-sm text-center cursor-pointer hover:bg-slate-50">
                {{ $t('商店') }}</NuxtLink>
              <NuxtLink to="/fullcustom"
                class=" py-3 border shadow rounded-sm text-center cursor-pointer hover:bg-slate-50">{{ $t('全定制') }}
              </NuxtLink>
            </div> -->
          </div>
          <div class="mt-5 bg-black bg-opacity-20 p-4 rounded-lg lg:mt-0">
            <div class="flex flex-col gap-16 i sm:gap-y-20 lg:flex-row">
              <div class="lg:flex-auto">
                <div>
                  <blockquote class="text-base font-semibold text-gray-900">
                    <p>
                      {{ $t('加我我们的计划引言') }}
                    </p>
                  </blockquote>

                  <!-- 用户来源信息显示 -->
                  <!-- <div class="mt-4 p-3 bg-gray-50 rounded-md text-sm">
              <div class="font-medium text-gray-700 mb-2">检测到的用户来源:</div>
              <div v-if="userSource" class="space-y-1 text-gray-600">
                <div>类型: <span class="font-medium">{{ userSource.type === 'sem' ? '付费广告(SEM)' : userSource.type === 'seo' ? '自然搜索(SEO)' : userSource.type === 'direct' ? '直接访问' : '未知来源' }}</span></div>
                <div>平台: <span class="font-medium">{{ userSource.platform }}</span></div>
                <div>媒介: <span class="font-medium">{{ userSource.medium }}</span></div>
                <div v-if="userSource.utm_source">UTM来源: <span class="font-medium">{{ userSource.utm_source }}</span></div>
                <div v-if="userSource.utm_campaign">UTM活动: <span class="font-medium">{{ userSource.utm_campaign }}</span></div>
                <div v-if="userSource.utm_term">UTM关键词: <span class="font-medium">{{ userSource.utm_term }}</span></div>
                <div v-if="userSource.utm_content">UTM内容: <span class="font-medium">{{ userSource.utm_content }}</span></div>
                <div v-if="userSource.referrer">来源网站: <span class="font-medium">{{ userSource.referrer }}</span></div>
                <div>是否付费: <span class="font-medium">{{ userSource.isPaid ? '是' : '否' }}</span></div>
                <div v-if="userSource.timestamp">检测时间: <span class="font-medium">{{ new Date(userSource.timestamp).toLocaleString() }}</span></div>
              </div>
              <div v-else class="text-gray-500">点击提交按钮后将显示来源信息</div>
              <div v-if="userSource" class="mt-4 p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                <div class="font-medium text-blue-800 mb-2">即将提交的SEO数据:</div>
                <div class="text-blue-700 text-xs break-words">
                  {{ seoDataString }}
                </div>
              </div>
            </div> -->
                </div>
                <div
                  class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-5"
                >
                  <div class="sm:col-span-2">
                    <label
                      for="first-name"
                      class="block text-sm/6 font-semibold text-gray-900"
                    >
                      {{ $t('First name') }}
                    </label>
                    <div class="mt-2.5">
                      <input
                        type="text"
                        v-model="customInfo.firstName"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        :class="[
                          'block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2',
                          errors.firstName
                            ? 'outline-red-300 focus:outline-red-600'
                            : 'outline-gray-300 focus:outline-blue-600',
                        ]"
                      />
                      <p
                        v-if="errors.firstName"
                        class="mt-2 text-sm text-red-600"
                      >
                        {{ errors.firstName }}
                      </p>
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="email"
                      class="block text-sm/6 font-semibold text-gray-900"
                    >
                      {{ $t('Email') }}
                      <!-- <span class="ml-5 text-sm text-red-500">{{'*'}}{{ $t('由于雅虎邮箱的限制，推荐您填写其他的邮箱') }}</span> -->
                    </label>
                    <div class="mt-2.5">
                      <input
                        id="email"
                        type="email"
                        autocomplete="email"
                        v-model="customInfo.email"
                        :class="[
                          'block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2',
                          errors.email
                            ? 'outline-red-300 focus:outline-red-600'
                            : 'outline-gray-300 focus:outline-blue-600',
                        ]"
                      />
                      <p
                        v-if="errors.email"
                        class="mt-2 text-sm text-red-600"
                      >
                        {{ errors.email }}
                      </p>
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label
                      for="message"
                      class="block text-sm/6 font-semibold text-gray-900"
                    >
                      {{ $t('Message') }}
                    </label>
                    <div class="mt-2.5">
                      <textarea
                        v-model="customInfo.message"
                        id="message"
                        name="message"
                        rows="4"
                        :class="[
                          'block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2',
                          errors.message
                            ? 'outline-red-300 focus:outline-red-600'
                            : 'outline-gray-300 focus:outline-blue-600',
                        ]"
                      />
                      <p
                        v-if="errors.message"
                        class="mt-2 text-sm text-red-600"
                      >
                        {{ errors.message }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mt-10">
                  <button
                    @click="submitInfo"
                    :disabled="isSubmitting"
                    :class="[
                      'block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600',
                    ]"
                  >
                    <span v-if="isSubmitting">{{ $t('处理中...') }}</span>
                    <span v-else>{{ $t('发表') }}</span>
                  </button>
                </div>
                <p class="mt-4 text-sm/6">
                  {{ $t('By submitting this form, I agree to the') }}
                  <NuxtLink
                    class="text-blue-500 underline"
                    to="/terms"
                  >
                    {{ $t('条款') }}
                  </NuxtLink>
                </p>
              </div>
              <!-- <div class="lg:mt-6 lg:w-80 lg:flex-none">
          <img class="h-12 w-auto"
                                src="https://tailwindui.starxg.com/plus/img/logos/workcation-logo-blue-600.svg"
                                alt="" />
          <figure class="mt-10">
            <blockquote class="text-lg/8 font-semibold text-gray-900">
              <p>
                {{ $t('加我我们的计划引言') }}

              </p>
            </blockquote>
            <figcaption class="mt-10 flex gap-x-6">
              <NuxtImg src="/img/contactus.png" alt="" class="size-12 flex-none rounded-full bg-gray-50">
              </NuxtImg>
              <div>
                <div class="text-base font-semibold text-gray-900">{{ $t('ChangShun') }}</div>
                <div class="text-sm/6 text-gray-600">{{ $t('CEO of TideLine Swimwear') }}</div>
              </div>
            </figcaption>
          </figure>
        </div> -->
            </div>
            <!-- <NuxtImg class=" rounded-lg aspect-[1/1.2] object-cover " src="/img/contactus.png" /> -->
          </div>
        </div>
      </div>
      <!-- <div class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48" >
          <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                <div class="mt-2.5">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                <div class="mt-2.5">
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                <div class="mt-2.5">
                  <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
                <div class="mt-2.5">
                  <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                <div class="mt-2.5">
                  <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>
            <div class="mt-8 flex justify-end">
              <button @click="submitForm" class="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Send message</button>
            </div>
          </div>
        </div> -->
    </div>
    <!-- <div class="mx-auto max-w-xl lg:max-w-7xl px-6">
      <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        {{ $t('加入我们') }}
 </h2>
      <div class="mt-16 flex flex-col gap-16 i sm:gap-y-20 lg:flex-row">
        <div class="lg:flex-auto">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div class="sm:col-span-2">
              <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">
                {{ $t('First name') }}
              </label>
              <div class="mt-2.5">
                <input type="text" v-model="customInfo.firstName" name="first-name" id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm/6 font-semibold text-gray-900">
                {{ $t('Email') }}
              </label>
              <div class="mt-2.5">
                <input type="email" v-model="customInfo.email"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
              </div>
            </div>


            <div class="sm:col-span-2">
              <label for="message" class="block text-sm/6 font-semibold text-gray-900">
                {{ $t('Message') }}
              </label>
              <div class="mt-2.5">
                <textarea v-model="customInfo.message" id="message" name="message" rows="4"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
              </div>
            </div>
          </div>
          <div class="mt-10">
            <button @click="submitInfo"
              class="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              {{ $t('发表') }}
            </button>
          </div>
          <p class="mt-4 text-sm/6 text-gray-500">{{ $t('By submitting this form, I agree to the') }}
            <NuxtLink class="text-blue-500 underline" to="/terms">
              {{ $t('条款') }}
            </NuxtLink>
          </p>
        </div>
        <div class="lg:mt-6 lg:w-80 lg:flex-none">

          <figure class="mt-10">
            <blockquote class="text-lg/8 font-semibold text-gray-900">
              <p>
                {{ $t('加我我们的计划引言') }}

              </p>
            </blockquote>
            <figcaption class="mt-10 flex gap-x-6">
              <NuxtImg src="/img/contactus.png" alt="" class="size-12 flex-none rounded-full bg-gray-50">
              </NuxtImg>
              <div>
                <div class="text-base font-semibold text-gray-900">{{ $t('ChangShun') }}</div>
                <div class="text-sm/6 text-gray-600">{{ $t('CEO of TideLine Swimwear') }}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
  import {
    BuildingOffice2Icon,
    EnvelopeIcon,
    PhoneIcon,
  } from '@heroicons/vue/24/outline';
  const { t } = useI18n();

  useHead({
    titleTemplate(titleChunk) {
      return titleChunk ? ` ${t('联系我们')}-${titleChunk}` : 'Site Title';
    },
  });

  const customInfo = ref({ firstName: '', email: '', message: '' });
  const errors = ref({ firstName: '', email: '', message: '' });
  const isSubmitting = ref(false);

  // 用户来源检测
  const userSource = ref(null);

  // 用户来源检测函数
  const detectUserSource = () => {
    if (process.client) {
      const urlParams = new URLSearchParams(window.location.search);
      const referrer = document.referrer;

      return {
        type: urlParams.get('utm_source') ? 'sem' : referrer ? 'seo' : 'direct',
        platform: urlParams.get('utm_source') || 'unknown',
        medium: urlParams.get('utm_medium') || 'unknown',
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_term: urlParams.get('utm_term') || '',
        utm_content: urlParams.get('utm_content') || '',
        referrer: referrer || '',
        isPaid: !!urlParams.get('utm_source'),
        timestamp: new Date().toISOString(),
      };
    }
    return {
      type: 'unknown',
      platform: 'unknown',
      medium: 'unknown',
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_term: '',
      utm_content: '',
      referrer: '',
      isPaid: false,
      timestamp: new Date().toISOString(),
    };
  };

  // 计算SEO数据字符串
  const seoDataString = computed(() => {
    if (!userSource.value) return '未检测到来源信息';

    return (
      `来源类型: ${userSource.value.type === 'sem' ? '付费广告(SEM)' : userSource.value.type === 'seo' ? '自然搜索(SEO)' : userSource.value.type === 'direct' ? '直接访问' : '未知来源'}, ` +
      `平台: ${userSource.value.platform}, ` +
      `媒介: ${userSource.value.medium}, ` +
      (userSource.value.utm_source
        ? `UTM来源: ${userSource.value.utm_source}, `
        : '') +
      (userSource.value.utm_campaign
        ? `UTM活动: ${userSource.value.utm_campaign}, `
        : '') +
      (userSource.value.utm_term
        ? `UTM关键词: ${userSource.value.utm_term}, `
        : '') +
      (userSource.value.utm_content
        ? `UTM内容: ${userSource.value.utm_content}, `
        : '') +
      (userSource.value.referrer
        ? `来源网站: ${userSource.value.referrer}, `
        : '') +
      `是否付费: ${userSource.value.isPaid ? '是' : '否'}, ` +
      `检测时间: ${userSource.value.timestamp ? new Date(userSource.value.timestamp).toLocaleString() : new Date().toLocaleString()}`
    );
  });

  // 页面加载时检测用户来源
  onMounted(() => {
    userSource.value = detectUserSource();
    console.log('用户来源信息:', userSource.value);
    console.log(
      `来源类型: ${userSource.value.type === 'sem' ? '付费广告(SEM)' : userSource.value.type === 'seo' ? '自然搜索(SEO)' : userSource.value.type === 'direct' ? '直接访问' : '未知来源'}, ` +
        `平台: ${userSource.value.platform}, ` +
        `媒介: ${userSource.value.medium}, ` +
        (userSource.value.utm_source
          ? `UTM来源: ${userSource.value.utm_source}, `
          : '') +
        (userSource.value.utm_campaign
          ? `UTM活动: ${userSource.value.utm_campaign}, `
          : '') +
        (userSource.value.utm_term
          ? `UTM关键词: ${userSource.value.utm_term}, `
          : '') +
        (userSource.value.utm_content
          ? `UTM内容: ${userSource.value.utm_content}, `
          : '') +
        (userSource.value.referrer
          ? `来源网站: ${userSource.value.referrer}, `
          : '') +
        `是否付费: ${userSource.value.isPaid ? '是' : '否'}, ` +
        `检测时间: ${userSource.value.timestamp ? new Date(userSource.value.timestamp).toLocaleString() : new Date().toLocaleString()}`
    );
  });

  const submitInfo = async () => {
    console.log(customInfo.value.firstName, 'customInfo.firstName');

    // 清空之前的错误
    errors.value = { firstName: '', email: '', message: '' };
    isSubmitting.value = true;

    // 验证表单
    let hasErrors = false;

    if (customInfo.value.firstName === '') {
      errors.value.firstName = t('请填写您的名字！');
      hasErrors = true;
    }

    if (customInfo.value.email === '') {
      errors.value.email = t('邮箱不能为空！');
      hasErrors = true;
    }

    if (hasErrors) {
      isSubmitting.value = false;
      return;
    }

    try {
      // 构建提交数据，包含用户来源信息
      const submitData = {
        first_name: customInfo.value.firstName,
        email: customInfo.value.email,
        type: 2,
        message: customInfo.value.message,
        // 用户来源信息整合到seo_data中
        seo_data: seoDataString.value,
        // 保留原有的详细字段（如果需要的话）
        user_source: userSource.value?.type || 'unknown',
        user_platform: userSource.value?.platform || 'unknown',
        user_medium: userSource.value?.medium || 'unknown',
        utm_source: userSource.value?.utm_source || '',
        utm_medium: userSource.value?.utm_medium || '',
        utm_campaign: userSource.value?.utm_campaign || '',
        utm_term: userSource.value?.utm_term || '',
        utm_content: userSource.value?.utm_content || '',
        referrer: userSource.value?.referrer || '',
        is_paid_traffic: userSource.value?.isPaid || false,
        timestamp: userSource.value?.timestamp || new Date().toISOString(),
      };

      let res = await GetUserApi('/api/consultation/add', {
        method: 'POST',
        body: submitData,
      });

      if (res.code === 200) {
        navigateTo('/subscription');
      } else {
        errors.value.message = t('提交失败，请稍后重试');
      }
    } catch (error) {
      console.error('提交错误:', error);
      errors.value.message = t('提交失败，请稍后重试');
    } finally {
      isSubmitting.value = false;
    }
  };
</script>
