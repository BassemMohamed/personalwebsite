import React from "react";
import styled from "styled-components";
import css from "./Icon.style";

const Icon = ({ className, name, imageLink }) => (
  <div className={className}>
    {imageLink && <img title={name} alt={name} src={imageLink} />}
    {name && <p>{name}</p>}
  </div>
);

export default styled(Icon)`
  ${css}
`;
