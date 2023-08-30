<template>
  <BannerItem></BannerItem>
  <div
    class="bg-cover bg-center text-black py-10 w-full h-full flex flex-col justify-center items-center"
  >
    <div class="max-w-screen-xl mt-10 px-4 md:px-20">
      <div>
        <h1 class="mb-16 font-extrabold font-mono text-4xl text-center">대회 일정(포스터)</h1>
      </div>
      <div>
        <img src="/images/schedule.jpeg" alt="Schedule Image" />
      </div>
    </div>
    <div class="py-20 max-w-screen-xl rounded-2xl px-4 md:px-20 w-full">
      <div>
        <h1 class="mb-16 mt-10 font-extrabold font-mono text-4xl text-center">대회 일정(상세)</h1>
        <div v-for="index in 7" :key="index">
          <div v-if="index <= 7">
            <div class="font-bold text-2xl text-left my-10">WEEK {{ index }}</div>
            <div v-for="weekMatch in filteredMatches" :key="weekMatch.week">
              <div v-if="weekMatch.week === index">
                <ScheduleItem :weekMatch="weekMatch" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-400 bg-opacity-50 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div
                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 sm:mx-0 sm:h-10 sm:w-10"
                  >
                    <ExclamationTriangleIcon class="h-6 w-6 text-amber-500" aria-hidden="true" />
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">
                      주의
                    </DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        지금 보시는 대회 일정 정보는 확정된 사안이 아니므로 주의해주시기 바랍니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 sm:ml-3 sm:w-auto"
                  @click="open = false"
                >
                  창 닫기
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import BannerItem from '@/components/bannerItem.vue'
import ScheduleItem from '@/views/schedule/scheduleItem.vue' // Import the ScheduleItem component
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import { useHead } from '@vueuse/head'
import { ref, computed } from 'vue'

useHead({
  title: '대한미식축구협회-대회 일정',
  meta: [
    { name: 'description', content: '2023 서울경기강원 추계대회 일정' },
    {
      property: 'og:url',
      content: 'https://register.kafa.one/schedule'
    },
    { property: 'og:title', content: '대한미식축구협회-대회 일정' },
    { property: 'og:description', content: '2023 서울경기강원 추계대회 일정' },
    { property: 'og:image', content: 'https://register.kafa.one/images/ogtag.png' },
    { property: 'og:image:height', content: '400' },
    { property: 'og:image:width', content: '800' }
  ]
})

const open = ref(true)

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
}

interface OrganizedMatch {
  week: number
  matchDate: string
  games: Game[]
}

