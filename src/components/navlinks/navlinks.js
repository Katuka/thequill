import React from "react";
import { NavLink } from "react-router-dom";

import "./navlinks.css";

const Navlinks = ({ close }) => {
  return (
    <ul className="navigation__list">
      <li className="navigation__list-item" onClick={close}>
        <NavLink to="/dashboard" className="link">
          Dashboard
        </NavLink>
      </li>
      <li className="navigation__list-item" onClick={close}>
        <NavLink to="/create" className="link">
          Post a blog
        </NavLink>
      </li>
      <li className="navigation__list-item" onClick={close}>
        <NavLink to="/auth/signup" className="link">
          Account
        </NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;
