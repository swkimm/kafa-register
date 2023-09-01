<template>
  <div class="flex flex-col sm:flex-row font-sans rounded-lg bg-black drop-shadow-xl">
    <router-link :to="{ name: 'teamDetail', params: { id: team.id } }">
      <div class="flex flex-col relative items-center justify-center px-10">
        <img :src="team.profileImgUrl" alt="" class="mt-5 w-40 h-40" loading="lazy" />
      </div>
    </router-link>
    <form @submit.prevent="openDetail" class="flex-auto p-5 sm:w-56">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-lg font-extrabold text-white">
          {{ getFirstWord(team.name) }}
        </h1>
        <div class="w-full flex-none text-sm font-bold text-gray-400 mt-2">
          {{ getRemainingWords(team.name) }}
        </div>
      </div>
      <div class="flex my-6 text-sm font-bold">
        <div class="mx-auto">
          <router-link :to="{ name: 'teamDetail', params: { id: team.id } }">
            <button class="h-10 px-6 font-semibold rounded-md bg-white text-black">
              팀 소개 보기
            </button>
          </router-link>
        </div>
      </div>
      <p class="text-sm text-white">{{ team.association.name }}</p>
    </form>
  </div>

  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div
                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"
                  >
                    <InformationCircleIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">{{
                      team.name
                    }}</DialogTitle>
                    <div class="mt-2">
                      <!-- <p class="text-sm text-gray-500">{{ teamHistory }}</p> -->
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                  @click="open = false"
                >
                  창 닫기
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script lang="ts" setup>
import { ref, type PropType, toRefs } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { InformationCircleIcon } from '@heroicons/vue/24/outline'

interface Team {
  id: number
  association: {
    id: number
    name: string
  }
  name: string
  profileImgUrl: string
}

const props = defineProps({
  team: {
    type: Object as PropType<Team>,
    required: true
  }
})

const getFirstWord = (str: string) => {
  const firstSpaceIndex = str.indexOf(' ')
  return firstSpaceIndex !== -1 ? str.substring(0, firstSpaceIndex) : str
}

const getRemainingWords = (str: string) => {
  const firstSpaceIndex = str.indexOf(' ')
  return firstSpaceIndex !== -1 ? str.substring(firstSpaceIndex + 1) : ''
}
const { team } = toRefs(props)

function openDetail() {
  open.value = true
}

const open = ref(false)
</script>
