import {
    SORT_BY_PRICE,
    SORT_BY_RATING,
    SET_TEXT_FILTER
  } from "./types";

  export const setTextFilter = (text = '') => ({
    type: SET_TEXT_FILTER,
    text
})

export const sortByPrice = () => ({
    type: SORT_BY_PRICE
})

export const sortByRating = () => ({
    type: SORT_BY_RATING
})