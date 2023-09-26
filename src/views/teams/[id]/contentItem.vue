<template>
  <div>
    <h1
      v-if="content?.name === null || content?.name === undefined"
      class="mb-5 font-extrabold font-mono text-2xl text-left"
    >
      팀명 Gallery
    </h1>
    <h1 v-else class="mb-5 font-extrabold font-mono text-2xl text-left">
      {{ getRemainingWords(content?.name) }} Gallery
    </h1>
    <div v-if="galleries.length !== 0" class="overflow-hidden">
      <div class="overflow-x-scroll">
        <div class="flex flex-row space-x-5">
          <div v-for="(card, index) in galleries" :key="index" class="flex">
            <router-link :to="`/gallery/${card.id}`">
              <div class="bg-white w-72 p-6">
                <img :src="card.name" class="mx-auto w-48 h-48" />
                <div class="mt-5">
                  <h2 class="text-xl font-semibold text-gray-800 text-center">
                    {{ card.name }}
                  </h2>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else>등록된 갤러리가 없습니다</div>
  </div>
</template>

<script lang="ts" setup>
import { type PropType, toRefs } from 'vue'
import type { Gallery } from './interfaces/gallery.interface'

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
  },
  galleries: {
    type: Object as PropType<Gallery[]>,
    required: true
  }
})

const getRemainingWords = (str: string) => {
  const firstSpaceIndex = str.indexOf(' ')
  return firstSpaceIndex !== -1 ? str.substring(firstSpaceIndex + 1) : ''
}

const { content } = toRefs(props)
</script>

<style scoped></style>
