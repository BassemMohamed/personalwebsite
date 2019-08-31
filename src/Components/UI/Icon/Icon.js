import React from "react";
import styled from "styled-components";

const IconDom = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid #eee;
  background-color: #fafafa;
  img {
    width: 100px;
    height: auto;
  }
  p {
    font-family: "Aleo Bold";
  }

  :hover {
    background-color: #f5f5f5;
  }
`;

const Icon = ({ name, imageLink }) => (
  <IconDom>
    <img title={name} alt={name} src={imageLink} />
    <p>{name}</p>
  </IconDom>
);
export default Icon;
