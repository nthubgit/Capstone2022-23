const filtersReducerDefaultState = {
  text: "",
  sortBy: "price",
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_PRICE":
      return {
        ...state,
        sortBy: "price",
      };
    case "SORT_BY_RATING":
      return {
        ...state,
        sortBy: "rating",
      };
    case "SORT_BY_PRICE_LOW":
      return {
        ...state,
        sortBy: "price_low",
      };
    case "SORT_BY_RATING_LOW":
      return {
        ...state,
        sortBy: "rating_low",
      };
    default:
      return state;
  }
};
