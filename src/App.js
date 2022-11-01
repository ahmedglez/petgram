import React, { Fragment } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Logo from "./components/Logo";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Logo />

      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
      <NavBar />
    </Fragment>
  );
};

export default App;
