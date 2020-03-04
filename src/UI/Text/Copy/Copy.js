import React from "react";
import styled from "styled-components";
import { Text } from "../../";
import css from "./Copy.style";

const Copy = ({ className, title, children }) => (
  <div className={className}>
    {title && <Text.Label>{title}</Text.Label>}
    <p>{children}</p>
  </div>
);

export default styled(Copy)`
  ${css}
`;
