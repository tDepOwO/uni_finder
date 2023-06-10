import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import CardReducer from "./CardReducer";

const middleware = [...getDefaultMiddleware({ serializableCheck: false })];
export default configureStore({
  reducer: {
    card: CardReducer,
    middleware,
  },
});
