<template>
  <div class="flex flex-col sm:flex-row font-sans rounded-lg bg-black drop-shadow-xl">
    <router-link :to="{ name: 'team detail', params: { id: team.id } }">
      <div class="flex flex-col relative items-center justify-center px-10">
        <img :src="team.profileImgUrl" alt="" class="mt-5 w-40 h-40" loading="lazy" />
      </div>
    </router-link>
    <form @submit.prevent="openDetail" class="flex-auto p-5 sm:w-56">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-lg font-extrabold text-white">
          {{ getFirstWord(team.name) }}
        </h1>
        <div class="w-full flex-none text-sm font-bold text-gray-400 mt-2">
          {{ getRemainingWords(team.name) }}
        </div>
      </div>
      <div class="flex my-6 text-sm font-bold">
        <div class="mx-auto">
          <router-link :to="{ name: 'team detail', params: { id: team.id } }">
            <button class="h-10 px-6 font-semibold rounded-md bg-white text-black">
              팀 소개 보기
            </button>
          </router-link>
        </div>
      </div>
      <p class="text-sm text-white">{{ team.createdAt.substring(0, 10) }}</p>
    </form>
  </div>
</template>
<script lang="ts" setup>
import { ref, type PropType, toRefs } from 'vue'

interface Team {
  id: number
  workoutId: number
  name: string
  message?: string
  profileImgUrl: string
  associationId: number
  createdAt: string
}

const props = defineProps({
  team: {
    type: Object as PropType<Team>,
    required: true
  }
})

const getFirstWord = (str: string) => {
  const firstSpaceIndex = str.indexOf(' ')
  return firstSpaceIndex !== -1 ? str.substring(0, firstSpaceIndex) : str
}

const getRemainingWords = (str: string) => {
  const firstSpaceIndex = str.indexOf(' ')
  return firstSpaceIndex !== -1 ? str.substring(firstSpaceIndex + 1) : ''
}
const { team } = toRefs(props)

function openDetail() {
  open.value = true
}

const open = ref(false)
</script>
