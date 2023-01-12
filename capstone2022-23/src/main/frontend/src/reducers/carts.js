import { GET_ONE_CART } from "../actions/types";

const cartsReducerDefaultState = {
  carts: [],
};

export default (state = cartsReducerDefaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ONE_CART:
      return {
        ...state,
        ...payload.products,
      };
    default:
      return state;
  }
};
