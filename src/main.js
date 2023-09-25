// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 定义全局命令
app.directive('img-lazy', {
    mounted(el, binding) {
        // el：指定绑定的那个元素
        // binding: binding.value 指令等于后面绑定的表达式的值 图片的地址
        console.log(el, binding)
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                // targetIsVisible.value = isIntersecting
                if (isIntersecting) {
                    el.src = binding.value
                }
            },
        )

    }
})