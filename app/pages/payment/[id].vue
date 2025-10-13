<template>
  <div class="container mx-auto px-4 py-8">
    <!-- 支付成功显示 -->
    <div
      v-if="product.status === 2"
      class="bg-white rounded-lg shadow-md p-6 mb-6 text-center"
    >
      <div class="flex flex-col items-center justify-center space-y-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h1 class="text-2xl font-bold text-gray-800">{{ $t('支付成功') }}</h1>
        <p class="text-gray-600">{{ $t('感谢您的购买！') }}</p>
        <div class="mt-6">
          <NuxtLink
            to="/"
            class="bg-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors bg-yellow-300"
          >
            {{ $t('返回首页') }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 未支付状态显示原有内容 -->
    <template v-else>
      <!-- 商品信息部分 -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 class="text-2xl font-bold mb-4">{{ product.name }}</h1>
        <div class="flex flex-wrap gap-4">
          <div class="w-full md:w-1/2">
            <!-- 主图预览 -->
            <div
              v-if="product.images && product.images.length"
              class="mb-4"
            >
              <div
                class="mb-4 bg-gray-50 rounded-lg overflow-hidden border-2 border-gray-200"
              >
                <img
                  :src="selectedImage"
                  :alt="product.name"
                  class="w-full h-auto object-contain max-h-96"
                />
              </div>
              <!-- 缩略图 -->
              <div class="grid grid-cols-4 gap-3">
                <div
                  v-for="(image, index) in product.images"
                  :key="index"
                  @click="selectedImage = image"
                  :class="[
                    'aspect-square cursor-pointer rounded-lg overflow-hidden border-2 transition-all hover:border-yellow-400',
                    selectedImage === image
                      ? 'border-yellow-400 ring-2 ring-yellow-200'
                      : 'border-gray-200',
                  ]"
                >
                  <img
                    :src="image"
                    :alt="`${product.name}-${index + 1}`"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div
              v-else
              class="bg-gray-200 rounded-lg flex items-center justify-center h-64"
            >
              <span class="text-gray-500">{{ $t('暂无图片') }}</span>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <h2 class="text-xl font-semibold mb-2">{{ $t('描述') }}</h2>
            <p class="text-gray-600 mb-4">{{ product.description }}</p>
            <p class="text-2xl font-bold text-yellow-500">
              {{ product.price }}
              {{ product.currency_code }}
            </p>
          </div>
        </div>
      </div>

      <!-- 地址表单 -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-6 mt-10">
        <h2 class="text-xl font-bold mb-4">{{ $t('地址') }}</h2>
        <div class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">{{
                $t('FirstName')
              }}</label>
              <input
                type="text"
                v-model="addressInfo.first_name"
                :class="[
                  'mt-1 block w-full rounded-md border-2 px-4 py-3 text-base shadow-sm focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all',
                  validationErrors.first_name
                    ? 'border-red-500'
                    : 'border-gray-300',
                ]"
              />
              <p
                v-if="validationErrors.first_name"
                class="mt-1 text-sm text-red-600"
              >
                {{ validationErrors.first_name }}
              </p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">{{
                $t('LastName')
              }}</label>
              <input
                type="text"
                v-model="addressInfo.last_name"
                :class="[
                  'mt-1 block w-full rounded-md border-2 px-4 py-3 text-base shadow-sm focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all',
                  validationErrors.last_name
                    ? 'border-red-500'
                    : 'border-gray-300',
                ]"
              />
              <p
                v-if="validationErrors.last_name"
                class="mt-1 text-sm text-red-600"
              >
                {{ validationErrors.last_name }}
              </p>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">{{
              $t('Phone')
            }}</label>
            <input
              type="tel"
              v-model="addressInfo.phone"
              :class="[
                'mt-1 block w-full rounded-md border-2 px-4 py-3 text-base shadow-sm focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all',
                validationErrors.phone ? 'border-red-500' : 'border-gray-300',
              ]"
            />
            <p
              v-if="validationErrors.phone"
              class="mt-1 text-sm text-red-600"
            >
              {{ validationErrors.phone }}
            </p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">{{
              $t('Deliver to')
            }}</label>
            <input
              type="text"
              v-model="addressInfo.street"
              :class="[
                'mt-1 block w-full rounded-md border-2 px-4 py-3 text-base shadow-sm focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all',
                validationErrors.street ? 'border-red-500' : 'border-gray-300',
              ]"
            />
            <p
              v-if="validationErrors.street"
              class="mt-1 text-sm text-red-600"
            >
              {{ validationErrors.street }}
            </p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">{{
              $t('Apartment, unit, suite, or floor')
            }}</label>
            <input
              type="text"
              v-model="addressInfo.address"
              :class="[
                'mt-1 block w-full rounded-md border-2 px-4 py-3 text-base shadow-sm focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all',
                validationErrors.address ? 'border-red-500' : 'border-gray-300',
              ]"
            />
            <p
              v-if="validationErrors.address"
              class="mt-1 text-sm text-red-600"
            >
              {{ validationErrors.address }}
            </p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">{{
              $t('City')
            }}</label>
            <input
              type="text"
              v-model="addressInfo.city"
              :class="[
                'mt-1 block w-full rounded-md border-2 px-4 py-3 text-base shadow-sm focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all',
                validationErrors.city ? 'border-red-500' : 'border-gray-300',
              ]"
            />
            <p
              v-if="validationErrors.city"
              class="mt-1 text-sm text-red-600"
            >
              {{ validationErrors.city }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">{{
                $t('State/Province')
              }}</label>
              <input
                type="text"
                v-model="addressInfo.state"
                :class="[
                  'mt-1 block w-full rounded-md border-2 px-4 py-3 text-base shadow-sm focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all',
                  validationErrors.state ? 'border-red-500' : 'border-gray-300',
                ]"
              />
              <p
                v-if="validationErrors.state"
                class="mt-1 text-sm text-red-600"
              >
                {{ validationErrors.state }}
              </p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">{{
                $t('Postal code')
              }}</label>
              <input
                type="text"
                v-model="addressInfo.postcode"
                :class="[
                  'mt-1 block w-full rounded-md border-2 px-4 py-3 text-base shadow-sm focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all',
                  validationErrors.postcode
                    ? 'border-red-500'
                    : 'border-gray-300',
                ]"
              />
              <p
                v-if="validationErrors.postcode"
                class="mt-1 text-sm text-red-600"
              >
                {{ validationErrors.postcode }}
              </p>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">{{
              $t('Country/Region')
            }}</label>
            <input
              type="text"
              v-model="addressInfo.country_code"
              :class="[
                'mt-1 block w-full rounded-md border-2 px-4 py-3 text-base shadow-sm focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all',
                validationErrors.country_code
                  ? 'border-red-500'
                  : 'border-gray-300',
              ]"
            />
            <p
              v-if="validationErrors.country_code"
              class="mt-1 text-sm text-red-600"
            >
              {{ validationErrors.country_code }}
            </p>
          </div>

          <!-- 通用错误信息 -->
          <div
            v-if="generalError"
            class="mt-4 p-3 bg-red-50 border border-red-200 rounded-md"
          >
            <p class="text-sm text-red-600">{{ generalError }}</p>
          </div>
        </div>
      </div>

      <!-- 支付按钮 -->
      <div class="flex justify-center">
        <div
          @click="saveAddress"
          class="bg-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors bg-yellow-400 cursor-pointer"
          :class="{ 'opacity-50 cursor-not-allowed': isLoading }"
          :disabled="isLoading"
        >
          {{ isLoading ? t('处理中...') : t('确认订单信息') }}
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
  import { ref, onMounted, watch } from 'vue';

  const { t } = useI18n();

  // 设置页面不被搜索引擎索引
  useHead({
    meta: [{ name: 'robots', content: 'noindex, nofollow' }],
  });

  const product = ref({
    name: '',
    description: '',
    price: 0,
    images: [],
    status: 0,
  });

  // 图片预览状态
  const selectedImage = ref('');

  //获取信息
  const route = useRoute();
  const id = route.params.id;
  const getPayment = async () => {
    try {
      let res = await GetUserApi('/api/payment_receipt/info', {
        method: 'GET',
        query: { id },
      });
      if (res.code === 200) {
        product.value = {
          name: res.data.title,
          description: res.data.remark,
          price: res.data.price,
          images: res.data.images,
          currency_code: res.data.currency_code,
          status: res.data.status,
        };
        // 设置默认选中第一张图片
        if (res.data.images && res.data.images.length > 0) {
          selectedImage.value = res.data.images[0];
        }
      }
    } catch (error) {
      console.error('Failed to get payment info:', error);
    }
  };

  getPayment();

  // 地址信息
  const addressInfo = ref({
    first_name: '',
    last_name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postcode: '',
    country_code: '',
    street: '',
    country: '',
  });

  // 验证错误信息
  const validationErrors = ref({});
  const generalError = ref('');

  onMounted(() => {
    loadAirwallex();
  });

  // 监听country_code变化，自动设置country值
  watch(
    () => addressInfo.value.country_code,
    newVal => {
      if (newVal) {
        addressInfo.value.country = newVal;
      }
    }
  );

  // 清除验证错误
  function clearValidationErrors() {
    validationErrors.value = {};
    generalError.value = '';
  }

  // 设置字段验证错误
  function setFieldError(field, message) {
    validationErrors.value[field] = message;
  }

  // 验证地址信息
  async function validateAddressInfo(info) {
    clearValidationErrors();
    let isValid = true;

    // 字段名称映射
    const fieldLabels = {
      first_name: t('FirstName'),
      last_name: t('LastName'),
      phone: t('Phone'),
      street: t('Deliver to'),
      address: t('Apartment, unit, suite, or floor'),
      city: t('City'),
      state: t('State/Province'),
      postcode: t('Postal code'),
      country_code: t('Country/Region'),
    };

    // 验证每个字段
    for (const [key, value] of Object.entries(info)) {
      if (key === 'country') continue; // 跳过 country 字段，因为它是自动设置的

      if (!value || (typeof value === 'string' && value.trim() === '')) {
        const fieldLabel = fieldLabels[key] || key;
        setFieldError(key, `${fieldLabel} ${t('不能为空')}`);
        isValid = false;
      }
    }

    return isValid;
  }

  const payStatus = ref(false);
  const client_secret = ref();
  const intent_id = ref();
  const orderSnAr = ref();
  const isLoading = ref(false); // 添加 loading 状态

  async function saveAddress() {
    if (isLoading.value) return; // 如果正在加载中，防止重复点击
    isLoading.value = true; // 开始加载

    try {
      // 确保country字段有值
      if (addressInfo.value.country_code && !addressInfo.value.country) {
        addressInfo.value.country = addressInfo.value.country_code;
      }

      const isValid = await validateAddressInfo(addressInfo.value);
      if (isValid) {
        let res = await GetUserApi('/api/payment_receipt/pay', {
          method: 'POST',
          body: {
            id: route.params.id,
            address: addressInfo.value,
          },
        });
        if (res.code === 200) {
          payStatus.value = true;
          client_secret.value = res.data.client_secret;
          intent_id.value = res.data.id;
          // 清除所有错误信息
          clearValidationErrors();
          payM();
        } else {
          payStatus.value = false;
          generalError.value = res.message || t('保存地址失败，请重试');
          isLoading.value = false; // 结束加载状态
        }
      } else {
        // 验证失败时，错误信息已经在 validateAddressInfo 中设置
        isLoading.value = false; // 结束加载状态
      }
    } catch (error) {
      console.error('Save address failed:', error);
      generalError.value = t(
        'Network fluctuation, please contact the administrator.'
      );
      isLoading.value = false; // 结束加载
    }
  }

  async function loadAirwallex() {
    if (typeof window.Airwallex === 'undefined') {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src =
          'https://checkout.airwallex.com/assets/elements.bundle.min.js';
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }
  }

  async function payM() {
    try {
      if (payStatus.value === false) {
        generalError.value = t('请输入完整的地址信息');
        isLoading.value = false; // 结束加载状态
        return;
      }
      await loadAirwallex(); // 确保 Airwallex 脚本已加载

      Airwallex.redirectToCheckout({
        env: 'prod',
        intent_id: intent_id.value,
        client_secret: client_secret.value,
        currency: product.value.currency_code,
        locale: 'en',
      });
    } catch (error) {
      console.error(
        'Error loading Airwallex or redirecting to checkout:',
        error
      );
      generalError.value = t('支付系统加载失败，请刷新页面重试');
      isLoading.value = false; // 结束加载状态
    }
  }
</script>

<style scoped>
  .swiper {
    width: 100%;
    height: 100%;
  }
</style>
