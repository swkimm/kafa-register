<template>
  <h1
    v-if="intro?.name === null || intro?.name === undefined"
    class="mb-5 font-extrabold font-mono text-2xl text-left"
  >
    팀명 Intro
  </h1>
  <h1 v-else class="mb-5 font-extrabold font-mono text-2xl text-left">
    {{ getRemainingWords(intro?.name) }} Intro
  </h1>
  <p v-if="intro?.name === null || intro?.name === undefined">
    {{ intro?.message }}
  </p>
  <p v-else>
    {{ 'No message available' }}
  </p>
</template>
<script lang="ts" setup>
import { type PropType, toRefs } from 'vue'

interface TeamDetail {
  id: number
  name: string
  profileImgUrl: string
  message: string | null | undefined
  teamColor: string
  instagramUrl?: string
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
  intro: {
    type: Object as PropType<TeamDetail | null | undefined>,
    required: true
  }
})
// const getFirstWord = (str: string) => {
//   const firstSpaceIndex = str.indexOf(' ')
//   return firstSpaceIndex !== -1 ? str.substring(0, firstSpaceIndex) : str
// }

const getRemainingWords = (str: string) => {
  const firstSpaceIndex = str.indexOf(' ')
  return firstSpaceIndex !== -1 ? str.substring(firstSpaceIndex + 1) : ''
}

const { intro } = toRefs(props)
</script>

<style></style>
