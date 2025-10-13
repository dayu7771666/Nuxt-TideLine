<template>
  <section class="relative py-16 overflow-hidden">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 横向布局 -->
      <div
        v-if="layout === 'horizontal'"
        class="flex flex-col lg:flex-row items-center gap-12"
      >
        <!-- 视频区域 -->
        <div class="flex-1 max-w-4xl group">
          <div class="relative">
            <div
              class="relative aspect-video rounded-lg overflow-hidden bg-white shadow-xl group-hover:shadow-2xl transition-all duration-500"
            >
              <!-- YouTube 预览图（点击加载） -->
              <div
                v-if="isYouTubeVideo && !youtubeLoaded"
                class="relative w-full h-full cursor-pointer group/youtube"
                @click="loadYouTubeVideo"
              >
                <!-- YouTube 缩略图 -->
                <img
                  :src="youtubeThumbnail"
                  :alt="title"
                  class="w-full h-full object-cover"
                />

                <!-- 暗色渐变遮罩 -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/20"
                ></div>

                <!-- YouTube 播放按钮（中央大按钮） -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div
                    class="relative group-hover/youtube:scale-110 transition-transform duration-200"
                  >
                    <!-- YouTube 红色播放按钮 -->
                    <div class="relative">
                      <svg
                        class="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-2xl"
                        viewBox="0 0 68 48"
                        fill="none"
                      >
                        <!-- 红色背景 -->
                        <path
                          d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                          fill="#FF0000"
                          class="group-hover/youtube:fill-[#CC0000] transition-colors duration-200"
                        />
                        <!-- 白色三角形播放按钮 -->
                        <path
                          d="M45 24L27 14v20l18-10z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 底部信息栏（模仿 YouTube） -->
                <div class="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                  <!-- 视频标题 -->
                  <div
                    class="text-white font-semibold text-xs sm:text-sm mb-1.5 line-clamp-2 drop-shadow-lg"
                  >
                    {{ title }}
                  </div>

                  <!-- YouTube 品牌和观看提示 -->
                  <div class="flex items-center gap-2 text-white/90 text-xs">
                    <!-- YouTube Logo -->
                    <svg
                      class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                      />
                    </svg>
                    <span class="drop-shadow-lg">{{ youtubeWatchText }}</span>
                  </div>
                </div>

                <!-- 右上角时长标签（可选） -->
                <div
                  v-if="videoDuration"
                  class="absolute top-2 right-2 bg-black/80 text-white text-xs font-semibold px-1.5 py-0.5 rounded"
                >
                  {{ videoDuration }}
                </div>
              </div>

              <!-- 加载动画（显示在 iframe 加载期间） -->
              <div
                v-if="isIframeLoading"
                class="absolute inset-0 bg-black/90 flex items-center justify-center z-10"
              >
                <div class="flex flex-col items-center gap-4">
                  <!-- 旋转加载图标 -->
                  <div class="relative">
                    <svg
                      class="animate-spin h-12 w-12 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                  <!-- 加载文字 -->
                  <p class="text-white text-sm font-medium">Loading video...</p>
                </div>
              </div>

              <!-- YouTube 嵌入视频（点击后加载） -->
              <iframe
                v-if="isYouTubeVideo && youtubeLoaded"
                :src="youtubeEmbedUrlWithAutoplay"
                class="w-full h-full transition-opacity duration-300"
                :class="{
                  'opacity-0': isIframeLoading,
                  'opacity-100': !isIframeLoading,
                }"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                @load="onIframeLoad"
              ></iframe>

              <!-- 本地视频 -->
              <video
                v-if="!isYouTubeVideo"
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

              <!-- 本地视频播放按钮 -->
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
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {{ title }}
            </h2>
          <p class="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {{ description }}
          </p>
        </div>

        <!-- 视频区域 -->
        <div class="mb-12 max-w-6xl mx-auto group">
          <div class="relative">
            <div
              class="relative aspect-video rounded-lg overflow-hidden bg-white shadow-xl group-hover:shadow-2xl transition-all duration-500"
            >
              <!-- YouTube 预览图（点击加载） -->
              <div
                v-if="isYouTubeVideo && !youtubeLoaded"
                class="relative w-full h-full cursor-pointer group/youtube"
                @click="loadYouTubeVideo"
              >
                <!-- YouTube 缩略图 -->
                <img
                  :src="youtubeThumbnail"
                  :alt="title"
                  class="w-full h-full object-cover"
                />

                <!-- 暗色渐变遮罩 -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/20"
                ></div>

                <!-- YouTube 播放按钮（中央大按钮） -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div
                    class="relative group-hover/youtube:scale-110 transition-transform duration-200"
                  >
                    <!-- YouTube 红色播放按钮 -->
                    <div class="relative">
                      <svg
                        class="w-16 h-16 sm:w-16 sm:h-16 drop-shadow-2xl"
                        viewBox="0 0 68 48"
                        fill="none"
                      >
                        <!-- 红色背景 -->
                        <path
                          d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                          fill="#FF0000"
                          class="group-hover/youtube:fill-[#CC0000] transition-colors duration-200"
                        />
                        <!-- 白色三角形播放按钮 -->
                        <path
                          d="M45 24L27 14v20l18-10z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 底部信息栏（模仿 YouTube） -->
                <div class="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <!-- 视频标题 -->
                  <div
                    class="text-white font-semibold text-sm sm:text-base mb-2 line-clamp-2 drop-shadow-lg"
                  >
                    {{ title }}
                  </div>

                  <!-- YouTube 品牌和观看提示 -->
                  <div
                    class="flex items-center gap-2 text-white/90 text-xs sm:text-sm"
                  >
                    <!-- YouTube Logo -->
                    <svg
                      class="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                      />
                    </svg>
                    <span class="drop-shadow-lg">{{ youtubeWatchText }}</span>
                  </div>
                </div>

                <!-- 右上角时长标签（可选） -->
                <div
                  v-if="videoDuration"
                  class="absolute top-3 right-3 bg-black/80 text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded"
                >
                  {{ videoDuration }}
                </div>
              </div>

              <!-- 加载动画（显示在 iframe 加载期间） -->
              <div
                v-if="isIframeLoading"
                class="absolute inset-0 bg-black/90 flex items-center justify-center z-10"
              >
                <div class="flex flex-col items-center gap-4">
                  <!-- 旋转加载图标 -->
                  <div class="relative">
                    <svg
                      class="animate-spin h-12 w-12 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                  <!-- 加载文字 -->
                  <p class="text-white text-sm font-medium">Loading video...</p>
                </div>
              </div>

              <!-- YouTube 嵌入视频（点击后加载） -->
              <iframe
                v-if="isYouTubeVideo && youtubeLoaded"
                :src="youtubeEmbedUrlWithAutoplay"
                class="w-full h-full transition-opacity duration-300"
                :class="{
                  'opacity-0': isIframeLoading,
                  'opacity-100': !isIframeLoading,
                }"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                @load="onIframeLoad"
              ></iframe>

              <!-- 本地视频 -->
              <video
                v-if="!isYouTubeVideo"
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

              <!-- 本地视频播放按钮 -->
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
            class="group inline-flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-blue-700"
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
    // 视频时长（可选，格式如 "5:32"）
    videoDuration: {
      type: String,
      default: '',
    },
    // YouTube 观看文字（可自定义）
    youtubeWatchText: {
      type: String,
      default: 'Watch on YouTube',
    },
  });

  const emit = defineEmits(['cta-click', 'video-play', 'video-pause']);

  const videoPlayer = ref(null);
  const isPlaying = ref(false);
  const youtubeLoaded = ref(false); // YouTube 视频是否已加载

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

  // 获取 YouTube 视频 ID
  const youtubeVideoId = computed(() => {
    if (!isYouTubeVideo.value) return '';
    return getYouTubeVideoId(props.videoSrc);
  });

  // 生成 YouTube 缩略图 URL（使用最高质量）
  const youtubeThumbnail = computed(() => {
    if (!youtubeVideoId.value) return '';
    // YouTube 提供多种缩略图质量：
    // maxresdefault.jpg - 最高质量 (1920x1080)
    // sddefault.jpg - 标清 (640x480)
    // hqdefault.jpg - 高清 (480x360)
    // mqdefault.jpg - 中等质量 (320x180)
    // default.jpg - 默认 (120x90)
    return `https://img.youtube.com/vi/${youtubeVideoId.value}/maxresdefault.jpg`;
  });

  // 生成 YouTube 嵌入 URL（不自动播放）
  const youtubeEmbedUrl = computed(() => {
    if (!youtubeVideoId.value) return '';
    return `https://www.youtube.com/embed/${youtubeVideoId.value}?rel=0&modestbranding=1`;
  });

  // 生成 YouTube 嵌入 URL（带自动播放）
  const youtubeEmbedUrlWithAutoplay = computed(() => {
    if (!youtubeVideoId.value) return '';
    return `https://www.youtube.com/embed/${youtubeVideoId.value}?rel=0&modestbranding=1&autoplay=1`;
  });

  // 控制 iframe 加载状态
  const isIframeLoading = ref(false);

  // 加载 YouTube 视频
  const loadYouTubeVideo = () => {
    isIframeLoading.value = true;
    youtubeLoaded.value = true;
    emit('video-play');
  };

  // iframe 加载完成
  const onIframeLoad = () => {
    isIframeLoading.value = false;
  };

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
  @media (max-width: 1200px) {
    .aspect-video {
      aspect-ratio: 16 / 9;
    }
  }
</style>
