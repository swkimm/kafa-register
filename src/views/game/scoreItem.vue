<template>
  <div class="bg-black py-4 w-full flex flex-col items-center">
    <div class="max-w-screen-xl rounded-2xl px-4 md:px-20 w-full text-start">
      <div class="text-slate-300 text-xs sm:text-base">{{ gameInfo?.league.name }}</div>
      <div class="text-white text-base sm:text-2xl font-bold">{{ gameInfo?.association.name }}</div>
    </div>
  </div>
  <div class="bg-slate-800 py-4 sm:py-10 w-full flex flex-col items-center">
    <div class="max-w-screen-xl rounded-2xl px-4 md:px-20 w-full">
      <div class="text-white grid grid-cols-10 place-items-center">
        <div class="col-span-10 sm:col-span-4">
          <div class="flex flex-row items-center text-start gap-x-5">
            <div>
              <p class="text-xs font-bold text-slate-300">HOME</p>
              <h1 class="text-sm sm:text-xl">{{ gameInfo?.homeTeam.name.split(' ')[0] }}</h1>
            </div>
            <img :src="gameInfo?.homeTeam.profileImgUrl" alt="" class="w-10 sm:w-24" />
            <div class="text-lg sm:text-5xl font-bold">
              {{ gameInfo?.homeTeamScore ? gameInfo?.homeTeamScore : '--' }}
            </div>
          </div>
        </div>
        <div class="col-span-10 sm:col-span-2">
          <div
            class="flex flex-col items-center text-center justify-center text-xs sm:text-sm text-slate-300 py-10 sm:py-0"
          >
            <div class="font-semibold text-xs sm:text-lg">{{ gameInfo?.name }}</div>
            <div class="mt-2">{{ printTime(gameDate) }}</div>
            <div>{{ gameInfo?.location }}</div>
          </div>
        </div>
        <div class="col-span-10 sm:col-span-4">
          <div class="flex flex-row items-center text-end gap-x-5">
            <div class="text-lg sm:text-5xl font-bold">
              {{ gameInfo?.awayTeamScore ? gameInfo?.awayTeamScore : '--' }}
            </div>
            <img :src="gameInfo?.awayTeam.profileImgUrl" alt="" class="w-10 sm:w-24" />
            <div>
              <p class="text-xs font-bold text-slate-300">AWAY</p>
              <h1 class="text-sm sm:text-xl">{{ gameInfo?.awayTeam.name.split(' ')[0] }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch, type Ref } from 'vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import type { GameDetailInfo } from './interfaces/game.interface'
import { axiosInstance } from '@/common/auth/store'

const route = useRoute()
const gameId = computed(() => route.params.id)
const gameInfo: Ref<GameDetailInfo | null> = ref(null)
const gameDate: Ref<Date> = ref(new Date())

async function getGameInfo() {
  const result: GameDetailInfo = await axiosInstance
    .get(`/team-game/${gameId.value}`)
    .then((result) => result.data)
    .catch(() => undefined)

  if (result) {
    gameInfo.value = result
    gameDate.value = new Date(result.gameday)
  } else {
    alert('상세 정보 불러오기 오류')
  }
}

function printTime(date: Date) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const min = date.getMinutes().toString().padStart(2, '0')

  return `${month}/${day} ${days[date.getDay()]} ${hour}:${min}`
}

const unwatch = watch(gameId, async (newId, oldId) => {
  if (newId !== oldId) {
    await getGameInfo()
  }
})

onBeforeRouteLeave(() => {
  if (unwatch) {
    unwatch()
  }
})

onMounted(async () => {
  await getGameInfo()
})
</script>

<style scoped></style>
