import {
  SORT_BY_PRICE,
  SORT_BY_RATING,
  SORT_BY_PRICE_LOW,
  SORT_BY_RATING_LOW,
  SET_TEXT_FILTER,
  SET_CATEGORY_FILTER,
} from "./types";

export const setTextFilter = (text = "") => ({
  type: SET_TEXT_FILTER,
  text,
});

export const setCategoryFilter = (category = "") => ({
  type: SET_CATEGORY_FILTER,
  category,
});

export const sortByPrice = () => ({
  type: SORT_BY_PRICE,
});

export const sortByRating = () => ({
  type: SORT_BY_RATING,
});
export const sortByPriceLow = () => ({
  type: SORT_BY_PRICE_LOW,
});

export const sortByRatingLow = () => ({
  type: SORT_BY_RATING_LOW,
});
