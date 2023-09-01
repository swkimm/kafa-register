<template>
  <br />
  <h1
    v-if="roaster?.name === null || roaster?.name === undefined"
    class="mb-5 font-extrabold font-mono text-2xl text-left"
  >
    팀명 Roster
  </h1>
  <h1 v-else class="mb-5 font-extrabold font-mono text-2xl text-left">
    {{ getRemainingWords(roaster?.name) }} Roster
  </h1>

  <table class="p-10 ax-auto w-full table-auto bg-white rounded-2xl border-black overflow-hidden">
    <thead class="text-left">
      <tr class="border-b-2">
        <th class="text-xs sm:text-base pl-2 py-2"></th>
        <th class="text-xs sm:text-base pl-2 py-2">Name</th>
        <th class="text-xs sm:text-base pl-2 py-2">Number</th>
        <th class="text-xs sm:text-base pl-2 py-2">Height</th>
        <th class="text-xs sm:text-base pl-2 py-2">Weight</th>
        <th class="text-xs sm:text-base pl-2 py-2">Position</th>
        <th class="text-xs sm:text-base pl-2 py-2">Exprience</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="index in 10" :key="index" :class="index % 2 === 0 ? 'bg-white' : 'bg-[#F7F7F4]'">
        <td class="text-xs sm:text-base pl-2 py-3">
          <img :src="roaster?.profileImgUrl" class="h-20 w-20 mr-1" />
        </td>
        <td class="text-xs sm:text-base pl-2 py-3">{{ index }}</td>
        <td class="text-xs sm:text-base pl-2 py-3">{{ index }}</td>
        <td class="text-xs sm:text-base pl-2 py-3">{{ index }}</td>
        <td class="text-xs sm:text-base pl-2 py-3">{{ index }}</td>
        <td class="text-xs sm:text-base pl-2 py-3">{{ index }}</td>
        <td class="text-xs sm:text-base pl-2 py-3">{{ index }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts" setup>
import { type PropType, toRefs } from 'vue'

interface TeamDetail {
  id: number
  name: string
  profileImgUrl: string
  association: string
  message: string | null | undefined
  workoutId: number
  workout: {
    id: number
    name: string
  }
}
const props = defineProps({
  roaster: {
    type: Object as PropType<TeamDetail | null | undefined>,
    required: true
  }
})
// const getFirstWord = (str: string) => {
//   const firstSpaceIndex = str.indexOf(' ')
//   return firstSpaceIndex !== -1 ? str.substring(0, firstSpaceIndex) : str
// }

const getRemainingWords = (str: string) => {
  const firstSpaceIndex = str.indexOf(' ')
  return firstSpaceIndex !== -1 ? str.substring(firstSpaceIndex + 1) : ''
}

const { roaster } = toRefs(props)
</script>

<style scoped></style>
