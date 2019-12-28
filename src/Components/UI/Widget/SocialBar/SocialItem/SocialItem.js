import React from "react";
import styled from "styled-components";

const SocialItem = styled.a`
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

const SocialBar = ({ title, href, fontAwesomeClass }) => (
  <SocialItem
    title={title}
    target="_blank"
    rel="noreferrer noopener"
    href={href}
  >
    <i className={fontAwesomeClass} />
  </SocialItem>
);

export default SocialBar;
