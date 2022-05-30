import { Box } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useAppDispatch, useAppSelector } from "hooks";
import React, { useEffect } from "react";
import { RootState } from "redux/store";
import notifySlice from "slices/notifySlice";
import { red, yellow, cyan } from "@mui/material/colors";
function Notify() {
  const dispatch = useAppDispatch();
  function handleClose(): void {
    dispatch(notifySlice.actions.hideNotify());
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(notifySlice.actions.hideNotify());
    }, 30000);
    return () => {
      clearTimeout(timeout);
    };
  });
  let alertHtml: React.ReactNode = null;
  const isShow: boolean | undefined = useAppSelector((state: RootState) => state.notifyReducer.isShow);
  const typeNotify: string | undefined | null = useAppSelector((state: RootState) => state.notifyReducer.type);
  const msgNotify: Array<string> | undefined | null = useAppSelector((state: RootState) => state.notifyReducer.msg);
  let elShow: string | null = "";
  let displayNotify: string | null = "hidden";
  if (isShow && Array.isArray(msgNotify) && msgNotify.length > 0) {
    alertHtml = msgNotify.map((item, idx) => {
      return <li key={idx}>{item}</li>;
    });
    elShow = "el-show";
    displayNotify = "flex";
  }
  let bgColor: string | null = "";
  switch (typeNotify) {
    case "danger":
      bgColor = red[400];
      break;
    case "warning":
      bgColor = yellow[400];
      break;
    case "success":
      bgColor = cyan[400];
      break;
  }
  return (
    <Box className={`notify-container ${elShow} ${displayNotify}`} sx={{ backgroundColor: "rgba(0, 0, 0, 0.76)", position: "fixed", top: "0", left: "0", width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center" }}>
      <Box sx={{ width: "400px", position: "relative", padding: "10px 10px", borderRadius: "3px", backgroundColor: bgColor }}>
        <Box sx={{ top: "-15px", right: "-15px", width: "25px", height: "25px", backgroundColor: "#FFFFFF", position: "absolute", borderRadius: "100%" }}>
          <button type="button" name="btnClose" style={{ background: "transparent", border: "0", display: "flex", width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }} onClick={handleClose}>
            <HighlightOffIcon></HighlightOffIcon>
          </button>
        </Box>
        <ul style={{ marginBottom: 0 }}>{alertHtml}</ul>
      </Box>
    </Box>
  );
}

export default Notify;
