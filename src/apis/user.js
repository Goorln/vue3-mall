// 封装所有金额用户有关的接口函数
import request from "@/utils/http";

export const loginAPI = ({ account, password }) => {
    return request({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}
// 获取猜你喜欢的列表数据
export const getLikeListAPI = ({ limit = 4 }) => {
    return request({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}
// 获取订单数据
/*
params: {
	orderState:0,
  page:1,
  pageSize:2
}
*/
export const getUserOrder = (params) => {
    return request({
        url: '/member/order',
        method: 'GET',
        params
    })
}