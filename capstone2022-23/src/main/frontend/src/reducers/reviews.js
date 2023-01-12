import {
    CREATE_REVIEWS,
    RETRIEVE_REVIEWS,
    UPDATE_REVIEWS,
    DELETE_REVIEWS,
  } from "../actions/types";

  const reviewsReducerDefaultState = [];

  export default (state = reviewsReducerDefaultState, action) => {

    const { type, payload } = action;
    
    switch (type) {
        case RETRIEVE_REVIEWS:
            return payload;
        case CREATE_REVIEWS:
            return [...state, payload];
        case DELETE_REVIEWS:
            return state.filter(({ id }) => id !== payload.id)
        default:
            return state;
    }
};