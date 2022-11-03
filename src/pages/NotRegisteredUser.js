import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const NotRegisteredUser = () => {
  const { activeAuth } = useContext(AppContext);
  return (
    <form onSubmit={activeAuth}>
      <button>Iniciar Sesion</button>
    </form>
  );
};

export default NotRegisteredUser;
