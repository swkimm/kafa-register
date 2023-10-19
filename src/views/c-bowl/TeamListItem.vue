<template>
  <div class="mt-12 mb-5 text-xl">서울지역</div>
  <div class="grid grid-cols-12 mt-5">
    <div class="col-span-12">
      <div
        class="flex flex-col gap-4 justify-center items-center"
        @click="() => router.push('/team/3')"
      >
        <img
          src="https://cdn.playprove.one/team-profile-img/316a4078-e631-4d6f-a322-a12160789802.webp"
          class="w-20"
          loading="lazy"
        />
        <div class="text-base">국민대학교</div>
      </div>
    </div>
  </div>
  <div class="mt-12 mb-5 text-xl">부산울산경남지역</div>
  <div class="grid grid-cols-12">
    <div class="col-span-12">
      <div class="flex flex-col gap-4 justify-center items-center" @click="router.push('/team/32')">
        <img src="https://cdn.playprove.one/default/logo.webp" class="w-20" loading="lazy" />
        <div class="text-base">부산대학교</div>
      </div>
    </div>
  </div>
  <div class="mt-12 mb-5 text-xl">대구경북지역</div>
  <div class="grid grid-cols-12">
    <div class="col-span-12">
      <div class="flex flex-col gap-4 justify-center items-center" @click="router.push('/team/41')">
        <img src="https://cdn.playprove.one/default/logo.webp" class="w-20" loading="lazy" />
        <div class="text-base">대구가톨릭대학교</div>
      </div>
    </div>
  </div>
  <div class="mt-12 mb-5 text-xl">경기강원지역</div>
  <div class="grid grid-cols-12 mb-20">
    <div class="col-span-12">
      <div class="flex flex-col gap-4 justify-center items-center" @click="router.push('/team/13')">
        <img
          src="https://cdn.playprove.one/team-profile-img/660bad43-cde6-41bf-a681-1859131de771.webp"
          class="w-20"
          loading="lazy"
        />
        <div class="text-base">강원대학교</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