const match: Game[] = [
  {
    id: 1,
    week: 1,
    matchDate: '2023-09-02',
    matchTime: 10,
    homeTeamLogo: '/images/seoulTeamLogo/Syungkyunkwan.webp',
    homeTeamName: '성균관대학교',
    awayTeamLogo: '/images/seoulTeamLogo/Yonsei.webp',
    awayTeamName: '연세대학교',
    division: '서울 1부 1조',
    broadcastLink: '중계링크'
  },
  {
    id: 2,
    week: 1,
    matchDate: '2023-09-02',
    matchTime: 13,
    homeTeamLogo: '/images/seoulTeamLogo/Seoul.webp',
    homeTeamName: '서울대학교',
    awayTeamLogo: '/images/seoulTeamLogo/Hanyang.webp',
    awayTeamName: '한양대학교',
    division: '서울 1부 1조',
    broadcastLink: '중계링크'
  },
  {
    id: 3,
    week: 1,
    matchDate: '2023-09-03',
    matchTime: 10,
    homeTeamLogo: '/images/seoulTeamLogo/HankukUnivOfForeignStudies.webp',
    homeTeamName: '한국외국어대학교',
    awayTeamLogo: '/images/seoulTeamLogo/SeoulCity.webp',
    awayTeamName: '서울시립대학교',
    division: '서울 1부 2조',
    broadcastLink: '중계링크'
  },
  {
    id: 4,
    week: 1,
    matchDate: '2023-09-03',
    matchTime: 13,
    homeTeamLogo: '/images/seoulTeamLogo/Korea.webp',
    homeTeamName: '고려대학교',
    awayTeamLogo: '/images/seoulTeamLogo/DonggukSeoul.webp',
    awayTeamName: '동국대학교',
    division: '서울 1부 2조',
    broadcastLink: '중계링크'
  },
  {
    id: 5,
    week: 1,
    matchDate: '2023-09-03',
    matchTime: 16,
    homeTeamLogo: '/images/seoulTeamLogo/Konkuk.webp',
    homeTeamName: '건국대학교',
    awayTeamLogo: '/images/seoulTeamLogo/Sogang.webp',
    awayTeamName: '서강대학교',
    division: '서울 2부 II조',
    broadcastLink: '중계링크'
  },
  {
    id: 6,
    week: 2,
    matchDate: '2023-09-09',
    matchTime: 16,
    homeTeamLogo: '/images/seoulTeamLogo/DonggukSeoul.webp',
    homeTeamName: '동국대학교',
    awayTeamLogo: '/images/seoulTeamLogo/HankukUnivOfForeignStudies.webp',
    awayTeamName: '한국외국어대학교',
    division: '서울 1부 2조',
    broadcastLink: '중계링크'
  },
  {
    id: 7,
    week: 2,
    matchDate: '2023-09-09',
    matchTime: 16,
    homeTeamLogo: '/images/ggTeamLogo/Dankook.webp',
    homeTeamName: '단국대학교',
    awayTeamLogo: '/images/ggTeamLogo/Hallym.webp',
    awayTeamName: '한림대학교',
    division: '중부 1조',
    broadcastLink: '중계링크'
  },
  {
    id: 8,
    week: 2,
    matchDate: '2023-09-09',
    matchTime: 16,
    homeTeamLogo: '/images/seoulTeamLogo/SeoulCity.webp',
    homeTeamName: '서울시립대학교',
    awayTeamLogo: '/images/seoulTeamLogo/Korea.webp',
    awayTeamName: '고려대학교',
    division: '서울 1부 2조',
    broadcastLink: '중계링크'
  },
  {
    id: 9,
    week: 2,
    matchDate: '2023-09-10',
    matchTime: 10,
    homeTeamLogo: '/images/seoulTeamLogo/Yonsei.webp',
    homeTeamName: '연세대학교',
    awayTeamLogo: '/images/seoulTeamLogo/Seoul.webp',
    awayTeamName: '서울대학교',
    division: '서울 1부 1조',
    broadcastLink: '중계링크'
  },
  {
    id: 10,
    week: 2,
    matchDate: '2023-09-10',
    matchTime: 13,
    homeTeamLogo: '/images/seoulTeamLogo/Sogang.webp',
    homeTeamName: '서강대학교',
    awayTeamLogo: '/images/seoulTeamLogo/Kookmin.webp',
    awayTeamName: '국민대학교',
    division: '서울 2부 II조',
    broadcastLink: '중계링크'
  },
  {
    id: 11,
    week: 2,
    matchDate: '2023-09-10',
    matchTime: 16,
    homeTeamLogo: '/images/seoulTeamLogo/Soongsil.jpeg',
    homeTeamName: '숭실대학교',
    awayTeamLogo: '/images/seoulTeamLogo/Hongik.webp',
    awayTeamName: '홍익대학교',
    division: '서울 2부 I조',
    broadcastLink: '중계링크'
  },
  {
    id: 12,
    week: 3,
    matchDate: '2023-09-16',
    matchTime: 10,
    homeTeamLogo: '/images/ggTeamLogo/Kangwon.webp',
    homeTeamName: '강원대학교',
    awayTeamLogo: '/images/ggTeamLogo/Inha.webp',
    awayTeamName: '인하대학교',
    division: '중부 2조',
    broadcastLink: '중계링크'
  },
  {
    id: 13,
    week: 3,
    matchDate: '2023-09-16',
    matchTime: 13,
    homeTeamLogo: '/images/seoulTeamLogo/HankukUnivOfForeignStudies.webp',
    homeTeamName: '한국외국어대학교',
    awayTeamLogo: '/images/seoulTeamLogo/Korea.webp',
    awayTeamName: '고려대학교',
    division: '서울 1부 2조',
    broadcastLink: '중계링크'
  },
  {
    id: 14,
    week: 3,
    matchDate: '2023-09-16',
    matchTime: 16,
    homeTeamLogo: '/images/seoulTeamLogo/Soongsil.jpeg',
    homeTeamName: '숭실대학교',
    awayTeamLogo: '/images/seoulTeamLogo/Hongik.webp',
    awayTeamName: '홍익대학교',
    division: '서울 2부 I조',
    broadcastLink: '중계링크'
  },
  {
    id: 15,
    week: 3,
    matchDate: '2023-09-17',
    matchTime: 10,
    homeTeamLogo: '/images/seoulTeamLogo/Kookmin.webp',
    homeTeamName: '국민대학교',
    awayTeamLogo: '/images/seoulTeamLogo/Konkuk.webp',
    awayTeamName: '건국대학교',
    division: '서울 2부 II조',
    broadcastLink: '중계링크'
  },
  {
    id: 16,
    week: 3,
    matchDate: '2023-09-17',
    matchTime: 13,
    homeTeamLogo: '/images/ggTeamLogo/Dankook.webp',
    homeTeamName: '단국대학교',
    awayTeamLogo: '/images/ggTeamLogo/Hanshin.webp',
    awayTeamName: '한신대학교대',
    division: '중부 1조',
    broadcastLink: '중계링크'
  },
  {
    id: 17,
    week: 3,
    matchDate: '2023-09-17',
    matchTime: 16,
    homeTeamLogo: '/images/seoulTeamLogo/Hanyang.webp',
    homeTeamName: '한양대학교',
    awayTeamLogo: '/images/seoulTeamLogo/Syungkyunkwan.webp',
    awayTeamName: '성균관대학교',
    division: '서울 1부 1조',
    broadcastLink: '중계링크'
  },
  {
    id: 18,
    week: 4,
    matchDate: '2023-09-23',
    matchTime: 10,
    homeTeamLogo: '/images/seoulTeamLogo/Hongik.webp',
    homeTeamName: '홍익대학교',
    awayTeamLogo: '/images/seoulTeamLogo/Chungang.webp',
    awayTeamName: '중앙대학교',
    division: '서울 2부 I조',
    broadcastLink: '중계링크'
  },
  {
    id: 19,
    week: 4,
    matchDate: '2023-09-23',
    matchTime: 13,
    homeTeamLogo: '/images/seoulTeamLogo/Hanyang.webp',
    homeTeamName: '한양대학교',
    awayTeamLogo: '/images/seoulTeamLogo/Yonsei.webp',
    awayTeamName: '연세대학교',
    division: '서울 1부 1조',
    broadcastLink: '중계링크'
  },
  {
    id: 20,
    week: 4,
    matchDate: '2023-09-23',
    matchTime: 16,
    homeTeamLogo: '/images/seoulTeamLogo/Syungkyunkwan.webp',
    homeTeamName: '성균관대학교',
    awayTeamLogo: '/images/seoulTeamLogo/Seoul.webp',
    awayTeamName: '서울대학교',
    division: '서울 1부 1조',
    broadcastLink: '중계링크'
  },
  {
    id: 21,
    week: 4,
    matchDate: '2023-09-24',
    matchTime: 10,
    homeTeamLogo: '/images/seoulTeamLogo/DonggukSeoul.webp',
    homeTeamName: '동국대학교',
    awayTeamLogo: '/images/seoulTeamLogo/SeoulCity.webp',
    awayTeamName: '서울시립대학교',
    division: '서울 1부 2조',
    broadcastLink: '중계링크'
  },
  {
    id: 22,
    week: 4,
    matchDate: '2023-09-24',
    matchTime: 13,
    homeTeamLogo: '/images/ggTeamLogo/Kangwon.webp',
    homeTeamName: '강원대학교',
    awayTeamLogo: '/images/ggTeamLogo/Yongin.jpeg',
    awayTeamName: '용인대학교',
    division: '중부 2조',
    broadcastLink: '중계링크'
  },
  {
    id: 23,
    week: 4,
    matchDate: '2023-09-24',
    matchTime: 16,
    homeTeamLogo: '/images/ggTeamLogo/Hallym.webp',
    homeTeamName: '한림대학교',
    awayTeamLogo: '/images/ggTeamLogo/Hanshin.webp',
    awayTeamName: '한신대학교',
    division: '중부 1조',
    broadcastLink: '중계링크'
  },
  {
    id: 24,
    week: 5,
    matchDate: '2023-10-01',
    matchTime: 10,
    homeTeamLogo: '',
    homeTeamName: '7위',
    awayTeamLogo: '',
    awayTeamName: '8위',
    division: '서울 1부 순위',
    broadcastLink: '중계링크'
  },
  {
    id: 25,
    week: 5,
    matchDate: '2023-10-01',
    matchTime: 13,
    homeTeamLogo: '',
    homeTeamName: '팀1',
    awayTeamLogo: '',
    awayTeamName: '팀2',
    division: '서울 1부 4강',
    broadcastLink: '중계링크'
  },
  {
    id: 26,
    week: 5,
    matchDate: '2023-10-01',
    matchTime: 16,
    homeTeamLogo: '',
    homeTeamName: '팀1',
    awayTeamLogo: '',
    awayTeamName: '팀2',
    division: '서울 1부 4강',
    broadcastLink: '중계링크'
  },
  {
    id: 27,
    week: 5,
    matchDate: '2023-10-03',
    matchTime: 10,
    homeTeamLogo: '',
    homeTeamName: '팀1',
    awayTeamLogo: '',
    awayTeamName: '팀2',
    division: '서울 2부 4강',
    broadcastLink: '중계링크'
  },
  {
    id: 28,
    week: 5,
    matchDate: '2023-10-03',
    matchTime: 13,
    homeTeamLogo: '',
    homeTeamName: '팀1',
    awayTeamLogo: '',
    awayTeamName: '팀2',
    division: '서울 2부 4강',
    broadcastLink: '중계링크'
  },
  {
    id: 29,
    week: 5,
    matchDate: '2023-10-03',
    matchTime: 16,
    homeTeamLogo: '/images/ggTeamLogo/Yongin.jpeg',
    homeTeamName: '용인대학교',
    awayTeamLogo: '/images/ggTeamLogo/Inha.webp',
    awayTeamName: '인하대학교',
    division: '중부 2조',
    broadcastLink: '중계링크'
  },
  {
    id: 30,
    week: 6,
    matchDate: '2023-10-07',
    matchTime: 10,
    homeTeamLogo: '',
    homeTeamName: '팀1',
    awayTeamLogo: '',
    awayTeamName: '팀2',
    division: '서울 2부 결승',
    broadcastLink: '중계링크'
  },
  {
    id: 31,
    week: 6,
    matchDate: '2023-10-07',
    matchTime: 13,
    homeTeamLogo: '',
    homeTeamName: '팀1',
    awayTeamLogo: '',
    awayTeamName: '팀2',
    division: '서울 1부 결승',
    broadcastLink: '중계링크'
  },
  {
    id: 32,
    week: 6,
    matchDate: '2023-10-07',
    matchTime: 10,
    homeTeamLogo: '',
    homeTeamName: '5위',
    awayTeamLogo: '',
    awayTeamName: '6위',
    division: '서울 2부 순위',
    broadcastLink: '중계링크'
  },
  {
    id: 33,
    week: 6,
    matchDate: '2023-10-07',
    matchTime: 13,
    homeTeamLogo: '',
    homeTeamName: '1조 1위',
    awayTeamLogo: '',
    awayTeamName: '2조 2위',
    division: '중부 4강',
    broadcastLink: '중계링크'
  },
  {
    id: 34,
    week: 6,
    matchDate: '2023-10-07',
    matchTime: 16,
    homeTeamLogo: '',
    homeTeamName: '5위',
    awayTeamLogo: '',
    awayTeamName: '6위',
    division: '서울 1부 순위',
    broadcastLink: '중계링크'
  },
  {
    id: 35,
    week: 6,
    matchDate: '2023-10-08',
    matchTime: 10,
    homeTeamLogo: '',
    homeTeamName: '3위',
    awayTeamLogo: '',
    awayTeamName: '4위',
    division: '서울 1부 순위',
    broadcastLink: '중계링크'
  },
  {
    id: 36,
    week: 6,
    matchDate: '2023-10-08',
    matchTime: 13,
    homeTeamLogo: '',
    homeTeamName: '2조 1위',
    awayTeamLogo: '',
    awayTeamName: '1조 2위',
    division: '중부 4강',
    broadcastLink: '중계링크'
  },
  {
    id: 37,
    week: 6,
    matchDate: '2023-10-08',
    matchTime: 16,
    homeTeamLogo: '',
    homeTeamName: '3위',
    awayTeamLogo: '',
    awayTeamName: '4위',
    division: '서울 2부 순위',
    broadcastLink: '중계링크'
  },
  {
    id: 38,
    week: 7,
    matchDate: '2023-10-14',
    matchTime: 10,
    homeTeamLogo: '',
    homeTeamName: '팀1',
    awayTeamLogo: '',
    awayTeamName: '팀2',
    division: '서울 승강전',
    broadcastLink: '중계링크'
  },
  {
    id: 39,
    week: 7,
    matchDate: '2023-10-14',
    matchTime: 13,
    homeTeamLogo: '',
    homeTeamName: '1조 3위',
    awayTeamLogo: '',
    awayTeamName: '2조 3위',
    division: '중부 순위',
    broadcastLink: '중계링크'
  },
  {
    id: 40,
    week: 7,
    matchDate: '2023-10-14',
    matchTime: 16,
    homeTeamLogo: '',
    homeTeamName: '팀1',
    awayTeamLogo: '',
    awayTeamName: '팀2',
    division: '중부 결승',
    broadcastLink: '중계링크'
  }
]

const organizedMatches: OrganizedMatch[] = match.reduce((acc: OrganizedMatch[], game: Game) => {
  const existingMatch = acc.find((m) => m.week === game.week && m.matchDate === game.matchDate)

  if (existingMatch) {
    existingMatch.games.push(game)
  } else {
    acc.push({
      week: game.week,
      matchDate: game.matchDate,
      games: [game]
    })
  }

  return acc
}, [])

const filteredMatches = computed(() => {
  const seenMatches = new Set<string>() // Set to track unique matches

  return organizedMatches.filter((match) => {
    const matchIdentifier = `${match.week}_${match.matchDate}`

    if (seenMatches.has(matchIdentifier)) {
      return false // 이미 출력된 일정이므로 skip
    }

    seenMatches.add(matchIdentifier)
    return true
  })
})
</script>
<style></style>
