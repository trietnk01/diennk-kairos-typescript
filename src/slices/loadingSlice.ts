import { createSlice } from "@reduxjs/toolkit";
import IStateLoading from "models/IStateLoading";

const initialState: IStateLoading = {
  isShow: false,
};
export default createSlice({
  name: "loading-slice",
  initialState,
  reducers: {
    showSpinner: (state: any) => {
      state.isShow = true;
    },
    hideSpinner: (state: any) => {
      state.isShow = false;
    },
  },
});
