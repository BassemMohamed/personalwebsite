import { css } from "styled-components";

export default css`
  padding: 10px;
  display: block;
  transition: 0.5s;
  text-align: left;
  margin-bottom: 0.5rem;
  background: transparent;
  color: ${props => props.theme.colors.main};
  border: 1px solid ${props => props.theme.colors.main};
`;
