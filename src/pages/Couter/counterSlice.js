import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByMount: (state, action) => {
            state.value += action.payload;
        },
    },
});
export const selectorCounter = (state) => state.counter.value;
export const counterAction = counterSlice.actions;
export default counterSlice.reducer;
