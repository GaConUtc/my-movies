import { createSlice } from '@reduxjs/toolkit';
const initialState = '';
const typeStartMovieDescSlice = createSlice({
    name: 'typeStart',
    initialState,
    reducers: {
        setTypeStart: (state, action) => (state = action.payload),
    },
});
export const { setTypeStart } = typeStartMovieDescSlice.actions;
export default typeStartMovieDescSlice;
