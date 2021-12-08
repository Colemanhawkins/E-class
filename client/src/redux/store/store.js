import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducer/rootReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//le doi persistencia a solo el reducer que yo quiero
const persistConfig = {
  key: 'history',
  storage: storage,
  whitelist: ['history'] // que va a persistir en la sesion
};
//seteo configuracion de redux- persist
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(ReduxThunk, logger);
const store = createStore(persistedReducer,  composeWithDevTools(middleware));
const persistor = persistStore(store);

export default store
export {persistor}