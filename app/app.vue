<template>
  <div>
    <!-- Google Tag Manager (noscript) -->
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-NJ5S82KN"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    ></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <NuxtLayout>
      <TopNav />
      <div class="sticky top-0 z-30">
        <TideHeader :navigation="navigation" />
      </div>
      <NuxtPage />
      <Footer :navigation="navigation" />
      <!-- 悬浮底部栏 -->
      <FloatingBottomBar
        email="tidelineswim@swimsuitcustom.com"
        phone="+(86)18302407790"
        whatsapp-message="您好，我想了解更多关于您的服务信息。"
      />
    </NuxtLayout>
  </div>
</template>

<script setup>
  const i18nHead = useLocaleHead();
  const url = useRequestURL();
  const route = useRoute();
  const { locale } = useI18n();

  // 在app层级获取navigation数据
  const { data: navigation } = await useAsyncData(
    `navigation-${locale.value}`,
    async () => {
      const collectionName = `layout_${locale.value}`;
      return await queryCollection(collectionName).first();
    }
  );

  useHead(() => {
    const links = (i18nHead.value.link || []).filter(
      l => l.rel !== 'canonical'
    );

    links.push({
      rel: 'canonical',
      href: `${url.origin}${route.fullPath}`,
    });
    return {
      htmlAttrs: {
        lang: i18nHead.value.htmlAttrs.lang,
      },
      link: links,
      meta: [
        ...(i18nHead.value.meta || []),
        {
          name: 'google-site-verification',
          content: 'Min-VK_OjxF9S2LAKiDEX2DtZS7kr0uGBuOl3dSYRIA',
        },
      ],
      script: [
        {
          innerHTML: `var _iub = _iub || [];
      _iub.csConfiguration = {"siteId":4049599,"cookiePolicyId":27834388,"lang":"en","storage":{"useSiteId":true}};`,
          type: 'text/javascript',
        },
        {
          src: 'https://cs.iubenda.com/autoblocking/4049599.js',
          type: 'text/javascript',
        },
        {
          src: '//cdn.iubenda.com/cs/gpp/stub.js',
          type: 'text/javascript',
        },
        {
          src: '//cdn.iubenda.com/cs/iubenda_cs.js',
          type: 'text/javascript',
          charset: 'UTF-8',
          async: true,
        },
        //   {
        //     innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        // })(window,document,'script','dataLayer','GTM-NJ5S82KN');`,
        //     type: 'text/javascript',
        //   },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-PPB68951Z8',
          async: true,
        },
        {
          innerHTML: `
      function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-10898942702/SXS_CPbz0b8aEO7Vgs0o',
            'event_callback': callback
        });
        return false;
      }
      `,
          type: 'text/javascript',
        },
        {
          innerHTML: `!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1246557270302730');
      fbq('track', 'PageView');`,
          type: 'text/javascript',
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'nuxt-script': ['innerHTML'],
      },
    };
  });

  onMounted(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-PPB68951Z8');
  });
</script>
