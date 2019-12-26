import React from "react";
import styled from "styled-components";
import css from "./Button.style";

const Button = ({ className, children, href, onClick, newTab }) => (
  <a
    className={className}
    target={newTab ? "_blank" : ""}
    href={href}
    onClick={onClick}
  >
    {children}
  </a>
);
export default styled(Button)`
  ${css}
`;
