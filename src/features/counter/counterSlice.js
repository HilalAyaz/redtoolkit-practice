import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByTen: (state) => {
      state.value += 10;
    },
    decrementByFive: (state) => {
      state.value -= 5;
    },
    reset: (state) => {
        state.value = initialState.value;
      },
    },
  });
  
  export const { increment, decrement, incrementByTen, decrementByFive, reset } = counterSlice.actions;
  
  export default counterSlice.reducer;