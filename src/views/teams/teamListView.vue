<template>
  <BannerItem></BannerItem>
  <div class="text-black py-10 px-8 w-full h-full flex flex-col items-center text-center">
    <div class="max-w-screen-md font-extrabold text-3xl my-10">등록 팀 명단</div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
