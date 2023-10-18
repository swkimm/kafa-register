<template>
  <div class="mt-12 mb-5 text-xl">서울지역</div>
  <div class="grid grid-cols-12 mt-5">
    <div class="col-span-12">
      <div
        class="flex flex-col gap-4 justify-center items-center"
        @click="() => router.push('/team/10')"
      >
        <img src="https://cdn.playprove.one/default/logo.webp" class="w-20" loading="lazy" />
        <div class="text-base">TBD</div>
      </div>
    </div>
  </div>
  <div class="mt-12 mb-5 text-xl">부산울산경남지역</div>
  <div class="grid grid-cols-12">
    <div class="col-span-12">
      <div class="flex flex-col gap-4 justify-center items-center" @click="router.push('/team/29')">
        <img src="https://cdn.playprove.one/default/logo.webp" class="w-20" loading="lazy" />
        <div class="text-base">TBD</div>
      </div>
    </div>
  </div>
  <div class="mt-12 mb-5 text-xl">대구경북지역</div>
  <div class="grid grid-cols-12">
    <div class="col-span-12">
      <div class="flex flex-col gap-4 justify-center items-center" @click="router.push('/team/45')">
        <img src="https://cdn.playprove.one/default/logo.webp" class="w-20" loading="lazy" />
        <div class="text-base">TBD</div>
      </div>
    </div>
  </div>
  <div class="mt-12 mb-5 text-xl">경기강원지역</div>
  <div class="grid grid-cols-12 mb-20">
    <div class="col-span-12">
      <div class="flex flex-col gap-4 justify-center items-center" @click="router.push('/team/14')">
        <img src="https://cdn.playprove.one/default/logo.webp" class="w-20" loading="lazy" />
        <div class="text-base">TBD</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
