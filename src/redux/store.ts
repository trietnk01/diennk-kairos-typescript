import { configureStore } from "@reduxjs/toolkit";
import userReducer from "slices/userSlice";
import loadingReducer from "slices/loadingSlice";
import notifyReducer from "slices/notifySlice";

export const store = configureStore({
  reducer: {
    user: userReducer.reducer,
    loading: loadingReducer.reducer,
    notify: notifyReducer.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
