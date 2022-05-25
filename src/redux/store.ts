import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "slices/loadingSlice";
import notifySlice from "slices/notifySlice";
import userSlice from "slices/userSlice";

export const store = configureStore({
  reducer: { loadingReducer: loadingSlice.reducer, notifyReducer: notifySlice.reducer, userReducer: userSlice.reducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
