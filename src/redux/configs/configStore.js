import { configureStore } from '@reduxjs/toolkit';
import scroll from '../modules/scrollSlice';

const store = configureStore({
  reducer: scroll,
});

export default store;
