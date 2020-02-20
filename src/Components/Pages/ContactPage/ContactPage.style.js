import { css } from "styled-components";

export default css`
  form {
    width: 50%;
    margin: 0 auto;
    min-width: 200px;
  }

  form h2 {
    text-align: left;
    margin-bottom: 5px;
  }

  form input {
    width: 50%;
  }
  form a,
  form textarea {
    width: 100%;
  }

  form > div {
    padding: 15px 0;
  }
  form > div:nth-child(1),
  form > div:nth-child(2) {
    display: inline-block;
    width: 50%;
  }
`;
