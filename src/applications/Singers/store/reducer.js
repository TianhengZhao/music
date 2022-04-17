import { fromJS } from "immutable";
import * as actionTypes from "./constant";

const initState = fromJS({
    singersList: [],
    enterLoading: true,
    pullUoLoading: false,
    pullDownLoading: false,
    category: '',
    language: '',
    alpha: '',
    pageCount: 0
});

export default function reducer(preState = initState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_SINGER_LIST:
            return preState.set('singersList', action.data);
        case actionTypes.CHANGE_PAGE_COUNT:
            return preState.set('pageCount', action.data);
        case actionTypes.CHANGE_ENTER_LOADING:
            return preState.set('enterLoading', action.data);
        case actionTypes.CHANGE_PULLUP_LOADING:
            return preState.set('pullUpLoading', action.data);
        case actionTypes.CHANGE_PULLDOWN_LOADING:
            return preState.set('pullDownLoading', action.data);
        case actionTypes.CHANGE_CATEGORY:
            return preState.set('category', action.data);
        case actionTypes.CHANGE_LANGUAGE:
            return preState.set('language', action.data);
        case actionTypes.CHANGE_ALPHA:
            return preState.set('alpha', action.data);
        default:
            return preState;
    }
}
