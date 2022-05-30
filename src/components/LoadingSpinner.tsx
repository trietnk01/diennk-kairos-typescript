import { useAppSelector } from "hooks";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { RootState } from "redux/store";
import { Box } from "@mui/material";

function LoadingSpinner() {
  const isShow: boolean | undefined = useAppSelector((state: RootState) => state.loadingReducer.isShow);
  return (
    <React.Fragment>
      {isShow && (
        <Box sx={{ display: "flex", position: "fixed", left: "0", top: "0", backgroundColor: "#000000db", width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress />
        </Box>
      )}
    </React.Fragment>
  );
}

export default LoadingSpinner;
