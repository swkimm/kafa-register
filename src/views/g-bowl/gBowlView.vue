<template>
  <GameItem></GameItem>
  <div class="bg-red-500 py-4 sm:py-10 w-full flex flex-col items-center">
    <div class="max-w-screen-xl rounded-2xl px-4 md:px-20 w-full">
      <div class="flex flex-row items-center">
        <div class="text-white text-xs sm:text-xl font-bold">
          전체일정은 대회일정 탭에서 확인할 수 있습니다
        </div>
        <div class="ml-auto">
          <a
            href="#"
            class="rounded-md bg-white px-3.5 py-2.5 text-xs sm:text-base font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            @click="() => router.push('/schedule/league/2')"
            >바로가기</a
          >
        </div>
      </div>
    </div>
  </div>
  <div
    class="text-black py-8 sm:py-10 max-w-screen-xl w-full h-full flex flex-col items-center text-center px-4 md:px-20 mx-auto"
  >
    <div class="py-8 text-2xl font-bold">리그 순위</div>
    <div class="w-full">
      <RankTable :teams="teams" />
      <p class="text-xs text-start mt-3 text-slate-600">
        ※ 인천라이노스 팀의 경우 리그 결과에 관계없이 광개토볼에 참여하지 않으며, 순위는 합계
        표시됩니다.
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { axiosInstance } from '@/common/auth/store'
import type { GameInfo } from '../schedule/league/interfaces'
import { onMounted, ref, type Ref } from 'vue'
import type { Team } from '../teams/interface/team.interface'
import { GameResult } from '../game/interfaces/game.interface'
import RankTable from './rankTable.vue'
import GameItem from './gameItem.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const games: Ref<GameInfo[]> = ref([])
const teams: Ref<Team[]> = ref([])

async function getLeagueGames(): Promise<void> {
  const result: GameInfo[] = await axiosInstance
    .get(`/team-game/leagueId/2`)
    .then((result) => result.data)

  games.value = result
}

async function getAssociationTeams(): Promise<void> {
  const result: Team[] = await axiosInstance
    .get('/association/6/teams')
    .then((result) => result.data)

  teams.value = result
}

function rank() {
  teams.value.forEach((team) => {
    team.win = 0
    team.lose = 0
    team.draw = 0
  })

  games.value.forEach((game) => {
    if (game.result !== GameResult.NotFinished) {
      if (game.result === GameResult.Draw) {
        teams.value.forEach((team) => {
          if (team.id === game.homeTeam.id || team.id === game.awayTeam.id) {
            team.draw ? (team.draw += 1) : (team.draw = 1)
          }
        })
      } else {
        teams.value.forEach((team) => {
          if (team.id === game.homeTeam.id) {
            if (game.result === GameResult.HomeWin) {
              team.win ? (team.win += 1) : (team.win = 1)
            } else {
              team.lose ? (team.lose += 1) : (team.lose = 1)
            }
          }
          if (team.id === game.awayTeam.id) {
            if (game.result === GameResult.AwayWin) {
              team.win ? (team.win += 1) : (team.win = 1)
            } else {
              team.lose ? (team.lose += 1) : (team.lose = 1)
            }
          }
        })
      }
    }
  })

  teams.value = teams.value
    .sort((a, b) => (b.win || 0) - (a.win || 0))
    .sort((a, b) => (b.draw || 0) - (a.draw || 0))
    .sort((a, b) => (a.lose || 0) - (b.lose || 0))

  let lose = -1
  let win = -1
  let draw = -1
  let rank = 0

  teams.value.forEach((team) => {
    if ((team.win || 0) !== win || (team.lose || 0) !== lose || (team.draw || 0) !== draw) {
      win = team.win || 0
      lose = team.lose || 0
      draw = team.draw || 0
      rank += 1
    }

    team.rank = rank
  })
}

onMounted(async () => {
  await getLeagueGames()
  await getAssociationTeams()
  rank()
})
</script>
