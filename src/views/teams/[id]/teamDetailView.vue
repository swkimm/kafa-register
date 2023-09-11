<template>
  <div class="mx-auto bg-center text-black w-full h-full">
    <TeamBannerItem v-if="teamDetail" :banner="teamDetail" />
    <br />
    <div class="w-full mx-auto max-w-screen-xl py-8 px-4 sm:px-20">
      <TabGroup>
        <TabList class="flex space-x-1 rounded-xl bg-slate-600/20 p-1">
          <Tab v-for="category in tabs" as="template" :key="category.name" v-slot="{ selected }">
            <button
              :class="[
                'w-full rounded-lg py-2.5 text-sm font-bold leading-5 text-black',
                'focus:outline-none',
                selected
                  ? 'bg-black text-white shadow'
                  : 'text-black hover:bg-white/[0.12] hover:text-white'
              ]"
              @click="category.callback"
            >
              {{ category.name }}
            </button>
          </Tab>
        </TabList>
      </TabGroup>
    </div>

    <div class="w-full mx-auto max-w-screen-xl px-4 py-8 sm:px-20 items-center text-center">
      <div v-if="infoVisible && teamDetail">
        <div class="mb-16">
          <ContentItem v-if="teamDetail" :content="teamDetail" />
        </div>
        <div>
          <IntroItem v-if="teamDetail" :intro="teamDetail" />
        </div>
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
import { TabGroup, TabList, Tab } from '@headlessui/vue'
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

const tabs = ref([
  { name: 'Info', callback: toggleInfo },
  { name: 'Roster', callback: toggleRoster },
  { name: 'Stat', callback: () => [] }
])

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
