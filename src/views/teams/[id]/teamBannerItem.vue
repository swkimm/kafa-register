<template>
  <div :style="{ backgroundColor: banner?.teamColor || '#173921' }">
    <div class="mb-3 flex flex-row pt-8">
      <div class="basis-1/3 text-white">
        <h1 class="pl-5 sm:pl-3 sm:text-m md:pl-10 md:text-xl">
          {{ (banner?.association?.name || '') as string }}
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
    <div class="mb-3 flex flex-row pt-4">
      <div class="flex flex-col items-end text-white basis-1/3">
        <h1>test</h1>
        <h1>test</h1>
      </div>
      <div class="flex flex-col items-center text-white basis-1/3">
        <h1>test</h1>
        <h1>test</h1>
      </div>
      <div class="flex flex-col items-start text-white basis-1/3">
        <h1>test</h1>
        <h1>test</h1>
      </div>
    </div>
    <div class="flex items-center justify-center h-ful text-xl">
      <a href="#" class="text-white text-lg sm:text-sm"
        ><i class="fa-brands fa-instagram">인스타그램</i></a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type PropType, toRefs } from 'vue'

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
  banner: {
    type: Object as PropType<TeamDetail | null | undefined>,
    required: true
  }
})

const getRemainingWords = (str: string) => {
  const firstSpaceIndex = str.indexOf(' ')
  return firstSpaceIndex !== -1 ? str.substring(firstSpaceIndex + 1) : ''
}

const { banner } = toRefs(props)
</script>
<style scoped></style>
