import { createSlice } from "@reduxjs/toolkit";

import { removeFromStorage } from "../../utils/storage";
import { loginUser, signupUser } from "./action.auth";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: null,
      accessToken: null,
      refreshToken: null,
      loading: false,
      error: null,
    },
    reducers: {
      logout: (state) => {
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
        removeFromStorage('accessToken')
        removeFromStorage('refreshToken')

      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload.data;
          state.accessToken = action.payload.data.accessToken;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
        builder
        .addCase(signupUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(signupUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload.data;
          state.accessToken = action.payload.data.accessToken;
        })
        .addCase(signupUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export const { logout } = authSlice.actions;
  
  export default authSlice.reducer;
  