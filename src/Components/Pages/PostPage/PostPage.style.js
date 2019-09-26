import { css } from "styled-components";

export default css`
  margin: 0 auto;
  text-align: left;
  max-width: 750px;

  .post_cover {
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1rem 0;
  }

  li,
  p {
    margin-bottom: 0.5rem;
  }

  p > img {
    width: 100%;
    margin: 0.5rem 0;
  }

  img {
    width: 100%;
  }

  pre {
    padding: 0.5rem;
  }
  pre,
  pre code {
    overflow: scroll;
    background-color: antiquewhite;
  }
`;
