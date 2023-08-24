<template>
  <div
    v-if="enable"
    class="relative isolate flex items-center gap-x-6 overflow-hidden bg-indigo-800 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
  >
    <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p class="text-sm leading-6 text-white">
        <strong class="font-semibold">2023 서울/경기강원 추계 대학미식축구 선수권전</strong
        ><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
          <circle cx="1" cy="1" r="1" /></svg
        >현재 출전 팀 등록이 진행중입니다
      </p>
      <a
        href="https://forms.gle/HxFxoZPkzak7QX3C9"
        class="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >출전 팀 등록 <span aria-hidden="true">&rarr;</span></a
      >
    </div>
    <div class="flex flex-1 justify-end">
      <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]" @click="click">
        <span class="sr-only">Dismiss</span>
        <XMarkIcon class="h-5 w-5 text-gray-900" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { XMarkIcon } from '@heroicons/vue/20/solid'
import { ref } from 'vue'

function click() {
  enable.value = false
}

const enable = ref(true)
</script>
