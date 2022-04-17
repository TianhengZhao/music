// 由于比较简单，因此将rank的redux内容放在同一个文件中

import { fromJS } from "immutable";
import { getRankListRequest } from "../../../api/request";


// constant
export const CHANGE_RANK_LIST = "rank/CHANGE_RANK_LIST";
export const CHANGE_LOADING = "rank/CHANGE_LOADING";

// actionCreator
const changeRankList = data => ({
    type: CHANGE_RANK_LIST,
    data: fromJS(data)
})

const changeLoading = data => ({
    type: CHANGE_LOADING,
    data
})

export const getRankList = () => {
    return dispatch => {
        getRankListRequest().then(res => {
            let list = res && res.list;
            dispatch(changeLoading(false));
            dispatch(changeRankList(list));
        }).catch(() => {
            console.log('排行获取失败！');
        })
    }
}

// reducer
const initState = fromJS({
    rankList: [],
    loading: true
})

export function reducer (preState = initState, action) {
    switch(action.type) {
        case CHANGE_RANK_LIST: 
            return preState.set('rankList', action.data);
        case CHANGE_LOADING:
            return preState.set('loading', action.data);
        default:
            return preState;
    }

}