<template>
  <div class="flex flex-col bg-white w-full h-full">
    <div class="relative flex justify-center w-full h-full">
      <div class="relative w-full h-screen">
        <video
          :src="videoSource"
          autoplay
          loop
          muted
          playsinline
          class="object-cover w-full h-full absolute top-50% left-50% transform -translate-y-50% -translate-x-50%"
        />
      </div>
    </div>
    <section
      class="text-3xl font-extrabold text-center mt-20 max-w-screen-xl px-4 sm:px-20 mx-auto w-full mb-20"
    >
      <div class="mb-14 text-2xl sm:text-4xl">
        <h1>주요대회 바로가기</h1>
      </div>
      <div class="bg-white">
        <div class="mx-auto">
          <div
            class="relative isolate overflow-hidden bg-blue-950 px-6 shadow-2xl rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24"
          >
            <div class="mx-auto text-center lg:mx-0 py-14 lg:text-left">
              <h2 class="text-3xl text-white sm:text-4xl font-black">TIGER BOWL</h2>
              <p class="mt-6 text-lg leading-8 text-gray-300">
                제 63회 대한미식축구협회 전국대학미식축구 선수권전
              </p>
              <div class="mt-10 flex flex-row items-center justify-center gap-x-3 lg:justify-start">
                <a
                  href="https://forms.gle/vJBxtd1TA7x2HjQS8"
                  class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >출전등록</a
                >
                <a
                  href="#"
                  @click="() => router.push('/tiger-bowl')"
                  class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >바로가기</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto mt-10">
          <div
            class="relative isolate overflow-hidden bg-blue-950 px-6 shadow-2xl rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24"
          >
            <div class="mx-auto text-center lg:mx-0 py-14 lg:text-left">
              <h2 class="text-3xl text-white sm:text-4xl font-black">CHALLENGE BOWL</h2>
              <p class="mt-6 text-lg leading-8 text-gray-300">
                제 63회 대한미식축구협회 전국대학미식축구 선수권전
              </p>
              <div class="mt-10 flex flex-row items-center justify-center gap-x-3 lg:justify-start">
                <a
                  href="https://forms.gle/vJBxtd1TA7x2HjQS8"
                  class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >출전등록</a
                >
                <a
                  href="#"
                  @click="() => router.push('/challenge-bowl')"
                  class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >바로가기</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto mt-10">
          <div
            class="relative isolate overflow-hidden bg-red-700 px-6 shadow-2xl rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24"
          >
            <div class="mx-auto text-center lg:mx-0 py-14 lg:text-left">
              <h2 class="text-3xl text-white sm:text-4xl font-black">GWANGGAETO BOWL</h2>
              <p class="mt-6 text-lg leading-8 text-gray-300">제 28회 KFNL 광개토볼</p>
              <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  @click="() => router.push('/gwanggaeto-bowl')"
                  >바로가기</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <alertModal></alertModal>
</template>
<script lang="ts" setup>
import alertModal from '@/modal/alertModal.vue'
import { useHead } from '@vueuse/head'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const desktopVideoPath = 'https://cdn.playprove.one/landing/desktop.mp4'
const mobileVideoPath = 'https://cdn.playprove.one/landing/mobile.mp4'
const isMobile = ref(window.innerWidth <= 768)

const videoSource = computed(() => {
  return isMobile.value ? mobileVideoPath : desktopVideoPath
})

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.addEventListener('resize', handleResize)
})

useHead({
  title: '대한미식축구협회',
  meta: [
    { name: 'description', content: '대한미식축구협회 메인페이지' },
    {
      property: 'og:url',
      content: 'https://kafa.one'
    },
    { property: 'og:title', content: '대한미식축구협회' },
    { property: 'og:description', content: '대한미식축구협회 메인페이지' },
    { property: 'og:image', content: 'https://kafa.one/images/ogtag.png' },
    { property: 'og:image:height', content: '400' },
    { property: 'og:image:width', content: '800' }
  ]
})
</script>
<style scoped></style>
