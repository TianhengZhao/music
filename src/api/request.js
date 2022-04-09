import { axiosInstance } from "./config";

export const getBannerRequest = () => {
    // 轮播图
    return axiosInstance.get('/banner');
}

export const getRecommendListRequest = () => {
    // 推荐歌单
    return axiosInstance.get('/personalized')
}
