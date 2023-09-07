<template>
  <div class="mx-auto bg-center text-black w-full h-full">
    <TeamBannerItem v-if="teamDetail" :banner="teamDetail" />
    <br />
    <div class="mb-3 flex flex-row justify-center pt-4 pb-4">
      <button
        class="border border-y-blue-600 border-l-blue-600 bg-white hover:bg-blue-600 hover:text-white text-blue-600 font-bold py-2 px-4 lg:px-24 lg:py-3 md:px-20 md:py-2 sm:px-16 sm:py-2"
        @click="toggleInfo"
      >
        Info
      </button>
      <button
        class="border border-y-blue-600 border-x-blue-600 bg-white hover:bg-blue-600 hover:text-white text-blue-600 font-bold py-2 px-4 lg:px-24 lg:py-3 md:px-20 md:py-2 sm:px-16 sm:py-2"
        @click="toggleRoster"
      >
        Roster
      </button>
      <button
        class="border border-y-blue-600 border-r-blue-600 bg-white hover:bg-blue-600 hover:text-white text-blue-600 font-bold py-2 px-4 lg:px-24 lg:py-3 md:px-20 md:py-2 sm:px-16 sm:py-2"
      >
        Stats
      </button>
    </div>

    <div class="mx-10 items-center text-center">
      <div v-if="infoVisible && teamDetail">
        <ContentItem v-if="teamDetail" :content="teamDetail" />
        <br />
        <IntroItem v-if="teamDetail" :intro="teamDetail" />
      </div>
      <br />
      <div v-if="rosterVisible && teamDetail">
        <RosterItem :member="teamMember" />
      </div>
      <br />
    </div>
  </div>
</template>
<script lang="ts" setup>
import RosterItem from './rosterItem.vue'
import ContentItem from './contentItem.vue'
import TeamBannerItem from './teamBannerItem.vue'

import IntroItem from './introItem.vue'
import { axiosInstance } from '@/common/auth/store'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

interface TeamDetail {
  id: number
  name: string
  initial: string
  message: string | null | undefined
  profileImgUrl: string
  teamColor: string
  teamSubColor: string
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

interface TeamMember {
  id: number
  teamId: number
  name: string
  backNumber: number
  registrationDate: string
  type: string
  weight: number
  height: number
  position: [string, string]
  profileImgUrl: string
}

const infoVisible = ref(true)
const rosterVisible = ref(false)

const toggleRoster = () => {
  infoVisible.value = false
  rosterVisible.value = true
  getTeamMember()
}

const toggleInfo = () => {
  rosterVisible.value = false
  infoVisible.value = true
}

const teamDetail = ref<TeamDetail | null | undefined>()
const teamMember = ref<TeamMember[]>([])

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

const getTeamMember = async () => {
  axiosInstance
    .get(`/team/${teamId}/members`)
    .then((response) => {
      const responseData = response.data as TeamMember[]
      teamMember.value = responseData
      console.log(responseData)
    })
    .catch((error) => {
      if (error) {
        console.error('선수 프로필 불러오기 오류')
      }
    })
}

onMounted(async () => {
  await getTeamDetail()
  await getTeamMember()
})
</script>

<style scoped></style>
