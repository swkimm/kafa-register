<template>
  <BannerItem></BannerItem>
  <div class="bg-cover bg-center text-black py-10 w-full h-full">
    <h1 class="mb-16 font-extrabold font-mono text-4xl text-center">상세 정보</h1>
    <div class="mx-10 sm:mx-20">
      <IntroItem :intro="teamDetail" />
      <br />
      <RoasterItem :roaster="teamDetail" />
      <br />
    </div>
  </div>
</template>
<script lang="ts" setup>
import BannerItem from '@/components/bannerItem.vue'
import RoasterItem from './roasterItem.vue'
import IntroItem from './introItem.vue'
import { axiosInstance } from '@/common/auth/store'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

interface TeamDetail {
  id: number
  name: string
  profileImgUrl: string
  association: string
  message: string
  workoutId: number
  workout: {
    id: number
    name: string
  }
}

const teamDetail = ref<TeamDetail | null | undefined>(null)

const teamId = useRoute().params.id

const getTeamDetail = () => {
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
