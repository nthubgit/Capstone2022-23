import {
    GET_ALL_PRODUCTS
  } from "./types";

  import productsService from "../services/products.service";

  export const retrieveProducts = () => async (dispatch) => {
    try {
      const res = await productsService.getAll(); 
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };