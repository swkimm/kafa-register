<template>
  <div
    class="flex flex-col py-3 rounded-lg border-2 border-gray-300 bg-slate-50 drop-shadow-sm text-neutral-600 hover:bg-slate-300 hover:cursor-pointer"
    @click="router.push(`/game/${game?.id}`)"
  >
    <div class="flex flex-row gap-3 items-center ps-3 font-semibold text-sm sm:text-base">
      <div class="w-5">
        <img
          :src="game?.homeTeam.profileImgUrl"
          @error="onNoTeamProfileImage"
          alt=""
          loading="lazy"
        />
      </div>
      <div>{{ game?.homeTeam.initial }}</div>
      <div class="ml-auto">{{ game?.homeTeamScore }}</div>
      <div>
        <FontAwesomeIcon
          icon="fa-solid fa-caret-left"
          class="text-base"
          :class="game?.result === GameResult.HomeWin ? 'text-neutral-800' : 'text-slate-50 '"
        ></FontAwesomeIcon>
      </div>
    </div>
    <div class="flex flex-row gap-3 ps-3 items-center font-semibold mt-1 text-sm sm:text-base">
      <div class="w-5">
        <img
          :src="game?.awayTeam.profileImgUrl"
          @error="onNoTeamProfileImage"
          alt=""
          loading="lazy"
        />
      </div>
      <div>{{ game?.awayTeam.initial }}</div>
      <div class="ml-auto">{{ game?.awayTeamScore }}</div>
      <div>
        <FontAwesomeIcon
          icon="fa-solid fa-caret-left"
          class="text-base"
          :class="game?.result === GameResult.AwayWin ? 'text-neutral-800' : 'text-slate-50 '"
        ></FontAwesomeIcon>
      </div>
    </div>
    <div class="my-2">
      <hr />
    </div>
    <div class="flex text-xs px-3 text-neutral-600">
      <span class="font-bold me-1">{{ game?.name }}</span>
      {{ new Date(game?.gameday).getMonth() + 1 }}/{{
        new Date(game?.gameday).getDate().toString().padStart(2, '0')
      }}
      {{ new Date(game?.gameday).getHours().toString().padStart(2, '0') }}:{{
        new Date(game?.gameday).getMinutes().toString().padStart(2, '0')
      }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { type PropType } from 'vue'
import type { Game } from './interfaces/game.interface'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { GameResult } from '../game/interfaces/game.interface'
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  game: {
    type: Object as PropType<Game>,
    required: true
  }
})

const onNoTeamProfileImage = (event: Event) => {
  const imgElement = event.target as HTMLImageElement
  imgElement.src = 'https://cdn.playprove.one/default/logo.webp'
}
</script>
