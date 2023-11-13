<template>
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
        <div class="fixed inset-0 bg-gray-400 bg-opacity-50 transition-opacity" />
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
                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 sm:mx-0 sm:h-10 sm:w-10"
                  >
                    <ExclamationTriangleIcon class="h-6 w-6 text-amber-500" aria-hidden="true" />
                  </div>
                  <div class="mt-3 sm:ml-4 sm:mt-0 text-left">
                    <DialogTitle
                      as="h3"
                      class="text-sm text-center sm:text-left sm:text-xl font-semibold leading-6 text-gray-900"
                    >
                      공지사항
                    </DialogTitle>
                    <div class="mt-2">
                      <div class="text-xs sm:text-base text-gray-700">
                        <p class="font-semibold">주요대회 바로가기</p>
                        <p>
                          전국 대학리그 1부
                          <RouterLink to="/tiger-bowl" class="text-blue-600">바로가기</RouterLink>
                        </p>
                        <p>
                          전국 대학리그 2부
                          <RouterLink to="/challenge-bowl" class="text-blue-600"
                            >바로가기</RouterLink
                          >
                        </p>
                        <p>
                          사회인 리그
                          <RouterLink to="/gwanggaeto-bowl" class="text-blue-600"
                            >바로가기</RouterLink
                          >
                        </p>
                        <br />
                        <p class="font-semibold">문의사항</p>
                        <p>대한미식축구협회 전무이사 김진국 010-3004-0862</p>
                        <p>대한미식축구협회 미디어 홍보국 팀장 이기호 010-3004-0862</p>
                        <br />
                        <p class="font-semibold">버그제보</p>
                        <p>toby.park@humantrust.one</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 sm:ml-3 sm:w-auto"
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
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const open = ref(true)
</script>
