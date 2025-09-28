<template>
  <section class="relative bg-white py-16 overflow-hidden">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 横向布局 -->
      <div
        v-if="layout === 'horizontal'"
        class="flex flex-col lg:flex-row items-center gap-12"
      >
        <!-- 视频区域 -->
        <div class="flex-1 max-w-2xl group">
          <div class="relative">
            <div
              class="relative aspect-video rounded-lg overflow-hidden bg-white shadow-xl group-hover:shadow-2xl transition-all duration-500"
            >
              <!-- YouTube 嵌入视频 -->
              <iframe
                v-if="isYouTubeVideo"
                :src="youtubeEmbedUrl"
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                @load="onVideoLoaded"
              ></iframe>

              <!-- 本地视频 -->
              <video
                v-else
                ref="videoPlayer"
                :poster="poster"
                class="w-full h-full object-cover"
                controls
                preload="metadata"
                @loadedmetadata="onVideoLoaded"
              >
                <source
                  :src="videoSrc"
                  type="video/mp4"
                />
                <p class="text-center text-gray-500 p-8">
                  您的浏览器不支持视频播放。
                </p>
              </video>

              <!-- 播放按钮 -->
              <div
                v-if="!isYouTubeVideo && showPlayButton && !isPlaying"
                class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/40 via-black/20 to-transparent cursor-pointer"
                @click="playVideo"
              >
                <div class="relative">
                  <div
                    class="absolute inset-0 bg-white rounded-full shadow-lg opacity-90"
                  ></div>
                  <div
                    class="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <svg
                      class="w-8 h-8 text-blue-600 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 内容区域 -->
        <div class="flex-1 text-left lg:text-left">
          <!-- 标题 -->
          <div class="relative flex items-start gap-4 mb-6">
            <div
              class="w-1 h-16 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full flex-shrink-0 mt-1"
            ></div>
            <h2
              class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
            >
              {{ title }}
            </h2>
          </div>

          <p class="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
            {{ description }}
          </p>

          <!-- CTA按钮 -->
          <div class="flex justify-start">
            <button
              type="button"
              class="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-blue-700"
              @click="handleCtaClick"
            >
              <span>{{ ctaText }}</span>
              <svg
                class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- 竖向布局（默认） -->
      <div
        v-else
        class="text-center"
      >
        <!-- 标题区域 -->
        <div class="mb-12 flex flex-col items-center">
          <div class="relative flex items-start gap-4 mb-6">
            <div
              class="w-1 h-16 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full flex-shrink-0 mt-1"
            ></div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-left">
              {{ title }}
            </h2>
          </div>
          <p class="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {{ description }}
          </p>
        </div>

        <!-- 视频区域 -->
        <div class="mb-12 max-w-4xl mx-auto group">
          <div class="relative">
            <div
              class="relative aspect-video rounded-lg overflow-hidden bg-white shadow-xl group-hover:shadow-2xl transition-all duration-500"
            >
              <!-- YouTube 嵌入视频 -->
              <iframe
                v-if="isYouTubeVideo"
                :src="youtubeEmbedUrl"
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                @load="onVideoLoaded"
              ></iframe>

              <!-- 本地视频 -->
              <video
                v-else
                ref="videoPlayer"
                :poster="poster"
                class="w-full h-full object-cover"
                controls
                preload="metadata"
                @loadedmetadata="onVideoLoaded"
              >
                <source
                  :src="videoSrc"
                  type="video/mp4"
                />
                <p class="text-center text-gray-500 p-8">
                  您的浏览器不支持视频播放。
                </p>
              </video>

              <!-- 播放按钮 -->
              <div
                v-if="!isYouTubeVideo && showPlayButton && !isPlaying"
                class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/40 via-black/20 to-transparent cursor-pointer"
                @click="playVideo"
              >
                <div class="relative">
                  <div
                    class="absolute inset-0 bg-white rounded-full shadow-lg opacity-90"
                  ></div>
                  <div
                    class="relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <svg
                      class="w-10 h-10 text-blue-600 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA按钮 -->
        <div class="flex justify-center">
          <button
            type="button"
            class="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-blue-700"
            @click="handleCtaClick"
          >
            <span>{{ ctaText }}</span>
            <svg
              class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: '探索我们的泳衣制造过程',
    },
    description: {
      type: String,
      default:
        '观看我们的视频，了解如何从设计到生产打造高品质的定制泳衣。我们拥有先进的生产设备和专业的设计团队，确保每一件产品都符合最高质量标准。',
    },
    videoSrc: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      default: '',
    },
    ctaText: {
      type: String,
      default: '了解更多',
    },
    showPlayButton: {
      type: Boolean,
      default: true,
    },
    layout: {
      type: String,
      default: 'vertical',
      validator: value => ['vertical', 'horizontal'].includes(value),
    },
  });

  const emit = defineEmits(['cta-click', 'video-play', 'video-pause']);

  const videoPlayer = ref(null);
  const isPlaying = ref(false);

  // 检测是否为 YouTube 视频
  const isYouTubeVideo = computed(() => {
    return (
      props.videoSrc.includes('youtube.com') ||
      props.videoSrc.includes('youtu.be')
    );
  });

  // 从 YouTube URL 提取视频 ID
  const getYouTubeVideoId = url => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // 生成 YouTube 嵌入 URL
  const youtubeEmbedUrl = computed(() => {
    if (!isYouTubeVideo.value) return '';
    const videoId = getYouTubeVideoId(props.videoSrc);
    return videoId
      ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
      : '';
  });

  const onVideoLoaded = () => {
    if (!isYouTubeVideo.value && videoPlayer.value) {
      videoPlayer.value.addEventListener('play', () => {
        isPlaying.value = true;
        emit('video-play');
      });

      videoPlayer.value.addEventListener('pause', () => {
        isPlaying.value = false;
        emit('video-pause');
      });
    }
  };

  const playVideo = () => {
    if (videoPlayer.value) {
      videoPlayer.value.play();
    }
  };

  const handleCtaClick = () => {
    emit('cta-click');
  };

  onMounted(() => {
    if (videoPlayer.value) {
      onVideoLoaded();
    }
  });
</script>

<style scoped>
  /* 自定义视频控件样式 */
  video::-webkit-media-controls-panel {
    background-color: rgba(0, 0, 0, 0.8);
  }

  video::-webkit-media-controls-play-button,
  video::-webkit-media-controls-volume-slider,
  video::-webkit-media-controls-timeline {
    filter: invert(1);
  }

  /* 响应式调整 */
  @media (max-width: 640px) {
    .aspect-video {
      aspect-ratio: 16 / 9;
    }
  }
</style>
