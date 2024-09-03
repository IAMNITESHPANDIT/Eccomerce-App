import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../../components/auth/slice.auth';

import dashReducer from '../../components/dashboard/slice.dash';

import categoryReducer from '../../components/category/slice.category';

import itemReducer from '../../components/item/slice.item';

const store = configureStore({
  
  reducer: {
    auth: authReducer,
    bannerSlide: dashReducer,
    categorySlide: categoryReducer,
    itemSlide: itemReducer
  },
});

export default store;
