import loadingAction from "actions/loadingAction";
import notifyAction from "actions/notifyAction";
import userAction from "actions/userAction";
import axios from "axios";
import { END_POINT, NOTIFY_NAME, PATH_NAME } from "configs";
import { useAppDispatch } from "hooks";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface LoginInput {
  username: string;
  password: string;
}
function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();
  function onSubmit({ username, password }: LoginInput) {
    let msg = new Array(0);
    let typeNotify = "";
    dispatch(loadingAction().showLoading());
    axios({
      method: "GET",
      url: "https://6164054db55edc00175c1cc9.mockapi.io/v1/auth/1",
      timeout: END_POINT.TIME_OUT,
    })
      .then(function (res: any) {
        if (res && parseInt(res.status) === 200 && res.data && res.data.username) {
          let checkedUserNamePassword: boolean = true;
          if (username !== res.data.username) {
            checkedUserNamePassword = false;
            msg.push(NOTIFY_NAME.NOTI_WRONG_USERNAME);
            typeNotify = NOTIFY_NAME.NOTI_TYPE_WARNING;
          }
          if (password !== res.data.password) {
            checkedUserNamePassword = false;
            msg.push(NOTIFY_NAME.NOTI_WRONG_PASSWORD);
            typeNotify = NOTIFY_NAME.NOTI_TYPE_WARNING;
          }
          if (checkedUserNamePassword) {
            dispatch(
              userAction().login({
                ...res.data,
                expiry: Date.now(),
              })
            );
            navigate(`/${PATH_NAME.ADMIN_MASTER}/${PATH_NAME.ADMIN_USER_INFO}`);
          }
        } else {
          msg.push(NOTIFY_NAME.NOTI_LOGIN_FAIL);
          typeNotify = NOTIFY_NAME.NOTI_TYPE_DANGER;
        }
        dispatch(loadingAction().hideLoading());
        dispatch(
          notifyAction().showNotify({
            type: typeNotify,
            msg,
          })
        );
      })
      .catch(function (err) {
        dispatch(
          notifyAction().showNotify({
            type: NOTIFY_NAME.NOTI_TYPE_DANGER,
            msg: err.message,
          })
        );
        dispatch(loadingAction().hideLoading());
      });
  }
  return (
    <section className="sectionLogin h-screen text-base text-white">
      <div className="xForm absolute rounded px-10 top-1/2 left-1/2 flex items-center">
        <div className="frmContent relative w-full">
          <h1 className="mb-4 text-center text-4xl">Login</h1>
          <form className="frmLogin" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-2">
              <div>
                <input type="text" className="txtInput font-light outline-0 border-0 rounded px-2.5 py-2.5 w-full bg-transparent" {...register("username", { required: true })} />
                <i className="iconLogin absolute fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              {errors.username && <span className="text-red-500">Username is required</span>}
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
