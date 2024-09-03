import { createAsyncThunk } from '@reduxjs/toolkit';

import { setLocalStorage } from '../../utils/storage';

import { apiRequest } from '../../utils/service/network';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    
    try {
      const response = await apiRequest('post', '/auth/login', credentials);

      const { message, data, status } = response;

      const { token } = data;

      console.log("token", token);

      await setLocalStorage('accessToken', token);

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
