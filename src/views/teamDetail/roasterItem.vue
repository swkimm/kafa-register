<template>
  <h1 class="mb-5 font-extrabold font-mono text-2xl text-left">팀명 로스터 2023</h1>

  <table class="p-10 w-full table-auto bg-white rounded-2xl border-black overflow-hidden">
    <thead class="text-left">
      <tr>
        <th>프로필</th>
        <th>이름</th>
        <th>백넘버</th>
        <th>포지션</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="index in 10" :key="index" :class="index % 2 === 0 ? 'bg-white' : 'bg-[#F7F7F4]'">
        <td>{{ index }}</td>
        <td>{{ index }}</td>
        <td>{{ index }}</td>
        <td>{{ index }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts" setup></script>

<style scoped></style>
