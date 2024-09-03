import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from '../../utils/service/network';

export const fetchCarouselData = createAsyncThunk(
  '/slider',
  async (_, thunkAPI) => {
    try {
      const response = await apiRequest('get', '/slider');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchCategoryData = createAsyncThunk(
  '/category/getAllCategory',
  async (_, thunkAPI) => {
    try {
      const response = await apiRequest('get', '/category/getAllCategory');
      return response.categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);