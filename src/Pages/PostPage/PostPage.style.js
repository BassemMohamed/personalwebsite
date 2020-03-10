import { css } from "styled-components";

export default css`
  margin: 0 auto;
  text-align: left;
  max-width: 750px;

  img {
    width: 100%;
    height: auto;
  }

  .post_cover {
    border-bottom: 1px solid ${props => props.theme.colors.main};
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }

  .post_body {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 2rem 0 1rem 0;
    }

    li,
    p {
      margin-bottom: 0.8rem;
    }

    li,
    td,
    th,
    p {
      line-height: 150%;
    }

    p > img {
      width: 100%;
      margin: 0.5rem 0;
    }

    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1rem 0;
    }

    table,
    th,
    td {
      border: 1px solid ${props => props.theme.colors.main};
    }

    th,
    td {
      padding: 0.25rem;
    }

    pre {
      padding: 0.5rem;
    }

    pre,
    pre code {
      overflow: scroll;
      background-color: ${props => props.theme.colors.border};
    }
  }
`;
