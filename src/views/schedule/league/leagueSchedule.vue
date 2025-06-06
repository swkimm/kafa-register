<template>
  <SectionTitleItem
    :item="{ title: league?.name, subtitle: league?.host.join(',') }"
  ></SectionTitleItem>
  <div class="text-black py-8 sm:py-10 w-full h-full flex flex-col items-center">
    <div class="max-w-screen-xl rounded-2xl px-4 md:px-20 w-full">
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
import SectionTitleItem from '@/components/sectionTitleItem.vue'
import { useHead } from '@vueuse/head'

const route = useRoute()
const leagueId = computed(() => route.params.id)
const games: Ref<GameInfo[]> = ref([])
const league: Ref<LeagueInfo> = ref({
  id: 0,
  name: '리그 정보 불러오는 중',
  workoutId: 0,
  startedAt: '1970-01-01',
  endedAt: '1970-01-01',
  host: [],
  sponser: []
})
const groupedGames: Ref<Map<number, GameInfo[]> | undefined> = ref()
const leagueName = ref()

useHead({
  title: '리그일정',
  meta: [
    { name: 'description', content: leagueName },
    {
      property: 'og:url',
      content: 'https://kafa.one' + useRoute().fullPath
    },
    { property: 'og:title', content: '리그일정' },
    { property: 'og:description', content: leagueName },
    { property: 'og:image', content: 'https://kafa.one/images/ogtag.png' },
    { property: 'og:image:height', content: '400' },
    { property: 'og:image:width', content: '800' }
  ]
})

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
  leagueName.value = result.name
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
