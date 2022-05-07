import { RootState } from "./store";
const checkedLogin = (state: RootState) => state.user.isLogin;
export default { checkedLogin };
