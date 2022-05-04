import { createSlice } from "@reduxjs/toolkit";
import { END_POINT } from "configs";

export default createSlice({
  name: "user-slice",
  initialState: {
    isLogin: false,
    userInfo: {},
  },
  reducers: {
    login: (state, { payload }) => {
      state.isLogin = true;
      state.userInfo = payload;
      localStorage.setItem(END_POINT.USER_LOGIN, JSON.stringify(payload));
    },
    logout: (state) => {
      state.isLogin = false;
      state.userInfo = {};
      localStorage.setItem(END_POINT.USER_LOGIN, "");
    },
  },
});
