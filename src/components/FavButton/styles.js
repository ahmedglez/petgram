import styled from "styled-components";



const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  &[aria-pressed="true"] {
    opacity: 0.5;
  }
  cursor: pointer;
  background: transparent;
  border: 0;
  color: #888;
  outline: 0;
  & svg {
    margin-right: 4px;
    font-size: 2em;
    color: #CE7B91;
  }
  margin-left: 5%;
`;

export { Button };
