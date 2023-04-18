import { configureStore } from '@reduxjs/toolkit';
import slugReducer from './Slices/slugSlice';
import typeShowMovieDescSlice from './Slices/typeShowMovieDesc';
import typeStartMovieDescSlice from './Slices/typeStartMovieDesc';
import typeSpaceMovieDescSlice from './Slices/typeSpaceMovieDesc';
import typeEndMovieDescSlice from './Slices/typeEndMovieDesc';
export default configureStore({
    reducer: {
        slug: slugReducer,
        typeShowMovieDesc: typeShowMovieDescSlice.reducer,
        typeStartMovieDesc: typeStartMovieDescSlice.reducer,
        typeSpaceMovieDesc: typeSpaceMovieDescSlice.reducer,
        typeEndMovieDesc: typeEndMovieDescSlice.reducer,
    },
});
