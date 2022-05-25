import React from "react";

function UserInfo() {
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
            <div className="grow"></div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex gap-x-2">
            <div className="w-60 flex items-center justify-end">
              <b>Name</b>
            </div>
            <div className="grow"></div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex gap-x-2">
            <div className="w-60 flex items-center justify-end">
              <b>Created at</b>
            </div>
            <div className="grow"></div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UserInfo;
