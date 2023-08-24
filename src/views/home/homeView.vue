<template>
  <div class="flex flex-col w-full h-full">
    <div
      id="landing"
      class="bg-cover bg-center w-full text-black py-20 lg:py-24 flex justify-center items-center"
    >
      <div class="px-4 sm:px-8">
        <div class="max-w-screen-2xl mx-auto px-6">
          <div class="grid">
            <div class="grid grid-cols-12">
              <div class="col-span-12 md:col-span-10 lg:col-span-8 xl:col-span-6">
                <h3 class="text-lg md:text-2xl text-teal-300 mb-2 font-bold">
                  2023 홍천군수배 서울/경기·강원
                </h3>
                <h2
                  class="text-3xl md:text-5xl font-display font-extrabold mb-6 font-mono text-white"
                >
                  추계 대학미식축구 선수권전
                </h2>
                <p class="font-medium text-sm md:text-lg text-white">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </p>
                <div
                  class="flex flex-col md:flex-row flex-wrap justify-start items-start gap-4 mt-8"
                >
                  <a href="https://forms.gle/HxFxoZPkzak7QX3C9" target="_blank">
                    <button
                      class="whitespace-nowrap bg-transparent ring-1 text-teal-300 ring-teal-400 hover:ring-2 hover:bg-gray-100 hover:ring-teal-500 hover:text-teal-400 uppercase font-sans active:brightness-95 font-semibold hover:subpixel-antialiased ring-inset px-12 py-4 text-base md:text-xl rounded-lg gap-4"
                    >
                      출전 팀 등록 하기
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full text-center">
      <div class="flex flex-col">
        <div class="bg-white py-24">
          <h1 class="text-3xl font-extrabold">다가오는 경기</h1>
          <div class="mx-auto max-w-screen-sm px-6">
            <div
              class="mx-auto mt-14 grid grid-cols-1 text-2xl font-bold items-center gap-x-5 gap-y-10 sm:gap-x-10 lg:mx-0 lg:grid-cols-2"
            ></div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="py-24">
          <h1 class="text-3xl font-extrabold mb-14">협회 등록 팀 현황</h1>
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div
                v-for="stat in stats"
                :key="stat.id"
                class="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt class="text-base leading-7 text-gray-600">{{ stat.name }}</dt>
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
          <div class="mx-auto max-w-screen-sm px-6">
            <div
              class="mx-auto mt-14 grid grid-cols-1 text-2xl font-bold items-center gap-x-5 gap-y-10 sm:gap-x-10 lg:mx-0 lg:grid-cols-2"
            >
              <div>SAFA</div>
              <div>GIGAFA</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="py-24">
          <h1 class="text-3xl font-extrabold">후원</h1>
          <div class="mx-auto max-w-screen-sm px-6">
            <div
              class="mx-auto mt-14 grid grid-cols-1 items-center gap-x-5 gap-y-10 sm:gap-x-10 lg:mx-0 lg:grid-cols-2"
            >
              <img
                class="col-span-2 max-h-20 max-h w-full object-contain lg:col-span-1"
                src="/images/hongcheon.jpeg"
                alt="홍천군"
                width="200"
                height="80"
              />
              <img
                class="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
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
</template>
<script lang="ts" setup>
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
