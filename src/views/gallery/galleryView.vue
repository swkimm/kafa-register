<template>
  <div class="bg-black py-4 w-full flex flex-col items-center">
    <div class="max-w-screen-xl rounded-2xl px-4 md:px-20 w-full text-start">
      <div class="text-slate-300 text-xs sm:text-base">
        {{ date.toLocaleString() }} / {{ galleryInfo?.description }}
      </div>
      <div class="text-white text-base sm:text-2xl font-bold">{{ galleryInfo?.name }}</div>
    </div>
  </div>
  <div class="py-4 sm:py-8 w-full h-full flex flex-col items-center">
    <div class="py-4 max-w-screen-xl rounded-2xl px-4 md:px-20 w-full">
      <div class="grid grid-cols-3 gap-1 sm:gap-4">
        <div v-for="(photo, index) in images" :key="index">
          <img
            :src="photo.url"
            alt="photo"
            class="w-full h-full object-cover object-center"
            loading="lazy"
            @click="openImageModal(photo.url)"
          />
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="selectedImage"
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      class="relative bg-white rounded-lg overflow-hidden max-h-[calc(100vh-2rem)] max-w-[calc(100vw-2rem)]"
    >
      <img
        :src="selectedImage"
        alt="Selected"
        class="max-w-[calc(100vw-4rem)] max-h-[calc(100vh-4rem)] mx-auto"
      />
      <button
        @click="closeImageModal"
        class="absolute top-4 right-4 text-white bg-red-500 p-2 rounded-2xl hover:bg-red-600 focus:outline-none"
      >
        &times;
      </button>
      <a
        :href="selectedImage"
        download
        class="absolute font-bold bottom-4 right-4 text-white bg-blue-600 p-2 rounded-xl hover:bg-blue-700 focus:outline-none"
      >
        Download
      </a>
    </div>
  </div>

  <div ref="observerTarget" class="h-16 mb-4"></div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { onMounted, onUnmounted, ref, type Ref } from 'vue'
import { axiosInstance } from '@/common/auth/store'
import type { GalleryInfo } from './interfaces/gallery.interface'

const route = useRoute()

const page = ref(1)
const loading = ref(false)
const ended = ref(false)
const date: Ref<Date> = ref(new Date())
const images: Ref<{ url: string }[]> = ref([])
const observerTarget = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

const galleryInfo: Ref<GalleryInfo | null> = ref(null)

const selectedImage = ref<string | null>(null)

const openImageModal = (url: string) => {
  selectedImage.value = url
}

const closeImageModal = () => {
  selectedImage.value = null
}

const fetchImages = async () => {
  if (!loading.value && !ended.value) {
    loading.value = true
    const newImages = await axiosInstance
      .get(`/team-game/gallery/${route.params.id}/photos`, {
        params: {
          page: page.value
        }
      })
      .then((result) => result.data)
      .catch(() => [])

    console.log('hello')

    if (newImages.length === 0) {
      ended.value = true
    }

    images.value.push(...newImages)
    page.value += 1
    loading.value = false
  }
}

async function getGalleryInfo() {
  const result = await axiosInstance
    .get(`/team-game/gallery/${route.params.id}/info`)
    .then((result) => result.data)
    .catch(() => undefined)

  if (result) {
    galleryInfo.value = result
    date.value = new Date(result.date)
  }
}

onMounted(async () => {
  await getGalleryInfo()

  observer = new IntersectionObserver(async (entries) => {
    if (entries[0].isIntersecting) {
      await fetchImages()
    }
  })
  if (observerTarget.value) {
    observer.observe(observerTarget.value)
  }
})

onUnmounted(() => {
  if (observer && observerTarget.value) {
    observer.unobserve(observerTarget.value)
  }
  observer = null
})
</script>
