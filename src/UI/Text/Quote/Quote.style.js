import { css } from "styled-components";

const AlignLeftStyle = theme => `
    padding: 10px 0 10px 10px;
    border-left: 5px solid ${theme.colors.main};
    p, h6 {
        text-align: left;
    }
`;
const AlignRightStyle = theme => `
    padding: 10px 10px 10px 0;
    border-right: 5px solid ${theme.colors.main};
    p, h6 {
        text-align: right;
    }
`;

export default css`
  width: calc(100% - 15px);
  margin: 25px 0;
  p,
  h6 {
    color: ${props => props.theme.colors.main};
  }

  p {
    margin-bottom: 10px;
    font-size: 1.375rem;
    font-family: ${props => props.theme.fonts.light};
  }
  h6 {
    opacity: 150%;
    font-size: 1.3rem;
    font-family: ${props => props.theme.fonts.italic};
  }

  ${props =>
    props.align === "left"
      ? AlignLeftStyle(props.theme)
      : AlignRightStyle(props.theme)}
`;
