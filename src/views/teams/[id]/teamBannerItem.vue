<template>
  <div :style="{ backgroundColor: banner?.teamColor || '#173921' }">
    <div class="mx-auto max-w-screen-xl px:4 sm:px-20 text-white">
      <div class="mb-3 flex flex-row pt-8">
        <div class="basis-1/3" :class="{ 'text-black': isWhite(banner?.teamColor as string) }">
          <h1 class="text-xs sm:text-xs px-4 sm:px-0">
            {{ getFirstWord(banner?.name || '') }}
          </h1>
          <h1 class="sm:text-m md:text-xl px-4 sm:px-0">
            {{ getRemainingWords(banner?.name || '') }}
          </h1>
        </div>
        <div class="basis-1/3 px-4">
          <img
            :src="banner?.profileImgUrl"
            @error="onNoTeamProfileImage"
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
      <div class="mb-3 flex flex-col sm:flex-row pt-4 pb-4 px-4">
        <div
          :class="{ 'text-black': isWhite(banner?.teamColor as string) }"
          class="flex flex-col border-0 basis-1/3 xl:items-center xl:border-r lg:items-center lg:border-r md:items-center md:border-r sm:flex-col sm:items-start"
        >
          <div class="text-xs mb-2">Association</div>
          <div class="font-bold lg:text-2xl sm:text-lg">{{ banner?.association.name }}</div>
        </div>
        <hr class="border-b-0 my-3" />

        <div
          :class="{ 'text-black': isWhite(banner?.teamColor as string) }"
          class="flex flex-col basis-1/3 xl:items-center xl:border-r lg:items-center lg:border-r md:items-center md:border-r sm:flex-col sm:items-start sm-border-b"
        >
          <div class="text-xs mb-2">Nickname</div>
          <div class="font-bold lg:text-2xl sm:text-lg">{{ getRemainingWords(banner?.name) }}</div>
        </div>
        <hr class="border-b-0 my-3" />
        <div
          :class="{ 'text-black': isWhite(banner?.teamColor as string) }"
          class="flex flex-col border-0 basis-1/3 xl:items-center xl:border-0 lg:items-center lg:border-0 md:items-center sm:flex-col sm:items-start"
        >
          <div class="text-xs mb-2">Established</div>
          <div class="font-bold lg:text-2xl sm:text-lg">
            {{ new Date(banner?.createdAt).getFullYear() }}
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
  createdAt: string
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
    type: Object as PropType<TeamDetail>,
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

function isWhite(color: string) {
  return color === '#ffffff' || color === 'white'
}

const onNoTeamProfileImage = (event: Event) => {
  const imgElement = event.target as HTMLImageElement
  imgElement.src = 'https://cdn.playprove.one/default/logo.webp'
}
</script>
<style scoped></style>
