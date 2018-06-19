import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import apiMiddleWare from './api/middleWare/apiMiddleWare';
import appReducer from './reducer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppContainer from './container/appContainer';
import './App.css';

const middleware = [
    thunk,
    apiMiddleWare
];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    appReducer,
    applyMiddleware(...middleware)
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
