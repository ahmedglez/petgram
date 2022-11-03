import { useState } from "react";

const useInitialState = () => {
  const [isAuth, setIsAuth] = useState(false);

  const activateAuth = () => {
    setIsAuth(true);
  };

  const inactiveAuth = () => {
    setIsAuth(false);
  };

  const toogleAuth = () => {
    setIsAuth(!isAuth);
  };

  return {
    isAuth,
    activateAuth,
    inactiveAuth,
    toogleAuth,
  };
};

export default useInitialState;
