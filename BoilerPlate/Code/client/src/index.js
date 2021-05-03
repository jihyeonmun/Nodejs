import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import 'antd/dist/antd.css';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
// ReactDOM.render(<div>hello</div>, document.getElementById('root'));
import Reducer from './_reducers/index.js'
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk) (createStore)



ReactDOM.render(
  <Provider>
    store = {createStoreWithMiddleware(Reducer,
        window.__REDUX_DEVTOOLS_EXTENTSION__&&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    <App />
  </Provider>,
  document.getElementById('root')
); //index.html 가보면 id = 'root'를 불러옴.



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
