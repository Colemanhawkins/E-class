import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import dotenv from 'dotenv';
dotenv.config()

//seed y provider de mi store de redux
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
       <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
