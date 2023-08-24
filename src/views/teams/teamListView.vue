<template>
  <BannerItem></BannerItem>
  <div class="text-black py-20 w-full h-full flex flex-col items-center text-center">
    <div class="max-w-screen-md font-extrabold text-3xl mb-10">서울 협회 등록 팀</div>
    <div class="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-20">
      <TeamItem />
      <TeamItem />
      <TeamItem />
      <TeamItem />
      <TeamItem />
      <TeamItem />
    </div>
    <div class="max-w-screen-md font-extrabold text-3xl mb-10 mt-20">경기강원 협회 등록 팀</div>
    <div class="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-20">
      <TeamItem />
      <TeamItem />
      <TeamItem />
      <TeamItem />
      <TeamItem />
      <TeamItem />
    </div>
  </div>
</template>
<script lang="ts" setup>
import BannerItem from '@/components/bannerItem.vue'
import TeamItem from '@/views/teams/teamItem.vue'
</script>
