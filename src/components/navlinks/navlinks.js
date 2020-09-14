import React from "react";
import { NavLink } from "react-router-dom";

import "./navlinks.css";

const Navlinks = ({ close }) => {
  return (
    <ul className="navigation__list">
      <li className="navigation__list-item" onClick={close}>
        <NavLink to="/blogs" className="link">
          Write a blog
        </NavLink>
      </li>
      <li className="navigation__list-item" onClick={close}>
        <NavLink to="/signin" className="link">
          Signin
        </NavLink>
      </li>
      <li className="navigation__list-item" onClick={close}>
        <NavLink to="/signup" className="link">
          Signup
        </NavLink>
      </li>
      <li className="navigation__list-item" onClick={close}>
        <NavLink to="/signup" className="link">
          Signup
        </NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;
