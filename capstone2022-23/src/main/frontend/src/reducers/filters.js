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
    default:
      return state;
  }
};
