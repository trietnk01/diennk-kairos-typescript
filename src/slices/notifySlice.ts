import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    showNotify: (state, action: PayloadAction<INotify>) => {
      state.isShow = true;
      state.type = action.payload.type;
      state.msg = action.payload.msg;
    },
    hideNotify: (state) => {
      state.isShow = false;
    },
  },
});
export default notifySlice.reducer;
