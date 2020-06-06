import { css } from 'styled-components';

export default css`
  padding: 2em 1em 1em;
  position: relative;
  border-left: 2px solid ${props => props.theme.colors.main};

  &::before {
    top: 1em;
    left: 2em;
    display: block;
    position: absolute;
    font-size: 0.785rem;
    ${props => props.theme.fonts.extraLight}
    content: "${({ date }) => date}";
    color: ${props => props.theme.colors.main};
  }

  &::after {
    content: "";
    top: 0.9em;
    left: -8px;
    width: 10px;
    height: 10px;
    display: block;
    background: ${props => props.theme.colors.white};
    position: absolute;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.colors.main};
  }
`;
