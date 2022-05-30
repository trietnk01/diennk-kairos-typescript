import { loginUser } from "apis/user.api";
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
    const msg: Array<string> | null = [];
    let typeNotify: string | null = "";
    try {
      const bodyData: IUser = { email, password };
      const res: any = await loginUser("/user/login", bodyData);
      if (res && res.data && res.data.isSucess === true && res.data.token) {
        const accessToken = res.data.token;
        auth_service.setAccessToken(accessToken);
        msg.push("Login successfully");
        typeNotify = NOTIFY_NAME.NOTI_TYPE_SUCCESS;
        navigate(`/${PATH_NAME.ADMIN_MASTER}/${PATH_NAME.ADMIN_USER_INFO}`);
      } else {
        msg.push(NOTIFY_NAME.NOTI_LOGIN_FAIL);
        typeNotify = NOTIFY_NAME.NOTI_TYPE_DANGER;
      }
      dispatch(notifySlice.actions.showNotify({ type: typeNotify, msg }));
    } catch (err: any) {
      dispatch(
        notifySlice.actions.showNotify({
          type: NOTIFY_NAME.NOTI_TYPE_DANGER,
          msg: err.message,
        })
      );
    }
  }
  return (
    <section className="sectionLogin h-screen text-base text-white">
      <div className="xForm absolute rounded px-10 top-1/2 left-1/2 flex items-center">
        <div className="frmContent relative w-full">
          <h1 className="mb-4 text-center text-4xl">Login</h1>
          <form className="frmLogin" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-2">
              <div>
                <input type="text" className="txtInput font-light outline-0 border-0 rounded px-2.5 py-2.5 w-full bg-transparent" {...register("email", { required: true })} />
                <i className="iconLogin absolute fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              {errors.email && <span className="text-red-500">email is required</span>}
            </div>
            <div className="relative mb-2">
              <div>
                <input type="password" className="txtInput font-light outline-0 border-0 rounded px-2.5 py-2.5 w-full bg-transparent" {...register("password", { required: true })} />
                <i className="iconLogin absolute fa fa-key" aria-hidden="true"></i>
              </div>
              {errors.password && <span className="text-red-500">Password is required</span>}
            </div>
            <div className="relative mb-2 flex justify-center">
              <button type="submit" name="btn_login" className="btnLogin font-semibold relative flex items-center justify-center overflow-hidden">
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
