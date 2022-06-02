import { PATH_NAME } from "configs";
import IChildren from "models/IChildren";
import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import auth_service from "services/authService";

function GuestGuard({ children }: IChildren) {
  const isAuth = auth_service.isAuthenticated();
  if (isAuth) return <Navigate to={`/${PATH_NAME.ADMIN_MASTER}/${PATH_NAME.ADMIN_HOME}`} />;
  return <Fragment>{children}</Fragment>;
}

export default GuestGuard;
