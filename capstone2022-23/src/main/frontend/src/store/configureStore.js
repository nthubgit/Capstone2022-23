import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combinedReducer from '../reducers/combined'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

export default () => {
    const store = createStore(
        combinedReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
    
    return store;
};