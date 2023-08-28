<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-screen-xl items-center justify-between p-6 px-4 md:px-20"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <router-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">KAFA</span>
          <img class="h-12 w-auto" src="/images/logo.jpg" alt="KAFA" />
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover class="relative">
          <PopoverButton
            class="flex items-center gap-x-1 text-base font-bold leading-6 text-gray-900"
          >
            메뉴 목록
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-teal-900/5"
            >
              <div class="p-4">
                <div
                  v-for="item in products"
                  :key="item.name"
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                >
                  <div
                    class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-200 group-hover:bg-white"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6 text-gray-600 group-hover:text-teal-500"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="flex-auto">
                    <router-link
                      :to="item.href"
                      class="block font-semibold text-gray-900"
                      active-class="text-teal-500"
                    >
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </router-link>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 divide-gray-900/5 bg-gray-50">
                <router-link
                  v-for="item in callsToAction"
                  :key="item.name"
                  :to="item.href"
                  class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-teal-500 hover:text-white"
                  active-class="text-teal-500"
                >
                  <component
                    :is="item.icon"
                    class="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </router-link>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <router-link
          to="/notice"
          class="text-base font-bold leading-6 text-gray-900 hover:text-teal-500"
          active-class="text-teal-500"
        >
          대회 요강
        </router-link>
        <router-link
          to="/schedule"
          class="text-base font-bold leading-6 text-gray-900 hover:text-teal-500"
          active-class="text-teal-500"
        >
          대회 일정
        </router-link>
        <router-link
          to="/team"
          class="text-base font-bold leading-6 text-gray-900 hover:text-teal-500"
          active-class="text-teal-500"
        >
          협회 팀 명단
        </router-link>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="https://forms.gle/HxFxoZPkzak7QX3C9"
          class="text-base font-bold leading-6 text-teal-500"
          >출전 팀 등록하기 <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">KAFA</span>
            <img class="h-10 w-auto" src="/images/logo.jpg" alt="KAFA" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <router-link
                to="/notice"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                active-class="text-teal-500"
                @click="mobileMenuOpen = false"
              >
                대회 요강
              </router-link>
              <router-link
                to="/schedule"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                active-class="text-teal-500"
                @click="mobileMenuOpen = false"
              >
                대회 일정
              </router-link>
              <router-link
                to="/team"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                active-class="text-teal-500"
                @click="mobileMenuOpen = false"
              >
                협회 팀 명단
              </router-link>
            </div>
            <div class="py-6">
              <a
                href="https://forms.gle/HxFxoZPkzak7QX3C9"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-teal-500 hover:bg-gray-200"
                >출전 팀 등록하기</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from '@headlessui/vue'
import {
  Bars3Icon,
  BookOpenIcon,
  CalendarDaysIcon,
  UsersIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

const products = [
  {
    name: '대회 요강',
    description: '대회 요강을 확인할 수 있습니다',
    href: '/notice',
    icon: BookOpenIcon
  },
  {
    name: '대회 일정',
    description: '대회 일정을 확인할 수 있습니다',
    href: '/schedule',
    icon: CalendarDaysIcon
  },
  {
    name: '협회 팀 명단',
    description: '협회에 등록되어 있는 팀들을 확인합니다',
    href: '/team',
    icon: UsersIcon
  }
]
const callsToAction = [
  { name: '출전 팀 등록하기', href: 'https://forms.gle/HxFxoZPkzak7QX3C9', icon: PlayCircleIcon }
]

const mobileMenuOpen = ref(false)
</script>

<style scoped></style>
