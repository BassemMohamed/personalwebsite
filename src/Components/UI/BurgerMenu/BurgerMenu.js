import React from "react";
import { Link, useLocation } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import MainRoutes from "../../../Routes/MainRoutes";

const BurgerMenu = () => {
  let location = useLocation();

  return (
    <Menu isOpen={false} pageWrapId={"page-wrapper"}>
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
    </Menu>
  );
};

export default BurgerMenu;
