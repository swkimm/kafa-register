<template>
  <div class="relative">
    <div
      class="w-1/5 bg-indigo-800 text-white p-4 flex flex-row justify-center"
      :class="{
        'transform translate-x-0': isSidebarOpen,
        'transform translate-x-5': !isSidebarOpen
      }"
      v-if="isSidebarOpen"
    >
      <!-- 툴바 내용 -->
      <div class="flex mb-6">
        <div v-if="isSidebarOpen" class="ml-auto">
          <i
            class="fa-solid fa-xmark fa-2xl cursor-pointer"
            @click="toggleSidebar"
            style="color: #ffffff"
          ></i>
        </div>
      </div>

      <div>
        <ul>
          <li class="mb-2 hover:bg-indigo-700 p-2 rounded">
            <a href="/register/team" class="text-white hover:underline">팀 정보 수정</a>
          </li>
          <li class="mb-2 hover:bg-indigo-700 p-2 rounded">
            <a href="#" class="text-white hover:underline" @click="toggleRoaster">팀 인원 수정</a>
          </li>
          <li class="mb-2 hover:bg-indigo-700 p-2 rounded">
            <a href="#" class="text-white hover:underline" @click="handleLogout">로그아웃</a>
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="bg-indigo-800">
      <i
        class="fa-solid fa-bars fa-xl px-4 pt-5 cursor-pointer"
        @click="toggleSidebar"
        style="color: #ffffff"
      ></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAuthStore } from '@/common/auth/store'
import router from '@/router'

const authStore = useAuthStore()

function handleLogout() {
  authStore.logout()
  authStore.setIsLoggedIn(false)
  router.push('/')
}

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

const teamMember = ref<TeamMember[]>([])

const isSidebarOpen = ref(false)
const isRoasterOpen = ref(false)
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const toggleRoaster = () => {
  isRoasterOpen.value = true
}
</script>
<style scoped></style>
