import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Text } from "../../";
import Book from "./Book";
import Xml2JsUtils from "../../../../utils/xml2js-utils";
import css from "./GoodReads.style";

const USER_ID = "90168658";
const API_KEY = "wBjkuwO0B1xt2PBeh4Kw";
class GoodReads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    const { limit, shelf, sort } = this.props;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/${USER_ID}?key=${API_KEY}&per_page=${limit ||
          10}&shelf=${shelf}&sort=${sort || "date_read"}`
      )
      .then(res => {
        const books = Xml2JsUtils.parse(res.data).GoodreadsResponse.books.book;
        this.setState({
          books: Array.isArray(books) ? books : [books]
        });
      });
  }

  render() {
    const { name, className } = this.props;
    const { books } = this.state;
    return (
      <div className={className}>
        <Text.Label>{name}</Text.Label>
        <div>
          {books && books.map(book => <Book key={book.id} book={book} />)}
        </div>
      </div>
    );
  }
}

export default styled(GoodReads)`
  ${css}
`;
