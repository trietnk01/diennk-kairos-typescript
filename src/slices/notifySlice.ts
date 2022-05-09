import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IStateNotify from "models/IStateNotify";
const initialState: IStateNotify = {
  isShow: false,
  type: "success",
  msg: [],
};
export default createSlice({
  name: "notify-slice",
  initialState,
  reducers: {
    showNotify: (state, action: PayloadAction<IStateNotify>) => {
      state.isShow = true;
      state.type = action.payload.type;
      state.msg = action.payload.msg;
    },
    hideNotify: (state) => {
      state.isShow = false;
    },
  },
});
