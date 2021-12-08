import * as types from '../actions/actionTypes'
//estado inicial
const initialState = {
    loading: false,
    currentSong: [],
    tracks: [],
    albumsInfo: [],
    artistsInfo: [],
    error: false
}
//reducer
const infoReducer = (state = initialState , action) => {
    switch (action.type) {
        case types.CURRENT_TRACK: 
            return {
                ...state,
                currentSong: action.payload
            }
        case types.ADD_RESULTS_GET:
            return {
                ...state,
                loading: true
            }
        case types.ADD_RESULTS_SUCCESS:
            return {
                ...state,
                loading: false,
                tracks : action.payload.tracks,
                albumsInfo : action.payload.albums,
                artistsInfo: action.payload.artists
            }
            default:
                return state;
    }
};

export default infoReducer;