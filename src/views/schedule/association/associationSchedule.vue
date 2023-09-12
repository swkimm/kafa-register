<template>
  <div class="text-black py-20 w-full h-full flex flex-col items-center">
    <div class="py-15 max-w-screen-xl rounded-2xl px-4 md:px-20 w-full">
      <h1 class="text-center text-3xl font-bold mb-10">{{ associationName }} 리그 일정</h1>
      <div v-if="!noItem">
        <div v-for="league in leagues" :key="league.id">
          <leagueItem
            :id="league.id"
            :name="league.name"
            :started-at="league.startedAt"
            :ended-at="league.endedAt"
            :workout-id="league.workoutId"
            :host="league.host"
            :sponser="league.sponser"
          ></leagueItem>
        </div>
      </div>
      <div v-else>
        <p class="text-center text-xl">해당 협회에서 진행중인 리그 정보가 없습니다.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { axiosInstance } from '@/common/auth/store'
import { useHead } from '@vueuse/head'
import { computed, onMounted, ref, watch, type Ref } from 'vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import type { LeagueInfo } from './interfaces'
import leagueItem from './leagueItem.vue'

const route = useRoute()
const routeId = computed(() => route.params.id)
const noItem = ref(false)
const associationName = ref()
const leagues: Ref<LeagueInfo[]> = ref([])

useHead({
  title: '대한미식축구협회-대회 일정',
  meta: [
    { name: 'description', content: '2023 서울경기강원 추계대회 일정' },
    {
      property: 'og:url',
      content: 'https://kafa.playprove.one/schedule'
    },
    { property: 'og:title', content: '대한미식축구협회-대회 일정' },
    { property: 'og:description', content: '2023 서울경기강원 추계대회 일정' },
    { property: 'og:image', content: 'https://kafa.playprove.one/images/ogtag.png' },
    { property: 'og:image:height', content: '400' },
    { property: 'og:image:width', content: '800' }
  ]
})

async function getLeagues() {
  leagues.value = []

  const result: { leagueIds: number[] } = await axiosInstance
    .get(`/association/${route.params.id}/leagues`)
    .then((result) => result.data)

  if (result.leagueIds.length === 0) {
    noItem.value = true
  } else {
    noItem.value = false
    for (const leagueId of result.leagueIds) {
      leagues.value.push(await getLeagueDetail(leagueId))
    }
  }
}

async function getLeagueDetail(leagueId: number): Promise<LeagueInfo> {
  const result: LeagueInfo = await axiosInstance
    .get(`/league/${leagueId}`)
    .then((result) => result.data)

  return result
}

const unwatch = watch(routeId, async (newId, oldId) => {
  if (newId !== oldId) {
    await getLeagues()
    await getAssociationInfo()
  }
})

onBeforeRouteLeave(() => {
  if (unwatch) {
    unwatch()
  }
})

async function getAssociationInfo() {
  const result = await axiosInstance
    .get(`/association/${route.params.id}`)
    .then((result) => result.data)

  associationName.value = result.name
}

onMounted(async () => {
  await getLeagues()
  await getAssociationInfo()
})
</script>
<style></style>
