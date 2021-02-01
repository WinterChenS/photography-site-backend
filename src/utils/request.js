import axios from 'axios'
import { Notification } from 'element-ui'
import { getToken } from '@/utils/auth'
import Config from '@/settings'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: Config.timeout // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    if (response.code === 200) {
      return response.data
    } else {
      Notification.error({
        title: response.message,
        duration: 5000
      })
      return Promise.reject(response.message)
    }
  },
  error => {
    Notification.error({
      title: response.message,
      duration: 5000
    })
    return Promise.reject(error)
  }
)
export default service
