<template>
  <nav class="flex items-center justify-between flex-wrap px-6 py-5 border-b-2 border-b-gray-900">
    <div class="flex items-center flex-nowrap text-white">
      <button @click="router.push('/')" class="font-bold text-xl tracking-tight">
        <img src="/images/logo.jpg" alt="KAFA LOGO" width="120" />
      </button>
    </div>
    <div
      class="w-full hidden flex-row text-sm lg:flex lg:gap-6 justify-center lg:items-center lg:w-auto"
    >
      <a
        @click="router.push('/notice')"
        class="text-center block mt-4 text-lg font-semibold lg:inline-block lg:mt-0 text-gray-700 hover:text-black px-2"
      >
        대회 요강
      </a>
      <a
        @click="router.push('/schedule')"
        class="text-center block mt-4 text-lg font-semibold lg:inline-block lg:mt-0 text-gray-700 hover:text-black px-2"
      >
        대회 일정
      </a>
      <a
        @click="router.push('/')"
        class="text-center block mt-4 text-lg font-semibold lg:inline-block lg:mt-0 text-gray-700 hover:text-black px-2"
      >
        참가팀 명단
      </a>
    </div>
    <div class="hidden items-center flex-nowrap font-semibold text-gray-700 lg:flex">
      <span class="font-bold tracking-tight"
        ><button
          class="whitespace-nowrap bg-transparent ring-1 text-teal-300 ring-teal-400 hover:ring-2 hover:bg-neutral-800 hover:ring-teal-500 hover:text-teal-400 uppercase font-sans active:brightness-95 font-semibold hover:subpixel-antialiased ring-inset px-5 py-4 text-lg rounded-lg gap-4"
        >
          출전 등록
        </button></span
      >
    </div>
    <div class="flex gap-4 lg:hidden">
      <div class="flex items-center flex-nowrap font-semibold text-gray-700 lg:mr-6">
        <span class="font-bold text-lg tracking-tight"
          ><button
            class="whitespace-nowrap bg-transparent ring-1 text-teal-300 ring-teal-400 hover:ring-2 hover:bg-neutral-800 hover:ring-teal-500 hover:text-teal-400 uppercase font-sans active:brightness-95 font-semibold hover:subpixel-antialiased ring-inset px-5 py-4 text-lg rounded-lg gap-4"
          >
            출전 등록
          </button></span
        >
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped></style>
