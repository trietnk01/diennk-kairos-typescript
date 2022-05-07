import { createSlice } from "@reduxjs/toolkit";
import { INotify } from "models/INotify";
const initialState: INotify = {
  isShow: false,
  type: "success",
  msg: [],
};
export const notifySlice = createSlice({
  name: "notify-slice",
  initialState,
  reducers: {
    showNotify: (state, { payload }) => {
      state.isShow = true;
      state.type = payload.type;
      state.msg = payload.msg;
    },
    hideNotify: (state) => {
      state.isShow = false;
    },
  },
});
export const { showNotify, hideNotify } = notifySlice.actions;
export default notifySlice.reducer;
