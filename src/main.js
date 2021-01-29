import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App.js';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, } from 'redux';
import reducer from './actions/reducer';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/  '
//import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('app'));

