import React from "react";
import styled from "styled-components";
import { Widget } from "../../UI";
import css from "./BookPage.style";

class BookPage extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <section className={className}>
        <Widget.GoodReads name="read" shelf="read" />
        <Widget.GoodReads name="Favorites" shelf="favorites" />
        <Widget.GoodReads name="Currently Reading" shelf="currently-reading" />
      </section>
    );
  }
}

export default styled(BookPage)`
  ${css}
`;
