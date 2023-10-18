<template>
  <div
    class="text-black py-8 sm:py-10 max-w-screen-xl w-full h-full flex flex-col items-center text-center px-4 md:px-20 mx-auto"
  >
    <div class="py-8 sm:py-16 w-full">
      <div class="text-3xl font-bold">일정</div>
      <div class="overflow-x-scroll">
        <BracketItem class="overflow-hidden" />
      </div>
    </div>
    <div class="py-16 w-full">
      <div class="text-3xl font-bold">출전팀</div>
      <div
        class="text-3xl font-extrabold text-center mt-20 max-w-screen-xl px-4 sm:px-20 mx-auto w-full"
      >
        <TeamListItem />
      </div>
    </div>
    <!-- <div class="py-16">
      <div class="text-3xl font-bold">갤러리</div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import BracketItem from './BracketItem.vue'
import TeamListItem from './TeamListItem.vue'
</script>
