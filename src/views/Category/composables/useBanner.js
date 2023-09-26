import { getHomeBannerAPI } from '@/apis/home'
import { ref, onMounted } from "vue";

export function useBanner() {
    const bannerList = ref([])
    const getBanner = async () => {
        const res = await getHomeBannerAPI({ distributionSite: '2' })
        // console.log(res);
        bannerList.value = res.result
    }
    onMounted(() => getBanner())
    return {
        bannerList
    }
}