import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/Posts/PostSlice";


const store = configureStore({
    reducer: {
        postReducer: postReducer,
    }
})
export default store;