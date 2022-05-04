import { configureStore } from "@reduxjs/toolkit";
import { loadingSlice, notifySlice, userSlice } from "slice";
const store = configureStore({
  reducer: {
    userReducer: userSlice.reducer,
    loadingReducer: loadingSlice.reducer,
    notifyReducer: notifySlice.reducer,
  },
});
export default store;
