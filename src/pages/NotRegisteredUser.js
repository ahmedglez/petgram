import React, { useContext } from "react";
import UserForm from "../components/UserForm";
import AppContext from "../context/AppContext";
import { useRegisterMutation } from "../container/RegisterMutation";
import {Spinner, Error} from '../components/UserForm/styles'

const NotRegisteredUser = () => {
  const { registerMutation } = useRegisterMutation();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { activateAuth } = useContext(AppContext);

  const onSubmit = ({ email, password }) => {
    setLoading(true);
    const input = { email, password };
    const variables = { input };
    registerMutation({ variables })
      .then(({ data }) => {
        const { signup } = data;
        console.log(
          "🚀 ~ file: NotRegisteredUser.js ~ line 14 ~ registerMutation ~ data",
          data
        );
        activateAuth(signup);
        setLoading(false);
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: NotRegisteredUser.js ~ line 14 ~ registerMutation ~ error",
          error
        );
        setError(error);
        setLoading(false);
      });
  };
  return (
    <>
      <UserForm onSubmit={onSubmit} loadingAuth={loading} title="Registrarse" />
      {error && <Error>{error.message}</Error>}
    </>
  );
};

export default NotRegisteredUser;
