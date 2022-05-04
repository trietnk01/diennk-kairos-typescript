export const checkedLogin = (state: any) => state.userReducer.isLogin;
export const checkedShowLoading = (state: any) => state.loadingReducer.isShow;
export const isShowNotify = (state: any) => state.notifyReducer.isShow;
export const getTypeNotify = (state: any) => state.notifyReducer.type;
export const getMsgNotify = (state: any) => state.notifyReducer.msg;
