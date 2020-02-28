import React from "react";
import styled from "styled-components";
import css from "./Button.style";

const Button = props => {
  const { className, children, href, onClick, newTab } = props;

  return (
    <button
      className={className}
      target={newTab ? "_blank" : ""}
      href={href}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
export default styled(Button)`
  ${css}
`;
