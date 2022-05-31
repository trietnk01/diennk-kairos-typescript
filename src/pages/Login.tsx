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
import { makeStyles } from "@mui/material";
const useStyles = makeStyles({
  sectionLogin: {
    width: "100vw",
    height: "100vh",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    /* backgroundImage:  linear-gradient(-30deg, #03a9f4 0%, #3a78b7 50%, #262626 50%, #607d8b 100%) */
  },
});
function Login() {
  const classes = useStyles();
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
  return <section className={classes.sectionLogin}></section>;
}

export default Login;
