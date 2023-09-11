<template>
  <div>
    <h1
      v-if="content?.name === null || content?.name === undefined"
      class="mb-5 font-extrabold font-mono text-2xl text-left"
    >
      팀명 Content
    </h1>
    <h1 v-else class="mb-5 font-extrabold font-mono text-2xl text-left">
      {{ getRemainingWords(content?.name) }} Content
    </h1>
    <div class="overflow-hidden">
      <div class="overflow-x-scroll">
        <div class="flex flex-row space-x-5">
          <div v-for="(card, index) in paginatedCards" :key="index" class="flex">
            <div class="bg-white w-72">
              <img :src="card.profileImgUrl" class="mx-auto w-48 h-48" />
              <div class="p-6">
                <h2 class="text-xl font-semibold text-gray-800">
                  {{ card.contentType }}
                </h2>
                <h2 class="text-xl font-semibold text-gray-800">
                  {{ card.title }}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center flex justify-between items-center mt-3">
      <i class="fa-solid fa-chevron-left hover:cursor-pointer" @click="prevPage"></i>
      <i class="fa-solid fa-chevron-right hover:cursor-pointer" @click="nextPage"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, type PropType, toRefs } from 'vue'

const currentPage = ref(1)
const cardsPerPage = 4

interface TeamDetail {
  id: number
  name: string
  profileImgUrl: string
  message: string | null | undefined
  teamColor: string
  workoutId: number
  workout: {
    id: number
    name: string
  }
  association: {
    id: number
    name: string
  }
}

const props = defineProps({
  content: {
    type: Object as PropType<TeamDetail | null | undefined>,
    required: true
  }
})

const getRemainingWords = (str: string) => {
  const firstSpaceIndex = str.indexOf(' ')
  return firstSpaceIndex !== -1 ? str.substring(firstSpaceIndex + 1) : ''
}

const { content } = toRefs(props)

const cards = [
  {
    profileImgUrl: content.value?.profileImgUrl,
    contentType: 'lorem1',
    title: 'lorem1'
  },
  {
    profileImgUrl: content.value?.profileImgUrl,
    contentType: 'lorem2',
    title: 'lorem2'
  },
  {
    profileImgUrl: content.value?.profileImgUrl,
    contentType: 'lorem3',
    title: 'lorem3'
  },
  {
    profileImgUrl: content.value?.profileImgUrl,
    contentType: 'lorem4',
    title: 'lorem4'
  },
  {
    profileImgUrl: content.value?.profileImgUrl,
    contentType: 'lorem5',
    title: 'lorem5'
  },
  {
    profileImgUrl: content.value?.profileImgUrl,
    contentType: 'lorem6',
    title: 'lorem6'
  },
  {
    profileImgUrl: content.value?.profileImgUrl,
    contentType: 'lorem7',
    title: 'lorem7'
  },
  {
    profileImgUrl: content.value?.profileImgUrl,
    contentType: 'lorem8',
    title: 'lorem8'
  },
  {
    profileImgUrl: content.value?.profileImgUrl,
    contentType: 'lorem9',
    title: 'lorem9'
  },
  {
    profileImgUrl: content.value?.profileImgUrl,
    contentType: 'lorem10',
    title: 'lorem10'
  }
]

const paginatedCards = computed(() => {
  const startIndex = (currentPage.value - 1) * cardsPerPage
  const endIndex = startIndex + cardsPerPage
  return cards.slice(startIndex, endIndex)
})

const totalPages = computed(() => Math.ceil(cards.length / cardsPerPage))

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}
</script>

<style scoped></style>
