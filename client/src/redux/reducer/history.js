import * as types from '../actions/actionTypes'
//estado inicial
const initialState = {
    loading: true,
    code: [],
    token: [],
    history: [],
    error: false
}
//reducer
const historyReducer = (state = initialState , action) => {
    switch (action.type) { 
        case types.ADD_HISTORY_TRACK:
            return{
                ...state,
                history: state.history.concat(action.payload)
            }
        case types.CLEAR_LOCAL:
            return{
                ...state,
                code: [],
                token: [],
            }   
        case types.CREATE_CODE: 
        return {
            ...state,
            code: action.payload
        }
        case  types.CREATE_TOKEN:
            return {
                ...state,
                token: action.payload,
            }
        case types.REFRESH_TOKEN:
            return {
                ...state,
                token: action.payload
            }
            default:
                return state;
    }
};

export default historyReducer;