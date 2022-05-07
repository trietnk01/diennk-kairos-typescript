import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "slice/loadingReducer";
import notifyReducer from "slice/notifyReducer";
import userReducer from "slice/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    notify: notifyReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
