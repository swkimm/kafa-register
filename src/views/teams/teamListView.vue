<template>
  <SectionTitleItem :item="{ title: itemTitle, subtitle: associationName }"></SectionTitleItem>
  <div
    class="text-black py-8 sm:py-10 max-w-screen-xl w-full h-full flex flex-col items-center text-center px-4 md:px-20 mx-auto"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 w-full">
      <div v-for="team in teamList" :key="team.id">
        <TeamItem :team="team" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import TeamItem from '@/views/teams/teamItem.vue'
import { useHead } from '@vueuse/head'
import { computed, onMounted, ref, watch } from 'vue'
import { axiosInstance } from '@/common/auth/store'
import type { Team } from './interface/team.interface'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import SectionTitleItem from '@/components/sectionTitleItem.vue'

const teamList = ref<Team[]>()
const route = useRoute()
const associationId = computed(() => route.params.id)
const associationName = ref()
const itemTitle = '등록 팀 명단'

useHead({
  title: '등록 팀 명단',
  meta: [
    { name: 'description', content: associationName },
    {
      property: 'og:url',
      content: 'https://kafa.one' + useRoute().fullPath
    },
    { property: 'og:title', content: '등록 팀 명단' },
    { property: 'og:description', content: associationName },
    { property: 'og:image', content: 'https://kafa.one/images/ogtag.png' },
    { property: 'og:image:height', content: '400' },
    { property: 'og:image:width', content: '800' }
  ]
})

const getTeamList = async () => {
  await axiosInstance
    .get(`/association/${associationId.value}/teams`)
    .then((response) => {
      teamList.value = response.data
    })
    .catch((error) => {
      if (error) {
        alert('팀리스트 불러오기 오류')
      }
    })
}

async function getAssociationInfo() {
  const result = await axiosInstance
    .get(`/association/${route.params.id}`)
    .then((result) => result.data)

  associationName.value = result.name
}

const unwatch = watch(associationId, async (newId, oldId) => {
  if (newId !== oldId) {
    await getTeamList()
    await getAssociationInfo()
  }
})

onMounted(async () => {
  await getTeamList()
  await getAssociationInfo()
})

onBeforeRouteLeave(() => {
  if (unwatch) {
    unwatch()
  }
})
</script>
