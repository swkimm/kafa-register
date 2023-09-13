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
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              {{ selectedRosterType }}
              <ChevronDownIcon
                class="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-violet-500 text-white' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm'
                    ]"
                    @click="selectedRosterType = Type.Athlete"
                  >
                    Athlete
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-violet-500 text-white' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm'
                    ]"
                    @click="selectedRosterType = Type.Staff"
                  >
                    Staff
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-violet-500 text-white' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm'
                    ]"
                    @click="selectedRosterType = Type.HeadCoach"
                  >
                    HeadCoach
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-violet-500 text-white' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm'
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
          <div class="py-3 text-start font-bold text-lg sm:text-2xl">Athlete</div>
          <RosterItem :member="athlete" :type="Type.Athlete" />
        </div>
        <div v-if="selectedRosterType === Type.Staff">
          <div class="py-3 text-start font-bold text-lg sm:text-2xl">Staff</div>
          <RosterItem :member="staff" :type="Type.Staff" />
        </div>
        <div v-if="selectedRosterType === Type.Coach">
          <div class="py-3 text-start font-bold text-lg sm:text-2xl">Coach</div>
          <RosterItem :member="coach" :type="Type.Coach" />
        </div>
        <div v-if="selectedRosterType === Type.HeadCoach">
          <div class="py-3 text-start font-bold text-lg sm:text-2xl">HeadCoach</div>
          <RosterItem :member="headCoach" :type="Type.HeadCoach" />
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
  type: Type
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
const athlete = ref<TeamMember[]>([])
const headCoach = ref<TeamMember[]>([])
const coach = ref<TeamMember[]>([])
const staff = ref<TeamMember[]>([])

const teamId = useRoute().params.id

const selectedRosterType: Ref<Type> = ref(Type.Athlete)

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
})
</script>

<style scoped></style>
