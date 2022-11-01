import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";
import { fadeIn } from "../../animations/ImgFadeIn";

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  z-index: 1000;
`;

export const Link = styled(LinkRouter)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: #888;

  &[aria-current] {
    color: #000;
    &:after {
      ${fadeIn({ time: "0.5s" })};
      content: ".";
      position: absolute;
      bottom: 0;
      font-size: 32px;
      line-height: 35px;
    }
  }
`;
