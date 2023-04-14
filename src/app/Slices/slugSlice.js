import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: '',
};

export const slugSlice = createSlice({
    name: 'slug',
    initialState,
    reducers: {
        setSlug: (state, action) => {
            state.value = action.payload;
        },
    },
});

export default slugSlice.reducer;
