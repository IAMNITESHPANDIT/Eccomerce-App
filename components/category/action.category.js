import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '../../utils/service/network';

export const fetchCategoryDataBySlug = createAsyncThunk(
  'items/getItemByCategorySlug',
  async (item, thunkAPI) => {
    try {
      const response = await apiRequest('post', '/items/getItemByCategorySlug', item);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);