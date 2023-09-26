<template>
  <div class="mx-auto bg-center text-black w-full h-full">
    <TeamBannerItem v-if="teamDetail" :banner="teamDetail" />
    <br />
    <div class="w-full mx-auto max-w-screen-xl py-4 px-4 sm:px-20">
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

    <div class="w-full mx-auto max-w-screen-xl px-4 py-4 sm:px-20">
      <div v-if="infoVisible && teamDetail">
        <div class="mb-16">
          <ContentItem v-if="teamDetail" :content="teamDetail" :galleries="galleries" />
        </div>
        <div>
          <IntroItem v-if="teamDetail" :intro="teamDetail" />
        </div>
      </div>
      <br />
      <div v-if="rosterVisible && teamDetail">
        <div class="inline-block font-semibold mr-3 text-lg sm:text-2xl">로스터 선택</div>
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              {{ selectedRosterType }}
              <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    ]"
                    @click="selectedRosterType = Type.Athlete"
                    >Athlete</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    ]"
                    @click="selectedRosterType = Type.Staff"
                    >Staff</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    ]"
                    @click="selectedRosterType = Type.HeadCoach"
                    >HeadCoach</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    ]"
                    @click="selectedRosterType = Type.Coach"
                  >
                    Coach
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
        <div v-if="selectedRosterType === Type.Athlete">
          <RosterItem :members="athlete" :type="Type.Athlete" />
        </div>
        <div v-if="selectedRosterType === Type.Staff">
          <RosterItem :members="staff" :type="Type.Staff" />
        </div>
        <div v-if="selectedRosterType === Type.Coach">
          <RosterItem :members="coach" :type="Type.Coach" />
        </div>
        <div v-if="selectedRosterType === Type.HeadCoach">
          <RosterItem :members="headCoach" :type="Type.HeadCoach" />
        </div>
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
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import { Type } from './interfaces/member-type.interface'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import type { TeamMember } from './interfaces/team-member.interface'
import { useHead } from '@vueuse/head'
import type { Gallery } from './interfaces/gallery.interface'

interface TeamDetail {
  id: number
  name: string
  initial: string
  message: string | null | undefined
  profileImgUrl: string
  createdAt: string
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

const galleries: Ref<Gallery[]> = ref([])

async function getTeamGalleries() {
  const result = await axiosInstance
    .get(`/team/${teamId}/galleries`)
    .then((result) => result.data)
    .catch(() => [])

  galleries.value.push(...result)
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
const athlete = ref<TeamMember[]>([])
const headCoach = ref<TeamMember[]>([])
const coach = ref<TeamMember[]>([])
const staff = ref<TeamMember[]>([])

const teamId = useRoute().params.id

const selectedRosterType: Ref<Type> = ref(Type.Athlete)
const teamName = ref()
const teamProfileUrl = ref()

useHead({
  title: teamName,
  meta: [
    { name: 'description', content: '팀 소개 페이지' },
    {
      property: 'og:url',
      content: 'https://kafa.one' + useRoute().fullPath
    },
    { property: 'og:title', content: teamName },
    { property: 'og:description', content: '팀 소개 페이지' },
    { property: 'og:image', content: teamProfileUrl },
    { property: 'og:image:height', content: '512' },
    { property: 'og:image:width', content: '512' }
  ]
})

const getTeamDetail = async () => {
  axiosInstance
    .get(`/team/${teamId}`)
    .then((response) => {
      teamDetail.value = response.data
      teamName.value = response.data.name
      teamProfileUrl.value = response.data.profileImgUrl
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

  if (teamMember.value.length > 0) {
    headCoach.value = teamMember.value.filter((member) => member.type === Type.HeadCoach)
    athlete.value = teamMember.value.filter((member) => member.type === Type.Athlete)
    coach.value = teamMember.value.filter((member) => member.type === Type.Coach)
    staff.value = teamMember.value.filter((member) => member.type === Type.Staff)
  }
}

onMounted(async () => {
  await getTeamDetail()
  await getTeamMember()
  await getTeamGalleries()
})
</script>

<style scoped></style>
