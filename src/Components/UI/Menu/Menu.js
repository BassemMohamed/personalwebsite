import React from "react";
import { Link, useLocation } from "react-router-dom";
import { slide as Slide } from "react-burger-menu";
import MainRoutes from "../../../Routes/MainRoutes";

const Menu = () => {
  let { pathname } = useLocation();

  return (
    <Slide pageWrapId={"page-wrapper"}>
      {MainRoutes.map(route => {
        let className = "";
        className += pathname === route.key ? "active " : "";
        className += route.disabled ? "disabled " : "";
        return (
          <div className={className} key={route.key}>
            <Link to={route.key}>
              {route.icon}
              {route.name}
              {route.description && <span>- {route.description}</span>}
            </Link>
          </div>
        );
      })}
    </Slide>
  );
};

export default Menu;
