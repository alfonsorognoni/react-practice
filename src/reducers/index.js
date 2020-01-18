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
    default:
      return state;
  }
};

export default reducer;
