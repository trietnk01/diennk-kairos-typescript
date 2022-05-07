import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "slice/loadingSlice";
import notifyReducer from "slice/notifySlice";
import userReducer from "slice/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    notify: notifyReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
