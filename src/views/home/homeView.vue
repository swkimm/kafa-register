<template>
  <div class="flex flex-col bg-white">
    <div class="relative flex justify-center w-full h-60%">
      <div class="h-[150px] sm:h-[400px] w-full">
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
          class="text-xl sm:text-3xl text-white hover:text-opacity-100 focus:outline-none"
          @click="navigate(page)"
        >
          •
        </button>
      </div>
    </div>

    <div class="text-3xl font-extrabold text-center mt-20 max-w-screen-xl px:4 sm:px-20 mx-auto">
      경기 결과
      <div v-for="game in displayGame" :key="game.id" class="flex justify-center mt-5">
        <div style="max-width: 1500px" class="rounded-2xl w-full shadow-none bg-white py-8">
          <div class="text-black grid grid-cols-12 items-center mx-auto gap-y-4">
            <div class="col-span-1 flex items-center">
              <router-link :to="`/team/${game.homeTeam.id}`">
                <img :src="game.homeTeam.profileImgUrl" alt="" class="w-16 sm:w-18 md:w-24" />
              </router-link>
            </div>

            <div class="col-span-2 flex items-center justify-start">
              <router-link :to="`/team/${game.homeTeam.id}`" class="flex justify-start text-left">
                <div class="ml-3" style="width: 150px">
                  <p class="text-xs font-bold text-black">HOME</p>
                  <div class="sm:hidden text-sm font-semibold text-left">
                    {{ game.homeTeam.initial }}
                  </div>
                  <div class="hidden sm:block text-sm font-semibold sm:text-xl">
                    {{ getFirstWord(game.homeTeam.name) }}
                  </div>
                </div>
              </router-link>
            </div>

            <div class="col-span-1 flex items-center justify-center">
              <div class="text-lg sm:text-3xl font-black">{{ game.homeTeamScore }}</div>
            </div>

            <div class="col-span-1 flex items-center justify-center">
              <FontAwesomeIcon
                icon="fa-solid fa-caret-left"
                class="text-3xl"
                v-if="game.homeTeamScore > game.awayTeamScore"
              />
            </div>

            <div class="col-span-2 flex flex-col items-center justify-center gap-y-2">
              <div class="text-xs sm:text-lg hidden sm:block">{{ game.name }}</div>
              <div class="text-xs sm:text-lg font-extrabold">RESULT</div>
            </div>

            <div class="col-span-1 flex items-center justify-center">
              <FontAwesomeIcon
                icon="fa-solid fa-caret-right"
                class="text-3xl"
                v-if="game.homeTeamScore < game.awayTeamScore"
              />
            </div>

            <div class="col-span-1 flex items-center justify-end">
              <div class="text-lg sm:text-3xl font-black">{{ game.awayTeamScore }}</div>
            </div>

            <div class="col-span-2 flex items-center justify-end">
              <router-link :to="`/team/${game.awayTeam.id}`" class="flex justify-end text-right">
                <div class="mr-3" style="width: 150px">
                  <p class="text-xs font-bold text-black">AWAY</p>
                  <div class="sm:hidden text-sm font-semibold text-right">
                    {{ game.awayTeam.initial }}
                  </div>
                  <div class="hidden sm:block text-sm font-semibold sm:text-xl">
                    {{ getFirstWord(game.awayTeam.name) }}
                  </div>
                </div>
              </router-link>
            </div>

            <div class="col-span-1 flex items-center justify-end">
              <router-link :to="`/team/${game.awayTeam.id}`">
                <img :src="game.awayTeam.profileImgUrl" alt="" class="w-16 sm:w-18 md:w-24" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="text-3xl font-extrabold text-center mt-16 max-w-screen-xl px:4 sm:px-20 mx-auto w-full"
    >
      경기 일정
      <div v-for="game in getDisplayedGames" :key="game.id" class="flex justify-center mt-3 w-full">
        <div class="rounded-2xl w-full shadow-none bg-white py-8">
          <div class="text-black grid grid-cols-8 items-center mx-auto gap-y-4">
            <div class="col-span-1 flex items-center">
              <router-link :to="`/team/${game.homeTeam.id}`">
                <img :src="game.homeTeam.profileImgUrl" alt="" class="w-16 sm:w-18 md:w-24" />
              </router-link>
            </div>

            <div class="col-span-2 flex items-center justify-start">
              <router-link :to="`/team/${game.homeTeam.id}`" class="flex justify-start text-left">
                <div class="ml-3" style="width: 150px">
                  <p class="text-xs font-bold text-black">HOME</p>
                  <div class="sm:hidden text-sm font-semibold text-left">
                    {{ game.homeTeam.initial }}
                  </div>
                  <div class="hidden sm:block text-sm font-semibold sm:text-xl">
                    {{ getFirstWord(game.homeTeam.name) }}
                  </div>
                </div>
              </router-link>
            </div>

            <div class="col-span-2 flex flex-col items-center justify-center gap-y-2">
              <div class="text-xs sm:text-lg font-semibold sm:font-extrabold">
                {{ game.name }}
              </div>
              <div class="text-xs sm:text-lg font-semibold sm:font-extrabold">
                {{ game.location }}
              </div>
              <div class="text-xs sm:text-lg font-semibold sm:font-extrabold">
                {{ getKSTDate(game.gameday) }}
              </div>
            </div>

            <div class="col-span-2 flex items-center justify-end">
              <router-link :to="`/team/${game.awayTeam.id}`" class="flex justify-end text-right">
                <div class="mr-3" style="width: 150px">
                  <p class="text-xs font-bold text-black">AWAY</p>
                  <div class="sm:hidden text-sm font-semibold text-right">
                    {{ game.awayTeam.initial }}
                  </div>
                  <div class="hidden sm:block text-sm font-semibold sm:text-xl">
                    {{ getFirstWord(game.awayTeam.name) }}
                  </div>
                </div>
              </router-link>
            </div>

            <div class="col-span-1 flex items-center justify-end">
              <router-link :to="`/team/${game.awayTeam.id}`">
                <img :src="game.awayTeam.profileImgUrl" alt="" class="w-16 sm:w-18 md:w-24" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-5" style="max-width: 1500px">
        <button
          @click="prevPage"
          :disabled="!canGoPrev"
          class="px-2 py-2 bg-gray-300 rounded-md mr-2"
        >
          <div class="text-lg">이전</div>
        </button>
        <button @click="nextPage" :disabled="!canGoNext" class="px-2 py-2 bg-gray-300 rounded-md">
          <div class="text-lg">다음</div>
        </button>
      </div>

      <div class="text-3xl font-extrabold text-center mt-16 mb-3 hidden">
        NOTICE
        <div class="bg-white mx-auto" style="max-width: 1500px; width: 100%">
          <table class="w-full mx-auto mt-3">
            <thead class="border-b">
              <tr>
                <th class="p-3">분류</th>
                <th class="p-3">제목</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="notice in 5" :key="notice" class="mt-0.5 border-b">
                <td class="p-10 text-sm sm:text-xl">[공지]</td>
                <td class="p-10 text-sm sm:text-xl">test 공지사항 {{ notice }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="flex flex-col bg-white">
        <div class="py-24">
          <h1 class="text-3xl font-extrabold mb-14">협회 등록 팀 현황</h1>
          <div class="mx-auto max-w-screen-xl px-6 lg:px-8" style="max-width: 1500px">
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
          <div class="mx-auto max-w-screen-sm px-20 md:px-4" style="max-width: 1500px">
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
          <div class="mx-auto max-w-screen-sm px-20 md:px-4" style="max-width: 1500px">
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { type GetLeagueGames } from './interfaces/getLeagueGames.interface'
import { type UpcomingGame } from './interfaces/upcommingGame.interface'
import { type RemainingGames } from './interfaces/remainingGames.interface'

let timeoutId: number | null = null

const currentPage = ref<number>(1)
const totalPages = 5

// const containerWidth = ref('1500px')

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
  }, 3000)
}

