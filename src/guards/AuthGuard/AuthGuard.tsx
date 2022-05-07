import { PATH_NAME } from "configs";
import { IChildren } from "models/IChildren";
import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "hooks";
import userSelector from "redux/userSelector";

function AuthGuard({ children }: IChildren) {
  const isAuth: boolean = useAppSelector(userSelector.checkedLogin);
  if (!isAuth) return <Navigate to={`/${PATH_NAME.ADMIN_LOGIN}`} />;
  return <Fragment>{children}</Fragment>;
}

export default AuthGuard;
