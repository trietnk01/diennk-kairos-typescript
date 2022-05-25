import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IStateUser from "models/IStateUser";

const initialState: IStateUser = {
  exp: 0,
  iat: 0,
  user: null,
};
export default createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    setUser: (state: IStateUser, action: PayloadAction<IStateUser>) => {
      state.exp = action.payload.exp;
      state.iat = action.payload.iat;
      state.user = action.payload.user;
    },
  },
});
