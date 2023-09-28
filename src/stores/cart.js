// 封装购物车模块

import { defineStore } from "pinia";
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
    //定义state - cartList
    const cartList = ref([])
    // 定义action - addCart方法
    const addCart = (goods) => {
        //添加购物车操作
        // 添加过 count+1 
        // 没添加过 直接push
        // 思路：通过匹配传过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
            item.count++
        } else {
            cartList.value.push(goods)
        }
    }
    // 删除购物车
    const delCart = (skuId) => {
        // 思路
        // 1.找到要删除项的下标值 - splice
        // 2. 使用数组的过滤方法
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)

    }
    // 单选功能
    const singleCheck = (skuId, selected) => {
        // 通过skuId找到要修改的那一项，然后把他的selected修改为传过来的selected
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }
    // 全选功能
    const allCheck = (selected) => {
        // 把cartList中的每一项的selected都设置为当前的全选框状态
        cartList.value.forEach((item) => item.selected = selected)
    }
    // 是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))

    //计算属性
    // 1.总数量 所有项的count之和
    const allCount = computed(() => cartList.value.reduce((x, y) => x + y.count, 0))
    // 2. 总价
    const allPrice = computed(() => cartList.value.reduce((x, y) => x + y.count * y.price, 0))

    return { cartList, allCount, allPrice, singleCheck, allCheck, isAll, addCart, delCart }
}, {
    persist: true
})