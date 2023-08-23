<template>
  <nav class="flex items-center justify-between flex-wrap px-6 py-5 border-b-2 border-b-gray-500">
    <div class="flex items-center flex-nowrap text-white">
      <button @click="router.push('/')" class="font-bold text-xl tracking-tight">KAFA</button>
    </div>
    <div
      class="w-full hidden flex-row text-sm lg:flex lg:gap-6 justify-center lg:items-center lg:w-auto"
    >
      <a
        @click="router.push('/notice')"
        class="text-center block mt-4 lg:inline-block lg:mt-0 text-teal-400 hover:text-white px-2"
      >
        대회 요강
      </a>
      <a
        @click="router.push('/schedule')"
        class="text-center block mt-4 lg:inline-block lg:mt-0 text-teal-400 hover:text-white px-2"
      >
        대회 일정
      </a>
    </div>
    <div class="hidden items-center flex-nowrap text-teal-400 lg:flex">
      <span class="font-bold text-sm tracking-tight">등록 하기</span>
    </div>
    <div class="flex gap-4 lg:hidden">
      <div class="flex items-center flex-nowrap text-teal-400 lg:mr-6">
        <span class="font-bold text-sm tracking-tight">등록 하기</span>
      </div>
    </div>
    <!-- <button
        class="flex items-center px-3 py-2 border rounded text-teal-100 border-teal-400 hover:text-white hover:border-white"
        @click="togleOpen"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button> -->
    <!-- <div
      :class="{ hidden: !isOpen }"
      class="absolute right-5 z-10 origin-top-right rounded-md bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none lg:hidden fixed-element"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="p-8 text-base text-teal-400" role="none">
        <a href="#" class="block px-4 py-2" role="menuitem" tabindex="-1" id="menu-item-0"
          >Whitepaper</a
        >
        <hr />
        <a href="#" class="block px-4 py-2" role="menuitem" tabindex="-1" id="menu-item-1"
          >Products</a
        >
        <hr />
        <a href="#" class="block px-4 py-2" role="menuitem" tabindex="-1" id="menu-item-2">About</a>
      </div>
    </div> -->
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isOpen = ref(false)
// const togleOpen = () => (isOpen.value = !isOpen.value)
</script>

<style scoped>
.fixed-element {
  top: 4rem;
  left: 50%;
  transform: translate(-50%);
  width: calc(100vw - 5em);
  max-width: calc(768px - 5em);
}
</style>
