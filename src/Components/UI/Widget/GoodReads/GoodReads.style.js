import { css } from "styled-components";

export default css`
  @media (min-width: 425px) {
    > div {
      display: grid;
      grid-gap: 15px;
      grid-template-columns: repeat(auto-fill, 200px);
    }
  }
`;
