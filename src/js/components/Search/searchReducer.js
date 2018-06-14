const defaultState = {
  searchText: '',
  data: []
};

export default function searchReducer (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH_TEXT': {
      return {
        ...state,
        searchText: payload.searchText
      };
    }

    // case 'SEARCH_CLICK_PENDING': {
    //   return state;
    // }

    case 'SEARCH_CLICK_FULFILLED': {
      return {
        ...state,
        data: payload
      };
    }

    // case 'SEARCH_CLICK_REJECTED': {
    //   return 
    // }

    default: {
      return state;
    }
  }
}