import React from "react";
import styled from "styled-components";

const AlignLeftStyle = `
    padding: 10px 0 10px 10px;
    border-left: 5px solid #999;
    p, h6 {
        text-align: left;
    }
`;
const AlignRightStyle = `
    padding: 10px 10px 10px 0;
    border-right: 5px solid #999;
    p, h6 {
        text-align: right;
    }
`;

const QuoteDom = styled.div`
  ${({ align }) => (align === "right" ? AlignRightStyle : AlignLeftStyle)}
  width: 100%;
  margin: 25px 0;
  p {
    color: #555;
    margin-bottom: 10px;
    font-size: 1.375rem;
    font-family: "Aleo Light";
  }
  h6 {
    color: #777;
    font-size: 1.3rem;
    font-family: "Aleo Italic";
  }
`;

const Quote = ({ children, author, align }) => (
  <QuoteDom align={align}>
    <p>{children}</p>
    <h6>{author}</h6>
  </QuoteDom>
);
export default Quote;
