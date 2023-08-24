<template>
  <div class="flex flex-col w-full h-full">
    <div
      id="landing"
      class="bg-cover bg-center w-full text-black py-20 lg:py-24 flex justify-center items-center"
    >
      <div class="py-10 sm:py-20 text-start max-w-screen-xl px-4 md:px-20 w-full">
        <h3 class="text-lg md:text-2xl text-teal-300 mb-2 font-bold">
          2023 홍천군수배 서울/경기·강원
        </h3>
        <h2 class="text-3xl md:text-5xl font-display font-extrabold mb-6 font-mono text-white">
          추계 대학미식축구 선수권전
        </h2>
        <p class="text-sm md:text-base text-white font-thin">
          대회명: 2023 홍천군수배 서울/경기강원 추계 대학미식축구 선수권전<br />
          장소: 홍천 종합 운동장, 서울대학교 운동장<br />
          주최: 대한 미식축구협회, 서울 미식축구협회, 경기강원 미식축구협회<br />
          신청마감: 2023년 8월 25일 오후 6시<br />
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
      </div>
    </div>
    <div class="w-full text-center">
      <div class="flex flex-col bg-white justify-center items-center">
        <div class="py-20 text-start max-w-screen-xl px-4 md:px-20">
          <h1 class="text-3xl font-extrabold text-center">경기장 정보</h1>
          <div class="overflow-hidden bg-white py-20">
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
                      홍천종합운동장
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
      </div>
      <div class="flex flex-col">
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
        <div class="bg-white py-24">
          <h1 class="text-3xl font-extrabold">주관/주최</h1>
          <div class="mx-auto max-w-screen-sm px-20 md:px-4">
            <div
              class="mx-auto mt-14 grid grid-cols-1 text-2xl font-bold items-center gap-x-5 gap-y-10 sm:gap-x-10 lg:mx-0 lg:grid-cols-2"
            >
              <div
                class="col-span-2 max-h-20 max-h lg:col-span-1 bg-gray-50 flex justify-center rounded-xl drop-shadow-xl"
              >
                <div class="p-5">SAFA</div>
              </div>
              <div
                class="col-span-2 max-h-20 max-h lg:col-span-1 bg-gray-50 flex justify-center rounded-xl drop-shadow-xl"
              >
                <div class="p-5">GGAFA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="py-24">
          <h1 class="text-3xl font-extrabold">후원</h1>
          <div class="mx-auto max-w-screen-sm px-20 md:px-4">
            <div
              class="mx-auto mt-14 grid grid-cols-1 items-center gap-x-5 gap-y-10 sm:gap-x-10 lg:mx-0 lg:grid-cols-2"
            >
              <div
                class="col-span-2 max-h-20 max-h lg:col-span-1 bg-white flex justify-center rounded-xl drop-shadow-xl"
              >
                <img
                  class="p-2"
                  src="/images/hongcheon.jpeg"
                  alt="홍천군"
                  width="200"
                  height="80"
                />
              </div>
              <div
                class="col-span-2 max-h-20 max-h lg:col-span-1 bg-white flex justify-center rounded-xl drop-shadow-xl"
              >
                <img
                  class="p-4"
                  src="/images/playprove.png"
                  alt="Play Prove"
                  width="200"
                  height="80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { LinkIcon, MapIcon, MapPinIcon } from '@heroicons/vue/20/solid'

const features = [
  {
    name: '주소',
    description: '강원 홍천군 홍천읍 태학여내길 27',
    icon: MapPinIcon
  },
  {
    name: '지도 앱에서 보기',
    description: 'https://naver.me/FOvh9bcR',
    icon: MapIcon
  },
  {
    name: '홈페이지',
    description: 'http://sports.gangwon.kr',
    icon: LinkIcon
  }
]

const stats = [
  { id: 1, name: '전체', value: '20' },
  { id: 2, name: '서울 미식축구협회', value: '14' },
  { id: 3, name: '경기강원 미식축구협회', value: '6' }
]
</script>
<style scoped>
#landing {
  background-image: url('/images/background.webp');
}
</style>
