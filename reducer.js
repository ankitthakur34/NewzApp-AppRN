const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        page: action.payload.page,
        nbPages: action.payload.nbPages,
      };

    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload.text,
      };

    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((elem) => elem.objectID !== action.payload.id),
      };

    case "GET_PREV_PAGE":
      let pn = state.page - 1;
      if (pn <= 0) {
        pn = 0;
      }
      return {
        ...state,
        page: pn,
      };

    case "GET_NEXT_PAGE":
      let pn1 = state.page + 1;
      if (pn1 >= state.nbPages) {
        pn1 = 0;
      }
      return {
        ...state,
        page: pn1,
      };

    default:
      break;
  }
};

export default reducer;
