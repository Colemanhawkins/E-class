import {combineReducers} from 'redux';
import codeReducer from './Code';

//union de reducers
const rootReducer = combineReducers({
    code: codeReducer,
});

export default rootReducer;