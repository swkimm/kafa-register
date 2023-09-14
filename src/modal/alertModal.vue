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
                      class="text-sm text-center sm:text-left sm:text-lg font-semibold leading-6 text-gray-900"
                    >
                      주의
                    </DialogTitle>
                    <div class="mt-2">
                      <div class="text-xs sm:text-base text-gray-500">
                        현재 홈페이지는 협회 공식페이지는 아닙니다.<br />
                        Playprove(휴먼트러스트 주식회사)는 현재 2023홍천군수배 서울/경기/강원 추계
                        대학 미식축구대회 운영을 후원 차원에서 시스템개발을 시작하였고, 협회차원의
                        내용들은 테스트페이지임을 알려드립니다. <br />
                        지역 협회, 사회인, 플래그연맹등도 동일한수준으로 쉽게 적용가능한 수준으로
                        개발과 테스트를 진행중입니다.<br />
                        조금더 발전시켜서 협회 공식페이지가 될 수 있게 노력하겠습니다<br /><br />
                        <p>문의사항</p>
                        <p>경기/강원협회 회장 김진국 010-8433-5189</p>
                        <p>서울미식축구협회 사무국장 이동준 010-5668-0430</p>
                        <p>PLAYPROVE 대표이사 이기호 010-3004-0862</p>
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
