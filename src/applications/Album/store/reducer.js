import * as actionTypes from './constant';
import { fromJS } from 'immutable';

const initState = fromJS({
    loading: false,
    currentAlbum: []
})

export default function reduer(state = initState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_CURRENT_ALBUM:
            return state.set('currentAlbum', action.data);
        case actionTypes.CHANGE_ENTER_LOADING:
            return state.set('loading', action.data);
        default:
            return state;
    }
}