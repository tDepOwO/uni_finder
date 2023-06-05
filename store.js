import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./CardReducer";

export default configureStore({
  reducer: {
    card: CardReducer,
  },
});
