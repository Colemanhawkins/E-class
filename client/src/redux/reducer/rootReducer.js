import {combineReducers} from 'redux';
import historyReducer from './history';
import infoReducer from './info';

//union de reducers
const rootReducer = combineReducers({
    history: historyReducer,
    info: infoReducer
});

export default rootReducer;