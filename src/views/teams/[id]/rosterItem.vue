<template>
  <br />
  <!-- <h1
    v-if="roster?.name === null || roster?.name === undefined"
    class="mb-5 font-extrabold font-mono text-2xl text-left"
  >
    팀명 Roster
  </h1>
  <h1 v-else class="mb-5 font-extrabold font-mono text-2xl text-left">
    {{ getRemainingWords(roster?.name) }} Roster
  </h1> -->

  <tr class="border-b-2">
    <td class="text-xs pl-2">
      <img :src="member?.profileImgUrl" class="h-48 w-32 sm:h-30 sm:w-15 mr-1" />
    </td>
    <td class="text-xs sm:text-base pl-2 py-3">{{ member?.name }}</td>
    <td class="text-xs sm:text-base pl-2 py-3">{{ member?.backNumber }}</td>
    <td class="hidden sm:table-cell pl-2 py-3">{{ member?.height }}</td>
    <td class="hidden sm:table-cell pl-2 py-3">{{ member?.weight }}</td>
    <td class="text-xs sm:text-base pl-2 py-3">
      {{ member?.position[0] }} {{ member?.position[1] }}
    </td>
    <td class="hidden sm:table-cell text-xs sm:text-base pl-2 py-3">
      {{ formatRegistDate(member?.registrationDate) }}
    </td>
  </tr>
</template>
<script lang="ts" setup>
import { type PropType, toRefs } from 'vue'

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

const props = defineProps({
  member: {
    type: Object as PropType<TeamMember>,
    required: true
  }
})

const formatRegistDate = (dateString: string): number => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  return year
}

const { member } = toRefs(props)
</script>

<style scoped></style>
