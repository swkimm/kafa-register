<template>
  <table class="p-10 w-full table-auto bg-white rounded-2xl border-black overflow-hidden">
    <thead class="text-lef border-b">
      <tr>
        <th class="text-xs sm:text-base pl-2 py-2"></th>
        <th class="text-xs sm:text-base pl-2 py-2">Name</th>
        <th v-if="props.type === Type.Athlete" class="text-xs sm:text-base pl-2 py-2">Number</th>
        <th
          v-if="props.type === Type.Athlete"
          class="hidden sm:table-cell text-xs sm:text-base pl-2 py-2"
        >
          Height
        </th>
        <th
          v-if="props.type === Type.Athlete"
          class="hidden sm:table-cell text-xs sm:text-base pl-2 py-2"
        >
          Weight
        </th>
        <th v-if="props.type === Type.Athlete" class="text-xs sm:text-base pl-2 py-2">Position</th>
        <th class="hidden sm:table-cell text-xs sm:text-base pl-2 py-2">Exprience</th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="border-b"
        v-for="(profile, index) in member"
        :key="profile.id"
        :class="index % 2 === 0 ? 'bg-white' : 'bg-[#F7F7F4]'"
      >
        <td class="text-xs pl-2 flex justify-start items-center">
          <img :src="profile?.profileImgUrl" class="sm:h-40 h-24 sm:w-auto mr-1" />
        </td>
        <td class="text-xs sm:text-base text-center pl-2 py-3">{{ profile?.name }}</td>
        <td v-if="props.type === Type.Athlete" class="text-xs sm:text-base text-center pl-2 py-3">
          {{ profile?.backNumber }}
        </td>
        <td v-if="props.type === Type.Athlete" class="hidden sm:table-cell text-center pl-2 py-3">
          {{ profile?.height }}
        </td>
        <td v-if="props.type === Type.Athlete" class="hidden sm:table-cell text-center pl-2 py-3">
          {{ profile?.weight }}
        </td>
        <td v-if="props.type === Type.Athlete" class="text-xs sm:text-base text-center pl-2 py-3">
          {{ profile?.position.join('/') }}
        </td>
        <td class="hidden sm:table-cell text-xs text-center sm:text-base pl-2 py-3">
          {{ formatRegistDate(profile?.registrationDate) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts" setup>
import { type PropType, toRefs } from 'vue'
import { Type } from './interfaces/member-type.interface'

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

const props = defineProps({
  member: {
    type: Object as PropType<TeamMember[]>,
    required: true
  },
  type: {
    type: String as PropType<Type>,
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
