import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const trainingSlice = createSlice({
  name: "training",
  initialState: {
    loading: false,
    success: false,
    error: null,
    data: null,
  },
  reducers: {
    trainingStart: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    trainingSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.data = action.payload;
    },
    trainingFailed: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
  },
});

export const submitTrainingForm = (formData) => (dispatch) => {
  dispatch(trainingSlice.actions.trainingStart());
  return axios
    .post("/api/v1/training/train", formData, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
    .then((res) => {
      dispatch(trainingSlice.actions.trainingSuccess(res.data));
    })
    .catch((error) => {
      dispatch(
        trainingSlice.actions.trainingFailed(
          error.response?.data?.message || error.message || "Something went wrong"
        )
      );
    });
};

export default trainingSlice.reducer;
