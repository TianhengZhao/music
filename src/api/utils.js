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