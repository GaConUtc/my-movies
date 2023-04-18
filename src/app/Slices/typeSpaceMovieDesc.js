import { createSlice } from '@reduxjs/toolkit';
const initialState = '|';
const typeSpaceMovieDescSlice = createSlice({
    name: 'typeSpace',
    initialState,
    reducers: {
        setTypeSpace: (state, action) => (state = action.payload),
    },
});
export const { setTypeSpace } = typeSpaceMovieDescSlice.actions;
export default typeSpaceMovieDescSlice;
