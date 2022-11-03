import React, { useContext } from "react";
import UserForm from "../components/UserForm";
import AppContext from "../context/AppContext";

const NotRegisteredUser = () => {
  const { activeAuth } = useContext(AppContext);
  return (
    <>
      <UserForm
        title="Inicia sesión con tu cuenta de Petgram y disfruta de miles de fotos de tus mascotas favoritas."
        onSubmit={activeAuth}
      />
    </>
  );
};

export default NotRegisteredUser;
