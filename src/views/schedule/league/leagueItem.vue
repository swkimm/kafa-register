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
          <td class="px-6 py-4 whitespace-nowrap">{{ formatDate(dataItem.gameday) }}</td>
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

function formatDate(date: string): string {
  const d = new Date(date)
  const monthNames = [
    '',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return `${monthNames[d.getUTCMonth() + 1]} ${d.getUTCDate()}, ${dayNames[d.getUTCDay()]} ${String(
    d.getUTCHours()
  ).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}
</script>
