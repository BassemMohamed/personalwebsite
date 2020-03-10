import { css } from "styled-components";

export default css`
  padding: 10px;
  display: block;
  text-align: left;
  transition: 0.5s;
  margin-bottom: 1em;
  background: transparent;
  color: ${props => props.theme.colors.main};
  border: 1px solid ${props => props.theme.colors.main};
`;
