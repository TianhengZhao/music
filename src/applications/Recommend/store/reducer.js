import * as actionTypes from './constant';
import { fromJS } from 'immutable';

const initData = fromJS({
    bannerList: [],
    recommendList: [],
    enterLoading: true // 页面加载完成前的loading展示状态
})

export default function reducer(preState = initData, action) {
    switch(action.type) {
        case actionTypes.CHANGE_BANNER:
            // immutable数据流用set设置新状态
            return preState.set('bannerList', action.data);
        case actionTypes.CHANGE_RECOMMEND_LIST:
            return preState.set('recommendList', action.data);
        case actionTypes.CHANGE_ENTER_LOADING:
            return preState.set('enterLoading', action.data);
        default:
            return preState;
    }
}