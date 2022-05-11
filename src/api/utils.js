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

// album中
export const concactSingerName = (arr) => {
    let res = '';
    for (let item of arr) {
        res += item.name + '/';
    }
    return res.slice(0, res.length-1);
}

export const isEmptyObject = obj => !obj || Object.keys(obj).length === 0;

// 增加浏览器前缀，处理兼容性问题（或许navigator.userAgent）
// 获取div dom的style对象
let elementStyle = document.createElement("div").style;
let kernal = (() => {
    // style里有一系列属性，某些属性前缀有webkit等浏览器信息；webkitTransform相当于css中的-webkit-transform
    let transformNames = {
        webkit: "webkitTransform",
        Moz: "MozTransform",
        O: "OTransfrom",
        ms: "msTransform",
        standard: "Transform"
    };
    for (let key in transformNames) {
        if (elementStyle[transformNames[key]] !== "undefined") {
            return key;
        }
    }
    return false;
})();
export function prefixStyle(style) {
    if (!kernal) {
        return false;
    } else if (kernal === "standard") {
        return style;
    }
    return kernal + style.charAt(0).toUpperCase() + style.substr(1);
}

