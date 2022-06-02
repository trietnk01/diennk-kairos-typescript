import { CircularProgress } from "@mui/material";
import { useAppSelector } from "hooks";
import React from "react";
import { RootState } from "redux/store";

function LoadingSpinner() {
  const isShow: boolean | undefined = useAppSelector((state: RootState) => state.loadingReducer.isShow);
  return <React.Fragment>{isShow && <div style={{ position: "fixed", display: "flex", left: "0", top: "0", backgroundColor: "rgb(0 0 0 / 77%)", width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center" }}><CircularProgress /></div>}</React.Fragment>;
}

export default LoadingSpinner;
