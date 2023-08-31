<template>
  <BannerItem></BannerItem>
  <div
    class="bg-cover bg-center text-black py-5 w-full h-full flex-col justify-center items-center"
  >
    <div class="max-w-screen-xl mt-10 px-4 md:px-20">
      <div>
        <h1 class="mb-16 font-extrabold font-mono text-4xl text-center">팀 상세 정보</h1>
      </div>
      <RoasterItem />
    </div>
  </div>
</template>
<script lang="ts" setup>
import BannerItem from '@/components/bannerItem.vue'
import RoasterItem from '@/views/teamDetail/roasterItem.vue'
</script>

<style scoped></style>
