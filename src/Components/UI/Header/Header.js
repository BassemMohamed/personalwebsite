import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MainRoutes from "../../../Routes/MainRoutes";

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

  > div a {
    padding: 0 10px;
    font-size: 1.5em;
    cursor: pointer;
    color: ${({ active }) => (active ? "#e69807" : "#555")};
  }
  > div a.active {
    color: #e69807;
  }
`;

const Header = props => {
  return (
    <HeaderDom>
      <div>
        {MainRoutes.map(route => (
          <Link key={route.key} to={route.key}>
            {route.name}
          </Link>
        ))}
      </div>
    </HeaderDom>
  );
};

export default Header;
