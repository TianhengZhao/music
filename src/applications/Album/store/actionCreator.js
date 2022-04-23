import * as actionTypes from './constant';
import { fromJS } from 'immutable';
import { getAlbumDetailRequest } from '../../../api/request';

export const changeCurrentAlbum = data => ({
    type: actionTypes.CHANGE_CURRENT_ALBUM,
    data: fromJS(data)
});

export const changeEnterLoading = data => ({
    type: actionTypes.CHANGE_ENTER_LOADING,
    data
});

export const getAlbumList = id => {
    return dispatch => {
        getAlbumDetailRequest(id).then(res => {
            dispatch(changeCurrentAlbum(res.playlist));
            dispatch(changeEnterLoading(false));
        }).catch(() => {
            console.log('网络错误！');
        });
    }
};