import { css } from "styled-components";
import { Widget } from "../../UI";

export default css`
  padding: 0 3.5rem;

  @media (min-width: 768px) {
    .grid {
      display: grid;
      grid-template-columns: 50% 50%;
    }
  }

  ${Widget.GoodReads} {
    padding: 1rem 0;
    border-bottom: 1px solid #eee;
  }
`;
