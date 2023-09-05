<template>
  <div class="my-10 max-w-screen-sm w-full px-8 sm:px-32 mx-auto flex flex-col">
    <div class="w-full">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        팀 정보 수정
      </h2>
    </div>
    <div class="mt-10 w-full">
      <form class="space-y-6" @submit.prevent="uploadFile">
        <Listbox as="div" v-model="selected">
          <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900"
            >팀 선택</ListboxLabel
          >
          <div class="relative mt-2">
            <ListboxButton
              class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
            >
              <span class="flex items-center">
                <img
                  :src="selected.profileImgUrl"
                  alt=""
                  class="h-5 w-5 flex-shrink-0 rounded-full"
                />
                <span class="ml-3 block truncate">{{ selected.name }}</span>
              </span>
              <span
                class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
              >
                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  as="template"
                  v-for="team in teams"
                  :key="team.id"
                  :value="team"
                  v-slot="{ active, selected }"
                >
                  <li
                    :class="[
                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-3 pr-9'
                    ]"
                  >
                    <div class="flex items-center">
                      <img
                        :src="team.profileImgUrl"
                        alt=""
                        class="h-5 w-5 flex-shrink-0 rounded-full"
                      />
                      <span
                        :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']"
                        >{{ team.name }}</span
                      >
                    </div>

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-indigo-600',
                        'absolute inset-y-0 right-0 flex items-center pr-4'
                      ]"
                    >
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>

        <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900"
          >로고 이미지 업로드</label
        >
        <div
          class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
          @dragover.prevent
          @dragenter.prevent="dragEnter"
          @dragleave.prevent="dragLeave"
          @drop.prevent="handleDrop"
          :class="isDragging ? 'border-indigo-600' : ''"
        >
          <div class="text-center">
            <img
              v-if="imagePreviewUrl"
              :src="imagePreviewUrl"
              alt="Uploaded Image"
              class="mx-auto w-40"
            />
            <PhotoIcon v-else class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
            <div class="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                for="file-upload"
                class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>파일 선택</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  class="sr-only"
                  @change="handleImageUpload"
                />
              </label>
              <p class="pl-1">또는 드래그앤 드랍</p>
            </div>
            <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full mt-10 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            등록 하기
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, type Ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import { axiosInstance } from '@/common/auth/store'
import { PhotoIcon } from '@heroicons/vue/24/solid'

interface Team {
  associationId: number
  createdAt: string
  id: number
  message?: string
  name: string
  profileImgUrl: string
  workOutId: number
}

const selectedFile = ref()
const imagePreviewUrl = ref()
const isDragging = ref(false)

const handleImageUpload = (event: any) => {
  const file = event.target.files[0]
  selectedFile.value = file
  previewImage(file)
}

const dragEnter = () => {
  isDragging.value = true
}

const dragLeave = () => {
  isDragging.value = false
}

const handleDrop = (event: any) => {
  isDragging.value = false
  const file = event.dataTransfer.files[0]
  selectedFile.value = file
  previewImage(file)
}

const previewImage = (file: any) => {
  if (file) {
    const reader = new FileReader()
    reader.onloadend = () => {
      imagePreviewUrl.value = reader.result as string
    }
    reader.readAsDataURL(file)
  }
}

const uploadFile = async () => {
  if (!selectedFile.value) {
    alert('파일을 선택해 주세요.')
    return
  }

  const formData = new FormData()
  formData.append('file', selectedFile.value)

  try {
    await axiosInstance.put(`/team/${selected.value.id}/profile-img`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    alert('업로드 성공')
    selectedFile.value = null
    imagePreviewUrl.value = null

    const fileInput = document.getElementById('file-upload') as HTMLInputElement
    if (fileInput) {
      fileInput.value = ''
    }
  } catch (error) {
    alert('업로드 실패')
  }
}

const teams: Ref<Team[]> = ref([])

const selected: Ref<Team> = ref({
  associationId: 0,
  createdAt: '123213',
  id: 0,
  message: 'hello',
  name: '팀 선택',
  profileImgUrl: 'aaaa',
  workOutId: 0
})

const getTeamList = async () => {
  const data: Team[] = await axiosInstance
    .get(`/association/1/teams/all`)
    .then((response) => response.data)
    .catch((error) => {
      if (error) {
        alert('팀리스트 불러오기 오류')
      }
    })

  if (data.length > 0) {
    teams.value = data
    selected.value = data[0]
  }
}

onMounted(async () => {
  await getTeamList()
})
</script>
