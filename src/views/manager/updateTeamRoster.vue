<template>
  <div class="my-10 max-w-screen-sm w-full px-8 sm:px-32 mx-auto flex flex-col">
    <div class="w-full">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        로스터 수정
      </h2>
    </div>
  </div>
  <div class="flex justify-between items-center my-4 px-20">
    <select class="border rounded-md p-2" v-model="selectedType" @change="filterMembersByType">
      <option value="All">모든 유형</option>
      <option value="Athlete">Athlete</option>
      <option value="Staff">Staff</option>
      <option value="HeadCoach">HeadCoach</option>
      <option value="Coach">Coach</option>
    </select>
    <button @click="goToRegisterRoster" class="bg-indigo-600 text-white py-2 px-4 rounded">
      추가 등록
    </button>
  </div>
  <div class="px-5">
    <table class="w-full text-lg sm:text-sm my-3 rounded-xl text-black bg-white">
      <thead>
        <tr>
          <th class="text-center align-middle">사진</th>
          <th class="text-center align-middle">이름</th>
          <th class="text-center align-middle">백넘버</th>
          <th class="text-center align-middle" colspan="2">포지션</th>
          <th class="text-center align-middle">키</th>
          <th class="text-center align-middle">몸무게</th>
          <th class="text-center align-middle">입부년도</th>
          <th class="text-center align-middle">수정</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="list in filteredMembers" :key="list.id">
          <td class="text-center align-middle flex items-center justify-center">
            <img class="h-auto w-16" :src="list.profileImgUrl" alt="" />
          </td>
          <td class="text-center align-middle">{{ list.name }}</td>
          <td class="text-center align-middle">{{ list.backNumber }}</td>
          <td class="text-center align-middle">{{ list.position[0] }}</td>
          <td class="text-center align-middle">{{ list.position[1] }}</td>
          <td class="text-center align-middle">{{ list.height }}</td>
          <td class="text-center align-middle">{{ list.weight }}</td>
          <td class="text-center align-middle">
            {{ new Date(list.registrationDate).getFullYear() }}
          </td>
          <td class="text-center align-middle">
            <div class="flex justify-center items-center space-x-1">
              <button
                @click="openModal(list.id)"
                class="bg-indigo-600 text-white py-2 px-4 rounded"
              >
                수정
              </button>
              <button
                @click="deleteMember(list.id)"
                class="bg-indigo-600 text-white py-2 px-4 rounded"
              >
                삭제
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="isModalOpen" class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity" @click="closeModal">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="flex justify-center items-center h-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">로스터 수정</h3>
          </div>

          <div>
            <label for="type" class="block text-sm font-medium leading-6 text-gray-900">구분</label>
            <div class="mt-2">
              <select
                v-model="updateProfile.type"
                id="type"
                name="type"
                class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
              >
                <option>HeadCoach</option>
                <option>Coach</option>
                <option>Athlete</option>
                <option>Staff</option>
              </select>
            </div>
          </div>

          <div>
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">이름</label>
            <div class="mt-2">
              <input
                v-model="updateProfile.name"
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
                v-model="updateProfile.registrationYear"
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
                v-model="updateProfile.backNumber"
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
                v-model="updateProfile.height"
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
                v-model="updateProfile.weight"
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
                v-model="updateProfile.position[0]"
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
                v-model="updateProfile.position[1]"
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
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button @click="updateMember" class="bg-indigo-600 text-white py-2 px-4 rounded mr-2">
            저장
          </button>
          <button @click="closeModal" class="bg-gray-300 text-gray-700 py-2 px-4 rounded">
            닫기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { axiosInstance } from '@/common/auth/store'
import router from '@/router'
import { onMounted, ref } from 'vue'

export interface TeamMember {
  id: number
  teamId: number
  name: string
  backNumber: number
  registrationDate: string
  registrationYear: number
  type: string
  weight: number
  height: number
  position: string[]
  profileImgUrl: string
}

const updateProfile = ref<TeamMember>({} as TeamMember)

const member = ref<TeamMember[]>([])
const filteredMembers = ref<TeamMember[]>([])
const selectedType = ref<string>('All')

const goToRegisterRoster = () => {
  router.push('/register/roster')
}

const isModalOpen = ref(false)
const currentEditingId = ref<number | null>(null)

const openModal = (id: number) => {
  currentEditingId.value = id
  getProfile(id)
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  currentEditingId.value = null
}

const deleteMember = (memberId: number) => {
  axiosInstance
    .delete(`/manager/team/member/${memberId}`)
    .then((response) => {
      console.log(response.data)
      alert('멤버가 삭제되었습니다.')
      router.push('/update/roster')
    })
    .catch((error) => {
      if (error) {
        console.error('Error deleting member:', error)
        alert('로스터 삭제 중 오류 발생')
      }
    })
}

const updateMember = () => {
  if (currentEditingId.value === null) return

  const dataToUpdate = {
    type: updateProfile.value.type,
    name: updateProfile.value.name,
    backNumber: updateProfile.value.backNumber,
    registrationDate: '' + updateProfile.value.registrationYear + '-01-01',
    weight: updateProfile.value.weight,
    height: updateProfile.value.height,
    position: updateProfile.value.position
  }
  console.log(dataToUpdate)

  axiosInstance
    .put(`/manager/team/member/${currentEditingId.value}/profile/contents`, dataToUpdate)
    .then((response) => {
      console.log(response.data)
      alert('수정되었습니다.')
      closeModal()
      getTeamRoster()
    })
    .catch((error) => {
      console.error('Error updating member:', error)
      console.error('Error details:', error.response.data)
      alert('로스터 수정 중 오류 발생')
    })
}

const getProfile = (id: number) => {
  const memberProfile = member.value.find((m) => m.id === id)
  if (memberProfile) {
    updateProfile.value = { ...memberProfile }
    updateProfile.value.registrationYear = new Date(memberProfile.registrationDate).getFullYear()
  }
}

const getTeamRoster = () => {
  axiosInstance
    .get('/manager/team/members')
    .then((response) => {
      member.value = response.data
      filterMembersByType()
      console.log(response.data)
    })
    .catch((error) => {
      console.error('API 호출 중 에러 발생:', error)
    })
}

const filterMembersByType = () => {
  if (selectedType.value === 'All') {
    filteredMembers.value = member.value
  } else {
    filteredMembers.value = member.value.filter((m) => m.type === selectedType.value)
  }
}

onMounted(() => {
  getTeamRoster()
})
</script>
