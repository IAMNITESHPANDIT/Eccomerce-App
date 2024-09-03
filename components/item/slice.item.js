import { createSlice } from "@reduxjs/toolkit";

import { fetchItemDetails } from "./action.item";

const itemSlide = createSlice({
  name: 'itemSlide',
  initialState: {
    items: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItemDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchItemDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
     
  },
});

export default itemSlide.reducer;