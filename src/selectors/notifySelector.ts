import { RootState } from "redux/store";

function notifySelector() {
  const isShow = (state: RootState) => state.notify.isShow;
  const type = (state: RootState) => state.notify.type;
  const msg = (state: RootState) => state.notify.msg;
  return { isShow, type, msg };
}

export default notifySelector;
