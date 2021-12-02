import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer/rootReducer';

const middleware = [reduxThunk];

//store  en conjunto con el root de los reducers mas el middleware para debbugear en consola por el browser
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;