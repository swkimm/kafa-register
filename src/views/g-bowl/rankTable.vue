<template>
  <div class="relative overflow-x-auto shadow-md rounded-lg">
    <table class="w-full text-xs sm:text-sm text-left text-gray-800">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">#</th>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Win</th>
          <th scope="col" class="px-6 py-3">Lose</th>
          <th scope="col" class="px-6 py-3">Draw</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="team in teams"
          :key="team.id"
          class="bg-white border-b hover:bg-gray-50"
          @click="router.push(`/team/${team.id}`)"
        >
          <td class="px-6 py-4 whitespace-nowrap">
            {{ team.rank }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex flex-row justify-between gap-2 items-center flex-nowrap">
              <div class="flex items-center gap-2">
                <img :src="team.profile_img_url" alt="" class="w-8 min-w-[32px]" />
                <span class="hidden sm:table-cell">{{ team.name }}</span>
                <span class="sm:hidden">{{ team.initial }}</span>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            {{ team.win }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            {{ team.lose }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            {{ team.draw }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Team } from '../teams/interface/team.interface'
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  teams: {
    type: Object as PropType<Team[]>,
    required: true
  }
})
</script>
