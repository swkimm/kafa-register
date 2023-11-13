<template>
  <div
    class="text-black py-8 sm:py-10 max-w-screen-xl w-full h-full flex flex-col items-center text-center px-4 md:px-20 mx-auto"
  >
    <div class="py-8 sm:py-16 w-full">
      <div class="text-3xl font-bold">일정</div>
      <div class="overflow-x-scroll">
        <BracketItem class="overflow-hidden" />
      </div>
    </div>
    <div class="text-black py-8 sm:py-10 w-full h-full flex flex-col items-center">
      <div class="max-w-screen-xl rounded-2xl w-full">
        <div class="w-full">
          <leagueItem :data="games"></leagueItem>
        </div>
      </div>
    </div>
    <div class="py-16 w-full">
      <div class="text-3xl font-bold">출전팀</div>
      <div
        class="text-3xl font-extrabold text-center mt-20 max-w-screen-xl px-4 sm:px-20 mx-auto w-full"
      >
        <TeamListItem />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BracketItem from './BracketItem.vue'
import TeamListItem from './TeamListItem.vue'
import leagueItem from '../schedule/league/leagueItem.vue'
import type { GameInfo } from '../schedule/league/interfaces'
import { axiosInstance } from '@/common/auth/store'
import { onMounted, ref, type Ref } from 'vue'

const games: Ref<GameInfo[]> = ref([])
const validIds = [87, 88, 89, 90, 93, 94]

onMounted(async () => {
  games.value = await getLeagueGames()
  games.value = games.value.filter((game) => validIds.includes(game.id))
})

async function getLeagueGames() {
  return await axiosInstance.get(`/team-game/leagueId/5`).then((result) => result.data)
}
</script>
