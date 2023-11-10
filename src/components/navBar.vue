<template>
  <header
    class="bg-white sticky top-0 z-10"
    :class="scrolled && !mobileMenuOpen ? 'shadow-xl' : 'shadow-none'"
  >
    <nav
      class="mx-auto flex max-w-screen-xl items-center justify-between p-6 px-4 md:px-20"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <router-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">KAFA</span>
          <img class="h-12 w-auto" src="/images/logo.png" alt="KAFA" />
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button
          v-if="!mobileMenuOpen"
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
            대회 일정
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
                      <PopoverButton>
                        {{ item.name }}
                        <span class="absolute inset-0" />
                      </PopoverButton>
                    </router-link>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 divide-gray-900/5 bg-gray-50">
                <a
                  v-for="item in callsToAction"
                  :key="item.name"
                  :href="item.href"
                  class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-teal-500 hover:text-white"
                  active-class="text-teal-500"
                >
                  <component
                    :is="item.icon"
                    class="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </a>
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
        <Popover class="relative">
          <PopoverButton
            class="flex items-center gap-x-1 text-base font-bold leading-6 text-gray-900"
          >
            협회 팀 명단
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
                  v-for="item in associations"
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
                      <PopoverButton>
                        {{ item.name }}
                        <span class="absolute inset-0" />
                      </PopoverButton>
                    </router-link>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 divide-gray-900/5 bg-gray-50">
                <a
                  v-for="item in callsToAction"
                  :key="item.name"
                  :href="item.href"
                  class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-teal-500 hover:text-white"
                  active-class="text-teal-500"
                >
                  <component
                    :is="item.icon"
                    class="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <router-link
          to="/auth/login"
          class="text-base font-bold leading-6 text-gray-900 hover:text-teal-500"
          active-class="text-teal-500"
          @click="mobileMenuOpen = false"
        >
          로그인
        </router-link>
      </div>
    </nav>
    <Dialog as="div" class="flex lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-20" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <router-link to="/" class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
            <span class="sr-only">KAFA</span>
            <img class="h-12 w-auto" src="/images/logo.png" alt="KAFA" />
          </router-link>
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
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  대회 일정
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <router-link
                    v-for="item in [...products]"
                    :key="item.name"
                    as="a"
                    @click="mobileMenuOpen = false"
                    active-class="text-teal-500"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    :to="item.href"
                  >
                    <DisclosureButton>{{ item.name }}</DisclosureButton>
                  </router-link>
                </DisclosurePanel>
              </Disclosure>
              <router-link
                to="/notice"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                active-class="text-teal-500"
                @click="mobileMenuOpen = false"
              >
                대회 요강
              </router-link>
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  협회 팀 명단
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <router-link
                    v-for="item in [...associations]"
                    :key="item.name"
                    as="a"
                    @click="mobileMenuOpen = false"
                    active-class="text-teal-500"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    :to="item.href"
                  >
                    <DisclosureButton>{{ item.name }}</DisclosureButton>
                  </router-link>
                </DisclosurePanel>
              </Disclosure>
            </div>
            <div class="py-6">
              <router-link
                to="/auth/login"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                active-class="text-teal-500"
                @click="mobileMenuOpen = false"
              >
                로그인
              </router-link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from '@headlessui/vue'
import { Bars3Icon, CalendarDaysIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

const products = [
  {
    name: '서울협회',
    description: '서울 지역 일정을 확인할 수 있습니다',
    href: '/schedule/association/2',
    icon: CalendarDaysIcon
  },
  {
    name: '경기강원협회',
    description: '경기강원 지역 일정을 확인할 수 있습니다',
    href: '/schedule/association/3',
    icon: CalendarDaysIcon
  },
  {
    name: '부산울산경남협회',
    description: '부산울산경남 지역 일정을 확인할 수 있습니다',
    href: '/schedule/association/4',
    icon: CalendarDaysIcon
  },
  {
    name: '대구경북협회',
    description: '대구경북 지역 일정을 확인할 수 있습니다',
    href: '/schedule/association/5',
    icon: CalendarDaysIcon
  },
  {
    name: '사회인연맹',
    description: '사회인리그 일정을 확인할 수 있습니다',
    href: '/schedule/association/6',
    icon: CalendarDaysIcon
  },
  {
    name: '플래그풋볼연맹',
    description: '플래그풋볼연맹 등록 팀 명단',
    href: '/schedule/association/7',
    icon: CalendarDaysIcon
  }
]

const associations = [
  {
    name: '서울협회',
    description: '서울 협회 등록 팀 명단',
    href: '/association/2/teams',
    icon: CalendarDaysIcon
  },
  {
    name: '경기강원협회',
    description: '경기강원 협회 등록 팀 명단',
    href: '/association/3/teams',
    icon: CalendarDaysIcon
  },
  {
    name: '부산울산경남협회',
    description: '부산울산경남 협회 등록 팀 명단',
    href: '/association/4/teams',
    icon: CalendarDaysIcon
  },
  {
    name: '대구경북협회',
    description: '대구경북협회 협회 등록 팀 명단',
    href: '/association/5/teams',
    icon: CalendarDaysIcon
  },
  {
    name: '사회인연맹',
    description: '사회인연맹 등록 팀 명단',
    href: '/association/6/teams',
    icon: CalendarDaysIcon
  },
  {
    name: '플래그풋볼연맹',
    description: '플래그풋볼연맹 등록 팀 명단',
    href: '/association/7/teams',
    icon: CalendarDaysIcon
  }
]

const callsToAction = [
  { name: '출전 팀 등록하기', href: 'https://forms.gle/HxFxoZPkzak7QX3C9', icon: PlayCircleIcon }
]

const mobileMenuOpen = ref(false)

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped></style>
