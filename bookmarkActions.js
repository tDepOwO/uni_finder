// bookmarkActions.js

export const addBookmark = (itemId) => {
  return {
    type: "ADD_BOOKMARK",
    payload: itemId,
  };
};

export const removeBookmark = (itemId) => {
  return {
    type: "REMOVE_BOOKMARK",
    payload: itemId,
  };
};
