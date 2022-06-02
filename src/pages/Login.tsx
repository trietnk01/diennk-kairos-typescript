import { login } from "apis/user.api";
import { NOTIFY_NAME, PATH_NAME } from "configs";
import { useAppDispatch } from "hooks";
import IUser from "models/IUser";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth_service from "services/authService";
import notifySlice from "slices/notifySlice";

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
      navigate(`/${PATH_NAME.ADMIN_MASTER}/${PATH_NAME.ADMIN_HOME}`);
    } else {
      typeNotify = NOTIFY_NAME.NOTI_TYPE_DANGER;
    }
    msg = res.data.msg;
    dispatch(notifySlice.actions.showNotify({ type: typeNotify, msg }));
  }
  return (
    <section className="sectionLogin" style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="xForm" style={{ position: "relative", width: "320px", height: "480px", background: "rgba(255, 255, 255, 0.1)", boxShadow: "0 5px 35px rgba(0, 0, 0, 0.2)", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ color: "#FFF", marginBottom: "20px" }}>Login</h1>
        <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }} onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: "10px" }}>
            <div style={{ position: "relative" }}>
              <input type="text" placeholder="Email" style={{ boxShadow: "inset 0 0 25px rgba(0, 0, 0, 0.2)", outline: "0", border: "0", borderRadius: "5px", padding: "10px 10px", width: "100%", background: "transparent", color: "#FFF" }} {...register("email", { required: true })} />
            </div>
            {errors.email && <span style={{ color: "red" }}>Email is required</span>}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <div style={{ position: "relative" }}>
              <input type="password" placeholder="Password" style={{ boxShadow: "inset 0 0 25px rgba(0, 0, 0, 0.2)", outline: "0", border: "0", borderRadius: "5px", padding: "10px 10px", width: "100%", background: "transparent", color: "#FFF" }} {...register("password", { required: true })} />
            </div>
            {errors.email && <span style={{ color: "red" }}>Password is required</span>}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" name="btnLogin" className="btnLogin" style={{ color: "#FFF", fontWeight: "600", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", width: "130px", height: "40px", background: "rgba(255, 255, 255, 0.05)", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", letterSpacing: "2px", transition: "0.5s", cursor: "pointer" }}>
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
