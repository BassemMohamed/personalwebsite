import React from "react";
import styled from "styled-components";
import { GoodreadsBookshelf } from "react-goodreads-shelf";
import { Text } from "../../";
import css from "./GoodReads.style";

const label = {
  "currently-reading": "Currently Reading",
  favorites: "Favorites",
  read: "Read"
};

const GoodReads = ({ className, shelf }) => {
  return (
    <div className={className}>
      <Text.Label>{label[shelf]}</Text.Label>

      <GoodreadsBookshelf
        shelf={shelf}
        userId={"90168658"}
        apiKey={"wBjkuwO0B1xt2PBeh4Kw"}
      />
    </div>
  );
};

export default styled(GoodReads)`
  ${css}
`;
