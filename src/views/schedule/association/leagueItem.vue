<template>
  <router-link :to="`/schedule/league/${id}`">
    <div
      class="relative isolate overflow-hidden bg-gray-900 shadow-2xl rounded-2xl px-4 py-5 sm:py-10 sm:px-16 lg:flex lg:gap-x-20"
    >
      <svg
        viewBox="0 0 1024 1024"
        class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fill-opacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div class="mx-auto text-center lg:mx-0 lg:flex-auto lg:text-left">
        <h2 class="text-lg font-bold tracking-tight text-white sm:text-xl">
          {{ name }}
        </h2>
        <p class="mt-6 text-sm sm:text-base leading-8 text-gray-300">
          기간: {{ startedAt.substring(0, 10) }} ~ {{ endedAt.substring(0, 10) }}
        </p>
        <p class="text-xs sm:text-base leading-8 text-gray-300">주관: {{ host.join(',') }}</p>
        <p class="text-xs sm:text-base leading-8 text-gray-300">후원: {{ sponser.join(',') }}</p>
      </div>
    </div>
  </router-link>
</template>
<script lang="ts" setup>
import type { LeagueInfo } from './interfaces'

defineProps<LeagueInfo>()
</script>
