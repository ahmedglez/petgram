import React, { useState } from "react";
import useInputValue from "../../hooks/useInputValue";


const UserForm = ({ onSubmit }) => {
  const email = useInputValue("");
  const password = useInputValue("");
  return (
    <form onSubmit={onSubmit}>
      <input type="email" placeholder="email" {...email} />
      <input type="password" placeholder="password" {...password} />
      <button>Iniciar Sesion</button>
    </form>
  );
};

export default UserForm;
