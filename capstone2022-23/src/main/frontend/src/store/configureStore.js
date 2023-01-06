import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import accountsReducer from '../reducers/accounts'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

export default () => {
    const store = createStore(
        combineReducers({
            accounts: accountsReducer,
        }),
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
    
    return store;
};