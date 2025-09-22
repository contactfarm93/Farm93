import axios from "axios"
import { createSlice } from "@reduxjs/toolkit";

const trainingSlice=createSlice({
    name:"training",
    initialState:{
        loading: false,
        training: null,
        error: null,
        success: false,
    },
    reducers: {
    createTrainingStart: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    createTrainingSuccess: (state, action) => {
      state.loading = false;
      state.training = action.payload;
      state.success = true;
    },
    createTrainingFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
})

export const trainingForm=(formData)=>(dispatch)=>{
    dispatch(trainingSlice.actions.createTrainingStart());
    return axios.post(`${import.meta.env.VITE_API_URL}/training/train`,formData,{
        headers:{
            "Content-Type": "application/json",
        },
        withCredentials:true
    })
    .then((res)=>{
        dispatch(trainingSlice.actions.createTrainingSuccess(res.data))
    })
    .catch((error) => {
        dispatch(
          trainingSlice.actions.createTrainingFailed(
            error.response.data.message
          )
        );
    });
}

export default trainingSlice.reducer;