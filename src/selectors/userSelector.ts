import { RootState } from "redux/store";

function userSelector() {
  const isLogin = (state: RootState) => state.user.isLogin;
  const userInfo = (state: RootState) => state.user.userInfo;
  return { isLogin, userInfo };
}

export default userSelector;
