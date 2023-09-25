<template>
  <div class="flex flex-col">
    <div class="relative flex justify-center w-full h-60%">
      <div class="w-[1500px] h-[150px] sm:h-[350px]">
        <img :src="currentImageUrl" alt="description" class="object-cover w-full h-full" />
      </div>
      <div class="absolute bottom-3 right-1 transform -translate-x-1/2 z-10 space-x-2">
        <button
          v-for="page in totalPages"
          :key="page"
          :class="{
            'text-opacity-100': currentPage === page,
            'text-opacity-50': currentPage !== page
          }"
          class="text-4xl sm:text-8xl text-white hover:text-opacity-100 focus:outline-none"
          @click="navigate(page)"
        >
          •
        </button>
      </div>
    </div>

    <div v-for="game in displayGame" :key="game.id" class="flex justify-center bg-white MT-5 py-4">
      <div class="max-w-screen-xl rounded-2xl px-4 md:px-20 w-full shadow-lg">
        <div class="text-black grid grid-cols-10 items-center mx-auto gap-y-4">
          <!-- Home Team -->
          <div class="col-span-4 flex items-center">
            <router-link
              :to="`/team/${game.homeTeam.id}`"
              class="flex flex-row items-center gap-x-3 sm:gap-x-5 md:gap-x-8"
            >
              <img :src="game.homeTeam.profileImgUrl" alt="" class="w-16 sm:w-18 md:w-24" />
              <div class="hidden sm:block mr-3" style="width: 150px">
                <p class="text-xs font-bold text-black">HOME</p>
                <div class="text-sm font-semibold sm:text-xl">
                  {{ getFirstWord(game.homeTeam.name) }}
                </div>
                <div class="block">
                  {{ game.homeTeam.initial }}
                </div>
              </div>
              <div class="text-lg sm:text-3xl font-black">{{ game.homeTeamScore }}</div>
            </router-link>
          </div>

          <!-- Match Info -->
          <div class="col-span-2 flex flex-col items-center justify-center gap-y-2">
            <div class="text-xs sm:text-lg hidden sm:block">{{ game.name }}</div>
            <!-- <div class="text-xs font-medium">{{ printTime(game.gameday) }}</div> -->
            <div class="text-xs sm:text-lg font-extrabold">RESULT</div>
          </div>

          <!-- Away Team -->
          <div class="col-span-4 flex items-center justify-end py-5">
            <router-link
              :to="`/team/${game.awayTeam.id}`"
              class="flex flex-row-reverse items-center gap-x-3 sm:gap-x-5 md:gap-x-8"
            >
              <img :src="game.awayTeam.profileImgUrl" alt="" class="w-16 sm:w-18 md:w-24" />
              <div class="hidden sm:block ml-3" style="width: 150px">
                <p class="text-xs font-bold text-black">AWAY</p>
                <div class="text-sm font-semibold sm:text-xl">
                  {{ getFirstWord(game.awayTeam.name) }}
                </div>
                <div class="sm:block">
                  {{ game.awayTeam.initial }}
                </div>
              </div>
              <div class="text-lg sm:text-3xl font-black">{{ game.awayTeamScore }}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full text-center bg-white">
      <div class="grid sm:grid-cols-3 gap-4 sm:px-16">
        <div class="pl-3 pt-3 sm:col-span-2">
          <div class="text-xl font-bold text-left flex justify-between items-center">
            경기 일정
            <div class="mr-3">
              <button class="text-end text-xl sm:text-2xl" @click="previousImage">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                  <path
                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                  />
                </svg>
              </button>
              <button class="text-end text-xl sm:text-2xl ml-5 sm:ml-10" @click="nextImage">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                  <path
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <img :src="gameScheduleImgUrl[currentScheduleIndex]" alt="" class="mt-3" />
        </div>
        <div class="pl-3 pt-3 text-xl font-bold text-left">
          NOTICE
          <div class="bg-gray-100">
            <table class="mt-3">
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="notice in 6" :key="notice" class="mt-3">
                  <td class="p-3">[공지] test {{ notice }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="flex flex-col bg-white">
        <div class="py-24">
          <h1 class="text-3xl font-extrabold mb-14">협회 등록 팀 현황</h1>
          <div class="mx-auto max-w-screen-xl px-6 lg:px-8">
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div
                v-for="stat in stats"
                :key="stat.id"
                class="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt class="text-base font-bold text-teal-500 leading-7">
                  {{ stat.name }}
                </dt>
                <dd
                  class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
                >
                  {{ stat.value }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="py-24">
          <h1 class="text-3xl font-extrabold">주관 및 주최</h1>
          <div class="mx-auto max-w-screen-sm px-20 md:px-4">
            <div
              class="mx-auto mt-14 grid grid-cols-1 items-center gap-x-2 gap-y-10 sm:gap-x-4 lg:mx-0 lg:grid-cols-2"
            >
              <img
                class="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                src="/images/safa.png"
                alt="SAFA"
                width="200"
                height="80"
              />
              <img
                class="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
                src="/images/ggafa.png"
                alt="GGAFA"
                width="200"
                height="80"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col bg-white">
        <div class="py-24">
          <h1 class="text-3xl font-extrabold">후원</h1>
          <div class="mx-auto max-w-screen-sm px-20 md:px-4">
            <div
              class="mx-auto mt-14 grid grid-cols-1 items-center gap-x-5 gap-y-10 sm:gap-x-10 lg:mx-0 lg:grid-cols-4"
            >
              <img
                class="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
                src="/images/hongcheon.jpeg"
                alt="홍천군"
                width="300"
                height="80"
              />
              <img
                class="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                src="/images/hongcheonSports.png"
                alt="홍천군체육회"
                width="300"
                height="140"
              />
              <img
                class="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
                src="/images/logo.jpg"
                alt="KAFA"
                width="300"
                height="80"
              />
              <img
                class="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
                src="/images/playprove.png"
                alt="Play Prove"
                width="300"
                height="80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <alertModal></alertModal>
</template>
<script lang="ts" setup>
import alertModal from '@/modal/alertModal.vue'
import { useHead } from '@vueuse/head'
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { axiosInstance } from '@/common/auth/store'

let timeoutId: number | null = null

const currentPage = ref<number>(1)
const totalPages = 5

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

interface GetLeagueGames {
  id: number
  homeTeamId: number
  homeTeamScore: number
  awayTeamId: number
  awayTeamScore: number
  leagueId: number
  name: string
  gameday: Date
  location: string
  result: string
  awayTeam: {
    id: number
    name: string
    initial: string
    profileImgUrl: string
  }
  homeTeam: {
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

const getFirstWord = (str: string) => {
  const firstSpaceIndex = str.indexOf(' ')
  return firstSpaceIndex !== -1 ? str.substring(0, firstSpaceIndex) : str
}

const gameResults = ref<GetLeagueGames[]>([])

const sortedGameResults = computed(() => {
  return [...gameResults.value].sort((a, b) => {
    if (typeof a.gameday === 'string' && typeof b.gameday === 'string') {
      const dateA = new Date(a.gameday)
      const dateB = new Date(b.gameday)
      return dateB.getTime() - dateA.getTime() // 내림차순 정렬
    }
    return 0
  })
})
const currentGameIndex = ref(0)
let timer: number | null = null

const displayGame = computed(() => {
  return sortedGameResults.value.length ? [sortedGameResults.value[currentGameIndex.value]] : []
})

const startTimer = () => {
  timer = window.setInterval(() => {
    currentGameIndex.value = (currentGameIndex.value + 1) % sortedGameResults.value.length
  }, 5000)
}

const getLeagueGames = () => {
  for (let gameId = 19; gameId < 24; gameId++) {
    axiosInstance
      .get(`/team-game/${gameId}`)
      .then((response) => {
        gameResults.value.push(response.data)

        console.log('리그게임 불러오기', response.data)
      })
      .catch((error) => {
        if (error) {
          alert('일정 불러오기 오류입니다.')
        }
      })
  }
}

const gameScheduleImgUrl = ref<string[]>([
  '/images/mainScheduleImg/seoulWeek1.jpg',
  '/images/mainScheduleImg/seoulWeek2.jpg',
  '/images/mainScheduleImg/seoulWeek3.jpg',
  '/images/mainScheduleImg/seoulWeek4.jpg',
  '/images/mainScheduleImg/seoulWeek5.jpg',
  '/images/mainScheduleImg/seoulWeek6.jpg'
])
const currentScheduleIndex = ref(0)

const previousImage = () => {
  if (currentScheduleIndex.value > 0) {
    currentScheduleIndex.value--
  }
}

const nextImage = () => {
  if (currentScheduleIndex.value < gameScheduleImgUrl.value.length - 1) {
    currentScheduleIndex.value++
  }
}

const upcomingGameList = ref<UpcomingGame[]>()

watch(
  currentPage,
  (newPage) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      if (newPage < totalPages) {
        navigate(newPage + 1)
      } else {
        navigate(1)
      }
    }, 5000)
  },
  { immediate: true }
)
const take = ref(15)

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

const navigate = (page: number) => {
  currentPage.value = page
}

const currentImageUrl = computed(() => {
  switch (currentPage.value) {
    case 1:
      return '/images/mainTopImg/mainTop1.png'
    case 2:
      return '/images/mainTopImg/mainTop2.jpg'
    case 3:
      return '/images/mainTopImg/mainTop3.jpg'
    case 4:
      return '/images/mainTopImg/mainTop4.jpg'
    case 5:
      return '/images/mainTopImg/mainTop5.jpg'
    default:
      return ''
  }
})

useHead({
  title: '대한미식축구협회',
  meta: [
    { name: 'description', content: '대한미식축구협회 메인페이지' },
    {
      property: 'og:url',
      content: 'https://kafa.one'
    },
    { property: 'og:title', content: '대한미식축구협회' },
    { property: 'og:description', content: '대한미식축구협회 메인페이지' },
    { property: 'og:image', content: 'https://kafa.one/images/ogtag.png' },
    { property: 'og:image:height', content: '400' },
    { property: 'og:image:width', content: '800' }
  ]
})

const stats = [
  { id: 1, name: '합계', value: '20' },
  { id: 2, name: '서울 미식축구협회', value: '14' },
  { id: 3, name: '경기강원 미식축구협회', value: '6' }
]

onMounted(async () => {
  await getUpcomingGames()
  await getLeagueGames()
  startTimer()
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>
<style scoped></style>
