import { RootState } from "./store";
const isShowNotify = (state: RootState) => state.notify.isShow;
const getTypeNotify = (state: RootState) => state.notify.type;
const getMsgNotify = (state: RootState) => state.notify.msg;
export default { isShowNotify, getTypeNotify, getMsgNotify };
