import React, { Fragment } from "react";
import useInputValue from "../../hooks/useInputValue";
import dogIcon from "../../assets/login.svg";
import {
  Form,
  Input,
  Button,
  Title,
  Link,
  P,
  Logo,
  Spinner,
  Error,
} from "./styles";

const UserForm = ({ onSubmit, title, loadingAuth }) => {
  const email = useInputValue("");
  const password = useInputValue("");
  /* wait until dogIcon is loaded */
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const img = new Image();
    img.src = dogIcon;
    img.onload = () => setLoading(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <Fragment>
      {loading ? null : (
        <Form onSubmit={handleSubmit} disabled={loadingAuth}>
          <Logo src={dogIcon} alt="Petgram" />
          <Title>{title}</Title>
          <Input
            type="email"
            placeholder="Email"
            {...email}
            disabled={loadingAuth}
          />
          <Input
            type="password"
            placeholder="Password"
            {...password}
            disabled={loadingAuth}
          />
          <Button disabled={loadingAuth}>Iniciar Sesión</Button>
          <P>
            No tienes una cuenta?
            <Link to="/signup"> Regístrate</Link>
          </P>
        </Form>
      )}
    </Fragment>
  );
};

export default UserForm;
