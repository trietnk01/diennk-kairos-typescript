import "assets/tailwind.css";
import CssBaseline from "@mui/material/CssBaseline";
import LoadingSpinner from "components/LoadingSpinner";
import Notify from "components/Notify";
import React, { Fragment } from "react";
import RoutesMain from "RoutesMain";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <RoutesMain></RoutesMain>
      <LoadingSpinner />
      <Notify />
    </Fragment>
  );
}

export default App;
