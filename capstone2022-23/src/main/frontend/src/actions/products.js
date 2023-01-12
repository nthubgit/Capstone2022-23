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
    const res = await productsService.getOne(product); 
    try {
      dispatch({
        type: GET_ONE_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const retrieveSingleCart = (cart) => async (dispatch) => {
    const res = await productsService.getCart(cart); 
    try {
      dispatch({
        type: GET_ONE_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };