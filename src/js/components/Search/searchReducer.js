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

    case 'SEARCH_CLICK': {
      return {
        ...state,
        data: payload.data
      }
    }

    default: {
      return state;
    }
  }
}