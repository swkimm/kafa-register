<template>
  <br />
  <h1 class="mb-5 font-extrabold font-mono text-2xl text-left">팀명 로스터 2023</h1>

  <table class="p-10 ax-auto w-full table-auto bg-white rounded-2xl border-black overflow-hidden">
    <thead class="text-left">
      <tr class="border-b-2">
        <th class="text-xs sm:text-base pl-2 py-2">프로필</th>
        <th class="text-xs sm:text-base pl-2 py-2">이름</th>
        <th class="text-xs sm:text-base pl-2 py-2">백넘버</th>
        <th class="text-xs sm:text-base pl-2 py-2">포지션</th>
        <th class="text-xs sm:text-base pl-2 py-2">학년</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="index in 10" :key="index" :class="index % 2 === 0 ? 'bg-white' : 'bg-[#F7F7F4]'">
        <td class="text-xs sm:text-base pl-2 py-3">
          <img src="/images/seoulTeamLogo/Konkuk.webp" class="h-20 w-20 mr-1" />
        </td>
        <td class="text-xs sm:text-base pl-2 py-3">{{ index }}</td>
        <td class="text-xs sm:text-base pl-2 py-3">{{ index }}</td>
        <td class="text-xs sm:text-base pl-2 py-3">{{ index }}</td>
        <td class="text-xs sm:text-base pl-2 py-3">{{ index }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts" setup>
// const props = defineProps({
//     id: {
//         type: [Number],
//         required: true
//     }
// })
</script>

<style scoped></style>
