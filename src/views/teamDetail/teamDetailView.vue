<template>
  <BannerItem></BannerItem>
  <div class="bg-cover bg-center text-black py-10 w-full h-full">
    <h1 class="mb-16 font-extrabold font-mono text-4xl text-center">팀 상세 정보</h1>
    <div class="mx-20">
      <IntroItem />
      <br />
      <RoasterItem />
      <br />
    </div>
  </div>
</template>
<script lang="ts" setup>
import BannerItem from '@/components/bannerItem.vue'
import RoasterItem from '@/views/teamDetail/roasterItem.vue'
import IntroItem from '@/views/teamDetail/introItem.vue'
</script>

<style scoped></style>
