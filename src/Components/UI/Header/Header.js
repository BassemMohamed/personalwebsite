import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import css from "./Header.style";

const Header = ({ className, routes }) => {
  return (
    <div className={className}>
      {routes && (
        <div>
          {routes.map(route => (
            <Link key={route.key} to={route.key}>
              {route.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default styled(Header)`
  ${css}
`;
