import React from 'react';
import styled from 'styled-components';

import { GoodReads } from '../../UI';
import css from './BookPage.style';

class BookPage extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <section className={className}>
        <GoodReads name="read" shelf="read" />
        <GoodReads name="Favorites" shelf="favorites" />
        <GoodReads name="Currently Reading" shelf="currently-reading" />
      </section>
    );
  }
}

export default styled(BookPage)`
  ${css}
`;
