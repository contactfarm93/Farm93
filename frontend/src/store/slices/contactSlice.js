import axios from "axios"
import { createSlice } from "@reduxjs/toolkit";

const contactSlice=createSlice({
    name:"contact",
    initialState:{
        loading: false,
        success: false,
        error: null,
        data: null,
    },
    reducers:{
        contactStart: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    contactSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.data = action.payload;
    },
    contactFailed: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    }
})
export const submitContactForm=(formData)=>(dispatch)=>{
    dispatch(contactSlice.actions.contactStart());
    return axios.post("${process.env.REACT_APP_API_URL}/contact/contact-us",formData,{
        headers:{
            "Content-Type": "application/json",
        },
        withCredentials:true
    })
    .then((res)=>{
        dispatch(contactSlice.actions.contactSuccess(res.data))
    })
    .catch((error) => {
        dispatch(
          contactSlice.actions.contactFailed(
            error.response.data.message
          )
        );
    });
}

export default contactSlice.reducer;