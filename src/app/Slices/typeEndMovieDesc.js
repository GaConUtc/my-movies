import { createSlice } from '@reduxjs/toolkit';
const initialState = '';
const typeEndMovieDescSlice = createSlice({
    name: 'typeEnd',
    initialState,
    reducers: {
        setTypeEnd: (state, action) => (state = action.payload),
    },
});
export const { setTypeEnd } = typeEndMovieDescSlice.actions;
export default typeEndMovieDescSlice;
