import React from "react";
import styled from "styled-components";

const LabelDom = styled.h2`
  font-size: 1.375rem;
`;

const Label = ({ children }) => <LabelDom>{children}</LabelDom>;
export default Label;
