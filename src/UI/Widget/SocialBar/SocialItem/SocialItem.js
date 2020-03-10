import React from "react";
import styled from "styled-components";

const SocialItemStyled = styled.a`
  :hover {
    i {
      opacity: 0.7;
    }
  }
  i {
    padding: 0 5px;
    font-size: 1.5625rem;
    text-decoration: none;
    color: ${props => props.theme.colors.main};
  }
`;

const SocialItem = ({ title, href, fontAwesomeClass }) => (
  <SocialItemStyled
    title={title}
    target="_blank"
    rel="noreferrer noopener"
    href={href}
  >
    <i className={fontAwesomeClass} />
  </SocialItemStyled>
);

export default SocialItem;
