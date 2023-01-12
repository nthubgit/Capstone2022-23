import { GET_ONE_CART } from "./types";

import cartsService from "../services/carts.service";

export const retrieveSingleCart = (cart) => async (dispatch) => {
  const res = await cartsService.getCart(cart);
  try {
    dispatch({
      type: GET_ONE_CART,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
