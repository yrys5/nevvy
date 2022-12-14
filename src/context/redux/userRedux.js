import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSucess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state,action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    registerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    registerSucess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    registerFailure: (state,action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginStart, loginFailure, loginSucess, registerStart, registerFailure, registerSucess, logoutSuccess } =
  userSlice.actions;
export default userSlice.reducer;
