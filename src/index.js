import React from 'react';
import ReactDOM from 'react-dom';
import "@babel/polyfill";
import {Provider} from "react-redux";
import store from '../store';
import App from "./App";
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

module.hot.accept();