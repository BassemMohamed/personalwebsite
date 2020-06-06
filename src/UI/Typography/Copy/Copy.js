import React from 'react';
import styled from 'styled-components';

import { Label } from '../../';
import css from './Copy.style';

const Copy = ({ className, title, children }) => (
  <div className={className}>
    {title && <Label>{title}</Label>}
    <p>{children}</p>
  </div>
);

export default styled(Copy)`
  ${css}
`;
