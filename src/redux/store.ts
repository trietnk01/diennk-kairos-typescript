import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "slices/loadingSlice";
import notifyReducer from "slices/notifySlice";
import userReducer from "slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    notify: notifyReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
