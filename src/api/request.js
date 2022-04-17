import { axiosInstance } from "./config";

//recommend
export const getBannerRequest = () => {
    // 轮播图
    return axiosInstance.get('/banner');
}
export const getRecommendListRequest = () => {
    // 推荐歌单
    return axiosInstance.get('/personalized')
}

// singers
export const getHotSingerListRequest = count => {
    // 热门歌手
    return axiosInstance.get(`/top/artists?offset=${count}`);
}
export const getSingerListRequest = (category, language, alpha, count) => {
    // 不同类别歌手
    return axiosInstance.get(`/artist/list?type=${category}&area=${language}&initial=${alpha.toLowerCase()}&offset=${count}`)
}

// rank
export const getRankListRequest = count => {
    // 榜单
    return axiosInstance.get(`/toplist/detail`);
}