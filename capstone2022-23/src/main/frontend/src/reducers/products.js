import {
    GET_ALL_PRODUCTS,
    GET_ONE_PRODUCT
  } from "../actions/types";

const productsReducerDefaultState = {
    products : []
};

export default (state = productsReducerDefaultState, action) => {

    const { type, payload } = action;
    
    switch (type) {
        case GET_ALL_PRODUCTS:
            return payload;
        case GET_ONE_PRODUCT:
            return {
                ...state,
                ...payload}
        default:
            return state;
    }
};