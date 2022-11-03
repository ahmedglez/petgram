import { useState } from "react";

const useInitialState = () => {
  const [isAuth, setIsAuth] = useState(false);

  const activeAuth = () => {
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
    activeAuth,
    inactiveAuth,
    toogleAuth,
  };
};

export default useInitialState;
