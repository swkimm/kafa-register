<template>
  <h1 class="mb-5 font-extrabold font-mono text-2xl text-left">팀명 소개</h1>
  <p>
    {{ teamDetail.message }}
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ex assumenda veniam, quae
  </p>
</template>
<script lang="ts" setup>
import { type PropType, toRefs } from 'vue'

interface TeamDetail {
  id: number
  name: string
  profileImgUrl: string
  association: string
  message: string
  workoutId: number
  workout: {
    id: number
    name: string
  }
}

const props = defineProps({
  teamDetail: {
    type: Object as PropType<TeamDetail>,
    required: true
  }
})

const { teamDetail } = toRefs(props)
</script>

<style></style>
