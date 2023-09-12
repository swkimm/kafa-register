import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import router from '@/router'
import axios from 'axios'

export const axiosInstance = axios.create({
  // withCredentials: true
})

axiosInstance.defaults.baseURL = 'https://dev.playprove.one'
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const origin = error.config

    if (error.response.status === 401 && !origin._retry) {
      origin._retry = true
      // await useAuthStore().reissue(origin)
      return axiosInstance(origin)
    }
    return Promise.reject(error)
  }
)

// useAuthStore 함수를 먼저 정의하고 나중에 사용합니다.
export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: useStorage('isLoggedIn', false)
  }),
  getters: {
    // getter로 isLoggined 상태를 가져올 수 있음
    getIsLogginedIn(state) {
      return state.isLoggedIn
    }
  },
  actions: {
    async login(username: string, password: string) {
      try {
        const res = await axiosInstance.post('/auth/login', {
          username,
          password
        })
        axiosInstance.defaults.headers.common.authorization = res.headers.authorization
        console.log(res.headers)

        this.isLoggedIn = true
      } catch (error: any) {
        this.isLoggedIn = false
        throw error
      }
    },
    async reissue(origin: any) {
      try {
        const res = await axiosInstance.get('/auth/reissue')
        origin.headers.authorization = res.headers.authorization
        axiosInstance.defaults.headers.common.authorization = res.headers.authorization
        this.isLoggedIn = true
      } catch (e) {
        this.isLoggedIn = false
      }
    },
    async logout() {
      try {
        // 로그아웃 요청 전에 로그인 상태를 확인
        if (this.isLoggedIn) {
          await axiosInstance.post('/auth/logout')
          delete axiosInstance.defaults.headers.common.authorization
          this.isLoggedIn = false
          router.push('/')
        }
      } catch (e) {
        delete axiosInstance.defaults.headers.common.authorization
        this.isLoggedIn = false
        throw new Error('Logout failed')
      }
    },
    // setIsLoggedIn 액션 추가
    setIsLoggedIn(status: boolean) {
      this.isLoggedIn = status
    }
  }
})
