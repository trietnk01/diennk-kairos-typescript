import { authenticated, logout } from "apis/user.api";

import { NOTIFY_NAME, PATH_NAME } from "configs";
import { useAppDispatch } from "hooks";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import auth_service from "services/authService";
import notifySlice from "slices/notifySlice";
import userSlice from "slices/userSlice";

/* function CustomLink({ to, children, ...props }: ICustomlink) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  let classN = "text-white no-underline font-semibold block w-full border-l-2 border-solid border-transparent relative";
  if (match) {
    classN += " active";
  }
  return (
    <Link to={to} {...props} className={classN}>
      {children}
    </Link>
  );
} */

const AdminMaster: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const accessToken: string = auth_service.getAccessToken();
    if (!accessToken) {
      auth_service.clearStorage();
      return;
    }
    async function checkedAuthUser() {
      try {
        const res: any = await authenticated("/authenticated", accessToken);
        if (res && parseInt(res.status) === 200 && res.data && res.data.checked === true) {
          console.log("checkedAuthUser = ", res);
          dispatch(userSlice.actions.setUser(res.data.user));
        } else {
          auth_service.clearStorage();
          navigate(`/${PATH_NAME.ADMIN_LOGIN}`);
          return;
        }
      } catch (err: any) {
        auth_service.clearStorage();
        navigate(`/${PATH_NAME.ADMIN_LOGIN}`);
        return;
      }
    }
    checkedAuthUser();
  }, []);

  const handleLogout = async () => {
    const accessToken: string = auth_service.getAccessToken();
    const res: any = await logout("/logout", accessToken);
    let msg: Array<string> | [] = new Array(0);
    if (res && parseInt(res.status) === 200 && res.data && res.data.checked === true) {
      msg = res.data.msg;
      auth_service.clearStorage();
      dispatch(notifySlice.actions.showNotify({ type: NOTIFY_NAME.NOTI_TYPE_SUCCESS, msg }));
      navigate(`/${PATH_NAME.ADMIN_LOGIN}`);
    } else {
      msg = res.data.msg;
      dispatch(notifySlice.actions.showNotify({ type: NOTIFY_NAME.NOTI_TYPE_DANGER, msg }));
    }
  };
  return <Outlet />;
};

export default AdminMaster;
