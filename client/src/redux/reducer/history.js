import * as types from '../actions/actionTypes'
//estado inicial
const initialState = {
    loading: true,
    token: [],
    history: [],
    error: false
}
//reducer
const historyReducer = (state = initialState , action) => {
    switch (action.type) {       
        case  types.CREATE_TOKEN:
            return {
                ...state,
                loading : false,
                token: action.payload,
            }
        case types.REFRESH_TOKEN:
            return {
                ...state,
                loading:false,
                token: action.payload
            }
            default:
                return state;
    }
};

export default historyReducer;