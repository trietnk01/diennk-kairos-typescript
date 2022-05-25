import { PATH_NAME } from "configs";
import IChildren from "models/IChildren";
import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import auth_service from "services/authService";

function AuthGuard({ children }: IChildren) {
  const isAuth: boolean = auth_service.isAuthenticated();
  if (!isAuth) return <Navigate to={`/${PATH_NAME.ADMIN_LOGIN}`} />;
  return <Fragment>{children}</Fragment>;
}

export default AuthGuard;
