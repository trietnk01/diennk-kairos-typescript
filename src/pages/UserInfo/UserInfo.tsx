import { useAppSelector } from "hooks";
import { OUser } from "models/IUser";
import React from "react";
import userSelector from "selectors/userSelector";

function UserInfo() {
  let userInfo: OUser | null = useAppSelector(userSelector().userInfo);
  let createdAt: string = userInfo.createdAt;
  //let { createdAt }: OUser = userInfo;
  let newDate: Date = new Date(createdAt);
  let year: number = newDate.getFullYear();
  let month: number = newDate.getMonth() + 1;
  let day: number = newDate.getDate();
  let dateStr: string = day + "/" + month + "/" + year;
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
            <div className="grow">{userInfo.username}</div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex gap-x-2">
            <div className="w-60 flex items-center justify-end">
              <b>Name</b>
            </div>
            <div className="grow">{userInfo.name}</div>
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
