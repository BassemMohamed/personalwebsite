import React from "react";
import styled from "styled-components";
import css from "./TextField.style";

const TextField = props => {
  const { className, children } = props;
  return (
    <input className={className} type="text" {...props}>
      {children}
    </input>
  );
};
export default styled(TextField)`
  ${css}
`;
