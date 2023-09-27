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