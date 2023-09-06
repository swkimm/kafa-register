<template>
  <div class="max-w-screen-xl mx-auto bg-cover bg-center text-black w-full h-full">
    <TeamBannerItem v-if="teamDetail" :banner="teamDetail" />
    <br />
    <div class="items-center text-center">
      <button class="mr-10 text-center" @click="toggleInfo">Info</button>
      <button class="mr-10" @click="toggleRoster">Roster</button>
      <button class="mr-10">Stats</button>
      <br />
    </div>

    <div class="mx-10 items-center text-center">
      <div v-if="infoVisible && teamDetail">
        <ContentItem v-if="teamDetail" :content="teamDetail" />
        <br />
        <IntroItem v-if="teamDetail" :intro="teamDetail" />
      </div>
      <br />
      <div v-if="rosterVisible && teamDetail">
        <table
          class="p-10 ax-auto w-full table-auto bg-white rounded-2xl border-black overflow-hidden"
        >
          <thead class="text-left">
            <tr class="border-b-2">
              <th class="text-xs sm:text-base pl-2 py-2"></th>
              <th class="text-xs sm:text-base pl-2 py-2">Name</th>
              <th class="text-xs sm:text-base pl-2 py-2">Number</th>
              <th class="hidden sm:table-cell text-xs sm:text-base pl-2 py-2">Height</th>
              <th class="hidden sm:table-cell text-xs sm:text-base pl-2 py-2">Weight</th>
              <th class="text-xs sm:text-base pl-2 py-2">Position</th>
              <th class="hidden sm:table-cell text-xs sm:text-base pl-2 py-2">Exprience</th>
            </tr>
          </thead>
          <tbody>
            <RosterItem
              v-for="(member, index) in teamMember"
              :key="member.id"
              :member="member"
              :class="index % 2 === 0 ? 'bg-white' : 'bg-[#F7F7F4]'"
            />
          </tbody>
        </table>
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
const teamMember = ref<TeamMember[] | null | undefined>()

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
      teamMember.value = response.data
      console.log(response.data)
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
