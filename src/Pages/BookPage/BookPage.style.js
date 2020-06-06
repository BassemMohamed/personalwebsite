import { css } from 'styled-components';

import { GoodReads } from '../../UI';

export default css`
  padding: 0 3.5rem;

  @media (min-width: 768px) {
    .grid {
      display: grid;
      grid-template-columns: 50% 50%;
    }
  }

  ${GoodReads} {
    padding: 1rem 0;
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }
`;
