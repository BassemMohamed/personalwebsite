import { css } from "styled-components";

export default css`
  height: calc(100vh - 7rem);
  position: relative;

  form {
    top: 50%;
    left: 50%;
    width: 50%;
    min-width: 200px;
    max-width: 700px;
    position: absolute;
    transform: translate(-50%, -50%);
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
