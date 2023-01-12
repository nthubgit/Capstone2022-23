import {
  GET_ALL_PRODUCTS,
  GET_ONE_PRODUCT,
  GET_ONE_CART,
  PRODUCTS_ERROR,
} from "../actions/types";

const productsReducerDefaultState = {
  products: [],
};

// const productsReducerDefaultState = [];

export default (state = productsReducerDefaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PRODUCTS:
      return payload;
    // return {
    //   ...state,
    //   ...payload,
    //   loading: false
    // };
    case GET_ONE_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    case PRODUCTS_ERROR:
      return {
        error: payload,
      };
    default:
      return state;
  }
};
