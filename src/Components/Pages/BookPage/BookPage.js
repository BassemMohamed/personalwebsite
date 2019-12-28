import React from "react";
import styled from "styled-components";
import { Widget } from "../../UI";
import css from "./BookPage.style";

class BookPage extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <section className={className}>
        <div className="grid">
          <Widget.GoodReads shelf="currently-reading" />
          <Widget.GoodReads shelf="favorites" />
        </div>
        <Widget.GoodReads shelf="read" />
      </section>
    );
  }
}

export default styled(BookPage)`
  ${css}
`;
