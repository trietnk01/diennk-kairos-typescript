import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { END_POINT } from "configs";
import IStateUser from "models/IStateUser";
import IUser from "models/IUser";
const initialState: IStateUser = {
  isLogin: false,
  userInfo: null,
};
export default createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.isLogin = true;
      const userInfo: IUser = {
        avatar: action.payload.avatar,
        createdAt: action.payload.createdAt,
        id: action.payload.id,
        name: action.payload.name,
        password: action.payload.password,
        username: action.payload.username,
        expiry: action.payload.expiry,
      };
      state.userInfo = userInfo;
      localStorage.setItem(END_POINT.USER_LOGIN, JSON.stringify(userInfo));
    },
    logout: (state) => {
      state.isLogin = false;
      state.userInfo = null;
      localStorage.setItem(END_POINT.USER_LOGIN, "");
    },
  },
});
