import {
  GET_ALL_PRODUCTS,
  GET_ONE_PRODUCT,
  GET_ONE_CART,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
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
    case GET_ONE_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    case PRODUCTS_ERROR:
      return {
        error: payload,
      };
    case CREATE_PRODUCT:
      return [...state, payload];
    case DELETE_PRODUCT:
      return state.filter(({ id }) => id !== payload.id);
    case UPDATE_PRODUCT:
      return state.map((state) => {
        if (state.id === payload.id) {
          return {
            ...state,
            ...payload,
          };
        } else {
          return state;
        }
      });
    default:
      return state;
  }
};
