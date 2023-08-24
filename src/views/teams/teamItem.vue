<template>
  <div class="flex flex-col sm:flex-row font-sans rounded-lg bg-black drop-shadow-xl">
    <div class="flex flex-col relative items-center justify-center">
      <img src="/images/playprove.png" alt="" class="w-full h-full" loading="lazy" />
    </div>
    <form @submit.prevent="openDetail" class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-lg font-bold text-white">성균관대학교 로얄스</h1>
        <div class="w-full flex-none text-sm font-semibold text-gray-200 mt-2">SKKU ROYALS</div>
      </div>
      <div class="flex my-6 text-sm font-bold">
        <div class="mx-auto">
          <button class="h-10 px-6 font-semibold rounded-md bg-white text-black">
            자세히 보기
          </button>
        </div>
      </div>
      <p class="text-sm text-white">서울미식축구협회 소속</p>
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
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900"
                      >성균관대학교 로얄스</DialogTitle
                    >
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        1957년 창단한 성균관대학교 미식축구부는 대한민국에 현존하는 최고령 팀으로서
                        한국 미식축구 역사에 숱한 족적을 남겨왔습니다.<br />
                        성균관대 최고 전성기는 70~80년대로 1978년부터 1982년까지 4년간 상대팀에게 총
                        4개의 퍼스트다운과 1개의 터치다운만을 허용할 정도로 막강한 전력을
                        과시했습니다. 당시 성균관대는 일본 유수의 대학팀들과 선발전을 펼치는 등
                        활약했으나, 80년대 중반부터 부산세에 밀리기 시작 96,97년에는 2부에서
                        활동하는 시련을 겪기도 했습니다.
                      </p>
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
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { InformationCircleIcon } from '@heroicons/vue/24/outline'

function openDetail() {
  open.value = true
}

const open = ref(false)
</script>
