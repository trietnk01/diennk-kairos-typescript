import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IStateUser from "models/IStateUser";

const initialState: IStateUser = {
  user: null,
};
export default createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    setUser: (state: IStateUser, action: PayloadAction<IStateUser>) => {
      state.user = action.payload.user;
    },
  },
});
