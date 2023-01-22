import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const student = JSON.parse(localStorage.getItem("student"));

const initialState = {
  student: student ? student : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Signup a student
export const signup = createAsyncThunk(
  "auth/signup",
  async (student, thunkAPI) => {
    try {
      return await authService.signup(student);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.student = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.student = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
