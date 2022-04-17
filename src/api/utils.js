export const getCount = (count) => {
    if (count < 0) {
        return 0;
    }
    if (count < 10000) {
        return count;
    }
    if (count < 1e8) {
        return Math.floor(count / 1000) / 10 + '万';
    }
    return Math.floor(count / 1e7) / 10 + '亿';
} 

// 防抖
export const debounce = (func, delay) => {
    let timer = null;
    return function (...args) {
        let self = this;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(self, args);
        }, delay);
    }
}

// 筛选rankList中第一个tracks为空的index
export const filterRankList = (list) => {
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i].tracks.length && !list[i + 1].tracks.length) {
            return i + 1;
        }
    }
}