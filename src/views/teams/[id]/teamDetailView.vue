<template>
  <div class="max-w-screen-xl px-5 mx-auto bg-cover bg-center text-black w-full h-full">
    <TeamBannerItem v-if="teamDetail" :banner="teamDetail" />
    <br />
    <div class="items-center text-center">
      <button class="mr-10" @click="toggleInfo">Info</button>
      <button class="mr-10" @click="toggleRoaster">Roaster</button>
      <button class="mr-10">Stat</button>
      <br />
    </div>

    <div class="mx-10 sm:mx-20">
      <div v-if="infoVisible && teamDetail">
        <ContentItem v-if="teamDetail" :content="teamDetail" />
        <br />
        <IntroItem v-if="teamDetail" :intro="teamDetail" />
      </div>
      <br />
      <RoasterItem v-if="roasterVisible && teamDetail" :roaster="teamDetail" />
      <br />
    </div>
  </div>
</template>
<script lang="ts" setup>
import RoasterItem from './roasterItem.vue'
import ContentItem from './contentItem.vue'
import TeamBannerItem from './teamBannerItem.vue'

import IntroItem from './introItem.vue'
import { axiosInstance } from '@/common/auth/store'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

interface TeamDetail {
  id: number
  name: string
  profileImgUrl: string
  message: string | null | undefined
  teamColor: string
  workoutId: number
  workout: {
    id: number
    name: string
  }
  association: {
    id: number
    name: string
  }
}
const infoVisible = ref(true)
const roasterVisible = ref(false)

const toggleRoaster = () => {
  infoVisible.value = false
  roasterVisible.value = true
}

const toggleInfo = () => {
  roasterVisible.value = false
  infoVisible.value = true
}

const teamDetail = ref<TeamDetail | null | undefined>()

const teamId = useRoute().params.id

const getTeamDetail = async () => {
  axiosInstance
    .get(`/team/${teamId}`)
    .then((response) => {
      teamDetail.value = response.data
    })
    .catch((error) => {
      if (error) {
        console.error(error)
      }
    })
}

onMounted(async () => {
  await getTeamDetail()
})
</script>

<style scoped></style>
