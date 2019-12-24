import React from "react";
import { Link, useLocation } from "react-router-dom";
import { slide as Slide } from "react-burger-menu";
import MainRoutes from "../../../Routes/MainRoutes";

const Menu = () => {
  let location = useLocation();

  return (
    <Slide isOpen={false} pageWrapId={"page-wrapper"}>
      {MainRoutes.map(route => (
        <div
          key={route.key}
          className={location.pathname === route.key ? "active" : ""}
        >
          <Link to={route.key}>
            {route.icon}
            {route.name}
          </Link>
        </div>
      ))}
    </Slide>
  );
};

export default Menu;
