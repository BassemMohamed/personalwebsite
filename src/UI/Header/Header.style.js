import { css } from "styled-components";

export default css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  text-align: center;
  padding: 5px 0;
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0px 1px 1px 0px ${props => props.theme.colors.border};
  border-bottom: 3px solid ${props => props.theme.colors.border};

  > div {
    display: inline-flex;
  }

  > div a {
    padding: 0 10px;
    font-size: 1.5em;
    cursor: pointer;
    color: ${({ active, theme }) =>
      active ? "#e69807" : theme.main.colors.main};
  }
  > div a.active {
    color: ${props => props.theme.colors.black};
  }
`;
