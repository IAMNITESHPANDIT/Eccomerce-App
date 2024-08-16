import { createAsyncThunk } from '@reduxjs/toolkit';

import  {apiRequest} from '../../utils/service/network.js';

import { setLocalStorage } from '../../utils/storage';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    
    try {
      const response = await apiRequest('post', '/auth/login', credentials);

      const { message, data, status } = response;

      const { token } = data;

      await setLocalStorage('accessToken', token)

      await setLocalStorage('userData',  JSON.stringify(data))

      return {data, message, status}; 

    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const signupUser = createAsyncThunk(
  '/auth/register',
  async (data, thunkAPI) => {
    
    try {
      const response = await apiRequest('post', '/auth/register', data);

      return response; 

    } catch (error) {

      return thunkAPI.rejectWithValue(error.response.data);

    }
  }
);
