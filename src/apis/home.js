import httpInstance from "@/utils/http";

// 轮播图接口
export function getHomeBannerAPI(params = {}) {
    // 1为首页，2为商品
    const { distributionSite = '1' } = params
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
}

// 新鲜好物
export function getHomeNewAPI() {
    return httpInstance({
        url: '/home/new'
    })
}

// 人气推荐
export function getHomeHotAPI() {
    return httpInstance({
        url: '/home/hot'
    })
}

// 产品列表
export function getHomeGoodsAPI() {
    return httpInstance({
        url: '/home/goods'
    })
}