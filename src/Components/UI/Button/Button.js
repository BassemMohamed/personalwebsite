import React from "react";
import styled from "styled-components";

const ButtonDom = styled.a`
  display: block;
  padding: 10px;
  color: #555;
  transition: 0.5s;
  border: 2px solid #555;
  cursor: pointer;
  :hover {
    color: #fff;
    background-color: #555;
  }
`;

const Button = ({ children, href, newTab }) => (
  <ButtonDom target={newTab ? "_blank" : ""} href={href}>
    {children}
  </ButtonDom>
);
export default Button;
