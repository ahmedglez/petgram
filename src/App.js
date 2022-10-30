import React, { Fragment } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Logo from "./components/Logo";
import PhotoDetails from "./container/PhotoDetails";
import Home from "./pages/Home";
import { Router } from "@reach/router";

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  return (
    <Fragment>
      <GlobalStyles />
      <Logo />
      {detailId ? (
        <PhotoDetails id={detailId} />
      ) : (
        <Router>
            <Home path="/" />
            <Home path="/pet/:id" />
        </Router>
      )}
    </Fragment>
  );
};

export default App;
