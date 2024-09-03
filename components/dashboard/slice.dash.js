import { createSlice } from "@reduxjs/toolkit";
import { fetchCarouselData, fetchCategoryData } from "./action.dash";

const bannerSlide = createSlice({
  name: 'bannerSlide',
  initialState: {
    carouselData: [],
    loading: false,
    error: null,
    categories: [],
    loadingCategories: false,
    errorCategories: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarouselData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCarouselData.fulfilled, (state, action) => {
        state.loading = false;
        state.carouselData = action.payload;
      })
      .addCase(fetchCarouselData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCategoryData.pending, (state) => {
        state.loadingCategories = true;
      })
      .addCase(fetchCategoryData.fulfilled, (state, action) => {
        state.loadingCategories = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategoryData.rejected, (state, action) => {
        state.loadingCategories = false;
        state.error = action.payload;
      });
  },
});

export default bannerSlide.reducer;