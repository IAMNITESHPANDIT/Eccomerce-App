import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiRequest } from '../../utils/service/network';


export const fetchItemDetails = createAsyncThunk(
  'getItemById',
  async (_, thunkAPI) => {
    try {
      const response = await apiRequest('post', '/items/getItemById',_);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);