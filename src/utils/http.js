//axios基础的封装
import axios from 'axios'

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

//拦截器
//axios 请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

//axios 响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})


export default httpInstance