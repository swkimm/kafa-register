<template>
  <div class="font-semibold text-lg mb-1">{{ formatDate(weekMatch.games[0].matchDate) }}</div>

  <table class="p-10 w-full table-auto bg-white rounded-2xl border-black overflow-hidden">
    <thead class="text-left">
      <tr class="border-b-2">
        <th class="text-xs sm:text-base pl-2 py-2">홈</th>
        <th class="text-xs sm:text-base pl-2 py-2">어웨이</th>
        <th class="text-xs sm:text-base pl-2 py-2">시간</th>
        <th class="text-xs sm:text-base pl-2 py-2">구분</th>
        <th class="text-xs sm:text-base pl-2 py-2">중계</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(game, index) in weekMatch.games"
        :key="game.id"
        :class="index % 2 === 0 ? 'bg-white' : 'bg-[#F7F7F4]'"
      >
        <td class="text-xs sm:text-base pl-2 py-3">
          <div v-if="game.homeTeamLogo" class="flex items-center mr-2">
            <a href="/team/teamDetail"><img :src="game.homeTeamLogo" class="h-9 w-9 mr-2" /></a>
            <a href="/team/teamDetail"
              ><div class="hidden sm:block w-28 text-[#06c]">{{ game.homeTeamName }}</div>
            </a>
          </div>
          <div v-else class="flex items-center mr-2">
            <div class="w-28">{{ game.homeTeamName }}</div>
          </div>
        </td>
        <td class="text-xs sm:text-base pl-2 py-3">
          <div v-if="game.awayTeamLogo" class="flex items-center mr-2">
            <a href="/team/teamDetail"> <img :src="game.awayTeamLogo" class="h-9 w-9 mr-2" /></a>
            <a href="/team/teamDetail">
              <div class="hidden sm:block w-28 text-[#06c]">{{ game.awayTeamName }}</div>
            </a>
          </div>
          <div v-else class="flex items-center mr-2">
            <div class="w-28">{{ game.awayTeamName }}</div>
          </div>
        </td>
        <td class="text-xs sm:text-base pl-2 py-3">{{ game.matchTime }}:00</td>
        <td class="text-xs sm:text-base pl-2 py-3">{{ game.division }}</td>
        <td class="text-xs sm:text-base pl-2 py-3">
          <a href="#" class="underline-offset-auto text-teal-500">{{ game.broadcastLink }}</a>
        </td>
      </tr>
    </tbody>
  </table>
  <br />
</template>
<script lang="ts" setup>
import { toRefs, type PropType } from 'vue'

interface Game {
  id: number
  week: number
  matchDate: string
  matchTime: number
  homeTeamLogo: string
  homeTeamName: string
  awayTeamLogo: string
  awayTeamName: string
  division: string
  broadcastLink: string
  games?: Game[]
}

interface OrganizedMatch {
  week: number
  games: Game[]
}
const props = defineProps({
  weekMatch: {
    type: Object as PropType<OrganizedMatch>,
    required: true
  }
})

const { weekMatch } = toRefs(props)

const formatDate = (matchDate: string): string => {
  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월'
  ]
  const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

  const date = new Date(matchDate)
  const month = months[date.getMonth()]
  const day = date.getDate()
  const dayOfWeek = daysOfWeek[date.getDay()]

  return `${month} ${day}일, ${dayOfWeek}`
}
</script>

<style></style>
