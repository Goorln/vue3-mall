//axios基础的封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

//拦截器
//axios 请求拦截器
httpInstance.interceptors.request.use(config => {
    // 1. 从pinia里面获取token数据
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    // 2. 按照后端的要求拼接token数据
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

//axios 响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    // 1. 从pinia里面获取token数据
    const userStore = useUserStore()
    // 统一错误提示
    ElMessage({ type: 'warning', message: e.response.data.msg })
    // 401 token 失效处理
    // 清除本地用户数据
    // 跳转到登录页
    if (e.response.status === 401) {
        userStore.clearUserInfo()
        router.push('/login')
    }
    return Promise.reject(e)
})


export default httpInstance