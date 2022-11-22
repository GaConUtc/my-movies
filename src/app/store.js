import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../pages/Couter/counterSlice';
export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});
