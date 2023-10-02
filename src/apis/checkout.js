import request from "@/utils/http";

export const getCheckoutAPI = () => {
    return request({
        url: '/member/order/pre'
    })
}