import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryData, fetchCategoryDataBySlug } from "./action.category";

const categorySlide = createSlice({
  name: 'categorySlide',
  initialState: {
    loading: false,
    error: null,
    categories: [],
    loadingCategories: false,
    errorCategories: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryDataBySlug.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategoryDataBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategoryDataBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // .addCase(fetchCategoryData.pending, (state) => {
      //   state.loadingCategories = true;
      // })
      // .addCase(fetchCategoryData.fulfilled, (state, action) => {
      //   state.loadingCategories = false;
      //   state.categories = action.payload;
      // })
      // .addCase(fetchCategoryData.rejected, (state, action) => {
      //   state.loadingCategories = false;
      //   state.error = action.payload;
      // });
  },
});

export default categorySlide.reducer;