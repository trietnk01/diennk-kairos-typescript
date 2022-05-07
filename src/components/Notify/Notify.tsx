import { useAppDispatch, useAppSelector } from "hooks";
import React, { useEffect } from "react";
import notifySelector from "redux/notifySelector";
import { hideNotify } from "slice/notifySlice";
function Notify() {
  const dispatch = useAppDispatch();
  function handleClose(): void {
    dispatch(hideNotify());
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(hideNotify());
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  });

  let alertHtml: React.ReactNode = null;
  const isShow: boolean = useAppSelector(notifySelector.isShowNotify);
  const typeNotify: string = useAppSelector(notifySelector.getTypeNotify);
  const msgNotify: Array<string> = useAppSelector(notifySelector.getMsgNotify);
  let elShow: string = "";
  let displayNotify: string = "hidden";
  if (isShow && Array.isArray(msgNotify) && msgNotify.length > 0) {
    alertHtml = msgNotify.map((item, idx) => {
      return <li key={idx}>{item}</li>;
    });
    elShow = "el-show";
    displayNotify = "block";
  }
  let bgColor: string = "";
  switch (typeNotify) {
    case "danger":
      bgColor = "bg-red-400";
      break;
    case "warning":
      bgColor = "bg-yellow-400";
      break;
    case "success":
      bgColor = "bg-cyan-400";
      break;
  }
  return (
    <div className={`notify-container bg-screenOpacity fixed top-0 left-0 w-screen h-screen ${elShow} ${displayNotify}`}>
      <div className={`alert-container top-1/2 left-1/2 p-2 rounded absolute ${bgColor}`}>
        <div className="close bg-white absolute rounded-full">
          <button type="button" name="btnClose" className="bg-transparent border-0 flex w-full h-full items-center justify-center" onClick={handleClose}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <ul className="mb-0">{alertHtml}</ul>
      </div>
    </div>
  );
}

export default Notify;
