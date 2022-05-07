export interface OUser {
  avatar: string;
  createdAt: string;
  id: string;
  name: string;
  password: string;
  username: string;
}
export interface IUser {
  isLogin: boolean;
  userInfo: OUser;
}
