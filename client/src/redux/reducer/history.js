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
        case  types.ADD_HISTORY_ID:
            return {
                ...state,
                loading : false,
                history: action.payload,
            }
            default:
                return state;
    }
};

export default historyReducer;