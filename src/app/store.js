import { configureStore } from '@reduxjs/toolkit';
import slugReducer from './Slices/slugSlice';
export default configureStore({
    reducer: {
        slug: slugReducer,
    },
});
