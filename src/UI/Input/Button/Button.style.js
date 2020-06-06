import { css } from "styled-components";

export default css`
  width: 100%;
  padding: 10px;
  display: block;
  cursor: pointer;
  transition: 0.5s;
  margin-bottom: 1em;
  color: ${props => props.theme.colors.main};
  border: 2px solid ${props => props.theme.colors.main};

  :hover {
    color: ${props => props.theme.colors.accent};
    background-color: ${props => props.theme.colors.main};
  }
`;
