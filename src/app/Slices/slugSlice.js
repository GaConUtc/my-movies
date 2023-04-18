import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: '',
};

export const slugSlice = createSlice({
    name: 'slug',
    initialState,
    reducers: {
        setSlug: (state, action) => {
            state = action.payload;
        },
    },
});
export const { setSlug } = slugSlice.actions;
export default slugSlice.reducer;
