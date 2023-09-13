<template>
  <div class="flex justify-center items-center w-full bg-indigo-800">
    <div class="max-w-screen-xl px-4 sm:px-20 overflow-x-hidden">
      <div
        v-if="enable"
        class="flex flex-row space-x-3 py-2 overflow-x-scroll"
        @mousedown="startDragging"
        @mousemove="performDrag"
        @mouseup="endDragging"
        @mouseleave="endDragging"
      >
        <div
          v-for="list in upcomingGameList"
          :key="list.id"
          class="whitespace-nowrap text-white gap-y-0.5 flex flex-col border-solid border-r border-white px-1 py-0.5"
        >
          <div class="mx-auto w-28">
            <div class="flex text-xxs font-bold mb-1">
              {{ formatGameDay(list.gameday) }}
            </div>
            <div class="flex text-xs font-semibold">
              <img
                :src="list.homeTeam.profileImgUrl"
                alt=""
                class="h-4 w-4 mr-6 rounded-full"
                loading="lazy"
              />
              <p>
                {{ list.homeTeam.initial }}
              </p>
            </div>
            <div class="flex text-xs font-semibold">
              <img
                :src="list.awayTeam.profileImgUrl"
                alt=""
                class="h-4 w-4 mr-6 rounded-full"
                loading="lazy"
              />
              <p>
                {{ list.awayTeam.initial }}
              </p>
            </div>
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

const formatGameDay = (gameday: string) => {
  const date = new Date(gameday)

  const day = date.getDate().toLocaleString()
  const hour = date.getHours()
  const min = date.getMinutes().toLocaleString()
  const month = date.getMonth() + 1

  const hourText = hour < 12 ? 'AM ' + hour : 'PM ' + (hour - 12)

  return `${month.toString().padStart(2, '0')}/${day.padStart(2, '0')} 
  ${hourText}:${min.padStart(2, '0')}`
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

const isDragging = ref(false)

let startX = ref(0)
let scrollLeft = ref(0)

const startDragging = (e: MouseEvent) => {
  isDragging.value = true
  const target = e.currentTarget as HTMLElement
  startX.value = e.pageX - target.offsetLeft
  scrollLeft.value = target.scrollLeft
}

const performDrag = (e: MouseEvent) => {
  if (!isDragging.value) return
  e.preventDefault()
  const target = e.currentTarget as HTMLElement
  const x = e.pageX - target.offsetLeft
  const walk = x - startX.value
  target.scrollLeft = scrollLeft.value - walk
}

const endDragging = () => {
  isDragging.value = false
}
</script>
<style scoped>
/* Chrome, Safari, Opera */
.overflow-x-scroll::-webkit-scrollbar {
  display: none;
}

/* Firefox */
.overflow-x-scroll {
  scrollbar-width: thin;
}

/* IE and Edge */
.overflow-x-scroll {
  -ms-overflow-style: none;
}

.text-xs {
  font-size: 0.65rem;
  line-height: 0.95rem;
}

.text-xxs {
  font-size: 0.6rem;
  line-height: 0.9rem;
}
</style>
