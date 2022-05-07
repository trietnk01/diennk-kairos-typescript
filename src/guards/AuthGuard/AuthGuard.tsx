import { PATH_NAME } from "configs";
import { useAppSelector } from "hooks";
import { IChildren } from "models/IChildren";
import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import userSelector from "selectors/userSelector";

function AuthGuard({ children }: IChildren) {
  const isAuth: boolean = useAppSelector(userSelector().isLogin);
  if (!isAuth) return <Navigate to={`/${PATH_NAME.ADMIN_LOGIN}`} />;
  return <Fragment>{children}</Fragment>;
}

export default AuthGuard;
