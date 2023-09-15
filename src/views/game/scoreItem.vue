<template>
  <div class="bg-black py-4 w-full flex flex-col items-center">
    <div class="max-w-screen-xl rounded-2xl px-4 md:px-20 w-full text-start">
      <div class="text-slate-300 text-xs sm:text-base">{{ gameInfo?.league.name }}</div>
      <div class="text-white text-base sm:text-2xl font-bold">{{ gameInfo?.association.name }}</div>
    </div>
  </div>
  <div class="bg-white py-4 sm:py-10 w-full flex flex-col items-center">
    <div class="max-w-screen-xl rounded-2xl px-4 md:px-20 w-full">
      <div class="text-black grid grid-cols-10 items-center mx-auto">
        <div class="col-span-4">
          <router-link :to="`/team/${gameInfo?.homeTeam.id}`">
            <div
              class="flex flex-row items-center justify-start text-start gap-x-3 sm:gap-x-5 md:gap-x-8 my-0"
            >
              <img :src="gameInfo?.homeTeam.profileImgUrl" alt="" class="w-10 sm:w-18 md:w-24" />
              <div class="hidden sm:block">
                <p
                  class="text-xs font-bold text-black"
                  :class="{ 'text-slate-500': gameInfo?.result === GameResult.AwayWin }"
                >
                  HOME
                </p>
                <h1
                  class="text-sm font-semibold sm:text-xl"
                  :class="{ 'text-slate-500': gameInfo?.result === GameResult.AwayWin }"
                >
                  {{ gameInfo?.homeTeam.name.split(' ')[0] }}
                </h1>
              </div>
              <div class="block sm:hidden">
                <h1
                  class="text-sm sm:text-xl font-semibold"
                  :class="{ 'text-slate-500': gameInfo?.result === GameResult.AwayWin }"
                >
                  {{ gameInfo?.homeTeam.initial }}
                </h1>
              </div>
              <div
                class="text-lg sm:text-5xl font-black"
                :class="{ 'text-slate-500': gameInfo?.result === GameResult.AwayWin }"
              >
                {{ gameInfo?.homeTeamScore ? gameInfo?.homeTeamScore : '--' }}
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-span-2">
          <div
            class="flex-row items-center text-center justify-center gap-x-4 text-xs sm:text-sm text-black py-10 hidden sm:flex"
          >
            <FontAwesomeIcon
              icon="fa-solid fa-caret-left"
              class="text-3xl"
              v-if="gameInfo?.result === GameResult.HomeWin"
            ></FontAwesomeIcon>
            <div
              class="flex-col items-center text-center justify-center text-xs sm:text-sm text-black"
            >
              <div class="font-semibold text-xs sm:text-base md:text-lg">{{ gameInfo?.name }}</div>
              <div class="mt-2">{{ printTime(gameDate) }}</div>
              <div>{{ gameInfo?.location }}</div>
            </div>
            <FontAwesomeIcon
              icon="fa-solid fa-caret-right"
              v-if="gameInfo?.result === GameResult.AwayWin"
              class="text-3xl"
            ></FontAwesomeIcon>
          </div>
          <div
            class="flex-row items-center text-center justify-center gap-x-1.5 text-black py-3 flex sm:hidden my-0"
          >
            <FontAwesomeIcon
              icon="fa-solid fa-caret-left"
              v-if="gameInfo?.result === GameResult.HomeWin"
            ></FontAwesomeIcon>
            <div class="text-xs font-medium">{{ printTime(gameDate) }}</div>
            <FontAwesomeIcon
              icon="fa-solid fa-caret-right"
              v-if="gameInfo?.result === GameResult.AwayWin"
            ></FontAwesomeIcon>
          </div>
        </div>
        <div class="col-span-4">
          <router-link :to="`/team/${gameInfo?.awayTeam.id}`">
            <div
              class="flex flex-row items-center justify-end text-end gap-x-3 sm:gap-x-5 md:gap-x-8"
            >
              <div
                class="text-lg sm:text-5xl font-black"
                :class="{ 'text-slate-500': gameInfo?.result === GameResult.HomeWin }"
              >
                {{ gameInfo?.awayTeamScore ? gameInfo?.awayTeamScore : '--' }}
              </div>
              <div class="block sm:hidden">
                <h1
                  class="text-sm sm:text-xl font-semibold"
                  :class="{ 'text-slate-500': gameInfo?.result === GameResult.HomeWin }"
                >
                  {{ gameInfo?.awayTeam.initial }}
                </h1>
              </div>
              <div class="hidden sm:block">
                <p
                  class="text-xs font-bold text-black"
                  :class="{ 'text-slate-500': gameInfo?.result === GameResult.HomeWin }"
                >
                  AWAY
                </p>
                <h1
                  class="text-sm sm:text-xl font-semibold"
                  :class="{ 'text-slate-500': gameInfo?.result === GameResult.HomeWin }"
                >
                  {{ gameInfo?.awayTeam.name.split(' ')[0] }}
                </h1>
              </div>
              <img :src="gameInfo?.awayTeam.profileImgUrl" alt="" class="w-10 sm:w-18 md:w-24" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch, type Ref } from 'vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { GameResult, type GameDetailInfo } from './interfaces/game.interface'
import { axiosInstance } from '@/common/auth/store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

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
