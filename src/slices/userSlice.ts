import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    login: (state, action: PayloadAction<IUser>) => {
      state.isLogin = true;
      state.userInfo = action.payload.userInfo;
      localStorage.setItem(END_POINT.USER_LOGIN, JSON.stringify(action.payload.userInfo));
    },
    logout: (state) => {
      state.isLogin = false;
      state.userInfo = null;
      localStorage.setItem(END_POINT.USER_LOGIN, "");
    },
  },
});
export default userSlice.reducer;
