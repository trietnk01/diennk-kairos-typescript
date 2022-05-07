import { createSlice } from "@reduxjs/toolkit";
import { END_POINT } from "configs";
import { IUser } from "models/IUser";
const initialState: IUser = {
  isLogin: false,
  userInfo: null,
};
export const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.isLogin = true;
      state.userInfo = payload;
      localStorage.setItem(END_POINT.USER_LOGIN, JSON.stringify(payload));
    },
    logout: (state) => {
      state.isLogin = false;
      state.userInfo = null;
      localStorage.setItem(END_POINT.USER_LOGIN, "");
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
