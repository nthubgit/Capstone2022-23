import {
    CREATE_ACCOUNT,
    RETRIEVE_ACCOUNTS,
    UPDATE_ACCOUNT,
    DELETE_ACCOUNT,
    DELETE_ALL_ACCOUNTS
  } from "../actions/types";

const accountsReducerDefaultState = [];

export default (state = accountsReducerDefaultState, action) => {

    const { type, payload } = action;
    
    switch (type) {
        case RETRIEVE_ACCOUNTS:
            return payload;
        case CREATE_ACCOUNT:
            return [...state, payload];
        case DELETE_ACCOUNT:
            return state.filter(({ id }) => id !== payload.id)
        default:
            return state;
    }
};