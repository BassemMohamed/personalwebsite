import { css } from "styled-components";

export default css`
  padding: 10px;
  margin: 10px;
  border: 1px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.white};
  img {
    width: 100px;
    height: auto;
  }
  p {
    font-family: "Aleo Bold";
  }

  :hover {
    background-color: ${props => props.theme.colors.background};
  }
`;
