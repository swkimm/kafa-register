<template>
  <div class="text-black py-20 w-full h-full flex flex-col items-center text-center">
    <div class="max-w-screen-md font-extrabold text-3xl mb-10">
      2023 서울/경기강원협회 추계리그 출전 등록 팀
    </div>
    <div class="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-20">
      <div v-for="team in teamList" :key="team.id">
        <TeamItem :team="team" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import TeamItem from '@/views/teams/teamItem.vue'
import { useHead } from '@vueuse/head'
import { onMounted, ref } from 'vue'
import { axiosInstance } from '@/common/auth/store'
import type { Team } from './interface/team.interface'

useHead({
  title: '대한미식축구협회-등록 팀 명단',
  meta: [
    { name: 'description', content: '협회 등록 팀 명단 페이지' },
    {
      property: 'og:url',
      content: 'https://register.kafa.one/team'
    },
    { property: 'og:title', content: '대한미식축구협회-등록 팀 명단' },
    { property: 'og:description', content: '협회 등록 팀 명단 페이지' },
    { property: 'og:image', content: 'https://kafa.one/images/ogtag.png' },
    { property: 'og:image:height', content: '400' },
    { property: 'og:image:width', content: '800' }
  ]
})

const associationId = ref(1)
const teamList = ref<Team[]>()

const getTeamList = async () => {
  await axiosInstance
    .get(`/association/${associationId.value}/teams/all`)
    .then((response) => {
      teamList.value = response.data
    })
    .catch((error) => {
      if (error) {
        alert('팀리스트 불러오기 오류')
      }
    })
}

onMounted(async () => {
  await getTeamList()
})
</script>
