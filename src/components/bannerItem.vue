<template>
  <div class="flex justify-center items-center w-full bg-indigo-800">
    <div class="max-w-screen-xl px-4 sm:px-20 overflow-x-hidden">
      <div v-if="enable" class="flex flex-row space-x-3 py-2.5 overflow-x-scroll">
        <div
          v-for="list in upcomingGameList"
          :key="list.id"
          class="whitespace-nowrap text-white flex flex-col gap-y-1 border-solid border-x border-white px-3 py-2"
        >
          <div class="flex text-xs font-bold mb-1">
            {{ formatGameDay(list.gameday) }}
          </div>
          <div class="flex text-xs font-semibold">
            <img
              :src="list.homeTeam.profileImgUrl"
              alt=""
              class="h-5 w-5 mr-2 rounded-full"
              loading="lazy"
            />
            {{ getFirstWord(list.homeTeam.initial) }}
          </div>
          <div class="flex text-xs font-semibold">
            <img
              :src="list.awayTeam.profileImgUrl"
              alt=""
              class="h-5 w-5 mr-2 rounded-full"
              loading="lazy"
            />
            {{ getFirstWord(list.awayTeam.initial) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { axiosInstance } from '@/common/auth/store'
import { onMounted, ref } from 'vue'

const take = ref(15)

interface UpcomingGame {
  id: number
  location: string
  gameday: string
  homeTeam: {
    id: number
    name: string
    initial: string
    profileImgUrl: string
  }
  awayTeam: {
    id: number
    name: string
    initial: string
    profileImgUrl: string
  }
  league: {
    id: number
    name: string
  }
}

const upcomingGameList = ref<UpcomingGame[]>()

const getFirstWord = (str: string) => {
  const firstSpaceIndex = str.indexOf(' ')
  return firstSpaceIndex !== -1 ? str.substring(0, firstSpaceIndex) : str
}
const formatGameDay = (gameday: string) => {
  const date = new Date(gameday)

  date.setHours(date.getHours() - 9)

  const monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
  ]

  const day = date.getDate()
  const month = monthNames[date.getMonth()]
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'pm' : 'am'

  if (minutes === 0) {
    return `${month} ${day}th, ${hours % 12 || 12} ${ampm}`
  } else {
    return `${month} ${day}th, ${hours % 12 || 12}:${minutes}0 ${ampm}`
  }
}

const getUpcomingGames = async () => {
  await axiosInstance
    .get(`team-game/leagueId/1/upcoming`, {
      params: {
        take: take.value
      }
    })
    .then((response) => {
      upcomingGameList.value = response.data
      console.log(response.data)
    })
    .catch((error) => {
      if (error) {
        alert('다가오는 일정 불러오기 오류')
      }
    })
}

onMounted(async () => {
  await getUpcomingGames()
})

const enable = ref(true)
</script>
<style scoped></style>
