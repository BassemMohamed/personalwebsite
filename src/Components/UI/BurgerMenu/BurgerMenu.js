import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import MainRoutes from "../../../Routes/MainRoutes";

class BurgerMenu extends React.Component {
  render() {
    return (
      <Menu isOpen={false} pageWrapId={"page-wrapper"}>
        {MainRoutes.map(route => (
          <div key={route.key}>
            <Link to={route.key}>
              {route.icon}
              {route.name}
            </Link>
          </div>
        ))}
      </Menu>
    );
  }
}

export default BurgerMenu;
