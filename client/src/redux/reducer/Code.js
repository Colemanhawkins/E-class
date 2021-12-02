import * as types from '../actions/actionTypes'

const initialState = {
    loading: true,
    code: [],
    error: false
}

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