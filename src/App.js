import React, { Fragment } from "react";
import { CategoriesList } from "./components/CategoriesList";
import { GlobalStyles } from "./styles/GlobalStyles";
import Logo from "./components/Logo";
import Feed from "./container/Feed";
import PhotoDetails from "./container/PhotoDetails";

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
        <Fragment>
          <CategoriesList />
          <Feed />
        </Fragment>
      )}
    </Fragment>
  );
};

export default App;
