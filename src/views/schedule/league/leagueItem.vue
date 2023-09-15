<template>
  <div class="relative overflow-x-auto shadow-md rounded-lg">
    <table class="w-full text-xs sm:text-sm text-left text-gray-800">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">Home</th>
          <th scope="col" class="px-6 py-3">Away</th>
          <th scope="col" class="px-6 py-3">Date</th>
          <th scope="col" class="px-6 py-3">Location</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="dataItem in props.data"
          :key="dataItem.gameday"
          class="bg-white border-b hover:bg-gray-50"
          @click="router.push(`/game/${dataItem.id}`)"
        >
          <td class="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
            <div class="flex flex-row justify-between gap-2 items-center flex-nowrap">
              <div class="flex items-center gap-2">
                <img :src="dataItem.homeTeam.profileImgUrl" alt="" class="w-8 min-w-[32px]" />
                <span>{{ dataItem.homeTeam.name }}</span>
              </div>
              <span class="font-bold">{{ dataItem.homeTeamScore }}</span>
            </div>
          </td>
          <th class="px-6 py-4 whitespace-nowrap table-cell sm:hidden">
            <div class="flex flex-row justify-between gap-2 items-center flex-nowrap">
              <div class="flex items-center gap-2">
                <img :src="dataItem.homeTeam.profileImgUrl" alt="" class="w-5 min-w-[16px]" />
                <span>{{ dataItem.homeTeam.initial }}</span>
              </div>
              <span class="font-bold">{{ dataItem.homeTeamScore }}</span>
            </div>
          </th>
          <td class="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
            <div class="flex flex-row justify-between gap-2 items-center flex-nowrap">
              <div class="flex items-center gap-2">
                <img :src="dataItem.awayTeam.profileImgUrl" alt="" class="w-8 min-w-[32px]" />
                <span>{{ dataItem.awayTeam.name }}</span>
              </div>
              <span class="font-bold">{{ dataItem.awayTeamScore }}</span>
            </div>
          </td>
          <th class="px-6 py-4 whitespace-nowrap table-cell sm:hidden">
            <div class="flex flex-row justify-between gap-2 items-center flex-nowrap">
              <div class="flex items-center gap-2">
                <img :src="dataItem.awayTeam.profileImgUrl" alt="" class="w-5 min-w-[16px]" />
                <span>{{ dataItem.awayTeam.initial }}</span>
              </div>
              <span class="font-bold">{{ dataItem.awayTeamScore }}</span>
            </div>
          </th>
          <td class="px-6 py-4 whitespace-nowrap">
            {{ formatGameDay(dataItem.gameday) }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">{{ dataItem.location }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import type { GameInfo } from './interfaces'

const props = defineProps({
  data: Array as () => GameInfo[]
})

const router = useRouter()

const formatGameDay = (gameday: string) => {
  const date = new Date(gameday)

  const day = date.getDate().toLocaleString()
  const hour = date.getHours()
  const min = date.getMinutes().toLocaleString()
  const month = date.getMonth() + 1

  const hourText = hour < 12 ? 'AM ' + hour : 'PM ' + (hour - 12)

  return `${month.toString().padStart(2, '0')}/${day.padStart(2, '0')}
  ${hourText}:${min.padStart(2, '0')}`
}
</script>
