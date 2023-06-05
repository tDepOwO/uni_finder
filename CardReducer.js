import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "card",
  initialState: {
    card: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.card.push({ ...action.payload });
    },
  },
});

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;
