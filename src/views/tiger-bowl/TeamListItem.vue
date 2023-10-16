<template>
  <div class="mt-12 mb-5 text-xl">서울지역</div>
  <div class="grid grid-cols-12 mt-5">
    <div class="col-span-4">
      <div
        class="flex flex-col gap-4 justify-center items-center"
        @click="() => router.push('/team/6')"
      >
        <img
          src="https://cdn.playprove.one/team-profile-img/5b96f591-5d81-41e6-b0ee-1bae295e467e.webp"
          class="w-20"
          loading="lazy"
        />
        <div class="text-base">서울대(#1)</div>
      </div>
    </div>
    <div class="col-span-4">
      <div
        class="flex flex-col gap-4 justify-center items-center"
        @click="() => router.push('/team/19')"
      >
        <img
          src="https://cdn.playprove.one/team/19/profile/91ad44ff-2af6-4219-bbc9-38f5c808597f.webp"
          class="w-20"
          loading="lazy"
        />
        <div class="text-base">성균관대(#2)</div>
      </div>
    </div>
    <div class="col-span-4">
      <div
        class="flex flex-col gap-4 justify-center items-center"
        @click="() => router.push('/team/10')"
      >
        <img
          src="https://cdn.playprove.one/team-profile-img/6dec9af9-04f3-417a-80aa-78a8f1b97b6f.webp"
          class="w-20"
          loading="lazy"
        />
        <div class="text-base">한국외대(#3)</div>
      </div>
    </div>
  </div>
  <div class="mt-12 mb-5 text-xl">부산울산경남지역</div>
  <div class="grid grid-cols-12">
    <div class="col-span-6">
      <div class="flex flex-col gap-4 justify-center items-center" @click="router.push('/team/30')">
        <img src="https://cdn.playprove.one/default/logo.webp" class="w-20" loading="lazy" />
        <div class="text-base">동의대(#1)</div>
      </div>
    </div>
    <div class="col-span-6">
      <div class="flex flex-col gap-4 justify-center items-center" @click="router.push('/team/29')">
        <img src="https://cdn.playprove.one/default/logo.webp" class="w-20" loading="lazy" />
        <div class="text-base">동아대(#2)</div>
      </div>
    </div>
  </div>
  <div class="mt-12 mb-5 text-xl">대구경북지역</div>
  <div class="grid grid-cols-12">
    <div class="col-span-6">
      <div class="flex flex-col gap-4 justify-center items-center" @click="router.push('/team/45')">
        <img src="https://cdn.playprove.one/default/logo.webp" class="w-20" loading="lazy" />
        <div class="text-base">영남대(#1)</div>
      </div>
    </div>
    <div class="col-span-6">
      <div class="flex flex-col gap-4 justify-center items-center" @click="router.push('/team/37')">
        <img src="https://cdn.playprove.one/default/logo.webp" class="w-20" loading="lazy" />
        <div class="text-base">경북대(#2)</div>
      </div>
    </div>
  </div>
  <div class="mt-12 mb-5 text-xl">경기강원지역</div>
  <div class="grid grid-cols-12 mb-20">
    <div class="col-span-12">
      <div class="flex flex-col gap-4 justify-center items-center" @click="router.push('/team/14')">
        <img
          src="https://cdn.playprove.one/team-profile-img/32a3169b-b299-4e91-ac29-02fb7c917072.webp"
          class="w-20"
          loading="lazy"
        />
        <div class="text-base">단국대(#1)</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
