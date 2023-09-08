<template>
  <div :style="{ backgroundColor: banner?.teamColor || '#173921' }">
    <div class="mb-3 flex flex-row pt-8">
      <div class="basis-1/3 text-white">
        <h1 class="pl-5 sm:pl-3 sm:text-m md:pl-10 md:text-xl">
          {{ getFirstWord(banner?.name || '') }}
        </h1>
        <h1 class="pl-5 sm:pl-3 sm:text-m md:pl-10 md:text-xl">
          {{ getRemainingWords(banner?.name || '') }}
        </h1>
      </div>
      <div class="basis-1/3">
        <img
          :src="banner?.profileImgUrl"
          class="sm:w-32 sm:h-32 md:w-64 md:h-64 items-center text-center m-auto"
        />
      </div>
    </div>
    <div class="mb-3 flex flex-row pt-4 pb-4">
      <div class="flex flex-col items-center border-r text-white basis-1/3">
        <div>CONFERENCE</div>
        <div>{{ banner?.association.name }}</div>
      </div>

      <div class="flex flex-col items-center border-r text-white basis-1/3">
        <h4>NICKNAME</h4>
        <div>{{ getRemainingWords(banner?.name) }}</div>
      </div>

      <div class="flex flex-col items-center text-white basis-1/3">
        <h4>COLORS</h4>
        <h1>{{ banner?.teamColor }} & {{ banner?.teamSubColor }}</h1>
      </div>
    </div>
    <div
      class="flex flex-row justify-center py-3"
      :style="{ backgroundColor: darkenColor(banner?.teamColor, 10) }"
    >
      <div class="flex flex-fow">
        <a href="#" class="">
          <i class="fa-brands fa-instagram fa-xl mx-1 align-mid" style="color: #ffffff"></i>
        </a>
        <div class="text-white text-sm align-mid">@insta</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type PropType, toRefs } from 'vue'

interface TeamDetail {
  id: number
  name: string
  initial: string
  message: string | null | undefined
  profileImgUrl: string
  teamColor: string
  teamSubColor: string
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
  banner: {
    type: Object as PropType<TeamDetail | null | undefined>,
    required: true
  }
})

const getFirstWord = (str: string) => {
  const firstSpaceIndex = str.indexOf(' ')
  return firstSpaceIndex !== -1 ? str.substring(0, firstSpaceIndex) : str
}

const getRemainingWords = (str: string | undefined) => {
  if (!str) return ''
  const firstSpaceIndex = str.indexOf(' ')
  return firstSpaceIndex !== -1 ? str.substring(firstSpaceIndex + 1) : ''
}

const darkenColor = (hex: string | undefined, percent: number) => {
  if (!hex) return ''

  hex = hex.replace(/^#/, '')
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  const darkerR = Math.round((r * (100 - percent)) / 100)
  const darkerG = Math.round((g * (100 - percent)) / 100)
  const darkerB = Math.round((b * (100 - percent)) / 100)

  const darkerHex = `#${darkerR.toString(16).padStart(2, '0')}${darkerG
    .toString(16)
    .padStart(2, '0')}${darkerB.toString(16).padStart(2, '0')}`

  return darkerHex
}

const { banner } = toRefs(props)
</script>
<style scoped></style>
