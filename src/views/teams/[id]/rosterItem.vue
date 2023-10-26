<template>
  <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
    <div v-for="member in members" :key="member.id" class="group relative">
      <div
        v-if="member.profileImgUrl !== null"
        class="w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-80 h-52 md:h-72 lg:h-80"
      >
        <img
          :src="member.profileImgUrl"
          class="h-full w-full object-cover object-center"
          @click="toggleDialog(member)"
        />
      </div>
      <div
        v-else
        class="w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-80 h-52 md:h-72 lg:h-80"
      >
        <img
          src="https://cdn.playprove.one/default/people_alt.webp"
          class="h-full w-full object-cover object-center"
          @click="toggleDialog(member)"
        />
      </div>
      <div class="mt-3 flex justify-between">
        <div>
          <h3 class="text-lg font-semibold text-gray-700">{{ member.name }}</h3>
          <p class="mt-1 text-sm text-gray-500 font-normal">{{ member.position.join('/') }}</p>
        </div>
        <p class="text-lg font-medium text-gray-900">{{ member.backNumber }}</p>
      </div>
    </div>
  </div>
  <MemberModal
    :open="dialogOpen"
    @update:open="(newOpenValue) => (dialogOpen = newOpenValue)"
    :member="member"
    :team-name="teamName"
  ></MemberModal>
</template>
<script lang="ts" setup>
import { ref, type PropType, type Ref, onMounted } from 'vue'
import { Type } from './interfaces/member-type.interface'
import type { TeamMember } from './interfaces/team-member.interface'
import MemberModal from './memberModal.vue'
import { axiosInstance } from '@/common/auth/store'
import { useRoute } from 'vue-router'

const props = defineProps({
  members: {
    type: Object as PropType<TeamMember[]>,
    required: true
  },
  type: {
    type: String as PropType<Type>,
    required: true
  }
})

const route = useRoute()

const dialogOpen = ref(false)

const member: Ref<TeamMember> = ref(props.members[0])

const toggleDialog = (newMember: TeamMember) => {
  dialogOpen.value = !dialogOpen.value
  member.value = newMember
}

const teamName: Ref<string> = ref('')

onMounted(async () => {
  axiosInstance
    .get(`/team/${route.params.id}`)
    .then((response) => {
      teamName.value = response.data.name
    })
    .catch((error) => {
      if (error) {
        console.error(error)
      }
    })
})
</script>

<style scoped></style>
