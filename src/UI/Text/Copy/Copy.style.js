import { css } from "styled-components";
export default css`
  width: 100%;
  padding-top: ${props => props.paddingTop || "1em"};
  padding-bottom: ${props => props.paddingBottom || "1em"};
  margin-top: ${props => props.marginTop || "1em"};
  margin-bottom: ${props => props.marginBottom || "1em"};

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    margin: 0 auto;
    max-width: 750px;
  }
`;
