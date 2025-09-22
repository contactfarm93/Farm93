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
      state.message = action.payload.message;
    },
    loginFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
  },
});
export const adminLogin = (formData) => (dispatch) => {
  dispatch(adminSlice.actions.loginStart());
  return axios
    .post(`${process.env.REACT_APP_API_URL}/admin/login`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((res) => {
      dispatch(adminSlice.actions.loginSuccess(res.data));
    })
    .catch((error) => {
      dispatch(adminSlice.actions.loginFailed(error.response.data.message));
    });
};
export default adminSlice.reducer;