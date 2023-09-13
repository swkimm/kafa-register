<template>
  <div class="relative overflow-x-auto shadow-md rounded-lg">
    <table class="w-full text-xs sm:text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td class="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
            <div class="flex flex-row gap-2 items-center flex-nowrap">
              <div>
                <img :src="dataItem.homeTeam.profileImgUrl" alt="" class="w-8 min-w-[32px]" />
              </div>
              <div>
                {{ dataItem.homeTeam.name }}
              </div>
            </div>
          </td>
          <th class="px-6 py-4 whitespace-nowrap table-cell sm:hidden">
            <div class="flex flex-row gap-2 items-center flex-nowrap">
              <div>
                <img :src="dataItem.homeTeam.profileImgUrl" alt="" class="w-4 min-w-[16px]" />
              </div>
              <div>
                {{ dataItem.homeTeam.initial }}
              </div>
            </div>
          </th>
          <td class="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
            <div class="flex flex-row gap-2 items-center flex-nowrap">
              <div>
                <img :src="dataItem.awayTeam.profileImgUrl" alt="" class="w-8 min-w-[32px]" />
              </div>
              <div>
                {{ dataItem.awayTeam.name }}
              </div>
            </div>
          </td>
          <th class="px-6 py-4 whitespace-nowrap table-cell sm:hidden">
            <div class="flex flex-row gap-2 items-center flex-nowrap">
              <div>
                <img :src="dataItem.awayTeam.profileImgUrl" alt="" class="w-4 min-w-[16px]" />
              </div>
              <div>
                {{ dataItem.awayTeam.initial }}
              </div>
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
import type { GameInfo } from './interfaces'

const props = defineProps({
  data: Array as () => GameInfo[]
})

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
