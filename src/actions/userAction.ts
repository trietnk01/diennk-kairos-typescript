import { userSlice } from "slices/userSlice";

function userAction() {
  const { login, logout } = userSlice.actions;
  return { login, logout };
}

export default userAction;
