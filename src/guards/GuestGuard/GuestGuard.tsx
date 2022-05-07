import { PATH_NAME } from "configs";
import { IChildren } from "models/IChildren";
import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "hooks";
import userSelector from "redux/userSelector";

function GuestGuard({ children }: IChildren) {
  const isAuth = useAppSelector(userSelector.checkedLogin);
  if (isAuth) return <Navigate to={`/${PATH_NAME.ADMIN_MASTER}/${PATH_NAME.ADMIN_DASHBOARD}`} />;
  return <Fragment>{children}</Fragment>;
}

export default GuestGuard;
