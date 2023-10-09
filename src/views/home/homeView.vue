<template>
  <div class="flex flex-col bg-white w-full h-full">
    <div class="relative flex justify-center w-full h-full">
      <div class="relative w-full h-screen">
        <video
          :src="videoSource"
          autoplay
          loop
          muted
          playsinline
          class="object-cover w-full h-full absolute top-50% left-50% transform -translate-y-50% -translate-x-50%"
        />
      </div>
    </div>
    <div
      class="text-3xl font-extrabold text-center mt-20 max-w-screen-xl px-4 sm:px-20 mx-auto w-full"
    >
      타이거볼 진출팀
      <div class="mt-12 mb-5 text-2xl">서울지역</div>
      <div class="grid grid-cols-12 mt-5">
        <div class="col-span-4">
          <div
            class="flex flex-col gap-4 justify-center items-center"
            @click="() => router.push('/team/6')"
          >
            <img
              src="https://cdn.playprove.one/team-profile-img/5b96f591-5d81-41e6-b0ee-1bae295e467e.webp"
              class="w-28"
              loading="lazy"
            />
            <div class="text-xl">서울대(#1)</div>
          </div>
        </div>
        <div class="col-span-4">
          <div
            class="flex flex-col gap-4 justify-center items-center"
            @click="() => router.push('/team/19')"
          >
            <img
              src="https://cdn.playprove.one/team/19/profile/91ad44ff-2af6-4219-bbc9-38f5c808597f.webp"
              class="w-28"
              loading="lazy"
            />
            <div class="text-xl">성균관대(#2)</div>
          </div>
        </div>
        <div class="col-span-4">
          <div
            class="flex flex-col gap-4 justify-center items-center"
            @click="() => router.push('/team/10')"
          >
            <img
              src="https://cdn.playprove.one/team-profile-img/6dec9af9-04f3-417a-80aa-78a8f1b97b6f.webp"
              class="w-28"
              loading="lazy"
            />
            <div class="text-xl">한국외대(#3)</div>
          </div>
        </div>
      </div>
      <div class="mt-12 mb-5 text-2xl">부산울산경남지역</div>
      <div class="grid grid-cols-12">
        <div class="col-span-6">
          <div
            class="flex flex-col gap-4 justify-center items-center"
            @click="router.push('/team/30')"
          >
            <img src="https://cdn.playprove.one/default/logo.webp" class="w-28" loading="lazy" />
            <div class="text-xl">동의대(#1)</div>
          </div>
        </div>
        <div class="col-span-6">
          <div
            class="flex flex-col gap-4 justify-center items-center"
            @click="router.push('/team/29')"
          >
            <img src="https://cdn.playprove.one/default/logo.webp" class="w-28" loading="lazy" />
            <div class="text-xl">동아대(#2)</div>
          </div>
        </div>
      </div>
      <div class="mt-12 mb-5 text-2xl">대구경북지역</div>
      <div class="grid grid-cols-12">
        <div class="col-span-6">
          <div class="flex flex-col gap-4 justify-center items-center">
            <img src="https://cdn.playprove.one/default/logo.webp" class="w-28" loading="lazy" />
            <div class="text-xl">TBD</div>
          </div>
        </div>
        <div class="col-span-6">
          <div class="flex flex-col gap-4 justify-center items-center">
            <img src="https://cdn.playprove.one/default/logo.webp" class="w-28" loading="lazy" />
            <div class="text-xl">TBD</div>
          </div>
        </div>
      </div>
      <div class="mt-12 mb-5 text-2xl">경기강원지역</div>
      <div class="grid grid-cols-12 mb-20">
        <div class="col-span-12">
          <div class="flex flex-col gap-4 justify-center items-center">
            <img src="https://cdn.playprove.one/default/logo.webp" class="w-28" loading="lazy" />
            <div class="text-xl">TBD</div>
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
import { ref, computed, watch, onMounted, onUnmounted, onBeforeUnmount } from 'vue'
import { axiosInstance } from '@/common/auth/store'
import { type GetLeagueGames } from './interfaces/getLeagueGames.interface'
import { type UpcomingGame } from './interfaces/upcommingGame.interface'
import { type RemainingGames } from './interfaces/remainingGames.interface'
import { useRouter } from 'vue-router'

let timeoutId: number | null = null

const router = useRouter()

const currentPage = ref<number>(1)
const totalPages = 5

const desktopVideoPath = 'https://cdn.playprove.one/landing/desktop.mp4'
const mobileVideoPath = 'https://cdn.playprove.one/landing/mobile.mp4'
const isMobile = ref(window.innerWidth <= 768)

const videoSource = computed(() => {
  return isMobile.value ? mobileVideoPath : desktopVideoPath
})

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768
}

const gameResults = ref<GetLeagueGames[]>([])

const sortedGameResults = computed(() => {
  return [...gameResults.value].sort((a, b) => {
    if (typeof a.gameday === 'string' && typeof b.gameday === 'string') {
      const dateA = new Date(a.gameday)
      const dateB = new Date(b.gameday)
      return dateB.getTime() - dateA.getTime()
    }
    return 0
  })
})
const currentGameIndex = ref(0)
let timer: number | null = null

const startTimer = () => {
  timer = window.setInterval(() => {
    currentGameIndex.value = (currentGameIndex.value + 1) % sortedGameResults.value.length
  }, 3000)
}

const getLeagueGames = () => {
  for (let gameId = 40; gameId < 46; gameId++) {
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

const remainingGames = ref<RemainingGames[]>([])

const leagueId = ref(1)
const getRemainingGames = () => {
  axiosInstance
    .get(`/team-game/leagueId/${leagueId.value}`)
    .then((response) => {
      remainingGames.value = response.data.filter((game: RemainingGames) => game.id >= 46)
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

onMounted(async () => {
  await getUpcomingGames()
  await getLeagueGames()
  await getRemainingGames()
  startTimer()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>
<style scoped></style>
