import * as actionTypes from "./constant";
import { fromJS } from "immutable";

const initState = fromJS({
    artist: {},
    songsOfArtist: [],
    loading: false
})

export default function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_ARTIST:
            return state.set('artist', action.data);
        case actionTypes.CHANGE_ENTER_LOADING:
            return state.set('loading', action.data);
        case actionTypes.CHANGE_SONGS_OF_ARTIST:
            return state.set('songsOfArtist', action.data);
        case actionTypes.CLEAR_DATA:
            return initState;
        default:
            return state;
    }
}