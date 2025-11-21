import { configureStore } from '@reduxjs/toolkit';
import templateReducer from './slices/templateSlice';

export const store = configureStore({
  reducer: {
    templates: templateReducer,
  },
});