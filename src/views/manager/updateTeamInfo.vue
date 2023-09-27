<template>
  <div class="my-10 max-w-screen-sm w-full px-8 sm:px-32 mx-auto flex flex-col">
    <div class="w-full">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        팀 프로필 수정
      </h2>
    </div>
    <div>
      <label for="name" class="block text-sm mt-2 font-medium leading-6 text-gray-900">팀명</label>
      <div class="mt-2">
        <input
          v-model="updateProfile.name"
          type="text"
          name="name"
          id="name"
          autocomplete="given-name"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
        />
      </div>
    </div>

    <div>
      <label for="initial" class="block text-sm mt-2 font-medium leading-6 text-gray-900"
        >이니셜</label
      >
      <div class="mt-2">
        <input
          v-model="updateProfile.initial"
          type="string"
          name="initial"
          id="initial"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
        />
      </div>
    </div>

    <div>
      <label for="message" class="block text-sm mt-2 font-medium leading-6 text-gray-900"
        >메세지</label
      >
      <div class="mt-2">
        <input
          v-model="updateProfile.message"
          type="string"
          name="message"
          id="message"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
        />
      </div>
    </div>

    <div>
      <label for="teamColor" class="block text-sm mt-2 font-medium leading-6 text-gray-900"
        >팀 컬러(메인)</label
      >
      <div class="mt-2">
        <input
          v-model="updateProfile.teamColor"
          type="string"
          name="teamColor"
          id="teamColor"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
        />
        <p class="text-xs text-gray-500 mt-1">#000000 형식으로 입력하세요</p>
      </div>
    </div>

    <div>
      <label for="teamSubColor" class="block text-sm mt-2 font-medium leading-6 text-gray-900"
        >팀 컬러(서브)</label
      >
      <div class="mt-2">
        <input
          v-model="updateProfile.teamSubColor"
          type="string"
          name="teamSubColor"
          id="teamSubColor"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
        />
        <p class="text-xs text-gray-500 mt-1">#000000 형식으로 입력하세요</p>
      </div>
    </div>

    <div>
      <label for="createdAt" class="block text-sm mt-2 font-medium leading-6 text-gray-900"
        >창단 년도</label
      >
      <div class="mt-2">
        <input
          v-model="createdYear"
          type="number"
          id="createdAt"
          name="createdAt"
          min="1900"
          max="2099"
          step="1"
          class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
        />
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="flex w-full mt-10 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="submitProfileUpdate"
      >
        수정 하기
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'
import { axiosInstance } from '@/common/auth/store'
import router from '@/router'

interface Team {
  name: string
  initial: string
  message?: string
  teamColor: string
  teamSubColor: string
  profileImgUrl: string
  createdAt: string
}

interface TeamDetail {
  id: number
  workoutId: string
  name: string
  initial: string | null | undefined
  message: string
  teamColor: string
  teamSubColor: string
  profileImgUrl: string
  createdAt: string
  associationId: number
  workout: {
    id: number
    name: string
  }

  association: {
    id: number
    name: string
  }
}

const teamProfile = ref<TeamDetail>()
const updateProfile = ref<Team>({} as Team)

const submitProfileUpdate = async () => {
  try {
    const hexPattern = /^#[0-9a-fA-F]{6}$/
    if (
      !hexPattern.test(updateProfile.value.teamColor) ||
      !hexPattern.test(updateProfile.value.teamSubColor)
    ) {
      throw new Error('#000000 형식으로 입력해주세요.')
    }

    await axiosInstance
      .put('/manager/team/profile/contents', updateProfile.value)
      .then(() => {
        alert('수정되었습니다.')
        router.push('/console')
      })
      .catch((error) => {
        console.log(updateProfile.value)
        alert(error)
      })
  } catch (error: any) {
    console.error('Update Error:', error)
    alert(error.message)
  }
}

const getTeamProfile = async () => {
  try {
    const response = await axiosInstance.get('/manager/team/profile')
    teamProfile.value = response.data
  } catch (error: any) {
    console.error('데이터 요청 중 오류 발생:', error)
    if (error) {
      console.error('Error Message:', error.message)
    }
  }
}

const createdYear = computed({
  get: () => {
    const date = new Date(updateProfile.value.createdAt)
    return date.getFullYear()
  },
  set: (value) => {
    const date = new Date(updateProfile.value.createdAt)
    date.setFullYear(value)
    updateProfile.value.createdAt = date.toISOString().split('T')[0]
  }
})

onMounted(async () => {
  await getTeamProfile()
  if (teamProfile.value) {
    updateProfile.value = {
      name: teamProfile.value.name || '',
      initial: teamProfile.value.initial || '',
      message: teamProfile.value.message || '',
      teamColor: teamProfile.value.teamColor || '',
      teamSubColor: teamProfile.value.teamSubColor || '',
      profileImgUrl: teamProfile.value.profileImgUrl || '',
      createdAt: teamProfile.value.createdAt || ''
    }
  }
})
</script>
