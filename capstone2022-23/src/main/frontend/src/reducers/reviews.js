import {
  CREATE_REVIEW,
  RETRIEVE_REVIEWS,
  UPDATE_REVIEW,
  DELETE_REVIEW,
} from "../actions/types";

const reviewsReducerDefaultState = [];

export default (state = reviewsReducerDefaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_REVIEWS:
      return payload;
    case CREATE_REVIEW:
      return [...state, payload];
    case DELETE_REVIEW:
      return state.filter(({ id }) => id !== payload.id);
    case UPDATE_REVIEW:
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
