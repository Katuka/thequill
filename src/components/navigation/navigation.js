import React from "react";
import logo from "../../img/feather.svg";
import menu from "../../img/menu.svg";
import Navlinks from "../navlinks/navlinks";

import "./navigation.css";

const Navigation = () => {
  return (
    <header className="navigation">
      <img src={logo} alt="Feather" className="navigation__logo" />
      <div className="navigation__nav">
        <Navlinks />
      </div>
      <img src={menu} alt="Menu" className="navigation__hum" />
    </header>
  );
};

export default Navigation;
