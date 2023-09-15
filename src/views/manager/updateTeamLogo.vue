<template>
  <div class="my-10 max-w-screen-sm w-full px-8 sm:px-32 mx-auto flex flex-col">
    <div class="w-full">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        팀 로고 수정
      </h2>
    </div>
    <div class="mt-10 w-full">
      <form class="space-y-6" @submit.prevent="uploadFile">
        <div>
          <label for="initial" class="block text-sm mt-2 font-medium leading-6 text-gray-900"
            >팀명</label
          >
          <div class="mt-2">
            <div
              class="flex items-center w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            >
              <img class="h-8 w-8 mr-2" :src="teamProfile?.profileImgUrl" alt="" />
              {{ teamProfile?.name }}
            </div>
          </div>
        </div>

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
import { onMounted, ref } from 'vue'

import { axiosInstance } from '@/common/auth/store'
import { PhotoIcon } from '@heroicons/vue/24/solid'

interface TeamDetail {
  id: number
  workoutId: string
  name: string
  initial: string | null | undefined
  message: string
  teamColor: string
  teamSubColor: string
  profileImgUrl: string
  createdAt: string
  associationId: number
  workout: {
    id: number
    name: string
  }

  association: {
    id: number
    name: string
  }
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
    await axiosInstance.put(`/manager/team/profile/image`, formData, {
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

const teamProfile = ref<TeamDetail>() // 초기값을 null로 설정

const getTeamProfile = async () => {
  try {
    const response = await axiosInstance.get('/manager/team/profile')
    teamProfile.value = response.data
    console.log('Response Data:', response.data)
  } catch (error: any) {
    console.error('데이터 요청 중 오류 발생:', error)
    if (error) {
      console.error('Error Message:', error.message)
    }
  }
}

onMounted(async () => {
  await getTeamProfile()
})
</script>
