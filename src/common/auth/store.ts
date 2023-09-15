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
      await useAuthStore().reissue(origin)
      return axiosInstance(origin)
    }
    return Promise.reject(error)
  }
)

const storageIsLoggedIn = useStorage('isLoggedIn', false)

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: storageIsLoggedIn.value
  }),
  getters: {
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
        console.log(res.headers.authorization)

        this.isLoggedIn = true
        this.setIsLoggedIn(true)
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
      } catch (error) {
        this.isLoggedIn = false
        throw error
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
    setIsLoggedIn(status: boolean) {
      this.isLoggedIn = status
      storageIsLoggedIn.value = status
    }
  }
})

export type AuthStoreType = ReturnType<typeof useAuthStore>
