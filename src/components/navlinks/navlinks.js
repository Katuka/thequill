import React from "react";
import { NavLink } from "react-router-dom";

import "./navlinks.css";

const Navlinks = ({ close }) => {
  return (
    <ul className="navigation__list">
      <li className="navigation__list-item" onClick={close}>
        <NavLink to="/blogs" style={{ textDecoration: "none" }}>
          Write a blog
        </NavLink>
      </li>
      <li className="navigation__list-item" onClick={close}>
        <NavLink to="/signin" style={{ textDecoration: "none" }}>
          Signin
        </NavLink>
      </li>
      <li className="navigation__list-item" onClick={close}>
        <NavLink to="/signup" style={{ textDecoration: "none" }}>
          Signup
        </NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;
