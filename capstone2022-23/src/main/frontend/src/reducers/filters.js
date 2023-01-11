const filtersReducerDefaultState = {
  text: "",
  category: "",
  sortBy: "price",
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SET_CATEGORY_FILTER":
      return {
        ...state,
        category: action.category,
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
