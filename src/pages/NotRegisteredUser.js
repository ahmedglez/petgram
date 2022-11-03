import React, { useContext } from "react";
import UserForm from "../components/UserForm";
import AppContext from "../context/AppContext";
import { useRegisterMutation } from "../container/RegisterMutation";

const NotRegisteredUser = () => {
  const { registerMutation } = useRegisterMutation();
  const { activateAuth } = useContext(AppContext);
  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    registerMutation({ variables }).then(activateAuth);
  };
  return (
    <>
      <UserForm onSubmit={onSubmit} title="Registrarse" />
    </>
  );
};

export default NotRegisteredUser;
