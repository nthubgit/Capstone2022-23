import {
    GET_ALL_PRODUCTS,
    GET_ONE_PRODUCT,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
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

  export const createProduct = (data) => async (dispatch) => {
    try {
      const res = await productsService.create(data);
  
      dispatch({
        type: CREATE_PRODUCT,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const updateProduct = (id, data) => async (dispatch) => {
    try {
      const res = await productsService.update(id, data);
  
      dispatch({
        type: UPDATE_PRODUCT,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const deleteProduct = (id) => async (dispatch) => {
    try {
      const res = await productsService.delete(id);
  
      dispatch({
        type: DELETE_PRODUCT,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
