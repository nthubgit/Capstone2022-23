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
        default:
            return state;
    }
};