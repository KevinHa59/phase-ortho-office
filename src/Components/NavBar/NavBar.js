import React from "react";

import "./NavBar.css";
import { Menu } from "../../Data/Menu";
import NavIconButton from "../Templates/NavButton/NavIconButton";
import Logo from "../../Images/Logo.jpg";
export default function NavBar() {
  const MenuData = Menu;
  return (
    <div className="NavBar">
      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="NavLinkContainer">
        {MenuData.map((item, index) => {
          return <NavIconButton key={index} index={index} to={item.path} subMenu={item} icon={item.icon} />;
        })}
      </div>
    </div>
  );
}
