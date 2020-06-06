import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

import { Label } from '../../';
import Xml2JsUtils from '../../../utils/xml2js-utils';
import Book from './Book';
import css from './GoodReads.style';

class GoodReads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading: true
    };
  }

  componentDidMount() {
    const { limit, shelf, sort } = this.props;
    const {
      REACT_APP_GOODREADS_USER_ID: userId,
      REACT_APP_GOODREADS_API_KEY: apiKey
    } = process.env;

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/${userId}?key=${apiKey}&per_page=${limit ||
          10}&shelf=${shelf}&sort=${sort || "date_read"}`
      )
      .then(res => {
        const books = Xml2JsUtils.parse(res.data).GoodreadsResponse.books.book;
        this.setState({
          books: Array.isArray(books) ? books : [books],
          loading: false
        });
      });
  }

  render() {
    const { name, className } = this.props;
    const { books, loading } = this.state;
    return (
      <div className={className}>
        <Label>{name}</Label>
        <div>
          {books && books.map(book => <Book key={book.id} book={book} />)}
          {loading && <p>Loading...</p>}
        </div>
      </div>
    );
  }
}

export default styled(GoodReads)`
  ${css}
`;
