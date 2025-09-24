import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    loading: false,
    error: null,
    isAuthenticated: false,
    message: null,
  },
  reducers: {   
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload.message || "Login successful";
    },
    loginFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
  },
});

export const adminLogin = (formData) => async (dispatch) => {
  dispatch(adminSlice.actions.loginStart());
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/admin/login`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch(adminSlice.actions.loginSuccess(res.data));
  } catch (error) {
    const errorMsg =
      error.response?.data?.message || "Something went wrong. Please try again.";
    dispatch(adminSlice.actions.loginFailed(errorMsg));
  }
};

export default adminSlice.reducer;
