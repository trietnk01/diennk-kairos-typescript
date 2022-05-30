import { login } from "apis/user.api";
import { NOTIFY_NAME, PATH_NAME } from "configs";
import { useAppDispatch } from "hooks";
import IUser from "models/IUser";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth_service from "services/authService";
import notifySlice from "slices/notifySlice";
import { red } from "@mui/material/colors";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();
  async function onSubmit({ email, password }: IUser) {
    let msg: Array<string> = new Array<string>(0);
    let typeNotify: string | null = "";
    const bodyData: IUser = { email, password };
    const res: any = await login("/login", bodyData);
    if (res && parseInt(res.status) === 200 && res.data && res.data.checked === true) {
      const accessToken = res.data.token;
      auth_service.setAccessToken(accessToken);
      typeNotify = NOTIFY_NAME.NOTI_TYPE_SUCCESS;
      navigate(`/${PATH_NAME.ADMIN_MASTER}/${PATH_NAME.ADMIN_USER_INFO}`);
    } else {
      typeNotify = NOTIFY_NAME.NOTI_TYPE_DANGER;
    }
    msg = res.data.msg;
    dispatch(notifySlice.actions.showNotify({ type: typeNotify, msg }));
  }
  return (
    <section className="sectionLogin" style={{ width: "100vw", height: "100vh", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="xForm" style={{ borderRadius: "5px", width: "320px", height: "480px", backgroundColor: "rgba(255, 255, 255, 0.1)", boxShadow: "0 5px 35px rgba(0, 0, 0, 0.2)", display: "flex", alignItems: "center", padding: "0 10px" }}>
        <div className="frmContent" style={{ position: "relative", width: "100%" }}>
          <h1 style={{ marginBottom: "4px", textAlign: "center", fontSize: "30px" }}>Login</h1>
          <form className="frmLogin" onSubmit={handleSubmit(onSubmit)}>
            <div style={{ marginBottom: "2px" }}>
              <div style={{ position: "relative" }}>
                <input type="text" className="txtInput" {...register("email", { required: true })} />
                <MailOutlineIcon className="iconLogin"></MailOutlineIcon>
              </div>
              {errors.email && <span style={{ color: red[400] }}>Email is required</span>}
            </div>
            <div style={{ marginBottom: "2px" }}>
              <div style={{ position: "relative" }}>
                <input type="password" className="txtInput" {...register("password", { required: true })} />
                <KeyOutlinedIcon className="iconLogin"></KeyOutlinedIcon>
              </div>
              {errors.password && <span style={{ color: red[400] }}>Password is required</span>}
            </div>
            <div style={{ position: "relative", marginBottom: "2px", display: "flex", justifyContent: "center" }}>
              <button type="submit" name="btn_login" className="btnLogin">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
