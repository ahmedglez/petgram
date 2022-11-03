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
  LogoSkeleton,
} from "./styles";

const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue("");
  const password = useInputValue("");
  /* wait until dogIcon is loaded */
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const img = new Image();
    img.src = dogIcon;
    img.onload = () => setLoading(false);
  }, []);
  return (
    <Fragment>
      <Form onSubmit={onSubmit}>
        {loading ? <LogoSkeleton /> : <Logo src={dogIcon} alt="Petgram" />}
        <Title>{title}</Title>
        <Input type="email" placeholder="Email" {...email} />
        <Input type="password" placeholder="Password" {...password} />
        <Button>Iniciar Sesión</Button>
        <P>
          No tienes una cuenta?
          <Link to="/signup"> Regístrate</Link>
        </P>
      </Form>
    </Fragment>
  );
};

export default UserForm;
