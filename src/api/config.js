import axios from 'axios';

export const baseUrl = 'https://music-api-five.vercel.app';

// 对axios二次封装，axios.default只允许有一个baseUrl
// 想有多个baseUrl可以创建多个实例
const axiosInstance = axios.create({
    baseURL: baseUrl
});

// 拦截器
axiosInstance.interceptors.response.use(
    response => response.data,
    // error.response.status
    error => {
        console.log(error, '请求出错！');
    }
);

export {
    axiosInstance
};

