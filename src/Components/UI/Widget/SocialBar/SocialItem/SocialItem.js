import React from "react";
import styled from "styled-components";

const SocialItemStyled = styled.a`
  :hover {
    i {
      opacity: 0.7;
    }
  }
  i {
    font-size: 1.5625rem;
    color: #555;
    padding: 0 5px;
    text-decoration: none;
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
