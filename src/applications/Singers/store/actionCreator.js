import * as actionTypes from './constant';
import { getHotSingerListRequest, getSingerListRequest } from "../../../api/request";
import { fromJS } from 'immutable';

export const changeCategory = data => ({
    type:actionTypes.CHANGE_CATEGORY,
    data
});

export const changeLanguage = data => ({
    type:actionTypes.CHANGE_LANGUAGE,
    data
});

export const changeAlpha = data => ({
    type:actionTypes.CHANGE_ALPHA,
    data
})

export const changeSingerList = (data) => ({
    type: actionTypes.CHANGE_SINGER_LIST,
    data: fromJS(data)
});

export const changePageCount = data => ({
    type: actionTypes.CHANGE_PAGE_COUNT,
    data
})

export const changeEnterLoading = data => ({
    type: actionTypes.CHANGE_ENTER_LOADING,
    data
})

export const changePullUpLoading = data => ({
    type: actionTypes.CHANGE_PULLUP_LOADING,
    data
})

export const changePullDownLoading = data => ({
    type: actionTypes.CHANGE_PULLDOWN_LOADING,
    data
})

export const getHotSingerList = () => {
    return (dispatch) => {
        getHotSingerListRequest(0).then(res => {
            const singers = res.artists;
            dispatch(changeSingerList(singers));
            dispatch(changeEnterLoading(false));
            dispatch(changePullDownLoading(false))
        }).catch(err => {
            console.log(err, "热门歌手数据获取失败！")
        })
    }
}

export const refreshMoreHotSingerList = () => {
    // 参数可以有两个，第二个是getState
    return (dispatch, getState) => {
        const pageCount = getState().getIn(['singers', 'pageCount']);
        const singerList = getState().getIn(['singers', 'singersList']).toJS();
        getHotSingerListRequest(pageCount).then(res => {
            const data = [...singerList, ...res.artists];
            dispatch(changeSingerList(data));
            dispatch(changePullUpLoading(false));
        }).catch(() => {
            console.log("热门歌手数据获取失败！");
        })
    }
}

export const getSingerList = () => {
    return (dispatch, getState) => {
        const category = getState().getIn(['singers', 'category']);
        const language = getState().getIn(['singers', 'language']);
        const alpha = getState().getIn(['singers', 'alpha']);
        getSingerListRequest(category, language, alpha, 0).then(res => {
            dispatch(changeSingerList(res.artists));
            dispatch(changePullDownLoading(false));
        }).catch(() => {
            console.log("歌手数据获取失败！");
        });
    }
}

export const refreshMoreSingerList = () => {
    return (dispatch, getState) => {
        const category = getState().getIn(['singers', 'category']);
        const language = getState().getIn(['singers', 'language']);
        const alpha = getState().getIn(['singers', 'alpha']);
        const pageCount = getState().getIn(['singers', 'pageCount']);
        const singerList = getState().getIn(['singers', 'singersList']).toJS();
        getSingerListRequest(category, language, alpha, pageCount).then(res => {
            let data = [...singerList, ...res.artists];
            dispatch(changeSingerList(data));
            dispatch(changePullUpLoading(false));
        }).catch(() => {
            console.log("歌手数据获取失败！");
        });
    }
}

