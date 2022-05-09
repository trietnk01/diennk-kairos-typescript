import { createSlice } from "@reduxjs/toolkit";
import IStateLoading from "models/IStateLoading";

const initialState: IStateLoading = {
  isShow: false,
};
export default createSlice({
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
