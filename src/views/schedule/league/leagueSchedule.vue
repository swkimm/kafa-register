<template>
  <div class="text-black py-4 sm:py-10 w-full h-full flex flex-col items-center">
    <div class="py-4 sm:py-10 max-w-screen-xl rounded-2xl px-4 md:px-20 w-full">
      <div class="font-bold text-lg sm:text-3xl pb-5 sm:pb-16 pt-5">
        <h1>{{ league?.name }}</h1>
      </div>
      <div v-for="(weekGame, index) in groupedGames" :key="index" class="py-5 w-full">
        <h2 class="text-base sm:text-xl font-bold mb-3">Week {{ index + 1 }}</h2>
        <leagueItem :data="weekGame[1]"></leagueItem>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref, watch, type Ref } from 'vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import type { GameInfo } from './interfaces'
import { axiosInstance } from '@/common/auth/store'
import type { LeagueInfo } from '../association/interfaces'
import leagueItem from './leagueItem.vue'

const route = useRoute()
const leagueId = computed(() => route.params.id)
const games: Ref<GameInfo[]> = ref([])
const league: Ref<LeagueInfo | undefined> = ref()
const groupedGames: Ref<Map<number, GameInfo[]> | undefined> = ref()

onMounted(async () => {
  await getLeagueDetail()
  await getLeagueGames()
})

onBeforeRouteLeave(() => {
  if (unwatch) {
    unwatch()
  }
})

const unwatch = watch(leagueId, async (newId, oldId) => {
  if (newId !== oldId) {
    await getLeagueDetail()
    await getLeagueGames()
  }
})

async function getLeagueGames(): Promise<void> {
  const result: GameInfo[] = await axiosInstance
    .get(`/team-game/leagueId/${leagueId.value}`)
    .then((result) => result.data)

  if (result.length > 0) {
    games.value = result
    groupedGames.value = groupByWeek(games.value)
  }
}

async function getLeagueDetail(): Promise<void> {
  const result: LeagueInfo = await axiosInstance
    .get(`/league/${leagueId.value}`)
    .then((result) => result.data)

  league.value = result
}

function getWeekNumber(d: Date): number {
  const dayOfWeek = d.getUTCDay()
  const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek

  d.setUTCDate(d.getUTCDate() + diffToMonday)

  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))

  const differenceInTime = d.getTime() - yearStart.getTime()
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24))

  return Math.floor(differenceInDays / 7) + 1
}

function groupByWeek(data: GameInfo[]): Map<number, GameInfo[]> {
  const groupedByWeek = new Map<number, GameInfo[]>()

  for (let item of data) {
    const date = new Date(item.gameday)
    const weekNumber = getWeekNumber(date)

    if (!groupedByWeek.has(weekNumber)) {
      groupedByWeek.set(weekNumber, [])
    }

    groupedByWeek.get(weekNumber)!.push(item)
  }

  return groupedByWeek
}
</script>
