<template>
  <div class="my-10 max-w-screen-sm w-full px-8 sm:px-32 mx-auto flex flex-col">
    <div class="w-full">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        팀 인원 등록
      </h2>
    </div>

    <div>
      <label for="name" class="block text-sm font-medium leading-6 text-gray-900">팀명</label>
      <div class="mt-2">
        <div class="mt-2">
          <div
            class="flex items-center w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
          >
            <img class="h-8 w-8 mr-2" :src="teamProfile?.profileImgUrl" alt="" />
            {{ teamProfile?.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="py-10 w-full">
      <form class="space-y-8" @submit.prevent="uploadFile">
        <div>
          <label for="type" class="block text-sm font-medium leading-6 text-gray-900">구분</label>
          <div class="mt-2">
            <select
              v-model="type"
              id="type"
              name="type"
              class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            >
              <option>{{ MemberType.HeadCoach }}</option>
              <option>{{ MemberType.Coach }}</option>
              <option>{{ MemberType.Athlete }}</option>
              <option>{{ MemberType.Staff }}</option>
            </select>
          </div>
        </div>

        <div>
          <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900"
            >프로필 사진 업로드</label
          >
          <div
            class="mt-2 flex justify-center rounded-lg border border-dashed bg-white border-gray-900/25 px-6 py-10"
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
                  class="relative px-2 cursor-pointer rounded-md bg-black font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
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
        </div>

        <div>
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900">이름</label>
          <div class="mt-2">
            <input
              v-model="name"
              type="text"
              name="name"
              id="name"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            />
          </div>
        </div>

        <div>
          <label for="regisrationDate" class="block text-sm font-medium leading-6 text-gray-900"
            >입부년도</label
          >
          <div class="mt-2">
            <input
              v-model="registrationDate"
              type="number"
              name="registrationDate"
              id="registrationDate"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            />
          </div>
        </div>

        <div>
          <label for="backNumber" class="block text-sm font-medium leading-6 text-gray-900"
            >등 번호</label
          >
          <div class="mt-2">
            <input
              v-model="backNumber"
              type="number"
              name="backNumber"
              id="backNumber"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            />
          </div>
        </div>

        <div>
          <label for="height" class="block text-sm font-medium leading-6 text-gray-900"
            >키 (cm)</label
          >
          <div class="mt-2">
            <input
              v-model="height"
              type="number"
              name="height"
              id="height"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            />
          </div>
        </div>

        <div>
          <label for="weight" class="block text-sm font-medium leading-6 text-gray-900"
            >몸무게 (kg)</label
          >
          <div class="mt-2">
            <input
              v-model="weight"
              type="number"
              name="weight"
              id="weight"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            />
          </div>
        </div>

        <div>
          <label for="offPosition" class="block text-sm font-medium leading-6 text-gray-900"
            >오펜스 포지션</label
          >
          <div class="mt-2">
            <select
              v-model="offPosition"
              id="offPosition"
              name="offPosition"
              class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            >
              <option>없음</option>
              <option>QB</option>
              <option>OL</option>
              <option>WR</option>
              <option>RB</option>
            </select>
          </div>
        </div>

        <div>
          <label for="defPosition" class="block text-sm font-medium leading-6 text-gray-900"
            >디펜스 포지션</label
          >
          <div class="mt-2">
            <select
              v-model="defPosition"
              id="defPosition"
              name="defPosition"
              class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            >
              <option>없음</option>
              <option>DL</option>
              <option>LB</option>
              <option>CB</option>
              <option>DB</option>
            </select>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full mt-14 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
import router from '@/router'

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

interface CreateMemberDTO {
  name: string
  registrationDate: Date
  weight?: number
  height?: number
  backNumber?: number
  type: MemberType
  position: string[]
}

enum MemberType {
  HeadCoach = 'HeadCoach',
  Coach = 'Coach',
  Staff = 'Staff',
  Athlete = 'Athlete'
}

const name = ref()
const registrationDate = ref()
const weight = ref()
const height = ref()
const backNumber = ref()
const type = ref(MemberType.Athlete)
const offPosition = ref('없음')
const defPosition = ref('없음')

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
  const position: string[] = []

  if (offPosition.value !== '없음') {
    position.push(offPosition.value)
  }

  if (defPosition.value !== '없음') {
    position.push(defPosition.value)
  }

  const createMemberDTO: CreateMemberDTO = {
    name: name.value,
    backNumber: backNumber.value,
    height: height.value,
    weight: weight.value,
    registrationDate: new Date(registrationDate.value + '-01-01'),
    type: type.value,
    position
  }

  const result = await axiosInstance
    .post(`/manager/team/member`, createMemberDTO)
    .then((result) => result.data)
    .catch((error) => {
      console.log(error)
      return false
    })

  console.log(result)

  if (result) {
    if (selectedFile.value) {
      const formData = new FormData()
      formData.append('file', selectedFile.value)

      try {
        await axiosInstance.put(`/manager/team/member/${result.memberId}/profile/image`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          params: {
            memberId: result.id
          }
        })
        alert('등록 성공')
        router.push('/update/roster')
      } catch (error) {
        alert('프로필 이미지 등록 실패')
      } finally {
        refreshInput()
      }
    } else {
      alert('등록 성공')
      refreshInput()
    }
  } else {
    alert('등록 실패')
  }
}

function refreshInput() {
  selectedFile.value = null
  imagePreviewUrl.value = null

  const fileInput = document.getElementById('file-upload') as HTMLInputElement
  if (fileInput) {
    fileInput.value = ''
  }

  name.value = null
  registrationDate.value = null
  weight.value = null
  height.value = null
  backNumber.value = null
  type.value = MemberType.Athlete
  offPosition.value = '없음'
  defPosition.value = '없음'
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
