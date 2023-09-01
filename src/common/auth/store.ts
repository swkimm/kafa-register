import axios from 'axios'

export const axiosInstance = axios.create({
  // withCredentials: true
})

axiosInstance.defaults.baseURL = 'https://dev.playprove.one'
