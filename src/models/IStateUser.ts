import IUser from "./IUser";

export default interface IStateUser {
  isLogin: boolean;
  userInfo: IUser | null;
}
