// bookmarkReducer.js

const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return {
        ...state,
        card: [...state.bookmarks, action.payload],
      };
    case "REMOVE_BOOKMARK":
      return {
        ...state,
        bookmarks: state.bookmarks.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};

export default bookmarkReducer;
