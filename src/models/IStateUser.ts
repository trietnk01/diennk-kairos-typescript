import IUser from "./IUser";

export default interface IStateUser {
  exp: number;
  iat: number;
  user: IUser | null;
}
