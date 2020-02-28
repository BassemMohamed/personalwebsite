import { css } from "styled-components";

export default css`
  width: 150px;
  margin: 0 auto;

  @media (min-width: 425px) {
    width: 200px;
  }

  img {
    width: 100%;
    height: auto;
  }
`;
