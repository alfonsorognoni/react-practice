const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      // eslint-disable-next-line no-case-declarations
      const exist = state.myList.find((item) => item.id === action.payload.id);
      return {
        ...state,
        myList: (!exist) ? [...state.myList, action.payload] : [...state.myList],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) || state.originals.find((item) => item.id === Number(action.payload)),
      };
    case 'SEARCH_REQUEST':
      return {
        ...state,
        trendsFiltered: (!action.payload) ? null : state.trends.filter((item) => item.title.toLowerCase().startsWith(action.payload.toLowerCase())),
        originalsFiltered: (!action.payload) ? null : state.originals.filter((item) => item.title.toLowerCase().startsWith(action.payload.toLowerCase())),
      };
    default:
      return state;
  }
};

export default reducer;
