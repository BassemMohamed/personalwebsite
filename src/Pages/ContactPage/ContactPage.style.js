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
    width: 100%;
    margin-bottom: 1rem;
  }

  form a,
  form input,
  form textarea {
    display: block;
    width: calc(100% - 22px);
  }
  form a {
    width: calc(100% - 24px);
  }

  form > div {
    padding: 2.5px 0;
  }
`;
