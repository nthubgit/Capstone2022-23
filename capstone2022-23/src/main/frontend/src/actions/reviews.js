import {
    CREATE_REVIEW,
    RETRIEVE_REVIEWS,
    UPDATE_REVIEW,
    DELETE_REVIEW,
  } from "./types";

  import reviewService from "../services/review.service";

  export const retrieveReviewsOfProduct = (product) => async (dispatch) => {
    try {
      const res = await reviewService.getAllByProduct(product);
  
      dispatch({
        type: RETRIEVE_REVIEWS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const createReview = (id, data) => async (dispatch) => {
    try {
      const res = await reviewService.create(id, data);
  
      dispatch({
        type: CREATE_REVIEW,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const deleteReview = (id) => async (dispatch) => {
    try {
      await reviewService.delete(id);
  
      dispatch({
        type: DELETE_REVIEW,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const updateReview = (id, data) => async (dispatch) => {
    try {
      const res = await reviewService.update(id, data);
  
      dispatch({
        type: UPDATE_REVIEW,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

