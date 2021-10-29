import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import store from'./store'
import {Provider} from "react-redux"
import {positions,transitions,Provider as AlertProvider} from 'react-alert'
import AlertTemplate from'react-alert-template-basic'

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <AlertProvider template={AlertTemplate} options={options}>
    <App />
    </AlertProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


