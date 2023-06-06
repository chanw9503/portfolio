import { createSlice } from '@reduxjs/toolkit';

const initalState = {
  scroll: 100,
};

const scrollSlice = createSlice({
  name: 'SCROLL_SLICE',
  initalState,
  reducers: {
    moveScroll: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { moveScroll } = scrollSlice.actions;
export default scrollSlice.reducer;
