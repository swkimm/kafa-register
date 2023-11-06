<template>
  <div class="mt-14 grid grid-cols-10 gap-4 min-w-[1120px]">
    <div class="col-span-2 flex flex-col gap-6">
      <GameItem :game="games[0]"></GameItem>
      <GameItem :game="games[1]"></GameItem>
    </div>
    <div class="col-span-2 flex flex-col justify-center">
      <GameItem :game="games[5]"></GameItem>
    </div>
    <div class="col-span-2 flex flex-col justify-center font-bold text-xl">
      <div>
        <FontAwesomeIcon
          icon="fa-solid fa-trophy"
          class="text-5xl text-amber-400 mb-3"
        ></FontAwesomeIcon>
      </div>
      <div>TIGER BOWL</div>
      <div class="font-normal text-xs">12/02 14:00</div>
    </div>
    <div class="col-span-2 flex flex-col justify-center">
      <GameItem :game="games[4]"></GameItem>
    </div>
    <div class="col-span-2 flex flex-col gap-6">
      <GameItem :game="games[2]"></GameItem>
      <GameItem :game="games[3]"></GameItem>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, type Ref } from 'vue'
import GameItem from './GameItem.vue'
import type { Game } from './interfaces/game.interface'
import { axiosInstance } from '@/common/auth/store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const games: Ref<Game[]> = ref([])

onMounted(async () => {
  const result: Game[] = await axiosInstance
    .get('/team-game/leagueId/5')
    .then((result) => result.data)
  games.value = result

  console.log(result)
})
</script>
