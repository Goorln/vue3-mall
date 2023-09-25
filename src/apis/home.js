import httpInstance from "@/utils/http";

export function getHomeBannerAPI() {
    return httpInstance({
        url: '/home/banner'
    })
}

export function getHomeNewAPI() {
    return httpInstance({
        url: '/home/new'
    })
}

export function getHomeHotAPI() {
    return httpInstance({
        url: '/home/hot'
    })
}