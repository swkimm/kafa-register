<template>
  <div class="overflow-x-auto bg-[#F7F7F4]">
    <div class="flex flex-row p-2 rtl">
      <div v-for="list in upcomingGameList" :key="list.id" class="mx-6 whitespace-nowrap">
        <div class="flex text-xs">
          {{ formatGameDay(list.gameday) }}
        </div>
        <div class="flex text-xs">
          <img :src="list.homeTeam.profileImgUrl" alt="" class="h-5 w-5 mr-2" loading="lazy" />
          {{ getFirstWord(list.homeTeam.name) }}
        </div>
        <div class="flex text-xs">
          <img :src="list.awayTeam.profileImgUrl" alt="" class="h-5 w-5 mr-2" loading="lazy" />
          {{ getFirstWord(list.awayTeam.name) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { axiosInstance } from '@/common/auth/store'
import { onMounted, ref } from 'vue'

const take = ref(10)

interface UpcomingGame {
  id: number
  location: string
  gameday: string
  homeTeam: {
    id: number
    name: string
    profileImgUrl: string
  }
  awayTeam: {
    id: number
    name: string
    profileImgUrl: string
  }
}

const upcomingGameList = ref<UpcomingGame[]>()

const getFirstWord = (str: string) => {
  const firstSpaceIndex = str.indexOf(' ')
  return firstSpaceIndex !== -1 ? str.substring(0, firstSpaceIndex) : str
}
const formatGameDay = (dateString: string) => {
  const parts = dateString.replace('T', ' ').split(' ')
  const datePart = parts[0]
  const timePart = parts[1]

  const dateParts = datePart.split('-')
  const year = dateParts[0].slice(-2)
  const month = dateParts[1]
  const day = dateParts[2]

  const hour = timePart.split(':')[0]

  return `${year}.${month}.${day} ${hour}시`
}

const getUpcomingGames = () => {
  axiosInstance
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
onMounted(() => {
  getUpcomingGames()
})
</script>
<style scoped></style>
