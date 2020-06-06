import React from "react";
import styled from "styled-components";
import css from "./Quote.style";

const Quote = ({ className, children, author, authorPage, align }) => (
  <div className={className + ` align-${align}`}>
    <p>{children}</p>
    <a href={authorPage} target="_blank" rel="noopener noreferrer">
      <h6>{author}</h6>
    </a>
  </div>
);

export default styled(Quote)`
  ${css}
`;
