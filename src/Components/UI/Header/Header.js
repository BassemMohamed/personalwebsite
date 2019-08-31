import React from "react";
import styled from "styled-components";

const HeaderDom = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 5px 0;
  background-color: #f5f5f5;
  box-shadow: 0px 1px 1px 0px #eee;
  border-bottom: 3px solid #eee;

  > div {
    display: inline-flex;
  }
`;

const HeaderItem = styled.h6`
  padding: 0 10px;
  font-size: 1.5em;
  cursor: pointer;
  color: ${({ active }) => (active ? "#e69807" : "#555")};
`;

const Header = ({ PageControls }) => {
  return (
    <HeaderDom>
      <div>
        {PageControls.pages.map((page, i) => (
          <HeaderItem
            key={i}
            active={PageControls.currentPage === page}
            onClick={() => {
              PageControls.navigate(page);
            }}
          >
            {page}
          </HeaderItem>
        ))}
      </div>
    </HeaderDom>
  );
};

export default Header;
