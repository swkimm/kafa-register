<template>
  <div class="text-2xl font-extrabold px-3 py-3 mb-3">팀 관리자 페이지</div>

  <div class="max-w-screen h-full">
    <div :style="{ backgroundColor: teamProfile?.teamColor || '#173921' }">
      <div class="mx-auto max-w-screen-xl px:4 sm:px-20 text-white">
        <div class="mb-3 flex flex-row pt-8">
          <div
            class="basis-1/3"
            :class="{ 'text-black': isWhite(teamProfile?.teamColor as string) }"
          >
            <h1 class="text-xs sm:text-xs px-4 sm:px-0">
              {{ getFirstWord(teamProfile?.name || '') }}
            </h1>
            <h1 class="sm:text-m md:text-xl px-4 sm:px-0">
              {{ getRemainingWords(teamProfile?.name || '') }}
            </h1>
          </div>
          <div class="basis-1/3 px-4">
            <img
              :src="teamProfile?.profileImgUrl"
              class="items-center text-center m-auto hidden lg:block sm:hidden lg:w-64 lg:h-64"
            />
          </div>
          <div class="basis-1/3">
            <img
              :src="teamProfile?.profileImgUrl"
              class="items-center block lg:hidden md:block sm:block sm:w-32 sm:h-32 md:w-32 md:h-32"
            />
          </div>
        </div>
        <div class="mb-3 flex flex-col sm:flex-row pt-4 pb-4 px-4">
          <div
            :class="{ 'text-black': isWhite(teamProfile?.teamColor as string) }"
            class="flex flex-col border-0 basis-1/3 xl:items-center xl:border-r lg:items-center lg:border-r md:items-center md:border-r sm:flex-col sm:items-start"
          >
            <div class="text-xs mb-2">CONFERENCE</div>
            <div class="font-bold lg:text-2xl sm:text-lg">{{ teamProfile?.association.name }}</div>
          </div>
          <hr class="border-b-0 my-3" />

          <div
            :class="{ 'text-black': isWhite(teamProfile?.teamColor as string) }"
            class="flex flex-col basis-1/3 xl:items-center xl:border-r lg:items-center lg:border-r md:items-center md:border-r sm:flex-col sm:items-start sm-border-b"
          >
            <div class="text-xs mb-2">NICKNAME</div>
            <div class="font-bold lg:text-2xl sm:text-lg">
              {{ getRemainingWords(teamProfile?.name) }}
            </div>
          </div>
          <hr class="border-b-0 my-3" />
          <div
            :class="{ 'text-black': isWhite(teamProfile?.teamColor as string) }"
            class="flex flex-col border-0 basis-1/3 xl:items-center xl:border-0 lg:items-center lg:border-0 md:items-center sm:flex-col sm:items-start"
          >
            <div class="text-xs mb-2">Establish</div>
            <div class="font-bold lg:text-2xl sm:text-lg">
              {{ teamProfile?.createdAt ? new Date(teamProfile.createdAt).getFullYear() : 'N/A' }}
            </div>
          </div>
        </div>
        <div
          class="flex flex-row justify-center py-3"
          :style="{ backgroundColor: darkenColor(teamProfile?.teamColor, 10) }"
        >
          <div class="flex flex-fow">
            <a href="#" class="">
              <i class="fa-brands fa-instagram fa-xl mx-1 align-mid" style="color: #ffffff"></i>
            </a>
            <div class="text-white text-sm align-mid">@insta</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="px-10 mb-3 mt-5 flex flex-col items-center justify-center">
    <div class="text-2xl font-bold mb-5">팀 관리자 메뉴</div>
    <ul class="text-center">
      <li class="mb-3">
        <button
          class="px-2 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          @click="goToUpdateInfo"
        >
          정보 수정
        </button>
      </li>
      <li class="mb-3">
        <button
          class="px-2 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          @click="goToUpdateLogo"
        >
          로고 수정
        </button>
      </li>
      <li class="mb-3">
        <button
          class="px-2 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          @click="goToUpdateRoster"
        >
          로스터 수정
        </button>
      </li>
      <li class="mb-3">
        <button
          class="px-2 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          @click="goToRegisterRoster"
        >
          로스터 등록
        </button>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { axiosInstance } from '@/common/auth/store'
import router from '@/router'
import { onMounted, ref } from 'vue'

interface TeamDetail {
  id: number
  name: string
  initial: string
  message: string | null | undefined
  profileImgUrl: string
  teamColor: string
  teamSubColor: string
  createdAt: string
  workout: {
    id: number
    name: string
  }
  association: {
    id: number
    name: string
  }
}

const goToRegisterRoster = () => {
  router.push('/register/roster')
}

const goToUpdateRoster = () => {
  router.push('/update/roster')
}

const goToUpdateInfo = () => {
  router.push('/update/info')
}

const goToUpdateLogo = () => {
  router.push('/update/logo')
}

const teamProfile = ref<TeamDetail>() // 초기값을 null로 설정

const getTeamProfile = async () => {
  try {
    const response = await axiosInstance.get('/manager/team/profile')
    teamProfile.value = response.data
  } catch (error: any) {
    console.error('데이터 요청 중 오류 발생:', error)
    // 오류 응답 내용을 콘솔에 출력
    if (error) {
      console.error('Error Message:', error.message)
    }
  }
}

const getFirstWord = (str: string) => {
  const firstSpaceIndex = str.indexOf(' ')
  return firstSpaceIndex !== -1 ? str.substring(0, firstSpaceIndex) : str
}

const getRemainingWords = (str: string | undefined) => {
  if (!str) return ''
  const firstSpaceIndex = str.indexOf(' ')
  return firstSpaceIndex !== -1 ? str.substring(firstSpaceIndex + 1) : ''
}

const darkenColor = (hex: string | undefined, percent: number) => {
  if (!hex) return ''

  hex = hex.replace(/^#/, '')
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  const darkerR = Math.round((r * (100 - percent)) / 100)
  const darkerG = Math.round((g * (100 - percent)) / 100)
  const darkerB = Math.round((b * (100 - percent)) / 100)

  const darkerHex = `#${darkerR.toString(16).padStart(2, '0')}${darkerG
    .toString(16)
    .padStart(2, '0')}${darkerB.toString(16).padStart(2, '0')}`

  return darkerHex
}

function isWhite(color: string) {
  return color === '#ffffff' || color === 'white'
}
onMounted(async () => {
  await getTeamProfile()
})
</script>
<style scoped></style>
