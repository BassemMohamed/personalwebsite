import React from "react";
import styled from "styled-components";
import css from "./Book.style";

const Book = ({ book, className }) => {
  return (
    <div className={className} title={book.title}>
      <a href={book.link} target="_blank" rel="noopener noreferrer">
        <img alt={book.title} src={book.image_url} />
      </a>
    </div>
  );
};

export default styled(Book)`
  ${css}
`;
