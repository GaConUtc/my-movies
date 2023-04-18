import { createSlice } from '@reduxjs/toolkit';
const initialState = 1;
const typeShowMovieDescSlice = createSlice({
    name: 'typeShow',
    initialState,
    reducers: {
        setTypeShow: (state, action) => (state = action.payload),
    },
});
export const { setTypeShow } = typeShowMovieDescSlice.actions;
export default typeShowMovieDescSlice;
