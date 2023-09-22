<template>
  <div class="flex flex-col">
    <div class="relative flex justify-center w-full h-60%">
      <div class="w-[1500px] h-[350px] sm:h-[650px]">
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
      <!-- <div class="py-10 sm:py-20 text-start max-w-screen-xl px-4 md:px-20 w-full">
        <h3 class="text-lg md:text-2xl text-teal-300 mb-2 font-bold">
          2023 홍천군수배 서울/경기·강원
        </h3>
        <h2 class="text-3xl md:text-5xl font-display font-extrabold mb-6 font-mono text-white">
          추계 대학미식축구 선수권전
        </h2>
        <p class="text-sm md:text-base text-white font-thin">
          대회명: 2023 홍천군수배 서울경기강원 추계 대학미식축구 선수권전<br />
          장소: 홍천 종합운동장<br />
          주최: 대한 미식축구협회, 서울 미식축구협회, 경기강원 미식축구협회<br />
          신청마감: 2023년 8월 31일 20시<br />
          참가자격: 2023년 8월 기준 서울 미식축구협회 등록 대학 미식축구팀 또는 경기강원
          미식축구협회 등록 대학 미식축구팀
        </p>
        <div class="flex flex-col md:flex-row flex-wrap justify-start items-start gap-4 mt-8">
          <a href="https://forms.gle/HxFxoZPkzak7QX3C9" target="_blank">
            <button
              class="whitespace-nowrap bg-transparent ring-1 text-teal-300 ring-teal-400 hover:ring-2 hover:bg-black hover:ring-teal-500 hover:text-white uppercase font-sans active:brightness-95 font-semibold hover:subpixel-antialiased ring-inset px-12 py-4 text-base md:text-xl rounded-lg gap-4"
            >
              출전 팀 등록하기
            </button>
          </a>
        </div>
      </div> -->
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
          <table class="mt-3">
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              <tr v-for="notice in 5" :key="notice" class="mt-5">
                <td>[공지] TEST {{ notice }}</td>
                <hr />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- <div class="flex flex-col justify-center items-center">
        <div class="py-20 text-start max-w-screen-xl px-4 md:px-20">
          <h1 class="text-3xl font-extrabold text-center">경기장 정보</h1>
          <div class="overflow-hidden py-20">
            <div class="mx-auto max-w-7xl">
              <div
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
              >
                <div class="lg:pr-8 lg:pt-4">
                  <div class="lg:max-w-lg">
                    <h2 class="text-base font-extrabold leading-7 text-teal-500">
                      Hongcheon Stadium
                    </h2>
                    <p class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                      홍천 종합운동장
                    </p>
                    <p class="mt-6 text-base leading-8 text-gray-600">
                      홍천종합운동장(洪川綜合運動場, Hongcheon Stadium)은 대한민국 강원특별자치도
                      홍천군에 있는 스포츠 시설이다. 천연잔디 필드와 우레탄 필드가 갖춰진
                      경기장이며, 2004년 10월에 준공되었다.
                    </p>
                    <dl
                      class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
                    >
                      <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                        <dt class="inline font-semibold text-gray-900">
                          <component
                            :is="feature.icon"
                            class="absolute left-1 top-1 h-5 w-5 text-teal-500"
                            aria-hidden="true"
                          />
                          {{ feature.name }}
                        </dt>
                        {{ ' ' }}
                        <dd class="inline">{{ feature.description }}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <img
                  src="/images/stadium.jpg"
                  alt="Product screenshot"
                  class="w-full sm:w-[57rem] max-w-sm sm:max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
                  width="2432"
                  height="1442"
                />
              </div>
            </div>
          </div>
        </div>
      </div> -->
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
// import { LinkIcon, MapIcon, MapPinIcon } from '@heroicons/vue/20/solid'
import alertModal from '@/modal/alertModal.vue'
import { useHead } from '@vueuse/head'
import { ref, computed, watch, onMounted } from 'vue'
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

const gameScheduleImgUrl = ref<string[]>([
  '/images/mainScheduleImg/seoulWeek1.jpg',
  '/images/mainScheduleImg/seoulWeek2.jpg',
  '/images/mainScheduleImg/seoulWeek3.jpg',
  '/images/mainScheduleImg/seoulWeek4.jpg',
  '/images/mainScheduleImg/seoulWeek5.jpg'
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

// const features = [
//   {
//     name: '주소',
//     description: '강원 홍천군 홍천읍 태학여내길 27',
//     icon: MapPinIcon
//   },
//   {
//     name: '지도 앱에서 보기',
//     description: 'https://naver.me/FOvh9bcR',
//     icon: MapIcon
//   },
//   {
//     name: '홈페이지',
//     description: 'http://sports.gangwon.kr',
//     icon: LinkIcon
//   }
// ]

const stats = [
  { id: 1, name: '합계', value: '20' },
  { id: 2, name: '서울 미식축구협회', value: '14' },
  { id: 3, name: '경기강원 미식축구협회', value: '6' }
]

onMounted(async () => {
  await getUpcomingGames()
})
</script>
<style scoped></style>
