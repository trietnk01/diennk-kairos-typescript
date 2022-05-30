import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IStateNotify from "models/IStateNotify";
const initialState: IStateNotify = {
  isShow: false,
  type: "success",
  msg: new Array<string>(0),
};
export default createSlice({
  name: "notify-slice",
  initialState,
  reducers: {
    showNotify: (state: any, action: PayloadAction<IStateNotify>) => {
      state.isShow = true;
      state.type = action.payload.type;
      state.msg = action.payload.msg;
    },
    hideNotify: (state: any) => {
      state.isShow = false;
    },
  },
});
