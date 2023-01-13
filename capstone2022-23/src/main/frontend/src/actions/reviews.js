import {
    CREATE_REVIEWS,
    RETRIEVE_REVIEWS,
    UPDATE_REVIEWS,
    DELETE_REVIEWS,
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