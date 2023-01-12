import {
  GET_ALL_PRODUCTS,
  GET_ONE_PRODUCT,
  PRODUCTS_ERROR,
} from "../actions/types";

const productsReducerDefaultState = {
  products: [],
  loading: true
};

// const productsReducerDefaultState = [];

export default (state = productsReducerDefaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PRODUCTS:
      // return payload;
      return {
        ...state,
        ...payload,
        loading: false
      };
    case GET_ONE_PRODUCT:
      return {
        ...state,
        ...payload,
        loading: false
      };
    case PRODUCTS_ERROR:
      return {
        error: payload,
        loading: false
      };
    default:
      return state;
  }
};
