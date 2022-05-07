import { createSlice } from "@reduxjs/toolkit";
import { ILoading } from "models/ILoading";

const initialState: ILoading = {
  isShow: false,
};
export const loadingSlice = createSlice({
  name: "loading-slice",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isShow = true;
    },
    hideLoading: (state) => {
      state.isShow = false;
    },
  },
});
export default loadingSlice.reducer;
