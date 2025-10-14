<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base/7 text-gray-700">
      <p class="text-base/7 font-semibold text-indigo-600">Legal Information</p>
      <h1
        class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl"
      >
        {{ terms?.title }}
      </h1>
      <p class="mt-6 text-lg">
        {{ terms?.description }}
      </p>

      <div class="mt-10 max-w-2xl text-gray-600">
        <!-- Contract Formation -->
        <div
          v-if="terms?.sections?.contract_formation"
          class="mb-12"
        >
          <h2
            class="text-2xl font-semibold tracking-tight text-pretty text-gray-900"
          >
            {{ terms.sections.contract_formation.title }}
          </h2>
          <p class="mt-4">
            {{ terms.sections.contract_formation.content }}
          </p>
        </div>

        <!-- Payment Terms -->
        <div
          v-if="terms?.sections?.payment_terms"
          class="mb-12"
        >
          <h2
            class="text-2xl font-semibold tracking-tight text-pretty text-gray-900"
          >
            {{ terms.sections.payment_terms.title }}
          </h2>
          <div class="mt-4 whitespace-pre-line">
            {{ terms.sections.payment_terms.content }}
          </div>
        </div>

        <!-- Shipping -->
        <div
          v-if="terms?.sections?.shipping"
          class="mb-12"
        >
          <h2
            class="text-2xl font-semibold tracking-tight text-pretty text-gray-900"
          >
            {{ terms.sections.shipping.title }}
          </h2>
          <p class="mt-4">
            {{ terms.sections.shipping.content }}
          </p>
        </div>

        <!-- Key Policies List -->
        <ul
          role="list"
          class="mt-8 max-w-xl space-y-8 text-gray-600"
        >
          <li
            v-if="terms?.sections?.cancellations"
            class="flex gap-x-3"
          >
            <CheckCircleIcon
              class="mt-1 size-5 flex-none text-indigo-600"
              aria-hidden="true"
            />
            <span>
              <strong class="font-semibold text-gray-900"
                >{{ terms.sections.cancellations.title }}.</strong
              >
              {{ terms.sections.cancellations.content }}
            </span>
          </li>
          <li
            v-if="terms?.sections?.pricing"
            class="flex gap-x-3"
          >
            <CheckCircleIcon
              class="mt-1 size-5 flex-none text-indigo-600"
              aria-hidden="true"
            />
            <span>
              <strong class="font-semibold text-gray-900"
                >{{ terms.sections.pricing.title }}.</strong
              >
              {{ terms.sections.pricing.content }}
            </span>
          </li>
          <li
            v-if="terms?.sections?.bulk_orders"
            class="flex gap-x-3"
          >
            <CheckCircleIcon
              class="mt-1 size-5 flex-none text-indigo-600"
              aria-hidden="true"
            />
            <span>
              <strong class="font-semibold text-gray-900"
                >{{ terms.sections.bulk_orders.title }}.</strong
              >
              {{ terms.sections.bulk_orders.content }}
            </span>
          </li>
        </ul>

        <!-- Claims and Returns -->
        <div
          v-if="terms?.sections?.claims_returns"
          class="mt-12"
        >
          <h2
            class="text-2xl font-semibold tracking-tight text-pretty text-gray-900"
          >
            {{ terms.sections.claims_returns.title }}
          </h2>
          <p class="mt-4">
            {{ terms.sections.claims_returns.content }}
          </p>
        </div>

        <!-- Confidentiality Section -->
        <div
          v-if="terms?.sections?.confidentiality"
          class="mt-16"
        >
          <h2
            class="text-3xl font-semibold tracking-tight text-pretty text-gray-900"
          >
            {{ terms.sections.confidentiality.title }}
          </h2>

          <!-- Definition -->
          <div
            v-if="terms.sections.confidentiality.subsections?.definition"
            class="mt-6"
          >
            <h3 class="text-xl font-semibold text-gray-900">
              {{ terms.sections.confidentiality.subsections.definition.title }}
            </h3>
            <p class="mt-4">
              {{
                terms.sections.confidentiality.subsections.definition.content
              }}
            </p>
          </div>

          <!-- Obligations -->
          <div
            v-if="terms.sections.confidentiality.subsections?.obligations"
            class="mt-8"
          >
            <h3 class="text-xl font-semibold text-gray-900">
              {{ terms.sections.confidentiality.subsections.obligations.title }}
            </h3>
            <div class="mt-4 whitespace-pre-line">
              {{
                terms.sections.confidentiality.subsections.obligations.content
              }}
            </div>
          </div>

          <!-- Protection Measures -->
          <div
            v-if="terms.sections.confidentiality.subsections?.protection"
            class="mt-8"
          >
            <h3 class="text-xl font-semibold text-gray-900">
              {{ terms.sections.confidentiality.subsections.protection.title }}
            </h3>
            <p class="mt-4">
              {{
                terms.sections.confidentiality.subsections.protection.content
              }}
            </p>
          </div>

          <!-- Duration -->
          <div
            v-if="terms.sections.confidentiality.subsections?.duration"
            class="mt-8"
          >
            <h3 class="text-xl font-semibold text-gray-900">
              {{ terms.sections.confidentiality.subsections.duration.title }}
            </h3>
            <p class="mt-4">
              {{ terms.sections.confidentiality.subsections.duration.content }}
            </p>
          </div>

          <!-- Exceptions Quote Block -->
          <figure
            v-if="terms.sections.confidentiality.subsections?.exceptions"
            class="mt-10 border-l border-indigo-600 pl-9"
          >
            <blockquote class="font-semibold text-gray-900">
              <h4 class="text-lg font-semibold mb-4">
                {{
                  terms.sections.confidentiality.subsections.exceptions.title
                }}
              </h4>
              <div class="whitespace-pre-line text-base font-normal">
                {{
                  terms.sections.confidentiality.subsections.exceptions.content
                }}
              </div>
            </blockquote>
          </figure>

          <!-- Breach and Remedies -->
          <div
            v-if="terms.sections.confidentiality.subsections?.breach"
            class="mt-10"
          >
            <h3 class="text-xl font-semibold text-gray-900">
              {{ terms.sections.confidentiality.subsections.breach.title }}
            </h3>
            <p class="mt-4">
              {{ terms.sections.confidentiality.subsections.breach.content }}
            </p>
          </div>

          <!-- Return or Destruction -->
          <div
            v-if="
              terms.sections.confidentiality.subsections?.return_destruction
            "
            class="mt-8"
          >
            <h3 class="text-xl font-semibold text-gray-900">
              {{
                terms.sections.confidentiality.subsections.return_destruction
                  .title
              }}
            </h3>
            <p class="mt-4">
              {{
                terms.sections.confidentiality.subsections.return_destruction
                  .content
              }}
            </p>
          </div>
        </div>

        <!-- Footer Consultation -->
        <div
          v-if="terms?.footer?.consultation"
          class="mt-16 max-w-2xl"
        >
          <figure class="border-l border-indigo-600 pl-9">
            <blockquote class="font-semibold text-gray-900">
              <p class="flex items-center gap-2">
                <InformationCircleIcon
                  class="size-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                {{ terms.footer.consultation }}
              </p>
            </blockquote>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    CheckCircleIcon,
    InformationCircleIcon,
  } from '@heroicons/vue/20/solid';

  // 获取国际化
  const { locale } = useI18n();

  // 获取terms页面数据
  const { data: terms } = await useAsyncData(
    'terms',
    async () => {
      // 根据当前语言构建集合名称
      const collection = 'terms_' + locale.value;
      const content = await queryCollection(collection).first();
      // 可选：如果内容缺失，回退到默认语言
      if (!content && locale.value !== 'en') {
        return await queryCollection('terms_en').first();
      }
      return content?.body;
    },
    {
      watch: [locale],
      server: true,
    }
  );

  // SEO Meta
  useSeoMeta({
    title: terms.value?.seo?.title || 'Terms & Conditions | TIDELINE SWIMWEAR',
    description:
      terms.value?.seo?.description ||
      'B2B swimwear manufacturer terms and conditions.',
    keywords:
      terms.value?.seo?.keywords ||
      'swimwear terms and conditions, B2B terms, wholesale swimwear terms',
    ogTitle:
      terms.value?.seo?.ogTitle ||
      terms.value?.seo?.title ||
      'Terms & Conditions | TIDELINE SWIMWEAR',
    ogDescription:
      terms.value?.seo?.ogDescription ||
      terms.value?.seo?.description ||
      'B2B swimwear manufacturer terms and conditions.',
    ogType: terms.value?.seo?.ogType || 'website',
    ogSiteName: 'TIDELINE SWIMWEAR',
    ogImage: terms.value?.seo?.ogImage || '/manufacturer.jpg',
    twitterCard: terms.value?.seo?.twitterCard || 'summary_large_image',
    twitterTitle:
      terms.value?.seo?.twitterTitle ||
      terms.value?.seo?.title ||
      'Terms & Conditions | TIDELINE SWIMWEAR',
    twitterDescription:
      terms.value?.seo?.twitterDescription ||
      terms.value?.seo?.description ||
      'B2B swimwear manufacturer terms and conditions.',
  });
</script>
