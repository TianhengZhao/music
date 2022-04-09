import * as actionType from './constant';
import { fromJS } from 'immutable';
import { getBannerRequest, getRecommendListRequest } from '../../../api/request';

export const changeBannerList = (data) => ({
    type: actionType.CHANGE_BANNER,
    data: fromJS(data) // 将引用类型转换为immutable形式，深拷贝
});

export const changeRecommendList = (data) => ({
    type: actionType.CHANGE_RECOMMEND_LIST,
    data: fromJS(data)
});

export const changeEnterLoading = (data) => ({
    type: actionType.CHANGE_ENTER_LOADING,
    data: data
});

// 异步action，返回一个函数
// dispatch作为返回函数的参数
export const getBannerList = () => {
    return (dispatch) => {
        getBannerRequest().then(data => {
            dispatch(changeBannerList(data.banners))
        }).catch(err => {
            console.log(err, '轮播图传输错误！');
        })
    }
};

export const getRecommendList = () => {
    return (dispatch) => {
        getRecommendListRequest().then(data => {
            dispatch(changeRecommendList(data.result));
            dispatch(changeEnterLoading(false));
        }).catch(err => {
            console.log(err, '推荐歌单传输错误！');
        });
    }
};