import "assets/tailwind.css";
import LoadingSpinner from "components/LoadingSpinner";
import Notify from "components/Notify";
import { END_POINT } from "configs";
import { useAppDispatch } from "hooks";
import IUser from "models/IUser";
import React, { Fragment } from "react";
import RoutesMain from "RoutesMain";
import userSlice from "slices/userSlice";

function App() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    const userJson: string | null = localStorage.getItem(END_POINT.USER_LOGIN);
    let userInfo: IUser | null = null;
    if (userJson) {
      userInfo = JSON.parse(userJson);
      if (userInfo) {
        const expiryV1: number = userInfo.expiry;
        const expiryV2: number = Date.now();
        const remainedMilisecond = expiryV2 - expiryV1;
        if (remainedMilisecond > 1 * 1440 * 1000) {
          dispatch(userSlice.actions.logout());
        } else {
          dispatch(userSlice.actions.login({ ...userInfo, expiry: Date.now() }));
        }
      }
    }
  }, []);
  return (
    <Fragment>
      <RoutesMain></RoutesMain>
      <Notify />
      <LoadingSpinner />
    </Fragment>
  );
}

export default App;
