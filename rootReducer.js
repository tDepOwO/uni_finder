// rootReducer.js

import { combineReducers } from "redux";
import bookmarkReducer from "./bookmarkReducer";

const rootReducer = combineReducers({
  // ...
  card: bookmarkReducer,
});

export default rootReducer;
