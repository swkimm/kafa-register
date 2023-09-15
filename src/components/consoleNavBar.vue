<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-screen items-center justify-between p-3 px-4 md:px-10"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <router-link to="/console" class="-m-1.5 p-1.5">
          <span class="sr-only">KAFA</span>
          <img class="h-12 w-auto" src="/images/logo.jpg" alt="KAFA" />
        </router-link>
      </div>

      <!-- 로그아웃 및 열기 버튼의 container -->
      <div class="flex items-center space-x-4">
        <button
          class="text-base font-bold leading-6 text-gray-900 hover:text-teal-500"
          @click="logout"
        >
          로그아웃
        </button>

        <!-- 열기 버튼 추가 -->
        <button
          type="button"
          class="px-2 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          @click="open = true"
        >
          열기
        </button>
      </div>
    </nav>
  </header>

  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          @click="open = false"
        />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto relative w-screen max-w-md">
                <TransitionChild
                  as="template"
                  enter="ease-in-out duration-500"
                  enter-from="opacity-0"
                  enter-to="opacity-100"
                  leave="ease-in-out duration-500"
                  leave-from="opacity-100"
                  leave-to="opacity-0"
                >
                  <div class="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      class="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      @click="open = false"
                    >
                      <span class="absolute -inset-2.5" />
                      <span class="sr-only">Close panel</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </TransitionChild>
                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div class="px-4 sm:px-6">
                    <DialogTitle class="text-base font-semibold leading-6 text-gray-900"
                      ><img class="h-12 w-auto" src="/images/logo.jpg" alt="" />
                    </DialogTitle>
                  </div>
                  <div class="flex flex-col space-y-4 mt-6 px-4 sm:px-6">
                    <router-link to="/update/info" @click="open = false"
                      ><div>정보 수정</div></router-link
                    >
                    <router-link to="/update/logo" @click="open = false"
                      ><div>로고 수정</div></router-link
                    >
                    <router-link to="/update/roster" @click="open = false"
                      ><div>로스터 수정</div></router-link
                    >
                    <router-link to="/register/roster" @click="open = false"
                      ><div>로스터 등록</div></router-link
                    >
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { useAuthStore } from '@/common/auth/store'
import router from '@/router'

const open = ref(false)
const authStore = useAuthStore()

const logout = () => {
  authStore.logout()
  authStore.setIsLoggedIn(false)
  router.push('/')
}
</script>

<style scoped></style>
