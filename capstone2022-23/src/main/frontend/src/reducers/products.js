import {
    GET_ALL_PRODUCTS
  } from "../actions/types";

const productsReducerDefaultState = {
    products : []
};

export default (state = productsReducerDefaultState, action) => {

    const { type, payload } = action;
    
    switch (type) {
        case GET_ALL_PRODUCTS:
            return payload;
        default:
            return state;
    }
};