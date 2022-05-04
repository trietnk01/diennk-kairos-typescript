import { PATH_NAME } from "configs";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { checkedLogin } from "store/selector";

function AuthGuard({ children }: { children: React.ReactNode }) {
  const isAuth: boolean = useSelector(checkedLogin);
  if (!isAuth) return <Navigate to={`/${PATH_NAME.ADMIN_LOGIN}`} />;
  return <Fragment>{children}</Fragment>;
}

export default AuthGuard;
