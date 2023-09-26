<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto w-full" src="/images/logo.jpg" alt="Your Company" />
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-4" @submit.prevent="validate">
        <div>
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900"
            >아이디</label
          >
          <div class="mt-1">
            <input
              id="username"
              name="username"
              type="text"
              autocomplete="uesrname"
              v-model="username"
              required
              class="block w-full ps-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >패스워드</label
            >
          </div>
          <div class="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              v-model="password"
              required
              class="block w-full ps-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full mt-10 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-xs text-gray-500">
        현재 팀 계정만 발급하고 있으며, 개인 계정 발급은 추후 오픈될 예정입니다.
      </p>
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
