import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  AppRouter  from './routers/AppRouter';
import configureStore from './store/configureStore';

const store = configureStore();

// console.warn = () => {}

const state = store.getState();

const jsx = (
    <Provider store={store}>
    <React.StrictMode>
        <AppRouter />
        </React.StrictMode>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
