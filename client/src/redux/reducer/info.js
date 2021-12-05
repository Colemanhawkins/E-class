import * as types from '../actions/actionTypes'
//estado inicial
const initialState = {
    loading: true,
    tracksInfo: [],
    albumsInfo: [],
    artistsInfo: [],
    error: false
}
//reducer
const infoReducer = (state = initialState , action) => {
    switch (action.type) {       
        case  types.ADD_HISTORY_ID:
            return {
                ...state,
                loading : false,
                error: action.payload,
            }
            default:
                return state;
    }
};

export default infoReducer;