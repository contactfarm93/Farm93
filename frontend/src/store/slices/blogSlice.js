import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const API_BASE_URL =
  import.meta.env.MODE === "development"
    ? "" 
    : import.meta.env.VITE_API_URL;

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    loading: false,
    error: null,
    blog: null,
  },
  reducers: {
    createBlogStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createBlogSuccess: (state, action) => {
      state.loading = false;
      state.blogs.push(action.payload.blog);
    },
    createBlogFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getBlogBySlugStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getBlogBySlugSuccess: (state, action) => {
      state.loading = false;
      state.blog = action.payload;
    },
    getBlogBySlugFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getBlogsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getBlogsSuccess: (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    },
    getBlogsFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateBlogStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateBlogSuccess: (state, action) => {
      state.loading = false;
      const index = state.blogs.findIndex((b) => b._id === action.payload._id);
      if (index !== -1) {
        state.blogs[index] = action.payload;
      }
    },
    updateBlogFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteBlogStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteBlogSuccess: (state, action) => {
      state.loading = false;
      state.blogs = state.blogs.filter((b) => b._id !== action.payload);
    },
    deleteBlogFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});


export const createBlog = (formData) => (dispatch) => {
  dispatch(blogSlice.actions.createBlogStart());
  return axios
    .post(`${API_BASE_URL}/api/v1/blog/create-blog`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    })
    .then((res) => {
      dispatch(blogSlice.actions.createBlogSuccess(res.data));
    })
    .catch((error) => {
      dispatch(blogSlice.actions.createBlogFailed(error.response?.data?.message || "Error"));
    });
};

export const getBlogBySlug = (slug) => (dispatch) => {
  dispatch(blogSlice.actions.getBlogBySlugStart());
  return axios
    .get(`${API_BASE_URL}/api/v1/blog/${slug}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((res) => {
      dispatch(blogSlice.actions.getBlogBySlugSuccess(res.data));
    })
    .catch((error) => {
      dispatch(blogSlice.actions.getBlogBySlugFailed(error.response?.data?.message || "Error"));
    });
};

export const getBlogs = () => (dispatch) => {
  dispatch(blogSlice.actions.getBlogsStart());
  return axios
    .get(`${API_BASE_URL}/api/v1/blog/get-blogs`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((res) => {
      dispatch(blogSlice.actions.getBlogsSuccess(res.data));
    })
    .catch((error) => {
      dispatch(blogSlice.actions.getBlogsFailed(error.response?.data?.message || "Error"));
    });
};

export const updateBlog = (id, formData) => (dispatch) => {
  dispatch(blogSlice.actions.updateBlogStart());
  return axios
    .put(`${API_BASE_URL}/api/v1/blog/update-blog/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    })
    .then((res) => {
      dispatch(blogSlice.actions.updateBlogSuccess(res.data));
    })
    .catch((error) => {
      dispatch(blogSlice.actions.updateBlogFailed(error.response?.data?.message || "Error"));
    });
};

export const deleteBlog = (id) => (dispatch) => {
  dispatch(blogSlice.actions.deleteBlogStart());
  return axios
    .delete(`${API_BASE_URL}/api/v1/blog/delete-blog/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((res) => {
      dispatch(blogSlice.actions.deleteBlogSuccess(id));
    })
    .catch((error) => {
      dispatch(blogSlice.actions.deleteBlogFailed(error.response?.data?.message || "Error"));
    });
};

export default blogSlice.reducer;
