<template>
  <nav class="flex items-center justify-between flex-wrap px-6 py-5 border-b-2 border-b-gray-900">
    <div class="flex items-center flex-nowrap text-white">
      <button @click="router.push('/')" class="font-bold text-xl tracking-tight">
        <img src="/images/logo.jpg" alt="KAFA LOGO" width="105" />
      </button>
    </div>
    <Popover class="relative">
      <PopoverButton
        class="inline-flex items-center gap-x-1 text-xl font-semibold leading-6 text-gray-900"
      >
        <span>Menu</span>
        <Bars3Icon class="h-5 w-5" aria-hidden="true" />
      </PopoverButton>

      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <PopoverPanel class="absolute right-0 z-10 mt-5 flex w-80 max-w-sm">
          <div
            class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"
          >
            <div class="p-4">
              <div
                v-for="item in solutions"
                :key="item.name"
                class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-100"
              >
                <div
                  class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                >
                  <component
                    :is="item.icon"
                    class="h-6 w-6 text-gray-600 group-hover:text-teal-600"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <a :href="item.href" class="font-semibold text-gray-900">
                    {{ item.name }}
                    <span class="absolute inset-0" />
                  </a>
                  <p class="mt-1 text-gray-600">{{ item.description }}</p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 bg-gray-50">
              <a
                v-for="item in callsToAction"
                :key="item.name"
                :href="item.href"
                class="flex items-center gap-x-2 justify-center p-3 font-semibold text-base text-gray-900 hover:bg-gray-100"
              >
                <component
                  :is="item.icon"
                  class="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
                {{ item.name }}
              </a>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </nav>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon } from '@heroicons/vue/20/solid'
import { PlayCircleIcon } from '@heroicons/vue/24/solid'
import { BookOpenIcon, CalendarDaysIcon, UsersIcon } from '@heroicons/vue/24/outline'

const solutions = [
  {
    name: '대회요강',
    description: '대회요강 페이지로 이동합니다',
    href: '/notice',
    icon: BookOpenIcon
  },
  {
    name: '대회일정',
    description: '대회 일정 페이지로 이동합니다',
    href: '/schedule',
    icon: CalendarDaysIcon
  },
  {
    name: '참가팀 명단',
    description: '참가팀 명단 페이지로 이동합니다',
    href: '/team',
    icon: UsersIcon
  }
]

const callsToAction = [
  { name: '출전 팀 등록', href: 'https://forms.gle/HxFxoZPkzak7QX3C9', icon: PlayCircleIcon }
]

const router = useRouter()
</script>

<style scoped></style>
