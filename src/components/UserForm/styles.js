import styled from "styled-components";

export const Form = styled.form`
  width: 95%;
  padding: 25px 0 !important;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px 4px;
  margin-bottom: 8px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  &[disabled] {
    opacity: 0.3;
  }
  &:focus {
    border-color: #ff0000;
    outline: none;
  }
  &[type="password"] {
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 8px 4px;
  background: #ff9fb2;
  border-radius: 5px;
  color: #141210;
  text-align: center;
  cursor: pointer;
  border: none;
  &[disabled] {
    opacity: 0.3;
  }
  font-weight: bold;
  &:hover {
    background: #ff9fb2;
  }
`;

export const Title = styled.h2`
  font-size: 0.8em;
  font-weight: 500;
  padding: 15px 0;
`;

export const Link = styled.a`
  color: #ff9fb2;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const P = styled.p`
  font-size: 0.9em;
  font-weight: 500;
  padding: 8px 0;
  text-align: center;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 225px;
  max-height: 180px;
  margin: 0 auto;
  display: block;
  background-position: center;
  background-size: contain;
  object-fit: cover;
  -webkit-transform: scale(1.4);
  transform: scale(1.4);
`;

export const LogoSkeleton = styled.div`
  width: 100%;
  max-width: 225px;
  max-height: 180px;
  margin: 0 auto;
  display: block;
  background-position: center;
  background-size: contain;
  object-fit: cover;
  -webkit-transform: scale(1.4);
  transform: scale(1.4);
  background-color: #e0e0e0;
`;
