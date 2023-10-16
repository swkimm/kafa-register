<template>
  <div
    class="flex flex-col py-3 rounded-lg border-2 border-gray-300 bg-slate-50 drop-shadow-sm text-neutral-600"
  >
    <div class="flex flex-row gap-3 items-center ps-3 font-semibold text-sm sm:text-base">
      <div class="w-5">
        <img src="" @error="onNoTeamProfileImage" alt="" loading="lazy" />
      </div>
      <div>TBD</div>
      <div class="ml-auto">0</div>
      <div>
        <FontAwesomeIcon
          icon="fa-solid fa-caret-left"
          class="text-base text-slate-50"
        ></FontAwesomeIcon>
      </div>
    </div>
    <div class="flex flex-row gap-3 ps-3 items-center font-semibold text-sm sm:text-base mt-1">
      <div class="w-5">
        <img src="" @error="onNoTeamProfileImage" alt="" loading="lazy" />
      </div>
      <div>TBD</div>
      <div class="ml-auto">0</div>
      <div>
        <FontAwesomeIcon
          icon="fa-solid fa-caret-left"
          class="text-base text-slate-50"
        ></FontAwesomeIcon>
      </div>
    </div>
    <div class="my-2">
      <hr />
    </div>
    <div class="flex text-xs px-3 text-neutral-600">
      <span class="font-bold me-1">{{ game?.name }}</span> {{ game?.date }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { PropType } from 'vue'

defineProps({
  game: {
    type: Object as PropType<{
      name: string
      date: string
    }>,
    required: true
  }
})

const onNoTeamProfileImage = (event: Event) => {
  const imgElement = event.target as HTMLImageElement
  imgElement.src = 'https://cdn.playprove.one/default/logo.webp'
}
</script>
