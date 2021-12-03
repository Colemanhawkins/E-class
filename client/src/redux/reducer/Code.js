import * as types from '../actions/actionTypes'
//estado inicial
const initialState = {
    loading: true,
    code: [],
    error: false
}
//reducer
const codeReducer = (state = initialState , action) => {
    switch (action.type) {       
        case  types.CREATE_CODE:
            return {
                ...state,
                loading : false,
                code: action.payload,
            }
            default:
                return state;
    }
};

export default codeReducer;