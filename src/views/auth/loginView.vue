<template>
  <div class="flex items-center justify-center h-screen">
    <div class="bg-white p-8 shadow-lg rounded-lg">
      <h2 class="text-2xl font-semibold mb-4">로그인</h2>
      <div class="mb-4">
        <label for="username" class="block text-gray-700 font-medium">사용자 이름:</label>
        <input
          type="text"
          id="username"
          v-model="username"
          class="border rounded-lg p-2 w-full"
          required
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-700 font-medium">비밀번호:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="border rounded-lg p-2 w-full"
          required
        />
      </div>
      <button
        @click="validate"
        class="bg-blue-500 text-white font-semibold rounded-lg py-2 px-4 w-full hover:bg-blue-600"
      >
        로그인
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/common/auth/store'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const authStore = useAuthStore()
const router = useRouter()

const username = ref('')
const password = ref('')

function validate() {
  try {
    authStore
      .login(username.value, password.value)
      .then(() => {
        authStore.setIsLoggedIn(true)
        router.push('/console')
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  } catch (error: any) {
    alert(error.response.data.message)
  }
}
</script>

<style scoped></style>
