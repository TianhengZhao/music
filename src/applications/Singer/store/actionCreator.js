import * as actionTypes from "./constant";
import { fromJS } from "immutable";
import { getSingerInfoRequest } from "../../../api/request";

export const changeArtist = data => ({
    type: actionTypes.CHANGE_ARTIST,
    data: fromJS(data)
});

export const changeSongs = data => ({
    type: actionTypes.CHANGE_SONGS_OF_ARTIST,
    data: fromJS(data)
});

export const changeLoading = data => ({
    type: actionTypes.CHANGE_ENTER_LOADING,
    data
});

// 防止打开新singer页面有旧singer状态
export const clearData = data => ({
    type: actionTypes.CLEAR_DATA,
    data
})

export const getSingerInfo = id => {
    return dispatch => {
        getSingerInfoRequest(id).then(res => {
            dispatch(changeArtist(res.artist));
            dispatch(changeSongs(res.hotSongs));
            dispatch(changeLoading(false));
        }).catch(() => {
            console.log("网络错误！");
        })
    }
} 

