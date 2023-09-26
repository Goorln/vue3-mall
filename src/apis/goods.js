import request from "@/utils/http";

export function getGoodsDetailAPI(id) {
    return request({
        url: '/goods',
        params: {
            id
        }
    })
}