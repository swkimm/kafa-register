<template>
  <div
    class="flex flex-col sm:flex-row font-sans rounded-lg bg-black drop-shadow-xl text-white"
    :style="{ backgroundColor: team.team_color }"
  >
    <router-link :to="{ name: 'team detail', params: { id: team.id } }">
      <div class="flex flex-col relative items-center justify-center px-10">
        <img
          :src="team.profile_img_url"
          @error="onNoTeamProfileImage"
          class="mt-5 h-40"
          loading="lazy"
        />
      </div>
    </router-link>
    <form @submit.prevent="openDetail" class="flex-auto p-5 sm:w-56">
      <div class="flex flex-wrap">
        <h1
          class="flex-1 text-lg font-extrabold"
          :class="{ 'text-black': isWhite(team.team_color) }"
        >
          {{ getFirstWord(team.name) }}
        </h1>
        <div class="w-full flex-none text-sm font-bold text-gray-400 mt-2">
          {{ getRemainingWords(team.name) }}
        </div>
      </div>
      <div class="flex my-6 text-sm font-bold">
        <div class="mx-auto">
          <router-link :to="{ name: 'team detail', params: { id: team.id } }">
            <button
              class="h-10 px-6 font-semibold rounded-md bg-white text-black"
              :class="{ 'border-2 border-black': isWhite(team.team_color) }"
            >
              팀 페이지
            </button>
          </router-link>
        </div>
      </div>
      <p class="text-sm" :class="{ 'text-black': isWhite(team.team_color) }">
        since {{ new Date(team.created_at).getFullYear() }}
      </p>
    </form>
  </div>
</template>
<script lang="ts" setup>
import { ref, type PropType, toRefs } from 'vue'
import type { Team } from './interface/team.interface'

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

function isWhite(color: string) {
  return color === '#ffffff' || color === 'white'
}

const open = ref(false)

const onNoTeamProfileImage = (event: Event) => {
  const imgElement = event.target as HTMLImageElement
  imgElement.src = 'https://cdn.playprove.one/default/logo.webp'
}
</script>
