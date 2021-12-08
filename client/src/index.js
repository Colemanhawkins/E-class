import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import  store , { persistor} from './redux/store/store';
import {PersistGate} from 'redux-persist/integration/react'
import dotenv from 'dotenv';
dotenv.config()

//seed y provider de mi store de redux
ReactDOM.render(
  <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
       </PersistGate>
      </Provider>
  </>,
  document.getElementById('root')
);
