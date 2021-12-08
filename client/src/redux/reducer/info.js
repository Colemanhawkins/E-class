import * as types from '../actions/actionTypes'
//estado inicial
const initialState = {
    loading: false,
    tracks: [],
    albumsInfo: [],
    artistsInfo: [],
    error: false
}
//reducer
const infoReducer = (state = initialState , action) => {
    console.log(action.type)  
    switch (action.type) { 
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