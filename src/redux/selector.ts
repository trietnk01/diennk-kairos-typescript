import { RootState } from "redux/store";
export const checkedLogin = (state: RootState) => state.user.isLogin;
export const checkedShowLoading = (state: RootState) => state.loading.isShow;
export const isShowNotify = (state: RootState) => state.notify.isShow;
export const getTypeNotify = (state: RootState) => state.notify.type;
export const getMsgNotify = (state: RootState) => state.notify.msg;
