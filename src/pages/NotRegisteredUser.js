import React, { useContext } from "react";
import UserForm from "../components/UserForm";
import AppContext from "../context/AppContext";

const NotRegisteredUser = () => {
  const { activeAuth } = useContext(AppContext);
  return <UserForm onSubmit={activeAuth} />;
};

export default NotRegisteredUser;
