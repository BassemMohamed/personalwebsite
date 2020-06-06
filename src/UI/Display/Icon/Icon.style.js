import { css } from 'styled-components';

import { ICON_SIZES } from './Icon';

export default css`
  i {
    /* Default styling */
    font-size: 16px;
    color: ${(props) => props.theme.colors.primary["300"]};

    /* Custom styling */
    color: ${(props) => props.color};
    cursor: ${(props) => (props.onClick ? "pointer" : "default")};
    ${(props) => (props.size === ICON_SIZES.MEDIUM ? "font-size: 24px;" : "")}
    ${(props) => (props.size === ICON_SIZES.LARGE ? "font-size: 30px;" : "")}
  }

  :hover {
    opacity: 0.7;
  }
`;
