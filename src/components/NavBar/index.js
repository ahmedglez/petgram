import React from "react";
import { Nav, Link } from "./styles";
import { BiHomeAlt, BiStar, BiUser } from "react-icons/bi";

const SIZE = "30px";
const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <BiHomeAlt size={SIZE} />
      </Link>
      <Link to="/favs">
        <BiStar size={SIZE} />
      </Link>
      <Link to="/user">
        <BiUser size={SIZE} />
      </Link>
    </Nav>
  );
};

export default NavBar;
