import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slices/blogSlice"
import trainingReducer from "./slices/trainingSlice"
import contactReducer from "./slices/contactSlice"
import adminReducer from "./slices/adminSlice"
export const store=configureStore({
    reducer:{
        blog:blogReducer,
        training:trainingReducer,
        contact:contactReducer,
        admin:adminReducer,
    }
})
export default store