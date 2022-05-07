import { createSlice } from "@reduxjs/toolkit";
import { ILoading } from "models/ILoading";

const initialState: ILoading = {
  isShow: false,
};
export const loadingSlice = createSlice({
  name: "loading-slice",
  initialState,
  reducers: {
    show: (state) => {
      state.isShow = true;
    },
    hide: (state) => {
      state.isShow = false;
    },
  },
});
export const { show, hide } = loadingSlice.actions;
export default loadingSlice.reducer;
