import React from 'react';
import styled from 'styled-components';

import css from './Banner.style';

/*
  Banner

  Props:
    * overlay
    * children
    * image
*/
const Banner = ({ className, overlay, children }) => (
  <div className={className}>
    {overlay && <div className="overlay" />}
    <div className="content centered">{children}</div>
  </div>
);

export default styled(Banner)`
  ${css}
`;
