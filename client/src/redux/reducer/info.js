import * as types from '../actions/actionTypes'
//estado inicial
const initialState = {
    loading: true,
    tracks: [],
    albumsInfo: [],
    artistsInfo: [],
    error: false
}
//reducer
const infoReducer = (state = initialState , action) => {
    switch (action.type) {       
        case  types.ADD_TRACKS:
            return {
                ...state,
                tracks: action.payload
            }
            default:
                return state;
    }
};

export default infoReducer;