import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../components/auth/slice.auth';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