const getLeagueGames = () => {
  for (let gameId = 19; gameId < 24; gameId++) {
    axiosInstance
      .get(`/team-game/${gameId}`)
      .then((response) => {
        gameResults.value.push(response.data)
      })
      .catch((error) => {
        if (error) {
          alert('일정 불러오기 오류입니다.')
        }
      })
  }
}

const getKSTDate = (utcDate: string): string => {
  // 9시간 밀리초로 변환

  // 문자열로 된 날짜를 Date 객체로 변환
  const date = new Date(utcDate)

  // 9시간 더하기
  date.setTime(date.getTime() + 9)

  // 월/일을 가져오기
  const month = date.getMonth() + 1 // 월은 0에서 시작하기 때문에 1을 더함
  const day = date.getDate()

  // 요일을 가져오기 (영어로)
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const dayName = days[date.getDay()]

  // 시간과 분을 가져오기
  const hours = date.getHours()
  const minutes = date.getMinutes().toString().padStart(2, '0') // 분이 한 자리 수일 때 0을 앞에 붙여줌

  return `${month}/${day} ${dayName} ${hours}:${minutes}`
}

const leagueId = ref(1)
const PAGE_SIZE = 3

const remainingGames = ref<RemainingGames[]>([])
const page = ref(1)

const getDisplayedGames = computed(() => {
  const start = (page.value - 1) * PAGE_SIZE
  const end = start + PAGE_SIZE
  return remainingGames.value.slice(start, end)
})

const canGoNext = computed(() => {
  return page.value * PAGE_SIZE < remainingGames.value.length
})

const canGoPrev = computed(() => {
  return page.value > 1
})

const nextPage = () => {
  if (canGoNext.value) {
    page.value++
  }
}

const prevPage = () => {
  if (canGoPrev.value) {
    page.value--
  }
}
const getRemainingGames = () => {
  axiosInstance
    .get(`/team-game/leagueId/${leagueId.value}`)
    .then((response) => {
      remainingGames.value = response.data.filter((game: RemainingGames) => game.id >= 40)
      console.log(response.data)
    })
    .catch((error) => {
      if (error) {
        alert('경기 일정 불러오기 오류입니다.')
      }
    })
}

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

const upcomingGameList = ref<UpcomingGame[]>()

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
  await getRemainingGames()
  startTimer()
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>
<style scoped></style>
