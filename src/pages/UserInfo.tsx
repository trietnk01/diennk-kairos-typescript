import { useAppSelector } from "hooks";
import IUser from "models/IUser";
import React from "react";
import userSelector from "selectors/userSelector";

function UserInfo() {
  let userInfo: IUser | null = useAppSelector(userSelector().userInfo);
  let userName: string = "";
  let name: string = "";
  let createdAt: string = "";
  let dateStr: string = "";
  if (userInfo?.createdAt) {
    createdAt = userInfo.createdAt;
    let newDate: Date = new Date(createdAt);
    let year: number = newDate.getFullYear();
    let month: number = newDate.getMonth() + 1;
    let day: number = newDate.getDate();
    dateStr = day + "/" + month + "/" + year;
  }
  if (userInfo?.username) {
    userName = userInfo.username;
  }
  if (userInfo?.name) {
    name = userInfo?.name;
  }
  //let { createdAt }: OUser = userInfo;

  return (
    <form className="border p-5">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-x-2">
          <i className="fa fa-address-book-o" aria-hidden="true"></i>
          <span>User Info</span>
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col w-full">
          <div className="flex gap-x-2">
            <div className="w-60 flex items-center justify-end">
              <b>Username</b>
            </div>
            <div className="grow">{userName}</div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex gap-x-2">
            <div className="w-60 flex items-center justify-end">
              <b>Name</b>
            </div>
            <div className="grow">{name}</div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex gap-x-2">
            <div className="w-60 flex items-center justify-end">
              <b>Created at</b>
            </div>
            <div className="grow">{dateStr}</div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UserInfo;
