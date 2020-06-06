import { css } from 'styled-components';

export default css`
  margin: 0 auto;
  width: 200px;
  display: block;
  padding: 15px 0;
  cursor: pointer;
  line-height:100%;
  text-align: center;
  transition: 1s all;
  border-radius: 15px;
  text-decoration: none;
  ${(props) => props.theme.fonts.cairo.regular}
  box-shadow: 0px 1px 5px ${(props) => props.theme.colors.accent["500"]};
  color: ${(props) => props.theme.colors.neutral["100"]};
  background-color: ${(props) => props.theme.colors.accent["400"]};
  border: 1px solid ${(props) => props.theme.colors.accent["500"]};

  ::selection {
    background: none;
  }

  :active {
    box-shadow: inset 0px 1px 5px ${(props) =>
    props.theme.colors.accent["500"]};
  }

  :hover {
    color: ${(props) => props.theme.colors.primary["500"]};
    background-color: ${(props) => props.theme.colors.accent["200"]};
    border: 1px solid ${(props) => props.theme.colors.accent["500"]};
  }
`;
