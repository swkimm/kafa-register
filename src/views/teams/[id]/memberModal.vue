<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-30" @close="closeDialog">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
      </TransitionChild>

      <div class="fixed inset-0 z-30 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enter-to="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 md:scale-100"
            leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <DialogPanel
              class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl"
            >
              <div
                class="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
              >
                <button
                  type="button"
                  class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                  @click="closeDialog"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>

                <div
                  class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8"
                >
                  <div
                    class="overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5 w-40 sm:w-full mx-auto"
                  >
                    <img :src="member.profileImgUrl" class="object-cover object-center" />
                  </div>
                  <div class="sm:col-span-8 lg:col-span-7">
                    <section class="mt-2">
                      <div class="text-xs sm:text-base font-bold text-gray-800">
                        {{ props.teamName }}
                      </div>
                      <p class="text-xl sm:text-2xl font-medium">{{ member.name }}</p>
                    </section>

                    <section class="mt-8">
                      <div class="mt-4 sm:mt-8">
                        <div class="flex flex-col items-start">
                          <h4 class="text-xs sm:text-sm font-semibold text-gray-800">
                            Back Number
                          </h4>
                          <p class="font-medium text-base sm:text-xl"># {{ member.backNumber }}</p>
                        </div>
                      </div>

                      <div class="mt-4 sm:mt-8">
                        <div class="flex flex-col items-start">
                          <h4 class="text-xs sm:text-sm font-semibold text-gray-800">Position</h4>
                          <p class="font-medium text-base sm:text-xl">
                            {{ member.position.join('/') }}
                          </p>
                        </div>
                      </div>

                      <div class="mt-4 sm:mt-8">
                        <div class="flex flex-col items-start">
                          <h4 class="text-xs sm:text-sm font-semibold text-gray-800">Physical</h4>
                          <p class="font-medium text-base sm:text-xl">
                            {{ member.height }}cm/{{ member.weight }}kg
                          </p>
                        </div>
                      </div>

                      <div class="mt-4 sm:mt-8">
                        <div class="flex flex-col items-start">
                          <h4 class="text-xs sm:text-sm font-semibold text-gray-800">Experience</h4>
                          <p class="font-medium text-base sm:text-xl">
                            {{
                              new Date().getFullYear() -
                              new Date(member.registrationDate).getFullYear() +
                              1
                            }}
                            years
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script lang="ts" setup>
import { ref, type PropType, watchEffect } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import type { TeamMember } from './interfaces/team-member.interface'

const props = defineProps({
  member: {
    type: Object as PropType<TeamMember>,
    required: true
  },
  open: {
    type: Boolean,
    default: false
  },
  teamName: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:open'])

const localOpen = ref(false)

watchEffect(() => {
  localOpen.value = props.open
})

const closeDialog = () => {
  localOpen.value = false
  emit('update:open', false)
}
</script>
