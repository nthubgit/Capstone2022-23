import {
    GET_ALL_PRODUCTS,
    GET_ONE_PRODUCT
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

  export const retrieveSingleProduct = (product) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ONE_PRODUCT,
        payload: product,
      });
    } catch (err) {
      console.log(err);
    }
  };