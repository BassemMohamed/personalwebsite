import React from 'react';
import styled from 'styled-components';

import css from './Button.style';

const Button = (props) => {
  const { className, children, href, onClick, newTab } = props;

  return (
    <a
      className={className}
      target={newTab ? "_blank" : ""}
      onClick={onClick}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
};
export default styled(Button)`
  ${css}
`;
