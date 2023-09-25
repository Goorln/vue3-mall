import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app) {
        // 定义懒加载指令
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el：指定绑定的那个元素
                // binding: binding.value 指令等于后面绑定的表达式的值 图片的地址
                // console.log(el, binding)
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        // targetIsVisible.value = isIntersecting
                        if (isIntersecting) {
                            el.src = binding.value
                            stop()
                        }
                    },
                )

            }
        })
    }
}