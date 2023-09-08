<template>
  <div :style="{ backgroundColor: banner?.teamColor || '#173921' }">
    <div class="mb-3 flex flex-row pt-8">
      <div class="basis-1/3 text-white">
        <h1 class="pl-5 sm:pl-3 md:pl-10">
          <div class="text-xs sm:text-xs">{{ getFirstWord(banner?.name || '') }}</div>
        </h1>
        <h1 class="pl-5 sm:pl-3 sm:text-m md:pl-10 md:text-xl">
          {{ getRemainingWords(banner?.name || '') }}
        </h1>
      </div>
      <div class="basis-1/3">
        <img
          :src="banner?.profileImgUrl"
          class="items-center text-center m-auto hidden lg:block sm:hidden lg:w-64 lg:h-64"
        />
      </div>
      <div class="basis-1/3">
        <img
          :src="banner?.profileImgUrl"
          class="items-center block lg:hidden md:block sm:block sm:w-32 sm:h-32 md:w-32 md:h-32"
        />
      </div>
    </div>
    <div class="mb-3 flex flex-col sm:flex-row pt-4 pb-4 px-5">
      <div
        class="flex flex-col border-0 text-white basis-1/3 xl:items-center xl:border-r lg:items-center lg:border-r md:items-center md:border-r sm:flex-col sm:items-start"
      >
        <div class="text-xs mb-2">CONFERENCE</div>
        <div class="font-bold lg:text-2xl sm:text-lg">{{ banner?.association.name }}</div>
      </div>
      <hr class="border-b-0 my-3" />

      <div
        class="flex flex-col text-white basis-1/3 xl:items-center xl:border-r lg:items-center lg:border-r md:items-center md:border-r sm:flex-col sm:items-start sm-border-b"
      >
        <div class="text-xs mb-2">NICKNAME</div>
        <div class="font-bold lg:text-2xl sm:text-lg">{{ getRemainingWords(banner?.name) }}</div>
      </div>
      <hr class="border-b-0 my-3" />
      <div
        class="flex flex-col border-0 text-white basis-1/3 xl:items-center xl:border-0 lg:items-center lg:border-0 md:items-center sm:flex-col sm:items-start"
      >
        <div class="text-xs mb-2">COLORS</div>
        <div class="font-bold lg:text-2xl sm:text-lg">
          {{ banner?.teamColor }} & {{ banner?.teamSubColor }}
        </div>
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
