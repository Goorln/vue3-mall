import request from "@/utils/http";

export const getCheckoutAPI = () => {
    return request({
        url: '/member/order/pre'
    })
}

// 确认订单
export const createOrderAPI = (data) => {
    return request({
        url: '/member/order',
        method: 'POST',
        data
    })
}